import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		// Optimize for pixel art
		assetsInlineLimit: 0, // Don't inline images to preserve pixel-perfect rendering
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: [
						'react',
						'react-dom',
						'react-router-dom',
						'zustand',
						'framer-motion',
						'howler',
						'localforage',
						'i18next',
						'react-i18next',
					],
				},
			},
		},
	},
	server: {
		port: 2004,
	},
});
