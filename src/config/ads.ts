// Configuration for advertisements and donations
export const adsConfig = {
	// Buy Me a Coffee configuration
	buyMeCoffee: {
		enabled: true,
		// TODO: Replace with your actual Buy Me a Coffee username
		url: 'https://www.buymeacoffee.com/donkey321',
		username: 'donkey321',
	},

	// Advertisement configuration
	ads: {
		enabled: true,
		// Set to 'static' for custom banners, 'adsense' for Google AdSense
		type: 'static' as 'static' | 'adsense',

		// Static banner configuration
		staticBanner: {
			enabled: true,
			// You can customize these messages or add image URLs
			messages: {
				en: 'Enjoying the game? Support the developer!',
				vi: 'Thích game này? Hỗ trợ nhà phát triển!',
			},
		},

		// Google AdSense configuration (for future use)
		adsense: {
			enabled: false,
			clientId: '', // Your AdSense client ID (e.g., 'ca-pub-XXXXXXXXXXXXXXXX')
			slotId: '', // Your AdSense slot ID
		},
	},

	// Feature flags
	features: {
		showOnMainMenu: true,
		showOnEndingScreen: true,
		allowUserToDisable: true, // Allow users to hide support banners in settings
	},
};

export type AdsConfig = typeof adsConfig;
