// ==========================================
// ZUSTAND STORE - Global Game State
// ==========================================

import { create } from 'zustand';
import type { GameState, Stats, Quest, GameSettings } from '@/data/types';

interface GameStore extends GameState {
	// Actions
	setChapter: (chapter: number) => void;
	setScene: (scene: string) => void;
	setDialogue: (dialogue: string) => void;
	updateStats: (stats: Partial<Stats>) => void;
	setFlag: (key: string, value: boolean | number | string) => void;
	addItem: (item: string) => void;
	removeItem: (item: string) => void;
	unlockAchievement: (id: string) => void;
	updateQuest: (questId: string, updates: Partial<Quest>) => void;
	incrementPlaytime: (seconds: number) => void;
	setPaused: (paused: boolean) => void;
	updateSettings: (settings: Partial<GameSettings>) => void;
	reset: () => void;
}

const initialState: GameState = {
	currentChapter: 1,
	currentScene: 'start',
	currentDialogue: 'intro',
	stats: {
		steelMind: 50,
		humanity: 50,
		vision: 50,
	},
	flags: {},
	inventory: [],
	achievements: [],
	quests: [],
	playtime: 0,
	isPaused: false,
	settings: {
		language: 'vi',
		musicVolume: 0.6,
		sfxVolume: 0.5,
		textSpeed: 50,
		autoAdvance: false,
		skipRead: false,
	},
};

export const useGameStore = create<GameStore>((set) => ({
	...initialState,

	setChapter: (chapter) => set({ currentChapter: chapter }),

	setScene: (scene) => set({ currentScene: scene }),

	setDialogue: (dialogue) => set({ currentDialogue: dialogue }),

	updateStats: (newStats) =>
		set((state) => ({
			stats: { ...state.stats, ...newStats },
		})),

	setFlag: (key, value) =>
		set((state) => ({
			flags: { ...state.flags, [key]: value },
		})),

	addItem: (item) =>
		set((state) => ({
			inventory: [...state.inventory, item],
		})),

	removeItem: (item) =>
		set((state) => ({
			inventory: state.inventory.filter((i) => i !== item),
		})),

	unlockAchievement: (id) =>
		set((state) => {
			if (state.achievements.includes(id)) return state;
			return { achievements: [...state.achievements, id] };
		}),

	updateQuest: (questId, updates) =>
		set((state) => ({
			quests: state.quests.map((quest) =>
				quest.id === questId ? { ...quest, ...updates } : quest
			),
		})),

	incrementPlaytime: (seconds) =>
		set((state) => ({
			playtime: state.playtime + seconds,
		})),

	setPaused: (paused) => set({ isPaused: paused }),

	updateSettings: (newSettings) =>
		set((state) => ({
			settings: { ...state.settings, ...newSettings },
		})),

	reset: () => set(initialState),
}));
