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

export interface EndingAnalysis {
	personality: string;
	future: string;
	advice: string;
	comments: string[];
}

export class EndingSystem {
	static calculateEnding(stats: Stats): EndingResult {
		const { steelMind, humanity, vision, money, health, stress } = stats;

		// 1. BAD ENDINGS (Priority)

		// Bankruptcy
		if (money < 0) {
			return {
				type: 'bankruptcy-ending',
				title: 'Bankrupt',
				titleVi: 'Phá Sản',
				titleEn: 'Bankrupt',
				description:
					'Bạn đã tiêu hết tiền tiết kiệm. Giấc mơ khởi nghiệp tan thành mây khói.',
				descriptionVi:
					'Bạn đã tiêu hết tiền tiết kiệm. Giấc mơ khởi nghiệp tan thành mây khói. Bạn phải quay về làm thuê để trả nợ.',
				descriptionEn:
					'You ran out of money. The startup dream is gone. You have to go back to 9-5 to pay debts.',
			};
		}

		// Burnout / Health Failure
		if (health <= 0 || stress >= 100) {
			return {
				type: 'burnout-ending',
				title: 'Burnout',
				titleVi: 'Kiệt Sức',
				titleEn: 'Burnout',
				description:
					'Sức khỏe là vàng, và bạn đã đánh mất nó. Bạn gục ngã trước khi kịp nhìn thấy thành công.',
				descriptionVi:
					'Sức khỏe là vàng, và bạn đã đánh mất nó. Bạn gục ngã trước khi kịp nhìn thấy thành công. Hãy nhớ: Deadline có thể dời, nhưng mạng sống thì không.',
				descriptionEn:
					'Health is wealth, and you lost it. You collapsed before seeing success. Remember: Deadlines can move, life cannot.',
			};
		}

		// 2. NORMAL ENDINGS

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

	static analyzeEnding(stats: Stats): EndingAnalysis {
		const { steelMind, humanity, vision, money, health, stress } = stats;
		const comments: string[] = [];

		// 1. Personality Analysis
		let personality = 'Người cân bằng';
		const maxStat = Math.max(steelMind, humanity, vision);

		if (
			maxStat === steelMind &&
			steelMind > humanity + 10 &&
			steelMind > vision + 10
		) {
			personality = 'Người duy lý (The Logician)';
		} else if (
			maxStat === humanity &&
			humanity > steelMind + 10 &&
			humanity > vision + 10
		) {
			personality = 'Người tình cảm (The Empath)';
		} else if (
			maxStat === vision &&
			vision > steelMind + 10 &&
			vision > humanity + 10
		) {
			personality = 'Người nhìn xa (The Visionary)';
		} else if (steelMind < 30 && humanity < 30 && vision < 30) {
			personality = 'Người lạc lối (The Lost Soul)';
		}

		// 2. Future Prediction
		let future = 'Một tương lai ổn định, không quá nhiều biến động.';
		if (money > 10000000000) {
			// 10B
			future =
				'Bạn sẽ sống sung túc cả đời, nhưng hãy cẩn thận với những kẻ đào mỏ.';
		} else if (money < 100000000) {
			// 100M
			future =
				'Tài chính sẽ là gánh nặng lớn. Bạn cần học cách quản lý tiền bạc tốt hơn.';
		}

		if (vision > 80) {
			future += ' Bạn có thể sẽ khởi nghiệp thêm nhiều lần nữa.';
		} else if (humanity > 80) {
			future += ' Bạn sẽ được bao quanh bởi những người bạn trung thành.';
		}

		// 3. Advice
		let advice = 'Hãy tiếp tục phát huy thế mạnh của mình.';
		const minStat = Math.min(steelMind, humanity, vision);

		if (minStat === steelMind) {
			advice =
				'Đừng để cảm xúc chi phối quá nhiều. Hãy học cách suy nghĩ logic hơn.';
		} else if (minStat === humanity) {
			advice =
				'Thành công không có nghĩa lý gì nếu bạn cô đơn. Hãy mở lòng hơn.';
		} else if (minStat === vision) {
			advice = 'Đừng chỉ nhìn vào hiện tại. Hãy ngẩng đầu lên và nhìn xa hơn.';
		}

		// 4. Specific Comments (Edge Cases)
		if (stress > 80) {
			comments.push(
				'⚠️ Mức độ Stress báo động: Bạn đã ép bản thân quá mức. Hãy học cách nghỉ ngơi.'
			);
		}
		if (health < 30) {
			comments.push(
				'⚠️ Sức khỏe yếu: Tiền bạc không mua được sức khỏe. Hãy trân trọng cơ thể mình.'
			);
		}
		if (money < 0) {
			comments.push('💸 Nợ nần: Bạn cần một kế hoạch trả nợ nghiêm túc.');
		} else if (money > 50000000000) {
			comments.push(
				'💰 Phú quý: Bạn nằm trong top 1% giàu có. Đừng quên làm từ thiện.'
			);
		}

		const statGap = maxStat - minStat;
		if (statGap > 50) {
			comments.push(
				'⚖️ Mất cân bằng: Cuộc sống của bạn đang bị lệch quá nhiều về một phía.'
			);
		}

		if (steelMind < 20 || humanity < 20 || vision < 20) {
			comments.push(
				'📉 Điểm yếu chí mạng: Một trong các chỉ số của bạn quá thấp, kìm hãm sự phát triển.'
			);
		}

		return {
			personality,
			future,
			advice,
			comments,
		};
	}
}
