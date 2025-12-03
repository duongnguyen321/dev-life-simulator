import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import DialogueBox from '@/components/UI/DialogueBox';
import StatsBar from '@/components/UI/StatsBar';
import Scene from '@/components/Sprites/Scene';
import { Sprite } from '@/components/UI/Sprite';
import TodoListModal from '@/components/UI/TodoListModal';
import DreamModal from '@/components/UI/DreamModal';
import SkillModal from '@/components/UI/SkillModal';
import ChapterIntro from '@/components/UI/ChapterIntro';
import RandomEventModal from '@/components/UI/RandomEventModal';
import { audioManager } from '@/core/AudioManager';
import { saveSystem } from '@/core/SaveSystem';
import { GameFlow } from '@/core/GameFlow';
import { chapters, allDialogues } from '@/data/chapters';
import { characters } from '@/data/characters';
import {
	type DialogueChoice,
	type TodoTask,
	type DreamQuestion,
} from '@/data/types';
import { ConditionType } from '@/data/enum';
import { Chapter1DialogueID } from '@/data/enum';

export default function GameScreen() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const {
		currentChapter,
		currentScene: currentSceneId,
		currentDialogue: currentDialogueId,
		stats,
		settings,
		updateStat,
		isNightPhase,
		pendingTransition,
		setNightPhase,
		setPendingTransition,
		setCurrentChapter,
		setCurrentScene,
		setCurrentDialogue,
		completedTaskIds,
		completeTasks,
		addXP,
		pendingRandomEvent,
		initializeEventQueue,
	} = useGameStore();

	const [isLoading, setIsLoading] = useState(true);
	const [showSleepModal, setShowSleepModal] = useState(false);
	const [showSkillModal, setShowSkillModal] = useState(false);
	const [showDreamModal, setShowDreamModal] = useState(false);
	const [currentDream, setCurrentDream] = useState<DreamQuestion | null>(null);
	const [isBlackout, setIsBlackout] = useState(false);
	const [dailyTasks, setDailyTasks] = useState<TodoTask[]>([]);
	const [showChapterIntro, setShowChapterIntro] = useState(true); // Show intro on mount/chapter change
	const [showRandomEvent, setShowRandomEvent] = useState(false);

	// Derived state
	const chapter = chapters[currentChapter];
	const scene = chapter?.scenes.find((s) => s.id === currentSceneId);
	const dialogue = allDialogues[currentDialogueId];
	const speaker = dialogue?.speaker ? characters[dialogue.speaker] : null;

	// Check if current dialogue is a reflection quote
	const isReflection = currentDialogueId.includes('_reflect_');

	// Helper to generate daily tasks
	const generateDailyTasks = useCallback(() => {
		if (!chapter?.nightlyEvents?.todoList) return;

		const allTasks = chapter.nightlyEvents.todoList;
		// Filter out completed tasks
		const availableTasks = allTasks.filter(
			(t) => !completedTaskIds.includes(t.id)
		);

		// Shuffle and pick 10
		const shuffled = [...availableTasks].sort(() => 0.5 - Math.random());
		setDailyTasks(shuffled.slice(0, 10));
	}, [chapter, completedTaskIds]);

	// Initialize game - load auto-save if available
	useEffect(() => {
		const initializeGame = async () => {
			// Check URL params (using React Router for cross-platform)
			const isNewGame = searchParams.get('newgame') === 'true';

			if (isNewGame) {
				// Starting a brand new game - don't load auto-save
				GameFlow.startNewGame();
				setIsLoading(false);
				return;
			}

			// Try to load auto-save
			const autoSaveData = await saveSystem.loadAutoSave();

			if (autoSaveData) {
				// Restore game state from auto-save
				const store = useGameStore.getState();
				store.setCurrentChapter(autoSaveData.chapter);
				store.setCurrentScene(autoSaveData.scene);
				// Try to find a suitable starting dialogue for the scene
				const sceneDialogues = Object.keys(allDialogues).filter((key) =>
					key.startsWith(autoSaveData.scene)
				);
				const startDialogue = sceneDialogues[0] || Chapter1DialogueID.CH1_INTRO;
				store.setCurrentDialogue(startDialogue);
				store.updateStats(autoSaveData.stats);
				if (autoSaveData.inventory) {
					autoSaveData.inventory.forEach((item) => store.addToInventory(item));
				}
				if (autoSaveData.flags) {
					Object.entries(autoSaveData.flags).forEach(([key, value]) => {
						store.setFlag(key, value);
					});
				}
				if (autoSaveData.achievements) {
					autoSaveData.achievements.forEach((id) =>
						store.unlockAchievement(id)
					);
				}
			} else {
				// No auto-save, start new game
				GameFlow.startNewGame();
			}

			setIsLoading(false);
		};

		initializeGame();
	}, []); // Run once on mount

	// Auto-save on state changes
	useEffect(() => {
		const autoSaveGame = async () => {
			// Don't save during initial load
			if (isLoading) return;

			const store = useGameStore.getState();

			await saveSystem.autoSave({
				playerName: 'Player',
				chapter: currentChapter,
				scene: currentSceneId,
				stats: stats,
				inventory: store.inventory,
				flags: store.flags,
				achievements: store.achievements,
				playtime: store.playtime,
			});
		};

		// Debounce auto-save to avoid too frequent saves
		const timeoutId = setTimeout(() => {
			autoSaveGame();
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [currentChapter, currentSceneId, currentDialogueId, stats, isLoading]);

	// Show Chapter Intro when chapter changes
	useEffect(() => {
		setShowChapterIntro(true);
	}, [currentChapter]);

	// Bankruptcy detection - monitor money stat
	useEffect(() => {
		if (isLoading) return; // Don't check during initial load

		// Check for specific ending triggered by GameFlow
		if (stats.money < 0) {
			navigate('/ending');
		} else if (stats.stress > 90) {
			navigate('/ending');
		} else if (stats.health < 10) {
			navigate('/ending');
		} else if (useGameStore.getState().ending) {
			navigate('/ending');
		}
	}, [
		stats.money,
		stats.stress,
		stats.health,
		isLoading,
		navigate,
		useGameStore.getState().ending,
	]);

	// Sync local modal state with global night phase
	useEffect(() => {
		if (isNightPhase) {
			generateDailyTasks();
			setShowSleepModal(true);
		}
	}, [isNightPhase, generateDailyTasks]);

	// Play scene music
	useEffect(() => {
		if (scene?.music) {
			// Try to resume context immediately (might work if already interacted)
			audioManager.resumeContext();
			audioManager.playMusic(scene.music);
		}
	}, [scene?.music]);

	// Global click listener to resume audio context (fix for autoplay policy)
	useEffect(() => {
		const handleInteraction = () => {
			audioManager.resumeContext();
		};
		// Use document for web, will need platform-specific handling for React Native
		if (typeof document !== 'undefined') {
			document.addEventListener('click', handleInteraction);
			document.addEventListener('keydown', handleInteraction);
		}
		return () => {
			if (typeof document !== 'undefined') {
				document.removeEventListener('click', handleInteraction);
				document.removeEventListener('keydown', handleInteraction);
			}
		};
	}, []);

	// Handle return from Sleep Reflection
	useEffect(() => {
		if (currentDialogueId === 'SLEEP_FLOW') {
			generateDailyTasks();
			setShowSleepModal(true);
		}
	}, [currentDialogueId, generateDailyTasks]);

	// Handle Sleep Trigger from GameFlow
	useEffect(() => {
		const store = useGameStore.getState();
		if (store.triggerSleepAction) {
			handleSleepClick();
			store.setTriggerSleepAction(false);
		}
	}, [useGameStore.getState().triggerSleepAction]);

	// Handle Random Event Trigger
	useEffect(() => {
		const store = useGameStore.getState();
		if (store.pendingRandomEvent) {
			setShowRandomEvent(true);
		}
	}, [useGameStore.getState().pendingRandomEvent]);

	const handleChoice = (choice: DialogueChoice) => {
		audioManager.resumeContext();
		GameFlow.makeChoice(choice);
	};

	const handleRandomEventChoice = (choice: DialogueChoice) => {
		const store = useGameStore.getState();
		// Apply effects
		if (choice.effects) {
			choice.effects.forEach((effect) => updateStat(effect.stat, effect.value));
		}
		// Apply flags
		if (choice.flags) {
			choice.flags.forEach((flag) => store.setFlag(flag.key, flag.value));
		}

		audioManager.playSFX('choice');

		// Add event to history to prevent duplicates
		if (store.pendingRandomEvent) {
			store.markEventSeen(store.pendingRandomEvent.id);
		}

		setShowRandomEvent(false);
		store.setPendingRandomEvent(null);

		// Resume dialogue flow
		if (choice.next) {
			GameFlow.goToDialogue(choice.next);
		} else if (store.pendingReturnDialogue) {
			// Resume from where we left off
			const returnId = store.pendingReturnDialogue;
			store.setPendingReturnDialogue(null);
			GameFlow.goToDialogue(returnId);
		} else {
			// Fallback: just advance dialogue normally
			GameFlow.advanceDialogue();
		}
	};

	// Ref to store dialogue before sleep reflection
	const preSleepDialogueRef = useRef<string | null>(null);

	const handleSleepClick = () => {
		audioManager.resumeContext();
		audioManager.playSFX('ui/button_click');

		// Check for Sleep Reflection
		if (chapter?.reflectionQuotes) {
			const sleepQuotes = chapter.reflectionQuotes.filter(
				(q) => q.type === ConditionType.SLEEP
			);

			if (sleepQuotes.length > 0) {
				// Determine the dialogue to return to after sleep
				// IMPORTANT: Read from store directly to get the latest dialogue ID
				const store = useGameStore.getState();

				// If pendingReturnDialogue is set (by GameFlow auto-trigger), use that
				// Otherwise, get the NEXT dialogue from the current dialogue's data
				let restoreDialogue = store.pendingReturnDialogue;

				if (!restoreDialogue) {
					const currentDialogueData = allDialogues[store.currentDialogue];
					if (currentDialogueData?.next) {
						restoreDialogue = currentDialogueData.next as string;
					} else {
						restoreDialogue = store.currentDialogue;
					}
				}

				preSleepDialogueRef.current = restoreDialogue;

				// Pick random quote
				const quote =
					sleepQuotes[Math.floor(Math.random() * sleepQuotes.length)];

				// Set return point to special SLEEP_FLOW
				useGameStore.getState().setPendingReturnDialogue('SLEEP_FLOW');
				setCurrentDialogue(quote.id);
				return;
			}
		}

		// Always generate new daily tasks when opening sleep modal
		generateDailyTasks();
		setShowSleepModal(true);
	};

	const handleNightlyTasksComplete = (selectedTasks: TodoTask[]) => {
		setShowSleepModal(false);
		setIsBlackout(true);
		audioManager.playSFX('achievement'); // Success sound

		// 1. Apply effects of selected tasks
		selectedTasks.forEach((task) => {
			if (task.cost) {
				Object.entries(task.cost).forEach(([key, value]) => {
					// @ts-ignore
					updateStat(key, -value);
				});
			}
			if (task.reward) {
				Object.entries(task.reward).forEach(([key, value]) => {
					// @ts-ignore
					updateStat(key, value);
				});
			}
			if (task.effects) {
				task.effects.forEach((effect) => {
					updateStat(effect.stat, effect.value);
				});
			}
		});

		// Mark tasks as completed
		completeTasks(selectedTasks.map((t) => t.id));

		// Award XP (20 XP per task)
		addXP(selectedTasks.length * 20);

		// 2. Close Todo Modal and Start Blackout

		// 3. Pick a random dream after a short delay
		setTimeout(() => {
			const dreams = chapter?.nightlyEvents?.dreamQuestions;
			if (dreams && dreams.length > 0) {
				const randomDream = dreams[Math.floor(Math.random() * dreams.length)];
				setCurrentDream(randomDream);
				setShowDreamModal(true);
			} else {
				// No dreams, just wake up
				handleWakeUp();
			}
		}, 1500);
	};

	const handleDreamChoice = (choice: DialogueChoice) => {
		// Apply dream choice effects
		if (choice.effects) {
			choice.effects.forEach((effect) => {
				updateStat(effect.stat, effect.value);
			});
		}

		setShowDreamModal(false);
		setShowSleepModal(false);
		handleWakeUp();
	};

	const handleWakeUp = () => {
		// Wait a bit in the dark before waking up/transitioning
		setTimeout(() => {
			if (isNightPhase && pendingTransition) {
				// Execute Transition
				setNightPhase(false); // Reset night phase BEFORE changing chapter to prevent modal re-trigger
				setCurrentChapter(pendingTransition.chapterId);
				setCurrentScene(pendingTransition.sceneId);
				setCurrentDialogue(pendingTransition.dialogueId);

				// Refresh event queue for new chapter
				initializeEventQueue();

				setPendingTransition(null);
			} else {
				// Just a manual sleep, wake up in same scene
				setNightPhase(false);

				// Restore previous dialogue if we came from SLEEP_FLOW
				const store = useGameStore.getState();
				if (
					store.currentDialogue === 'SLEEP_FLOW' &&
					preSleepDialogueRef.current
				) {
					setCurrentDialogue(preSleepDialogueRef.current);
					preSleepDialogueRef.current = null;
				}
			}

			// Fade in
			setIsBlackout(false);
			setCurrentDream(null);
			setShowSleepModal(false);
			setShowDreamModal(false);
		}, 2000);
	};

	// Handle Exit to Main Menu
	const handleExit = async () => {
		const state = useGameStore.getState();
		const currentDialogueText =
			settings.language === 'vi' ? dialogue?.textVi : dialogue?.textEn || '...';

		// Auto-save before exit
		await saveSystem.autoSave({
			chapter: state.currentChapter,
			scene: state.currentScene,
			stats: state.stats,
			inventory: state.inventory,
			flags: state.flags,
			achievements: state.achievements,
			playtime: state.playtime,
			preview: currentDialogueText,
		});

		navigate('/');
	};

	if (isLoading || !chapter || !scene) {
		return (
			<div className='w-full h-full flex items-center justify-center bg-black text-white pixel-font'>
				Loading...
			</div>
		);
	}

	// Determine background path
	const backgroundPath = scene.background.startsWith('/')
		? scene.background
		: `/assets/sprites/backgrounds/${scene.background}`;

	// Determine character sprite
	const characterSprite = speaker?.sprites?.neutral || speaker?.sprites?.idle;

	return (
		<div className='w-full h-full relative overflow-hidden'>
			{/* Game Scene */}
			<Scene background={backgroundPath}>
				{/* Stats Bar */}
				<div className='absolute top-4 right-4 z-10'>
					<StatsBar stats={stats} />
				</div>

				{/* Sleep Button & Controls */}
				<div className='absolute top-4 left-4 z-30 flex flex-wrap gap-2 max-w-[calc(100%-280px)]'>
					<button
						onClick={handleExit}
						className='px-3 py-2 md:px-4 md:py-2 bg-gray-800/80 border-2 border-gray-600 text-white pixel-font hover:bg-gray-700 transition-colors rounded shadow-lg flex items-center gap-2 text-sm md:text-base'
					>
						<span>🏠</span>
						<span className='hidden sm:inline'>
							{settings.language === 'vi' ? 'Menu' : 'Menu'}
						</span>
					</button>
					<button
						onClick={handleSleepClick}
						disabled={isReflection || currentDialogueId === 'SLEEP_FLOW'}
						className={`px-3 py-2 md:px-4 md:py-2 border-2 text-white pixel-font transition-colors rounded shadow-lg flex items-center gap-2 text-sm md:text-base ${
							isReflection || currentDialogueId === 'SLEEP_FLOW'
								? 'bg-gray-700 border-gray-500 opacity-50 cursor-not-allowed'
								: 'bg-indigo-900/80 border-indigo-400 hover:bg-indigo-800'
						}`}
					>
						<span>🌙</span>
						<span className='hidden sm:inline'>
							{settings.language === 'vi' ? 'Đi Ngủ' : 'Sleep'}
						</span>
					</button>
					<button
						onClick={() => setShowSkillModal(true)}
						className='px-3 py-2 md:px-4 md:py-2 bg-emerald-900/80 border-2 border-emerald-400 text-white pixel-font hover:bg-emerald-800 transition-colors rounded shadow-lg flex items-center gap-2 text-sm md:text-base'
					>
						<span>⚡</span>
						<span className='hidden sm:inline'>
							{settings.language === 'vi' ? 'Kỹ Năng' : 'Skills'}
						</span>
					</button>

					{/* Dev: Skip/Prev Chapter */}
					{/* @ts-ignore */}
					{import.meta.env.DEV && (
						<div className='flex gap-2'>
							<button
								onClick={() => {
									const prevChapterId = currentChapter - 1;
									if (prevChapterId >= 1) {
										const prevChapter = chapters[prevChapterId];
										if (prevChapter) {
											const firstScene = prevChapter.scenes[0];
											if (firstScene) {
												setCurrentChapter(prevChapterId);
												setCurrentScene(firstScene.id);
												setCurrentDialogue(firstScene.dialogueStart as string);
												setNightPhase(false);
												audioManager.stopMusic();
											}
										}
									}
								}}
								className='px-4 py-2 bg-yellow-900/80 border-2 border-yellow-400 text-white pixel-font hover:bg-yellow-800 transition-colors rounded shadow-lg flex items-center gap-2'
							>
								<span>⏪</span>
								<span>Prev</span>
							</button>
							<button
								onClick={() => {
									const nextChapterId = currentChapter + 1;
									const nextChapter = chapters[nextChapterId];
									if (nextChapter) {
										const firstScene = nextChapter.scenes[0];
										if (firstScene) {
											setCurrentChapter(nextChapterId);
											setCurrentScene(firstScene.id);
											setCurrentDialogue(firstScene.dialogueStart as string);
											setNightPhase(false);
											audioManager.stopMusic(); // Stop current music
										}
									}
								}}
								className='px-4 py-2 bg-red-900/80 border-2 border-red-400 text-white pixel-font hover:bg-red-800 transition-colors rounded shadow-lg flex items-center gap-2'
							>
								<span>⏩</span>
								<span>Skip</span>
							</button>
						</div>
					)}
				</div>

				{/* Character Sprite */}
				{characterSprite && (
					<div className='absolute bottom-1/3 left-1/2 transform -translate-x-1/2 z-0'>
						<Sprite
							src={characterSprite}
							scale={4} // Scale up
						/>
					</div>
				)}

				{/* Dialogue Box */}
				{dialogue && (
					<div className='absolute bottom-0 left-0 right-0 z-20'>
						<DialogueBox
							speaker={
								settings.language === 'vi'
									? speaker?.nameVi || speaker?.name || '???'
									: speaker?.nameEn || speaker?.name || '???'
							}
							text={
								settings.language === 'vi' ? dialogue.textVi : dialogue.textEn
							}
							choices={dialogue.choices?.map((c) => ({
								...c,
								text: settings.language === 'vi' ? c.textVi : c.textEn,
							}))}
							onChoice={handleChoice}
							onNext={() => {
								audioManager.resumeContext();
								// Clear query params when advancing dialogue
								if (searchParams.get('newgame')) {
									navigate('/game', { replace: true });
								}
								GameFlow.advanceDialogue();
							}}
							isReflection={isReflection}
						/>
					</div>
				)}

				{/* Nightly Tasks Modal */}
				<TodoListModal
					isOpen={showSleepModal}
					tasks={dailyTasks}
					onComplete={handleNightlyTasksComplete}
				/>

				{/* Skill Modal */}
				<SkillModal
					isOpen={showSkillModal}
					onClose={() => setShowSkillModal(false)}
				/>

				{/* Dream Modal */}
				<DreamModal
					isOpen={showDreamModal}
					dream={currentDream}
					onChoice={handleDreamChoice}
				/>

				{/* Random Event Modal */}
				<RandomEventModal
					isOpen={showRandomEvent}
					event={pendingRandomEvent}
					onChoice={handleRandomEventChoice}
				/>

				{/* Blackout Overlay */}
				{isBlackout && (
					<div className='fixed inset-0 z-50 bg-black animate-fade-in' />
				)}

				{/* Chapter Intro Overlay */}
				{showChapterIntro && chapter && (
					<ChapterIntro
						chapter={chapter}
						onComplete={() => setShowChapterIntro(false)}
					/>
				)}
			</Scene>
		</div>
	);
}
