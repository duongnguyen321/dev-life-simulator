// ==========================================
// STATS MANAGER - Hidden Stats System
// ==========================================

import type { Stats, StatsEffect } from '@/data/types';

class StatsManager {
	private stats: Stats = {
		steelMind: 50,
		humanity: 50,
		vision: 50,
		health: 100,
		stress: 0,
		money: 10000,
	};

	// Track stat changes for ending calculation
	private statHistory: Array<{
		stat: keyof Stats;
		value: number;
		reason: string;
	}> = [];

	// ==========================================
	// GETTERS
	// ==========================================

	getStats(): Stats {
		return { ...this.stats };
	}

	getStat(stat: keyof Stats): number {
		return this.stats[stat];
	}

	// ==========================================
	// SETTERS
	// ==========================================

	setStat(stat: keyof Stats, value: number): void {
		this.stats[stat] = Math.max(0, Math.min(100, value));
	}

	setAllStats(stats: Stats): void {
		this.stats = {
			steelMind: Math.max(0, Math.min(100, stats.steelMind)),
			humanity: Math.max(0, Math.min(100, stats.humanity)),
			vision: Math.max(0, Math.min(100, stats.vision)),
			health: Math.max(0, Math.min(100, stats.health)),
			stress: Math.max(0, Math.min(100, stats.stress)),
			money: Math.max(0, stats.money),
		};
	}

	// ==========================================
	// MODIFY STATS
	// ==========================================

	/**
	 * Apply stat effect with reason tracking
	 */
	applyEffect(effect: StatsEffect, reason: string = 'Unknown'): void {
		const currentValue = this.stats[effect.stat];
		const newValue = Math.max(0, Math.min(100, currentValue + effect.value));

		this.stats[effect.stat] = newValue;

		// Track change
		this.statHistory.push({
			stat: effect.stat,
			value: effect.value,
			reason: effect.description || reason,
		});
	}

	/**
	 * Apply multiple effects
	 */
	applyEffects(effects: StatsEffect[], reason: string = 'Unknown'): void {
		effects.forEach((effect) => this.applyEffect(effect, reason));
	}

	/**
	 * Modify stat by delta value
	 */
	modifyStat(
		stat: keyof Stats,
		delta: number,
		reason: string = 'Unknown'
	): void {
		this.applyEffect({ stat, value: delta }, reason);
	}

	// ==========================================
	// ENDING CALCULATION
	// ==========================================

	/**
	 * Calculate which ending the player gets based on stats
	 */
	calculateEnding(): string {
		const { steelMind, humanity, vision } = this.stats;

		// BAD ENDINGS (Extreme stats)
		if (steelMind > 90) {
			return 'machine-ending'; // The Machine - Too cold
		}
		if (humanity > 90) {
			return 'pushover-ending'; // The Pushover - Too soft
		}
		if (vision > 90) {
			return 'dreamer-ending'; // The Dreamer - Too idealistic
		}

		// TRUE ENDING (Balanced excellence)
		// High humanity and vision, moderate steel mind
		if (humanity >= 70 && vision >= 70 && steelMind >= 40 && steelMind <= 70) {
			return 'true-ending'; // The Architect - Balanced mastery
		}

		// GOOD ENDING (Balanced)
		const balance =
			Math.max(steelMind, humanity, vision) -
			Math.min(steelMind, humanity, vision);
		if (balance < 30 && steelMind >= 50 && humanity >= 50 && vision >= 50) {
			return 'balanced-ending'; // Decent life
		}

		// NORMAL ENDING
		return 'normal-ending';
	}

	/**
	 * Get dominant trait
	 */
	getDominantTrait(): keyof Stats {
		if (
			this.stats.steelMind >= this.stats.humanity &&
			this.stats.steelMind >= this.stats.vision
		) {
			return 'steelMind';
		}
		if (this.stats.humanity >= this.stats.vision) {
			return 'humanity';
		}
		return 'vision';
	}

	// ==========================================
	// UTILITIES
	// ==========================================

	/**
	 * Get stat color for UI
	 */
	getStatColor(stat: keyof Stats): string {
		const colors = {
			steelMind: '#4a90e2',
			humanity: '#f56565',
			vision: '#805ad5',
			health: '#48bb78',
			stress: '#e53e3e',
			money: '#ecc94b',
		};
		return colors[stat];
	}

	/**
	 * Get stat name for display
	 */
	getStatName(stat: keyof Stats, language: 'vi' | 'en' = 'vi'): string {
		const names = {
			steelMind: { vi: 'Tinh Thần Thép', en: 'Steel Mind' },
			humanity: { vi: 'Nhân Tính', en: 'Humanity' },
			vision: { vi: 'Tầm Nhìn', en: 'Vision' },
			health: { vi: 'Sức Khỏe', en: 'Health' },
			stress: { vi: 'Căng Thẳng', en: 'Stress' },
			money: { vi: 'Tiền Bạc', en: 'Money' },
		};
		return names[stat][language];
	}

	/**
	 * Reset stats to default
	 */
	reset(): void {
		this.stats = {
			steelMind: 50,
			humanity: 50,
			vision: 50,
			health: 100,
			stress: 0,
			money: 10000,
		};
		this.statHistory = [];
	}

	/**
	 * Get stat history for analytics
	 */
	getHistory(): typeof this.statHistory {
		return [...this.statHistory];
	}
}

// Singleton instance
export const statsManager = new StatsManager();
