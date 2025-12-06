// ==========================================
// CHAPTER 7: SCALING (MỞ RỘNG QUY MÔ)
// Timeline: 32-38 tuổi
// Theme: Cân bằng, Gia đình và Di sản
// ==========================================

import {
	Chapter7DialogueID,
	Chapter7SceneID,
	Chapter7TodoID,
	Chapter8DialogueID,
	ConditionType,
	Dialogue_END,
	FlagID,
	Operator,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

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
			id: Chapter7SceneID.CH7_DIVIDE,
			name: 'Chia để trị',
			nameVi: '32-36 tuổi: Chia để trị & Chiến lược kép',
			nameEn: 'Age 32-36: Divide & Conquer',
			background: '/assets/sprites/backgrounds/office_stable.png',
			music: '/assets/audio/music/chapters/ch7_balance.mp3',
			dialogueStart: Chapter7DialogueID.CH7_INTRO, // Changed from ch7_divide_1
		},
		{
			id: Chapter7SceneID.CH7_HEALING,
			name: 'Vá lỗi tâm hồn',
			nameVi: '37-38 tuổi: Bản vá lỗi cho tâm hồn',
			nameEn: 'Age 37-38: Humanity Patch',
			background: '/assets/sprites/backgrounds/home_family.png',
			music: '/assets/audio/music/chapters/ch7_balance.mp3',
			dialogueStart: Chapter7DialogueID.CH7_HEALING_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter7TodoID.CH7_TODO_READ_STORY,
				text: 'Đọc truyện cổ tích cho con ngủ',
				textVi: 'Đọc truyện cổ tích cho con ngủ',
				textEn: 'Read bedtime stories',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				reward: { stress: -3 },
			},
			{
				id: 'ch7_todo_parent_meeting',
				text: 'Đi họp phụ huynh',
				textVi: 'Đi họp phụ huynh',
				textEn: 'Attend parent meeting',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
			},

			{
				id: 'ch7_todo_review_finance',
				text: 'Duyệt báo cáo tài chính quý',
				textVi: 'Duyệt báo cáo tài chính quý',
				textEn: 'Review quarterly finance',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch7_todo_approve_hiring',
				text: 'Phê duyệt kế hoạch tuyển dụng mới',
				textVi: 'Phê duyệt kế hoạch tuyển dụng mới',
				textEn: 'Approve hiring plan',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch7_todo_handle_crisis',
				text: 'Xử lý khủng hoảng truyền thông',
				textVi: 'Xử lý khủng hoảng truyền thông',
				textEn: 'Handle media crisis',
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { stress: 5 }, // Increased Stress cost
			},
			{
				id: 'ch7_todo_gym',
				text: 'Đi tập Gym',
				textVi: 'Đi tập Gym',
				textEn: 'Go to Gym',
				reward: { health: 3 },
			},

			{
				id: 'ch7_todo_mentor_founder',
				text: 'Mentor cho các Founder trẻ',
				textVi: 'Mentor cho các Founder trẻ',
				textEn: 'Mentor young Founders',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch7_todo_reject_party',
				text: 'Từ chối tiệc rượu để về nhà',
				textVi: 'Từ chối tiệc rượu để về nhà',
				textEn: 'Reject party to go home',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				reward: { health: 3 },
			},

			{
				id: 'ch7_todo_argue_wife',
				text: 'Tranh luận với vợ về cân bằng cuộc sống',
				textVi: 'Tranh luận với vợ về cân bằng cuộc sống',
				textEn: 'Argue with wife about work-life balance',
				cost: { stress: 3, humanity: 2 },
			},
			{
				id: 'ch7_todo_watch_kid',
				text: 'Xem con chập chững biết đi',
				textVi: 'Xem con chập chững biết đi',
				textEn: 'Watch kid walk',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch7_todo_delegate',
				text: 'Ủy quyền công việc cho cấp dưới',
				textVi: 'Ủy quyền công việc cho cấp dưới',
				textEn: 'Delegate work',
				effects: [{ stat: StatID.VISION, value: 1 }],
				reward: { stress: -3 },
			},
			{
				id: 'ch7_todo_check_bp',
				text: 'Kiểm tra huyết áp',
				textVi: 'Kiểm tra huyết áp',
				textEn: 'Check blood pressure',
				cost: { health: 2 },
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch7_todo_secret_date',
				text: 'Hẹn hò bí mật',
				textVi: 'Hẹn hò bí mật',
				textEn: 'Secret date',
				effects: [
					{ stat: StatID.STRESS, value: -4 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				cost: { money: 50000000 }, // Increased Money cost
			},
			{
				id: 'ch7_todo_crypto_check',
				text: 'Check giá Crypto mỗi 5 phút',
				textVi: 'Check giá Crypto mỗi 5 phút',
				textEn: 'Check Crypto price every 5 mins',
				effects: [{ stat: StatID.MONEY, value: 1000000 }], // Small gain
				cost: { stress: 5, vision: -2 }, // Increased Stress cost
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch7_dream_kid_money',
						text: 'Đưa tiền cho con',
						textVi: 'Đưa tiền cho con',
						textEn: 'Give money to child',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: -2 }],
					},
					{
						id: 'ch7_dream_kid_wife',
						text: 'Nhờ vợ dỗ',
						textVi: 'Nhờ vợ dỗ',
						textEn: 'Ask wife to comfort',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }], // Avoidance
					},
					{
						id: 'ch7_dream_kid_clown',
						text: 'Biến thành chú hề',
						textVi: 'Biến thành chú hề',
						textEn: 'Turn into a clown',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch7_dream_balance_drop_child',
						text: 'Vứt con giữ tiền',
						textVi: 'Vứt con giữ tiền',
						textEn: 'Drop child, keep money',
						next: '',
						effects: [{ stat: StatID.MONEY, value: 5 }],
					},
					{
						id: 'ch7_dream_balance_keep_both',
						text: 'Cố giữ cả hai',
						textVi: 'Cố giữ cả hai',
						textEn: 'Try to keep both',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 4 }],
					},
					{
						id: 'ch7_dream_balance_jump',
						text: 'Nhảy xuống lưới an toàn',
						textVi: 'Nhảy xuống lưới an toàn',
						textEn: 'Jump to safety net',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
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
						effects: [{ stat: StatID.HUMANITY, value: 2 }], // Sacrifice
					},
					{
						id: 'ch7_dream_car_continue',
						text: 'Cứ lái tiếp xem sao',
						textVi: 'Cứ lái tiếp xem sao',
						textEn: 'Keep driving',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }], // Risk
					},
					{
						id: 'ch7_dream_car_jump',
						text: 'Nhảy ra khỏi xe',
						textVi: 'Nhảy ra khỏi xe',
						textEn: 'Jump out',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 2 }], // Survival
					},
					{
						id: 'ch7_dream_car_fly',
						text: 'Biến chiếc xe thành máy bay',
						textVi: 'Biến chiếc xe thành máy bay',
						textEn: 'Turn car into plane',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
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
						effects: [{ stat: StatID.STEELMIND, value: -1 }], // Denial
					},
					{
						id: 'ch7_dream_gray_smile',
						text: 'Mỉm cười chấp nhận',
						textVi: 'Mỉm cười chấp nhận',
						textEn: 'Smile and accept',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch7_dream_gray_break',
						text: 'Đập vỡ gương',
						textVi: 'Đập vỡ gương',
						textEn: 'Break mirror',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch7_dream_gray_elixir',
						text: 'Đi tìm thuốc trường sinh',
						textVi: 'Đi tìm thuốc trường sinh',
						textEn: 'Find elixir of life',
						next: '',
						effects: [{ stat: StatID.VISION, value: -1 }], // Delusion
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
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch7_dream_dinner_invite',
						text: 'Mời người lạ vào ăn',
						textVi: 'Mời người lạ vào ăn',
						textEn: 'Invite strangers',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch7_dream_dinner_flip',
						text: 'Hất đổ bàn ăn',
						textVi: 'Hất đổ bàn ăn',
						textEn: 'Flip the table',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch7_dream_dinner_call',
						text: 'Gọi điện cho vợ con',
						textVi: 'Gọi điện cho vợ con',
						textEn: 'Call family',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch7_reflect_sleep_1',
			text: 'Vợ con đang ngủ... cần về nhà sớm hơn.',
			textVi: 'Vợ con đang ngủ... cần về nhà sớm hơn.',
			textEn: 'Wife and child sleeping... need to come home earlier.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch7_reflect_sleep_1_family',
					text: 'Gia đình quan trọng',
					textVi: 'Gia đình quan trọng',
					textEn: 'Family is important',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 2 }],
				},
				{
					id: 'ch7_reflect_sleep_1_sleep',
					text: 'Đi ngủ với gia đình',
					textVi: 'Đi ngủ với gia đình',
					textEn: 'Sleep with family',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
			],
		},
		{
			id: 'ch7_reflect_success_1',
			text: 'Thành công trong sự nghiệp nhưng bỏ lỡ gia đình... đáng giá không?',
			textVi:
				'Thành công trong sự nghiệp nhưng bỏ lỡ gia đình... đáng giá không?',
			textEn: 'Success in career but missing family... is it worth it?',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch7_reflect_success_1_balance',
					text: 'Cần cân bằng',
					textVi: 'Cần cân bằng',
					textEn: 'Need balance',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
				{
					id: 'ch7_reflect_success_1_family',
					text: 'Gia đình trên hết',
					textVi: 'Gia đình trên hết',
					textEn: 'Family first',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
			],
		},
		{
			id: 'ch7_reflect_sleep_2',
			text: 'Con hỏi: "Ba về muộn thế?"... lòng như dao cắt.',
			textVi: 'Con hỏi: "Ba về muộn thế?"... lòng như dao cắt.',
			textEn: 'Child asks: "Why so late, Dad?"... heart feels cut.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch7_reflect_sleep_2_guilty',
					text: 'Cảm thấy có lỗi',
					textVi: 'Cảm thấy có lỗi',
					textEn: 'Feel guilty',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 2 }],
				},
				{
					id: 'ch7_reflect_sleep_2_change',
					text: 'Phải thay đổi',
					textVi: 'Phải thay đổi',
					textEn: 'Must change',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
			],
		},
		{
			id: 'ch7_reflect_success_2',
			text: 'Xây dựng di sản cho con... nhưng có mặt bên con cũng quan trọng.',
			textVi:
				'Xây dựng di sản cho con... nhưng có mặt bên con cũng quan trọng.',
			textEn: 'Building legacy for child... but being there is also important.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch7_reflect_success_2_both',
					text: 'Cả hai đều quan trọng',
					textVi: 'Cả hai đều quan trọng',
					textEn: 'Both are important',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
				{
					id: 'ch7_reflect_success_2_present',
					text: 'Hiện diện quan trọng hơn',
					textVi: 'Hiện diện quan trọng hơn',
					textEn: 'Presence more important',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
			],
		},
		{
			id: 'ch7_reflect_sleep_3',
			text: 'Đêm khuya làm việc... nhưng nghe thấy tiếng con khóc.',
			textVi: 'Đêm khuya làm việc... nhưng nghe thấy tiếng con khóc.',
			textEn: 'Working late... but hear child crying.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch7_reflect_sleep_3_stop',
					text: 'Dừng làm, về với con',
					textVi: 'Dừng làm, về với con',
					textEn: 'Stop work, go to child',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
				{
					id: 'ch7_reflect_sleep_3_rest',
					text: 'Cả nhà cần nghỉ ngơi',
					textVi: 'Cả nhà cần nghỉ ngơi',
					textEn: 'Whole family needs rest',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
			],
		},
	],
};

export const chapter7Dialogues: Record<Chapter7DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter7DialogueID.CH7_INTRO]: {
		speaker: 'player',
		text: '(Nhìn ra cửa sổ tầng 20) Căn phòng riêng, kính cách âm... Nhìn xuống nhân viên đi lại tấp nập. Mình đã đi được bao xa rồi?',
		textVi:
			'(Nhìn ra cửa sổ tầng 20) Căn phòng riêng, kính cách âm... Nhìn xuống nhân viên đi lại tấp nập. Mình đã đi được bao xa rồi?',
		textEn:
			'(Looking out 20th floor window) Private room, soundproof glass... Staff bustling below. How far have I come?',
		next: Chapter7DialogueID.CH7_DIVIDE_1,
	},

	// 7.1 Chia để trị (Microservices)
	[Chapter7DialogueID.CH7_DIVIDE_1]: {
		speaker: 'player',
		text: '(Suy nghĩ) 32 tuổi. Sau cú thất bại Product, mình không bỏ cuộc. Đập đi xây lại. Đơn giản hơn, thực dụng hơn.',
		textVi:
			'(Suy nghĩ) 32 tuổi. Sau cú thất bại Product, mình không bỏ cuộc. Đập đi xây lại. Đơn giản hơn, thực dụng hơn.',
		textEn:
			'(Thinking) 32 years old. After Product failure, I persisted. Tear down, rebuild. Simpler, more pragmatic.',
		next: Chapter7DialogueID.CH7_SCALE_DB_SHARDING, // Start Quiz Chunk 1
	},
	[Chapter7DialogueID.CH7_DIVIDE_STRATEGY]: {
		speaker: 'player',
		text: '(Nói với team) Anh em ơi, kiến trúc Microservices! Tách công ty làm 2 service. Service A là Outsource - Cash Cow nuôi sống hệ thống. Service B là Product - Star của tương lai!',
		textVi:
			'(Nói với team) Anh em ơi, kiến trúc Microservices! Tách công ty làm 2 service. Service A là Outsource - Cash Cow nuôi sống hệ thống. Service B là Product - Star của tương lai!',
		textEn:
			'(Telling team) Bros, Microservices architecture! Split company into 2 services. Service A is Outsource - Cash Cow. Service B is Product - our Star for the future!',
		next: Chapter7DialogueID.CH7_DIVIDE_FUNDING,
	},
	[Chapter7DialogueID.CH7_DIVIDE_FUNDING]: {
		speaker: 'npc',
		text: 'Nhà đầu tư (Series A): "Chúng tôi đánh giá công ty các bạn 50 tỷ. Nhưng chúng tôi cần 30% cổ phần và 1 ghế Board."',
		textVi:
			'Nhà đầu tư (Series A): "Chúng tôi đánh giá công ty các bạn 50 tỷ. Nhưng chúng tôi cần 30% cổ phần và 1 ghế Board."',
		textEn:
			'Investor (Series A): "We value your company at 50 billion. But we need 30% equity and 1 Board seat."',
		next: Chapter7DialogueID.CH7_INVEST_START,
	},

	// NEW: Invest Stock Event
	[Chapter7DialogueID.CH7_INVEST_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Thị trường chứng khoán đang sôi động. Bạn có 500 triệu tiền nhàn rỗi.',
		textVi:
			'(Suy nghĩ) Thị trường chứng khoán đang sôi động. Bạn có 500 triệu tiền nhàn rỗi.',
		textEn:
			'(Thinking) Stock market is booming. You have 500 million idle cash.',
		choices: [
			{
				id: 'choice_invest_stock',
				text: 'Đầu tư: Liều ăn nhiều (+500M hoặc -500M), chắc lại lùa gà đây mà...',
				textVi:
					'Đầu tư: Liều ăn nhiều (+500M hoặc -500M), chắc lại lùa gà đây mà...',
				textEn:
					'Invest: High risk high return (+500M or -500M), sure thing or sure loss',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter7DialogueID.CH7_INVEST_DO,
			},
			{
				id: 'choice_invest_skip',
				text: 'Giữ tiền mặt: An toàn là trên hết',
				textVi: 'Giữ tiền mặt: An toàn là trên hết',
				textEn: 'Keep cash: Safety first',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter7DialogueID.CH7_ADVISORY,
			},
		],
	},
	[Chapter7DialogueID.CH7_INVEST_DO]: {
		speaker: 'narrator',
		text: 'Bạn chốt lời thành công. Một khoản thu nhập thụ động nhỏ.',
		textVi: 'Bạn chốt lời thành công. Một khoản thu nhập thụ động nhỏ.',
		textEn:
			'You poured money into stocks. The market is volatile, but you believe in your vision.',
		effects: [{ stat: StatID.MONEY, value: 500000000 }],
		next: Chapter7DialogueID.CH7_ADVISORY, // Redirect to Advisory
	},

	// NEW: Advisory Gig (Chapter 7)
	[Chapter7DialogueID.CH7_ADVISORY]: {
		speaker: 'narrator',
		text: 'Một quỹ đầu tư mời bạn thẩm định công nghệ cho một deal triệu đô. Phí: 5 triệu.',
		textVi:
			'Một quỹ đầu tư mời bạn thẩm định công nghệ cho một deal triệu đô. Phí: 5 triệu.',
		textEn:
			'An investment fund invites you to audit tech for a million-dollar deal. Fee: 5 million.',
		next: Chapter7DialogueID.CH7_ADVISORY_QUIZ,
	},
	[Chapter7DialogueID.CH7_ADVISORY_QUIZ]: {
		speaker: 'player',
		text: 'Startup này claim họ dùng AI để tự động code 100%. Bạn hỏi câu gì để verify?',
		textVi:
			'Startup này claim họ dùng AI để tự động code 100%. Bạn hỏi câu gì để verify?',
		textEn:
			'This startup claims they use AI to code 100%. What do you ask to verify?',
		choices: [
			{
				id: 'choice_advisory_quiz_7_1',
				text: 'Cho xem source code model',
				textVi: 'Cho xem source code model',
				textEn: 'Show model source code',
				next: Chapter7DialogueID.CH7_ADVISORY_DONE,
				effects: [{ stat: StatID.VISION, value: -1 }], // Naive
			},
			{
				id: 'choice_advisory_quiz_7_2',
				text: 'Hỏi về tập dữ liệu training & edge cases',
				textVi: 'Hỏi về tập dữ liệu training & edge cases',
				textEn: 'Ask about training data & edge cases',
				next: Chapter7DialogueID.CH7_ADVISORY_DONE,
				effects: [
					{ stat: StatID.MONEY, value: 10000000 },
					{ stat: StatID.VISION, value: 2 },
				], // Professional + bonus
			},
			{
				id: 'choice_advisory_quiz_7_3',
				text: 'Tin luôn, AI giờ xịn mà',
				textVi: 'Tin luôn, AI giờ xịn mà',
				textEn: 'Believe them, AI is good now',
				next: Chapter7DialogueID.CH7_ADVISORY_DONE,
				effects: [{ stat: StatID.VISION, value: -3 }], // Gullible
			},
		],
	},
	[Chapter7DialogueID.CH7_ADVISORY_DONE]: {
		speaker: 'narrator',
		text: 'Báo cáo của bạn giúp quỹ tránh được một cú lừa. 5 triệu tiền phí và uy tín tăng cao.',
		textVi:
			'Báo cáo của bạn giúp quỹ tránh được một cú lừa. 5 triệu tiền phí và uy tín tăng cao.',
		textEn:
			'Your report saved the fund from a scam. 5 million fee and reputation increased.',
		next: Chapter7DialogueID.CH7_DIVIDE_ECONOMICS,
	},
	[Chapter7DialogueID.CH7_DIVIDE_ECONOMICS]: {
		speaker: 'narrator',
		text: 'Công ty scale từ 10 lên 50 người. Quy trình vỡ trận. Technical Debt (Nợ kỹ thuật) chồng chất. Mỗi ngày đi làm là một cuộc chiến dập lửa.',
		textVi:
			'Công ty scale từ 10 lên 50 người. Quy trình vỡ trận. Technical Debt (Nợ kỹ thuật) chồng chất. Mỗi ngày đi làm là một cuộc chiến dập lửa.',
		textEn:
			'Company scaled from 10 to 50. Process broken. Technical Debt piled up. Every day was a firefighting battle.',
		next: Chapter7DialogueID.CH7_CRYPTO_START, // Redirect to Crypto
	},

	// NEW: Crypto Gambling
	[Chapter7DialogueID.CH7_CRYPTO_START]: {
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
				effects: [{ stat: StatID.STRESS, value: 7 }],
				next: Chapter7DialogueID.CH7_CRYPTO_RESULT,
			},
			{
				id: 'choice_crypto_ignore',
				text: 'Bỏ qua: Tập trung vào Product',
				textVi: 'Bỏ qua: Tập trung vào Product',
				textEn: 'Ignore: Focus on Product',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter7DialogueID.CH7_HEALTH_CHECK,
			},
		],
	},
	[Chapter7DialogueID.CH7_CRYPTO_RESULT]: {
		speaker: 'narrator',
		text: 'Thị trường sập. Bạn mất một nửa số tiền đầu tư. Bài học đắt giá về lòng tham.',
		textVi:
			'Thị trường sập. Bạn mất một nửa số tiền đầu tư. Bài học đắt giá về lòng tham.',
		textEn:
			'Market crashed. You lost half investment. Expensive lesson on greed.',
		effects: [
			{ stat: StatID.MONEY, value: -250000000 }, // Assume 500M base
			{ stat: StatID.STEELMIND, value: -2 },
		],
		next: Chapter7DialogueID.CH7_HEALTH_CHECK,
	},

	// NEW: Health Collapse Check
	[Chapter7DialogueID.CH7_HEALTH_CHECK]: {
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
					type: ConditionType.STAT,
					key: StatID.HEALTH,
					operator: Operator.LT,
					value: 40,
				},
				next: Chapter7DialogueID.CH7_HOSPITAL_COLLAPSE,
			},
			{
				id: 'choice_health_ok',
				text: 'Vẫn ổn: Tiếp tục làm việc',
				textVi: 'Vẫn ổn: Tiếp tục làm việc',
				textEn: 'Still fine: Keep working',
				next: Chapter7DialogueID.CH7_DIVIDE_MINDSET,
			},
		],
	},
	[Chapter7DialogueID.CH7_HOSPITAL_COLLAPSE]: {
		speaker: 'narrator',
		text: 'Bạn ngất xỉu ngay trong cuộc họp. Bác sĩ cảnh báo nguy cơ đột quỵ. Bắt buộc nghỉ ngơi 1 tháng.',
		textVi:
			'Bạn ngất xỉu ngay trong cuộc họp. Bác sĩ cảnh báo nguy cơ đột quỵ. Bắt buộc nghỉ ngơi 1 tháng.',
		textEn:
			'You fainted in meeting. Doctor warned of stroke risk. Forced 1 month rest.',
		effects: [
			{ stat: StatID.VISION, value: -3 },
			{ stat: StatID.MONEY, value: -100000000 }, // Medical bills
			{ stat: StatID.HEALTH, value: 7 }, // Recovery
		],
		next: Chapter7DialogueID.CH7_DIVIDE_MINDSET,
	},
	[Chapter7DialogueID.CH7_DIVIDE_MINDSET]: {
		speaker: 'narrator',
		text: 'Bạn giữ cái đầu lạnh (Steel Mind). Nhớ bài học "Unit Economics" năm lớp 7 khi đứng quầy thu ngân cho bố. "Doanh thu là phù du, Lợi nhuận là chân lý."',
		textVi:
			'Bạn giữ cái đầu lạnh (Steel Mind). Nhớ bài học "Unit Economics" năm lớp 7 khi đứng quầy thu ngân cho bố. "Doanh thu là phù du, Lợi nhuận là chân lý."',
		textEn:
			'You kept Steel Mind. Remembered Grade 7 "Unit Economics" lesson at Dad\'s cashier. "Revenue is vanity, Profit is sanity."',
		effects: [{ stat: StatID.STEELMIND, value: 2 }],
		choices: [
			{
				id: 'choice_careful_funding',
				text: 'Chấp nhận deal hợp lý, giữ quyền kiểm soát',
				textVi: 'Chấp nhận deal hợp lý, giữ quyền kiểm soát',
				textEn: 'Accept reasonable deal, keep control',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter7DialogueID.CH7_FORK_CONFLICT,
			},
			{
				id: 'choice_aggressive_funding',
				text: 'Nhận định giá cao, chấp nhận pha loãng',
				textVi: 'Nhận định giá cao, chấp nhận pha loãng',
				textEn: 'Take high valuation, accept dilution',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter7DialogueID.CH7_FORK_CONFLICT,
			},
		],
	},

	// 7.3 Chia rẽ (Fork)
	[Chapter7DialogueID.CH7_FORK_CONFLICT]: {
		speaker: 'npc',
		text: 'Anh N (khoanh tay): "Em ơi, anh Q và anh D muốn ổn định. Outsource nuôi cả nhà. Em cứ đòi đốt tiền làm Product là sao?"',
		textVi:
			'Anh N (khoanh tay): "Em ơi, anh Q và anh D muốn ổn định. Outsource nuôi cả nhà. Em cứ đòi đốt tiền làm Product là sao?"',
		textEn:
			'Brother N (arms crossed): "Bro, Q and D want stability. Outsource feeds us all. Why do you insist on burning money for Product?"',
		next: Chapter7DialogueID.CH7_SCALE_CDN, // Start Quiz Chunk 2
	},

	// 7.4 Merge Conflict (Sự ra đi)
	[Chapter7DialogueID.CH7_MERGE_CONFLICT_Q]: {
		speaker: 'npc',
		text: 'Anh Q - người anh cả - quyết định rời đi. "Anh già rồi, không theo kịp giấc mơ của chú nữa. Anh cần sự an toàn cho vợ con."',
		textVi:
			'Anh Q - người anh cả - quyết định rời đi. "Anh già rồi, không theo kịp giấc mơ của chú nữa. Anh cần sự an toàn cho vợ con."',
		textEn:
			'Brother Q - the eldest - decided to leave. "I\'m old, can\'t keep up with your dream. I need safety for my family."',
		next: Chapter7DialogueID.CH7_Q_LEAVE_REACTION,
	},
	[Chapter7DialogueID.CH7_Q_LEAVE_REACTION]: {
		speaker: 'player',
		text: 'Bạn ký quyết định mua lại cổ phần của anh Q. Bữa tiệc chia tay buồn thấu ruột. Codebase mất đi một Core Contributor quan trọng.',
		textVi:
			'Bạn ký quyết định mua lại cổ phần của anh Q. Bữa tiệc chia tay buồn thấu ruột. Codebase mất đi một Core Contributor quan trọng.',
		textEn:
			"You signed decision to buy back Q's shares. Farewell party was heartbreaking. Codebase lost a key Core Contributor.",
		effects: [{ stat: StatID.HUMANITY, value: -3 }],
		next: Chapter7DialogueID.CH7_AFFAIR_START, // Redirect to Affair
	},

	// NEW: The Affair (Temptation)
	[Chapter7DialogueID.CH7_AFFAIR_START]: {
		speaker: 'narrator',
		text: 'Trong nỗi buồn chia tay Co-founder, một thư ký trẻ đẹp tiếp cận bạn, tỏ ý quan tâm đặc biệt.',
		textVi:
			'Trong nỗi buồn chia tay Co-founder, một thư ký trẻ đẹp tiếp cận bạn, tỏ ý quan tâm đặc biệt.',
		textEn:
			'In sadness of Co-founder parting, a young beautiful secretary approaches, showing special interest.',
		choices: [
			{
				id: 'choice_affair_flirt',
				text: 'Đáp lại: Tìm sự an ủi (Stress -5)',
				textVi: 'Đáp lại: Tìm sự an ủi (Stress -5)',
				textEn: 'Respond: Seek comfort (Stress -5)',
				effects: [
					{ stat: StatID.STRESS, value: -4 },
					{ stat: StatID.HUMANITY, value: -7 },
				],
				next: Chapter7DialogueID.CH7_HEALING_1,
			},
			{
				id: 'choice_affair_reject',
				text: 'Từ chối: Giữ vững bản lĩnh',
				textVi: 'Từ chối: Giữ vững bản lĩnh',
				textEn: 'Reject: Stay strong',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter7DialogueID.CH7_HEALING_1,
			},
		],
	},

	// 7.2 Vá lỗi tâm hồn
	[Chapter7DialogueID.CH7_HEALING_1]: {
		speaker: 'player',
		text: '(Suy nghĩ) Sau những biến cố, mình nhận ra gia đình mới là bến đỗ bình yên nhất. Phải "vá lỗi" những mối quan hệ đã rạn nứt...',
		textVi:
			'(Suy nghĩ) Sau những biến cố, mình nhận ra gia đình mới là bến đỗ bình yên nhất. Phải "vá lỗi" những mối quan hệ đã rạn nứt...',
		textEn:
			'(Thinking) After the incidents, I realized family is the safest harbor. Need to "patch" the broken relationships...',
		next: Chapter7DialogueID.CH7_HEALING_MARRIAGE,
	},

	[Chapter7DialogueID.CH7_HEALING_MARRIAGE]: {
		speaker: 'npc',
		text: '"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textVi:
			'"Em không quan tâm anh code, em chỉ quan tâm anh có về ăn cơm đúng giờ không thôi."',
		textEn:
			'"I don\'t care if it\'s what you code, I only care if you come home for dinner on time."',
		next: Chapter7DialogueID.CH7_DINNER_START,
	},

	// NEW: Dinner Home Event
	[Chapter7DialogueID.CH7_DINNER_START]: {
		speaker: 'player',
		text: 'Vợ nhắn tin: "Hôm nay anh về sớm ăn cơm nhé?". Nhưng công việc ở công ty vẫn còn bộn bề.',
		textVi:
			'Vợ nhắn tin: "Hôm nay anh về sớm ăn cơm nhé?". Nhưng công việc ở công ty vẫn còn bộn bề.',
		textEn:
			'Wife texted: "Come home early for dinner?". But work is piling up.',
		choices: [
			{
				id: 'choice_dinner_go',
				text: 'Về sớm: Bỏ việc để về (-20M)',
				textVi: 'Về sớm: Bỏ việc để về (-20M)',
				textEn: 'Go home: Leave work (-20M)',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.HUMANITY, value: 5 },
				],
				next: Chapter7DialogueID.CH7_DINNER_GO,
			},
			{
				id: 'choice_dinner_stay',
				text: 'Ở lại làm: Deadline dí rồi',
				textVi: 'Ở lại làm: Deadline dí rồi',
				textEn: 'Stay: Deadline is close',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter7DialogueID.CH7_DINNER_STAY,
			},
		],
	},
	[Chapter7DialogueID.CH7_DINNER_GO]: {
		speaker: 'narrator',
		text: 'Bữa cơm gia đình ấm cúng. Bạn cảm thấy bình yên sau những giờ code căng thẳng.',
		textVi:
			'Bữa cơm gia đình ấm cúng. Bạn cảm thấy bình yên sau những giờ code căng thẳng.',
		textEn: 'Cozy family dinner. You feel at peace after stressful coding.',
		next: Chapter7DialogueID.CH7_MARRIAGE_REPLY,
	},
	[Chapter7DialogueID.CH7_DINNER_STAY]: {
		speaker: 'narrator',
		text: 'Bạn ở lại công ty ăn mì gói. Vợ nhắn tin: "Anh cứ làm việc đi, mẹ con em ngủ trước". Bạn thấy sống mũi cay cay.',
		textVi:
			'Bạn ở lại công ty ăn mì gói. Vợ nhắn tin: "Anh cứ làm việc đi, mẹ con em ngủ trước". Bạn thấy sống mũi cay cay.',
		textEn:
			'You stayed at office eating instant noodles. Wife texted: "You keep working, we sleep first". You felt a sting in your nose.',
		next: Chapter7DialogueID.CH7_MARRIAGE_REPLY,
	},
	[Chapter7DialogueID.CH7_MARRIAGE_REPLY]: {
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
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter7DialogueID.CH7_HEALING_BIRTH,
			},
			{
				id: 'choice_joke_dinner',
				text: 'Thế anh code ở nhà nhé?',
				textVi: 'Thế anh code ở nhà nhé?',
				textEn: 'So can I code at home?',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter7DialogueID.CH7_HEALING_BIRTH,
			},
		],
	},
	[Chapter7DialogueID.CH7_HEALING_BIRTH]: {
		speaker: 'npc',
		text: 'Bác sĩ (mỉm cười): "Chúc mừng! Mẹ tròn con vuông. Bé trai 3.2kg khỏe mạnh!"',
		textVi:
			'Bác sĩ (mỉm cười): "Chúc mừng! Mẹ tròn con vuông. Bé trai 3.2kg khỏe mạnh!"',
		textEn:
			'Doctor (smiling): "Congratulations! Mother and baby are healthy. A 3.2kg baby boy!"',
		next: Chapter7DialogueID.CH7_BIRTH_CRY,
	},
	[Chapter7DialogueID.CH7_BIRTH_CRY]: {
		speaker: 'player',
		text: '(Khóc) "Chào con... Bố đây..."',
		textVi: '(Khóc) "Chào con... Bố đây..."',
		textEn: '(Crying) "Hello son... Daddy is here..."',
		effects: [{ stat: StatID.HUMANITY, value: 3 }],
		next: Chapter7DialogueID.CH7_HEALING_TRANSFORM,
	},
	[Chapter7DialogueID.CH7_HEALING_TRANSFORM]: {
		speaker: 'meQ',
		text: 'Vợ (khóc): "Em không thể chịu nổi nữa rồi... Công việc, con cái... Em mệt quá..."',
		textVi:
			'Vợ (khóc): "Em không thể chịu nổi nữa rồi... Công việc, con cái... Em mệt quá..."',
		textEn:
			'Wife (crying): "I can\'t take it anymore... Work, the baby... I\'m so tired..."',
		next: Chapter7DialogueID.CH7_SCALE_MONITORING, // Start Quiz Chunk 3
	},
	[Chapter7DialogueID.CH7_HEALING_CONFLICT]: {
		speaker: 'player',
		text: 'Điện thoại réo liên hồi. Vợ khóc bên nôi con. Bạn phải chọn.',
		textVi: 'Điện thoại réo liên hồi. Vợ khóc bên nôi con. Bạn phải chọn.',
		textEn: 'Phone ringing non-stop. Wife crying by the crib. You must choose.',
		choices: [
			{
				id: 'choice_family_first',
				text: 'Vứt điện thoại, ôm vợ con',
				textVi: 'Vứt điện thoại, ôm vợ con',
				textEn: 'Throw phone, hug wife and child',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter7DialogueID.CH7_BUY_CAR_START,
			},
			{
				id: 'choice_work_first',
				text: 'Ra ban công fix lỗi Server',
				textVi: 'Ra ban công fix lỗi Server',
				textEn: 'Go to balcony to fix Server',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter7DialogueID.CH7_BUY_CAR_START,
			},
		],
	},

	// NEW: Buy Volvo Event
	[Chapter7DialogueID.CH7_BUY_CAR_START]: {
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
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 3000000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -3000000000 },
					{ stat: StatID.HUMANITY, value: 2 },
				],
				next: Chapter7DialogueID.CH7_BUY_CAR_BUY,
			},
			{
				id: 'choice_buy_car_no',
				text: 'Đi Grab: Tiết kiệm chi phí',
				textVi: 'Đi Grab: Tiết kiệm chi phí',
				textEn: 'Use Grab: Save cost',
				next: Chapter7DialogueID.CH7_HEALING_BALANCE,
			},
		],
	},
	[Chapter7DialogueID.CH7_BUY_CAR_BUY]: {
		speaker: 'narrator',
		text: 'Bạn mua chiếc xe mơ ước. Không phải để "làm màu", mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textVi:
			'Bạn mua chiếc xe mơ ước. Không phải để "làm màu", mà là chiếc xe an toàn nhất thế giới để chở vợ con.',
		textEn:
			'Bought dream car. Not for "show", but the world\'s safest car to carry wife and child.',
		next: Chapter7DialogueID.CH7_HEALING_BALANCE,
	},

	[Chapter7DialogueID.CH7_HEALING_BALANCE]: {
		speaker: 'player',
		text: '(Suy nghĩ) Mình phải học cách "Tắt máy". Về nhà là bố, không phải là CEO. Nhưng liệu mình có thực sự làm được?',
		textVi:
			'(Suy nghĩ) Mình phải học cách "Tắt máy". Về nhà là bố, không phải là CEO. Nhưng liệu mình có thực sự làm được?',
		textEn:
			'(Thinking) I need to learn to "Shutdown". At home, be a father, not CEO. But can I truly do it?',
		choices: [
			{
				id: 'choice_dinner_commitment',
				text: 'Hứa về ăn tối 3 lần/tuần (Work-Life Balance)',
				textVi: 'Hứa về ăn tối 3 lần/tuần (Work-Life Balance)',
				textEn: 'Promise dinner 3x/week (Work-Life Balance)',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter7DialogueID.CH7_TRAVEL_START,
			},
			{
				id: 'choice_hustle_mode',
				text: 'Vẫn ưu tiên công việc (Grind)',
				textVi: 'Vẫn ưu tiên công việc (Grind)',
				textEn: 'Still prioritize work (Grind)',
				effects: [
					{ stat: StatID.STEELMIND, value: 2 },
					{
						stat: StatID.STRESS,
						value: 10,
					},
				],
				next: Chapter7DialogueID.CH7_TRAVEL_START,
			},
		],
	},
	// NEW: Family Travel Event
	[Chapter7DialogueID.CH7_TRAVEL_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Cả nhà đã lâu chưa đi du lịch. Một chuyến đi Châu Âu 2 tuần sẽ là kỷ niệm đẹp. Chi phí 200 triệu.',
		textVi:
			'(Suy nghĩ) Cả nhà đã lâu chưa đi du lịch. Một chuyến đi Châu Âu 2 tuần sẽ là kỷ niệm đẹp. Chi phí 200 triệu.',
		textEn:
			"(Thinking) Family hasn't traveled for long. 2 weeks in Europe would be great memory. Cost 200 million.",
		choices: [
			{
				id: 'choice_travel_europe',
				text: 'Châu Âu: Giấc mơ tuyết trắng (-200M)',
				textVi: 'Châu Âu: Giấc mơ tuyết trắng (-200M)',
				textEn: 'Europe: White snow dream (-200M)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 200000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -200000000 },
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.VISION, value: 2 },
				],
				next: Chapter7DialogueID.CH7_TRAVEL_EUROPE,
			},

			{
				id: 'choice_travel_asia',
				text: 'Thái Lan/Trung Quốc: Vừa túi tiền (-80M)',
				textVi: 'Thái Lan/Trung Quốc: Vừa túi tiền (-80M)',
				textEn: 'Thailand/China: Affordable (-80M)',
				effects: [
					{ stat: StatID.MONEY, value: -80000000 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
				next: Chapter7DialogueID.CH7_TRAVEL_ASIA,
			},
			{
				id: 'choice_travel_domestic',
				text: 'Đà Nẵng: Người Việt dùng hàng Việt (-30M)',
				textVi: 'Đà Nẵng: Người Việt dùng hàng Việt (-30M)',
				textEn: 'Da Nang: Support local (-30M)',
				effects: [
					{ stat: StatID.MONEY, value: -30000000 },
					{ stat: StatID.HUMANITY, value: 2 },
				],
				next: Chapter7DialogueID.CH7_TRAVEL_DOMESTIC,
			},
			{
				id: 'choice_travel_skip',
				text: 'Bận quá: Để dịp khác',
				textVi: 'Bận quá: Để dịp khác',
				textEn: 'Too busy: Maybe next time',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				next: Chapter7DialogueID.CH7_TRAVEL_SKIP_CONSEQUENCE,
			},
		],
	},
	[Chapter7DialogueID.CH7_TRAVEL_EUROPE]: {
		speaker: 'narrator',
		text: 'Chuyến đi trong mơ. Vợ con hạnh phúc vỡ òa khi thấy tuyết rơi ở Paris.',
		textVi:
			'Chuyến đi trong mơ. Vợ con hạnh phúc vỡ òa khi thấy tuyết rơi ở Paris.',
		textEn: 'Dream trip. Wife and kids overjoyed seeing snow in Paris.',
		next: Chapter7DialogueID.CH7_GIFT_START,
	},
	[Chapter7DialogueID.CH7_TRAVEL_ASIA]: {
		speaker: 'narrator',
		text: 'Đồ ăn ngon, cảnh đẹp. Cả nhà có những giây phút thư giãn tuyệt vời.',
		textVi:
			'Đồ ăn ngon, cảnh đẹp. Cả nhà có những giây phút thư giãn tuyệt vời.',
		textEn: 'Good food, nice views. Family had great relaxing moments.',
		next: Chapter7DialogueID.CH7_GIFT_START,
	},
	[Chapter7DialogueID.CH7_TRAVEL_DOMESTIC]: {
		speaker: 'narrator',
		text: 'Biển xanh cát trắng. Đơn giản nhưng ấm cúng. "Đi đâu cũng được, miễn là đi cùng nhau".',
		textVi:
			'Biển xanh cát trắng. Đơn giản nhưng ấm cúng. "Đi đâu cũng được, miễn là đi cùng nhau".',
		textEn:
			'Blue sea white sand. Simple but cozy. "Anywhere is fine, as long as we are together".',
		next: Chapter7DialogueID.CH7_GIFT_START,
	},
	[Chapter7DialogueID.CH7_TRAVEL_SKIP_CONSEQUENCE]: {
		speaker: 'narrator',
		text: 'Vợ thở dài, lặng lẽ cất vali. Con hỏi: "Bố lại bận à?". Bạn cắm đầu vào laptop, nhưng trong lòng nặng trĩu.',
		textVi:
			'Vợ thở dài, lặng lẽ cất vali. Con hỏi: "Bố lại bận à?". Bạn cắm đầu vào laptop, nhưng trong lòng nặng trĩu.',
		textEn:
			'Wife sighed, quietly unpacked. Kid asked: "Dad busy again?". You buried face in laptop, heart heavy.',
		effects: [
			{ stat: StatID.HUMANITY, value: -5 },
			{ stat: StatID.STRESS, value: 4 },
		],
		next: Chapter7DialogueID.CH7_GIFT_START,
	},

	[Chapter7DialogueID.CH7_HEALING_LESSON]: {
		speaker: 'narrator',
		text: 'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textVi:
			'Gia đình là "Backend" mà Frontend sự nghiệp cần để tỏa sáng. Bạn hiểu điều đó, dù có thực hiện được hay không là chuyện khác.',
		textEn:
			'Family is the "Backend" that the career Frontend needs to shine. You understood that, whether you could execute it is another matter.',
		next: Chapter7DialogueID.CH7_GIFT_START,
	},

	// NEW: Donate Event
	[Chapter7DialogueID.CH7_GIFT_START]: {
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
					{ stat: StatID.MONEY, value: -50000000 },
					{ stat: StatID.HUMANITY, value: 2 },
				],
				next: Chapter7DialogueID.CH7_GIFT_BUY,
			},
			{
				id: 'choice_gift_skip',
				text: 'Tự tay làm quà: Tấm lòng quan trọng hơn',
				textVi: 'Tự tay làm quà: Tấm lòng quan trọng hơn',
				textEn: 'DIY gift: Thoughtfulness matters more',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter7DialogueID.CH7_DONATE_START,
			},
		],
	},
	[Chapter7DialogueID.CH7_GIFT_BUY]: {
		speaker: 'narrator',
		text: 'Vợ bạn rất vui với món quà. Hạnh phúc gia đình được củng cố.',
		textVi: 'Vợ bạn rất vui với món quà. Hạnh phúc gia đình được củng cố.',
		textEn:
			'Your wife is very happy with the gift. Family happiness strengthened.',
		next: Chapter7DialogueID.CH7_DONATE_START,
	},
	[Chapter7DialogueID.CH7_DONATE_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Thành công rồi. Bạn muốn chia sẻ với cộng đồng. Quỹ từ thiện trẻ em nghèo đang kêu gọi 100 triệu.',
		textVi:
			'(Suy nghĩ) Thành công rồi. Bạn muốn chia sẻ với cộng đồng. Quỹ từ thiện trẻ em nghèo đang kêu gọi 100 triệu.',
		textEn:
			'(Thinking) Success. Want to share. Charity for poor kids calling for 100 million.',
		choices: [
			{
				id: 'choice_donate_school',
				text: 'Xây trường học: (-100M)',
				textVi: 'Xây trường học: (-100M)',
				textEn: 'Build school: (-100M)',
				effects: [
					{ stat: StatID.MONEY, value: -100000000 },
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
				flags: [{ key: FlagID.BUILT_SCHOOL, value: true }],
				next: Chapter7DialogueID.CH7_DONATE_GIVE,
			},
			{
				id: 'choice_donate_lab',
				text: 'Tặng phòng máy tính: (-50M)',
				textVi: 'Tặng phòng máy tính: (-50M)',
				textEn: 'Donate PC Lab: (-50M)',
				effects: [
					{ stat: StatID.MONEY, value: -50000000 },
					{ stat: StatID.VISION, value: 2 },
				],
				next: Chapter7DialogueID.CH7_DONATE_GIVE,
			},
			{
				id: 'choice_donate_books',
				text: 'Tặng sách vở: (-10M)',
				textVi: 'Tặng sách vở: (-10M)',
				textEn: 'Donate books: (-10M)',
				effects: [
					{ stat: StatID.MONEY, value: -10000000 },
					{ stat: StatID.HUMANITY, value: 2 },
				],
				next: Chapter7DialogueID.CH7_DONATE_GIVE,
			},
			{
				id: 'choice_donate_skip',
				text: 'Để sau: Mình chưa giàu hẳn',
				textVi: 'Để sau: Mình chưa giàu hẳn',
				textEn: 'Later: Not rich enough',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
				next: Chapter7DialogueID.CH7_SCALE_CULTURE_FIT,
			},
		],
	},
	[Chapter7DialogueID.CH7_DONATE_GIVE]: {
		speaker: 'narrator',
		text: 'Bạn cảm thấy ấm lòng khi giúp đỡ được những mảnh đời khó khăn.',
		textVi: 'Bạn cảm thấy ấm lòng khi giúp đỡ được những mảnh đời khó khăn.',
		textEn: 'You feel warm helping difficult lives.',
		effects: [{ stat: StatID.HUMANITY, value: 3 }],
		next: Chapter7DialogueID.CH7_SCALE_CULTURE_FIT, // Start Quiz Chunk 4
	},

	// NEW: Dividends & Real Estate
	[Chapter7DialogueID.CH7_DIVIDENDS_START]: {
		speaker: 'narrator',
		text: 'Cuối năm, khoản đầu tư vào các công ty con mang lại cổ tức. 200 triệu chảy vào tài khoản.',
		textVi:
			'Cuối năm, khoản đầu tư vào các công ty con mang lại cổ tức. 200 triệu chảy vào tài khoản.',
		textEn:
			'Year end, investments in subsidiaries paid dividends. 200 million flowed into account.',
		effects: [{ stat: StatID.MONEY, value: 200000000 }],
		next: Chapter7DialogueID.CH7_REAL_ESTATE_START,
	},
	[Chapter7DialogueID.CH7_REAL_ESTATE_START]: {
		speaker: 'narrator',
		text: 'Bạn cũng quyết định bán căn chung cư cũ mua từ thời mới cưới. Giá đất tăng vọt. Bạn lãi 2 tỷ.',
		textVi:
			'Bạn cũng quyết định bán căn chung cư cũ mua từ thời mới cưới. Giá đất tăng vọt. Bạn lãi 2 tỷ.',
		textEn:
			'You also decided to sell the old apartment bought when newlywed. Land price skyrocketed. You profited 2 billion.',
		effects: [{ stat: StatID.MONEY, value: 2000000000 }],
		next: Chapter7DialogueID.CH7_END,
	},

	// NEW: Developer Scenarios (Scaling & Architecture)
	[Chapter7DialogueID.CH7_SCALE_DB_SHARDING]: {
		speaker: 'narrator',
		text: 'Database quá tải (10M users). Cần Sharding. Chọn Shard Key nào?',
		textVi: 'Database quá tải (10M users). Cần Sharding. Chọn Shard Key nào?',
		textEn: 'Database overloaded (10M users). Need Sharding. Choose Shard Key?',
		choices: [
			{
				id: 'shard_user_id',
				text: 'User ID: Phân tán đều, dễ query theo user (High Cardinality)',
				textVi: 'User ID: Phân tán đều, dễ query theo user (High Cardinality)',
				textEn:
					'User ID: Even distribution, easy query by user (High Cardinality)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: 5000000 },
				],
				next: Chapter7DialogueID.CH7_SCALE_IPO,
			},
			{
				id: 'shard_geo',
				text: 'Location (Geo): Tối ưu cho local, nhưng dễ lệch tải (Hotspot)',
				textVi: 'Location (Geo): Tối ưu cho local, nhưng dễ lệch tải (Hotspot)',
				textEn: 'Location (Geo): Optimized for local, but easy Skew (Hotspot)',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.STRESS, value: 7 },
				],
				next: Chapter7DialogueID.CH7_SCALE_LOAD_BALANCER,
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_LOAD_BALANCER]: {
		speaker: 'narrator',
		text: 'Cấu hình Load Balancer. Chọn thuật toán nào?',
		textVi: 'Cấu hình Load Balancer. Chọn thuật toán nào?',
		textEn: 'Config Load Balancer. Choose algorithm?',
		choices: [
			{
				id: 'lb_round_robin',
				text: 'Round Robin: Chia đều lần lượt (Không quan tâm tải server)',
				textVi: 'Round Robin: Chia đều lần lượt (Không quan tâm tải server)',
				textEn: 'Round Robin: Distribute evenly (Ignore server load)',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter7DialogueID.CH7_SCALE_CACHE,
			},
			{
				id: 'lb_least_conn',
				text: 'Least Connections: Chia cho server rảnh nhất (Tối ưu hơn)',
				textVi: 'Least Connections: Chia cho server rảnh nhất (Tối ưu hơn)',
				textEn: 'Least Connections: To idlest server (More optimal)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: 5000000 },
				],
				next: Chapter7DialogueID.CH7_SCALE_CACHE,
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_CACHE]: {
		speaker: 'narrator',
		text: 'Hệ thống Cache (Redis) bị đầy. Eviction Policy là gì?',
		textVi: 'Hệ thống Cache (Redis) bị đầy. Eviction Policy là gì?',
		textEn: 'Cache (Redis) full. Eviction Policy?',
		choices: [
			{
				id: 'cache_lru',
				text: 'LRU (Least Recently Used): Xóa cái lâu không dùng',
				textVi: 'LRU (Least Recently Used): Xóa cái lâu không dùng',
				textEn: 'LRU (Least Recently Used): Remove old unused',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.MONEY, value: 5000000 },
				],
				next: Chapter7DialogueID.CH7_DIVIDE_STRATEGY, // End Quiz Chunk 1
			},
			{
				id: 'cache_random',
				text: 'Random: Xóa ngẫu nhiên (Rủi ro xóa data hot)',
				textVi: 'Random: Xóa ngẫu nhiên (Rủi ro xóa data hot)',
				textEn: 'Random: Remove randomly (Risk removing hot data)',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter7DialogueID.CH7_DIVIDE_STRATEGY, // End Quiz Chunk 1
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_CDN]: {
		speaker: 'narrator',
		text: 'User quốc tế kêu load ảnh chậm. Giải pháp?',
		textVi: 'User quốc tế kêu load ảnh chậm. Giải pháp?',
		textEn: 'Global users complain slow image load. Solution?',
		choices: [
			{
				id: 'cdn_use',
				text: 'Dùng CDN (Cloudflare/AWS CloudFront): Tốn tiền nhưng nhanh',
				textVi: 'Dùng CDN (Cloudflare/AWS CloudFront): Tốn tiền nhưng nhanh',
				textEn: 'Use CDN (Cloudflare/AWS CloudFront): Costly but fast',
				effects: [
					{ stat: StatID.MONEY, value: -50000000 },
					{ stat: StatID.VISION, value: 2 },
				],
				next: Chapter7DialogueID.CH7_SCALE_MICROSERVICES,
			},
			{
				id: 'cdn_compress',
				text: 'Nén ảnh nhỏ lại thôi (Giải pháp tạm bợ)',
				textVi: 'Nén ảnh nhỏ lại thôi (Giải pháp tạm bợ)',
				textEn: 'Just compress images (Temporary fix)',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter7DialogueID.CH7_SCALE_MICROSERVICES,
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_MICROSERVICES]: {
		speaker: 'narrator',
		text: 'Monolith quá cồng kềnh. Tách Microservices thế nào?',
		textVi: 'Monolith quá cồng kềnh. Tách Microservices thế nào?',
		textEn: 'Monolith too heavy. How to split Microservices?',
		choices: [
			{
				id: 'micro_domain',
				text: 'Tách theo Domain (User, Order, Payment): Loose Coupling',
				textVi: 'Tách theo Domain (User, Order, Payment): Loose Coupling',
				textEn: 'Split by Domain (User, Order, Payment): Loose Coupling',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: 10000000 },
				],
				next: Chapter7DialogueID.CH7_MERGE_CONFLICT_Q, // End Quiz Chunk 2
			},
			{
				id: 'micro_layer',
				text: 'Tách theo Layer (Controller, Service, Repo): Distributed Monolith',
				textVi:
					'Tách theo Layer (Controller, Service, Repo): Distributed Monolith',
				textEn:
					'Split by Layer (Controller, Service, Repo): Distributed Monolith',
				effects: [
					{ stat: StatID.VISION, value: -5 },
					{ stat: StatID.STRESS, value: 7 },
				],
				next: Chapter7DialogueID.CH7_MERGE_CONFLICT_Q, // End Quiz Chunk 2
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_MONITORING]: {
		speaker: 'narrator',
		text: 'Hệ thống chết không ai biết. Cần Monitoring.',
		textVi: 'Hệ thống chết không ai biết. Cần Monitoring.',
		textEn: 'System down, no one knows. Need Monitoring.',
		choices: [
			{
				id: 'monitor_full',
				text: 'Full Stack Observability (Logs, Metrics, Traces)',
				textVi: 'Full Stack Observability (Logs, Metrics, Traces)',
				textEn: 'Full Stack Observability (Logs, Metrics, Traces)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: -20000000 },
				],
				next: Chapter7DialogueID.CH7_SCALE_TEAM_STRUCTURE,
			},
			{
				id: 'monitor_basic',
				text: 'Dùng Pingdom check uptime là đủ (Tiết kiệm)',
				textVi: 'Dùng Pingdom check uptime là đủ (Tiết kiệm)',
				textEn: 'Pingdom uptime check is enough (Save money)',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.MONEY, value: 5000000 },
				],
				next: Chapter7DialogueID.CH7_SCALE_TEAM_STRUCTURE,
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_TEAM_STRUCTURE]: {
		speaker: 'narrator',
		text: 'Team 50 người. Tổ chức thế nào để Scale?',
		textVi: 'Team 50 người. Tổ chức thế nào để Scale?',
		textEn: 'Team 50 people. How to organize to Scale?',
		choices: [
			{
				id: 'team_squad',
				text: 'Spotify Model (Squads, Tribes): Cross-functional, Autonomous',
				textVi: 'Spotify Model (Squads, Tribes): Cross-functional, Autonomous',
				textEn: 'Spotify Model (Squads, Tribes): Cross-functional, Autonomous',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: 10000000 },
				],
				next: Chapter7DialogueID.CH7_HEALING_CONFLICT, // End Quiz Chunk 3
			},
			{
				id: 'team_hierarchy',
				text: 'Phân tầng truyền thống (Manager -> Lead -> Dev): Control',
				textVi: 'Phân tầng truyền thống (Manager -> Lead -> Dev): Control',
				textEn: 'Traditional Hierarchy (Manager -> Lead -> Dev): Control',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.VISION, value: -3 }, // Slow innovation
				],
				next: Chapter7DialogueID.CH7_HEALING_CONFLICT, // End Quiz Chunk 3
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_CULTURE_FIT]: {
		speaker: 'narrator',
		text: 'Tuyển Senior mới. Giỏi nhưng không hợp văn hóa (Culture Fit).',
		textVi: 'Tuyển Senior mới. Giỏi nhưng không hợp văn hóa (Culture Fit).',
		textEn: 'Hiring new Senior. Good but no Culture Fit.',
		choices: [
			{
				id: 'cult_reject',
				text: 'Từ chối: Văn hóa là sống còn (Bảo vệ team)',
				textVi: 'Từ chối: Văn hóa là sống còn (Bảo vệ team)',
				textEn: 'Reject: Culture is vital (Protect team)',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.MONEY, value: 5000000 },
				],
				next: Chapter7DialogueID.CH7_DIVIDENDS_START, // End Quiz Chunk 4
			},
			{
				id: 'cult_hire',
				text: 'Tuyển: Cần người làm được việc đã (Rủi ro xung đột)',
				textVi: 'Tuyển: Cần người làm được việc đã (Rủi ro xung đột)',
				textEn: 'Hire: Need hands first (Conflict risk)',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.STRESS, value: 10 },
				],
				next: Chapter7DialogueID.CH7_DIVIDENDS_START, // End Quiz Chunk 4
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_IPO]: {
		speaker: 'narrator',
		text: 'Nhà đầu tư giục IPO (Lên sàn). Bạn thấy chưa sẵn sàng.',
		textVi: 'Nhà đầu tư giục IPO (Lên sàn). Bạn thấy chưa sẵn sàng.',
		textEn: 'Investors push for IPO. You feel not ready.',
		choices: [
			{
				id: 'ipo_delay',
				text: 'Trì hoãn: Cần củng cố nội lực (Mất lòng Investor)',
				textVi: 'Trì hoãn: Cần củng cố nội lực (Mất lòng Investor)',
				textEn: 'Delay: Strengthen core first (Upset Investor)',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.STRESS, value: 7 },
				],
				next: Chapter7DialogueID.CH7_SCALE_EXIT,
			},
			{
				id: 'ipo_rush',
				text: 'IPO luôn: Lấy tiền mở rộng tiếp (Rủi ro bong bóng)',
				textVi: 'IPO luôn: Lấy tiền mở rộng tiếp (Rủi ro bong bóng)',
				textEn: 'IPO now: Get money to expand (Bubble risk)',
				effects: [
					{ stat: StatID.MONEY, value: 5000000000 }, // Huge money
					{ stat: StatID.STRESS, value: 20 },
				],
				next: Chapter7DialogueID.CH7_SCALE_EXIT,
			},
		],
	},
	[Chapter7DialogueID.CH7_SCALE_EXIT]: {
		speaker: 'narrator',
		text: 'Đối thủ đề nghị mua lại công ty (Exit) với giá cao.',
		textVi: 'Đối thủ đề nghị mua lại công ty (Exit) với giá cao.',
		textEn: 'Competitor offers to buy company (Exit) for high price.',
		choices: [
			{
				id: 'exit_sell',
				text: 'Bán: Nghỉ hưu sớm',
				textVi: 'Bán: Nghỉ hưu sớm',
				textEn: 'Sell: Early retirement',
				effects: [
					{ stat: StatID.MONEY, value: 10000000000 },
					{ stat: StatID.VISION, value: -10 },
				],
				next: Dialogue_END.END,
			},
			{
				id: 'exit_keep',
				text: 'Không bán: Đây là đứa con tinh thần (Tiếp tục chiến đấu)',
				textVi: 'Không bán: Đây là đứa con tinh thần (Tiếp tục chiến đấu)',
				textEn: 'No sell: This is my baby (Keep fighting)',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.STEELMIND, value: 5 },
				],
				next: Chapter7DialogueID.CH7_DIVIDE_STRATEGY,
			},
		],
	},
	[Chapter7DialogueID.CH7_END]: {
		speaker: 'narrator',
		text: 'Mọi thứ có vẻ hoàn hảo. Nhưng những báo cáo tài chính bắt đầu có những con số bất thường. Một cơn địa chấn đang âm thầm hình thành dưới chân đế chế của bạn.',
		textVi:
			'Mọi thứ có vẻ hoàn hảo. Nhưng những báo cáo tài chính bắt đầu có những con số bất thường. Một cơn địa chấn đang âm thầm hình thành dưới chân đế chế của bạn.',
		textEn:
			'Everything seems perfect. But financial reports start showing unusual numbers. An earthquake is silently forming beneath your empire.',
		next: Chapter8DialogueID.CH8_AI_1,
	},
};
