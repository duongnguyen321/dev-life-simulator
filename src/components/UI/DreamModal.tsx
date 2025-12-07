import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import type { DreamQuestion, DialogueChoice } from '@/data/types';
import { audioManager } from '@/core/AudioManager';
import { shuffleArray } from '@/utils/arrayUtils';

interface DreamModalProps {
	isOpen: boolean;
	dream: DreamQuestion | null;
	onChoice: (choice: DialogueChoice) => void;
}

export default function DreamModal({
	isOpen,
	dream,
	onChoice,
}: DreamModalProps) {
	const { settings } = useGameStore();

	// Shuffle choices once when dream changes
	const shuffledChoices = useMemo(() => {
		return dream?.choices ? shuffleArray(dream.choices) : [];
	}, [dream]);

	if (!isOpen || !dream) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={(e) => e.stopPropagation()}
				className='fixed inset-0 z-[60] flex items-center justify-center bg-black text-white'
			>
				<div className='max-w-2xl w-full p-8 text-center'>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						<h2 className='pixel-font text-3xl mb-8 text-purple-300 tracking-widest'>
							{settings.language === 'vi'
								? 'TRONG GIẤC MƠ...'
								: 'IN A DREAM...'}
						</h2>

						<p className='pixel-font text-xl leading-loose mb-12 text-gray-300'>
							{settings.language === 'vi' ? dream.textVi : dream.textEn}
						</p>

						<div className='space-y-4'>
							{shuffledChoices.map((choice, index) => (
								<motion.button
									key={choice.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 1 + index * 0.2 }}
									onClick={() => {
										audioManager.playSFX('ui/choice_select');
										onChoice(choice);
									}}
									className='w-full p-4 border border-purple-900/50 hover:border-purple-500 hover:bg-purple-900/20 rounded transition-all pixel-font text-sm text-left group'
								>
									<span className='mr-4 text-purple-500 group-hover:text-purple-300'>
										{'>'}
									</span>
									{settings.language === 'vi' ? choice.textVi : choice.textEn}
								</motion.button>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
