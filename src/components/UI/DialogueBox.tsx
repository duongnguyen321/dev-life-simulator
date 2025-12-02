import { motion } from 'framer-motion';
import type { DialogueChoice } from '@/data/types';
import { audioManager } from '@/core/AudioManager';
import { useGameStore } from '@/store/gameStore';

interface DialogueBoxProps {
	speaker?: string;
	text: string;
	choices?: DialogueChoice[];
	onNext?: () => void;
}

export default function DialogueBox({
	speaker,
	text,
	choices = [],
	onNext,
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
		if (onNext) {
			onNext();
		}
	};

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			className='pixel-dialog-box relative mx-auto mb-8 w-11/12 max-w-4xl'
			style={{
				backgroundColor: 'rgba(26, 32, 44, 0.95)',
				border: '4px solid #4a90e2',
				padding: '2rem',
				fontFamily: '"Press Start 2P", monospace',
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
				className='dialogue-text leading-loose text-text-primary'
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
							onClick={() => handleChoiceClick(choice)}
							className='choice-button text-left px-4 py-3 bg-bg-secondary border-2 border-vision hover:bg-vision hover:text-bg-primary transition-all duration-200'
							style={{ fontSize: '0.875rem' }}
						>
							▶ {settings.language === 'vi' ? choice.textVi : choice.textEn}
						</motion.button>
					))}
				</div>
			)}

			{/* Continue Indicator (if no choices) */}
			{choices.length === 0 && (
				<motion.div
					animate={{ opacity: [0.3, 1, 0.3] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className='absolute bottom-4 right-4 text-text-primary text-xs'
				>
					▼
				</motion.div>
			)}
		</motion.div>
	);
}
