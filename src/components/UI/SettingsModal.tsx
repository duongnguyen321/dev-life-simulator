import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { audioManager } from '@/core/AudioManager';

interface SettingsModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
	const { settings, updateSettings } = useGameStore();

	if (!isOpen) return null;

	const handleVolumeChange = (type: 'music' | 'sfx', value: number) => {
		updateSettings(
			type === 'music' ? { musicVolume: value } : { sfxVolume: value }
		);
		if (type === 'music') {
			audioManager.setMusicVolume(value);
		} else {
			audioManager.setSFXVolume(value);
		}
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
			>
				<motion.div
					initial={{ scale: 0.9, y: 20 }}
					animate={{ scale: 1, y: 0 }}
					exit={{ scale: 0.9, y: 20 }}
					className='bg-bg-secondary border-4 border-steel-mind p-8 rounded-lg w-full max-w-md'
				>
					<h2 className='pixel-font text-2xl text-center text-steel-mind mb-8'>
						{settings.language === 'vi' ? 'CÀI ĐẶT' : 'SETTINGS'}
					</h2>

					<div className='space-y-6'>
						{/* Language */}
						<div className='space-y-2'>
							<label className='pixel-font text-text-primary block'>
								{settings.language === 'vi'
									? 'Ngôn Ngữ / Language'
									: 'Language'}
							</label>
							<div className='flex gap-4'>
								<button
									onClick={() => updateSettings({ language: 'vi' })}
									className={`flex-1 py-2 pixel-font border-2 transition-colors ${
										settings.language === 'vi'
											? 'bg-steel-mind text-bg-primary border-steel-mind'
											: 'border-gray-600 text-gray-400 hover:border-steel-mind'
									}`}
								>
									Tiếng Việt
								</button>
								<button
									onClick={() => updateSettings({ language: 'en' })}
									className={`flex-1 py-2 pixel-font border-2 transition-colors ${
										settings.language === 'en'
											? 'bg-steel-mind text-bg-primary border-steel-mind'
											: 'border-gray-600 text-gray-400 hover:border-steel-mind'
									}`}
								>
									English
								</button>
							</div>
						</div>

						{/* Music Volume */}
						<div className='space-y-2'>
							<div className='flex justify-between text-text-primary pixel-font'>
								<span>{settings.language === 'vi' ? 'Nhạc Nền' : 'Music'}</span>
								<span>{Math.round(settings.musicVolume * 100)}%</span>
							</div>
							<input
								type='range'
								min='0'
								max='1'
								step='0.1'
								value={settings.musicVolume}
								onChange={(e) =>
									handleVolumeChange('music', parseFloat(e.target.value))
								}
								className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-steel-mind'
							/>
						</div>

						{/* SFX Volume */}
						<div className='space-y-2'>
							<div className='flex justify-between text-text-primary pixel-font'>
								<span>{settings.language === 'vi' ? 'Âm Thanh' : 'SFX'}</span>
								<span>{Math.round(settings.sfxVolume * 100)}%</span>
							</div>
							<input
								type='range'
								min='0'
								max='1'
								step='0.1'
								value={settings.sfxVolume}
								onChange={(e) =>
									handleVolumeChange('sfx', parseFloat(e.target.value))
								}
								className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-steel-mind'
							/>
						</div>

						{/* Text Speed */}
						<div className='space-y-2'>
							<div className='flex justify-between text-text-primary pixel-font'>
								<span>
									{settings.language === 'vi' ? 'Tốc độ chữ' : 'Text Speed'}
								</span>
								<span>{settings.textSpeed}%</span>
							</div>
							<input
								type='range'
								min='0'
								max='100'
								step='10'
								value={settings.textSpeed}
								onChange={(e) =>
									updateSettings({ textSpeed: parseInt(e.target.value) })
								}
								className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-steel-mind'
							/>
						</div>
					</div>

					<div className='mt-8 flex justify-center'>
						<button
							onClick={onClose}
							className='px-8 py-2 bg-steel-mind text-bg-primary pixel-font hover:bg-blue-400 transition-colors rounded'
						>
							{settings.language === 'vi' ? 'ĐÓNG' : 'CLOSE'}
						</button>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
