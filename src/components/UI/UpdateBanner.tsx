import { useAutoUpdate } from '@/core/AutoUpdater';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Update Banner Component
 * Shows a notification when a new version is available
 */
export function UpdateBanner() {
	const { updateInfo, dismissUpdate, currentVersion } = useAutoUpdate();

	if (!updateInfo) return null;

	const handleUpdate = () => {
		if (updateInfo.downloadUrl) {
			window.open(updateInfo.downloadUrl, '_blank');
		}
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -100, opacity: 0 }}
				className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 shadow-lg'
			>
				<div className='max-w-screen-xl mx-auto flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<span className='text-xl'>🎮</span>
						<div>
							<p className='font-semibold'>
								Phiên bản mới {updateInfo.version} đã sẵn sàng!
							</p>
							{updateInfo.releaseNotes && (
								<p className='text-sm text-indigo-200'>
									{updateInfo.releaseNotes}
								</p>
							)}
							<p className='text-xs text-indigo-300'>
								Phiên bản hiện tại: {currentVersion}
							</p>
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<button
							onClick={handleUpdate}
							className='px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition-colors'
						>
							Cập nhật ngay
						</button>
						{!updateInfo.forceUpdate && (
							<button
								onClick={dismissUpdate}
								className='px-3 py-2 text-indigo-200 hover:text-white transition-colors'
								aria-label='Đóng'
							>
								✕
							</button>
						)}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

/**
 * Version Display Component
 * Shows current version in footer/settings
 */
export function VersionDisplay() {
	const { currentVersion, checkNow, isChecking } = useAutoUpdate();

	return (
		<div className='text-sm text-gray-500 flex items-center gap-2'>
			<span>v{currentVersion}</span>
			<button
				onClick={checkNow}
				disabled={isChecking}
				className='text-xs text-indigo-500 hover:text-indigo-700 disabled:opacity-50'
			>
				{isChecking ? 'Đang kiểm tra...' : 'Kiểm tra cập nhật'}
			</button>
		</div>
	);
}
