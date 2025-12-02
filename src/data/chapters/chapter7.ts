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
			dialogueStart: 'ch7_intro', // Changed from ch7_divide_1
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
				cost: { health: 1 },
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch7_todo_secret_date',
				text: 'Hẹn hò bí mật (Risk)',
				textVi: 'Hẹn hò bí mật (Risk)',
				textEn: 'Secret date (Risk)',
				effects: [
					{ stat: 'stress', value: -2 },
					{ stat: 'humanity', value: -2 },
				],
				cost: { money: 10000000 },
			},
			{
				id: 'ch7_todo_crypto_check',
				text: 'Check giá Crypto mỗi 5 phút',
				textVi: 'Check giá Crypto mỗi 5 phút',
				textEn: 'Check Crypto price every 5 mins',
				effects: [{ stat: 'money', value: 1000000 }], // Small gain
				cost: { stress: 2, vision: -1 },
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
	// NEW: Intro
	ch7_intro: {
		id: 'ch7_intro',
		speaker: 'narrator',
		text: 'Văn phòng mới ở tầng 20. View nhìn ra toàn thành phố. Nhân viên đi lại tấp nập. Bạn ngồi trong phòng riêng, tách biệt qua lớp kính cách âm.',
		textVi:
			'Văn phòng mới ở tầng 20. View nhìn ra toàn thành phố. Nhân viên đi lại tấp nập. Bạn ngồi trong phòng riêng, tách biệt qua lớp kính cách âm.',
		textEn:
			'New office on 20th floor. City view. Staff bustling. You sit in private room, separated by soundproof glass.',
		next: 'ch7_divide_1',
	},

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
		next: 'ch7_invest_start',
	},

	// NEW: Invest Stock Event
	ch7_invest_start: {
		id: 'ch7_invest_start',
		speaker: 'player',
		text: '(Suy nghĩ) Thị trường chứng khoán đang sôi động. Bạn có 500 triệu tiền nhàn rỗi.',
		textVi:
			'(Suy nghĩ) Thị trường chứng khoán đang sôi động. Bạn có 500 triệu tiền nhàn rỗi.',
		textEn:
			'(Thinking) Stock market is booming. You have 500 million idle cash.',
		choices: [
			{
				id: 'choice_invest_stock',
				text: 'Đầu tư: Liều ăn nhiều (+500M hoặc -500M)',
				textVi: 'Đầu tư: Liều ăn nhiều (+500M hoặc -500M)',
				textEn: 'Invest: High risk high return (+500M or -500M)',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch7_invest_do',
			},
			{
				id: 'choice_invest_skip',
				text: 'Giữ tiền mặt: An toàn là trên hết (Steel Mind +1)',
				textVi: 'Giữ tiền mặt: An toàn là trên hết (Steel Mind +1)',
				textEn: 'Keep cash: Safety first (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch7_divide_economics',
			},
		],
	},
	ch7_invest_do: {
		id: 'ch7_invest_do',
		speaker: 'narrator',
		text: 'Bạn chốt lời thành công. Một khoản thu nhập thụ động nhỏ.',
		textVi: 'Bạn chốt lời thành công. Một khoản thu nhập thụ động nhỏ.',
		textEn: 'You took profit successfully. A small passive income.',
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
		next: 'ch7_crypto_start', // Redirect to Crypto
	},

	// NEW: Crypto Gambling
	ch7_crypto_start: {
		id: 'ch7_crypto_start',
		speaker: 'player',
		text: '(Suy nghĩ) Bạn bè rủ rê vào hội nhóm "Pump & Dump" Crypto. Cơ hội nhân đôi tài khoản trong một đêm.',
		textVi:
			'(Suy nghĩ) Bạn bè rủ rê vào hội nhóm "Pump & Dump" Crypto. Cơ hội nhân đôi tài khoản trong một đêm.',
		textEn:
			'(Thinking) Friends invite to "Pump & Dump" Crypto group. Chance to double account overnight.',
		choices: [
			{
				id: 'choice_crypto_allin',
				text: 'All-in: Liều ăn nhiều (Money x2 or /2)',
				textVi: 'All-in: Liều ăn nhiều (Money x2 or /2)',
				textEn: 'All-in: High risk (Money x2 or /2)',
				effects: [{ stat: 'stress', value: 3 }],
				next: 'ch7_crypto_result',
			},
			{
				id: 'choice_crypto_ignore',
				text: 'Bỏ qua: Tập trung vào Product (Vision +1)',
				textVi: 'Bỏ qua: Tập trung vào Product (Vision +1)',
				textEn: 'Ignore: Focus on Product (Vision +1)',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch7_health_check',
			},
		],
	},
	ch7_crypto_result: {
		id: 'ch7_crypto_result',
		speaker: 'narrator',
		text: 'Thị trường sập. Bạn mất một nửa số tiền đầu tư. Bài học đắt giá về lòng tham.',
		textVi:
			'Thị trường sập. Bạn mất một nửa số tiền đầu tư. Bài học đắt giá về lòng tham.',
		textEn:
			'Market crashed. You lost half investment. Expensive lesson on greed.',
		effects: [
			{ stat: 'money', value: -250000000 }, // Assume 500M base
			{ stat: 'steelMind', value: -1 },
		],
		next: 'ch7_health_check',
	},

	// NEW: Health Collapse Check
	ch7_health_check: {
		id: 'ch7_health_check',
		speaker: 'narrator',
		text: 'Cơ thể bạn bắt đầu lên tiếng sau những đêm thức trắng.',
		textVi: 'Cơ thể bạn bắt đầu lên tiếng sau những đêm thức trắng.',
		textEn: 'Your body starts screaming after sleepless nights.',
		choices: [
			{
				id: 'choice_health_collapse_trigger',
				text: '...',
				textVi: '...',
				textEn: '...',
				condition: {
					type: 'stat',
					key: 'health',
					operator: '<',
					value: 40,
				},
				next: 'ch7_hospital_collapse',
			},
			{
				id: 'choice_health_ok',
				text: 'Vẫn ổn: Tiếp tục làm việc',
				textVi: 'Vẫn ổn: Tiếp tục làm việc',
				textEn: 'Still fine: Keep working',
				next: 'ch7_divide_mindset',
			},
		],
	},
	ch7_hospital_collapse: {
		id: 'ch7_hospital_collapse',
		speaker: 'narrator',
		text: 'Bạn ngất xỉu ngay trong cuộc họp. Bác sĩ cảnh báo nguy cơ đột quỵ. Bắt buộc nghỉ ngơi 1 tháng.',
		textVi:
			'Bạn ngất xỉu ngay trong cuộc họp. Bác sĩ cảnh báo nguy cơ đột quỵ. Bắt buộc nghỉ ngơi 1 tháng.',
		textEn:
			'You fainted in meeting. Doctor warned of stroke risk. Forced 1 month rest.',
		effects: [
			{ stat: 'vision', value: -2 },
			{ stat: 'money', value: -100000000 }, // Medical bills
			{ stat: 'health', value: 10 }, // Recovery
		],
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
		next: 'ch7_affair_start', // Redirect to Affair
	},

	// NEW: The Affair (Temptation)
	ch7_affair_start: {
		id: 'ch7_affair_start',
		speaker: 'narrator',
		text: 'Trong nỗi buồn chia tay Co-founder, một thư ký trẻ đẹp tiếp cận bạn, tỏ ý quan tâm đặc biệt.',
		textVi:
			'Trong nỗi buồn chia tay Co-founder, một thư ký trẻ đẹp tiếp cận bạn, tỏ ý quan tâm đặc biệt.',
		textEn:
			'In sadness of Co-founder parting, a young beautiful secretary approaches, showing special interest.',
		choices: [
			{
				id: 'choice_affair_flirt',
				text: 'Đáp lại: Tìm sự an ủi (Stress -2, Humanity -2)',
				textVi: 'Đáp lại: Tìm sự an ủi (Stress -2, Humanity -2)',
				textEn: 'Respond: Seek comfort (Stress -2, Humanity -2)',
				effects: [
					{ stat: 'stress', value: -2 },
					{ stat: 'humanity', value: -2 },
				],
				next: 'ch7_healing_1',
			},
			{
				id: 'choice_affair_reject',
				text: 'Từ chối: Giữ vững bản lĩnh (Steel Mind +2, Humanity +1)',
				textVi: 'Từ chối: Giữ vững bản lĩnh (Steel Mind +2, Humanity +1)',
				textEn: 'Reject: Stay strong (Steel Mind +2, Humanity +1)',
				effects: [
					{ stat: 'steelMind', value: 2 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_healing_1',
			},
		],
	},

	// 7.2 Vá lỗi tâm hồn
	ch7_end: {
		id: 'ch7_end',
		speaker: 'narrator',
		text: 'Mọi thứ có vẻ hoàn hảo. Nhưng những báo cáo tài chính bắt đầu có những con số bất thường. Một cơn địa chấn đang âm thầm hình thành dưới chân đế chế của bạn.',
		textVi:
			'Mọi thứ có vẻ hoàn hảo. Nhưng những báo cáo tài chính bắt đầu có những con số bất thường. Một cơn địa chấn đang âm thầm hình thành dưới chân đế chế của bạn.',
		textEn:
			'Everything seems perfect. But financial reports start showing unusual numbers. An earthquake is silently forming beneath your empire.',
		next: 'chapter_8_start',
	},
	ch7_healing_marriage: {
		id: 'ch7_healing_marriage',
		speaker: 'npc',
		text: '"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textVi:
			'"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textEn:
			'"I don\'t care if it\'s what you code, I only care if you come home for dinner on time."',
		next: 'ch7_dinner_start',
	},

	// NEW: Dinner Home Event
	ch7_dinner_start: {
		id: 'ch7_dinner_start',
		speaker: 'player',
		text: 'Vợ nhắn tin: "Hôm nay anh về sớm ăn cơm nhé?". Nhưng công việc ở công ty vẫn còn bộn bề.',
		textVi:
			'Vợ nhắn tin: "Hôm nay anh về sớm ăn cơm nhé?". Nhưng công việc ở công ty vẫn còn bộn bề.',
		textEn:
			'Wife texted: "Come home early for dinner?". But work is piling up.',
		choices: [
			{
				id: 'choice_dinner_go',
				text: 'Về sớm: Bỏ việc để về (-5M, Humanity +1)',
				textVi: 'Về sớm: Bỏ việc để về (-5M, Humanity +1)',
				textEn: 'Go home: Leave work (-5M, Humanity +1)',
				effects: [
					{ stat: 'money', value: -5000000 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_dinner_go',
			},
			{
				id: 'choice_dinner_stay',
				text: 'Ở lại làm: Deadline dí rồi (Steel Mind +1)',
				textVi: 'Ở lại làm: Deadline dí rồi (Steel Mind +1)',
				textEn: 'Stay: Deadline is close (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch7_marriage_reply',
			},
		],
	},
	ch7_dinner_go: {
		id: 'ch7_dinner_go',
		speaker: 'narrator',
		text: 'Bữa cơm gia đình ấm cúng. Bạn cảm thấy bình yên sau những giờ code căng thẳng.',
		textVi:
			'Bữa cơm gia đình ấm cúng. Bạn cảm thấy bình yên sau những giờ code căng thẳng.',
		textEn: 'Cozy family dinner. You feel at peace after stressful coding.',
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
				next: 'ch7_buy_car_start',
			},
			{
				id: 'choice_work_first',
				text: 'Ra ban công fix lỗi Server (Steel Mind)',
				textVi: 'Ra ban công fix lỗi Server (Steel Mind)',
				textEn: 'Go to balcony to fix Server (Steel Mind)',
				effects: [{ stat: 'steelMind', value: 2 }],
				next: 'ch7_buy_car_start',
			},
		],
	},

	// NEW: Buy Volvo Event
	ch7_buy_car_start: {
		id: 'ch7_buy_car_start',
		speaker: 'player',
		text: '(Suy nghĩ) Gia đình cần một chiếc xe an toàn hơn. Chiếc Volvo XC90 nổi tiếng an toàn. Giá 3 tỷ.',
		textVi:
			'(Suy nghĩ) Gia đình cần một chiếc xe an toàn hơn. Chiếc Volvo XC90 nổi tiếng an toàn. Giá 3 tỷ.',
		textEn:
			'(Thinking) Family needs a safer car. Volvo XC90 is famous for safety. Price 3 billion.',
		choices: [
			{
				id: 'choice_buy_car_yes',
				text: 'Mua xe: An toàn cho vợ con là vô giá (-3B)',
				textVi: 'Mua xe: An toàn cho vợ con là vô giá (-3B)',
				textEn: 'Buy car: Safety for family is priceless (-3B)',
				condition: {
					type: 'stat',
					key: 'money',
					operator: '>=',
					value: 3000000000,
				},
				effects: [
					{ stat: 'money', value: -3000000000 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_buy_car_buy',
			},
			{
				id: 'choice_buy_car_no',
				text: 'Đi Grab: Tiết kiệm chi phí (Money +0)',
				textVi: 'Đi Grab: Tiết kiệm chi phí (Money +0)',
				textEn: 'Use Grab: Save cost (Money +0)',
				next: 'ch7_healing_balance',
			},
		],
	},
	ch7_buy_car_buy: {
		id: 'ch7_buy_car_buy',
		speaker: 'narrator',
		text: 'Bạn mua chiếc xe mơ ước. Không phải để "làm màu", mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textVi:
			'Bạn mua chiếc xe mơ ước. Không phải để "làm màu", mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textEn:
			'Bought dream car. Not for "show", but the world\'s safest car to carry wife and child.',
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
				next: 'ch7_travel_start',
			},
			{
				id: 'choice_hustle_mode',
				text: 'Vẫn ưu tiên công việc (Grind)',
				textVi: 'Vẫn ưu tiên công việc (Grind)',
				textEn: 'Still prioritize work (Grind)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch7_travel_start',
			},
		],
	},
	// NEW: Family Travel Event
	ch7_travel_start: {
		id: 'ch7_travel_start',
		speaker: 'player',
		text: '(Suy nghĩ) Cả nhà đã lâu chưa đi du lịch. Một chuyến đi Châu Âu 2 tuần sẽ là kỷ niệm đẹp. Chi phí 200 triệu.',
		textVi:
			'(Suy nghĩ) Cả nhà đã lâu chưa đi du lịch. Một chuyến đi Châu Âu 2 tuần sẽ là kỷ niệm đẹp. Chi phí 200 triệu.',
		textEn:
			"(Thinking) Family hasn't traveled for long. 2 weeks in Europe would be great memory. Cost 200 million.",
		choices: [
			{
				id: 'choice_travel_europe',
				text: 'Châu Âu: Giấc mơ tuyết trắng (-200M, Humanity +5, Vision +2)',
				textVi: 'Châu Âu: Giấc mơ tuyết trắng (-200M, Humanity +5, Vision +2)',
				textEn: 'Europe: White snow dream (-200M, Humanity +5, Vision +2)',
				condition: {
					type: 'stat',
					key: 'money',
					operator: '>=',
					value: 200000000,
				},
				effects: [
					{ stat: 'money', value: -200000000 },
					{ stat: 'humanity', value: 5 },
					{ stat: 'vision', value: 2 },
				],
				next: 'ch7_travel_europe',
			},
			{
				id: 'choice_travel_skip',
				text: 'Bận quá: Để dịp khác (Vision +1, Humanity -2)',
				textVi: 'Bận quá: Để dịp khác (Vision +1, Humanity -2)',
				textEn: 'Too busy: Maybe next time (Vision +1, Humanity -2)',
				effects: [
					{ stat: 'vision', value: 1 },
					{ stat: 'humanity', value: -2 },
				],
				next: 'ch7_travel_skip_consequence',
			},
			{
				id: 'choice_travel_asia',
				text: 'Thái Lan/Trung Quốc: Vừa túi tiền (-80M, Humanity +2)',
				textVi: 'Thái Lan/Trung Quốc: Vừa túi tiền (-80M, Humanity +2)',
				textEn: 'Thailand/China: Affordable (-80M, Humanity +2)',
				effects: [
					{ stat: 'money', value: -80000000 },
					{ stat: 'humanity', value: 2 },
				],
				next: 'ch7_travel_asia',
			},
			{
				id: 'choice_travel_domestic',
				text: 'Đà Nẵng: Người Việt dùng hàng Việt (-30M, Humanity +1)',
				textVi: 'Đà Nẵng: Người Việt dùng hàng Việt (-30M, Humanity +1)',
				textEn: 'Da Nang: Support local (-30M, Humanity +1)',
				effects: [
					{ stat: 'money', value: -30000000 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_travel_domestic',
			},
		],
	},
	ch7_travel_europe: {
		id: 'ch7_travel_europe',
		speaker: 'narrator',
		text: 'Chuyến đi trong mơ. Vợ con hạnh phúc vỡ òa khi thấy tuyết rơi ở Paris.',
		textVi:
			'Chuyến đi trong mơ. Vợ con hạnh phúc vỡ òa khi thấy tuyết rơi ở Paris.',
		textEn: 'Dream trip. Wife and kids overjoyed seeing snow in Paris.',
		next: 'ch7_gift_start',
	},
	ch7_travel_asia: {
		id: 'ch7_travel_asia',
		speaker: 'narrator',
		text: 'Đồ ăn ngon, cảnh đẹp. Cả nhà có những giây phút thư giãn tuyệt vời.',
		textVi:
			'Đồ ăn ngon, cảnh đẹp. Cả nhà có những giây phút thư giãn tuyệt vời.',
		textEn: 'Good food, nice views. Family had great relaxing moments.',
		next: 'ch7_gift_start',
	},
	ch7_travel_domestic: {
		id: 'ch7_travel_domestic',
		speaker: 'narrator',
		text: 'Biển xanh cát trắng. Đơn giản nhưng ấm cúng. "Đi đâu cũng được, miễn là đi cùng nhau".',
		textVi:
			'Biển xanh cát trắng. Đơn giản nhưng ấm cúng. "Đi đâu cũng được, miễn là đi cùng nhau".',
		textEn:
			'Blue sea white sand. Simple but cozy. "Anywhere is fine, as long as we are together".',
		next: 'ch7_gift_start',
	},
	ch7_travel_skip_consequence: {
		id: 'ch7_travel_skip_consequence',
		speaker: 'narrator',
		text: 'Vợ thở dài, lặng lẽ cất vali. Con hỏi: "Bố lại bận à?". Bạn cắm đầu vào laptop, nhưng trong lòng nặng trĩu.',
		textVi:
			'Vợ thở dài, lặng lẽ cất vali. Con hỏi: "Bố lại bận à?". Bạn cắm đầu vào laptop, nhưng trong lòng nặng trĩu.',
		textEn:
			'Wife sighed, quietly unpacked. Kid asked: "Dad busy again?". You buried face in laptop, heart heavy.',
		effects: [
			{ stat: 'humanity', value: -5 },
			{ stat: 'stress', value: 2 },
		],
		next: 'ch7_health_check',
	},

	ch7_healing_lesson: {
		id: 'ch7_healing_lesson',
		speaker: 'narrator',
		text: 'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textVi:
			'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textEn:
			'Family is the "Backend" that the career Frontend needs to shine. You understood that, whether you could execute it is another matter.',
		next: 'ch7_gift_start',
	},

	// NEW: Donate Event
	ch7_gift_start: {
		id: 'ch7_gift_start',
		speaker: 'player',
		text: '(Suy nghĩ) Sinh nhật vợ. Bạn muốn mua một món quà thật ý nghĩa. Một chiếc túi xách hàng hiệu giá 50 triệu.',
		textVi:
			'(Suy nghĩ) Sinh nhật vợ. Bạn muốn mua một món quà thật ý nghĩa. Một chiếc túi xách hàng hiệu giá 50 triệu.',
		textEn:
			"(Thinking) Wife's birthday. Want a meaningful gift. A luxury bag costing 50 million.",
		choices: [
			{
				id: 'choice_gift_buy',
				text: 'Mua ngay: Vợ xứng đáng với điều tốt nhất (-50M)',
				textVi: 'Mua ngay: Vợ xứng đáng với điều tốt nhất (-50M)',
				textEn: 'Buy now: Wife deserves the best (-50M)',
				effects: [
					{ stat: 'money', value: -50000000 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_gift_buy',
			},
			{
				id: 'choice_gift_skip',
				text: 'Tự tay làm quà: Tấm lòng quan trọng hơn (Humanity +1)',
				textVi: 'Tự tay làm quà: Tấm lòng quan trọng hơn (Humanity +1)',
				textEn: 'DIY gift: Thoughtfulness matters more (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch7_donate_start',
			},
		],
	},
	ch7_gift_buy: {
		id: 'ch7_gift_buy',
		speaker: 'narrator',
		text: 'Vợ bạn rất vui với món quà. Hạnh phúc gia đình được củng cố.',
		textVi: 'Vợ bạn rất vui với món quà. Hạnh phúc gia đình được củng cố.',
		textEn:
			'Your wife is very happy with the gift. Family happiness strengthened.',
		next: 'ch7_donate_start',
	},
	ch7_donate_start: {
		id: 'ch7_donate_start',
		speaker: 'player',
		text: '(Suy nghĩ) Thành công rồi. Bạn muốn chia sẻ với cộng đồng. Quỹ từ thiện trẻ em nghèo đang kêu gọi 100 triệu.',
		textVi:
			'(Suy nghĩ) Thành công rồi. Bạn muốn chia sẻ với cộng đồng. Quỹ từ thiện trẻ em nghèo đang kêu gọi 100 triệu.',
		textEn:
			'(Thinking) Success. Want to share. Charity for poor kids calling for 100 million.',
		choices: [
			{
				id: 'choice_donate_school',
				text: 'Xây trường học: (-100M, Vision +3, Humanity +5)',
				textVi: 'Xây trường học: (-100M, Vision +3, Humanity +5)',
				textEn: 'Build school: (-100M, Vision +3, Humanity +5)',
				effects: [
					{ stat: 'money', value: -100000000 },
					{ stat: 'vision', value: 3 },
					{ stat: 'humanity', value: 5 },
				],
				flags: [{ key: 'built_school', value: true }],
				next: 'ch7_donate_give',
			},
			{
				id: 'choice_donate_lab',
				text: 'Tặng phòng máy tính: (-50M, Vision +1)',
				textVi: 'Tặng phòng máy tính: (-50M, Vision +1)',
				textEn: 'Donate PC Lab: (-50M, Vision +1)',
				effects: [
					{ stat: 'money', value: -50000000 },
					{ stat: 'vision', value: 1 },
				],
				next: 'ch7_donate_give',
			},
			{
				id: 'choice_donate_books',
				text: 'Tặng sách vở: (-10M, Humanity +1)',
				textVi: 'Tặng sách vở: (-10M, Humanity +1)',
				textEn: 'Donate books: (-10M, Humanity +1)',
				effects: [
					{ stat: 'money', value: -10000000 },
					{ stat: 'humanity', value: 1 },
				],
				next: 'ch7_donate_give',
			},
			{
				id: 'choice_donate_skip',
				text: 'Để sau: Mình chưa giàu hẳn (Money +0)',
				textVi: 'Để sau: Mình chưa giàu hẳn (Money +0)',
				textEn: 'Later: Not rich enough (Money +0)',
				next: 'ch7_dividends_start',
			},
		],
	},
	ch7_donate_give: {
		id: 'ch7_donate_give',
		speaker: 'narrator',
		text: 'Bạn cảm thấy ấm lòng khi giúp đỡ được những mảnh đời khó khăn.',
		textVi: 'Bạn cảm thấy ấm lòng khi giúp đỡ được những mảnh đời khó khăn.',
		textEn: 'You feel warm helping difficult lives.',
		next: 'ch7_dividends_start',
	},

	// NEW: Dividends & Real Estate
	ch7_dividends_start: {
		id: 'ch7_dividends_start',
		speaker: 'narrator',
		text: 'Cuối năm, khoản đầu tư vào các công ty con mang lại cổ tức. 200 triệu chảy vào tài khoản.',
		textVi:
			'Cuối năm, khoản đầu tư vào các công ty con mang lại cổ tức. 200 triệu chảy vào tài khoản.',
		textEn:
			'Year end, investments in subsidiaries paid dividends. 200 million flowed into account.',
		effects: [{ stat: 'money', value: 200000000 }],
		next: 'ch7_real_estate_start',
	},
	ch7_real_estate_start: {
		id: 'ch7_real_estate_start',
		speaker: 'narrator',
		text: 'Bạn cũng quyết định bán căn chung cư cũ mua từ thời mới cưới. Giá đất tăng vọt. Bạn lãi 2 tỷ.',
		textVi:
			'Bạn cũng quyết định bán căn chung cư cũ mua từ thời mới cưới. Giá đất tăng vọt. Bạn lãi 2 tỷ.',
		textEn:
			'You also decided to sell the old apartment bought when newlywed. Land price skyrocketed. You profited 2 billion.',
		effects: [{ stat: 'money', value: 2000000000 }],
		next: 'ch8_ai_1',
	},
};
