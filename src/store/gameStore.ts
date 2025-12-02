// ==========================================
// ZUSTAND STORE - Global Game State
// ==========================================

import { create } from 'zustand';
import type { GameState, Stats, Quest, GameSettings } from '@/data/types';

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
}

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
		money: 1000,
	},
	xp: 0,
	skills: [],
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
		language: 'vi',
		musicVolume: 0.6,
		sfxVolume: 0.5,
		textSpeed: 50,
		autoAdvance: false,
		skipRead: false,
	},
};

export const useGameStore = create<GameStore>((set, get) => ({
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
		set((state) => ({
			stats: {
				...state.stats,
				[stat]: Math.max(0, Math.min(100, state.stats[stat] + value)),
			},
		}));
	},

	setFlag: (key: string, value: boolean | number | string) => {
		set((state) => ({
			flags: { ...state.flags, [key]: value },
		}));
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
}));
