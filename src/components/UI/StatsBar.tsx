import { motion, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
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
			className='stats-bar bg-bg-secondary border-4 border-steel-mind p-4 rounded-lg shadow-xl'
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
							<MoneyDisplay value={stats.money} />
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
	const [displayValue, setDisplayValue] = useState(value);
	const [flashColor, setFlashColor] = useState<string | null>(null);
	const prevValueRef = useRef(value);

	useEffect(() => {
		if (value !== prevValueRef.current) {
			const diff = value - prevValueRef.current;
			// Flash green for increase, red for decrease (except Stress, which is reversed)
			// Actually, let's keep it simple: Green = Good, Red = Bad?
			// Or just Green = Increase, Red = Decrease.
			// Let's do: Green = Increase, Red = Decrease.
			// For Stress: Increase = Red, Decrease = Green?
			// The user just said "effect increase/decrease number".
			// Let's stick to Green = Up, Red = Down for now, maybe invert for Stress if needed.
			// Actually, for Stress, Up is usually Bad (Red), Down is Good (Green).
			// For others, Up is Good (Green), Down is Bad (Red).

			let isGood = diff > 0;
			if (_name === 'Stress') isGood = diff < 0;

			setFlashColor(isGood ? 'text-green-400' : 'text-red-400');

			// Animate number
			const controls = animate(prevValueRef.current, value, {
				duration: 1,
				onUpdate: (v) => setDisplayValue(Math.round(v)),
				ease: 'easeOut',
			});

			prevValueRef.current = value;

			const timeout = setTimeout(() => setFlashColor(null), 1000);
			return () => {
				controls.stop();
				clearTimeout(timeout);
			};
		}
	}, [value, _name]);

	return (
		<div className='stat-item'>
			<div className='flex justify-between items-center mb-1'>
				<span
					className='text-xs text-text-primary'
					style={{ fontSize: '0.625rem' }}
				>
					{nameVi}
				</span>
				<span
					className={`text-xs font-bold transition-colors duration-300 ${
						flashColor || 'text-text-primary'
					}`}
				>
					{displayValue}
				</span>
			</div>
			<div className='stat-bar-bg w-full h-2 bg-bg-primary rounded-full overflow-hidden'>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className='stat-bar-fill h-full rounded-full'
					style={{ backgroundColor: color }}
				/>
			</div>
		</div>
	);
}

function MoneyDisplay({ value }: { value: number }) {
	const [displayValue, setDisplayValue] = useState(value);
	const prevValueRef = useRef(value);
	const [flashColor, setFlashColor] = useState<string | null>(null);

	useEffect(() => {
		if (value !== prevValueRef.current) {
			const diff = value - prevValueRef.current;
			setFlashColor(diff > 0 ? 'text-green-400' : 'text-red-400');

			const controls = animate(prevValueRef.current, value, {
				duration: 1.5,
				onUpdate: (v) => setDisplayValue(Math.round(v)),
				ease: 'easeOut',
			});

			prevValueRef.current = value;
			const timeout = setTimeout(() => setFlashColor(null), 1500);
			return () => {
				controls.stop();
				clearTimeout(timeout);
			};
		}
	}, [value]);

	return (
		<span
			className={`text-xs font-bold transition-colors duration-300 ${
				flashColor || 'text-yellow-400'
			}`}
		>
			${displayValue.toLocaleString()}
		</span>
	);
}
