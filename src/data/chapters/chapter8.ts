// ==========================================
// CHAPTER 8: THE BLACK SWAN (THIÊN NGA ĐEN)
// Timeline: 40-52 tuổi
// Theme: Đột phá, Rủi ro và Sự trở lại
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter8: Chapter = {
	id: 8,
	name: 'The Black Swan',
	nameVi: 'Thiên Nga Đen',
	nameEn: 'The Black Swan',
	ageRange: '40-52 tuổi',
	theme: 'Đột phá, Rủi ro và Sự trở lại',
	themeVi: 'Đột phá, Rủi ro và Sự trở lại',
	themeEn: 'Breakthrough, Risk, and The Return',
	scenes: [
		{
			id: 'ch8_ai',
			name: 'Canh bạc AI',
			nameVi: '40-45 tuổi: Canh bạc AI & Robot',
			nameEn: 'Age 40-45: AI Gamble & Robots',
			background: '/assets/sprites/backgrounds/server_room_future.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: 'ch8_intro', // Changed from ch8_ai_1
		},
		{
			id: 'ch8_recall',
			name: 'The Recall',
			nameVi: '45-48 tuổi: The Recall (Cao trào)',
			nameEn: 'Age 45-48: The Recall (Climax)',
			background: '/assets/sprites/backgrounds/press_conference.png',
			music: '/assets/audio/music/chapters/ch8_crisis.mp3',
			dialogueStart: 'ch8_recall_1',
		},
		{
			id: 'ch8_rebirth',
			name: 'Phục sinh',
			nameVi: '50-52 tuổi: Phục sinh (Resurrection)',
			nameEn: 'Age 50-52: Resurrection',
			background: '/assets/sprites/backgrounds/skyscraper_view.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: 'ch8_rebirth_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch8_todo_read_ai',
				text: 'Đọc tài liệu nghiên cứu AI',
				textVi: 'Đọc tài liệu nghiên cứu AI',
				textEn: 'Read AI research papers',
				effects: [{ stat: 'vision', value: 1 }], // Knowledge
			},
			{
				id: 'ch8_todo_meet_gov',
				text: 'Gặp gỡ quan chức chính phủ',
				textVi: 'Gặp gỡ quan chức chính phủ',
				textEn: 'Meet government officials',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { stress: 1 },
			},

			{
				id: 'ch8_todo_ethics',
				text: 'Đối mặt với tình huống khó xử về đạo đức',
				textVi: 'Đối mặt với tình huống khó xử về đạo đức',
				textEn: 'Face ethical dilemma',
				effects: [
					{ stat: 'steelMind', value: 1 },
					{ stat: 'humanity', value: 1 },
				],
			},
			{
				id: 'ch8_todo_visit_dad',
				text: 'Vào viện thăm Bố',
				textVi: 'Vào viện thăm Bố',
				textEn: 'Visit Dad in hospital',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch8_todo_ignore_press',
				text: 'Phớt lờ báo chí tiêu cực',
				textVi: 'Phớt lờ báo chí tiêu cực',
				textEn: 'Ignore negative press',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'ch8_todo_press_conf',
				text: 'Tổ chức họp báo',
				textVi: 'Tổ chức họp báo',
				textEn: 'Hold press conference',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { stress: 2 },
			},
			{
				id: 'ch8_todo_fire_inspector',
				text: 'Sa thải thanh tra an toàn',
				textVi: 'Sa thải thanh tra an toàn',
				textEn: 'Fire safety inspector',
				effects: [{ stat: 'vision', value: 1 }], // Speed
				cost: { stress: 1 }, // Risk High
			},

			{
				id: 'ch8_todo_meditate_life',
				text: 'Thiền định về ý nghĩa cuộc sống',
				textVi: 'Thiền định về ý nghĩa cuộc sống',
				textEn: 'Meditate on life meaning',
				effects: [{ stat: 'vision', value: 1 }], // Wisdom
			},
			{
				id: 'ch8_todo_review_core',
				text: 'Review mã nguồn lõi của AI',
				textVi: 'Review mã nguồn lõi của AI',
				textEn: 'Review AI core source code',
				effects: [{ stat: 'vision', value: 1 }], // Skill Coding
			},
			{
				id: 'ch8_todo_family_time',
				text: 'Dành thời gian cho con cái đã lớn',
				textVi: 'Dành thời gian cho con cái đã lớn',
				textEn: 'Time with grown-up kids',
				effects: [{ stat: 'humanity', value: 1 }],
			},

			{
				id: 'ch8_todo_long_leave',
				text: 'Nghỉ phép dài hạn',
				textVi: 'Nghỉ phép dài hạn',
				textEn: 'Long leave',
				reward: { health: 1 },
				cost: { vision: 1 }, // Career -
			},
			{
				id: 'ch8_todo_write_memoir',
				text: 'Viết hồi ký',
				textVi: 'Viết hồi ký',
				textEn: 'Write memoir',
				effects: [{ stat: 'vision', value: 1 }], // Legacy
			},
			{
				id: 'ch8_todo_spy_cofounder',
				text: 'Thuê thám tử theo dõi Co-founder',
				textVi: 'Thuê thám tử theo dõi Co-founder',
				textEn: 'Hire PI to spy on Co-founder',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { money: 50000000, humanity: -1 },
			},
			{
				id: 'ch8_todo_marriage_counseling',
				text: 'Đi tư vấn hôn nhân',
				textVi: 'Đi tư vấn hôn nhân',
				textEn: 'Marriage counseling',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 10000000 },
			},
			{
				id: 'ch8_todo_watch_news',
				text: 'Xem tin tức về AI cướp việc làm',
				textVi: 'Xem tin tức về AI cướp việc làm',
				textEn: 'Watch news about AI taking jobs',
				cost: { stress: 1 },
			},

			{
				id: 'ch8_todo_sleeping_pill',
				text: 'Uống thuốc ngủ',
				textVi: 'Uống thuốc ngủ',
				textEn: 'Take sleeping pills',
				cost: { health: 1 },
			},
			{
				id: 'ch8_todo_stare_button',
				text: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textVi: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textEn: 'Stare at "Recall" button',
				cost: { stress: 2 },
			},
			{
				id: 'ch8_todo_remember_dad',
				text: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textVi: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textEn: 'Remember Dad\'s "Stack Overflow" incident',
				effects: [{ stat: 'vision', value: 1 }], // Wisdom
			},
		],
		dreamQuestions: [
			{
				id: 'ch8_dream_robot',
				text: 'Bạn thấy một con Robot có khuôn mặt giống hệt mình.',
				textVi: 'Bạn thấy một con Robot có khuôn mặt giống hệt mình.',
				textEn: 'You see a Robot with your face.',
				choices: [
					{
						id: 'ch8_dream_robot_shake',
						text: 'Bắt tay nó',
						textVi: 'Bắt tay nó',
						textEn: 'Shake hands',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Harmony
					},
					{
						id: 'ch8_dream_robot_off',
						text: 'Tắt nguồn nó',
						textVi: 'Tắt nguồn nó',
						textEn: 'Turn it off',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Fear
					},
					{
						id: 'ch8_dream_robot_ask',
						text: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textVi: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textEn: 'Ask: "Do you have a soul?"',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Wisdom
					},
					{
						id: 'ch8_dream_robot_order',
						text: 'Ra lệnh cho nó',
						textVi: 'Ra lệnh cho nó',
						textEn: 'Order it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Control
					},
				],
			},
			{
				id: 'ch8_dream_court',
				text: 'Bạn đứng trước tòa án lương tâm.',
				textVi: 'Bạn đứng trước tòa án lương tâm.',
				textEn: 'Standing before court of conscience.',
				choices: [
					{
						id: 'ch8_dream_court_guilty',
						text: 'Nhận tội',
						textVi: 'Nhận tội',
						textEn: 'Plead guilty',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch8_dream_court_defend',
						text: 'Biện hộ',
						textVi: 'Biện hộ',
						textEn: 'Defend',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Reason
					},
					{
						id: 'ch8_dream_court_blame',
						text: 'Đổ lỗi cho người khác',
						textVi: 'Đổ lỗi cho người khác',
						textEn: 'Blame others',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }], // Cowardice
					},
					{
						id: 'ch8_dream_court_silent',
						text: 'Im lặng',
						textVi: 'Im lặng',
						textEn: 'Silence',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Stoic
					},
				],
			},
			{
				id: 'ch8_dream_dad',
				text: 'Bố trẻ lại như ngày xưa, đang xây cầu.',
				textVi: 'Bố trẻ lại như ngày xưa, đang xây cầu.',
				textEn: 'Dad young again, building a bridge.',
				choices: [
					{
						id: 'ch8_dream_dad_help',
						text: 'Chạy lại phụ bố',
						textVi: 'Chạy lại phụ bố',
						textEn: 'Help him',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch8_dream_dad_stop',
						text: 'Bảo bố dừng lại',
						textVi: 'Bảo bố dừng lại',
						textEn: 'Tell him to stop',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Warning
					},
					{
						id: 'ch8_dream_dad_watch',
						text: 'Đứng nhìn từ xa',
						textVi: 'Đứng nhìn từ xa',
						textEn: 'Watch from afar',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }], // Nostalgia
					},
					{
						id: 'ch8_dream_dad_destroy',
						text: 'Phá cây cầu',
						textVi: 'Phá cây cầu',
						textEn: 'Destroy bridge',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Obsession
					},
				],
			},
			{
				id: 'ch8_dream_butterfly',
				text: 'Một con bướm đen đậu lên vai bạn.',
				textVi: 'Một con bướm đen đậu lên vai bạn.',
				textEn: 'Black butterfly lands on your shoulder.',
				choices: [
					{
						id: 'ch8_dream_butterfly_shoo',
						text: 'Đuổi nó đi',
						textVi: 'Đuổi nó đi',
						textEn: 'Shoo it away',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch8_dream_butterfly_watch',
						text: 'Ngắm nhìn nó',
						textVi: 'Ngắm nhìn nó',
						textEn: 'Watch it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Wisdom
					},
					{
						id: 'ch8_dream_butterfly_catch',
						text: 'Bắt nó ép vào sổ',
						textVi: 'Bắt nó ép vào sổ',
						textEn: 'Catch and press it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Control
					},
					{
						id: 'ch8_dream_butterfly_fly',
						text: 'Biến thành bướm bay đi',
						textVi: 'Biến thành bướm bay đi',
						textEn: 'Turn into butterfly and fly',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Freedom
					},
				],
			},
			{
				id: 'ch8_dream_reset',
				text: 'Trước mặt bạn là nút "Reset Game".',
				textVi: 'Trước mặt bạn là nút "Reset Game".',
				textEn: 'In front of you is "Reset Game" button.',
				choices: [
					{
						id: 'ch8_dream_reset_press',
						text: 'Bấm nút',
						textVi: 'Bấm nút',
						textEn: 'Press it',
						next: '',
						effects: [{ stat: 'vision', value: -1 }], // Redo
					},
					{
						id: 'ch8_dream_reset_ignore',
						text: 'Không bấm',
						textVi: 'Không bấm',
						textEn: "Don't press",
						next: '',
						effects: [{ stat: 'steelMind', value: 2 }], // Accept past
					},
					{
						id: 'ch8_dream_reset_destroy',
						text: 'Phá hủy cái nút',
						textVi: 'Phá hủy cái nút',
						textEn: 'Destroy button',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch8_dream_reset_stare',
						text: 'Đứng nhìn mãi',
						textVi: 'Đứng nhìn mãi',
						textEn: 'Stare at it',
						next: '',
						effects: [{ stat: 'stress', value: 1 }], // Hesitation
					},
				],
			},
		],
	},
};

export const chapter8Dialogues: Record<string, DialogueNode> = {
	// NEW: Intro
	ch8_end: {
		id: 'ch8_end',
		speaker: 'narrator',
		text: 'Cơn bão qua đi, để lại những tàn tích. Bạn đứng giữa văn phòng trống rỗng, nhìn ra thành phố lên đèn. Bạn đã chiến thắng, nhưng bạn còn lại gì?',
		textVi:
			'Cơn bão qua đi, để lại những tàn tích. Bạn đứng giữa văn phòng trống rỗng, nhìn ra thành phố lên đèn. Bạn đã chiến thắng, nhưng bạn còn lại gì?',
		textEn:
			'Storm passed, leaving ruins. You stand in empty office, looking at city lights. You won, but what is left?',
		next: 'chapter_9_start',
	},

	// 8.1 AI Gamble
	ch8_ai_1: {
		id: 'ch8_ai_1',
		speaker: 'narrator',
		text: '40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textVi:
			'40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textEn:
			'40 years old. AI Tsunami hit. ChatGPT, Copilot crushed traditional Outsource. "Innovate or Die".',
		next: 'ch8_ai_vision',
	},
	ch8_ai_vision: {
		id: 'ch8_ai_vision',
		speaker: 'narrator',
		text: 'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textVi:
			'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textEn:
			'Saw opportunity in Care Robots. Not for money, but for meaning: Help elderly live with dignity.',
		next: 'ch8_budget_start',
	},

	// NEW: Budget Event
	ch8_budget_start: {
		id: 'ch8_budget_start',
		speaker: 'player',
		text: '(Suy nghĩ) Dự án Robot cần ngân sách R&D khổng lồ. 10 tỷ đồng để mua linh kiện và thuê chuyên gia.',
		textVi:
			'(Suy nghĩ) Dự án Robot cần ngân sách R&D khổng lồ. 10 tỷ đồng để mua linh kiện và thuê chuyên gia.',
		textEn:
			'(Thinking) Robot project needs huge R&D budget. 10 billion for parts and experts.',
		choices: [
			{
				id: 'choice_budget_approve',
				text: 'Duyệt chi: Đầu tư cho tương lai (-10B)',
				textVi: 'Duyệt chi: Đầu tư cho tương lai (-10B)',
				textEn: 'Approve: Invest in future (-10B)',
				effects: [{ stat: 'money', value: -10000000000 }],
				next: 'ch8_budget_approve',
			},
			{
				id: 'choice_budget_cut',
				text: 'Cắt giảm: Tận dụng linh kiện cũ (-2B, Vision -1)',
				textVi: 'Cắt giảm: Tận dụng linh kiện cũ (-2B, Vision -1)',
				textEn: 'Cut: Reuse old parts (-2B, Vision -1)',
				effects: [
					{ stat: 'money', value: -2000000000 },
					{ stat: 'vision', value: -1 },
				],
				next: 'ch8_budget_fail',
			},
		],
	},
	ch8_budget_approve: {
		id: 'ch8_budget_approve',
		speaker: 'narrator',
		text: 'Ngân sách được thông qua. Các kỹ sư làm việc hăng say với thiết bị mới nhất.',
		textVi:
			'Ngân sách được thông qua. Các kỹ sư làm việc hăng say với thiết bị mới nhất.',
		textEn: 'Budget approved. Engineers work passionately with latest gear.',
		next: 'ch8_betrayal_start', // Redirect to Betrayal
	},
	ch8_budget_fail: {
		id: 'ch8_budget_fail',
		speaker: 'narrator',
		text: 'Linh kiện cũ gây ra lỗi quá nhiệt. Robot thử nghiệm phát nổ trong phòng Lab. Cổ phiếu lao dốc không phanh. Đối tác rút vốn. Bạn mất 50 tỷ để đền bù và khắc phục.',
		textVi:
			'Linh kiện cũ gây ra lỗi quá nhiệt. Robot thử nghiệm phát nổ trong phòng Lab. Cổ phiếu lao dốc không phanh. Đối tác rút vốn. Bạn mất 50 tỷ để đền bù và khắc phục.',
		textEn:
			'Old parts caused overheating. Prototype robot exploded in Lab. Stocks plummeted. Partners withdrew capital. You lost 50 billion in compensation and repairs.',
		effects: [{ stat: 'money', value: -50000000000 }],
		next: 'ch8_betrayal_start', // Redirect to Betrayal
	},

	// NEW: Co-founder Betrayal
	ch8_betrayal_start: {
		id: 'ch8_betrayal_start',
		speaker: 'narrator',
		text: 'Tin mật báo: Co-founder của bạn đang bí mật đàm phán bán công nghệ lõi cho đối thủ.',
		textVi:
			'Tin mật báo: Co-founder của bạn đang bí mật đàm phán bán công nghệ lõi cho đối thủ.',
		textEn:
			'Intel: Your Co-founder is secretly negotiating to sell core tech to competitor.',
		choices: [
			{
				id: 'choice_betrayal_fight',
				text: 'Kiện ra tòa: Khô máu (Money -2B, Stress +2)',
				textVi: 'Kiện ra tòa: Khô máu (Money -2B, Stress +2)',
				textEn: 'Sue them: All out war (Money -2B, Stress +2)',
				effects: [
					{ stat: 'money', value: -2000000000 },
					{ stat: 'stress', value: 2 },
				],
				next: 'ch8_ai_bet',
			},
			{
				id: 'choice_betrayal_negotiate',
				text: 'Thỏa hiệp: Chia lợi nhuận (Money +5B, Vision -2)',
				textVi: 'Thỏa hiệp: Chia lợi nhuận (Money +5B, Vision -2)',
				textEn: 'Negotiate: Share profit (Money +5B, Vision -2)',
				effects: [
					{ stat: 'money', value: 5000000000 },
					{ stat: 'vision', value: -2 },
				],
				next: 'ch8_ai_bet',
			},
		],
	},
	ch8_ai_bet: {
		id: 'ch8_ai_bet',
		speaker: 'narrator',
		text: 'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textVi:
			'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textEn:
			'All-in. Government loans, top professor partnerships. Final gamble to become a Unicorn.',
		effects: [{ stat: 'vision', value: 2 }],
		next: 'ch8_prison_check', // Redirect to Prison Check
	},

	// NEW: Lawsuit/Prison Check
	ch8_prison_check: {
		id: 'ch8_prison_check',
		speaker: 'narrator',
		text: 'Chính phủ rà soát hồ sơ năng lực để cấp vốn.',
		textVi: 'Chính phủ rà soát hồ sơ năng lực để cấp vốn.',
		textEn: 'Government reviews profile for funding.',
		choices: [
			{
				id: 'choice_prison_trigger',
				text: '...',
				textVi: '...',
				textEn: '...',
				condition: {
					type: 'flag',
					key: 'choice_fake_data', // From Ch 6
					operator: '==',
					value: true,
				},
				next: 'ch8_prison_risk',
			},
			{
				id: 'choice_prison_pass',
				text: 'Hồ sơ sạch: Được duyệt',
				textVi: 'Hồ sơ sạch: Được duyệt',
				textEn: 'Clean profile: Approved',
				next: 'ch8_recall_1',
			},
		],
	},
	ch8_prison_risk: {
		id: 'ch8_prison_risk',
		speaker: 'narrator',
		text: 'Phát hiện gian lận số liệu trong quá khứ (Vụ án Chapter 6). Bạn bị điều tra hình sự. Cổ phiếu bị đình chỉ giao dịch.',
		textVi:
			'Phát hiện gian lận số liệu trong quá khứ (Vụ án Chapter 6). Bạn bị điều tra hình sự. Cổ phiếu bị đình chỉ giao dịch.',
		textEn:
			'Past data fraud detected (Chapter 6 case). Criminal investigation. Stock trading suspended.',
		effects: [
			{ stat: 'money', value: -50000000000 }, // Huge fine
			{ stat: 'vision', value: -5 },
			{ stat: 'stress', value: 5 },
		],
		next: 'ch8_recall_1', // Still proceed but crippled
	},

	// 8.2 The Recall
	ch8_recall_1: {
		id: 'ch8_recall_1',
		speaker: 'narrator',
		text: '45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textVi:
			'45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textEn:
			'Age 45-48. Robot V1 launched. Sold out. Stock hit ceiling. You were winning. You were rising.',
		next: 'ch8_recall_report',
	},
	ch8_recall_report: {
		id: 'ch8_recall_report',
		speaker: 'narrator',
		text: 'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textVi:
			'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textEn:
			'Internal report landed on desk: In rare edge cases, AI hallucinates and robot may clamp elderly hands causing injury. Rate: 1%.',
		next: 'ch8_ethics_start',
	},

	// NEW: Ethics Event
	ch8_ethics_start: {
		id: 'ch8_ethics_start',
		speaker: 'player',
		text: '(Suy nghĩ) Báo cáo lỗi khiến bạn lo ngại. Bạn muốn thuê một Giám đốc Đạo đức AI để kiểm soát rủi ro. Chi phí 2 tỷ/năm.',
		textVi:
			'(Suy nghĩ) Báo cáo lỗi khiến bạn lo ngại. Bạn muốn thuê một Giám đốc Đạo đức AI để kiểm soát rủi ro. Chi phí 2 tỷ/năm.',
		textEn:
			'(Thinking) Bug report worries you. Want to hire AI Ethics Director to control risk. Cost 2 billion/year.',
		choices: [
			{
				id: 'choice_ethics_hire',
				text: 'Thuê ngay: An toàn là trên hết (-2B, Vision +1)',
				textVi: 'Thuê ngay: An toàn là trên hết (-2B, Vision +1)',
				textEn: 'Hire now: Safety first (-2B, Vision +1)',
				effects: [
					{ stat: 'money', value: -2000000000 },
					{ stat: 'vision', value: 1 },
				],
				next: 'ch8_ethics_hire',
			},
			{
				id: 'choice_ethics_nephew',
				text: 'Thuê người quen: Thằng cháu mới ra trường (-200M)',
				textVi: 'Thuê người quen: Thằng cháu mới ra trường (-200M)',
				textEn: 'Hire relative: Nephew just graduated (-200M)',
				effects: [{ stat: 'money', value: -200000000 }],
				next: 'ch8_ethics_nephew',
			},
		],
	},
	ch8_ethics_hire: {
		id: 'ch8_ethics_hire',
		speaker: 'narrator',
		text: 'Giám đốc Đạo đức đưa ra những cảnh báo quan trọng. Bạn cảm thấy yên tâm hơn.',
		textVi:
			'Giám đốc Đạo đức đưa ra những cảnh báo quan trọng. Bạn cảm thấy yên tâm hơn.',
		textEn: 'Ethics Director gave important warnings. You feel more secure.',
		next: 'ch8_recall_pressure',
	},
	ch8_ethics_nephew: {
		id: 'ch8_ethics_nephew',
		speaker: 'narrator',
		text: 'Thằng cháu làm việc hời hợt, bỏ qua các cảnh báo an toàn. Một scandal lộ dữ liệu xảy ra trên quy mô toàn cầu. Google và Apple gỡ ứng dụng. Công ty bị phạt 20 tỷ và mất uy tín nghiêm trọng.',
		textVi:
			'Thằng cháu làm việc hời hợt, bỏ qua các cảnh báo an toàn. Một scandal lộ dữ liệu xảy ra trên quy mô toàn cầu. Google và Apple gỡ ứng dụng. Công ty bị phạt 20 tỷ và mất uy tín nghiêm trọng.',
		textEn:
			'Nephew worked carelessly, ignored safety warnings. Global data leak scandal. Google and Apple delisted app. Company fined 20 billion and lost serious reputation.',
		effects: [
			{ stat: 'money', value: -20000000000 },
			{ stat: 'vision', value: -10 },
		],
		next: 'ch8_recall_pressure',
	},
	ch8_recall_pressure: {
		id: 'ch8_recall_pressure',
		speaker: 'npc',
		text: 'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textVi:
			'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textEn:
			'Shareholder screamed: "Are you crazy? 1% is acceptable margin! Silent Patch it. Recall now is suicide! Do you want to lose everything like your dad?"',
		next: 'ch8_lawyer_start',
	},

	// NEW: Lawyer Event
	ch8_lawyer_start: {
		id: 'ch8_lawyer_start',
		speaker: 'player',
		text: '(Suy nghĩ) Cổ đông gây áp lực. Bạn cần tư vấn pháp lý về trách nhiệm nếu xảy ra sự cố.',
		textVi:
			'(Suy nghĩ) Cổ đông gây áp lực. Bạn cần tư vấn pháp lý về trách nhiệm nếu xảy ra sự cố.',
		textEn:
			'(Thinking) Shareholders pressure. Need legal advice on liability if incident occurs.',
		choices: [
			{
				id: 'choice_lawyer_hire',
				text: 'Thuê luật sư: Bảo vệ bản thân (-500M, Steel Mind +1)',
				textVi: 'Thuê luật sư: Bảo vệ bản thân (-500M, Steel Mind +1)',
				textEn: 'Hire lawyer: Protect self (-500M, Steel Mind +1)',
				effects: [
					{ stat: 'money', value: -500000000 },
					{ stat: 'steelMind', value: 1 },
				],
				next: 'ch8_lawyer_hire',
			},
			{
				id: 'choice_lawyer_skip',
				text: 'Tự chịu trách nhiệm: Mình làm mình chịu (Humanity +1)',
				textVi: 'Tự chịu trách nhiệm: Mình làm mình chịu (Humanity +1)',
				textEn: 'Self-responsibility: I own it (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch8_recall_reply',
			},
		],
	},
	ch8_lawyer_hire: {
		id: 'ch8_lawyer_hire',
		speaker: 'narrator',
		text: 'Luật sư tư vấn các phương án bảo vệ tài sản và danh dự.',
		textVi: 'Luật sư tư vấn các phương án bảo vệ tài sản và danh dự.',
		textEn: 'Lawyer advised on asset and reputation protection.',
		next: 'ch8_divorce_start', // Redirect to Divorce
	},

	// NEW: Divorce Crisis
	ch8_divorce_start: {
		id: 'ch8_divorce_start',
		speaker: 'narrator',
		text: 'Giữa tâm bão khủng hoảng công ty, vợ bạn đưa đơn ly hôn. "Em không thể chịu đựng sự vô tâm của anh thêm một ngày nào nữa."',
		textVi:
			'Giữa tâm bão khủng hoảng công ty, vợ bạn đưa đơn ly hôn. "Em không thể chịu đựng sự vô tâm của anh thêm một ngày nào nữa."',
		textEn:
			'Amidst company crisis, wife files for divorce. "I can\'t stand your indifference one more day."',
		choices: [
			{
				id: 'choice_divorce_sign',
				text: 'Ký đơn: Chia tài sản (Money / 2, Stress +3)',
				textVi: 'Ký đơn: Chia tài sản (Money / 2, Stress +3)',
				textEn: 'Sign: Split assets (Money / 2, Stress +3)',
				effects: [
					{ stat: 'money', value: -10000000000 }, // Approximate half
					{ stat: 'stress', value: 3 },
				],
				next: 'ch8_recall_reply',
			},
			{
				id: 'choice_divorce_beg',
				text: 'Van xin: Anh sẽ thay đổi (Humanity -2, Chance?)',
				textVi: 'Van xin: Anh sẽ thay đổi (Humanity -2, Chance?)',
				textEn: 'Beg: I will change (Humanity -2, Chance?)',
				effects: [{ stat: 'humanity', value: -2 }],
				next: 'ch8_recall_reply',
			},
		],
	},
	ch8_recall_reply: {
		id: 'ch8_recall_reply',
		speaker: 'player',
		text: 'Bạn sẽ làm gì trước áp lực này?',
		textVi: 'Bạn sẽ làm gì trước áp lực này?',
		textEn: 'What will you do under this pressure?',
		choices: [
			{
				id: 'choice_argue_shareholder',
				text: 'Nhưng đó là sinh mạng con người!',
				textVi: 'Nhưng đó là sinh mạng con người!',
				textEn: 'But those are human lives!',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch8_recall_flashback',
			},
			{
				id: 'choice_listen_shareholder',
				text: '(Im lặng suy nghĩ về con số)',
				textVi: '(Im lặng suy nghĩ về con số)',
				textEn: '(Silently think about the numbers)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch8_recall_flashback',
			},
		],
	},
	ch8_recall_flashback: {
		id: 'ch8_recall_flashback',
		speaker: 'narrator',
		text: 'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textVi:
			'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textEn:
			'Ghost of past surged. You saw father years ago, sitting on stone steps, smoking with soulless eyes.',
		next: 'ch8_flashback_voice',
	},
	ch8_flashback_voice: {
		id: 'ch8_flashback_voice',
		speaker: 'boQ',
		text: '(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textVi:
			'(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textEn:
			'(Echoing) "I fell due to haste, due to concealment... Don\'t be like me."',
		next: 'ch8_recall_realization',
	},
	ch8_recall_realization: {
		id: 'ch8_recall_realization',
		speaker: 'player',
		text: '(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textVi:
			'(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textEn:
			'(Thinking) I am standing at the same crossroads as Father years ago. Same script, different scale. Repeat the Loop or Break the curse?',
		next: 'ch8_recall_choice',
	},
	ch8_recall_choice: {
		id: 'ch8_recall_choice',
		speaker: 'narrator',
		text: 'Lựa chọn sinh tử. Quyết định này sẽ định hình cả cuộc đời bạn.',
		textVi: 'Lựa chọn sinh tử. Quyết định này sẽ định hình cả cuộc đời bạn.',
		textEn: 'Life or death choice. This decision will shape your entire life.',
		choices: [
			{
				id: 'choice_recall',
				text: 'Thu hồi toàn bộ - Nghe lương tâm (Canon/True Ending)',
				textVi: 'Thu hồi toàn bộ - Nghe lương tâm (Canon/True Ending)',
				textEn: 'Full Recall - Follow Conscience (Canon/True Ending)',
				condition: { type: 'stat', key: 'humanity', operator: '>=', value: 40 },
				effects: [
					{ stat: 'humanity', value: 3 },
					{ stat: 'vision', value: 1 },
				],
				next: 'ch8_recall_action',
			},
			{
				id: 'choice_silent_patch',
				text: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textVi: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textEn: 'Silent Patch - Follow Shareholders (Machine Ending)',
				effects: [
					{ stat: 'steelMind', value: 3 },
					{ stat: 'humanity', value: -3 },
				],
				next: 'ch8_machine_ending',
			},
		],
	},
	// 8.3 Rebirth
	ch8_recall_action: {
		id: 'ch8_recall_action',
		speaker: 'narrator',
		text: 'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textVi:
			'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textEn:
			'Press conference. Bowed in apology. Published buggy source code. 100% compensation.',
		next: 'ch8_final_commit',
	},
	ch8_final_commit: {
		id: 'ch8_final_commit',
		speaker: 'narrator',
		text: 'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textVi:
			'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textEn:
			'Final Commit: You stayed up all night, coding the patch yourself. Commit message: "Fix bug, heal soul". The most beautiful line of code in your life.',
		next: 'ch8_ipo_start',
	},

	// NEW: IPO Event
	ch8_ipo_start: {
		id: 'ch8_ipo_start',
		speaker: 'narrator',
		text: 'Công ty IPO thành công rực rỡ. Định giá Unicorn. Bạn trở thành tỷ phú đô la.',
		textVi:
			'Công ty IPO thành công rực rỡ. Định giá Unicorn. Bạn trở thành tỷ phú đô la.',
		textEn:
			'Company IPO successful. Unicorn valuation. You became a billionaire.',
		effects: [{ stat: 'money', value: 100000000000 }],
		next: 'ch8_rebirth_1',
	},

	// 8.2b Machine Ending (Alternative)
	ch8_machine_ending: {
		id: 'ch8_machine_ending',
		speaker: 'narrator',
		text: 'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textVi:
			'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textEn:
			"You chose silence. Silent patch. Kept money, kept power. Repeated Father's loop. You became The Machine.",
		next: 'ch9_billionaire_1',
	},

	// 8.3 Rebirth
	ch8_rebirth_1: {
		id: 'ch8_rebirth_1',
		speaker: 'narrator',
		text: 'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textVi:
			'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textEn:
			'Stocks crashed. Mocked. But then, clients trusted: "He doesn\'t lie".',
		next: 'ch8_donate_uni_start',
	},

	// NEW: Donate Uni Event
	ch8_donate_uni_start: {
		id: 'ch8_donate_uni_start',
		speaker: 'player',
		text: '(Suy nghĩ) Trường đại học cũ kêu gọi tài trợ xây phòng Lab AI. Bạn muốn đóng góp 5 tỷ.',
		textVi:
			'(Suy nghĩ) Trường đại học cũ kêu gọi tài trợ xây phòng Lab AI. Bạn muốn đóng góp 5 tỷ.',
		textEn:
			'(Thinking) Old university asking for AI Lab funding. You want to donate 5 billion.',
		choices: [
			{
				id: 'choice_donate_uni_give',
				text: 'Tài trợ: Ươm mầm tài năng (-5B, Vision +1)',
				textVi: 'Tài trợ: Ươm mầm tài năng (-5B, Vision +1)',
				textEn: 'Donate: Nurture talent (-5B, Vision +1)',
				effects: [
					{ stat: 'money', value: -5000000000 },
					{ stat: 'vision', value: 1 },
				],
				next: 'ch8_donate_uni_give',
			},
			{
				id: 'choice_donate_uni_skip',
				text: 'Giữ lại tái thiết công ty: Cần vốn (Money +0)',
				textVi: 'Giữ lại tái thiết công ty: Cần vốn (Money +0)',
				textEn: 'Keep to rebuild: Need capital (Money +0)',
				next: 'ch8_rebirth_2',
			},
		],
	},
	ch8_donate_uni_give: {
		id: 'ch8_donate_uni_give',
		speaker: 'narrator',
		text: 'Trường đại học vinh danh bạn. Sinh viên có thêm nguồn lực để nghiên cứu.',
		textVi:
			'Trường đại học vinh danh bạn. Sinh viên có thêm nguồn lực để nghiên cứu.',
		textEn: 'University honors you. Students have resources for research.',
		next: 'ch8_rebirth_2',
	},
	ch8_rebirth_2: {
		id: 'ch8_rebirth_2',
		speaker: 'narrator',
		text: 'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textVi:
			'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textEn:
			'US, Japan markets opened. Victory by Integrity. Family curse broken.',
		next: 'ch9_billionaire_1',
	},
};
