import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SceneProps {
	background: string;
	children: ReactNode;
	transition?: boolean;
	onClick?: (e: React.MouseEvent) => void;
}

export default function Scene({
	background,
	children,
	transition = true,
	onClick,
}: SceneProps) {
	return (
		<motion.div
			className='scene-container relative'
			initial={transition ? { opacity: 0 } : undefined}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			onClick={onClick}
			style={{
				width: '100%',
				height: '100vh',
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				imageRendering: 'pixelated',
			}}
		>
			{children}
		</motion.div>
	);
}
