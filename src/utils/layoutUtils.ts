/**
 * Dagre Layout Utility for React Flow
 * Auto-arranges nodes in a hierarchical layout
 */

import dagre from 'dagre';
import { type Node, type Edge, Position } from 'reactflow';
import { type StoryNodeData } from './storyGraphGenerator';

const NODE_WIDTH = 220;
const NODE_HEIGHT = 80;

/**
 * Apply dagre layout to nodes and edges
 * This creates a clean hierarchical layout without overlapping
 */
export function applyDagreLayout(
	nodes: Node<StoryNodeData>[],
	edges: Edge[],
	direction: 'TB' | 'LR' | 'BT' | 'RL' = 'LR'
): Node<StoryNodeData>[] {
	if (nodes.length === 0) return nodes;

	const dagreGraph = new dagre.graphlib.Graph();
	dagreGraph.setDefaultEdgeLabel(() => ({}));

	// Configure layout
	dagreGraph.setGraph({
		rankdir: direction,
		nodesep: 80, // Horizontal spacing between nodes
		ranksep: 150, // Vertical spacing between ranks
		marginx: 50,
		marginy: 50,
		acyclicer: 'greedy',
		ranker: 'tight-tree',
	});

	// Add nodes to dagre graph
	nodes.forEach((node) => {
		dagreGraph.setNode(node.id, {
			width: NODE_WIDTH,
			height: NODE_HEIGHT,
		});
	});

	// Add edges to dagre graph
	edges.forEach((edge) => {
		// Only add edge if both nodes exist
		if (dagreGraph.hasNode(edge.source) && dagreGraph.hasNode(edge.target)) {
			dagreGraph.setEdge(edge.source, edge.target);
		}
	});

	// Apply layout
	dagre.layout(dagreGraph);

	// Update node positions
	const layoutedNodes = nodes.map((node) => {
		const nodeWithPosition = dagreGraph.node(node.id);

		if (!nodeWithPosition) {
			return node;
		}

		// Dagre centers nodes, we need top-left corner
		return {
			...node,
			position: {
				x: nodeWithPosition.x - NODE_WIDTH / 2,
				y: nodeWithPosition.y - NODE_HEIGHT / 2,
			},
			// Set handle positions based on direction
			sourcePosition: direction === 'LR' ? Position.Right : Position.Bottom,
			targetPosition: direction === 'LR' ? Position.Left : Position.Top,
		};
	});

	return layoutedNodes;
}

/**
 * Group nodes by type and apply separate layouts
 * This keeps related nodes together
 */
export function applyGroupedLayout(
	nodes: Node<StoryNodeData>[],
	edges: Edge[]
): Node<StoryNodeData>[] {
	// Separate main story nodes from side content
	const mainNodes = nodes.filter((n) =>
		['chapter', 'dialogue', 'choice'].includes(n.data.type)
	);
	const sideNodes = nodes.filter(
		(n) => !['chapter', 'dialogue', 'choice'].includes(n.data.type)
	);

	// Layout main story
	const mainEdges = edges.filter(
		(e) =>
			mainNodes.some((n) => n.id === e.source) &&
			mainNodes.some((n) => n.id === e.target)
	);
	const layoutedMain = applyDagreLayout(mainNodes, mainEdges, 'LR');

	// Find bounds of main layout
	const maxX = Math.max(...layoutedMain.map((n) => n.position.x), 0);

	// Position side nodes in columns to the left
	const dreamNodes = sideNodes.filter((n) => n.data.type === 'dream');
	const todoNodes = sideNodes.filter((n) => n.data.type === 'todo');
	const reflectionNodes = sideNodes.filter((n) => n.data.type === 'reflection');
	const eventNodes = sideNodes.filter((n) => n.data.type === 'event');
	const achievementNodes = sideNodes.filter(
		(n) => n.data.type === 'achievement'
	);
	const itemNodes = sideNodes.filter((n) => n.data.type === 'item');
	const skillNodes = sideNodes.filter((n) => n.data.type === 'skill');

	// Position side nodes in vertical columns
	const positionColumn = (
		nodes: Node<StoryNodeData>[],
		xOffset: number,
		yStart: number = 0
	) => {
		return nodes.map((node, index) => ({
			...node,
			position: {
				x: xOffset,
				y: yStart + index * 100,
			},
		}));
	};

	const layoutedSide = [
		...positionColumn(reflectionNodes, -600),
		...positionColumn(dreamNodes, -400),
		...positionColumn(todoNodes, -200),
		...positionColumn(eventNodes, maxX + 400),
		...positionColumn(achievementNodes, maxX + 700),
		...positionColumn(itemNodes, maxX + 1000),
		...positionColumn(skillNodes, maxX + 1300),
	];

	return [...layoutedMain, ...layoutedSide];
}
