import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { EndingSystem } from '@/core/EndingSystem';
import { achievements as allAchievements } from '@/data/achievements';
import { audioManager } from '@/core/AudioManager';
import BuyMeCoffee from '@/components/UI/BuyMeCoffee';

export default function EndingScreen() {
	const navigate = useNavigate();
	const gameState = useGameStore();
	const { stats, settings } = gameState;
	const unlockedAchievements = EndingSystem.checkAllAchievements(gameState);
	const ending = EndingSystem.calculateEnding(stats);
	const analysis = EndingSystem.analyzeEnding(gameState);
	const lifeScore = EndingSystem.calculateLifeScore(stats);
	const isVi = settings.language === 'vi';

	useEffect(() => {
		// Play ending music
		audioManager.playMusic('/assets/audio/music/ending.mp3');
	}, []);

	return (
		<div className='h-screen w-full bg-gradient-to-b from-game-bg-primary to-game-bg-secondary overflow-y-auto'>
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-6xl mx-auto space-y-12'>
					{/* Header Section */}
					<div className='text-center space-y-6 animate-fade-in'>
						<div className='text-game-accent text-xl font-pixel tracking-widest'>
							{ending.type.toUpperCase().replace(/-/g, ' ')}
						</div>
						<h1 className='text-4xl md:text-6xl font-pixel text-white'>
							{isVi ? ending.titleVi : ending.titleEn}
						</h1>
						<p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
							{isVi ? ending.descriptionVi : ending.descriptionEn}
						</p>

						{/* Life Score Display */}
						<div className='mt-8 inline-block relative group'>
							<div className='absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
							<div className='relative px-8 py-4 bg-gray-900 ring-1 ring-gray-800 rounded-lg leading-none flex items-center'>
								<span className='text-gray-400 font-pixel mr-4'>
									Life Score:
								</span>
								<span className='text-4xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500'>
									{lifeScore}
								</span>
							</div>
						</div>
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
								<div className='mt-4 grid grid-cols-3 gap-4 border-t border-gray-800 pt-4'>
									<div className='text-center'>
										<div className='text-green-500 text-xs uppercase mb-1'>
											Health
										</div>
										<div className='text-xl font-pixel text-white'>
											{stats.health}
										</div>
									</div>
									<div className='text-center'>
										<div className='text-red-500 text-xs uppercase mb-1'>
											Stress
										</div>
										<div className='text-xl font-pixel text-white'>
											{stats.stress}
										</div>
									</div>
									<div className='text-center'>
										<div className='text-yellow-500 text-xs uppercase mb-1'>
											Money
										</div>
										<div
											className='text-sm font-pixel text-white truncate'
											title={stats.money.toLocaleString()}
										>
											${(stats.money / 1000000).toFixed(1)}M
										</div>
									</div>
								</div>
							</div>

							{/* Analysis Section */}
							<div className='bg-gray-900/80 p-6 rounded-xl border border-gray-700 shadow-lg space-y-6'>
								<h2 className='text-xl font-pixel text-game-accent mb-6 border-b border-gray-700 pb-2'>
									Game Analysis
								</h2>

								{/* Archetype & Future */}
								<div className='space-y-4'>
									<div>
										<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
											{isVi ? 'Kiểu người (Archetype)' : 'Archetype'}
										</div>
										<div className='text-white text-lg font-medium text-game-highlight'>
											{isVi ? analysis.personalityVi : analysis.personalityEn}
										</div>
									</div>

									<div>
										<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
											{isVi ? 'Tương lai (Future)' : 'Future'}
										</div>
										<div className='text-gray-300 text-sm leading-relaxed'>
											{isVi ? analysis.futureVi : analysis.futureEn}
										</div>
									</div>
								</div>

								{/* Skill Analysis */}
								<div className='pt-4 border-t border-gray-700'>
									<div className='text-gray-500 text-xs uppercase tracking-wider mb-2'>
										{isVi ? 'Chuyên môn (Expertise)' : 'Expertise'}
									</div>
									<div className='flex items-center justify-between mb-2'>
										<span className='text-game-accent font-pixel text-sm'>
											{analysis.skillAnalysis.specialistType}
										</span>
										<span className='text-xs text-gray-400 uppercase'>
											{analysis.skillAnalysis.dominantBranch}
										</span>
									</div>
									<div className='space-y-1'>
										{analysis.skillAnalysis.topSkills.map((skill, idx) => (
											<div
												key={idx}
												className='text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded'
											>
												{skill}
											</div>
										))}
									</div>
								</div>

								{/* Playstyle */}
								<div className='pt-4 border-t border-gray-700'>
									<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
										{isVi ? 'Phong cách chơi (Playstyle)' : 'Playstyle'}
									</div>
									<div className='text-white font-medium mb-1'>
										{isVi
											? analysis.playstyle.titleVi
											: analysis.playstyle.titleEn}
									</div>
									<div className='text-gray-400 text-xs italic'>
										{isVi
											? analysis.playstyle.descriptionVi
											: analysis.playstyle.descriptionEn}
									</div>
								</div>

								{/* Advice */}
								<div className='pt-4 border-t border-gray-700'>
									<div className='text-gray-500 text-xs uppercase tracking-wider mb-1'>
										{isVi ? 'Lời khuyên (Advice)' : 'Advice'}
									</div>
									<div className='text-gray-300 italic text-sm border-l-2 border-game-accent pl-3 py-1 bg-gray-800/30 rounded-r'>
										"{isVi ? analysis.adviceVi : analysis.adviceEn}"
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Achievements & Highlights (7 cols) */}
						<div className='lg:col-span-7 space-y-6'>
							{/* Key Moments / Highlights */}
							{(isVi ? analysis.keyMomentsVi : analysis.keyMomentsEn).length >
								0 && (
								<div className='bg-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm'>
									<h2 className='text-xl font-pixel text-white mb-4'>
										{isVi ? 'Dấu ấn đáng nhớ' : 'Key Moments'}
									</h2>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
										{(isVi ? analysis.keyMomentsVi : analysis.keyMomentsEn).map(
											(moment, idx) => (
												<div
													key={idx}
													className='flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700'
												>
													<span className='text-sm text-gray-200'>
														{moment}
													</span>
												</div>
											)
										)}
									</div>
								</div>
							)}

							{/* Detailed Comments */}
							{(isVi ? analysis.commentsVi : analysis.commentsEn).length >
								0 && (
								<div className='bg-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm'>
									<h2 className='text-xl font-pixel text-white mb-4'>
										{isVi ? 'Chi tiết' : 'Details'}
									</h2>
									<ul className='space-y-2'>
										{(isVi ? analysis.commentsVi : analysis.commentsEn).map(
											(comment, idx) => (
												<li
													key={idx}
													className='text-yellow-400 text-sm flex items-start bg-yellow-400/5 p-3 rounded border border-yellow-400/20'
												>
													<span className='mr-2'>•</span>
													{comment}
												</li>
											)
										)}
									</ul>
								</div>
							)}

							{/* Achievements */}
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
													title={isVi ? ach.nameVi : ach.nameEn}
												>
													{isVi ? ach.nameVi : ach.nameEn}
												</div>
												<div className='text-[10px] text-gray-400 line-clamp-2 leading-tight'>
													{isUnlocked
														? isVi
															? ach.descriptionVi
															: ach.descriptionEn
														: '???'}
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
						<div className='space-y-2'>
							<div className='text-gray-500 italic font-medium'>
								"Cuộc đời là Open Source. Refactor nó và để lại Di sản."
							</div>
							<div className='text-gray-600 text-xs uppercase tracking-widest opacity-70'>
								{isVi
									? 'Game dựa trên câu chuyện có thật 100% không cắt gọt chỉnh sửa'
									: 'Based on a 100% true story, uncut and unedited'}
							</div>
						</div>

						{/* Buy Me a Coffee Support */}
						<div className='max-w-2xl mx-auto'>
							<BuyMeCoffee variant='banner' />
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
									navigate('/game?newgame=true');
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
