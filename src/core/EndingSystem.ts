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
	personalityVi: string;
	personalityEn: string;
	futureVi: string;
	futureEn: string;
	adviceVi: string;
	adviceEn: string;
	commentsVi: string[];
	commentsEn: string[];
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

		// 2. SPECIAL ENDINGS

		// Legend Ending: All stats > 90
		if (steelMind >= 90 && humanity >= 90 && vision >= 90) {
			return {
				type: 'legend-ending',
				title: 'The Legend',
				titleVi: 'Huyền Thoại',
				titleEn: 'The Legend',
				description:
					'Bạn là một huyền thoại sống. Cân bằng hoàn hảo, tài năng xuất chúng, và nhân cách cao đẹp.',
				descriptionVi:
					'Bạn là một huyền thoại sống. Cân bằng hoàn hảo, tài năng xuất chúng, và nhân cách cao đẹp. Tên tuổi của bạn sẽ được nhắc đến mãi về sau.',
				descriptionEn:
					'You are a living legend. Perfectly balanced, exceptionally talented, and of noble character. Your name will be remembered forever.',
			};
		}

		// Philanthropist: High Money + High Humanity
		if (money > 10000000000 && humanity > 80) {
			return {
				type: 'philanthropist-ending',
				title: 'The Philanthropist',
				titleVi: 'Nhà Từ Thiện',
				titleEn: 'The Philanthropist',
				description:
					'Bạn dùng sự giàu có của mình để thay đổi thế giới. Bạn không chỉ là một doanh nhân, bạn là một ân nhân.',
				descriptionVi:
					'Bạn dùng sự giàu có của mình để thay đổi thế giới. Bạn không chỉ là một doanh nhân, bạn là một ân nhân của cộng đồng.',
				descriptionEn:
					'You use your wealth to change the world. You are not just an entrepreneur, you are a benefactor.',
			};
		}

		// Workaholic: High Money + High Stress + Low Health
		if (money > 5000000000 && stress > 80 && health < 50) {
			return {
				type: 'workaholic-ending',
				title: 'The Workaholic',
				titleVi: 'Kẻ Nghiện Việc',
				titleEn: 'The Workaholic',
				description:
					'Bạn rất giàu, nhưng cái giá phải trả là quá đắt. Bạn có tiền, nhưng không có thời gian để tiêu nó.',
				descriptionVi:
					'Bạn rất giàu, nhưng cái giá phải trả là quá đắt. Bạn có tiền, nhưng không có thời gian để tiêu nó. Bạn sống để làm việc, chứ không phải làm việc để sống.',
				descriptionEn:
					'You are very rich, but the price was too high. You have money, but no time to spend it. You live to work, not work to live.',
			};
		}

		// 3. NORMAL ENDINGS

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

		// Average Joe: Stats 40-60
		if (
			steelMind >= 40 &&
			steelMind <= 60 &&
			humanity >= 40 &&
			humanity <= 60 &&
			vision >= 40 &&
			vision <= 60
		) {
			return {
				type: 'average-joe-ending',
				title: 'The Average Joe',
				titleVi: 'Người Bình Thường',
				titleEn: 'The Average Joe',
				description:
					'Bạn có một sự nghiệp bình thường, không quá nổi bật nhưng cũng không thất bại. Một cuộc sống an toàn.',
				descriptionVi:
					'Bạn có một sự nghiệp bình thường, không quá nổi bật nhưng cũng không thất bại. Một cuộc sống an toàn, êm đềm và ít sóng gió.',
				descriptionEn:
					'You have a normal career, not too outstanding but not a failure either. A safe and quiet life.',
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

	static calculateLifeScore(stats: Stats): number {
		const { steelMind, humanity, vision, money, health, stress } = stats;

		let score = 0;

		// Base stats (max 300)
		score += steelMind + humanity + vision;

		// Health bonus (max 100)
		score += health;

		// Stress penalty (max -100)
		score -= stress;

		// Money bonus (logarithmic scale)
		if (money > 0) {
			score += Math.min(100, Math.log10(money) * 10);
		}

		// Cap at 1000 for display purposes, but can go higher theoretically
		return Math.max(0, Math.round(score));
	}

	static analyzeEnding(stats: Stats): EndingAnalysis {
		const { steelMind, humanity, vision, money, health, stress } = stats;
		const commentsVi: string[] = [];
		const commentsEn: string[] = [];

		// 1. Archetype Analysis (More granular than Personality)
		let personalityVi = 'Người cân bằng';
		let personalityEn = 'The Balanced';
		const maxStat = Math.max(steelMind, humanity, vision);

		if (steelMind >= 80 && humanity >= 80 && vision >= 80) {
			personalityVi = 'Nhà Lãnh Đạo Toàn Diện';
			personalityEn = 'The Holistic Leader';
		} else if (steelMind > humanity + 20 && steelMind > vision + 20) {
			personalityVi = 'Cỗ Máy Logic';
			personalityEn = 'The Logic Engine';
		} else if (humanity > steelMind + 20 && humanity > vision + 20) {
			personalityVi = 'Người Kết Nối';
			personalityEn = 'The Connector';
		} else if (vision > steelMind + 20 && vision > humanity + 20) {
			personalityVi = 'Nhà Tiên Tri Công Nghệ';
			personalityEn = 'The Tech Prophet';
		} else if (steelMind > 60 && vision > 60 && humanity < 40) {
			personalityVi = 'Kiến Trúc Sư Hệ Thống';
			personalityEn = 'The System Architect';
		} else if (humanity > 60 && vision > 60 && steelMind < 40) {
			personalityVi = 'Người Truyền Cảm Hứng';
			personalityEn = 'The Inspirer';
		} else if (steelMind > 60 && humanity > 60 && vision < 40) {
			personalityVi = 'Quản Lý Dự Án';
			personalityEn = 'The Project Manager';
		}

		// 2. Future Prediction
		let futureVi = 'Một tương lai ổn định, không quá nhiều biến động.';
		let futureEn = 'A stable future, without too many fluctuations.';

		if (money > 10000000000) {
			futureVi =
				'Bạn sẽ trở thành một "cá mập" trong giới đầu tư, dùng tiền đẻ ra tiền.';
			futureEn =
				'You will become a "shark" in the investment world, making money work for you.';
		} else if (money > 1000000000) {
			futureVi = 'Bạn sống sung túc, có thể nghỉ hưu sớm nếu muốn.';
			futureEn = 'You live comfortably and can retire early if you want.';
		} else if (money < 100000000) {
			futureVi =
				'Tài chính sẽ là gánh nặng lớn. Bạn có thể phải làm thêm nghề tay trái.';
			futureEn = 'Finance will be a heavy burden. You might need a side job.';
		}

		if (vision > 80) {
			futureVi += ' Tên tuổi của bạn sẽ gắn liền với những sản phẩm đột phá.';
			futureEn += ' Your name will be associated with breakthrough products.';
		} else if (humanity > 80) {
			futureVi +=
				' Bạn sẽ được bao quanh bởi những người bạn trung thành và gia đình hạnh phúc.';
			futureEn +=
				' You will be surrounded by loyal friends and a happy family.';
		} else if (steelMind > 80) {
			futureVi +=
				' Bạn sẽ giải quyết được những bài toán hóc búa nhất của nhân loại.';
			futureEn += " You will solve some of humanity's toughest problems.";
		}

		// 3. Advice
		let adviceVi = 'Hãy tiếp tục phát huy thế mạnh của mình.';
		let adviceEn = 'Continue to leverage your strengths.';
		const minStat = Math.min(steelMind, humanity, vision);

		if (minStat === steelMind) {
			adviceVi =
				'Đừng để cảm xúc chi phối quá nhiều. Hãy rèn luyện tư duy phản biện và logic.';
			adviceEn =
				"Don't let emotions rule you. Practice critical thinking and logic.";
		} else if (minStat === humanity) {
			adviceVi =
				'Thành công không có nghĩa lý gì nếu bạn cô đơn. Hãy dành thời gian cho người thân.';
			adviceEn =
				'Success means nothing if you are lonely. Make time for loved ones.';
		} else if (minStat === vision) {
			adviceVi =
				'Đừng chỉ nhìn vào hiện tại. Hãy ngẩng đầu lên và nhìn xa hơn về 5, 10 năm tới.';
			adviceEn =
				"Don't just look at the present. Look up and see further into the next 5-10 years.";
		}

		// 4. Specific Comments (Detailed Feedback)
		if (stress > 80) {
			commentsVi.push(
				'⚠️ Báo động đỏ: Bạn đang đánh đổi sức khỏe tâm thần lấy thành công. Hãy dừng lại trước khi quá muộn.'
			);
			commentsEn.push(
				"⚠️ Red Alert: You are trading mental health for success. Stop before it's too late."
			);
		} else if (stress < 30) {
			commentsVi.push(
				'🧘 Tâm bất biến: Bạn giữ được cái đầu lạnh đáng nể giữa dòng đời vạn biến.'
			);
			commentsEn.push(
				"🧘 Zen Master: You keep an incredibly cool head amidst life's chaos."
			);
		}

		if (health < 30) {
			commentsVi.push(
				'🏥 Sức khỏe yếu: Tiền bạc không mua được sức khỏe. Hãy đi khám tổng quát ngay.'
			);
			commentsEn.push(
				"🏥 Poor Health: Money can't buy health. Go for a checkup immediately."
			);
		} else if (health > 80) {
			commentsVi.push(
				'💪 Iron Man: Sức khỏe phi thường giúp bạn chinh phục mọi thử thách.'
			);
			commentsEn.push(
				'💪 Iron Man: Extraordinary health helps you conquer every challenge.'
			);
		}

		if (money < 0) {
			commentsVi.push(
				'💸 Vỡ nợ: Bạn cần một kế hoạch tài chính cực kỳ nghiêm ngặt để vực dậy.'
			);
			commentsEn.push(
				'💸 Bankrupt: You need an extremely strict financial plan to recover.'
			);
		} else if (money > 50000000000) {
			commentsVi.push(
				'👑 Vua Midas: Chạm tay vào đâu cũng ra vàng. Đừng quên chia sẻ may mắn đó.'
			);
			commentsEn.push(
				"👑 King Midas: Everything you touch turns to gold. Don't forget to share that luck."
			);
		}

		const statGap = maxStat - minStat;
		if (statGap > 50) {
			commentsVi.push(
				'⚖️ Mất cân bằng nghiêm trọng: Bạn đang phát triển lệch lạc. Hãy cẩn thận với điểm mù của mình.'
			);
			commentsEn.push(
				'⚖️ Serious Imbalance: You are developing unevenly. Beware of your blind spots.'
			);
		} else if (statGap < 10) {
			commentsVi.push(
				'✨ Sự cân bằng hoàn hảo: Bạn là mẫu người toàn diện hiếm có.'
			);
			commentsEn.push(
				'✨ Perfect Balance: You are a rare, well-rounded individual.'
			);
		}

		return {
			personalityVi,
			personalityEn,
			futureVi,
			futureEn,
			adviceVi,
			adviceEn,
			commentsVi,
			commentsEn,
		};
	}
}
