import { motion } from 'framer-motion';
import { adsConfig } from '@/config/ads';
import { useGameStore } from '@/store/gameStore';

interface AdBannerProps {
	position?: 'top' | 'bottom';
	className?: string;
}

export default function AdBanner({
	position = 'top',
	className = '',
}: AdBannerProps) {
	const { settings } = useGameStore();
	const isVi = settings.language === 'vi';

	// Check if user has disabled ads in settings
	const showAds = settings.showSupportBanner ?? true;

	if (!adsConfig.ads.enabled || !showAds) {
		return null;
	}

	// For now, we only support static banners
	// Google AdSense can be added later if needed
	if (adsConfig.ads.type === 'static' && adsConfig.ads.staticBanner.enabled) {
		const message = isVi
			? adsConfig.ads.staticBanner.messages.vi
			: adsConfig.ads.staticBanner.messages.en;

		return (
			<motion.div
				initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className={`ad-banner ${className}`}
			>
				<div className='bg-bg-secondary/80 border-2 border-steel-mind/30 rounded px-4 py-2 backdrop-blur-sm'>
					<p className='text-text-primary/70 text-xs md:text-sm text-center pixel-font'>
						{message}
					</p>
				</div>
			</motion.div>
		);
	}

	// Google AdSense implementation (placeholder for future)
	if (adsConfig.ads.type === 'adsense' && adsConfig.ads.adsense.enabled) {
		// TODO: Implement Google AdSense integration
		// This would require adding the AdSense script to index.html
		// and using the ad client/slot IDs from config
		return (
			<div className={`adsense-container ${className}`}>
				{/* AdSense ad unit would go here */}
				<div className='text-text-primary/50 text-xs text-center py-2'>
					Advertisement
				</div>
			</div>
		);
	}

	return null;
}
