import { motion } from 'framer-motion';
import type { Stats } from '@/data/types';

interface StatsBarProps {
	stats: Stats;
	collapsed?: boolean;
}

export default function StatsBar({ stats, collapsed = false }: StatsBarProps) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			className='stats-bar bg-bg-secondary border-4 border-steel-mind p-4 rounded-lg'
			style={{ minWidth: collapsed ? '60px' : '250px' }}
		>
			{!collapsed && (
				<div className='flex flex-col gap-3'>
					{/* Steel Mind */}
					<StatItem
						name='Steel Mind'
						nameVi='Tinh Thần Thép'
						value={stats.steelMind}
						color='#4a90e2'
					/>

					{/* Humanity */}
					<StatItem
						name='Humanity'
						nameVi='Nhân Tính'
						value={stats.humanity}
						color='#f56565'
					/>

					{/* Vision */}
					<StatItem
						name='Vision'
						nameVi='Tầm Nhìn'
						value={stats.vision}
						color='#805ad5'
					/>

					{/* Health */}
					<StatItem
						name='Health'
						nameVi='Sức Khỏe'
						value={stats.health}
						color='#48bb78'
					/>

					{/* Stress */}
					<StatItem
						name='Stress'
						nameVi='Căng Thẳng'
						value={stats.stress}
						color='#e53e3e'
					/>

					{/* Money */}
					<div className='stat-item mt-2 pt-2 border-t border-gray-700'>
						<div className='flex justify-between items-center'>
							<span
								className='text-xs text-text-primary'
								style={{ fontSize: '0.625rem' }}
							>
								Tiền Bạc
							</span>
							<span className='text-xs text-yellow-400 font-bold'>
								${stats.money.toLocaleString()}
							</span>
						</div>
					</div>
				</div>
			)}

			{collapsed && (
				<div className='flex flex-col gap-2 items-center'>
					<div className='w-8 h-8 rounded-full bg-steel-mind' />
					<div className='w-8 h-8 rounded-full bg-humanity' />
					<div className='w-8 h-8 rounded-full bg-vision' />
				</div>
			)}
		</motion.div>
	);
}

// Individual Stat Item
interface StatItemProps {
	name: string;
	nameVi: string;
	value: number;
	color: string;
}

function StatItem({ name: _name, nameVi, value, color }: StatItemProps) {
	return (
		<div className='stat-item'>
			<div className='flex justify-between items-center mb-1'>
				<span
					className='text-xs text-text-primary'
					style={{ fontSize: '0.625rem' }}
				>
					{nameVi}
				</span>
				<span className='text-xs text-text-primary font-bold'>{value}</span>
			</div>
			<div className='stat-bar-bg w-full h-2 bg-bg-primary rounded-full overflow-hidden'>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: `${value}%` }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className='stat-bar-fill h-full rounded-full'
					style={{ backgroundColor: color }}
				/>
			</div>
		</div>
	);
}
