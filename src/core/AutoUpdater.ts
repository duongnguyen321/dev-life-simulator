/**
 * Auto-Update System
 * Fetches version from remote and prompts update if newer version available
 */

interface VersionInfo {
	version: string;
	downloadUrl?: string;
	releaseNotes?: string;
	forceUpdate?: boolean;
}

// Configuration - Update these for your deployment
const VERSION_CHECK_URL =
	'https://raw.githubusercontent.com/YOUR_USERNAME/DevLife_Simulator/main/version.json';
const CHECK_INTERVAL_MS = 60 * 60 * 1000; // Check every hour

class AutoUpdater {
	private currentVersion: string;
	private checkInterval: number | null = null;
	private onUpdateAvailable?: (info: VersionInfo) => void;

	constructor() {
		this.currentVersion = this.getCurrentVersion();
	}

	private getCurrentVersion(): string {
		// In production, this would read from package.json or embedded at build time
		return '1.0.0';
	}

	/**
	 * Compare semantic versions
	 * Returns: 1 if v1 > v2, -1 if v1 < v2, 0 if equal
	 */
	private compareVersions(v1: string, v2: string): number {
		const parts1 = v1.split('.').map(Number);
		const parts2 = v2.split('.').map(Number);

		for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
			const p1 = parts1[i] || 0;
			const p2 = parts2[i] || 0;
			if (p1 > p2) return 1;
			if (p1 < p2) return -1;
		}
		return 0;
	}

	/**
	 * Check for updates from remote server
	 */
	async checkForUpdate(): Promise<VersionInfo | null> {
		try {
			const response = await fetch(VERSION_CHECK_URL, {
				cache: 'no-store',
				headers: { 'Cache-Control': 'no-cache' },
			});

			if (!response.ok) {
				console.warn('[AutoUpdater] Failed to fetch version info');
				return null;
			}

			const remoteInfo: VersionInfo = await response.json();

			if (this.compareVersions(remoteInfo.version, this.currentVersion) > 0) {
				console.log(
					`[AutoUpdater] New version available: ${remoteInfo.version}`
				);
				return remoteInfo;
			}

			console.log('[AutoUpdater] App is up to date');
			return null;
		} catch (error) {
			console.warn('[AutoUpdater] Update check failed:', error);
			return null;
		}
	}

	/**
	 * Start background version checking
	 */
	startBackgroundCheck(onUpdate: (info: VersionInfo) => void): void {
		this.onUpdateAvailable = onUpdate;

		// Check immediately on start
		this.checkForUpdate().then((info) => {
			if (info && this.onUpdateAvailable) {
				this.onUpdateAvailable(info);
			}
		});

		// Then check periodically
		this.checkInterval = window.setInterval(async () => {
			const info = await this.checkForUpdate();
			if (info && this.onUpdateAvailable) {
				this.onUpdateAvailable(info);
			}
		}, CHECK_INTERVAL_MS);
	}

	/**
	 * Stop background checking
	 */
	stopBackgroundCheck(): void {
		if (this.checkInterval) {
			clearInterval(this.checkInterval);
			this.checkInterval = null;
		}
	}

	/**
	 * Get current app version
	 */
	getVersion(): string {
		return this.currentVersion;
	}
}

// Singleton instance
export const autoUpdater = new AutoUpdater();

// React hook for using auto-updater
import { useState, useEffect } from 'react';

export function useAutoUpdate() {
	const [updateInfo, setUpdateInfo] = useState<VersionInfo | null>(null);
	const [isChecking, setIsChecking] = useState(false);

	useEffect(() => {
		autoUpdater.startBackgroundCheck((info) => {
			setUpdateInfo(info);
		});

		return () => {
			autoUpdater.stopBackgroundCheck();
		};
	}, []);

	const checkNow = async () => {
		setIsChecking(true);
		const info = await autoUpdater.checkForUpdate();
		setUpdateInfo(info);
		setIsChecking(false);
		return info;
	};

	const dismissUpdate = () => {
		setUpdateInfo(null);
	};

	return {
		updateInfo,
		isChecking,
		currentVersion: autoUpdater.getVersion(),
		checkNow,
		dismissUpdate,
	};
}
