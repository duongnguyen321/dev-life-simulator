import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { saveSystem } from '@/core/SaveSystem';
import { audioManager } from '@/core/AudioManager';

interface LoadGameModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function LoadGameModal({ isOpen, onClose }: LoadGameModalProps) {
	const navigate = useNavigate();
	const { settings } = useGameStore();
	const [saves, setSaves] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isOpen) {
			loadSaves();
		}
	}, [isOpen]);

	const loadSaves = async () => {
		setIsLoading(true);
		const allSaves = await saveSystem.getAllSaves();
		const autoSave = await saveSystem.loadAutoSave();

		// Combine manual saves and auto-save
		const combinedSaves: any[] = [];

		// Add auto-save first if it exists
		if (autoSave) {
			combinedSaves.push({
				...autoSave,
				id: 'autosave',
			});
		}

		// Add manual saves with their slot IDs
		allSaves.forEach((save, index) => {
			if (save) {
				combinedSaves.push({
					...save,
					id: `${index + 1}`,
				});
			}
		});

		// Sort by timestamp desc
		combinedSaves.sort((a, b) => {
			return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
		});

		setSaves(combinedSaves);
		setIsLoading(false);
	};

	const handleLoad = async (saveId: string) => {
		audioManager.playSFX('ui/button_click');
		const success = await saveSystem.loadGame(saveId);
		if (success) {
			onClose();
			navigate('/game');
		}
	};

	const handleDelete = async (saveId: string, e: React.MouseEvent) => {
		e.stopPropagation();
		if (
			confirm(
				settings.language === 'vi'
					? 'Bạn có chắc muốn xóa file này?'
					: 'Are you sure you want to delete this save?'
			)
		) {
			if (saveId === 'autosave' || saveId === 'auto') {
				await saveSystem.deleteAutoSave();
			} else {
				const slotNum = parseInt(saveId);
				if (!isNaN(slotNum)) {
					await saveSystem.deleteSave(slotNum);
				}
			}
			loadSaves();
		}
	};

	if (!isOpen) return null;

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
					className='bg-bg-secondary border-4 border-steel-mind p-6 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col'
				>
					<div className='flex justify-between items-center mb-6'>
						<h2 className='pixel-font text-2xl text-steel-mind'>
							{settings.language === 'vi' ? 'TẢI GAME' : 'LOAD GAME'}
						</h2>
						<button
							onClick={onClose}
							className='text-gray-400 hover:text-white pixel-font'
						>
							X
						</button>
					</div>

					<div className='flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar'>
						{isLoading ? (
							<div className='text-center text-gray-400 pixel-font py-8'>
								Loading...
							</div>
						) : saves.filter((s) => s !== null).length === 0 ? (
							<div className='text-center text-gray-500 pixel-font py-8'>
								{settings.language === 'vi'
									? 'Chưa có file lưu nào'
									: 'No save files found'}
							</div>
						) : (
							saves
								.filter((save) => save !== null)
								.map((save) => (
									<motion.div
										key={save.id}
										whileHover={{ scale: 1.01 }}
										onClick={() => handleLoad(save.id)}
										className='p-4 border-2 border-gray-700 hover:border-steel-mind bg-bg-primary rounded cursor-pointer group relative'
									>
										<div className='flex justify-between items-start'>
											<div>
												<div className='pixel-font text-steel-mind mb-1'>
													Chapter {save.chapter} -{' '}
													{new Date(save.timestamp).toLocaleString()}
												</div>
												<div className='text-sm text-gray-400'>
													{save.preview || 'No preview available'}
												</div>
											</div>
											{save!.id !== 'autosave' && (
												<button
													onClick={(e) => handleDelete(save!.id, e)}
													className='opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:text-red-300 transition-opacity'
													title='Delete'
												>
													🗑️
												</button>
											)}
										</div>
										{save!.id === 'autosave' && (
											<div className='absolute top-2 right-2 text-xs bg-steel-mind text-bg-primary px-2 py-0.5 rounded pixel-font'>
												AUTO
											</div>
										)}
									</motion.div>
								))
						)}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
