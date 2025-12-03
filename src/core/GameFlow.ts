// ==========================================
// GAME FLOW CONTROLLER
// Handles scene transitions and game progression
// ==========================================

import { useGameStore } from '@/store/gameStore';
import { chapters, allDialogues } from '@/data/chapters';
import { audioManager } from '@/core/AudioManager';
import type { StatsEffect, FlagChange } from '@/data/types';
import { EndingSystem } from '@/core/EndingSystem';
import { Dialogue_END } from '@/data/enum';

interface Choice {
	id: string;
	text: string;
	textVi: string;
	textEn: string;
	next?: string;
	effects?: StatsEffect[];
	flags?: FlagChange[];
	condition?: any;
}

export class GameFlow {
	// Start new game
	static startNewGame(): void {
		const store = useGameStore.getState();

		// Reset state
		store.resetGame();

		// Start at Chapter 1
		const chapter1 = chapters[1];
		if (!chapter1) return;

		const firstScene = chapter1.scenes[0];
		if (!firstScene) return;

		store.setCurrentChapter(1);
		store.setCurrentScene(firstScene.id);

		// Load first dialogue
		const firstDialogue = allDialogues[firstScene.dialogueStart];
		if (firstDialogue && firstDialogue.id) {
			store.setCurrentDialogue(firstDialogue.id);
		}

		// Play chapter music
		if (firstScene.music) {
			audioManager.playMusic(firstScene.music);
		}
	}

	// Advance dialogue
	static advanceDialogue(): void {
		const store = useGameStore.getState();
		const currentDialogue = allDialogues[store.currentDialogue];

		if (!currentDialogue) return;

		// If dialogue has choices, don't auto-advance
		if (currentDialogue.choices && currentDialogue.choices.length > 0) {
			return;
		}

		// If has next dialogue, go to it
		if (currentDialogue.next) {
			this.goToDialogue(currentDialogue.next);
		} else {
			// Check if we need to return from reflection
			if (store.pendingReturnDialogue) {
				const returnId = store.pendingReturnDialogue;
				store.setPendingReturnDialogue(null);
				this.goToDialogue(returnId);
			}
		}
	}

	// Make a choice
	static makeChoice(choice: Choice): void {
		const store = useGameStore.getState();

		// Apply stat effects
		if (choice.effects) {
			choice.effects.forEach((effect: StatsEffect) => {
				store.updateStat(effect.stat, effect.value);
			});
		}

		// Apply flag changes
		if (choice.flags) {
			choice.flags.forEach((flag) => {
				store.setFlag(flag.key, flag.value);
			});
		}

		// Play SFX for choice
		audioManager.playSFX('choice');

		// Go to next dialogue
		if (choice.next) {
			this.goToDialogue(choice.next);
		} else {
			// Check if we need to return from reflection
			if (store.pendingReturnDialogue) {
				const returnId = store.pendingReturnDialogue;
				store.setPendingReturnDialogue(null);
				this.goToDialogue(returnId);
			}
		}
	}

	// Go to specific dialogue
	static goToDialogue(dialogueId: string): void {
		const store = useGameStore.getState();
		if (dialogueId === Dialogue_END.END) {
			const { stats } = store;

			// Use centralized EndingSystem to determine ending
			const result = EndingSystem.calculateEnding(stats);

			// @ts-ignore
			store.setEnding(result.type);
			return;
		}

		// Special flow for returning from Sleep Reflection
		if (dialogueId === 'SLEEP_FLOW') {
			store.setCurrentDialogue('SLEEP_FLOW');
			return;
		}

		const dialogue = allDialogues[dialogueId];

		if (!dialogue) {
			console.warn(`Dialogue ${dialogueId} not found`);
			return;
		}

		// REFLECTION LOGIC
		const {
			dialogueCountInChapter,
			lastReflectionDialogueCount,
			nextReflectionTrigger,
			currentChapter,
		} = store;

		// Only trigger if:
		// 1. Not already in a reflection (dialogueId doesn't contain 'reflect')
		// 2. Count threshold met
		// 3. We are not returning from a reflection (pendingReturnDialogue is null)
		// Only trigger if:
		// 1. Not already in a reflection (dialogueId doesn't contain 'reflect')
		// 2. Count threshold met
		// 3. We are not returning from a reflection (pendingReturnDialogue is null)
		if (
			!dialogueId.includes('reflect') &&
			!store.pendingReturnDialogue &&
			dialogueCountInChapter - lastReflectionDialogueCount >=
				nextReflectionTrigger
		) {
			const chapter = chapters[currentChapter];
			if (
				chapter &&
				chapter.reflectionQuotes &&
				chapter.reflectionQuotes.length > 0
			) {
				// Trigger Sleep Action instead of random quote
				// IMPORTANT: Save the NEXT dialogue as the return point
				console.log('GameFlow: Triggering sleep. Next dialogue:', dialogueId);
				console.log('GameFlow: Setting pendingReturnDialogue to:', dialogueId);
				store.setPendingReturnDialogue(dialogueId);
				store.setTriggerSleepAction(true);
				store.setLastReflectionCount(dialogueCountInChapter);
				// Reset trigger for next time (10-15 dialogues)
				store.setNextReflectionTrigger(Math.round(Math.random() * 5) + 10);
				store.incrementDialogueCount();
				return;
			}
		}

		store.setCurrentDialogue(dialogueId);
		store.incrementDialogueCount();

		// Apply any effects
		if (dialogue.effects) {
			dialogue.effects.forEach((effect) => {
				store.updateStat(effect.stat, effect.value);
			});
		}

		// Check if this dialogue triggers a scene change
		// (When dialogue ID starts with different chapter/scene)
		const currentScene = this.getCurrentScene();
		if (currentScene && !dialogueId.startsWith(currentScene.id)) {
			// Try to find the matching scene
			const result = this.findSceneByDialogue(dialogueId);
			if (result) {
				const { scene: newScene, chapterId } = result;

				// CHECK FOR CHAPTER TRANSITION
				if (chapterId !== store.currentChapter) {
					// Trigger Night Phase
					store.setPendingTransition({
						chapterId,
						sceneId: newScene.id,
						dialogueId,
					});
					store.setNightPhase(true);

					// DO NOT update state yet. Wait for night phase completion.
					return;
				}

				// Normal Scene Transition (Same Chapter)
				store.setCurrentChapter(chapterId);
				store.setCurrentScene(newScene.id);

				// Change music if needed
				if (newScene.music && newScene.music !== currentScene.music) {
					audioManager.playMusic(newScene.music);
				}
			}
		}
	}

	// Get current scene object
	static getCurrentScene() {
		const store = useGameStore.getState();
		const chapter = chapters[store.currentChapter];
		if (!chapter) return null;

		return chapter.scenes.find((s) => s.id === store.currentScene);
	}

	// Find scene and chapter by dialogue ID
	static findSceneByDialogue(
		dialogueId: string
	): { scene: any; chapterId: number } | null {
		// Search all chapters for a scene with this dialogue
		for (const chapter of Object.values(chapters)) {
			// Check if dialogue ID starts with chapter prefix (e.g., "ch2_")
			// This is safer than scene ID matching
			const chapterPrefix = `ch${chapter.id}_`;
			if (dialogueId.startsWith(chapterPrefix)) {
				// Find the specific scene within this chapter
				// We assume scene IDs usually match the start of dialogue IDs or we find the scene that contains this dialogue
				// Since we don't have a direct mapping, we'll look for the scene that matches the dialogue prefix best
				// OR we can just rely on the fact that we found the chapter, and now we need the scene.

				// Better approach: Iterate scenes and check if dialogue ID starts with scene ID (more specific)
				for (const scene of chapter.scenes) {
					// Check 1: Dialogue ID starts with scene ID (e.g. "ch2_fpt_1" starts with "ch2_fpt")
					if (dialogueId.startsWith(scene.id)) {
						return { scene, chapterId: chapter.id };
					}
					// Check 2: Dialogue ID matches the scene's starting dialogue (e.g. "ch2_intro")
					if (dialogueId === scene.dialogueStart) {
						return { scene, chapterId: chapter.id };
					}
				}

				// Fallback: If no specific scene matches (e.g. generic dialogue),
				// return the first scene of the chapter or keep current if valid?
				// For now, let's assume strict naming convention: sceneId + "_"
			}
		}
		return null;
	}
}
