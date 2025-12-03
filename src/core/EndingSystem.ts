// ==========================================
// ENDING SYSTEM
// Calculates and displays game endings
// ==========================================

import type { GameState, Stats } from '@/data/types';
import { skills as allSkills } from '@/data/skills';
import { FlagID } from '@/data/enum';

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

export interface SkillAnalysis {
	topSkills: string[]; // Names of top 3 skills
	dominantBranch: 'coding' | 'soft' | 'life' | 'balanced';
	specialistType: 'Specialist' | 'Generalist';
	totalLevels: number;
}

export interface PlaystyleAnalysis {
	titleVi: string;
	titleEn: string;
	descriptionVi: string;
	descriptionEn: string;
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
	skillAnalysis: SkillAnalysis;
	playstyle: PlaystyleAnalysis;
	keyMomentsVi: string[];
	keyMomentsEn: string[];
}

export class EndingSystem {
	static calculateEnding(stats: Stats): EndingResult {
		const { steelMind, humanity, vision, money, health, stress } = stats;

		// 1. BAD ENDINGS (Priority)

		// Bankruptcy
		if (money < 100) {
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
		if (health <= 10 || stress >= 80) {
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

		// Tragic Benefactor: High Money + High Humanity + Low Health
		if (money > 10000000000 && humanity > 80 && health < 20) {
			return {
				type: 'tragic-benefactor-ending',
				title: 'The Tragic Benefactor',
				titleVi: 'Mạnh Thường Quân Bạc Mệnh',
				titleEn: 'The Tragic Benefactor',
				description:
					'Bạn đã dành cả đời để kiếm tiền và giúp đỡ người khác, nhưng lại quên chăm sóc chính mình. Bạn ra đi khi còn quá trẻ, để lại niềm tiếc thương vô hạn.',
				descriptionVi:
					'Bạn đã dành cả đời để kiếm tiền và giúp đỡ người khác, nhưng lại quên chăm sóc chính mình. Bạn ra đi khi còn quá trẻ, để lại niềm tiếc thương vô hạn cho cộng đồng.',
				descriptionEn:
					'You spent your life making money and helping others, but forgot to take care of yourself. You passed away too young, leaving behind infinite grief.',
			};
		}

		// 2. SPECIAL ENDINGS (New Granular Types)

		// The Startup Founder: High Money (>5B) + High Vision (>80) + High Stress (>60)
		if (money > 5000000000 && vision > 80 && stress > 60) {
			return {
				type: 'startup-founder-ending',
				title: 'The Startup Founder',
				titleVi: 'Nhà Sáng Lập',
				titleEn: 'The Startup Founder',
				description:
					'Bạn đã xây dựng đế chế của riêng mình. Thành công rực rỡ, nhưng áp lực cũng không hề nhỏ.',
				descriptionVi:
					'Bạn đã xây dựng đế chế của riêng mình. Thành công rực rỡ, nhưng áp lực cũng không hề nhỏ. Bạn là nguồn cảm hứng cho giới trẻ khởi nghiệp.',
				descriptionEn:
					'You built your own empire. Brilliant success, but immense pressure. You are an inspiration for young entrepreneurs.',
			};
		}

		// The Academic/Researcher: High Steel Mind (>90) + Money < 1B
		if (steelMind > 90 && money < 1000000000) {
			return {
				type: 'academic-ending',
				title: 'The Researcher',
				titleVi: 'Nhà Nghiên Cứu',
				titleEn: 'The Researcher',
				description:
					'Bạn không quan tâm đến tiền bạc. Niềm vui của bạn là khám phá những chân trời tri thức mới.',
				descriptionVi:
					'Bạn không quan tâm đến tiền bạc. Niềm vui của bạn là khám phá những chân trời tri thức mới. Những công trình của bạn đặt nền móng cho tương lai.',
				descriptionEn:
					'You care little for money. Your joy is exploring new horizons of knowledge. Your works lay the foundation for the future.',
			};
		}

		// The Tech Lead: Balanced High Skills (Steel Mind > 70, Humanity > 60) + Moderate Money
		if (steelMind > 70 && humanity > 60 && money > 500000000) {
			return {
				type: 'tech-lead-ending',
				title: 'The Tech Lead',
				titleVi: 'Trưởng Nhóm Kỹ Thuật',
				titleEn: 'The Tech Lead',
				description:
					'Bạn là trụ cột của team. Vừa giỏi kỹ thuật, vừa khéo léo trong quản lý con người.',
				descriptionVi:
					'Bạn là trụ cột của team. Vừa giỏi kỹ thuật, vừa khéo léo trong quản lý con người. Bạn được đồng nghiệp tin tưởng và sếp trọng dụng.',
				descriptionEn:
					'You are the pillar of the team. Skilled in tech and adept at people management. Trusted by colleagues and valued by bosses.',
			};
		}

		// The Freelancer: Low Stress (<40) + Moderate Money
		if (stress < 40 && money > 200000000) {
			return {
				type: 'freelancer-ending',
				title: 'The Digital Nomad',
				titleVi: 'Du Mục Kỹ Thuật Số',
				titleEn: 'The Digital Nomad',
				description:
					'Bạn chọn tự do thay vì danh vọng. Làm việc ở bất cứ đâu, sống cuộc đời mình muốn.',
				descriptionVi:
					'Bạn chọn tự do thay vì danh vọng. Làm việc ở bất cứ đâu, sống cuộc đời mình muốn. Sáng cà phê Đà Lạt, chiều ngắm hoàng hôn Phú Quốc.',
				descriptionEn:
					'You chose freedom over fame. Work from anywhere, live the life you want. Morning coffee in Da Lat, evening sunset in Phu Quoc.',
			};
		}

		// Philanthropist: High Money + High Humanity (Moved down priority)
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

	static analyzeEnding(gameState: GameState): EndingAnalysis {
		const { stats, skills, playtime, flags, achievements } = gameState;
		const { steelMind, humanity, vision, money, health, stress } = stats;
		const commentsVi: string[] = [];
		const commentsEn: string[] = [];
		const keyMomentsVi: string[] = [];
		const keyMomentsEn: string[] = [];

		// ==========================================
		// 1. ARCHETYPE ANALYSIS
		// ==========================================
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

		// ==========================================
		// 2. FUTURE PREDICTION & CAREER RANK
		// ==========================================
		let futureVi = 'Một tương lai ổn định, không quá nhiều biến động.';
		let futureEn = 'A stable future, without too many fluctuations.';

		// Career Rank Analysis
		let rankVi = 'Thực Tập Sinh';
		let rankEn = 'Intern';
		const totalStats = steelMind + humanity + vision;
		if (totalStats > 250) {
			rankVi = 'Ông Trùm Công Nghệ';
			rankEn = 'Tech Mogul';
		} else if (totalStats > 200) {
			rankVi = 'Giám Đốc Kỹ Thuật (CTO)';
			rankEn = 'CTO';
		} else if (totalStats > 150) {
			rankVi = 'Kỹ Sư Cao Cấp (Principal)';
			rankEn = 'Principal Engineer';
		} else if (totalStats > 100) {
			rankVi = 'Kỹ Sư Chính (Senior)';
			rankEn = 'Senior Engineer';
		} else {
			rankVi = 'Kỹ Sư (Junior)';
			rankEn = 'Junior Engineer';
		}

		commentsVi.push(`🏆 Cấp bậc sự nghiệp: ${rankVi}`);
		commentsEn.push(`🏆 Career Rank: ${rankEn}`);

		// Wealth Tier Analysis
		let wealthVi = 'Đủ ăn đủ mặc';
		let wealthEn = 'Survival Mode';
		if (money > 100000000000) {
			wealthVi = 'Tài Phiệt';
			wealthEn = 'Tycoon';
		} else if (money > 10000000000) {
			wealthVi = 'Triệu Phú Tự Thân';
			wealthEn = 'Self-made Millionaire';
		} else if (money > 1000000000) {
			wealthVi = 'Tự Do Tài Chính';
			wealthEn = 'Financially Free';
		} else if (money > 100000000) {
			wealthVi = 'Sung Túc';
			wealthEn = 'Comfortable';
		}

		commentsVi.push(`💰 Tình trạng tài chính: ${wealthVi}`);
		commentsEn.push(`💰 Financial Status: ${wealthEn}`);

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

		// ==========================================
		// 3. ADVICE
		// ==========================================
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

		// ==========================================
		// 4. SPECIFIC COMMENTS (Granular)
		// ==========================================
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

		// New Granular Comments
		if (steelMind > 80 && humanity < 40) {
			commentsVi.push(
				'🤖 Code Monkey: Bạn code rất giỏi, nhưng giao tiếp là một thảm họa.'
			);
			commentsEn.push(
				'🤖 Code Monkey: You code well, but your communication is a disaster.'
			);
		}

		if (humanity > 80 && steelMind < 40) {
			commentsVi.push(
				'🗣️ Thánh Chém Gió: Bạn nói rất hay, nhưng kỹ thuật thì... ba chấm.'
			);
			commentsEn.push(
				'🗣️ Smooth Talker: You talk a big game, but your tech skills are... lacking.'
			);
		}

		if (money > 5000000000 && flags[FlagID.FAMILY_DEBT_PAID]) {
			commentsVi.push(
				'🏠 Trụ cột gia đình: Bạn đã lo lắng chu toàn cho cả gia đình lớn.'
			);
			commentsEn.push(
				'🏠 Family Pillar: You have taken excellent care of your extended family.'
			);
		}

		// ==========================================
		// 5. SKILL ANALYSIS
		// ==========================================
		const skillAnalysis: SkillAnalysis = {
			topSkills: [],
			dominantBranch: 'balanced',
			specialistType: 'Generalist',
			totalLevels: 0,
		};

		const branchLevels = { coding: 0, soft: 0, life: 0 };
		const learnedSkills = Object.entries(skills)
			.map(([id, level]) => {
				const skillDef = allSkills.find((s) => s.id === id);
				if (skillDef) {
					branchLevels[skillDef.branch] += level;
					skillAnalysis.totalLevels += level;
					return { ...skillDef, level };
				}
				return null;
			})
			.filter((s) => s !== null && s.level > 0)
			.sort((a, b) => b!.level - a!.level);

		// Top 3 skills
		skillAnalysis.topSkills = learnedSkills
			.slice(0, 3)
			.map((s) => (stats.money > 0 ? s!.nameEn : s!.nameVi)); // Use EN name if not bankrupt? Logic check: just use EN for now or pass lang

		// Dominant Branch
		const maxBranchLevel = Math.max(
			branchLevels.coding,
			branchLevels.soft,
			branchLevels.life
		);
		if (maxBranchLevel === 0) {
			skillAnalysis.dominantBranch = 'balanced';
		} else if (branchLevels.coding === maxBranchLevel) {
			skillAnalysis.dominantBranch = 'coding';
		} else if (branchLevels.soft === maxBranchLevel) {
			skillAnalysis.dominantBranch = 'soft';
		} else {
			skillAnalysis.dominantBranch = 'life';
		}

		// Specialist Type
		const total = skillAnalysis.totalLevels;
		if (total > 0) {
			if (maxBranchLevel / total > 0.6) {
				skillAnalysis.specialistType = 'Specialist';
			} else {
				skillAnalysis.specialistType = 'Generalist';
			}
		}

		// ==========================================
		// 6. PLAYSTYLE ANALYSIS
		// ==========================================
		const playstyle: PlaystyleAnalysis = {
			titleVi: 'Người chơi bình thường',
			titleEn: 'Casual Player',
			descriptionVi: 'Bạn chơi game với tốc độ vừa phải, tận hưởng cốt truyện.',
			descriptionEn: 'You play at a moderate pace, enjoying the story.',
		};

		const hoursPlayed = playtime / 3600;
		const achievementCount = achievements.length;

		if (hoursPlayed < 1 && achievementCount < 5) {
			playstyle.titleVi = 'Speedrunner';
			playstyle.titleEn = 'Speedrunner';
			playstyle.descriptionVi =
				'Bạn lướt qua cuộc đời như một cơn gió. Nhanh, gọn, lẹ.';
			playstyle.descriptionEn =
				'You breeze through life like the wind. Fast and efficient.';
		} else if (achievementCount > 20) {
			playstyle.titleVi = 'Nhà Sưu Tầm';
			playstyle.titleEn = 'The Collector';
			playstyle.descriptionVi =
				'Bạn muốn trải nghiệm tất cả mọi thứ game có thể mang lại.';
			playstyle.descriptionEn =
				'You want to experience everything the game has to offer.';
		} else if (hoursPlayed > 5) {
			playstyle.titleVi = 'Người Suy Ngẫm';
			playstyle.titleEn = 'The Thinker';
			playstyle.descriptionVi =
				'Bạn dành nhiều thời gian để suy nghĩ về từng lựa chọn.';
			playstyle.descriptionEn =
				'You spend a lot of time thinking about each choice.';
		}

		// ==========================================
		// 7. KEY MOMENTS (FLAGS)
		// ==========================================
		if (flags[FlagID.COFFEE_CONSUMED]) {
			const count = flags[FlagID.COFFEE_CONSUMED] as number;
			if (count > 50) {
				keyMomentsVi.push(`☕ Đã uống ${count} ly cà phê (Nghiện nặng)`);
				keyMomentsEn.push(`☕ Drank ${count} cups of coffee (Addicted)`);
			} else if (count > 10) {
				keyMomentsVi.push(`☕ Đã uống ${count} ly cà phê`);
				keyMomentsEn.push(`☕ Drank ${count} cups of coffee`);
			}
		}

		if (flags[FlagID.BOOKS_READ]) {
			const count = flags[FlagID.BOOKS_READ] as number;
			keyMomentsVi.push(`📚 Đã đọc ${count} cuốn sách chuyên ngành`);
			keyMomentsEn.push(`📚 Read ${count} tech books`);
		}

		if (flags[FlagID.GAMES_BEATEN]) {
			const count = flags[FlagID.GAMES_BEATEN] as number;
			keyMomentsVi.push(`🎮 Đã phá đảo ${count} tựa game AAA`);
			keyMomentsEn.push(`🎮 Beat ${count} AAA games`);
		}

		if (flags[FlagID.KNOWS_INSTRUMENT]) {
			keyMomentsVi.push('🎸 Đã học chơi đàn Guitar');
			keyMomentsEn.push('🎸 Learned to play Guitar');
		}

		if (flags[FlagID.CARS_OWNED]) {
			keyMomentsVi.push('🏎️ Đã sở hữu siêu xe');
			keyMomentsEn.push('🏎️ Owned a luxury car');
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
			skillAnalysis,
			playstyle,
			keyMomentsVi,
			keyMomentsEn,
		};
	}
}
