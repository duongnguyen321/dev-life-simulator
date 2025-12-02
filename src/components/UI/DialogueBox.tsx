import { motion } from 'framer-motion';
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

	const handleChoiceClick = (choice: DialogueChoice) => {
		audioManager.playSFX('ui/choice_select');

		// Apply stat effects if any
		if (choice.effects) {
			// TODO: Apply effects via statsManager
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

	const handleCopyText = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent triggering next
		navigator.clipboard.writeText(text);
		// Optional: Show toast or feedback
	};

	const handleContainerClick = () => {
		if (choices.length === 0 && onNext) {
			onNext();
		}
	};

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			className='pixel-dialog-box relative mx-auto mb-8 w-11/12 max-w-4xl cursor-pointer'
			onClick={handleContainerClick}
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

			{/* Dialogue Text - Click to Copy */}
			<div
				className='dialogue-text leading-loose text-text-primary hover:text-white transition-colors'
				onClick={handleCopyText}
				title='Click to copy'
				style={{ fontSize: '1rem', lineHeight: '1.8' }}
			>
				{text}
			</div>

			{/* Choices */}
			{choices.length > 0 && (
				<div className='choices-container mt-6 flex flex-col gap-3'>
					{choices.map((choice) => (
						<motion.button
							key={choice.id}
							whileHover={{ scale: 1.02, x: 10 }}
							whileTap={{ scale: 0.98 }}
							onClick={(e) => {
								e.stopPropagation();
								handleChoiceClick(choice);
							}}
							className='choice-button text-left px-4 py-3 bg-bg-secondary border-2 border-vision hover:bg-vision hover:text-bg-primary transition-all duration-200'
							style={{ fontSize: '0.875rem' }}
						>
							▶ {settings.language === 'vi' ? choice.textVi : choice.textEn}
						</motion.button>
					))}
				</div>
			)}

			{/* Next Button / Indicator */}
			{choices.length === 0 && (
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
