/**
 * Story Graph Generator
 * Parses all game data and generates React Flow nodes/edges
 */

import { Node, Edge, MarkerType } from 'reactflow';

// Import all data
import { chapter1, chapter1Dialogues } from '@/data/chapters/chapter1';
import { chapter2, chapter2Dialogues } from '@/data/chapters/chapter2';
import { chapter3, chapter3Dialogues } from '@/data/chapters/chapter3';
import { chapter4, chapter4Dialogues } from '@/data/chapters/chapter4';
import { chapter5, chapter5Dialogues } from '@/data/chapters/chapter5';
import { chapter6, chapter6Dialogues } from '@/data/chapters/chapter6';
import { chapter7, chapter7Dialogues } from '@/data/chapters/chapter7';
import { chapter8, chapter8Dialogues } from '@/data/chapters/chapter8';
import { chapter9, chapter9Dialogues } from '@/data/chapters/chapter9';
import { randomEvents } from '@/data/randomEvents';
import { achievements } from '@/data/achievements';
import { shopItems } from '@/data/items';
import { skills } from '@/data/skills';

import type {
	Chapter,
	DialogueNode,
	RandomEvent,
	Achievement,
	ShopItem,
	Skill,
} from '@/data/types';

// Node types for coloring
export enum StoryNodeType {
	CHAPTER = 'chapter',
	DIALOGUE = 'dialogue',
	CHOICE = 'choice',
	DREAM = 'dream',
	TODO = 'todo',
	EVENT = 'event',
	ACHIEVEMENT = 'achievement',
	ITEM = 'item',
	SKILL = 'skill',
	ENDING = 'ending',
	REFLECTION = 'reflection',
}

// Color map for node types
export const nodeColors: Record<StoryNodeType, string> = {
	[StoryNodeType.CHAPTER]: '#3b82f6', // blue
	[StoryNodeType.DIALOGUE]: '#22c55e', // green
	[StoryNodeType.CHOICE]: '#eab308', // yellow
	[StoryNodeType.DREAM]: '#a855f7', // purple
	[StoryNodeType.TODO]: '#f97316', // orange
	[StoryNodeType.EVENT]: '#ef4444', // red
	[StoryNodeType.ACHIEVEMENT]: '#14b8a6', // teal
	[StoryNodeType.ITEM]: '#ec4899', // pink
	[StoryNodeType.SKILL]: '#6366f1', // indigo
	[StoryNodeType.ENDING]: '#dc2626', // dark red
	[StoryNodeType.REFLECTION]: '#8b5cf6', // violet
};

// Extended node data
export interface StoryNodeData {
	type: StoryNodeType;
	label: string;
	labelVi: string;
	labelEn: string;
	description?: string;
	descriptionVi?: string;
	descriptionEn?: string;
	speaker?: string;
	effects?: Array<{ stat: string; value: number }>;
	chapter?: number;
	fullData?:
		| DialogueNode
		| RandomEvent
		| Achievement
		| ShopItem
		| Skill
		| Chapter;
}

// All chapters and dialogues
const allChapters = [
	chapter1,
	chapter2,
	chapter3,
	chapter4,
	chapter5,
	chapter6,
	chapter7,
	chapter8,
	chapter9,
];
const allDialogues = [
	{ chapter: 1, dialogues: chapter1Dialogues },
	{ chapter: 2, dialogues: chapter2Dialogues },
	{ chapter: 3, dialogues: chapter3Dialogues },
	{ chapter: 4, dialogues: chapter4Dialogues },
	{ chapter: 5, dialogues: chapter5Dialogues },
	{ chapter: 6, dialogues: chapter6Dialogues },
	{ chapter: 7, dialogues: chapter7Dialogues },
	{ chapter: 8, dialogues: chapter8Dialogues },
	{ chapter: 9, dialogues: chapter9Dialogues },
];

/**
 * Generate all nodes and edges for a specific chapter
 */
export function generateChapterGraph(chapterNum: number): {
	nodes: Node<StoryNodeData>[];
	edges: Edge[];
} {
	const nodes: Node<StoryNodeData>[] = [];
	const edges: Edge[] = [];

	const chapterData = allChapters[chapterNum - 1];
	const dialogueData = allDialogues[chapterNum - 1]?.dialogues || {};

	if (!chapterData) return { nodes, edges };

	// X/Y positioning helpers
	let yOffset = 0;
	const xOffset = 0;
	const nodeSpacingY = 120;
	const nodeSpacingX = 300;

	// Chapter node
	const chapterId = `chapter_${chapterNum}`;
	nodes.push({
		id: chapterId,
		type: 'storyNode',
		position: { x: xOffset, y: yOffset },
		data: {
			type: StoryNodeType.CHAPTER,
			label: chapterData.name,
			labelVi: chapterData.nameVi,
			labelEn: chapterData.nameEn,
			description: chapterData.theme,
			descriptionVi: chapterData.themeVi,
			descriptionEn: chapterData.themeEn,
			chapter: chapterNum,
			fullData: chapterData,
		},
	});
	yOffset += nodeSpacingY;

	// Track processed nodes to avoid duplicates
	const processedIds = new Set<string>();

	// Process dialogues
	Object.entries(dialogueData).forEach(([id, dialogue], index) => {
		if (processedIds.has(id)) return;
		processedIds.add(id);

		const nodeId = `dialogue_${chapterNum}_${id}`;
		const row = Math.floor(index / 5);
		const col = index % 5;

		nodes.push({
			id: nodeId,
			type: 'storyNode',
			position: {
				x: xOffset + col * nodeSpacingX,
				y: yOffset + row * nodeSpacingY,
			},
			data: {
				type: StoryNodeType.DIALOGUE,
				label: dialogue.text?.substring(0, 50) + '...' || id,
				labelVi: dialogue.textVi?.substring(0, 50) + '...' || id,
				labelEn: dialogue.textEn?.substring(0, 50) + '...' || id,
				speaker: dialogue.speaker,
				effects: dialogue.effects?.map((e) => ({
					stat: e.stat,
					value: e.value,
				})),
				chapter: chapterNum,
				fullData: dialogue,
			},
		});

		// Edge from chapter to first dialogue
		if (index === 0) {
			edges.push({
				id: `edge_${chapterId}_${nodeId}`,
				source: chapterId,
				target: nodeId,
				markerEnd: { type: MarkerType.ArrowClosed },
			});
		}

		// Edge to next dialogue
		if (dialogue.next) {
			const nextId = `dialogue_${chapterNum}_${dialogue.next}`;
			// Check if next is in another chapter
			const isNextChapter = String(dialogue.next)
				.toLowerCase()
				.includes(`ch${chapterNum + 1}`);

			edges.push({
				id: `edge_${nodeId}_${
					isNextChapter ? `chapter_${chapterNum + 1}` : nextId
				}`,
				source: nodeId,
				target: isNextChapter ? `chapter_${chapterNum + 1}` : nextId,
				markerEnd: { type: MarkerType.ArrowClosed },
				animated: isNextChapter,
				style: isNextChapter ? { stroke: '#f59e0b' } : undefined,
			});
		}

		// Process choices
		dialogue.choices?.forEach((choice, choiceIndex) => {
			const choiceId = `choice_${chapterNum}_${id}_${choice.id}`;

			nodes.push({
				id: choiceId,
				type: 'storyNode',
				position: {
					x: xOffset + col * nodeSpacingX + 150,
					y: yOffset + row * nodeSpacingY + (choiceIndex + 1) * 60,
				},
				data: {
					type: StoryNodeType.CHOICE,
					label: choice.text?.substring(0, 40) + '...' || choice.id,
					labelVi: choice.textVi?.substring(0, 40) + '...' || choice.id,
					labelEn: choice.textEn?.substring(0, 40) + '...' || choice.id,
					effects: choice.effects?.map((e) => ({
						stat: e.stat,
						value: e.value,
					})),
					chapter: chapterNum,
				},
			});

			// Edge from dialogue to choice
			edges.push({
				id: `edge_${nodeId}_${choiceId}`,
				source: nodeId,
				target: choiceId,
				style: { strokeDasharray: '5 5' },
			});

			// Edge from choice to next
			if (choice.next) {
				const choiceNextId = `dialogue_${chapterNum}_${choice.next}`;
				edges.push({
					id: `edge_${choiceId}_${choiceNextId}`,
					source: choiceId,
					target: choiceNextId,
					markerEnd: { type: MarkerType.ArrowClosed },
				});
			}
		});
	});

	// Dreams
	chapterData.nightlyEvents?.dreamQuestions?.forEach((dream, index) => {
		const dreamId = `dream_${chapterNum}_${dream.id}`;
		nodes.push({
			id: dreamId,
			type: 'storyNode',
			position: { x: -400, y: 200 + index * nodeSpacingY },
			data: {
				type: StoryNodeType.DREAM,
				label: dream.text?.substring(0, 40) + '...' || dream.id,
				labelVi: dream.textVi?.substring(0, 40) + '...' || dream.id,
				labelEn: dream.textEn?.substring(0, 40) + '...' || dream.id,
				chapter: chapterNum,
			},
		});
	});

	// Todos
	chapterData.nightlyEvents?.todoList?.forEach((todo, index) => {
		const todoId = `todo_${chapterNum}_${todo.id}`;
		nodes.push({
			id: todoId,
			type: 'storyNode',
			position: { x: -700, y: 200 + index * 80 },
			data: {
				type: StoryNodeType.TODO,
				label: todo.text?.substring(0, 40) + '...' || todo.id,
				labelVi: todo.textVi?.substring(0, 40) + '...' || todo.id,
				labelEn: todo.textEn?.substring(0, 40) + '...' || todo.id,
				chapter: chapterNum,
			},
		});
	});

	// Reflections
	chapterData.reflectionQuotes?.forEach((reflection, index) => {
		const refId = `reflection_${chapterNum}_${reflection.id}`;
		nodes.push({
			id: refId,
			type: 'storyNode',
			position: { x: -1000, y: 200 + index * 100 },
			data: {
				type: StoryNodeType.REFLECTION,
				label: reflection.text?.substring(0, 40) + '...' || reflection.id,
				labelVi: reflection.textVi?.substring(0, 40) + '...' || reflection.id,
				labelEn: reflection.textEn?.substring(0, 40) + '...' || reflection.id,
				chapter: chapterNum,
			},
		});
	});

	return { nodes, edges };
}

/**
 * Generate global nodes (events, achievements, items, skills)
 */
export function generateGlobalNodes(): {
	nodes: Node<StoryNodeData>[];
	edges: Edge[];
} {
	const nodes: Node<StoryNodeData>[] = [];
	const edges: Edge[] = [];

	let xOffset = 2000;
	let yOffset = 0;

	// Random Events
	randomEvents.forEach((event, index) => {
		nodes.push({
			id: `event_${event.id}`,
			type: 'storyNode',
			position: { x: xOffset, y: yOffset + index * 100 },
			data: {
				type: StoryNodeType.EVENT,
				label: event.name,
				labelVi: event.nameVi,
				labelEn: event.nameEn,
				descriptionVi: event.descriptionVi,
				descriptionEn: event.descriptionEn,
				chapter: event.minChapter,
				fullData: event,
			},
		});
	});

	xOffset += 400;

	// Achievements
	achievements.forEach((achievement, index) => {
		nodes.push({
			id: `achievement_${achievement.id}`,
			type: 'storyNode',
			position: { x: xOffset, y: yOffset + index * 80 },
			data: {
				type: StoryNodeType.ACHIEVEMENT,
				label: achievement.name,
				labelVi: achievement.nameVi,
				labelEn: achievement.nameEn,
				descriptionVi: achievement.descriptionVi,
				descriptionEn: achievement.descriptionEn,
				fullData: achievement,
			},
		});
	});

	xOffset += 400;

	// Items
	shopItems.forEach((item, index) => {
		nodes.push({
			id: `item_${item.id}`,
			type: 'storyNode',
			position: { x: xOffset, y: yOffset + index * 80 },
			data: {
				type: StoryNodeType.ITEM,
				label: item.name,
				labelVi: item.nameVi,
				labelEn: item.nameEn,
				descriptionVi: item.descriptionVi,
				descriptionEn: item.descriptionEn,
				fullData: item,
			},
		});
	});

	xOffset += 400;

	// Skills
	skills.forEach((skill, index) => {
		nodes.push({
			id: `skill_${skill.id}`,
			type: 'storyNode',
			position: { x: xOffset, y: yOffset + index * 80 },
			data: {
				type: StoryNodeType.SKILL,
				label: skill.name,
				labelVi: skill.nameVi,
				labelEn: skill.nameEn,
				descriptionVi: skill.descriptionVi,
				descriptionEn: skill.descriptionEn,
				fullData: skill,
			},
		});
	});

	return { nodes, edges };
}

/**
 * Generate full story graph with all chapters
 */
export function generateFullStoryGraph(): {
	nodes: Node<StoryNodeData>[];
	edges: Edge[];
} {
	let allNodes: Node<StoryNodeData>[] = [];
	let allEdges: Edge[] = [];

	// Generate each chapter with offset
	allChapters.forEach((_, index) => {
		const chapterNum = index + 1;
		const { nodes, edges } = generateChapterGraph(chapterNum);

		// Offset each chapter horizontally
		const offsetNodes = nodes.map((node) => ({
			...node,
			position: {
				x: node.position.x + index * 2000,
				y: node.position.y,
			},
		}));

		allNodes = [...allNodes, ...offsetNodes];
		allEdges = [...allEdges, ...edges];
	});

	// Add global nodes
	const { nodes: globalNodes, edges: globalEdges } = generateGlobalNodes();
	allNodes = [
		...allNodes,
		...globalNodes.map((n) => ({
			...n,
			position: { x: n.position.x + 18000, y: n.position.y },
		})),
	];
	allEdges = [...allEdges, ...globalEdges];

	// Add chapter connections
	for (let i = 1; i < 9; i++) {
		allEdges.push({
			id: `chapter_connection_${i}_${i + 1}`,
			source: `chapter_${i}`,
			target: `chapter_${i + 1}`,
			animated: true,
			style: { stroke: '#f59e0b', strokeWidth: 3 },
			markerEnd: { type: MarkerType.ArrowClosed },
		});
	}

	return { nodes: allNodes, edges: allEdges };
}
