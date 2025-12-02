// ==========================================
// AUDIO MANAGER - Howler.js Integration
// ==========================================

import { Howl, Howler } from 'howler';

class AudioManager {
	private music: Map<string, Howl> = new Map();
	private sfx: Map<string, Howl> = new Map();
	private currentMusic: Howl | null = null;
	private currentMusicName: string | null = null;

	private _musicVolume: number = 0.6;
	private _sfxVolume: number = 0.5;
	private _muted: boolean = false;

	constructor() {
		// Set global volume
		Howler.volume(0.7);
	}

	// ==========================================
	// MUSIC MANAGEMENT
	// ==========================================

	/**
	 * Preload music for a chapter
	 */
	preloadChapterMusic(chapter: number): void {
		const trackPath = `/audio/music/chapters/ch${chapter}_theme.ogg`;
		const trackName = `chapter_${chapter}`;

		if (!this.music.has(trackName)) {
			const track = new Howl({
				src: [trackPath],
				volume: this._musicVolume,
				loop: true,
				preload: true,
			});
			this.music.set(trackName, track);
		}
	}

	/**
	 * Play background music with crossfade
	 */
	playMusic(name: string, fadeTime: number = 2000): void {
		// Don't replay if already playing
		if (this.currentMusicName === name && this.currentMusic?.playing()) {
			return;
		}

		const track = this.music.get(name);
		if (!track) {
			console.warn(`Music track "${name}" not found. Preload it first.`);
			return;
		}

		// Fade out current music
		if (this.currentMusic && this.currentMusic.playing()) {
			const oldMusic = this.currentMusic;
			const oldVolume = this._musicVolume;
			oldMusic.fade(oldVolume, 0, fadeTime);
			setTimeout(() => {
				oldMusic.stop();
			}, fadeTime);
		}

		// Fade in new music
		track.volume(0);
		track.play();
		track.fade(0, this._musicVolume, fadeTime);
		this.currentMusic = track;
		this.currentMusicName = name;
	}

	/**
	 * Stop current music
	 */
	stopMusic(fadeTime: number = 1000): void {
		if (this.currentMusic) {
			this.currentMusic.fade(this._musicVolume, 0, fadeTime);
			setTimeout(() => {
				this.currentMusic?.stop();
				this.currentMusic = null;
				this.currentMusicName = null;
			}, fadeTime);
		}
	}

	// ==========================================
	// SFX MANAGEMENT
	// ==========================================

	/**
	 * Play sound effect
	 */
	playSFX(name: string, volume?: number): void {
		let sound = this.sfx.get(name);

		if (!sound) {
			// Auto-load SFX on first play
			sound = new Howl({
				src: [`/audio/sfx/${name}.wav`],
				volume: volume ?? this._sfxVolume,
			});
			this.sfx.set(name, sound);
		}

		sound.play();
	}

	/**
	 * Preload SFX
	 */
	preloadSFX(names: string[]): void {
		names.forEach((name) => {
			if (!this.sfx.has(name)) {
				const sound = new Howl({
					src: [`/audio/sfx/${name}.wav`],
					volume: this._sfxVolume,
					preload: true,
				});
				this.sfx.set(name, sound);
			}
		});
	}

	// ==========================================
	// VOLUME CONTROLS
	// ==========================================

	setMusicVolume(volume: number): void {
		this._musicVolume = Math.max(0, Math.min(1, volume));
		if (this.currentMusic) {
			this.currentMusic.volume(this._musicVolume);
		}
	}

	setSFXVolume(volume: number): void {
		this._sfxVolume = Math.max(0, Math.min(1, volume));
	}

	setMasterVolume(volume: number): void {
		Howler.volume(Math.max(0, Math.min(1, volume)));
	}

	getMusicVolume(): number {
		return this._musicVolume;
	}

	getSFXVolume(): number {
		return this._sfxVolume;
	}

	getMasterVolume(): number {
		return Howler.volume();
	}

	// ==========================================
	// MUTE CONTROLS
	// ==========================================

	toggleMute(): void {
		this._muted = !this._muted;
		Howler.mute(this._muted);
	}

	mute(): void {
		this._muted = true;
		Howler.mute(true);
	}

	unmute(): void {
		this._muted = false;
		Howler.mute(false);
	}

	isMuted(): boolean {
		return this._muted;
	}

	// ==========================================
	// CLEANUP
	// ==========================================

	/**
	 * Unload all audio to free memory
	 */
	cleanup(): void {
		this.music.forEach((track) => track.unload());
		this.sfx.forEach((sound) => sound.unload());
		this.music.clear();
		this.sfx.clear();
		this.currentMusic = null;
		this.currentMusicName = null;
	}
}

// Singleton instance
export const audioManager = new AudioManager();
