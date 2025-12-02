// ==========================================
// GAME FLOW CONTROLLER
// Handles scene transitions and game progression
// ==========================================

import { useGameStore } from '@/store/gameStore';
import { chapters, allDialogues } from '@/data/chapters';
import { audioManager } from '@/core/AudioManager';
import type { StatsEffect } from '@/data/types';

interface Choice {
	id: string;
	text: string;
	textVi: string;
	textEn: string;
	next?: string;
	effects?: StatsEffect[];
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
		if (firstDialogue) {
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

		// Play SFX for choice
		audioManager.playSFX('/assets/audio/sfx/choice.ogg');

		// Go to next dialogue
		if (choice.next) {
			this.goToDialogue(choice.next);
		}
	}

	// Go to specific dialogue
	static goToDialogue(dialogueId: string): void {
		const store = useGameStore.getState();
		const dialogue = allDialogues[dialogueId];

		if (!dialogue) {
			console.warn(`Dialogue ${dialogueId} not found`);
			return;
		}

		store.setCurrentDialogue(dialogueId);

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
			const newScene = this.findSceneByDialogue(dialogueId);
			if (newScene) {
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

	// Find scene by dialogue ID
	static findSceneByDialogue(dialogueId: string): any {
		// Search all chapters for a scene with this dialogue
		for (const chapter of Object.values(chapters)) {
			for (const scene of chapter.scenes) {
				if (dialogueId.startsWith(scene.id.substring(0, 3))) {
					return scene;
				}
			}
		}
		return null;
	}
}
