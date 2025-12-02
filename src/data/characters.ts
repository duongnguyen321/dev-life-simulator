import type { Character } from './types';

export const characters: Record<string, Character> = {
	// Main Character (Player)
	player: {
		id: 'player',
		name: 'You',
		nameVi: 'Bạn',
		nameEn: 'You',
		role: 'The Developer',
		description: 'A developer on a journey from childhood to success',
		sprites: {
			idle: '/assets/sprites/characters/player/idle.png',
			happy: '/assets/sprites/characters/player/happy.png',
			sad: '/assets/sprites/characters/player/sad.png',
			neutral: '/assets/sprites/characters/player/neutral.png',
		},
	},

	// Bố Q - The Deprecated Hero
	boQ: {
		id: 'boQ',
		name: 'Bố Q',
		nameVi: 'Bố Q',
		nameEn: 'Father Q',
		role: 'The Deprecated Hero',
		description:
			'A brilliant construction entrepreneur who rose to success and fell dramatically. The first and greatest influence on your life.',
		sprites: {
			neutral: '/assets/sprites/characters/family/bo_neutral.png',
			happy: '/assets/sprites/characters/family/bo_happy.png',
			sad: '/assets/sprites/characters/family/bo_sad.png',
		},
	},

	// Mẹ L.A - The Stable Server
	meLA: {
		id: 'meLA',
		name: 'Mẹ L.A',
		nameVi: 'Mẹ L.A',
		nameEn: 'Mother L.A',
		role: 'The Stable Server',
		description:
			'The emotional backbone of the family. Patient, sacrificing, practical.',
		sprites: {
			neutral: '/assets/sprites/characters/family/me_neutral.png',
			happy: '/assets/sprites/characters/family/me_happy.png',
			sad: '/assets/sprites/characters/family/me_sad.png',
		},
	},

	// Anh A - The Compiler (First Mentor)
	anhA: {
		id: 'anhA',
		name: 'Anh A',
		nameVi: 'Anh A',
		nameEn: 'Senior A',
		role: 'The Compiler',
		description:
			'First technical mentor. Harsh but fair. Teaches the importance of clean code.',
		sprites: {
			neutral: '/assets/sprites/characters/mentor/anha_neutral.png',
		},
	},

	// Anh S - The Visionary Leader
	anhS: {
		id: 'anhS',
		name: 'Anh S',
		nameVi: 'Anh S',
		nameEn: 'CEO S',
		role: 'The Visionary Leader',
		description:
			'EdTech CEO who teaches product thinking and education philosophy.',
		sprites: {
			neutral: '/assets/sprites/characters/mentor/anhs_neutral.png',
		},
	},

	// Anh V - The Brother in Arms
	anhV: {
		id: 'anhV',
		name: 'Anh V',
		nameVi: 'Anh V',
		nameEn: 'Senior V',
		role: 'The Brother in Arms',
		description: 'Former boss and friend. Values loyalty and brotherhood.',
		sprites: {
			neutral: '/assets/sprites/characters/mentor/anhv_neutral.png',
		},
	},

	// Anh L - The Hardcore Manager
	anhL: {
		id: 'anhL',
		name: 'Anh L',
		nameVi: 'Anh L',
		nameEn: 'CEO L',
		role: 'The Hardcore Manager',
		description:
			'Outsource company CEO. Ruthless, practical, results-oriented.',
		sprites: {
			neutral: '/assets/sprites/characters/mentor/anhl_neutral.png',
		},
	},

	// Narrator
	narrator: {
		id: 'narrator',
		name: 'Narrator',
		nameVi: 'Người kể chuyện',
		nameEn: 'Narrator',
		role: 'The Voice',
		description: 'The voice that guides you through your life story',
		sprites: {},
	},
};
