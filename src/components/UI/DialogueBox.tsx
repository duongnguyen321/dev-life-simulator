import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import type { DialogueChoice } from '@/data/types';
import { audioManager } from '@/core/AudioManager';
import { useGameStore } from '@/store/gameStore';
import { shuffleArray } from '@/utils/arrayUtils';

interface DialogueBoxProps {
	speaker?: string;
	text: string;
	choices?: DialogueChoice[];
	onNext?: () => void;
	onChoice?: (choice: DialogueChoice) => void;
	isReflection?: boolean;
}

export default function DialogueBox({
	speaker,
	text,
	choices = [],
	onNext,
	onChoice,
	isReflection = false,
}: DialogueBoxProps) {
	const { settings } = useGameStore();
	const [displayedText, setDisplayedText] = useState('');
	const [isTyping, setIsTyping] = useState(true); // Always start typing
	const [isProcessing, setIsProcessing] = useState(false);
	const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// Shuffle choices once when they change
	const shuffledChoices = useMemo(() => {
		return choices.length > 0 ? shuffleArray(choices) : [];
	}, [choices]);

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
	}, [text, settings.textSpeed, shuffledChoices.length]);

	const handleChoiceClick = (choice: DialogueChoice) => {
		if (isProcessing) {
			return;
		}

		setIsProcessing(true);
		audioManager.playSFX('ui/choice_select');

		// Navigate to next dialogue
		if (onChoice) {
			onChoice(choice);
		} else if (onNext) {
			onNext();
		}
	};

	const handleContainerClick = () => {
		// 0. Prevent if already processing
		if (isProcessing) {
			return;
		}

		// 1. If choices exist, NEVER advance - user must pick a choice
		if (shuffledChoices.length > 0) {
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
				shuffledChoices.length === 0 && !isTyping
					? 'cursor-pointer'
					: 'cursor-default'
			}`}
			onClick={(e) => {
				e.stopPropagation(); // Prevent click from propagating to Scene
				if (shuffledChoices.length === 0 && !isTyping) {
					handleContainerClick();
				}
			}}
			style={{
				backgroundColor: isReflection
					? 'rgba(20, 20, 35, 0.95)'
					: 'rgba(26, 32, 44, 0.95)',
				border: isReflection ? '4px solid #a78bfa' : '4px solid #4a90e2',
				padding: '2rem',
				fontFamily: '"Xanh Mono", monospace',
				boxShadow: isReflection ? '0 0 20px rgba(167, 139, 250, 0.3)' : 'none',
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
			{!isTyping && shuffledChoices.length > 0 && displayedText === text && (
				<div className='choices-container mt-6 flex flex-col gap-3 animate-fade-in'>
					{shuffledChoices.map((choice) => {
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
								whileHover={{ scale: 1.02, x: 10 }}
								whileTap={{ scale: 0.98 }}
								onClick={(e) => {
									e.stopPropagation();
									handleChoiceClick(choice);
								}}
								className={`choice-button text-left px-4 py-3 border-2 transition-all duration-200 ${
									canAfford
										? 'bg-bg-secondary border-vision hover:bg-vision hover:text-bg-primary cursor-pointer'
										: 'bg-gray-900/50 border-red-900/50 hover:border-red-500 cursor-pointer'
								}`}
								style={{ fontSize: '0.875rem' }}
								title={!canAfford ? `Insufficient ${insufficientResource}` : ''}
							>
								▶ {settings.language === 'vi' ? choice.textVi : choice.textEn}
								{!canAfford && (
									<span className='text-red-400 text-xs ml-2'>
										({settings.language === 'vi' ? 'Không đủ' : 'Insufficient'}){' '}
										{insufficientResource}
									</span>
								)}
							</motion.button>
						);
					})}
				</div>
			)}

			{/* Next Button / Indicator */}
			{!isTyping && shuffledChoices.length === 0 && (
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
