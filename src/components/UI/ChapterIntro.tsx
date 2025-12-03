import { useEffect, useState } from 'react';
import { Chapter } from '@/data/types';
import { useGameStore } from '@/store/gameStore';

interface ChapterIntroProps {
	chapter: Chapter;
	onComplete: () => void;
}

export default function ChapterIntro({
	chapter,
	onComplete,
}: ChapterIntroProps) {
	const { settings } = useGameStore();
	const [isVisible, setIsVisible] = useState(true);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		// Start animation sequence
		const showTimer = setTimeout(() => {
			setShowContent(true);
		}, 500);

		// Fade out after a few seconds
		const hideTimer = setTimeout(() => {
			setIsVisible(false);
		}, 4500);

		// Complete callback after fade out
		const completeTimer = setTimeout(() => {
			onComplete();
		}, 5500);

		return () => {
			clearTimeout(showTimer);
			clearTimeout(hideTimer);
			clearTimeout(completeTimer);
		};
	}, [onComplete]);

	if (!isVisible) return null;

	const isVi = settings.language === 'vi';

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div
				className={`text-center text-white transition-all duration-1000 transform ${
					showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}
			>
				{/* Chapter Number */}
				<h2 className='pixel-font text-2xl md:text-3xl text-gray-400 mb-4 tracking-widest uppercase'>
					{isVi ? `Chương ${chapter.id}` : `Chapter ${chapter.id}`}
				</h2>

				{/* Chapter Title */}
				<h1 className='pixel-font text-4xl md:text-6xl font-bold mb-6 text-yellow-400 drop-shadow-lg max-w-4xl mx-auto leading-tight'>
					{isVi ? chapter.nameVi : chapter.nameEn}
				</h1>

				{/* Divider */}
				<div className='w-24 h-1 bg-white mx-auto mb-6 rounded-full opacity-50'></div>

				{/* Age Range */}
				<p className='pixel-font text-xl md:text-2xl text-blue-300 mb-2'>
					{chapter.ageRange}
				</p>

				{/* Theme */}
				<p className='pixel-font text-lg md:text-xl text-gray-300 italic max-w-2xl mx-auto px-4'>
					"{isVi ? chapter.themeVi : chapter.themeEn}"
				</p>
			</div>
		</div>
	);
}
