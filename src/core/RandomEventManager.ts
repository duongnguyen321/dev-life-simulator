// ==========================================
// RANDOM EVENT MANAGER
// Handles random event triggering and selection
// ==========================================

import { randomEvents } from '@/data/randomEvents';
import type { RandomEvent, Stats, Condition } from '@/data/types';
import { ConditionType, Operator } from '@/data/enum';

export class RandomEventManager {
	/**
	 * Determine if a random event should be triggered based on probability
	 * @param baseChance - Base probability (0-1) for event to trigger
	 * @returns true if event should trigger
	 */
	static shouldTriggerEvent(baseChance: number): boolean {
		return Math.random() < baseChance;
	}

	/**
	 * Check if a single condition is met
	 */
	private static checkCondition(
		condition: Condition,
		stats: Stats,
		flags: Record<string, any>
	): boolean {
		const { type, key, operator, value } = condition;

		let actualValue: any;

		// Get the actual value based on condition type
		switch (type) {
			case ConditionType.STAT:
				actualValue = stats[key as keyof Stats];
				break;
			case ConditionType.FLAG:
				actualValue = flags[key];
				break;
			case ConditionType.SKILL:
				// For skills, check if skill exists and has level > 0
				actualValue = flags[`skill_${key}`] || 0;
				break;
			default:
				return false;
		}

		// Compare based on operator
		switch (operator) {
			case Operator.EQUAL:
				return actualValue === value;
			case Operator.NOT_EQUAL:
				return actualValue !== value;
			case Operator.GT:
				return actualValue > value;
			case Operator.LT:
				return actualValue < value;
			case Operator.GTE:
				return actualValue >= value;
			case Operator.LTE:
				return actualValue <= value;
			default:
				return false;
		}
	}

	/**
	 * Check if all conditions for an event are met
	 */
	static checkEventConditions(
		event: RandomEvent,
		stats: Stats,
		flags: Record<string, any>
	): boolean {
		// If no conditions, event is always available
		if (!event.conditions || event.conditions.length === 0) {
			return true;
		}

		// All conditions must be met (AND logic)
		return event.conditions.every((condition) =>
			this.checkCondition(condition, stats, flags)
		);
	}

	/**
	 * Initialize shuffled queue of all event IDs for a new game
	 * @param currentChapter - Current chapter for filtering
	 * @returns Shuffled array of event IDs
	 */
	static initializeEventQueue(currentChapter?: number): string[] {
		// Filter events by chapter if specified
		let eventsToQueue = randomEvents;

		if (currentChapter) {
			eventsToQueue = randomEvents.filter((event) => {
				// Check minChapter
				if (event.minChapter && currentChapter < event.minChapter) {
					return false;
				}
				// Check maxChapter
				if (event.maxChapter && currentChapter > event.maxChapter) {
					return false;
				}
				return true;
			});
		}

		// Get filtered event IDs
		const allEventIds = eventsToQueue.map((event) => event.id);

		// Shuffle using Fisher-Yates algorithm
		const shuffled = [...allEventIds];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled;
	}

	/**
	 * Get next event from queue, checking conditions and chapter
	 * If conditions not met, move event to back of queue
	 * @param eventQueue - Current event queue
	 * @param stats - Current player stats
	 * @param flags - Current game flags
	 * @param currentChapter - Current chapter for filtering
	 * @returns Event to display and updated queue
	 */
	static getNextEvent(
		eventQueue: string[],
		stats: Stats,
		flags: Record<string, any>,
		currentChapter?: number
	): { event: RandomEvent | null; updatedQueue: string[] } {
		if (eventQueue.length === 0) {
			return { event: null, updatedQueue: [] };
		}

		// Make a copy to avoid mutation
		const queue = [...eventQueue];
		let attemptsLeft = queue.length; // Prevent infinite loop

		while (attemptsLeft > 0 && queue.length > 0) {
			// Pop first event from queue
			const eventId = queue.shift()!;
			const event = randomEvents.find((e) => e.id === eventId);

			if (!event) {
				attemptsLeft--;
				continue;
			}

			// Check chapter restrictions first
			if (currentChapter) {
				if (event.minChapter && currentChapter < event.minChapter) {
					// Too early, move to back for later
					queue.push(eventId);
					attemptsLeft--;
					continue;
				}
				if (event.maxChapter && currentChapter > event.maxChapter) {
					// Too late, skip this event entirely (remove from queue)
					attemptsLeft--;
					continue;
				}
			}

			// Check if conditions are met
			if (this.checkEventConditions(event, stats, flags)) {
				// Conditions met! Return this event
				return { event, updatedQueue: queue };
			}

			// Conditions not met, move to back of queue for later
			queue.push(eventId);
			attemptsLeft--;
		}

		// All events checked, none have conditions met
		// Return first event anyway (or null)
		return { event: null, updatedQueue: queue };
	}

	/**
	 * Clear event from queue (for testing or special cases)
	 */
	static removeEventFromQueue(eventQueue: string[], eventId: string): string[] {
		return eventQueue.filter((id) => id !== eventId);
	}

	/**
	 * Get all available events for current game state (for debugging)
	 */
	static getAvailableEvents(
		stats: Stats,
		flags: Record<string, any>,
		eventQueue: string[] = []
	): RandomEvent[] {
		return eventQueue
			.map((id) => randomEvents.find((e) => e.id === id))
			.filter((event): event is RandomEvent => {
				if (!event) return false;
				return this.checkEventConditions(event, stats, flags);
			});
	}
}
