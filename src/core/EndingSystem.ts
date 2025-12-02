// ==========================================
// ENDING SYSTEM
// Calculates and displays game endings
// ==========================================

import type { Stats } from '@/data/types';

export interface EndingResult {
	type: string;
	title: string;
	titleVi: string;
	titleEn: string;
	description: string;
	descriptionVi: string;
	descriptionEn: string;
	image?: string;
}

export class EndingSystem {
	static calculateEnding(stats: Stats): EndingResult {
		const { steelMind, humanity, vision } = stats;

		// True Ending: All stats 70-90, balanced
		if (
			steelMind >= 70 &&
			steelMind <= 90 &&
			humanity >= 70 &&
			humanity <= 90 &&
			vision >= 70 &&
			vision <= 90
		) {
			return {
				type: 'true-ending',
				title: 'The Architect',
				titleVi: 'Kiến Trúc Sư',
				titleEn: 'The Architect',
				description:
					'Bạn đã cân bằng hoàn hảo giữa Logic, Tình cảm và Tầm nhìn. Bạn không chỉ giàu có, bạn còn là người lãnh đạo được tôn trọng và yêu mến.',
				descriptionVi:
					'Bạn đã cân bằng hoàn hảo giữa Logic, Tình cảm và Tầm nhìn. Bạn không chỉ giàu có, bạn còn là người lãnh đạo được tôn trọng và yêu mến.',
				descriptionEn:
					'You perfectly balanced Logic, Emotion, and Vision. Not just wealthy, but a respected and beloved leader.',
			};
		}

		// Machine Ending: Steel Mind > 90
		if (steelMind > 90) {
			return {
				type: 'machine-ending',
				title: 'The Machine',
				titleVi: 'Cỗ Máy',
				titleEn: 'The Machine',
				description:
					'Bạn đã thành công vượt mong đợi, nhưng đánh mất con người của mình. Gia đình xa lánh, nhân viên sợ hãi. Bạn ngồi trong văn phòng một mình.',
				descriptionVi:
					'Bạn đã thành công vượt mong đợi, nhưng đánh mất con người của mình. Gia đình xa lánh, nhân viên sợ hãi. Bạn ngồi trong văn phòng một mình.',
				descriptionEn:
					'You succeeded beyond expectations, but lost your humanity. Family distant, employees afraid. You sit alone in your office.',
			};
		}

		// Pushover Ending: Humanity > 90
		if (humanity > 90) {
			return {
				type: 'pushover-ending',
				title: 'The Pushover',
				titleVi: 'Người Tử Tế Quá Mức',
				titleEn: 'The Pushover',
				description:
					'Bạn quá tử tế. Công ty phá sản vì bạn không dám sa thải nhân viên yếu kém. Bạn được mọi người yêu mến, nhưng không ai tôn trọng.',
				descriptionVi:
					'Bạn quá tử tế. Công ty phá sản vì bạn không dám sa thải nhân viên yếu kém. Bạn được mọi người yêu mến, nhưng không ai tôn trọng.',
				descriptionEn:
					"Too kind. Company bankrupt because you couldn't fire weak employees. Loved by all, respected by none.",
			};
		}

		// Dreamer Ending: Vision > 90
		if (vision > 90) {
			return {
				type: 'dreamer-ending',
				title: 'The Dreamer',
				titleVi: 'Kẻ Mộng Mơ',
				titleEn: 'The Dreamer',
				description:
					'Bạn có tầm nhìn xa, nhưng xa rời thực tế. Sản phẩm quá phức tạp, không ai cần. Bạn phá sản với những ý tưởng thiên tài.',
				descriptionVi:
					'Bạn có tầm nhìn xa, nhưng xa rời thực tế. Sản phẩm quá phức tạp, không ai cần. Bạn phá sản với những ý tưởng thiên tài.',
				descriptionEn:
					'Far vision, but disconnected from reality. Products too complex, nobody needs them. Bankrupt with genius ideas.',
			};
		}

		// Normal Ending: Default
		return {
			type: 'normal-ending',
			title: 'The Developer',
			titleVi: 'Lập Trình Viên',
			titleEn: 'The Developer',
			description:
				'Bạn sống một cuộc đời bình thường của một developer. Không giàu có lắm, nhưng hạnh phúc. Bạn đã vượt qua nỗi đau quá khứ.',
			descriptionVi:
				'Bạn sống một cuộc đời bình thường của một developer. Không giàu có lắm, nhưng hạnh phúc. Bạn đã vượt qua nỗi đau quá khứ.',
			descriptionEn:
				'You lived a normal developer life. Not very rich, but happy. You overcame the pain of the past.',
		};
	}
}
