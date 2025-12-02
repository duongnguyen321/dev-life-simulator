/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Custom game colors
				'steel-mind': '#4a90e2',
				humanity: '#f56565',
				vision: '#805ad5',
				'bg-primary': '#1a202c',
				'bg-secondary': '#2d3748',
				'text-primary': '#e2e8f0',
			},
			fontFamily: {
				pixel: ['"Press Start 2P"', 'monospace'],
			},
			keyframes: {
				'sprite-idle': {
					from: { backgroundPositionX: '0' },
					to: { backgroundPositionX: '-64px' },
				},
				'sprite-walk': {
					from: { backgroundPositionX: '0' },
					to: { backgroundPositionX: '-256px' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: { transform: 'translateY(100%)' },
					to: { transform: 'translateY(0)' },
				},
			},
			animation: {
				'sprite-idle': 'sprite-idle 1s steps(2) infinite',
				'sprite-walk': 'sprite-walk 0.6s steps(4) infinite',
				fadeIn: 'fadeIn 0.5s ease-in-out',
				slideUp: 'slideUp 0.3s ease-out',
			},
		},
	},
	plugins: [],
};
