import { useState } from 'react';
import { useGameStore } from '@/store/gameStore';
import { skills } from '@/data/skills';
import { shopItems } from '@/data/items';
import type { Skill, ShopItem } from '@/data/types';
import { StatID } from '@/data/enum';

interface SkillModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function SkillModal({ isOpen, onClose }: SkillModalProps) {
	const {
		skills: skillLevels,
		stats,
		upgradeSkill,
		buyItem,
		inventory,
		settings,
		updateStat,
	} = useGameStore();
	const [activeTab, setActiveTab] = useState<
		'coding' | 'soft' | 'life' | 'shop'
	>('coding');

	if (!isOpen) return null;

	const filteredSkills = skills.filter((s) => s.branch === activeTab);
	const isDev = import.meta.env.DEV;

	const handleUpgrade = (skill: Skill) => {
		const currentLevel = skillLevels[skill.id] || 0;
		const maxLevel = skill.maxLevel || 10;
		if (currentLevel >= maxLevel) return;

		const cost = isDev ? 0 : skill.baseCost * Math.pow(2, currentLevel);
		if (stats.money < cost) return;

		// Check requirements
		if (skill.requiredSkills) {
			const missingReq = skill.requiredSkills.some(
				(reqId) => (skillLevels[reqId] || 0) === 0
			);
			if (missingReq) return;
		}

		upgradeSkill(skill.id);
	};

	const handleBuy = (item: ShopItem) => {
		if (stats.money < item.cost) return;
		if (item.maxOwn) {
			const ownedCount = inventory.filter((i) => i === item.id).length;
			if (ownedCount >= item.maxOwn) return;
		}
		buyItem(item.id);
	};

	const formatMoney = (amount: number) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(amount);
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in'>
			<div className='bg-game-bg-primary w-full max-w-4xl h-[80vh] rounded-lg border-4 border-game-accent flex flex-col overflow-hidden'>
				{/* Header */}
				<div className='p-6 border-b-2 border-game-accent flex justify-between items-center bg-game-bg-secondary'>
					<div>
						<h2 className='text-3xl font-pixel text-white mb-2'>
							{settings.language === 'vi'
								? activeTab === 'shop'
									? 'Cửa Hàng'
									: 'Kỹ Năng'
								: activeTab === 'shop'
								? 'Shop'
								: 'Skills'}
						</h2>
						<div className='text-game-highlight font-pixel'>
							{settings.language === 'vi' ? 'Tiền: ' : 'Money: '}
							{formatMoney(stats.money)}
						</div>
					</div>
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-white text-2xl'
					>
						✕
					</button>
				</div>

				{/* Tabs */}
				<div className='flex border-b-2 border-game-accent overflow-x-auto'>
					{(['coding', 'soft', 'life', 'shop'] as const).map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`flex-1 py-4 px-6 font-pixel text-lg transition-colors whitespace-nowrap ${
								activeTab === tab
									? 'bg-game-accent text-white'
									: 'bg-game-bg-primary text-gray-400 hover:bg-gray-800'
							}`}
						>
							{tab.toUpperCase()}
						</button>
					))}
				</div>

				{/* Content */}
				<div className='flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
					{activeTab === 'shop' ? (
						<>
							{shopItems.map((item) => {
								const ownedCount = inventory.filter(
									(i) => i === item.id
								).length;
								const isMaxed = item.maxOwn ? ownedCount >= item.maxOwn : false;
								const canAfford = stats.money >= item.cost;

								return (
									<div
										key={item.id}
										className={`p-4 rounded border-2 flex flex-col justify-between ${
											isMaxed
												? 'bg-gray-800 border-gray-600 opacity-70'
												: 'bg-game-bg-secondary border-game-highlight'
										}`}
									>
										<div>
											<div className='flex justify-between items-start mb-2'>
												<h3 className='font-pixel text-lg text-white'>
													{settings.language === 'vi'
														? item.nameVi
														: item.nameEn}
												</h3>
												{item.maxOwn && (
													<span className='text-xs bg-gray-700 text-white px-2 py-1 rounded font-bold'>
														{ownedCount}/{item.maxOwn}
													</span>
												)}
											</div>
											<p className='text-sm text-gray-400 mb-4'>
												{settings.language === 'vi'
													? item.descriptionVi
													: item.descriptionEn}
											</p>

											{/* Effects */}
											{item.effects && (
												<div className='flex flex-wrap gap-2 mb-4'>
													{item.effects.map((effect, idx) => (
														<span
															key={idx}
															className={`text-xs px-2 py-1 rounded ${
																effect.value > 0
																	? 'bg-green-900/50 text-green-400'
																	: 'bg-red-900/50 text-red-400'
															}`}
														>
															{effect.stat.toUpperCase()}:{' '}
															{effect.value > 0 ? '+' : ''}
															{effect.value}
														</span>
													))}
												</div>
											)}
										</div>

										<div className='mt-auto'>
											<button
												onClick={() => handleBuy(item)}
												disabled={isMaxed || !canAfford}
												className={`w-full py-2 rounded font-pixel transition-all ${
													!isMaxed && canAfford
														? 'bg-yellow-600 text-white hover:bg-yellow-500'
														: 'bg-gray-700 text-gray-500 cursor-not-allowed'
												}`}
											>
												{isMaxed ? 'OWNED' : `BUY (${formatMoney(item.cost)})`}
											</button>
										</div>
									</div>
								);
							})}

							{/* Dev Only: Lùa Gà Button */}
							{isDev && (
								<div className='p-4 rounded border-2 flex flex-col justify-between bg-purple-900/20 border-purple-500'>
									<div>
										<div className='flex justify-between items-start mb-2'>
											<h3 className='font-pixel text-lg text-purple-400'>
												Lùa Gà (Dev Only)
											</h3>
										</div>
										<p className='text-sm text-gray-400 mb-4'>
											Bán khóa học làm giàu không khó.
										</p>
										<div className='flex flex-wrap gap-2 mb-4'>
											<span className='text-xs px-2 py-1 rounded bg-green-900/50 text-green-400'>
												MONEY: +1,000,000,000
											</span>
										</div>
									</div>
									<div className='mt-auto'>
										<button
											onClick={() => updateStat(StatID.MONEY, 1000000000)}
											className='w-full py-2 rounded font-pixel transition-all bg-purple-600 text-white hover:bg-purple-500'
										>
											LÙA GÀ
										</button>
									</div>
								</div>
							)}
						</>
					) : (
						filteredSkills.map((skill) => {
							const currentLevel = skillLevels[skill.id] || 0;
							const maxLevel = skill.maxLevel || 10;
							const isMaxed = currentLevel >= maxLevel;
							const cost = isDev
								? 0
								: skill.baseCost * Math.pow(2, currentLevel);
							const canAfford = stats.money >= cost;

							const requirementsMet = skill.requiredSkills
								? skill.requiredSkills.every(
										(reqId) => (skillLevels[reqId] || 0) > 0
								  )
								: true;

							return (
								<div
									key={skill.id}
									className={`p-4 rounded border-2 flex flex-col justify-between ${
										currentLevel > 0
											? 'bg-game-bg-secondary border-game-highlight'
											: requirementsMet
											? 'bg-gray-800 border-gray-600'
											: 'bg-gray-900 border-gray-800 opacity-50'
									}`}
								>
									<div>
										<div className='flex justify-between items-start mb-2'>
											<h3
												className={`font-pixel text-lg ${
													currentLevel > 0
														? 'text-game-highlight'
														: 'text-white'
												}`}
											>
												{settings.language === 'vi'
													? skill.nameVi
													: skill.nameEn}
											</h3>
											<span className='text-xs bg-gray-700 text-white px-2 py-1 rounded font-bold'>
												Lvl {currentLevel}/{maxLevel}
											</span>
										</div>
										<p className='text-sm text-gray-400 mb-4'>
											{settings.language === 'vi'
												? skill.descriptionVi
												: skill.descriptionEn}
										</p>

										{/* Effects */}
										{skill.effects && (
											<div className='flex flex-wrap gap-2 mb-4'>
												{skill.effects.map((effect, idx) => (
													<span
														key={idx}
														className={`text-xs px-2 py-1 rounded ${
															effect.value > 0
																? 'bg-green-900/50 text-green-400'
																: 'bg-red-900/50 text-red-400'
														}`}
													>
														{effect.stat.toUpperCase()}:{' '}
														{effect.value > 0 ? '+' : ''}
														{effect.value}
													</span>
												))}
											</div>
										)}
									</div>

									<div className='mt-auto'>
										<button
											onClick={() => handleUpgrade(skill)}
											disabled={isMaxed || !canAfford || !requirementsMet}
											className={`w-full py-2 rounded font-pixel transition-all ${
												!isMaxed && canAfford && requirementsMet
													? 'bg-yellow-600 text-white hover:bg-opacity-80'
													: 'bg-gray-700 text-gray-500 cursor-not-allowed'
											}`}
										>
											{!requirementsMet
												? 'LOCKED'
												: isMaxed
												? 'MAX LEVEL'
												: `UPGRADE (${formatMoney(cost)})`}
										</button>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
