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
	frameWidth = 64,
	frameHeight = 64,
	scale = 1,
	className = '',
}) => {
	// For now, we just display the first frame of the spritesheet
	// In the future, we can add animation logic here
	return (
		<div
			className={`inline-block overflow-hidden ${className}`}
			style={{
				width: frameWidth * scale,
				height: frameHeight * scale,
				backgroundImage: `url(${src})`,
				backgroundPosition: '0 0', // First frame
				backgroundSize: 'auto 100%', // Maintain aspect ratio based on height
				backgroundRepeat: 'no-repeat',
				imageRendering: 'pixelated', // Keep pixel art crisp
			}}
		/>
	);
};
