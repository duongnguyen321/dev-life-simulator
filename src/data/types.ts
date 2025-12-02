// ==========================================
// TYPE DEFINITIONS FOR DEVLIFE SIMULATOR
// ==========================================

// Hidden Stats System
export interface Stats {
	steelMind: number; // 0-100: Logic/Stoicism
	humanity: number; // 0-100: Empathy/Connection
	vision: number; // 0-100: System Thinking/Ambition
}

// Save Data Structure
export interface SaveData {
	version: string;
	playerName: string;
	chapter: number;
	scene: string;
	stats: Stats;
	inventory: string[];
	flags: Record<string, boolean | number | string>;
	achievements: string[];
	playtime: number; // in seconds
	timestamp: number;
}

// Character Definition
export interface Character {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	role: string; // e.g., "The Deprecated Hero", "The Stable Server"
	description: string;
	sprites: {
		idle?: string;
		happy?: string;
		sad?: string;
		angry?: string;
		neutral?: string;
	};
}

// Dialogue Node
export interface DialogueNode {
	id: string;
	speaker?: string; // Character ID
	text: string;
	textVi: string;
	textEn: string;
	choices?: DialogueChoice[];
	effects?: StatsEffect[];
	flags?: FlagChange[];
	next?: string; // Next dialogue node ID
	audio?: {
		music?: string;
		sfx?: string;
	};
}

// Dialogue Choice
export interface DialogueChoice {
	id: string;
	text: string;
	textVi: string;
	textEn: string;
	effects?: StatsEffect[];
	flags?: FlagChange[];
	next: string; // Next dialogue node ID
	condition?: Condition; // Only show if condition met
}

// Stats Effect
export interface StatsEffect {
	stat: 'steelMind' | 'humanity' | 'vision';
	value: number; // Can be positive or negative
	description?: string;
}

// Flag Change
export interface FlagChange {
	key: string;
	value: boolean | number | string;
}

// Condition for choices/events
export interface Condition {
	type: 'stat' | 'flag' | 'item';
	key: string;
	operator: '>' | '<' | '>=' | '<=' | '==' | '!=';
	value: number | boolean | string;
}

// Scene Definition
export interface Scene {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	background: string; // Path to background image
	music?: string; // Path to background music
	dialogueStart: string; // Starting dialogue node ID
}

// Chapter Definition
export interface Chapter {
	id: number;
	name: string;
	nameVi: string;
	nameEn: string;
	ageRange: string; // e.g., "0-10 tuổi"
	theme: string;
	themeVi: string;
	themeEn: string;
	scenes: Scene[];
	unlockCondition?: Condition;
}

// Quest Definition
export interface Quest {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	chapter: number;
	type: 'main' | 'side';
	objectives: QuestObjective[];
	rewards?: {
		stats?: StatsEffect[];
		items?: string[];
		achievements?: string[];
	};
	status: 'locked' | 'active' | 'completed' | 'failed';
}

// Quest Objective
export interface QuestObjective {
	id: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	completed: boolean;
}

// Achievement Definition
export interface Achievement {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	icon?: string;
	secret: boolean;
	unlocked: boolean;
	unlockedAt?: number; // timestamp
}

// Random Event
export interface RandomEvent {
	id: string;
	name: string;
	description: string;
	probability: number; // 0-1
	conditions?: Condition[];
	choices: DialogueChoice[];
}

// Game State
export interface GameState {
	currentChapter: number;
	currentScene: string;
	currentDialogue: string;
	stats: Stats;
	flags: Record<string, boolean | number | string>;
	inventory: string[];
	achievements: string[];
	quests: Quest[];
	playtime: number;
	isPaused: boolean;
	settings: GameSettings;
}

// Game Settings
export interface GameSettings {
	language: 'vi' | 'en';
	musicVolume: number; // 0-1
	sfxVolume: number; // 0-1
	textSpeed: number; // 0-100
	autoAdvance: boolean;
	skipRead: boolean;
}

// Ending Type
export type EndingType =
	| 'true-ending' // Best ending: High humanity, vision, balanced steel mind
	| 'machine-ending' // Steel Mind > 90
	| 'pushover-ending' // Humanity > 90
	| 'dreamer-ending' // Vision > 90
	| 'failure-ending' // Failed critical choices
	| 'normal-ending'; // Balanced but not perfect
