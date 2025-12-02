import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { DialogueChoice } from '@/data/types';
import { audioManager } from '@/core/AudioManager';
import { useGameStore } from '@/store/gameStore';

interface DialogueBoxProps {
	speaker?: string;
	text: string;
	choices?: DialogueChoice[];
	onNext?: () => void;
	onChoice?: (choice: DialogueChoice) => void;
}

export default function DialogueBox({
	speaker,
	text,
	choices = [],
	onNext,
	onChoice,
}: DialogueBoxProps) {
	const { settings } = useGameStore();
	const [displayedText, setDisplayedText] = useState('');
	const [isTyping, setIsTyping] = useState(true); // Always start typing
	const [isProcessing, setIsProcessing] = useState(false);
	const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Typing effect
	useEffect(() => {
		setDisplayedText('');
		setIsTyping(true);
		setIsProcessing(false); // Reset processing state on new text OR new choices
		let currentIndex = 0;

		const typeNextChar = () => {
			if (currentIndex < text.length) {
				setDisplayedText(text.slice(0, currentIndex + 1));
				currentIndex++;

				const baseDelay = Math.random() * 30 + 20;
				const speedFactor = (100 - settings.textSpeed) / 50;
				const delay = baseDelay * Math.max(0.1, speedFactor);

				typingTimeoutRef.current = setTimeout(typeNextChar, delay);
			} else {
				setIsTyping(false);
			}
		};

		typeNextChar();

		return () => {
			if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
		};
	}, [text, settings.textSpeed, choices.length]);

	const handleChoiceClick = (choice: DialogueChoice) => {
		if (isProcessing) {
			return;
		}

		setIsProcessing(true);
		audioManager.playSFX('ui/choice_select');

		// Apply stat effects if any
		if (choice.effects) {
			const { updateStat } = useGameStore.getState();
			choice.effects.forEach((effect) => {
				updateStat(effect.stat, effect.value);
			});
		}

		// Apply flag changes if any
		if (choice.flags) {
			const { setFlag } = useGameStore.getState();
			choice.flags.forEach((flag) => {
				setFlag(flag.key, flag.value);
			});
		}

		// Navigate to next dialogue
		if (onChoice) {
			onChoice(choice);
		} else if (onNext) {
			onNext();
		}
	};

	const handleContainerClick = (e: React.MouseEvent) => {
		// 0. Prevent if already processing
		if (isProcessing) {
			return;
		}

		// 1. If choices exist, NEVER advance - user must pick a choice
		if (choices.length > 0) {
			return;
		}

		// 2. If still typing, don't advance - must wait for typing to finish
		if (isTyping) {
			return;
		}

		// 4. Advance to next
		setIsProcessing(true);
		if (onNext) {
			audioManager.playSFX('ui/button_click');
			onNext();
		}
	};

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			className={`pixel-dialog-box relative mx-auto mb-8 w-11/12 max-w-4xl ${
				choices.length === 0 && !isTyping ? 'cursor-pointer' : 'cursor-default'
			}`}
			onClick={
				choices.length === 0 && !isTyping ? handleContainerClick : undefined
			}
			style={{
				backgroundColor: 'rgba(26, 32, 44, 0.95)',
				border: '4px solid #4a90e2',
				padding: '2rem',
				fontFamily: '"Xanh Mono", monospace',
			}}
		>
			{/* Speaker Name */}
			{speaker && (
				<div
					className='speaker-name mb-4 text-steel-mind text-sm'
					style={{ fontSize: '0.875rem' }}
				>
					{speaker}
				</div>
			)}

			{/* Dialogue Text */}
			<div
				className='dialogue-text leading-loose text-text-primary transition-colors min-h-[4.5rem] select-text'
				style={{ fontSize: '1rem', lineHeight: '1.8' }}
			>
				{displayedText}
				{isTyping && <span className='animate-pulse'>|</span>}
			</div>

			{/* Choices */}
			{!isTyping && choices.length > 0 && displayedText === text && (
				<div className='choices-container mt-6 flex flex-col gap-3 animate-fade-in'>
					{choices.map((choice) => {
						// Check if this choice is affordable
						const { stats } = useGameStore.getState();
						let canAfford = true;
						let insufficientResource = '';

						if (choice.effects) {
							for (const effect of choice.effects) {
								// Negative effect values = cost
								if (effect.value < 0) {
									const currentValue = stats[effect.stat];
									const cost = Math.abs(effect.value);
									if (currentValue < cost) {
										canAfford = false;
										insufficientResource = effect.stat;
										break;
									}
								}
							}
						}

						return (
							<motion.button
								key={choice.id}
								whileHover={canAfford ? { scale: 1.02, x: 10 } : {}}
								whileTap={canAfford ? { scale: 0.98 } : {}}
								onClick={(e) => {
									e.stopPropagation();
									if (canAfford) {
										handleChoiceClick(choice);
									}
								}}
								disabled={!canAfford}
								className={`choice-button text-left px-4 py-3 border-2 transition-all duration-200 ${
									canAfford
										? 'bg-bg-secondary border-vision hover:bg-vision hover:text-bg-primary cursor-pointer'
										: 'bg-gray-900/50 border-gray-700 opacity-50 cursor-not-allowed'
								}`}
								style={{ fontSize: '0.875rem' }}
								title={!canAfford ? `Insufficient ${insufficientResource}` : ''}
							>
								▶ {settings.language === 'vi' ? choice.textVi : choice.textEn}
								{!canAfford && (
									<span className='text-red-400 text-xs ml-2'>
										(Insufficient {insufficientResource})
									</span>
								)}
							</motion.button>
						);
					})}
				</div>
			)}

			{/* Next Button / Indicator */}
			{!isTyping && choices.length === 0 && (
				<motion.div
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className='absolute bottom-4 right-4 flex items-center gap-2 text-text-primary text-xs hover:text-white'
				>
					<span>Next</span>
					<span>▼</span>
				</motion.div>
			)}
		</motion.div>
	);
}
