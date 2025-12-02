import { useEffect, useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import DialogueBox from '@/components/UI/DialogueBox';
import StatsBar from '@/components/UI/StatsBar';
import Scene from '@/components/Sprites/Scene';
import { audioManager } from '@/core/AudioManager';

export default function GameScreen() {
	const {
		currentChapter: _currentChapter,
		currentScene: _currentScene,
		currentDialogue: _currentDialogue,
		stats,
		settings: _settings,
	} = useGameStore();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Initialize game
		initializeGame();
	}, []);

	const initializeGame = async () => {
		// Preload chapter 1 music
		audioManager.preloadChapterMusic(1);

		// Load chapter music
		audioManager.playMusic('chapter_1');

		setIsLoading(false);
	};

	if (isLoading) {
		return (
			<div className='w-full h-full flex items-center justify-center bg-bg-primary'>
				<div className='pixel-font text-2xl text-text-primary animate-pulse'>
					Loading...
				</div>
			</div>
		);
	}

	return (
		<div className='w-full h-full relative overflow-hidden'>
			{/* Game Scene */}
			<Scene background='/assets/sprites/backgrounds/childhood_home.png'>
				{/* Stats Bar */}
				<div className='absolute top-4 right-4'>
					<StatsBar stats={stats} />
				</div>

				{/* Dialogue Box */}
				<div className='absolute bottom-0 left-0 right-0'>
					<DialogueBox
						speaker='Narrator'
						text='Welcome to DevLife Simulator. Your journey begins here...'
						choices={[
							{
								id: 'start',
								text: 'Begin the journey',
								textVi: 'Bắt đầu hành trình',
								textEn: 'Begin the journey',
								next: 'chapter1_start',
							},
						]}
					/>
				</div>
			</Scene>
		</div>
	);
}
