// ==========================================
// SAVE SYSTEM - LocalForage Integration
// ==========================================

import localforage from 'localforage';
import type { SaveData } from '@/data/types';

class SaveSystem {
	private store: LocalForage;
	private currentSlot: number = 1;
	private readonly MAX_SLOTS = 3;

	constructor() {
		// Configure localforage
		this.store = localforage.createInstance({
			name: 'DevLifeSimulator',
			storeName: 'saves',
			description: 'Save data for DevLife Simulator',
		});
	}

	// ==========================================
	// SAVE OPERATIONS
	// ==========================================

	/**
	 * Save current game state
	 */
	async save(slot: number, data: Partial<SaveData>): Promise<void> {
		if (slot < 1 || slot > this.MAX_SLOTS) {
			throw new Error(
				`Invalid save slot: ${slot}. Must be between 1 and ${this.MAX_SLOTS}`
			);
		}

		const saveData: SaveData = {
			version: '1.0.0',
			playerName: data.playerName || 'Player',
			chapter: data.chapter || 1,
			scene: data.scene || 'start',
			stats: data.stats || {
				steelMind: 50,
				humanity: 50,
				vision: 50,
				health: 100,
				stress: 0,
				money: 500000,
			},
			inventory: data.inventory || [],
			flags: data.flags || {},
			achievements: data.achievements || [],
			playtime: data.playtime || 0,
			timestamp: Date.now(),
			preview: data.preview || '',
		};

		await this.store.setItem(`save_${slot}`, saveData);
		this.currentSlot = slot;
	}

	/**
	 * Load game from slot
	 */
	async load(slot: number): Promise<SaveData | null> {
		if (slot < 1 || slot > this.MAX_SLOTS) {
			throw new Error(
				`Invalid save slot: ${slot}. Must be between 1 and ${this.MAX_SLOTS}`
			);
		}

		const data = await this.store.getItem<SaveData>(`save_${slot}`);
		if (data) {
			this.currentSlot = slot;
		}
		return data;
	}

	/**
	 * Delete save slot
	 */
	async deleteSave(slot: number): Promise<void> {
		if (slot < 1 || slot > this.MAX_SLOTS) {
			throw new Error(
				`Invalid save slot: ${slot}. Must be between 1 and ${this.MAX_SLOTS}`
			);
		}

		await this.store.removeItem(`save_${slot}`);
	}

	/**
	 * Get all save slots info
	 */
	async getAllSaves(): Promise<Array<SaveData | null>> {
		const saves: Array<SaveData | null> = [];

		for (let slot = 1; slot <= this.MAX_SLOTS; slot++) {
			const data = await this.store.getItem<SaveData>(`save_${slot}`);
			saves.push(data);
		}

		return saves;
	}

	/**
	 * Check if slot has save data
	 */
	async hasSave(slot: number): Promise<boolean> {
		const data = await this.store.getItem(`save_${slot}`);
		return data !== null;
	}

	// ==========================================
	// AUTO-SAVE
	// ==========================================

	/**
	 * Auto-save to special slot 0
	 */
	async autoSave(data: Partial<SaveData>): Promise<void> {
		const saveData: SaveData = {
			version: '1.0.0',
			playerName: data.playerName || 'Player',
			chapter: data.chapter || 1,
			scene: data.scene || 'start',
			stats: data.stats || {
				steelMind: 50,
				humanity: 50,
				vision: 50,
				health: 100,
				stress: 0,
				money: 10000,
			},
			inventory: data.inventory || [],
			flags: data.flags || {},
			achievements: data.achievements || [],
			playtime: data.playtime || 0,
			timestamp: Date.now(),
			preview: data.preview || '',
		};

		await this.store.setItem('autosave', saveData);
	}

	/**
	 * Load auto-save
	 */
	async loadAutoSave(): Promise<SaveData | null> {
		return await this.store.getItem<SaveData>('autosave');
	}

	/**
	 * Delete auto-save
	 */
	async deleteAutoSave(): Promise<void> {
		await this.store.removeItem('autosave');
	}

	/**
	 * Load game from save data and apply to game store
	 */
	async loadGame(saveId: string | number): Promise<boolean> {
		try {
			let saveData: SaveData | null = null;

			if (saveId === 'autosave' || saveId === 'auto') {
				saveData = await this.loadAutoSave();
			} else if (typeof saveId === 'number') {
				saveData = await this.load(saveId);
			}

			if (!saveData) {
				console.error('Save data not found');
				return false;
			}

			// Import and update game store
			const { useGameStore } = await import('@/store/gameStore');
			const store = useGameStore.getState();

			store.setCurrentChapter(saveData.chapter);
			store.setCurrentScene(saveData.scene);
			store.updateStats(saveData.stats);

			if (saveData.inventory) {
				saveData.inventory.forEach((item) => store.addToInventory(item));
			}
			if (saveData.flags) {
				Object.entries(saveData.flags).forEach(([key, value]) => {
					store.setFlag(key, value);
				});
			}
			if (saveData.achievements) {
				saveData.achievements.forEach((id) => store.unlockAchievement(id));
			}

			return true;
		} catch (error) {
			console.error('Failed to load game:', error);
			return false;
		}
	}

	// ==========================================
	// IMPORT/EXPORT
	// ==========================================

	/**
	 * Export save to JSON string
	 */
	async exportSave(slot: number): Promise<string> {
		const data = await this.load(slot);
		if (!data) {
			throw new Error(`No save data in slot ${slot}`);
		}
		return JSON.stringify(data, null, 2);
	}

	/**
	 * Import save from JSON string
	 */
	async importSave(slot: number, jsonString: string): Promise<void> {
		try {
			const data: SaveData = JSON.parse(jsonString);

			// Validate data structure
			if (!data.version || !data.chapter || !data.stats) {
				throw new Error('Invalid save data format');
			}

			await this.save(slot, data);
		} catch (error) {
			throw new Error(`Failed to import save: ${error}`);
		}
	}

	// ==========================================
	// SETTINGS
	// ==========================================

	/**
	 * Save game settings
	 */
	async saveSettings(settings: any): Promise<void> {
		await this.store.setItem('settings', settings);
	}

	/**
	 * Load game settings
	 */
	async loadSettings(): Promise<any | null> {
		return await this.store.getItem('settings');
	}

	// ==========================================
	// UTILITIES
	// ==========================================

	/**
	 * Get current slot number
	 */
	getCurrentSlot(): number {
		return this.currentSlot;
	}

	/**
	 * Clear all save data (use with caution!)
	 */
	async clearAll(): Promise<void> {
		await this.store.clear();
	}

	/**
	 * Get storage stats
	 */
	async getStorageInfo(): Promise<{
		totalSlots: number;
		usedSlots: number;
		hasAutoSave: boolean;
	}> {
		const saves = await this.getAllSaves();
		const usedSlots = saves.filter((s) => s !== null).length;
		const hasAutoSave = (await this.loadAutoSave()) !== null;

		return {
			totalSlots: this.MAX_SLOTS,
			usedSlots,
			hasAutoSave,
		};
	}
}

// Singleton instance
export const saveSystem = new SaveSystem();
