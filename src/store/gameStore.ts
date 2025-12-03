// ==========================================
// ZUSTAND STORE - Global Game State
// ==========================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
	GameState,
	Stats,
	Quest,
	GameSettings,
	EndingType,
} from '@/data/types';
import { ConditionType, Operator, StatID } from '@/data/enum';

interface GameStore extends GameState {
	// Actions
	setCurrentChapter: (chapter: number) => void;
	setCurrentScene: (scene: string) => void;
	setCurrentDialogue: (dialogue: string) => void;
	updateStats: (stats: Partial<Stats>) => void;
	updateStat: (stat: keyof Stats, value: number) => void;
	setFlag: (key: string, value: boolean | number | string) => void;
	addToInventory: (item: string) => void;
	removeItem: (item: string) => void;
	unlockAchievement: (id: string) => void;
	completeTasks: (ids: string[]) => void;
	updateQuest: (questId: string, updates: Partial<Quest>) => void;
	incrementPlaytime: (seconds: number) => void;
	setPaused: (paused: boolean) => void;
	updateSettings: (settings: Partial<GameSettings>) => void;
	resetGame: () => void;
	setNightPhase: (isNight: boolean) => void;
	setPendingTransition: (transition: GameState['pendingTransition']) => void;
	setEnding: (ending: EndingType) => void;
	checkAchievements: () => void;
	addXP: (amount: number) => void;
	upgradeSkill: (id: string) => void;
	buyItem: (id: string) => void;
	// Reflection Quote actions
	incrementDialogueCount: () => void;
	resetDialogueCount: () => void;
	setLastReflectionCount: (count: number) => void;
	pendingReturnDialogue: string | null;
	setPendingReturnDialogue: (dialogueId: string | null) => void;
}

import { achievements } from '@/data/achievements';

const detectLanguage = (): 'vi' | 'en' => {
	try {
		const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		if (timeZone === 'Asia/Ho_Chi_Minh' || timeZone.includes('Vietnam')) {
			return 'vi';
		}
	} catch (e) {
		console.error('Failed to detect timezone:', e);
	}
	return 'en';
};

const initialState: GameState = {
	currentChapter: 1,
	currentScene: 'start',
	currentDialogue: 'intro',
	stats: {
		steelMind: 50,
		humanity: 50,
		vision: 50,
		health: 100,
		stress: 0,
		money: 500000, // Start with 500k
	},
	xp: 0,
	skills: {}, // Skill ID -> Level
	flags: {},
	inventory: [],
	achievements: [],
	completedTaskIds: [],
	quests: [],
	playtime: 0,
	isPaused: false,
	isNightPhase: false,
	pendingTransition: null,
	settings: {
		language: detectLanguage(),
		musicVolume: 0.5,
		sfxVolume: 0.5,
		textSpeed: 50,
	},
	events: [],
	ending: null,
	// Reflection Quote tracking
	dialogueCountInChapter: 0,
	lastReflectionDialogueCount: 0,
	nextReflectionTrigger: Math.floor(Math.random() * 3) + 5, // Random 5-7
	pendingReturnDialogue: null,
};

export const useGameStore = create<GameStore>()(
	persist(
		(set, get) => ({
			...initialState,

			setCurrentChapter: (chapter: number) => {
				set({ currentChapter: chapter });
			},

			setCurrentScene: (scene: string) => {
				set({ currentScene: scene });
			},

			setCurrentDialogue: (dialogue: string) => {
				set({ currentDialogue: dialogue });
			},

			updateStats: (newStats: Partial<Stats>) => {
				set((state) => ({
					stats: { ...state.stats, ...newStats },
				}));
			},

			updateStat: (stat: keyof Stats, value: number) => {
				set((state) => {
					const currentValue = state.stats[stat];
					let newValue: number;

					if (stat === StatID.MONEY) {
						// Money has no cap, can go negative or very high
						newValue = currentValue + value;
					} else {
						// Other stats capped between 0-100
						newValue = Math.max(0, Math.min(100, currentValue + value));
					}

					const newStats = {
						...state.stats,
						[stat]: newValue,
					};

					// Check for Game Over conditions
					let newEnding = state.ending;

					// Bankruptcy: Money < 0
					if (newStats.money < 0) {
						newEnding = 'BANKRUPTCY';
					}
					// Burnout: Health <= 0 or Stress >= 100
					else if (newStats.health <= 0 || newStats.stress >= 100) {
						newEnding = 'BURNOUT';
					}

					return {
						stats: newStats,
						ending: newEnding,
					};
				});
				get().checkAchievements();
			},

			setFlag: (key: string, value: boolean | number | string) => {
				set((state) => ({
					flags: { ...state.flags, [key]: value },
				}));
				get().checkAchievements();
			},

			addToInventory: (item: string) => {
				set((state) => ({
					inventory: [...state.inventory, item],
				}));
			},

			removeItem: (item: string) => {
				set((state) => ({
					inventory: state.inventory.filter((i) => i !== item),
				}));
			},

			unlockAchievement: (id: string) => {
				set((state) => {
					if (state.achievements.includes(id)) return state;
					return { achievements: [...state.achievements, id] };
				});
			},

			completeTasks: (ids: string[]) => {
				set((state) => ({
					completedTaskIds: [...state.completedTaskIds, ...ids],
				}));
			},

			updateQuest: (questId: string, updates: Partial<Quest>) => {
				set((state) => ({
					quests: state.quests.map((quest) =>
						quest.id === questId ? { ...quest, ...updates } : quest
					),
				}));
			},

			incrementPlaytime: (seconds: number) => {
				set((state) => ({
					playtime: state.playtime + seconds,
				}));
			},

			setPaused: (paused: boolean) => {
				set({ isPaused: paused });
			},

			updateSettings: (newSettings: Partial<GameSettings>) => {
				set((state) => ({
					settings: { ...state.settings, ...newSettings },
				}));
			},

			resetGame: () => {
				set({
					...initialState,
					settings: get().settings, // Keep settings
				});
			},

			setNightPhase: (isNight: boolean) => {
				set({ isNightPhase: isNight });
			},

			setPendingTransition: (transition: GameState['pendingTransition']) => {
				set({ pendingTransition: transition });
			},

			setEnding: (ending: EndingType) => {
				set({ ending });
			},

			upgradeSkill: (id: string) => {
				const state = get();
				const { skills, stats } = state;
				const { skills: allSkills } = require('@/data/skills');

				const skill = allSkills.find((s: any) => s.id === id);
				if (!skill) return;

				const currentLevel = skills[id] || 0;
				const maxLevel = skill.maxLevel || 10;

				if (currentLevel >= maxLevel) return;

				// Calculate cost: Base * 2^Level
				const cost = skill.baseCost * Math.pow(2, currentLevel);

				if (stats.money < cost) return;

				// Deduct Money
				get().updateStat(StatID.MONEY, -cost);

				// Increment Level
				const newLevel = currentLevel + 1;
				set({ skills: { ...skills, [id]: newLevel } });

				// Apply effects immediately (Base effects are applied each level)
				if (skill.effects) {
					skill.effects.forEach((effect: any) => {
						get().updateStat(effect.stat, effect.value);
					});
				}

				get().checkAchievements();
			},

			buyItem: (id: string) => {
				const state = get();
				const { stats, inventory, flags } = state;
				const { shopItems } = require('@/data/items');

				const item = shopItems.find((i: any) => i.id === id);
				if (!item) return;

				// Check Money
				if (stats.money < item.cost) return;

				// Check Max Own
				if (item.maxOwn) {
					const ownedCount = inventory.filter((i) => i === id).length;
					if (ownedCount >= item.maxOwn) return;
				}

				// Deduct Money
				get().updateStat(StatID.MONEY, -item.cost);

				// Apply Effects
				if (item.effects) {
					item.effects.forEach((effect: any) => {
						get().updateStat(effect.stat, effect.value);
					});
				}

				// Update Flag
				if (item.flagKey) {
					const currentFlagValue = flags[item.flagKey] || 0;
					if (item.flagOperation === 'increment') {
						get().setFlag(
							item.flagKey,
							(typeof currentFlagValue === 'number' ? currentFlagValue : 0) +
								(item.flagValue || 1)
						);
					} else if (item.flagOperation === 'set') {
						get().setFlag(item.flagKey, item.flagValue);
					}
				}

				// Add to Inventory (if it has maxOwn, implying it's a permanent item)
				if (item.maxOwn) {
					get().addToInventory(id);
				}

				get().checkAchievements();
			},

			addXP: (amount: number) => {
				set((state) => ({ xp: state.xp + amount }));
			},

			checkAchievements: () => {
				const state = get();
				const { stats, flags, achievements: unlocked, skills } = state;

				achievements.forEach((ach) => {
					if (unlocked.includes(ach.id)) return;
					if (!ach.conditions || ach.conditions.length === 0) return;

					const allMet = ach.conditions.every((cond) => {
						let currentValue: any;
						if (cond.type === ConditionType.STAT) {
							currentValue = stats[cond.key as StatID];
						} else if (cond.type === ConditionType.FLAG) {
							currentValue = flags[cond.key as string];
						} else if (cond.type === ConditionType.SKILL) {
							// Check if skill is unlocked (level > 0)
							currentValue = (skills[cond.key as string] || 0) > 0;
						}

						switch (cond.operator) {
							case Operator.GT:
								return currentValue > cond.value;
							case Operator.LT:
								return currentValue < cond.value;
							case Operator.GTE:
								return currentValue >= cond.value;
							case Operator.LTE:
								return currentValue <= cond.value;
							case Operator.EQUAL:
								return currentValue === cond.value;
							case Operator.NOT_EQUAL:
								return currentValue !== cond.value;
							default:
								return false;
						}
					});

					if (allMet) {
						get().unlockAchievement(ach.id);
					}
				});
			},

			incrementDialogueCount: () => {
				set((state) => ({
					dialogueCountInChapter: state.dialogueCountInChapter + 1,
				}));
			},

			resetDialogueCount: () => {
				set({
					dialogueCountInChapter: 0,
					lastReflectionDialogueCount: 0,
					nextReflectionTrigger: Math.floor(Math.random() * 3) + 5, // Random 5-7
				});
			},

			setLastReflectionCount: (count: number) => {
				set({
					lastReflectionDialogueCount: count,
					nextReflectionTrigger: Math.floor(Math.random() * 3) + 5, // Random 5-7 for next
				});
			},

			setPendingReturnDialogue: (dialogueId: string | null) => {
				set({ pendingReturnDialogue: dialogueId });
			},
		}),
		{
			name: 'devlife-storage',
			partialize: (state) => ({
				currentChapter: state.currentChapter,
				currentScene: state.currentScene,
				currentDialogue: state.currentDialogue,
				stats: state.stats,
				xp: state.xp,
				skills: state.skills,
				flags: state.flags,
				inventory: state.inventory,
				achievements: state.achievements,
				completedTaskIds: state.completedTaskIds,
				playtime: state.playtime,
				settings: state.settings,
				pendingReturnDialogue: state.pendingReturnDialogue,
			}),
		}
	)
);
