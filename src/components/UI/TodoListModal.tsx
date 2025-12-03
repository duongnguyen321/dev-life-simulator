import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { type TodoTask, type Stats } from '@/data/types';
import { StatID } from '@/data/enum';
import { audioManager } from '@/core/AudioManager';

interface TodoListModalProps {
	isOpen: boolean;
	tasks: TodoTask[];
	onComplete: (selectedTasks: TodoTask[]) => void;
	onClose: () => void;
	isMandatory?: boolean;
}

export default function TodoListModal({
	isOpen,
	tasks,
	onComplete,
	onClose,
	isMandatory = false,
}: TodoListModalProps) {
	const { stats, settings } = useGameStore();
	const [selectedTaskIds, setSelectedTaskIds] = useState<Set<string>>(
		new Set()
	);

	// Reset selection when modal opens or tasks change
	useEffect(() => {
		if (isOpen) {
			setSelectedTaskIds(new Set());
		}
	}, [isOpen, tasks]);

	// Helper to translate stat names
	const getStatName = (stat: string): string => {
		const isVi = settings.language === 'vi';
		switch (stat) {
			case StatID.HEALTH:
				return isVi ? 'Sức khỏe' : 'Health';
			case StatID.HUMANITY:
				return isVi ? 'Nhân tính' : 'Humanity';
			case StatID.MONEY:
				return isVi ? 'Tiền' : 'Money';
			case StatID.STEELMIND:
				return isVi ? 'Tinh thần thép' : 'Steel Mind';
			case StatID.STRESS:
				return isVi ? 'Stress' : 'Stress';
			case StatID.VISION:
				return isVi ? 'Tầm nhìn' : 'Vision';
			default:
				return stat;
		}
	};

	// Calculate projected stats based on selection
	const calculateProjectedStats = () => {
		const projected = { ...stats };

		selectedTaskIds.forEach((id) => {
			const task = tasks.find((t) => t.id === id);
			if (task) {
				// Apply costs
				if (task.cost) {
					Object.entries(task.cost).forEach(([key, value]) => {
						const k = key as keyof Stats;
						projected[k] = Math.max(0, projected[k] - (value as number));
					});
				}
				// Apply rewards (simple preview, actual logic might differ)
				if (task.reward) {
					Object.entries(task.reward).forEach(([key, value]) => {
						const k = key as keyof Stats;
						if (k === 'money') {
							// Money has no cap, use projected value
							projected[k] = projected[k] + (value as number);
						} else {
							// Other stats capped at 100
							projected[k] = Math.min(100, projected[k] + (value as number));
						}
					});
				}
			}
		});

		return projected;
	};

	const projectedStats = calculateProjectedStats();

	const MAX_TASKS = 5;

	const toggleTask = (task: TodoTask) => {
		const newSet = new Set(selectedTaskIds);
		if (newSet.has(task.id)) {
			newSet.delete(task.id);
			audioManager.playSFX('ui/choice_select'); // Use generic click
		} else {
			// Check limit
			if (newSet.size >= MAX_TASKS) {
				audioManager.playSFX('ui/choice_select'); // Error sound?
				return;
			}

			// Check if affordable
			let canAfford = true;
			if (task.cost) {
				Object.entries(task.cost).forEach(([key, value]) => {
					const k = key as keyof Stats;
					// Check against PROJECTED stats to prevent overspending
					// But wait, if we uncheck, we get resources back.
					// So we should check if (current_projected - cost) >= 0
					if (projectedStats[k] < (value as number)) {
						canAfford = false;
					}
				});
			}

			if (canAfford) {
				newSet.add(task.id);
				audioManager.playSFX('ui/choice_select');
			} else {
				audioManager.playSFX('ui/choice_select'); // Error sound?
				// Shake effect or visual cue could be added here
			}
		}
		setSelectedTaskIds(newSet);
	};

	const handleComplete = () => {
		const selected = tasks.filter((t) => selectedTaskIds.has(t.id));
		onComplete(selected);
	};

	if (!isOpen) return null;

	const isVi = settings.language === 'vi';

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
			>
				<motion.div
					initial={{ scale: 0.9, y: 20 }}
					animate={{ scale: 1, y: 0 }}
					className='bg-bg-secondary border-4 border-steel-mind p-6 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col'
				>
					<h2 className='pixel-font text-2xl text-center text-steel-mind mb-2'>
						{isVi ? 'NHẬT KÝ TRONG NGÀY' : 'DAILY TODO LIST'}
					</h2>
					<p className='text-center text-gray-400 mb-4 text-sm pixel-font'>
						{isVi
							? `Đã chọn: ${selectedTaskIds.size}/${MAX_TASKS}`
							: `Selected: ${selectedTaskIds.size}/${MAX_TASKS}`}
					</p>

					<div className='flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar'>
						{tasks.map((task) => {
							const isSelected = selectedTaskIds.has(task.id);
							const isLimitReached =
								!isSelected && selectedTaskIds.size >= MAX_TASKS;

							// Check affordability and get reason
							let affordabilityReason = '';
							let canAfford = true;
							if (!isSelected && task.cost) {
								for (const [key, value] of Object.entries(task.cost)) {
									const k = key as keyof Stats;
									if (projectedStats[k] < (value as number)) {
										canAfford = false;
										affordabilityReason = isVi
											? `Không đủ ${getStatName(k)} (Cần ${value})`
											: `Not enough ${getStatName(k)} (Need ${value})`;
										break;
									}
								}
							}

							const isDisabled = !isSelected && (isLimitReached || !canAfford);

							let tooltipText = '';
							if (isDisabled) {
								if (isLimitReached)
									tooltipText = isVi
										? 'Đã đạt giới hạn 5 việc'
										: 'Limit reached (5/5)';
								else if (!canAfford) tooltipText = affordabilityReason;
							}

							return (
								<div key={task.id} className='relative group'>
									<motion.div
										whileHover={!isDisabled ? { scale: 1.01 } : {}}
										onClick={() => !isDisabled && toggleTask(task)}
										className={`
											p-4 border-2 rounded cursor-pointer transition-colors relative
											${
												isSelected
													? 'border-green-500 bg-green-900/20'
													: isDisabled
													? 'border-gray-800 opacity-50 cursor-not-allowed bg-gray-900/50'
													: 'border-gray-600 hover:border-vision bg-bg-primary'
											}
										`}
									>
										<div className='flex justify-between items-start'>
											<div className='flex-1'>
												<p className='text-text-primary font-bold mb-1'>
													{isVi ? task.textVi : task.textEn}
												</p>

												{/* Costs & Rewards Display */}
												<div className='flex gap-4 text-xs mt-2'>
													{task.cost && (
														<div className='text-red-400'>
															{isVi ? 'Chi phí: ' : 'Cost: '}
															{Object.entries(task.cost)
																.map(([k, v]) => `${getStatName(k)} -${v}`)
																.join(', ')}
														</div>
													)}
													{task.reward && (
														<div className='text-green-400'>
															{isVi ? 'Phần thưởng: ' : 'Reward: '}
															{Object.entries(task.reward)
																.map(([k, v]) => {
																	const numVal = v as number;
																	return `${getStatName(k)} ${
																		numVal >= 0 ? '+' : ''
																	}${numVal.toLocaleString()}`;
																})
																.join(', ')}
														</div>
													)}
													{task.effects && (
														<div className='text-blue-400'>
															{isVi ? 'Hiệu ứng: ' : 'Effect: '}
															{task.effects
																.map(
																	(e) =>
																		`${getStatName(e.stat)} ${
																			e.value > 0 ? '+' : ''
																		}${e.value}`
																)
																.join(', ')}
														</div>
													)}
												</div>
											</div>

											<div
												className={`
												w-6 h-6 border-2 rounded flex items-center justify-center ml-4
												${isSelected ? 'border-green-500 bg-green-500' : 'border-gray-500'}
											`}
											>
												{isSelected && <span className='text-white'>✓</span>}
											</div>
										</div>
									</motion.div>

									{/* Tooltip */}
									{isDisabled && (
										<div className='absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black border border-red-500 text-red-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap'>
											{tooltipText}
										</div>
									)}
								</div>
							);
						})}
					</div>

					<div className='mt-6 flex justify-end gap-4 border-t border-gray-700 pt-4'>
						{!isMandatory && (
							<button
								onClick={onClose}
								className='px-4 py-2 text-text-primary hover:text-white pixel-font text-sm'
							>
								{isVi ? 'ĐỂ SAU' : 'LATER'}
							</button>
						)}
						{selectedTaskIds.size === 0 ? (
							<>
								<button
									className={`
								px-6 py-2 bg-steel-mind text-bg-primary pixel-font font-bold rounded
								hover:bg-blue-400 transition-colors
								`}
								>
									{isVi ? 'ĐI NGỦ' : 'SLEEP'}
								</button>
							</>
						) : (
							<button
								onClick={handleComplete}
								className={`
								px-6 py-2 bg-steel-mind text-bg-primary pixel-font font-bold rounded
								hover:bg-blue-400 transition-colors
							`}
							>
								{isVi ? 'HOÀN THÀNH & ĐI NGỦ' : 'COMPLETE & SLEEP'}
							</button>
						)}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
