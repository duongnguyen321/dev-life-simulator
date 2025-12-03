import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import type { RandomEvent, DialogueChoice } from '@/data/types';
import { audioManager } from '@/core/AudioManager';

interface RandomEventModalProps {
	isOpen: boolean;
	event: RandomEvent | null;
	onChoice: (choice: DialogueChoice) => void;
}

export default function RandomEventModal({
	isOpen,
	event,
	onChoice,
}: RandomEventModalProps) {
	const { settings } = useGameStore();
	const [hoveredChoice, setHoveredChoice] = useState<string | null>(null);

	if (!isOpen || !event) return null;

	const isVi = settings.language === 'vi';
	const title = isVi ? event.nameVi : event.nameEn;
	const description = isVi ? event.descriptionVi : event.descriptionEn;

	const handleChoice = (choice: DialogueChoice) => {
		audioManager.playSFX('choice');
		onChoice(choice);
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm'
			>
				<motion.div
					initial={{ scale: 0.8, y: 50 }}
					animate={{ scale: 1, y: 0 }}
					exit={{ scale: 0.8, y: 50 }}
					transition={{ type: 'spring', damping: 20 }}
					className='bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-500 p-8 rounded-lg w-full max-w-2xl mx-4 shadow-2xl'
				>
					{/* Event Icon */}
					<div className='flex justify-center mb-4'>
						<div className='w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center'>
							<span className='text-4xl'>⚠️</span>
						</div>
					</div>

					{/* Event Title */}
					<h2 className='pixel-font text-3xl text-center text-yellow-500 mb-4 animate-pulse'>
						{title}
					</h2>

					{/* Event Description */}
					<div className='bg-gray-800/50 border-2 border-gray-700 rounded p-4 mb-6'>
						<p className='text-gray-200 text-center leading-relaxed'>
							{description}
						</p>
					</div>

					{/* Choices */}
					<div className='space-y-3'>
						{event.choices.map((choice) => {
							const choiceText = isVi ? choice.textVi : choice.textEn;
							const isHovered = hoveredChoice === choice.id;

							return (
								<motion.button
									key={choice.id}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									onMouseEnter={() => setHoveredChoice(choice.id)}
									onMouseLeave={() => setHoveredChoice(null)}
									onClick={() => handleChoice(choice)}
									className={`
										w-full p-4 pixel-font text-left rounded border-2 transition-all
										${
											isHovered
												? 'bg-yellow-500/20 border-yellow-500 text-yellow-300'
												: 'bg-gray-800 border-gray-600 text-gray-300 hover:border-gray-500'
										}
									`}
								>
									<div className='flex items-center gap-3'>
										<span className='text-xl'>{isHovered ? '▶' : '▷'}</span>
										<span>{choiceText}</span>
									</div>
								</motion.button>
							);
						})}
					</div>

					{/* Bottom hint */}
					<p className='text-center text-gray-500 text-xs mt-4 pixel-font'>
						{isVi
							? 'Chọn một lựa chọn để tiếp tục'
							: 'Choose an option to continue'}
					</p>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
