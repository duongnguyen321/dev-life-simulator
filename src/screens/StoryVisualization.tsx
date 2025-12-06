/**
 * Story Visualization Screen
 * Interactive node-edge graph showing all game content
 */

import { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	BackgroundVariant,
	type Node,
	Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';

import StoryNode from '@/components/StoryGraph/StoryNode';
import {
	generateChapterGraph,
	generateFullStoryGraph,
	generateGlobalNodes,
	nodeColors,
	type StoryNodeData,
} from '@/utils/storyGraphGenerator';
import { applyGroupedLayout } from '@/utils/layoutUtils';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';

// Custom node types
const nodeTypes = {
	storyNode: StoryNode,
};

export default function StoryVisualization() {
	const navigate = useNavigate();
	const { settings } = useGameStore();
	const isVi = settings.language === 'vi';

	// State for chapter filter
	const [selectedChapter, setSelectedChapter] = useState<
		number | 'all' | 'global'
	>('all');
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedNode, setSelectedNode] = useState<Node<StoryNodeData> | null>(
		null
	);
	const [useAutoLayout, setUseAutoLayout] = useState(true);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	// Generate nodes/edges based on filter
	const graphData = useMemo(() => {
		if (selectedChapter === 'all') {
			return generateFullStoryGraph();
		} else if (selectedChapter === 'global') {
			return generateGlobalNodes();
		} else {
			return generateChapterGraph(selectedChapter);
		}
	}, [selectedChapter]);

	// Apply dagre layout for better visualization
	const layoutedNodes = useMemo(() => {
		if (!useAutoLayout) return graphData.nodes;

		if (selectedChapter === 'global') {
			// Simple column layout for global nodes
			return graphData.nodes;
		} else if (selectedChapter === 'all') {
			// Grouped layout for full graph
			return applyGroupedLayout(graphData.nodes, graphData.edges);
		} else {
			// Dagre layout for single chapter
			return applyGroupedLayout(graphData.nodes, graphData.edges);
		}
	}, [graphData, useAutoLayout, selectedChapter]);

	const initialNodes = layoutedNodes;
	const initialEdges = graphData.edges;

	// Filter by search term
	const filteredNodes = useMemo(() => {
		if (!searchTerm) return initialNodes;
		const term = searchTerm.toLowerCase();
		return initialNodes.filter((node) => {
			const data = node.data;
			return (
				data.label?.toLowerCase().includes(term) ||
				data.labelVi?.toLowerCase().includes(term) ||
				data.labelEn?.toLowerCase().includes(term) ||
				node.id.toLowerCase().includes(term)
			);
		});
	}, [initialNodes, searchTerm]);

	// Filter edges to only show connections between visible nodes
	const filteredEdges = useMemo(() => {
		const nodeIds = new Set(filteredNodes.map((n) => n.id));
		return initialEdges.filter(
			(e) => nodeIds.has(e.source) && nodeIds.has(e.target)
		);
	}, [initialEdges, filteredNodes]);

	const [nodes, setNodes, onNodesChange] = useNodesState(filteredNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(filteredEdges);

	// Update nodes/edges when filter changes
	useMemo(() => {
		setNodes(filteredNodes);
		setEdges(filteredEdges);
	}, [filteredNodes, filteredEdges, setNodes, setEdges]);

	// Handle node click
	const onNodeClick = useCallback(
		(_: React.MouseEvent, node: Node<StoryNodeData>) => {
			setSelectedNode(node);
		},
		[]
	);

	return (
		<div className='w-full h-full bg-gray-900'>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onNodeClick={onNodeClick}
				nodeTypes={nodeTypes}
				fitView
				minZoom={0.1}
				maxZoom={2}
				defaultEdgeOptions={{
					style: { stroke: '#64748b', strokeWidth: 2 },
				}}
			>
				<Background variant={BackgroundVariant.Dots} gap={20} color='#374151' />
				<Controls className='!bg-gray-800 !border-gray-700' />

				{/* Mobile Menu Toggle */}
				<Panel position='top-left' className='md:hidden'>
					<button
						onClick={() => setShowMobileMenu(!showMobileMenu)}
						className='px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700'
					>
						{showMobileMenu ? '✕' : '☰'}
					</button>
				</Panel>

				{/* Desktop Panel - Always visible on desktop, drawer on mobile */}
				<Panel
					position='top-left'
					className={`fixed md:relative top-0 left-0 z-50 flex flex-col gap-2 transition-transform duration-300 max-h-screen md:max-h-[90vh] overflow-y-auto bg-gray-900 md:bg-transparent p-4 md:p-0 w-80 md:w-auto ${
						showMobileMenu
							? 'translate-x-0'
							: '-translate-x-full md:translate-x-0'
					}`}
				>
					{/* Close button - Mobile only */}
					<button
						onClick={() => setShowMobileMenu(false)}
						className='md:hidden self-end px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 mb-2'
					>
						✕ {isVi ? 'Đóng' : 'Close'}
					</button>
					{/* Back button */}
					<button
						onClick={() => navigate('/')}
						className='px-3 py-2 md:px-4 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 flex items-center gap-2 text-sm md:text-base'
					>
						← {isVi ? 'Menu' : 'Back'}
					</button>

					{/* Title */}
					<div className='bg-gray-800/90 backdrop-blur px-3 py-2 md:px-4 rounded-lg border border-gray-600'>
						<h1 className='text-lg md:text-xl font-bold text-white'>
							🗺️ {isVi ? 'Bản Đồ Cốt Truyện' : 'Story Map'}
						</h1>
						<p className='text-xs md:text-sm text-gray-400'>
							{nodes.length} {isVi ? 'nút' : 'nodes'} • {edges.length}{' '}
							{isVi ? 'kết nối' : 'edges'}
						</p>
					</div>

					{/* Search */}
					<input
						type='text'
						placeholder={isVi ? '🔍 Tìm kiếm...' : '🔍 Search...'}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='px-3 py-2 md:px-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none text-sm md:text-base'
					/>

					{/* Chapter filter */}
					<div className='flex flex-wrap gap-1 max-w-full overflow-x-auto'>
						<button
							onClick={() => setSelectedChapter('all')}
							className={`px-3 py-1 rounded text-sm ${
								selectedChapter === 'all'
									? 'bg-blue-600 text-white'
									: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
							}`}
						>
							{isVi ? 'Tất cả' : 'All'}
						</button>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ch) => (
							<button
								key={ch}
								onClick={() => setSelectedChapter(ch)}
								className={`px-3 py-1 rounded text-sm ${
									selectedChapter === ch
										? 'bg-blue-600 text-white'
										: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
								}`}
							>
								Ch.{ch}
							</button>
						))}
						<button
							onClick={() => setSelectedChapter('global')}
							className={`px-3 py-1 rounded text-sm ${
								selectedChapter === 'global'
									? 'bg-orange-600 text-white'
									: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
							}`}
						>
							🌐 {isVi ? 'Toàn cục' : 'Global'}
						</button>
						<button
							onClick={() => setUseAutoLayout(!useAutoLayout)}
							className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm whitespace-nowrap ${
								useAutoLayout
									? 'bg-green-600 text-white'
									: 'bg-gray-700 text-gray-300'
							}`}
						>
							📐 Auto
						</button>
					</div>

					{/* Legend */}
					<div className='bg-gray-800/90 backdrop-blur p-2 md:p-3 rounded-lg border border-gray-600'>
						<div className='text-xs text-gray-400 mb-1 md:mb-2 font-semibold'>
							{isVi ? 'CHÚ GIẢI' : 'LEGEND'}
						</div>
						<div className='grid grid-cols-2 md:grid-cols-2 gap-1 text-xs'>
							{Object.entries(nodeColors).map(([type, color]) => (
								<div key={type} className='flex items-center gap-1'>
									<div
										className='w-3 h-3 rounded'
										style={{ backgroundColor: color }}
									/>
									<span className='text-gray-300 capitalize'>{type}</span>
								</div>
							))}
						</div>
					</div>
				</Panel>

				{/* Right Panel - Node Details */}
				{selectedNode && (
					<Panel
						position='top-right'
						className='max-w-[90vw] md:max-w-sm max-h-[70vh] overflow-y-auto'
					>
						<div className='bg-gray-800/95 backdrop-blur p-3 md:p-4 rounded-lg border border-gray-600'>
							<div className='flex justify-between items-start mb-3'>
								<h2 className='text-lg font-bold text-white'>
									{isVi ? 'Chi tiết Node' : 'Node Details'}
								</h2>
								<button
									onClick={() => setSelectedNode(null)}
									className='text-gray-400 hover:text-white'
								>
									✕
								</button>
							</div>

							<div className='space-y-2 text-sm'>
								<div>
									<span className='text-gray-400'>ID:</span>
									<span className='text-white ml-2 font-mono text-xs'>
										{selectedNode.id}
									</span>
								</div>
								<div>
									<span className='text-gray-400'>
										{isVi ? 'Loại' : 'Type'}:
									</span>
									<span
										className='ml-2 px-2 py-0.5 rounded text-white text-xs'
										style={{
											backgroundColor: nodeColors[selectedNode.data.type],
										}}
									>
										{selectedNode.data.type}
									</span>
								</div>
								<div>
									<span className='text-gray-400'>🇻🇳 Tiếng Việt:</span>
									<p className='text-white mt-1'>{selectedNode.data.labelVi}</p>
								</div>
								<div>
									<span className='text-gray-400'>🇬🇧 English:</span>
									<p className='text-white mt-1'>{selectedNode.data.labelEn}</p>
								</div>
								{selectedNode.data.speaker && (
									<div>
										<span className='text-gray-400'>
											{isVi ? 'Người nói' : 'Speaker'}:
										</span>
										<span className='text-white ml-2'>
											{selectedNode.data.speaker}
										</span>
									</div>
								)}
								{selectedNode.data.effects &&
									selectedNode.data.effects.length > 0 && (
										<div>
											<span className='text-gray-400'>
												{isVi ? 'Hiệu ứng' : 'Effects'}:
											</span>
											<div className='flex flex-wrap gap-1 mt-1'>
												{selectedNode.data.effects.map((effect, i) => (
													<span
														key={i}
														className={`px-2 py-0.5 rounded text-xs ${
															effect.value > 0 ? 'bg-green-600' : 'bg-red-600'
														}`}
													>
														{effect.stat}: {effect.value > 0 ? '+' : ''}
														{effect.value}
													</span>
												))}
											</div>
										</div>
									)}
							</div>
						</div>
					</Panel>
				)}
			</ReactFlow>
		</div>
	);
}
