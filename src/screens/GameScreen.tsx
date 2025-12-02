import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import DialogueBox from '@/components/UI/DialogueBox';
import StatsBar from '@/components/UI/StatsBar';
import Scene from '@/components/Sprites/Scene';
import { Sprite } from '@/components/UI/Sprite';
import TodoListModal from '@/components/UI/TodoListModal';
import DreamModal from '@/components/UI/DreamModal';
import { audioManager } from '@/core/AudioManager';
import { GameFlow } from '@/core/GameFlow';
import { chapters, allDialogues } from '@/data/chapters';
import { characters } from '@/data/characters';
import type { DialogueChoice, TodoTask, DreamQuestion } from '@/data/types';

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
	} = useGameStore();

	const [isLoading, setIsLoading] = useState(true);
	const [showSleepModal, setShowSleepModal] = useState(false);
	const [showDreamModal, setShowDreamModal] = useState(false);
	const [currentDream, setCurrentDream] = useState<DreamQuestion | null>(null);
	const [isBlackout, setIsBlackout] = useState(false);
	const [dailyTasks, setDailyTasks] = useState<TodoTask[]>([]);

	// Derived state
	const chapter = chapters[currentChapter];
	const scene = chapter?.scenes.find((s) => s.id === currentSceneId);
	const dialogue = allDialogues[currentDialogueId];
	const speaker = dialogue?.speaker ? characters[dialogue.speaker] : null;

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
			const { saveSystem } = await import('@/core/SaveSystem');
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
				const startDialogue = sceneDialogues[0] || 'intro';
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

			const { saveSystem } = await import('@/core/SaveSystem');
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

	// Bankruptcy detection - monitor money stat
	useEffect(() => {
		if (isLoading) return; // Don't check during initial load

		// Check for bankruptcy
		if (stats.money < 0) {
			// Trigger bankruptcy ending
			navigate('/ending');
		}

		// Check for Burnout
		if (stats.stress > 90) {
			navigate('/ending');
		}

		// Check for Health Failure
		if (stats.health < 10) {
			navigate('/ending');
		}
	}, [stats.money, stats.stress, stats.health, isLoading, navigate]);

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

	const handleChoice = (choice: DialogueChoice) => {
		audioManager.resumeContext();
		GameFlow.makeChoice(choice);
	};

	const handleSleepClick = () => {
		audioManager.resumeContext();
		audioManager.playSFX('ui/button_click');

		// Always generate new daily tasks when opening sleep modal
		generateDailyTasks();
		setShowSleepModal(true);
	};

	const handleNightlyTasksComplete = (selectedTasks: TodoTask[]) => {
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

		// 2. Close Todo Modal and Start Blackout
		setShowSleepModal(false);
		setIsBlackout(true);
		audioManager.playSFX('achievement'); // Success sound

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
		handleWakeUp();
	};

	const handleWakeUp = () => {
		// Wait a bit in the dark before waking up/transitioning
		setTimeout(() => {
			if (isNightPhase && pendingTransition) {
				// Execute Transition
				setCurrentChapter(pendingTransition.chapterId);
				setCurrentScene(pendingTransition.sceneId);
				setCurrentDialogue(pendingTransition.dialogueId);

				setNightPhase(false);
				setPendingTransition(null);
			} else {
				// Just a manual sleep, wake up in same scene
				setNightPhase(false);
			}

			// Fade in
			setIsBlackout(false);
			setCurrentDream(null);
		}, 2000);
	};

	if (isLoading || !chapter || !scene) {
		return (
			<div className='w-full h-full flex items-center justify-center bg-bg-primary'>
				<div className='pixel-font text-2xl text-text-primary animate-pulse'>
					Loading...
				</div>
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

				{/* Sleep Button */}
				<button
					onClick={handleSleepClick}
					className='absolute top-4 left-4 z-30 px-4 py-2 bg-indigo-900/80 border-2 border-indigo-400 text-white pixel-font hover:bg-indigo-800 transition-colors rounded shadow-lg flex items-center gap-2'
				>
					<span>🌙</span>
					<span>{settings.language === 'vi' ? 'Đi Ngủ' : 'Sleep'}</span>
				</button>

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
								GameFlow.advanceDialogue();
							}}
						/>
					</div>
				)}

				{/* Nightly Tasks Modal */}
				<TodoListModal
					isOpen={showSleepModal}
					tasks={dailyTasks}
					onComplete={handleNightlyTasksComplete}
					onClose={() => setShowSleepModal(false)}
				/>

				{/* Dream Modal */}
				<DreamModal
					isOpen={showDreamModal}
					dream={currentDream}
					onChoice={handleDreamChoice}
				/>

				{/* Blackout Overlay */}
				{isBlackout && (
					<div className='fixed inset-0 z-50 bg-black animate-fade-in' />
				)}
			</Scene>
		</div>
	);
}
