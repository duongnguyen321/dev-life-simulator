import { motion } from 'framer-motion';
import { adsConfig } from '@/config/ads';
import { useGameStore } from '@/store/gameStore';

interface BuyMeCoffeeProps {
	variant?: 'button' | 'banner';
	className?: string;
}

export default function BuyMeCoffee({
	variant = 'button',
	className = '',
}: BuyMeCoffeeProps) {
	const { settings } = useGameStore();
	const isVi = settings.language === 'vi';

	if (!adsConfig.buyMeCoffee.enabled) {
		return null;
	}

	const handleClick = () => {
		// Open in external browser (works for web, Electron, and Capacitor)
		window.open(adsConfig.buyMeCoffee.url, '_blank', 'noopener,noreferrer');
	};

	if (variant === 'banner') {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className={`support-banner ${className}`}
			>
				<div className='bg-bg-secondary border-2 border-vision/50 rounded px-4 py-3 flex items-center justify-between gap-4 max-w-2xl mx-auto'>
					<div className='flex-1 text-center md:text-left'>
						<p className='text-text-primary text-sm md:text-base'>
							☕{' '}
							{isVi
								? 'Thích game này? Hỗ trợ nhà phát triển!'
								: 'Enjoying the game? Support the developer!'}
						</p>
					</div>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleClick}
						className='pixel-font text-sm md:text-base px-4 py-2 bg-vision border-2 border-vision text-white hover:bg-vision/80 transition-colors whitespace-nowrap'
					>
						{isVi ? '☕ Mua Cà Phê' : '☕ Buy Me a Coffee'}
					</motion.button>
				</div>
			</motion.div>
		);
	}

	// Button variant
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={handleClick}
			className={`
				pixel-font text-base px-6 py-3
				bg-gradient-to-r from-vision to-humanity
				border-2 border-vision
				text-white
				transition-all duration-200
				hover:shadow-lg hover:shadow-vision/50
				flex items-center gap-2 justify-center
				${className}
			`}
		>
			<span className='text-xl'>☕</span>
			<span>{isVi ? 'Mua Cà Phê Cho Tôi' : 'Buy Me a Coffee'}</span>
		</motion.button>
	);
}
