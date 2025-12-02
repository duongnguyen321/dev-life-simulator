// ==========================================
// GAME ENDINGS DEFINITIONS
// ==========================================

import type { EndingDefinition, Stats } from './types';

export const endings: EndingDefinition[] = [
	{
		id: 'BANKRUPTCY',
		name: 'Bankruptcy',
		nameVi: 'Phá Sản',
		nameEn: 'Bankruptcy',
		description: 'Money ran out. Debts piled up. You lost everything.',
		descriptionVi:
			'Tiền bạc cạn kiệt. Nợ nần chồng chất. Bạn đã mất tất cả. Đôi khi, sự tham vọng và quản lý tài chính yếu kém có thể dẫn đến kết cục bi thảm.',
		descriptionEn:
			'Money ran out. Debts piled up. You lost everything. Sometimes, ambition and poor financial management lead to tragic ends.',
		priority: 100, // Highest priority - check first
		condition: (stats: Stats) => stats.money < 0,
	},
	{
		id: 'BURNOUT',
		name: 'Burnout',
		nameVi: 'Kiệt Sức',
		nameEn: 'Burnout',
		description:
			'Health and spirit completely depleted. You pushed yourself beyond limits.',
		descriptionVi:
			'Sức khỏe và tinh thần suy kiệt hoàn toàn. Bạn đã đẩy bản thân quá giới hạn. Con đường thành công không đáng giá nếu phải đánh đổi sức khỏe.',
		descriptionEn:
			'Health and spirit completely depleted. You pushed yourself beyond limits. Success is not worth it if you sacrifice your health.',
		priority: 90,
		condition: (stats: Stats) => stats.health <= 0 || stats.stress >= 100,
	},
	{
		id: 'BALANCED',
		name: 'Balanced Life',
		nameVi: 'Cuộc Sống Cân Bằng',
		nameEn: 'Balanced Life',
		description:
			'You achieved balance between work, family and self. This is true success.',
		descriptionVi:
			'Bạn đạt được sự cân bằng giữa công việc, gia đình và bản thân. Không giàu có triệt để nhưng hạnh phúc và trọn vẹn. Đây là thành công thực sự.',
		descriptionEn:
			'You achieved balance between work, family and self. Not extremely wealthy but happy and fulfilled. This is true success.',
		priority: 50,
		condition: (stats: Stats) =>
			stats.steelMind >= 40 &&
			stats.steelMind <= 80 &&
			stats.humanity >= 40 &&
			stats.humanity <= 80 &&
			stats.vision >= 40 &&
			stats.vision <= 80 &&
			stats.health >= 40 &&
			stats.stress <= 60 &&
			stats.money >= 500000,
	},
	{
		id: 'LEGACY',
		name: 'Legacy',
		nameVi: 'Di Sản',
		nameEn: 'Legacy',
		description:
			'You built a great legacy - not just wealth but positive impact on community.',
		descriptionVi:
			'Bạn xây dựng được một di sản vĩ đại - không chỉ là tiền bạc mà còn là ảnh hưởng tích cực đến cộng đồng. Tên tuổi bạn sẽ được nhớ mãi.',
		descriptionEn:
			'You built a great legacy - not just wealth but positive impact on community. Your name will be remembered.',
		priority: 70,
		condition: (stats: Stats, flags: Record<string, any>) =>
			stats.vision >= 80 &&
			stats.humanity >= 60 &&
			stats.money >= 10000000000 &&
			(flags.foundedCompany || flags.mentored || flags.donated),
	},
	{
		id: 'SUCCESS',
		name: 'Brilliant Success',
		nameVi: 'Thành Công Rực Rỡ',
		nameEn: 'Brilliant Success',
		description:
			'You reached the peak of your career. Wealthy, famous, and admired.',
		descriptionVi:
			'Bạn đạt được đỉnh cao của sự nghiệp. Giàu có, nổi tiếng, và được ngưỡng mộ. Nhưng liệu đây có phải là tất cả những gì bạn muốn?',
		descriptionEn:
			'You reached the peak of your career. Wealthy, famous, and admired. But is this all you wanted?',
		priority: 60,
		condition: (stats: Stats) =>
			stats.vision >= 90 && stats.money >= 1000000000000,
	},
	{
		id: 'TRAGEDY',
		name: 'Tragedy',
		nameVi: 'Bi Kịch',
		nameEn: 'Tragedy',
		description:
			'Life was a series of wrong decisions. You lost what mattered most.',
		descriptionVi:
			'Cuộc đời là một chuỗi những quyết định sai lầm. Bạn mất đi những thứ quan trọng nhất. Đây là bài học đắt giá.',
		descriptionEn:
			'Life was a series of wrong decisions. You lost what mattered most. This is an expensive lesson.',
		priority: 40,
		condition: (stats: Stats) =>
			stats.humanity < 20 || (stats.money < 100000 && stats.health < 30),
	},
];

/**
 * Evaluate which ending the player has reached
 * Returns the highest priority ending whose condition is met
 */
export function getPlayerEnding(
	stats: Stats,
	flags: Record<string, any>
): EndingDefinition | null {
	// Sort by priority descending
	const sortedEndings = [...endings].sort((a, b) => b.priority - a.priority);

	// Find first ending whose condition is met
	for (const ending of sortedEndings) {
		if (ending.condition(stats, flags)) {
			return ending;
		}
	}

	return null;
}
