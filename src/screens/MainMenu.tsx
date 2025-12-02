import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { saveSystem } from '@/core/SaveSystem';
import { audioManager } from '@/core/AudioManager';

export default function MainMenu() {
	const navigate = useNavigate();
	const [_saves, setSaves] = useState<Array<any | null>>([]);
	const [hasAutoSave, setHasAutoSave] = useState(false);

	useEffect(() => {
		// Load save info
		loadSaveInfo();

		// Play menu music
		audioManager.playMusic('menu');
	}, []);

	const loadSaveInfo = async () => {
		const allSaves = await saveSystem.getAllSaves();
		const autoSave = await saveSystem.loadAutoSave();
		setSaves(allSaves);
		setHasAutoSave(autoSave !== null);
	};

	const handleNewGame = () => {
		audioManager.playSFX('ui/button_click');
		navigate('/game');
	};

	const handleContinue = async () => {
		if (hasAutoSave) {
			audioManager.playSFX('ui/button_click');
			navigate('/game?continue=true');
		}
	};

	return (
		<div className='w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-bg-primary to-bg-secondary'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='text-center mb-16'
			>
				<h1 className='pixel-font text-4xl md:text-6xl text-steel-mind mb-4'>
					DEVLIFE SIMULATOR
				</h1>
				<p className='text-text-primary text-lg md:text-xl opacity-80'>
					The Architect: Source Code of a Life
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className='flex flex-col gap-4 w-80'
			>
				<MenuButton onClick={handleNewGame}>New Game</MenuButton>

				<MenuButton onClick={handleContinue} disabled={!hasAutoSave}>
					Continue
				</MenuButton>

				<MenuButton onClick={() => {}}>Load Game</MenuButton>

				<MenuButton onClick={() => {}}>Settings</MenuButton>

				<MenuButton onClick={() => {}}>Credits</MenuButton>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className='absolute bottom-8 text-text-primary opacity-50 text-sm'
			>
				Version 1.0.0 - Made with ❤️ and Code
			</motion.div>
		</div>
	);
}

// Menu Button Component
interface MenuButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
}

function MenuButton({ children, onClick, disabled = false }: MenuButtonProps) {
	return (
		<motion.button
			whileHover={{ scale: disabled ? 1 : 1.05 }}
			whileTap={{ scale: disabled ? 1 : 0.95 }}
			onClick={onClick}
			disabled={disabled}
			className={`
				pixel-font text-lg px-8 py-4
				bg-bg-secondary border-4 border-steel-mind
				text-text-primary
				transition-all duration-200
				${
					disabled
						? 'opacity-50 cursor-not-allowed'
						: 'hover:bg-steel-mind hover:text-bg-primary cursor-pointer'
				}
			`}
		>
			{children}
		</motion.button>
	);
}
