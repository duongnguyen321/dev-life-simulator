import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { EndingSystem } from '@/core/EndingSystem';
import { achievements as allAchievements } from '@/data/achievements';

export default function EndingScreen() {
	const navigate = useNavigate();
	const { stats, achievements: unlockedAchievements } = useGameStore();

	const ending = EndingSystem.calculateEnding(stats);

	useEffect(() => {
		// Play ending music
		// audioManager.playMusic('/assets/audio/music/ending.ogg');
	}, []);

	return (
		<div className='min-h-screen bg-gradient-to-b from-game-bg-primary to-game-bg-secondary flex items-center justify-center p-8'>
			<div className='max-w-3xl w-full text-center space-y-8 animate-fade-in'>
				{/* Ending Type */}
				<div className='text-game-accent text-xl font-pixel'>
					{ending.type.toUpperCase()} ENDING
				</div>

				{/* Ending Title */}
				<h1 className='text-5xl font-pixel text-white mb-4'>
					{ending.titleVi}
				</h1>

				{/* Ending Description */}
				<p className='text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto'>
					{ending.descriptionVi}
				</p>

				{/* Final Stats */}
				<div className='grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto'>
					<div className='bg-game-bg-secondary p-6 rounded-lg border-2 border-game-steel'>
						<div className='text-game-steel text-sm mb-2'>Steel Mind</div>
						<div className='text-3xl font-pixel'>{stats.steelMind}</div>
					</div>
					<div className='bg-game-bg-secondary p-6 rounded-lg border-2 border-game-humanity'>
						<div className='text-game-humanity text-sm mb-2'>Humanity</div>
						<div className='text-3xl font-pixel'>{stats.humanity}</div>
					</div>
					<div className='bg-game-bg-secondary p-6 rounded-lg border-2 border-game-vision'>
						<div className='text-game-vision text-sm mb-2'>Vision</div>
						<div className='text-3xl font-pixel'>{stats.vision}</div>
					</div>
				</div>

				{/* Achievements */}
				<div className='mt-12 max-w-4xl mx-auto'>
					<h2 className='text-2xl font-pixel text-white mb-6'>
						Achievements Unlocked
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						{allAchievements.map((ach) => {
							const isUnlocked = unlockedAchievements.includes(ach.id);
							if (!isUnlocked && ach.secret) return null; // Don't show secret locked achievements

							return (
								<div
									key={ach.id}
									className={`p-4 rounded border-2 ${
										isUnlocked
											? 'bg-game-bg-secondary border-game-accent'
											: 'bg-gray-800 border-gray-700 opacity-50'
									}`}
								>
									<div
										className={`font-pixel text-sm mb-1 ${
											isUnlocked ? 'text-game-accent' : 'text-gray-500'
										}`}
									>
										{ach.nameVi}
									</div>
									<div className='text-xs text-gray-400'>
										{isUnlocked ? ach.descriptionVi : '???'}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Thank you message */}
				<div className='mt-12 text-gray-400 italic'>
					"Cuộc đời là Open Source. Refactor nó và để lại Di sản."
				</div>

				{/* Buttons */}
				<div className='flex gap-4 justify-center mt-8'>
					<button
						onClick={() => navigate('/')}
						className='px-8 py-3 bg-game-accent text-white font-pixel rounded hover:bg-opacity-80 transition-all'
					>
						Main Menu
					</button>
					<button
						onClick={() => {
							useGameStore.getState().resetGame();
							navigate('/game');
						}}
						className='px-8 py-3 bg-gray-700 text-white font-pixel rounded hover:bg-gray-600 transition-all'
					>
						Play Again
					</button>
				</div>
			</div>
		</div>
	);
}
