/**
 * Custom Story Node Component for React Flow
 */

import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import {
	type StoryNodeData,
	nodeColors,
	StoryNodeType,
} from '@/utils/storyGraphGenerator';

function StoryNodeComponent({ data, selected }: NodeProps<StoryNodeData>) {
	const bgColor = nodeColors[data.type] || '#64748b';

	// Icon by type
	const icons: Record<StoryNodeType, string> = {
		[StoryNodeType.CHAPTER]: '📖',
		[StoryNodeType.DIALOGUE]: '💬',
		[StoryNodeType.CHOICE]: '🔀',
		[StoryNodeType.DREAM]: '🌙',
		[StoryNodeType.TODO]: '✅',
		[StoryNodeType.EVENT]: '⚡',
		[StoryNodeType.ACHIEVEMENT]: '🏆',
		[StoryNodeType.ITEM]: '🎁',
		[StoryNodeType.SKILL]: '⚙️',
		[StoryNodeType.ENDING]: '🎬',
		[StoryNodeType.REFLECTION]: '💭',
	};

	return (
		<div
			className={`
        px-3 py-2 rounded-lg shadow-lg border-2 min-w-[180px] max-w-[280px]
        transition-all duration-200
        ${
					selected
						? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900 scale-105'
						: ''
				}
      `}
			style={{
				backgroundColor: bgColor,
				borderColor: selected ? '#fff' : 'rgba(255,255,255,0.2)',
			}}
		>
			{/* Input handle */}
			<Handle
				type='target'
				position={Position.Left}
				className='w-3 h-3 !bg-white border-2'
				style={{ borderColor: bgColor }}
			/>

			{/* Header */}
			<div className='flex items-center gap-2 mb-1'>
				<span className='text-lg'>{icons[data.type]}</span>
				<span className='text-xs font-bold uppercase text-white/80'>
					{data.type}
				</span>
				{data.chapter && (
					<span className='text-xs bg-black/30 px-1.5 py-0.5 rounded text-white/70'>
						Ch.{data.chapter}
					</span>
				)}
			</div>

			{/* Label */}
			<div className='text-sm font-medium text-white leading-tight mb-1 line-clamp-2'>
				{data.labelVi || data.label}
			</div>

			{/* Speaker badge */}
			{data.speaker && (
				<div className='text-xs text-white/60 italic'>👤 {data.speaker}</div>
			)}

			{/* Effects */}
			{data.effects && data.effects.length > 0 && (
				<div className='flex flex-wrap gap-1 mt-1'>
					{data.effects.slice(0, 3).map((effect, i) => (
						<span
							key={i}
							className={`text-xs px-1.5 py-0.5 rounded ${
								effect.value > 0 ? 'bg-green-500/40' : 'bg-red-500/40'
							}`}
						>
							{effect.stat}: {effect.value > 0 ? '+' : ''}
							{effect.value}
						</span>
					))}
				</div>
			)}

			{/* Output handle */}
			<Handle
				type='source'
				position={Position.Right}
				className='w-3 h-3 !bg-white border-2'
				style={{ borderColor: bgColor }}
			/>
		</div>
	);
}

export default memo(StoryNodeComponent);
