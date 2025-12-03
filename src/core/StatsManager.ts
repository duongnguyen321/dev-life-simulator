// ==========================================
// STATS MANAGER - Hidden Stats System
// ==========================================

import type { Stats, StatsEffect } from '@/data/types';
import { StatID } from '@/data/enum';

class StatsManager {
	private stats: Stats = {
		[StatID.STEELMIND]: 50,
		[StatID.HUMANITY]: 50,
		[StatID.VISION]: 50,
		[StatID.HEALTH]: 100,
		[StatID.STRESS]: 0,
		[StatID.MONEY]: 10000,
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
			[StatID.STEELMIND]: Math.max(0, Math.min(100, stats[StatID.STEELMIND])),
			[StatID.HUMANITY]: Math.max(0, Math.min(100, stats[StatID.HUMANITY])),
			[StatID.VISION]: Math.max(0, Math.min(100, stats[StatID.VISION])),
			[StatID.HEALTH]: Math.max(0, Math.min(100, stats[StatID.HEALTH])),
			[StatID.STRESS]: Math.max(0, Math.min(100, stats[StatID.STRESS])),
			[StatID.MONEY]: Math.max(0, stats[StatID.MONEY]),
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
		const steelMind = this.stats[StatID.STEELMIND];
		const humanity = this.stats[StatID.HUMANITY];
		const vision = this.stats[StatID.VISION];

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
			this.stats[StatID.STEELMIND] >= this.stats[StatID.HUMANITY] &&
			this.stats[StatID.STEELMIND] >= this.stats[StatID.VISION]
		) {
			return StatID.STEELMIND;
		}
		if (this.stats[StatID.HUMANITY] >= this.stats[StatID.VISION]) {
			return StatID.HUMANITY;
		}
		return StatID.VISION;
	}

	// ==========================================
	// UTILITIES
	// ==========================================

	/**
	 * Get stat color for UI
	 */
	getStatColor(stat: keyof Stats): string {
		const colors = {
			[StatID.STEELMIND]: '#4a90e2',
			[StatID.HUMANITY]: '#f56565',
			[StatID.VISION]: '#805ad5',
			[StatID.HEALTH]: '#48bb78',
			[StatID.STRESS]: '#e53e3e',
			[StatID.MONEY]: '#ecc94b',
		};
		return colors[stat];
	}

	/**
	 * Get stat name for display
	 */
	getStatName(stat: keyof Stats, language: 'vi' | 'en' = 'vi'): string {
		const names = {
			[StatID.STEELMIND]: { vi: 'Tinh Thần Thép', en: 'Steel Mind' },
			[StatID.HUMANITY]: { vi: 'Nhân Tính', en: 'Humanity' },
			[StatID.VISION]: { vi: 'Tầm Nhìn', en: 'Vision' },
			[StatID.HEALTH]: { vi: 'Sức Khỏe', en: 'Health' },
			[StatID.STRESS]: { vi: 'Căng Thẳng', en: 'Stress' },
			[StatID.MONEY]: { vi: 'Tiền Bạc', en: 'Money' },
		};
		return names[stat][language];
	}

	/**
	 * Reset stats to default
	 */
	reset(): void {
		this.stats = {
			[StatID.STEELMIND]: 50,
			[StatID.HUMANITY]: 50,
			[StatID.VISION]: 50,
			[StatID.HEALTH]: 100,
			[StatID.STRESS]: 0,
			[StatID.MONEY]: 10000,
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
