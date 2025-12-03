import {
	Chapter1DialogueID,
	Chapter2DialogueID,
	Chapter3DialogueID,
	Chapter4DialogueID,
	Chapter5DialogueID,
	Chapter6DialogueID,
	Chapter7DialogueID,
	Chapter8DialogueID,
	Chapter9DialogueID,
	AchievementID,
	EndingID,
	ItemID,
	SkillID,
	RandomEventID,
	Chapter1SceneID,
	Chapter1TodoID,
	Chapter2SceneID,
	Chapter2TodoID,
	Chapter3SceneID,
	Chapter3TodoID,
	Chapter4SceneID,
	Chapter4TodoID,
	Chapter5SceneID,
	Chapter5TodoID,
	Chapter6SceneID,
	Chapter6TodoID,
	Chapter7SceneID,
	Chapter7TodoID,
	Chapter8SceneID,
	Chapter8TodoID,
	Chapter9SceneID,
	Chapter9TodoID,
	StatID,
	FlagID,
	ConditionType,
	Operator,
} from './enum';

export type SceneID =
	| string
	| Chapter1SceneID
	| Chapter2SceneID
	| Chapter3SceneID
	| Chapter4SceneID
	| Chapter5SceneID
	| Chapter6SceneID
	| Chapter7SceneID
	| Chapter8SceneID
	| Chapter9SceneID;
export type TodoID =
	| string
	| Chapter1TodoID
	| Chapter2TodoID
	| Chapter3TodoID
	| Chapter4TodoID
	| Chapter5TodoID
	| Chapter6TodoID
	| Chapter7TodoID
	| Chapter8TodoID
	| Chapter9TodoID;
export type DreamID = string;
export type DreamChoiceID = string;
export type ReflectionID = string;
export type ReflectionChoiceID = string;
export type DialogueID =
	| string
	| Chapter1DialogueID
	| Chapter2DialogueID
	| Chapter3DialogueID
	| Chapter4DialogueID
	| Chapter5DialogueID
	| Chapter6DialogueID
	| Chapter7DialogueID
	| Chapter8DialogueID
	| Chapter9DialogueID;

// ==========================================
// TYPE DEFINITIONS FOR DEVLIFE SIMULATOR
// ==========================================

// Hidden Stats System
export type Stats = {
	[key in StatID]: number;
};

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
	preview?: string; // Last dialogue text
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
	id?: DialogueID; // Optional - can be inferred from Record key
	speaker?: string; // Character ID
	text: string;
	textVi: string;
	textEn: string;
	choices?: DialogueChoice[];
	effects?: StatsEffect[];
	flags?: FlagChange[];
	next?:
		| string
		| Chapter1DialogueID
		| Chapter2DialogueID
		| Chapter3DialogueID
		| Chapter4DialogueID
		| Chapter5DialogueID
		| Chapter6DialogueID
		| Chapter7DialogueID
		| Chapter8DialogueID
		| Chapter9DialogueID; // Next dialogue node ID
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
	next:
		| string
		| Chapter1DialogueID
		| Chapter2DialogueID
		| Chapter3DialogueID
		| Chapter4DialogueID
		| Chapter5DialogueID
		| Chapter6DialogueID
		| Chapter7DialogueID
		| Chapter8DialogueID
		| Chapter9DialogueID; // Next dialogue node ID
	condition?: Condition; // Only show if condition met
}

// Stats Effect
export interface StatsEffect {
	stat: StatID;
	value: number; // Can be positive or negative
	description?: string;
}

// Flag Change
export interface FlagChange {
	key: FlagID | string;
	value: boolean | number | string;
}

// Condition for choices/events
export interface Condition {
	type: ConditionType;
	key: string | StatID | FlagID;
	operator: Operator;
	value: number | boolean | string;
}

// Scene Definition
export interface Scene {
	id: SceneID;
	name: string;
	nameVi: string;
	nameEn: string;
	background: string; // Path to background image
	music?: string; // Path to background music
	dialogueStart:
		| string
		| Chapter1DialogueID
		| Chapter2DialogueID
		| Chapter3DialogueID
		| Chapter4DialogueID
		| Chapter5DialogueID
		| Chapter6DialogueID
		| Chapter7DialogueID
		| Chapter8DialogueID
		| Chapter9DialogueID; // Starting dialogue node ID
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
	reflectionQuotes?: ReflectionQuote[]; // 5-10 self-reflection quotes per chapter
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
	id: DreamID;
	text: string;
	textVi: string;
	textEn: string;
	choices: DialogueChoice[];
}

// Reflection Quote - Self-reflection thoughts during gameplay
export interface ReflectionQuote {
	id: ReflectionID;
	text: string;
	textVi: string;
	textEn: string;
	type: ConditionType; // Type of reflection
	choices: DialogueChoice[]; // Choices like "nghỉ ngơi thôi", "hôm nay là một ngày dài"
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
	id: AchievementID;
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
	id: RandomEventID;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	probability: number; // 0-1
	conditions?: Condition[];
	choices: DialogueChoice[];
	minChapter?: number; // Event only from this chapter onward
	maxChapter?: number; // Event only until this chapter
}

// Skill Definition
export interface Skill {
	id: SkillID;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	branch: 'coding' | 'soft' | 'life';
	baseCost: number; // Money cost for level 1
	maxLevel?: number; // Default 10
	effects?: StatsEffect[]; // Effects per level
	requiredSkills?: string[]; // IDs of prerequisite skills
}

export interface ShopItem {
	id: ItemID;
	name: string;
	nameVi: string;
	nameEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	cost: number;
	effects?: StatsEffect[];
	maxOwn?: number; // Limit number of items owned (e.g. 1 Guitar)
	flagKey?: FlagID; // Flag to update on purchase
	flagOperation?: 'increment' | 'set'; // How to update flag
	flagValue?: any; // Value to set or increment by
}

// Game State
export interface GameState {
	currentChapter: number;
	currentScene: string;
	currentDialogue: string;
	stats: Stats;
	xp: number;
	skills: Record<string, number>; // Skill ID -> Level
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
	// Reflection Quote tracking
	dialogueCountInChapter: number; // Count dialogues in current chapter
	lastReflectionDialogueCount: number; // Last dialogue count when reflection was shown
	nextReflectionTrigger: number; // Random 5-7, when to trigger next reflection
	pendingReturnDialogue: string | null; // Dialogue to return to after reflection
	triggerSleepAction: boolean; // Trigger sleep action from GameFlow
	// Random Events
	pendingRandomEvent: RandomEvent | null; // Event to display
	eventQueue: string[]; // Queue of event IDs to show
	eventsSeen: string[]; // Track for achievements
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
	id: EndingID;
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
