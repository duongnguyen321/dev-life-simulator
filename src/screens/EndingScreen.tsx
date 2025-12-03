import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { EndingSystem } from '@/core/EndingSystem';
import { achievements as allAchievements } from '@/data/achievements';
import { audioManager } from '@/core/AudioManager';

export default function EndingScreen() {
	const navigate = useNavigate();
	const { stats, achievements: unlockedAchievements } = useGameStore();

	const ending = EndingSystem.calculateEnding(stats);
	const analysis = EndingSystem.analyzeEnding(stats);

	useEffect(() => {
		// Play ending music
		audioManager.playMusic('/assets/audio/music/ending.mp3');
	}, []);

	return (
		<div className='min-h-screen w-full bg-gradient-to-b from-game-bg-primary to-game-bg-secondary overflow-y-auto'>
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-6xl mx-auto space-y-12'>
					{/* Header Section */}
					<div className='text-center space-y-6 animate-fade-in'>
						<div className='text-game-accent text-xl font-pixel tracking-widest'>
							{ending.type.toUpperCase()} ENDING
						</div>
						<h1 className='text-4xl md:text-6xl font-pixel text-white'>
							{ending.titleVi}
						</h1>
						<p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
							{ending.descriptionVi}
						</p>
					</div>

					{/* Main Content Grid */}
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in delay-100'>
						{/* Left Column: Stats & Analysis (5 cols) */}
						<div className='lg:col-span-5 space-y-8'>
							{/* Final Stats */}
							<div className='bg-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm'>
								<h3 className='text-game-highlight font-pixel mb-4 text-center'>
									Final Stats
								</h3>
								<div className='grid grid-cols-3 gap-4'>
									<div className='text-center'>
										<div className='text-game-steel text-xs uppercase mb-1'>
											Steel Mind
										</div>
										<div className='text-2xl font-pixel text-white'>
											{stats.steelMind}
										</div>
									</div>
									<div className='text-center'>
										<div className='text-game-humanity text-xs uppercase mb-1'>
											Humanity
										</div>
										<div className='text-2xl font-pixel text-white'>
											{stats.humanity}
										</div>
									</div>
									<div className='text-center'>
										<div className='text-game-vision text-xs uppercase mb-1'>
											Vision
										</div>
										<div className='text-2xl font-pixel text-white'>
											{stats.vision}
										</div>
									</div>
								</div>
							</div>

							{/* Analysis Section */}
							<div className='bg-gray-900/80 p-6 rounded-xl border border-gray-700 shadow-lg'>
								<h2 className='text-xl font-pixel text-game-accent mb-6 border-b border-gray-700 pb-2'>
									Game Analysis
								</h2>

								<div className='space-y-6'>
									<div>
										<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
											Tính cách (Personality)
										</div>
										<div className='text-white text-lg font-medium text-game-highlight'>
											{analysis.personality}
										</div>
									</div>

									<div>
										<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
											Tương lai (Future)
										</div>
										<div className='text-gray-300 text-sm leading-relaxed'>
											{analysis.future}
										</div>
									</div>

									<div>
										<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
											Lời khuyên (Advice)
										</div>
										<div className='text-gray-300 italic text-sm border-l-2 border-game-accent pl-3 py-1 bg-gray-800/30 rounded-r'>
											"{analysis.advice}"
										</div>
									</div>

									{analysis.comments.length > 0 && (
										<div className='pt-4 border-t border-gray-700'>
											<div className='text-gray-500 text-xs uppercase mb-2'>
												Ghi chú (Notes)
											</div>
											<ul className='space-y-2'>
												{analysis.comments.map((comment, idx) => (
													<li
														key={idx}
														className='text-yellow-400 text-xs flex items-start bg-yellow-400/5 p-2 rounded border border-yellow-400/20'
													>
														<span className='mr-2'>•</span>
														{comment}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Right Column: Achievements (7 cols) */}
						<div className='lg:col-span-7 space-y-6'>
							<div className='bg-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm'>
								<h2 className='text-xl font-pixel text-white mb-6 flex items-center justify-between'>
									<span>Achievements</span>
									<span className='text-sm font-sans text-gray-400 bg-gray-800 px-2 py-1 rounded'>
										{unlockedAchievements.length} / {allAchievements.length}
									</span>
								</h2>
								<div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
									{allAchievements.map((ach) => {
										const isUnlocked = unlockedAchievements.includes(ach.id);
										if (!isUnlocked && ach.secret) return null;

										return (
											<div
												key={ach.id}
												className={`p-3 rounded-lg border transition-all duration-300 ${
													isUnlocked
														? 'bg-game-bg-secondary border-game-accent/50 hover:border-game-accent'
														: 'bg-gray-800/50 border-gray-700 opacity-60 grayscale'
												}`}
											>
												<div
													className={`font-pixel text-xs mb-1 truncate ${
														isUnlocked ? 'text-game-accent' : 'text-gray-500'
													}`}
													title={ach.nameVi}
												>
													{ach.nameVi}
												</div>
												<div className='text-[10px] text-gray-400 line-clamp-2 leading-tight'>
													{isUnlocked ? ach.descriptionVi : '???'}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					{/* Footer Section */}
					<div className='text-center space-y-8 animate-fade-in delay-200 pt-8 border-t border-gray-800'>
						<div className='text-gray-500 italic font-medium'>
							"Cuộc đời là Open Source. Refactor nó và để lại Di sản."
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button
								onClick={() => navigate('/')}
								className='px-8 py-3 bg-gray-800 text-white font-pixel rounded hover:bg-gray-700 transition-all border border-gray-600 hover:border-gray-500'
							>
								Main Menu
							</button>
							<button
								onClick={() => {
									useGameStore.getState().resetGame();
									navigate('/game');
								}}
								className='px-8 py-3 bg-game-accent text-white font-pixel rounded hover:bg-opacity-90 transition-all shadow-lg hover:shadow-game-accent/20'
							>
								Play Again
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
