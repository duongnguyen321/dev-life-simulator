// ==========================================
// CHAPTER 7: SCALING (MỞ RỘNG QUY MÔ)
// Timeline: 32-38 tuổi
// Theme: Cân bằng, Gia đình và Di sản
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter7: Chapter = {
	id: 7,
	name: 'Scaling',
	nameVi: 'Mở Rộng Quy Mô',
	nameEn: 'Scaling',
	ageRange: '32-38 tuổi',
	theme: 'Cân bằng, Gia đình và Di sản',
	themeVi: 'Cân bằng, Gia đình và Di sản',
	themeEn: 'Balance, Family, and Legacy',
	scenes: [
		{
			id: 'ch7_divide',
			name: 'Chia để trị',
			nameVi: '32-36 tuổi: Chia để trị & Chiến lược kép',
			nameEn: 'Age 32-36: Divide & Conquer',
			background: '/assets/sprites/backgrounds/office_stable.png',
			music: '/assets/audio/music/chapters/ch7_balance.mp3',
			dialogueStart: 'ch7_divide_1',
		},
		{
			id: 'ch7_healing',
			name: 'Vá lỗi tâm hồn',
			nameVi: '37-38 tuổi: Bản vá lỗi cho tâm hồn',
			nameEn: 'Age 37-38: Humanity Patch',
			background: '/assets/sprites/backgrounds/home_family.png',
			music: '/assets/audio/music/chapters/ch7_balance.mp3',
			dialogueStart: 'ch7_healing_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch7_todo_dinner_home',
				text: 'Về nhà ăn tối sớm',
				textVi: 'Về nhà ăn tối sớm',
				textEn: 'Home early for dinner',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 1 }, // Opportunity cost of not working? Or maybe just time. Let's say no cost for now or maybe money -1 if skipping work.
			},
			{
				id: 'ch7_todo_read_story',
				text: 'Đọc truyện cổ tích cho con ngủ',
				textVi: 'Đọc truyện cổ tích cho con ngủ',
				textEn: 'Read bedtime stories',
				effects: [{ stat: 'humanity', value: 1 }],
				reward: { stress: -1 },
			},
			{
				id: 'ch7_todo_parent_meeting',
				text: 'Đi họp phụ huynh',
				textVi: 'Đi họp phụ huynh',
				textEn: 'Attend parent meeting',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch7_todo_gift_wife',
				text: 'Mua quà bất ngờ cho vợ',
				textVi: 'Mua quà bất ngờ cho vợ',
				textEn: 'Surprise gift for wife',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch7_todo_review_finance',
				text: 'Duyệt báo cáo tài chính quý',
				textVi: 'Duyệt báo cáo tài chính quý',
				textEn: 'Review quarterly finance',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch7_todo_approve_hiring',
				text: 'Phê duyệt kế hoạch tuyển dụng mới',
				textVi: 'Phê duyệt kế hoạch tuyển dụng mới',
				textEn: 'Approve hiring plan',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch7_todo_handle_crisis',
				text: 'Xử lý khủng hoảng truyền thông',
				textVi: 'Xử lý khủng hoảng truyền thông',
				textEn: 'Handle media crisis',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch7_todo_gym',
				text: 'Đi tập Gym',
				textVi: 'Đi tập Gym',
				textEn: 'Go to Gym',
				reward: { health: 1 },
			},
			{
				id: 'ch7_todo_travel_family',
				text: 'Đưa cả nhà đi du lịch',
				textVi: 'Đưa cả nhà đi du lịch',
				textEn: 'Family travel',
				effects: [{ stat: 'humanity', value: 2 }],
				cost: { money: 1 },
			},
			{
				id: 'ch7_todo_invest_stock',
				text: 'Đầu tư chứng khoán',
				textVi: 'Đầu tư chứng khoán',
				textEn: 'Invest in stocks',
				reward: { money: 1 },
				cost: { stress: 1 }, // Risk
			},
			{
				id: 'ch7_todo_mentor_founder',
				text: 'Mentor cho các Founder trẻ',
				textVi: 'Mentor cho các Founder trẻ',
				textEn: 'Mentor young Founders',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch7_todo_reject_party',
				text: 'Từ chối tiệc rượu để về nhà',
				textVi: 'Từ chối tiệc rượu để về nhà',
				textEn: 'Reject party to go home',
				effects: [{ stat: 'humanity', value: 1 }],
				reward: { health: 1 },
			},
			{
				id: 'ch7_todo_buy_volvo',
				text: 'Mua xe an toàn (Volvo)',
				textVi: 'Mua xe an toàn (Volvo)',
				textEn: 'Buy safe car (Volvo)',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch7_todo_argue_wife',
				text: 'Tranh luận với vợ về cân bằng cuộc sống',
				textVi: 'Tranh luận với vợ về cân bằng cuộc sống',
				textEn: 'Argue with wife about work-life balance',
				cost: { stress: 1, humanity: 1 },
			},
			{
				id: 'ch7_todo_watch_kid',
				text: 'Xem con chập chững biết đi',
				textVi: 'Xem con chập chững biết đi',
				textEn: 'Watch kid walk',
				effects: [{ stat: 'humanity', value: 3 }],
			},
			{
				id: 'ch7_todo_delegate',
				text: 'Ủy quyền công việc cho cấp dưới',
				textVi: 'Ủy quyền công việc cho cấp dưới',
				textEn: 'Delegate work',
				effects: [{ stat: 'vision', value: 1 }],
				reward: { stress: -1 },
			},
			{
				id: 'ch7_todo_check_bp',
				text: 'Kiểm tra huyết áp',
				textVi: 'Kiểm tra huyết áp',
				textEn: 'Check blood pressure',
				cost: { health: 1 }, // Health -1 implies bad health found? Or maybe cost to health is weird. Plot says Health -1. Maybe it means "Health check reveals issues". Let's stick to plot.
			},
			{
				id: 'ch7_todo_donate',
				text: 'Quyên góp từ thiện',
				textVi: 'Quyên góp từ thiện',
				textEn: 'Donate to charity',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch7_todo_plan_retreat',
				text: 'Lên kế hoạch Company Retreat',
				textVi: 'Lên kế hoạch Company Retreat',
				textEn: 'Plan Company Retreat',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch7_todo_sit_car',
				text: 'Ngồi trong xe 10 phút trước khi vào nhà',
				textVi: 'Ngồi trong xe 10 phút trước khi vào nhà',
				textEn: 'Sit in car 10 mins before entering home',
				reward: { stress: -1 },
			},
		],
		dreamQuestions: [
			{
				id: 'ch7_dream_kid',
				text: 'Bạn thấy con mình đang khóc vì không nhận ra bố.',
				textVi: 'Bạn thấy con mình đang khóc vì không nhận ra bố.',
				textEn: 'You see your child crying, not recognizing dad.',
				choices: [
					{
						id: 'ch7_dream_kid_hug',
						text: 'Chạy lại ôm con',
						textVi: 'Chạy lại ôm con',
						textEn: 'Run and hug child',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch7_dream_kid_money',
						text: 'Đưa tiền cho con',
						textVi: 'Đưa tiền cho con',
						textEn: 'Give money to child',
						next: '',
						effects: [{ stat: 'humanity', value: -1 }],
					},
					{
						id: 'ch7_dream_kid_wife',
						text: 'Nhờ vợ dỗ',
						textVi: 'Nhờ vợ dỗ',
						textEn: 'Ask wife to comfort',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Avoidance
					},
					{
						id: 'ch7_dream_kid_clown',
						text: 'Biến thành chú hề',
						textVi: 'Biến thành chú hề',
						textEn: 'Turn into a clown',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
				],
			},
			{
				id: 'ch7_dream_balance',
				text: 'Bạn đang đi trên dây, một tay cầm tiền, một tay bế con.',
				textVi: 'Bạn đang đi trên dây, một tay cầm tiền, một tay bế con.',
				textEn: 'Walking on tightrope, holding money and child.',
				choices: [
					{
						id: 'ch7_dream_balance_drop_money',
						text: 'Vứt tiền giữ con',
						textVi: 'Vứt tiền giữ con',
						textEn: 'Drop money, keep child',
						next: '',
						effects: [{ stat: 'humanity', value: 2 }],
					},
					{
						id: 'ch7_dream_balance_drop_child',
						text: 'Vứt con giữ tiền',
						textVi: 'Vứt con giữ tiền',
						textEn: 'Drop child, keep money',
						next: '',
						effects: [{ stat: 'money', value: 1 }],
					},
					{
						id: 'ch7_dream_balance_keep_both',
						text: 'Cố giữ cả hai',
						textVi: 'Cố giữ cả hai',
						textEn: 'Try to keep both',
						next: '',
						effects: [{ stat: 'stress', value: 2 }],
					},
					{
						id: 'ch7_dream_balance_jump',
						text: 'Nhảy xuống lưới an toàn',
						textVi: 'Nhảy xuống lưới an toàn',
						textEn: 'Jump to safety net',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch7_dream_car',
				text: 'Bạn đang lái chiếc Volvo nhưng phanh không ăn.',
				textVi: 'Bạn đang lái chiếc Volvo nhưng phanh không ăn.',
				textEn: 'Driving Volvo but brakes failed.',
				choices: [
					{
						id: 'ch7_dream_car_crash',
						text: 'Đâm vào vách núi để dừng lại',
						textVi: 'Đâm vào vách núi để dừng lại',
						textEn: 'Crash into cliff to stop',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }], // Sacrifice
					},
					{
						id: 'ch7_dream_car_continue',
						text: 'Cứ lái tiếp xem sao',
						textVi: 'Cứ lái tiếp xem sao',
						textEn: 'Keep driving',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Risk
					},
					{
						id: 'ch7_dream_car_jump',
						text: 'Nhảy ra khỏi xe',
						textVi: 'Nhảy ra khỏi xe',
						textEn: 'Jump out',
						next: '',
						effects: [{ stat: 'health', value: 1 }], // Survival
					},
					{
						id: 'ch7_dream_car_fly',
						text: 'Biến chiếc xe thành máy bay',
						textVi: 'Biến chiếc xe thành máy bay',
						textEn: 'Turn car into plane',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch7_dream_gray',
				text: 'Bạn soi gương thấy mình già đi 20 tuổi.',
				textVi: 'Bạn soi gương thấy mình già đi 20 tuổi.',
				textEn: 'Look in mirror, aged 20 years.',
				choices: [
					{
						id: 'ch7_dream_gray_dye',
						text: 'Nhuộm tóc',
						textVi: 'Nhuộm tóc',
						textEn: 'Dye hair',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }], // Denial
					},
					{
						id: 'ch7_dream_gray_smile',
						text: 'Mỉm cười chấp nhận',
						textVi: 'Mỉm cười chấp nhận',
						textEn: 'Smile and accept',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch7_dream_gray_break',
						text: 'Đập vỡ gương',
						textVi: 'Đập vỡ gương',
						textEn: 'Break mirror',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch7_dream_gray_elixir',
						text: 'Đi tìm thuốc trường sinh',
						textVi: 'Đi tìm thuốc trường sinh',
						textEn: 'Find elixir of life',
						next: '',
						effects: [{ stat: 'vision', value: -1 }], // Delusion
					},
				],
			},
			{
				id: 'ch7_dream_dinner',
				text: 'Một bữa tối thịnh soạn nhưng không có ai ngồi ăn cùng.',
				textVi: 'Một bữa tối thịnh soạn nhưng không có ai ngồi ăn cùng.',
				textEn: 'Lavish dinner but no one to eat with.',
				choices: [
					{
						id: 'ch7_dream_dinner_alone',
						text: 'Ăn một mình',
						textVi: 'Ăn một mình',
						textEn: 'Eat alone',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch7_dream_dinner_invite',
						text: 'Mời người lạ vào ăn',
						textVi: 'Mời người lạ vào ăn',
						textEn: 'Invite strangers',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch7_dream_dinner_flip',
						text: 'Hất đổ bàn ăn',
						textVi: 'Hất đổ bàn ăn',
						textEn: 'Flip the table',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch7_dream_dinner_call',
						text: 'Gọi điện cho vợ con',
						textVi: 'Gọi điện cho vợ con',
						textEn: 'Call family',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
				],
			},
		],
	},
};

export const chapter7Dialogues: Record<string, DialogueNode> = {
	// 7.1 Chia để trị (Microservices)
	ch7_divide_1: {
		id: 'ch7_divide_1',
		speaker: 'narrator',
		text: '32 tuổi. Sau cú thất bại Product, bạn không bỏ cuộc. Bạn quay về, đập đi xây lại. Đơn giản hơn, thực dụng hơn.',
		textVi:
			'32 tuổi. Sau cú thất bại Product, bạn không bỏ cuộc. Bạn quay về, đập đi xây lại. Đơn giản hơn, thực dụng hơn.',
		textEn:
			'32 years old. After Product failure, you persisted. Returned, tore down, rebuilt. Simpler, more pragmatic.',
		next: 'ch7_divide_strategy',
	},
	ch7_divide_strategy: {
		id: 'ch7_divide_strategy',
		speaker: 'narrator',
		text: 'Kiến trúc Microservices: Tách công ty làm 2 service độc lập. Service A (Outsource): Cash Cow, quy trình chuẩn, nuôi sống hệ thống. Service B (Product): Star, R&D, đốt resource nhưng là tương lai.',
		textVi:
			'Kiến trúc Microservices: Tách công ty làm 2 service độc lập. Service A (Outsource): Cash Cow, quy trình chuẩn, nuôi sống hệ thống. Service B (Product): Star, R&D, đốt resource nhưng là tương lai.',
		textEn:
			'Microservices Architecture: Split company into 2 independent services. Service A (Outsource): Cash Cow, standard process, sustains system. Service B (Product): Star, R&D, burns resources but is the future.',
		next: 'ch7_divide_funding',
	},
	ch7_divide_funding: {
		id: 'ch7_divide_funding',
		speaker: 'narrator',
		text: 'Lao vào vòng xoáy gọi vốn (Series A). Gặp gỡ các Shark, các quỹ đầu tư. Họ tung ra những con số định giá khổng lồ.',
		textVi:
			'Lao vào vòng xoáy gọi vốn (Series A). Gặp gỡ các Shark, các quỹ đầu tư. Họ tung ra những con số định giá khổng lồ.',
		textEn:
			'Entered fundraising whirlwind (Series A). Met Sharks, VC funds. They threw out huge valuation numbers.',
		next: 'ch7_divide_economics',
	},
	ch7_divide_economics: {
		id: 'ch7_divide_economics',
		speaker: 'narrator',
		text: 'Công ty scale từ 10 lên 50 người. Quy trình vỡ trận. Technical Debt (Nợ kỹ thuật) chồng chất. Mỗi ngày đi làm là một cuộc chiến dập lửa.',
		textVi:
			'Công ty scale từ 10 lên 50 người. Quy trình vỡ trận. Technical Debt (Nợ kỹ thuật) chồng chất. Mỗi ngày đi làm là một cuộc chiến dập lửa.',
		textEn:
			'Company scaled from 10 to 50. Process broken. Technical Debt piled up. Every day was a firefighting battle.',
		next: 'ch7_divide_mindset',
	},
	ch7_divide_mindset: {
		id: 'ch7_divide_mindset',
		speaker: 'narrator',
		text: 'Bạn giữ cái đầu lạnh (Steel Mind). Nhớ bài học "Unit Economics" năm lớp 7 khi đứng quầy thu ngân cho bố. "Doanh thu là phù du, Lợi nhuận là chân lý."',
		textVi:
			'Bạn giữ cái đầu lạnh (Steel Mind). Nhớ bài học "Unit Economics" năm lớp 7 khi đứng quầy thu ngân cho bố. "Doanh thu là phù du, Lợi nhuận là chân lý."',
		textEn:
			'You kept Steel Mind. Remembered Grade 7 "Unit Economics" lesson at Dad\'s cashier. "Revenue is vanity, Profit is sanity."',
		effects: [{ stat: 'steelMind', value: 1 }],
		choices: [
			{
				id: 'choice_careful_funding',
				text: 'Chấp nhận deal hợp lý, giữ quyền kiểm soát',
				textVi: 'Chấp nhận deal hợp lý, giữ quyền kiểm soát',
				textEn: 'Accept reasonable deal, keep control',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch7_fork_conflict',
			},
			{
				id: 'choice_aggressive_funding',
				text: 'Nhận định giá cao, chấp nhận pha loãng',
				textVi: 'Nhận định giá cao, chấp nhận pha loãng',
				textEn: 'Take high valuation, accept dilution',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch7_fork_conflict',
			},
		],
	},

	// 7.3 Chia rẽ (Fork)
	ch7_fork_conflict: {
		id: 'ch7_fork_conflict',
		speaker: 'narrator',
		text: 'Mâu thuẫn nảy sinh. Anh Q, D, N muốn ổn định (duy trì Outsource). Bạn muốn đốt tiền Outsource để nuôi Product (High Risk). Xung đột Vision.',
		textVi:
			'Mâu thuẫn nảy sinh. Anh Q, D, N muốn ổn định (duy trì Outsource). Bạn muốn đốt tiền Outsource để nuôi Product (High Risk). Xung đột Vision.',
		textEn:
			'Conflict arose. Brothers Q, D, N wanted stability (maintain Outsource). You wanted to burn Outsource money for Product (High Risk). Vision Conflict.',
		next: 'ch7_merge_conflict_q',
	},

	// 7.4 Merge Conflict (Sự ra đi)
	ch7_merge_conflict_q: {
		id: 'ch7_merge_conflict_q',
		speaker: 'npc',
		text: 'Anh Q - người anh cả - quyết định rời đi. "Anh già rồi, không theo kịp giấc mơ của chú nữa. Anh cần sự an toàn cho vợ con."',
		textVi:
			'Anh Q - người anh cả - quyết định rời đi. "Anh già rồi, không theo kịp giấc mơ của chú nữa. Anh cần sự an toàn cho vợ con."',
		textEn:
			'Brother Q - the eldest - decided to leave. "I\'m old, can\'t keep up with your dream. I need safety for my family."',
		next: 'ch7_q_leave_reaction',
	},
	ch7_q_leave_reaction: {
		id: 'ch7_q_leave_reaction',
		speaker: 'player',
		text: 'Bạn ký quyết định mua lại cổ phần của anh Q. Bữa tiệc chia tay buồn thấu ruột. Codebase mất đi một Core Contributor quan trọng.',
		textVi:
			'Bạn ký quyết định mua lại cổ phần của anh Q. Bữa tiệc chia tay buồn thấu ruột. Codebase mất đi một Core Contributor quan trọng.',
		textEn:
			"You signed decision to buy back Q's shares. Farewell party was heartbreaking. Codebase lost a key Core Contributor.",
		effects: [{ stat: 'humanity', value: -1 }],
		next: 'ch7_healing_1',
	},

	// 7.2 Vá lỗi tâm hồn
	ch7_healing_1: {
		id: 'ch7_healing_1',
		speaker: 'narrator',
		text: '37 tuổi. Bạn gặp "cô ấy" - một người phụ nữ không trong ngành công nghệ, nhưng có trái tim ấm áp.',
		textVi:
			'37 tuổi. Bạn gặp "cô ấy" - một người phụ nữ không trong ngành công nghệ, nhưng có trái tim ấm áp.',
		textEn:
			'37 years old. You met "her" - a woman not in tech, but with a warm heart.',
		next: 'ch7_healing_marriage',
	},
	ch7_healing_marriage: {
		id: 'ch7_healing_marriage',
		speaker: 'npc',
		text: '"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textVi:
			'"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textEn:
			'"I don\'t care if it\'s what you code, I only care if you come home for dinner on time."',
		next: 'ch7_marriage_reply',
	},
	ch7_marriage_reply: {
		id: 'ch7_marriage_reply',
		speaker: 'player',
		text: 'Bạn sẽ trả lời sao?',
		textVi: 'Bạn sẽ trả lời sao?',
		textEn: 'How will you reply?',
		choices: [
			{
				id: 'choice_promise_dinner',
				text: 'Anh hứa sẽ về sớm',
				textVi: 'Anh hứa sẽ về sớm',
				textEn: 'I promise to be home early',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch7_healing_birth',
			},
			{
				id: 'choice_joke_dinner',
				text: 'Thế anh code ở nhà nhé?',
				textVi: 'Thế anh code ở nhà nhé?',
				textEn: 'So can I code at home?',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch7_healing_birth',
			},
		],
	},
	ch7_healing_birth: {
		id: 'ch7_healing_birth',
		speaker: 'narrator',
		text: '38 tuổi. Đứa con đầu lòng chào đời. Tiếng khóc "Oa oa" vang lên trong phòng sinh.',
		textVi:
			'38 tuổi. Đứa con đầu lòng chào đời. Tiếng khóc "Oa oa" vang lên trong phòng sinh.',
		textEn:
			'38 years old. First child born. The cry echoed in the delivery room.',
		next: 'ch7_birth_cry',
	},
	ch7_birth_cry: {
		id: 'ch7_birth_cry',
		speaker: 'player',
		text: '(Khóc) "Chào con... Bố đây..."',
		textVi: '(Khóc) "Chào con... Bố đây..."',
		textEn: '(Crying) "Hello son... Daddy is here..."',
		effects: [{ stat: 'humanity', value: 2 }],
		next: 'ch7_healing_transform',
	},
	ch7_healing_transform: {
		id: 'ch7_healing_transform',
		speaker: 'narrator',
		text: 'Nhưng hạnh phúc đi kèm thử thách. Vợ bị trầm cảm sau sinh. Con ốm sốt lúc 2h sáng đúng lúc Server Crash.',
		textVi:
			'Nhưng hạnh phúc đi kèm thử thách. Vợ bị trầm cảm sau sinh. Con ốm sốt lúc 2h sáng đúng lúc Server Crash.',
		textEn:
			'But happiness came with challenges. Wife had postpartum depression. Child fever at 2 AM right when Server Crashed.',
		next: 'ch7_healing_conflict',
	},
	ch7_healing_conflict: {
		id: 'ch7_healing_conflict',
		speaker: 'player',
		text: 'Điện thoại réo liên hồi. Vợ khóc bên nôi con. Bạn phải chọn.',
		textVi: 'Điện thoại réo liên hồi. Vợ khóc bên nôi con. Bạn phải chọn.',
		textEn: 'Phone ringing non-stop. Wife crying by the crib. You must choose.',
		choices: [
			{
				id: 'choice_family_first',
				text: 'Vứt điện thoại, ôm vợ con (Humanity)',
				textVi: 'Vứt điện thoại, ôm vợ con (Humanity)',
				textEn: 'Throw phone, hug wife and child (Humanity)',
				effects: [{ stat: 'humanity', value: 2 }],
				next: 'ch7_healing_car',
			},
			{
				id: 'choice_work_first',
				text: 'Ra ban công fix lỗi Server (Steel Mind)',
				textVi: 'Ra ban công fix lỗi Server (Steel Mind)',
				textEn: 'Go to balcony to fix Server (Steel Mind)',
				effects: [{ stat: 'steelMind', value: 2 }],
				next: 'ch7_healing_car',
			},
		],
	},
	ch7_healing_car: {
		id: 'ch7_healing_car',
		speaker: 'narrator',
		text: 'Bạn mua chiếc xe mơ ước (Volvo/Mercedes). Không phải để "làm màu" như bố ngày xưa với LuxSA. Mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textVi:
			'Bạn mua chiếc xe mơ ước (Volvo/Mercedes). Không phải để "làm màu" như bố ngày xưa với LuxSA. Mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textEn:
			'Bought dream car (Volvo/Mercedes). Not for "show" like Dad\'s old LuxSA. But the world\'s safest car to carry wife and child.',
		next: 'ch7_healing_balance',
	},
	ch7_healing_balance: {
		id: 'ch7_healing_balance',
		speaker: 'narrator',
		text: 'Bạn học cách "Tắt máy" (Shutdown). Về nhà là bố, không phải là CEO. Nhưng liệu bạn có thực sự làm được điều đó?',
		textVi:
			'Bạn học cách "Tắt máy" (Shutdown). Về nhà là bố, không phải là CEO. Nhưng liệu bạn có thực sự làm được điều đó?',
		textEn:
			'You learned to "Shutdown". At home, be a father, not CEO. But could you truly do it?',
		choices: [
			{
				id: 'choice_dinner_commitment',
				text: 'Hứa về ăn tối 3 lần/tuần (Work-Life Balance)',
				textVi: 'Hứa về ăn tối 3 lần/tuần (Work-Life Balance)',
				textEn: 'Promise dinner 3x/week (Work-Life Balance)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch7_healing_lesson',
			},
			{
				id: 'choice_hustle_mode',
				text: 'Vẫn ưu tiên công việc (Grind)',
				textVi: 'Vẫn ưu tiên công việc (Grind)',
				textEn: 'Still prioritize work (Grind)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch7_healing_lesson',
			},
		],
	},
	ch7_healing_lesson: {
		id: 'ch7_healing_lesson',
		speaker: 'narrator',
		text: 'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textVi:
			'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textEn:
			'Family is the "Backend" that the career Frontend needs to shine. You understood that, whether you could execute it is another matter.',
		next: 'ch8_ai_1',
	},
};
