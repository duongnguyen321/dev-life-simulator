// ==========================================
// TYPE DEFINITIONS FOR DEVLIFE SIMULATOR
// ==========================================

// Hidden Stats System
export interface Stats {
	steelMind: number; // 0-100: Logic/Stoicism
	humanity: number; // 0-100: Empathy/Connection
	vision: number; // 0-100: System Thinking/Ambition
	health: number; // 0-100
	stress: number; // 0-100
	money: number;
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
		sfxVol?: number;
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
	stat: 'steelMind' | 'humanity' | 'vision' | 'health' | 'stress' | 'money';
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
	type: 'stat' | 'flag' | 'item' | 'skill';
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
	nightlyEvents?: NightlyEvents;
}

// Nightly Events
export interface NightlyEvents {
	todoList: TodoTask[];
	dreamQuestions: DreamQuestion[];
}

// Todo Task
export interface TodoTask {
	id: string;
	text: string;
	textVi: string;
	textEn: string;
	effects?: StatsEffect[];
	cost?: {
		money?: number;
		health?: number;
		stress?: number;
		humanity?: number;
		vision?: number;
		steelMind?: number;
	};
	reward?: {
		money?: number;
		health?: number;
		stress?: number;
		humanity?: number;
		vision?: number;
		steelMind?: number;
	};
}

// Dream Question
export interface DreamQuestion {
	id: string;
	text: string;
	textVi: string;
	textEn: string;
	choices: DialogueChoice[];
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
	conditions?: Condition[]; // Auto-unlock conditions
}

// Random Event
export interface RandomEvent {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	probability: number; // 0-1
	conditions?: Condition[];
	choices: DialogueChoice[];
}

// Skill Definition
export interface Skill {
	id: string;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	branch: 'coding' | 'soft' | 'life';
	cost: number; // XP cost
	effects?: StatsEffect[];
	requiredSkills?: string[]; // IDs of prerequisite skills
}

// Game State
export interface GameState {
	currentChapter: number;
	currentScene: string;
	currentDialogue: string;
	stats: Stats;
	xp: number;
	skills: string[]; // Unlocked skill IDs
	flags: Record<string, boolean | number | string>;
	inventory: string[];
	achievements: string[];
	completedTaskIds: string[];
	quests: Quest[];
	playtime: number;
	isPaused: boolean;
	isNightPhase: boolean;
	pendingTransition: {
		chapterId: number;
		sceneId: string;
		dialogueId: string;
	} | null;
	settings: GameSettings;
	events: RandomEvent[];
	ending: EndingType | null;
}

// Game Settings (Language, Volume, Text Speed)
export interface GameSettings {
	language: 'en' | 'vi';
	musicVolume: number; // 0-1
	sfxVolume: number; // 0-1
	textSpeed: number; // 0-100
}

// Ending Type
export type EndingType =
	| 'SUCCESS' // Brilliant success - wealthy and famous
	| 'SOULLESS_TYCOON' // Wealthy but lost humanity
	| 'BANKRUPTCY' // Money went negative
	| 'BURNOUT' // Health/stress critical
	| 'LEGACY' // Built lasting impact
	| 'BALANCED' // Healthy work-life balance
	| 'TRAGEDY'; // Lost what mattered

// Ending Definition
export interface EndingDefinition {
	id: EndingType;
	priority: number; // Higher priority is checked first
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	condition: (stats: Stats, flags: Record<string, any>) => boolean;
	imageUrl?: string;
}
