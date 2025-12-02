import React from 'react';

interface SpriteProps {
	src: string;
	frameWidth?: number;
	frameHeight?: number;
	scale?: number;
	className?: string;
}

export const Sprite: React.FC<SpriteProps> = ({
	src,
	frameWidth = 64, // Default to 64px as requested
	frameHeight = 64,
	scale = 1,
	className = '',
}) => {
	const [frameCount, setFrameCount] = React.useState(1);
	const [currentFrame, setCurrentFrame] = React.useState(0);
	const [isLoaded, setIsLoaded] = React.useState(false);

	// Measure image dimensions to calculate frame count
	React.useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
			// User requested only the first 2 frames
			// Check if image is wide enough for at least 2 frames
			const availableFrames = Math.floor(img.naturalWidth / frameWidth);
			// Limit to max 2 frames for animation as requested
			setFrameCount(availableFrames >= 2 ? 2 : 1);
			setIsLoaded(true);
		};
	}, [src, frameWidth]);

	// Animation loop
	React.useEffect(() => {
		if (frameCount <= 1) return;

		const interval = setInterval(() => {
			setCurrentFrame((prev) => (prev + 1) % frameCount);
		}, 500); // Slower animation for 2 frames (adjust as needed)

		return () => clearInterval(interval);
	}, [frameCount]);

	if (!isLoaded) return null; // Or a placeholder

	return (
		<div
			className={`inline-block overflow-hidden ${className}`}
			style={{
				width: frameWidth, // Use original frame size
				height: frameHeight,
				transform: `scale(${scale})`, // Scale using CSS transform
				transformOrigin: 'center center', // Scale from center
				backgroundImage: `url(${src})`,
				backgroundPosition: `-${currentFrame * frameWidth}px 0px`,
				// backgroundSize: 'auto', // Default is auto, which keeps original pixel size
				backgroundRepeat: 'no-repeat',
				imageRendering: 'pixelated', // Keep pixel art crisp
			}}
		/>
	);
};
