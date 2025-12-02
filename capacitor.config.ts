import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.devlife.simulator',
	appName: 'DevLife Simulator',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
	plugins: {
		SplashScreen: {
			launchShowDuration: 2000,
			backgroundColor: '#1a202c',
			showSpinner: false,
		},
	},
};

export default config;
