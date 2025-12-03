// ==========================================
// CHAPTER 8: THE BLACK SWAN (THIÊN NGA ĐEN)
// Timeline: 40-52 tuổi
// Theme: Đột phá, Rủi ro và Sự trở lại
// ==========================================

import {
	Chapter8DialogueID,
	Chapter8SceneID,
	Chapter8TodoID,
	Chapter9DialogueID,
	ConditionType,
	FlagID,
	Operator,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

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
			id: Chapter8SceneID.CH8_AI,
			name: 'Canh bạc AI',
			nameVi: '40-45 tuổi: Canh bạc AI & Robot',
			nameEn: 'Age 40-45: AI Gamble & Robots',
			background: '/assets/sprites/backgrounds/server_room_future.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: 'ch8_intro', // Changed from ch8_ai_1
		},
		{
			id: Chapter8SceneID.CH8_RECALL,
			name: 'The Recall',
			nameVi: '45-48 tuổi: The Recall (Cao trào)',
			nameEn: 'Age 45-48: The Recall (Climax)',
			background: '/assets/sprites/backgrounds/press_conference.png',
			music: '/assets/audio/music/chapters/ch8_crisis.mp3',
			dialogueStart: Chapter8DialogueID.CH8_RECALL_1,
		},
		{
			id: Chapter8SceneID.CH8_REBIRTH,
			name: 'Phục sinh',
			nameVi: '50-52 tuổi: Phục sinh (Resurrection)',
			nameEn: 'Age 50-52: Resurrection',
			background: '/assets/sprites/backgrounds/skyscraper_view.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: Chapter8DialogueID.CH8_REBIRTH_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter8TodoID.CH8_TODO_READ_AI,
				text: 'Đọc tài liệu nghiên cứu AI',
				textVi: 'Đọc tài liệu nghiên cứu AI',
				textEn: 'Read AI research papers',
				effects: [{ stat: StatID.VISION, value: 3 }], // Knowledge
			},
			{
				id: 'ch8_todo_meet_gov',
				text: 'Gặp gỡ quan chức chính phủ',
				textVi: 'Gặp gỡ quan chức chính phủ',
				textEn: 'Meet government officials',
				effects: [{ stat: StatID.VISION, value: 3 }], // Reputation
				cost: { stress: 2 },
			},

			{
				id: 'ch8_todo_ethics',
				text: 'Đối mặt với tình huống khó xử về đạo đức',
				textVi: 'Đối mặt với tình huống khó xử về đạo đức',
				textEn: 'Face ethical dilemma',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
			},
			{
				id: 'ch8_todo_visit_dad',
				text: 'Vào viện thăm Bố',
				textVi: 'Vào viện thăm Bố',
				textEn: 'Visit Dad in hospital',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch8_todo_ignore_press',
				text: 'Phớt lờ báo chí tiêu cực',
				textVi: 'Phớt lờ báo chí tiêu cực',
				textEn: 'Ignore negative press',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
			},
			{
				id: 'ch8_todo_press_conf',
				text: 'Tổ chức họp báo',
				textVi: 'Tổ chức họp báo',
				textEn: 'Hold press conference',
				effects: [{ stat: StatID.VISION, value: 3 }], // Reputation
				cost: { stress: 5 },
			},
			{
				id: 'ch8_todo_fire_inspector',
				text: 'Sa thải thanh tra an toàn',
				textVi: 'Sa thải thanh tra an toàn',
				textEn: 'Fire safety inspector',
				effects: [{ stat: StatID.VISION, value: 3 }], // Speed
				cost: { stress: 3 }, // Risk High
			},

			{
				id: 'ch8_todo_meditate_life',
				text: 'Thiền định về ý nghĩa cuộc sống',
				textVi: 'Thiền định về ý nghĩa cuộc sống',
				textEn: 'Meditate on life meaning',
				effects: [{ stat: StatID.VISION, value: 3 }], // Wisdom
			},
			{
				id: 'ch8_todo_review_core',
				text: 'Review mã nguồn lõi của AI',
				textVi: 'Review mã nguồn lõi của AI',
				textEn: 'Review AI core source code',
				effects: [{ stat: StatID.VISION, value: 3 }], // Skill Coding
			},
			{
				id: 'ch8_todo_family_time',
				text: 'Dành thời gian cho con cái đã lớn',
				textVi: 'Dành thời gian cho con cái đã lớn',
				textEn: 'Time with grown-up kids',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},

			{
				id: 'ch8_todo_long_leave',
				text: 'Nghỉ phép dài hạn',
				textVi: 'Nghỉ phép dài hạn',
				textEn: 'Long leave',
				reward: { health: 5 },
				cost: { vision: 2 }, // Career -
			},
			{
				id: 'ch8_todo_write_memoir',
				text: 'Viết hồi ký',
				textVi: 'Viết hồi ký',
				textEn: 'Write memoir',
				effects: [{ stat: StatID.VISION, value: 3 }], // Legacy
			},
			{
				id: 'ch8_todo_spy_cofounder',
				text: 'Thuê thám tử theo dõi Co-founder',
				textVi: 'Thuê thám tử theo dõi Co-founder',
				textEn: 'Hire PI to spy on Co-founder',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { money: 100000000, humanity: -3 }, // Increased Money cost
			},
			{
				id: 'ch8_todo_marriage_counseling',
				text: 'Đi tư vấn hôn nhân',
				textVi: 'Đi tư vấn hôn nhân',
				textEn: 'Marriage counseling',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
				cost: { money: 50000000 }, // Increased Money cost
			},
			{
				id: 'ch8_todo_watch_news',
				text: 'Xem tin tức về AI cướp việc làm',
				textVi: 'Xem tin tức về AI cướp việc làm',
				textEn: 'Watch news about AI taking jobs',
				cost: { stress: 3 },
			},

			{
				id: 'ch8_todo_sleeping_pill',
				text: 'Uống thuốc ngủ',
				textVi: 'Uống thuốc ngủ',
				textEn: 'Take sleeping pills',
				cost: { health: 3 },
			},
			{
				id: 'ch8_todo_stare_button',
				text: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textVi: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textEn: 'Stare at "Recall" button',
				cost: { stress: 5 },
			},
			{
				id: 'ch8_todo_remember_dad',
				text: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textVi: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textEn: 'Remember Dad\'s "Stack Overflow" incident',
				effects: [{ stat: StatID.VISION, value: 3 }], // Wisdom
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
						effects: [{ stat: StatID.VISION, value: 3 }], // Harmony
					},
					{
						id: 'ch8_dream_robot_off',
						text: 'Tắt nguồn nó',
						textVi: 'Tắt nguồn nó',
						textEn: 'Turn it off',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }], // Fear
					},
					{
						id: 'ch8_dream_robot_ask',
						text: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textVi: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textEn: 'Ask: "Do you have a soul?"',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }], // Wisdom
					},
					{
						id: 'ch8_dream_robot_order',
						text: 'Ra lệnh cho nó',
						textVi: 'Ra lệnh cho nó',
						textEn: 'Order it',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Control
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
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch8_dream_court_defend',
						text: 'Biện hộ',
						textVi: 'Biện hộ',
						textEn: 'Defend',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }], // Reason
					},
					{
						id: 'ch8_dream_court_blame',
						text: 'Đổ lỗi cho người khác',
						textVi: 'Đổ lỗi cho người khác',
						textEn: 'Blame others',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -3 }], // Cowardice
					},
					{
						id: 'ch8_dream_court_silent',
						text: 'Im lặng',
						textVi: 'Im lặng',
						textEn: 'Silence',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }], // Stoic
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
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch8_dream_dad_stop',
						text: 'Bảo bố dừng lại',
						textVi: 'Bảo bố dừng lại',
						textEn: 'Tell him to stop',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }], // Warning
					},
					{
						id: 'ch8_dream_dad_watch',
						text: 'Đứng nhìn từ xa',
						textVi: 'Đứng nhìn từ xa',
						textEn: 'Watch from afar',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }], // Nostalgia
					},
					{
						id: 'ch8_dream_dad_destroy',
						text: 'Phá cây cầu',
						textVi: 'Phá cây cầu',
						textEn: 'Destroy bridge',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Obsession
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
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch8_dream_butterfly_watch',
						text: 'Ngắm nhìn nó',
						textVi: 'Ngắm nhìn nó',
						textEn: 'Watch it',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }], // Wisdom
					},
					{
						id: 'ch8_dream_butterfly_catch',
						text: 'Bắt nó ép vào sổ',
						textVi: 'Bắt nó ép vào sổ',
						textEn: 'Catch and press it',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }], // Control
					},
					{
						id: 'ch8_dream_butterfly_fly',
						text: 'Biến thành bướm bay đi',
						textVi: 'Biến thành bướm bay đi',
						textEn: 'Turn into butterfly and fly',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }], // Freedom
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
						effects: [{ stat: StatID.VISION, value: -5 }], // Redo
					},
					{
						id: 'ch8_dream_reset_ignore',
						text: 'Không bấm',
						textVi: 'Không bấm',
						textEn: "Don't press",
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Accept past
					},
					{
						id: 'ch8_dream_reset_destroy',
						text: 'Phá hủy cái nút',
						textVi: 'Phá hủy cái nút',
						textEn: 'Destroy button',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch8_dream_reset_stare',
						text: 'Đứng nhìn mãi',
						textVi: 'Đứng nhìn mãi',
						textEn: 'Stare at it',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }], // Hesitation
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch8_reflect_sleep_1',
			text: 'Đột phá hay chết... áp lực như núi đè.',
			textVi: 'Đột phá hay chết... áp lực như núi đè.',
			textEn: 'Breakthrough or die... pressure like mountain.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch8_reflect_sleep_1_rest',
					text: 'Nghỉ để tỉnh táo',
					textVi: 'Nghỉ để tỉnh táo',
					textEn: 'Rest to be clear',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch8_reflect_sleep_1_pressure',
					text: 'Áp lực quá lớn',
					textVi: 'Áp lực quá lớn',
					textEn: 'Too much pressure',
					next: '',
					effects: [{ stat: StatID.STRESS, value: 3 }],
				},
			],
		},
		{
			id: 'ch8_reflect_success_1',
			text: 'Đánh cược tất cả... không còn đường lui.',
			textVi: 'Đánh cược tất cả... không còn đường lui.',
			textEn: 'Betting everything... no way back.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch8_reflect_success_1_determined',
					text: 'Quyết tâm đi đến cùng',
					textVi: 'Quyết tâm đi đến cùng',
					textEn: 'Determined to the end',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 5 }],
				},
				{
					id: 'ch8_reflect_success_1_scared',
					text: 'Nhưng cũng sợ thất bại',
					textVi: 'Nhưng cũng sợ thất bại',
					textEn: 'But also fear failure',
					next: '',
					effects: [{ stat: StatID.STRESS, value: 3 }],
				},
			],
		},
		{
			id: 'ch8_reflect_sleep_2',
			text: 'Fundraising, coding, marketing... không ngừng nghỉ được.',
			textVi: 'Fundraising, coding, marketing... không ngừng nghỉ được.',
			textEn: "Fundraising, coding, marketing... can't stop.",
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch8_reflect_sleep_2_push',
					text: 'Tiếp tục cố gắng',
					textVi: 'Tiếp tục cố gắng',
					textEn: 'Keep pushing',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 3 }],
				},
				{
					id: 'ch8_reflect_sleep_2_need',
					text: 'Nhưng cơ thể cần nghỉ',
					textVi: 'Nhưng cơ thể cần nghỉ',
					textEn: 'But body needs rest',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
				},
			],
		},
		{
			id: 'ch8_reflect_success_2',
			text: 'Từ tro tàn đứng dậy... Phoenix sẽ bay cao.',
			textVi: 'Từ tro tàn đứng dậy... Phoenix sẽ bay cao.',
			textEn: 'Rising from ashes... Phoenix will fly high.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch8_reflect_success_2_believe',
					text: 'Tin vào bản thân',
					textVi: 'Tin vào bản thân',
					textEn: 'Believe in myself',
					next: '',
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch8_reflect_success_2_hope',
					text: 'Hy vọng vào tương lai',
					textVi: 'Hy vọng vào tương lai',
					textEn: 'Hope for future',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
			],
		},
		{
			id: 'ch8_reflect_sleep_3',
			text: 'Thành công đang đến gần... nhưng còn nhiều việc phải làm.',
			textVi: 'Thành công đang đến gần... nhưng còn nhiều việc phải làm.',
			textEn: 'Success getting closer... but still much to do.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch8_reflect_sleep_3_soon',
					text: 'Sắp đến đích rồi',
					textVi: 'Sắp đến đích rồi',
					textEn: 'Almost there',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch8_reflect_sleep_3_rest',
					text: 'Nghỉ trước đã',
					textVi: 'Nghỉ trước đã',
					textEn: 'Rest first',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
				},
			],
		},
	],
};

export const chapter8Dialogues: Record<Chapter8DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter8DialogueID.CH8_END]: {
		speaker: 'narrator',
		text: 'Cơn bão qua đi, để lại những tàn tích. Bạn đứng giữa văn phòng trống rỗng, nhìn ra thành phố lên đèn. Bạn đã chiến thắng, nhưng bạn còn lại gì?',
		textVi:
			'Cơn bão qua đi, để lại những tàn tích. Bạn đứng giữa văn phòng trống rỗng, nhìn ra thành phố lên đèn. Bạn đã chiến thắng, nhưng bạn còn lại gì?',
		textEn:
			'Storm passed, leaving ruins. You stand in empty office, looking at city lights. You won, but what is left?',
		next: Chapter9DialogueID.CH9_INTRO,
	},

	// 8.1 AI Gamble
	[Chapter8DialogueID.CH8_AI_1]: {
		speaker: 'narrator',
		text: '40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textVi:
			'40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textEn:
			'40 years old. AI Tsunami hit. ChatGPT, Copilot crushed traditional Outsource. "Innovate or Die".',
		next: Chapter8DialogueID.CH8_STRATEGY_AI,
	},
	[Chapter8DialogueID.CH8_AI_VISION]: {
		speaker: 'narrator',
		text: 'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textVi:
			'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textEn:
			'Saw opportunity in Care Robots. Not for money, but for meaning: Help elderly live with dignity.',
		next: Chapter8DialogueID.CH8_BUDGET_START,
	},

	// NEW: Budget Event
	[Chapter8DialogueID.CH8_BUDGET_START]: {
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
				effects: [
					{ stat: StatID.MONEY, value: -10000000000 },
					{
						stat: StatID.VISION,
						value: 20,
					},
				],
				next: Chapter8DialogueID.CH8_BUDGET_APPROVE,
			},
			{
				id: 'choice_budget_cut',
				text: 'Cắt giảm: Tận dụng linh kiện cũ (-5B)',
				textVi: 'Cắt giảm: Tận dụng linh kiện cũ (-5B)',
				textEn: 'Cut: Reuse old parts (-5B)',
				effects: [
					{ stat: StatID.MONEY, value: -5000000000 },
					{ stat: StatID.VISION, value: -3 },
				],
				next: Chapter8DialogueID.CH8_BUDGET_FAIL,
			},
		],
	},
	[Chapter8DialogueID.CH8_BUDGET_APPROVE]: {
		speaker: 'narrator',
		text: 'Ngân sách được thông qua. Các kỹ sư làm việc hăng say với thiết bị mới nhất.',
		textVi:
			'Ngân sách được thông qua. Các kỹ sư làm việc hăng say với thiết bị mới nhất.',
		textEn: 'Budget approved. Engineers work passionately with latest gear.',
		next: Chapter8DialogueID.CH8_BETRAYAL_START, // Redirect to Betrayal
	},
	[Chapter8DialogueID.CH8_BUDGET_FAIL]: {
		speaker: 'narrator',
		text: 'Linh kiện cũ gây ra lỗi quá nhiệt. Robot thử nghiệm phát nổ trong phòng Lab. Cổ phiếu lao dốc không phanh. Đối tác rút vốn. Bạn mất 100 tỷ để đền bù và khắc phục.',
		textVi:
			'Linh kiện cũ gây ra lỗi quá nhiệt. Robot thử nghiệm phát nổ trong phòng Lab. Cổ phiếu lao dốc không phanh. Đối tác rút vốn. Bạn mất 100 tỷ để đền bù và khắc phục.',
		textEn:
			'Old parts caused overheating. Prototype robot exploded in Lab. Stocks plummeted. Partners withdrew capital. You lost 100 billion in compensation and repairs.',
		effects: [{ stat: StatID.MONEY, value: -100000000000 }],
		next: Chapter8DialogueID.CH8_BETRAYAL_START, // Redirect to Betrayal
	},

	// NEW: Co-founder Betrayal
	[Chapter8DialogueID.CH8_BETRAYAL_START]: {
		speaker: 'narrator',
		text: 'Tin mật báo: Co-founder của bạn đang bí mật đàm phán bán công nghệ lõi cho đối thủ.',
		textVi:
			'Tin mật báo: Co-founder của bạn đang bí mật đàm phán bán công nghệ lõi cho đối thủ.',
		textEn:
			'Intel: Your Co-founder is secretly negotiating to sell core tech to competitor.',
		choices: [
			{
				id: 'choice_betrayal_fight',
				text: 'Kiện ra tòa: Khô máu (Money -5B, Stress +5)',
				textVi: 'Kiện ra tòa: Khô máu (Money -5B, Stress +5)',
				textEn: 'Sue them: All out war (Money -5B, Stress +5)',
				effects: [
					{ stat: StatID.MONEY, value: -5000000000 },
					{ stat: StatID.STRESS, value: 5 },
				],
				next: Chapter8DialogueID.CH8_AI_BET,
			},
			{
				id: 'choice_betrayal_negotiate',
				text: 'Thỏa hiệp: Chia lợi nhuận (Vision -5)',
				textVi: 'Thỏa hiệp: Chia lợi nhuận (Vision -5)',
				textEn: 'Negotiate: Share profit (Vision -5)',
				effects: [
					{ stat: StatID.MONEY, value: 10000000000 },
					{ stat: StatID.VISION, value: -5 },
				],
				next: Chapter8DialogueID.CH8_AI_BET,
			},
		],
	},
	[Chapter8DialogueID.CH8_AI_BET]: {
		speaker: 'narrator',
		text: 'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textVi:
			'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textEn:
			'All-in. Government loans, top professor partnerships. Final gamble to become a Unicorn.',
		effects: [{ stat: StatID.VISION, value: 5 }],
		next: Chapter8DialogueID.CH8_PRISON_CHECK, // Redirect to Prison Check
	},

	// NEW: Lawsuit/Prison Check
	[Chapter8DialogueID.CH8_PRISON_CHECK]: {
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
					type: ConditionType.FLAG,
					key: FlagID.CHOICE_FAKE_DATA, // From Ch 6
					operator: Operator.EQUAL,
					value: true,
				},
				next: Chapter8DialogueID.CH8_PRISON_RISK,
			},
			{
				id: 'choice_prison_pass',
				text: 'Hồ sơ sạch: Được duyệt',
				textVi: 'Hồ sơ sạch: Được duyệt',
				textEn: 'Clean profile: Approved',
				next: Chapter8DialogueID.CH8_RECALL_1,
			},
		],
	},
	[Chapter8DialogueID.CH8_PRISON_RISK]: {
		speaker: 'narrator',
		text: 'Phát hiện gian lận số liệu trong quá khứ (Vụ án Chapter 6). Bạn bị điều tra hình sự. Cổ phiếu bị đình chỉ giao dịch.',
		textVi:
			'Phát hiện gian lận số liệu trong quá khứ (Vụ án Chapter 6). Bạn bị điều tra hình sự. Cổ phiếu bị đình chỉ giao dịch.',
		textEn:
			'Past data fraud detected (Chapter 6 case). Criminal investigation. Stock trading suspended.',
		effects: [
			{ stat: StatID.MONEY, value: -100000000000 }, // Huge fine
			{ stat: StatID.VISION, value: -10 },
			{ stat: StatID.STRESS, value: 10 },
		],
		next: Chapter8DialogueID.CH8_RECALL_1, // Still proceed but crippled
	},

	// 8.2 The Recall
	[Chapter8DialogueID.CH8_RECALL_1]: {
		speaker: 'narrator',
		text: '45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textVi:
			'45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textEn:
			'Age 45-48. Robot V1 launched. Sold out. Stock hit ceiling. You were winning. You were rising.',
		next: Chapter8DialogueID.CH8_RECALL_REPORT,
	},
	[Chapter8DialogueID.CH8_RECALL_REPORT]: {
		speaker: 'narrator',
		text: 'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textVi:
			'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textEn:
			'Internal report landed on desk: In rare edge cases, AI hallucinates and robot may clamp elderly hands causing injury. Rate: 1%.',
		next: Chapter8DialogueID.CH8_ETHICS_START,
	},

	// NEW: Ethics Event
	[Chapter8DialogueID.CH8_ETHICS_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Báo cáo lỗi khiến bạn lo ngại. Bạn muốn thuê một Giám đốc Đạo đức AI để kiểm soát rủi ro. Chi phí 2 tỷ/năm.',
		textVi:
			'(Suy nghĩ) Báo cáo lỗi khiến bạn lo ngại. Bạn muốn thuê một Giám đốc Đạo đức AI để kiểm soát rủi ro. Chi phí 2 tỷ/năm.',
		textEn:
			'(Thinking) Bug report worries you. Want to hire AI Ethics Director to control risk. Cost 2 billion/year.',
		choices: [
			{
				id: 'choice_ethics_hire',
				text: 'Thuê ngay: An toàn là trên hết (-2B)',
				textVi: 'Thuê ngay: An toàn là trên hết (-2B)',
				textEn: 'Hire now: Safety first (-2B)',
				effects: [
					{ stat: StatID.MONEY, value: -2000000000 },
					{ stat: StatID.VISION, value: 5 },
				],
				next: Chapter8DialogueID.CH8_ETHICS_HIRE,
			},
			{
				id: 'choice_ethics_nephew',
				text: 'Thuê người quen: Thằng cháu mới ra trường (-200M)',
				textVi: 'Thuê người quen: Thằng cháu mới ra trường (-200M)',
				textEn: 'Hire relative: Nephew just graduated (-200M)',
				effects: [
					{ stat: StatID.MONEY, value: -200000000 },
					{
						stat: StatID.VISION,
						value: -5,
					},
				],
				next: Chapter8DialogueID.CH8_ETHICS_NEPHEW,
			},
		],
	},
	[Chapter8DialogueID.CH8_ETHICS_HIRE]: {
		speaker: 'narrator',
		text: 'Giám đốc Đạo đức đưa ra những cảnh báo quan trọng. Bạn cảm thấy yên tâm hơn.',
		textVi:
			'Giám đốc Đạo đức đưa ra những cảnh báo quan trọng. Bạn cảm thấy yên tâm hơn.',
		textEn: 'Ethics Director gave important warnings. You feel more secure.',
		next: Chapter8DialogueID.CH8_RECALL_PRESSURE,
	},
	[Chapter8DialogueID.CH8_ETHICS_NEPHEW]: {
		speaker: 'narrator',
		text: 'Thằng cháu làm việc hời hợt, bỏ qua các cảnh báo an toàn. Một scandal lộ dữ liệu xảy ra trên quy mô toàn cầu. Google và Apple gỡ ứng dụng. Công ty bị phạt 20 tỷ và mất uy tín nghiêm trọng.',
		textVi:
			'Thằng cháu làm việc hời hợt, bỏ qua các cảnh báo an toàn. Một scandal lộ dữ liệu xảy ra trên quy mô toàn cầu. Google và Apple gỡ ứng dụng. Công ty bị phạt 20 tỷ và mất uy tín nghiêm trọng.',
		textEn:
			'Nephew worked carelessly, ignored safety warnings. Global data leak scandal. Google and Apple delisted app. Company fined 20 billion and lost serious reputation.',
		effects: [
			{ stat: StatID.MONEY, value: -20000000000 },
			{ stat: StatID.VISION, value: -20 },
		],
		next: Chapter8DialogueID.CH8_RECALL_PRESSURE,
	},
	[Chapter8DialogueID.CH8_RECALL_PRESSURE]: {
		speaker: 'npc',
		text: 'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textVi:
			'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textEn:
			'Shareholder screamed: "Are you crazy? 1% is acceptable margin! Silent Patch it. Recall now is suicide! Do you want to lose everything like your dad?"',
		next: Chapter8DialogueID.CH8_LAWYER_START,
	},

	// NEW: Lawyer Event
	[Chapter8DialogueID.CH8_LAWYER_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Cổ đông gây áp lực. Bạn cần tư vấn pháp lý về trách nhiệm nếu xảy ra sự cố.',
		textVi:
			'(Suy nghĩ) Cổ đông gây áp lực. Bạn cần tư vấn pháp lý về trách nhiệm nếu xảy ra sự cố.',
		textEn:
			'(Thinking) Shareholders pressure. Need legal advice on liability if incident occurs.',
		choices: [
			{
				id: 'choice_lawyer_hire',
				text: 'Thuê luật sư: Bảo vệ bản thân (-500M)',
				textVi: 'Thuê luật sư: Bảo vệ bản thân (-500M)',
				textEn: 'Hire lawyer: Protect self (-500M)',
				effects: [
					{ stat: StatID.MONEY, value: -500000000 },
					{ stat: StatID.STEELMIND, value: 3 },
				],
				next: Chapter8DialogueID.CH8_RECALL_REPLY,
			},
			{
				id: 'choice_lawyer_skip',
				text: 'Tự chịu trách nhiệm: Mình làm mình chịu ',
				textVi: 'Tự chịu trách nhiệm: Mình làm mình chịu ',
				textEn: 'Self-responsibility: I own it ',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter8DialogueID.CH8_LAWYER_HIRE,
			},
		],
	},
	[Chapter8DialogueID.CH8_LAWYER_HIRE]: {
		speaker: 'narrator',
		text: 'Luật sư tư vấn các phương án bảo vệ tài sản và danh dự.',
		textVi: 'Luật sư tư vấn các phương án bảo vệ tài sản và danh dự.',
		textEn: 'Lawyer advised on asset and reputation protection.',
		next: Chapter8DialogueID.CH8_DIVORCE_START, // Redirect to Divorce
	},

	// NEW: Divorce Crisis
	[Chapter8DialogueID.CH8_DIVORCE_START]: {
		speaker: 'narrator',
		text: 'Giữa tâm bão khủng hoảng công ty, vợ bạn đưa đơn ly hôn. "Em không thể chịu đựng sự vô tâm của anh thêm một ngày nào nữa."',
		textVi:
			'Giữa tâm bão khủng hoảng công ty, vợ bạn đưa đơn ly hôn. "Em không thể chịu đựng sự vô tâm của anh thêm một ngày nào nữa."',
		textEn:
			'Amidst company crisis, wife files for divorce. "I can\'t stand your indifference one more day."',
		choices: [
			{
				id: 'choice_divorce_sign',
				text: 'Ký đơn: Chia tài sản',
				textVi: 'Ký đơn: Chia tài sản',
				textEn: 'Sign: Split assets',
				effects: [
					{ stat: StatID.MONEY, value: -10000000000 }, // Approximate half
					{ stat: StatID.STRESS, value: 10 },
				],
				next: Chapter8DialogueID.CH8_RECALL_REPLY,
			},
			{
				id: 'choice_divorce_beg',
				text: 'Van xin: Anh sẽ thay đổi',
				textVi: 'Van xin: Anh sẽ thay đổi',
				textEn: 'Beg: I will change',
				effects: [{ stat: StatID.HUMANITY, value: -5 }],
				next: Chapter8DialogueID.CH8_RECALL_REPLY,
			},
		],
	},
	[Chapter8DialogueID.CH8_RECALL_REPLY]: {
		speaker: 'player',
		text: 'Bạn sẽ làm gì trước áp lực từ cổ đông?',
		textVi: 'Bạn sẽ làm gì trước áp lực từ cổ đông?',
		textEn: 'What will you do under shareholder pressure?',
		choices: [
			{
				id: 'choice_argue_shareholder',
				text: 'Nhưng đó là sinh mạng con người!',
				textVi: 'Nhưng đó là sinh mạng con người!',
				textEn: 'But those are human lives!',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter8DialogueID.CH8_RECALL_FLASHBACK,
			},
			{
				id: 'choice_listen_shareholder',
				text: '(Im lặng suy nghĩ về con số)',
				textVi: '(Im lặng suy nghĩ về con số)',
				textEn: '(Silently think about the numbers)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter8DialogueID.CH8_RECALL_FLASHBACK,
			},
		],
	},
	[Chapter8DialogueID.CH8_RECALL_FLASHBACK]: {
		speaker: 'narrator',
		text: 'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textVi:
			'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textEn:
			'Ghost of past surged. You saw father years ago, sitting on stone steps, smoking with soulless eyes.',
		next: Chapter8DialogueID.CH8_FLASHBACK_VOICE,
	},
	[Chapter8DialogueID.CH8_FLASHBACK_VOICE]: {
		speaker: 'boQ',
		text: '(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textVi:
			'(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textEn:
			'(Echoing) "I fell due to haste, due to concealment... Don\'t be like me."',
		next: Chapter8DialogueID.CH8_RECALL_REALIZATION,
	},
	[Chapter8DialogueID.CH8_RECALL_REALIZATION]: {
		speaker: 'player',
		text: '(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textVi:
			'(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textEn:
			'(Thinking) I am standing at the same crossroads as Father years ago. Same script, different scale. Repeat the Loop or Break the curse?',
		next: Chapter8DialogueID.CH8_RECALL_CHOICE,
	},
	[Chapter8DialogueID.CH8_RECALL_CHOICE]: {
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
				condition: {
					type: ConditionType.STAT,
					key: StatID.HUMANITY,
					operator: Operator.GTE,
					value: 40,
				},
				effects: [
					{ stat: StatID.HUMANITY, value: 10 },
					{ stat: StatID.VISION, value: 5 },
				],
				next: Chapter8DialogueID.CH8_RECALL_ACTION,
			},
			{
				id: 'choice_silent_patch',
				text: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textVi: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textEn: 'Silent Patch - Follow Shareholders (Machine Ending)',
				effects: [
					{ stat: StatID.STEELMIND, value: 10 },
					{ stat: StatID.HUMANITY, value: -10 },
				],
				next: Chapter8DialogueID.CH8_MACHINE_ENDING,
			},
		],
	},
	// 8.3 Rebirth
	[Chapter8DialogueID.CH8_RECALL_ACTION]: {
		speaker: 'narrator',
		text: 'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textVi:
			'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textEn:
			'Press conference. Bowed in apology. Published buggy source code. 100% compensation.',
		next: Chapter8DialogueID.CH8_FINAL_COMMIT,
	},
	[Chapter8DialogueID.CH8_FINAL_COMMIT]: {
		speaker: 'narrator',
		text: 'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textVi:
			'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textEn:
			'Final Commit: You stayed up all night, coding the patch yourself. Commit message: "Fix bug, heal soul". The most beautiful line of code in your life.',
		next: Chapter8DialogueID.CH8_IPO_START,
	},

	// NEW: IPO Event
	[Chapter8DialogueID.CH8_IPO_START]: {
		speaker: 'narrator',
		text: 'Công ty IPO thành công rực rỡ. Định giá Unicorn. Bạn trở thành tỷ phú đô la.',
		textVi:
			'Công ty IPO thành công rực rỡ. Định giá Unicorn. Bạn trở thành tỷ phú đô la.',
		textEn:
			'Company IPO successful. Unicorn valuation. You became a billionaire.',
		effects: [{ stat: StatID.MONEY, value: 100000000000 }],
		next: Chapter8DialogueID.CH8_REBIRTH_1,
	},

	// 8.2b Machine Ending (Alternative)
	[Chapter8DialogueID.CH8_MACHINE_ENDING]: {
		speaker: 'narrator',
		text: 'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textVi:
			'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textEn:
			"You chose silence. Silent patch. Kept money, kept power. Repeated Father's loop. You became The Machine.",
		next: Chapter9DialogueID.CH9_INTRO,
	},

	// 8.3 Rebirth
	[Chapter8DialogueID.CH8_REBIRTH_1]: {
		speaker: 'narrator',
		text: 'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textVi:
			'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textEn:
			'Stocks crashed. Mocked. But then, clients trusted: "He doesn\'t lie".',
		next: Chapter8DialogueID.CH8_DONATE_UNI_START,
	},

	// NEW: Donate Uni Event
	[Chapter8DialogueID.CH8_DONATE_UNI_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Trường đại học cũ kêu gọi tài trợ xây phòng Lab AI. Bạn muốn đóng góp 5 tỷ.',
		textVi:
			'(Suy nghĩ) Trường đại học cũ kêu gọi tài trợ xây phòng Lab AI. Bạn muốn đóng góp 5 tỷ.',
		textEn:
			'(Thinking) Old university asking for AI Lab funding. You want to donate 5 billion.',
		choices: [
			{
				id: 'choice_donate_uni_give',
				text: 'Tài trợ: Ươm mầm tài năng (-5B)',
				textVi: 'Tài trợ: Ươm mầm tài năng (-5B)',
				textEn: 'Donate: Nurture talent (-5B)',
				effects: [
					{ stat: StatID.MONEY, value: -5000000000 },
					{ stat: StatID.VISION, value: 15 },
				],
				next: Chapter8DialogueID.CH8_DONATE_UNI_GIVE,
			},
			{
				id: 'choice_donate_uni_skip',
				text: 'Giữ lại tái thiết công ty: Cần vốn',
				textVi: 'Giữ lại tái thiết công ty: Cần vốn',
				textEn: 'Keep to rebuild: Need capital',
				effects: [{ stat: StatID.STEELMIND, value: 15 }],
				next: Chapter8DialogueID.CH8_REBIRTH_2,
			},
		],
	},
	[Chapter8DialogueID.CH8_DONATE_UNI_GIVE]: {
		speaker: 'narrator',
		text: 'Trường đại học vinh danh bạn. Sinh viên có thêm nguồn lực để nghiên cứu.',
		textVi:
			'Trường đại học vinh danh bạn. Sinh viên có thêm nguồn lực để nghiên cứu.',
		textEn: 'University honors you. Students have resources for research.',
		next: Chapter8DialogueID.CH8_REBIRTH_2,
	},
	[Chapter8DialogueID.CH8_REBIRTH_2]: {
		speaker: 'narrator',
		text: 'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textVi:
			'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textEn:
			'US, Japan markets opened. Victory by Integrity. Family curse broken.',
		next: Chapter9DialogueID.CH9_INTRO,
	},

	// NEW: Developer Scenarios (CTO/Founder Strategy)
	[Chapter8DialogueID.CH8_STRATEGY_AI]: {
		speaker: 'narrator',
		text: 'Chiến lược AI cho 5 năm tới. Tập trung vào đâu?',
		textVi: 'Chiến lược AI cho 5 năm tới. Tập trung vào đâu?',
		textEn: 'AI Strategy for next 5 years. Focus where?',
		choices: [
			{
				id: 'ai_gen',
				text: 'Generative AI (LLM): Theo trend',
				textVi: 'Generative AI (LLM): Theo trend',
				textEn: 'Generative AI (LLM): Follow trend',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: -10000000000 },
				],
				next: Chapter8DialogueID.CH8_STRATEGY_ETHICS,
			},
			{
				id: 'ai_trad',
				text: 'Traditional AI (Predictive): Ứng dụng thực tế, an toàn',
				textVi: 'Traditional AI (Predictive): Ứng dụng thực tế, an toàn',
				textEn: 'Traditional AI (Predictive): Practical, safe',
				effects: [{ stat: StatID.MONEY, value: 5000000000 }],
				next: Chapter8DialogueID.CH8_STRATEGY_ETHICS,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_ETHICS]: {
		speaker: 'narrator',
		text: 'Áp lực ra mắt sản phẩm. Có nên bỏ qua quy trình kiểm duyệt đạo đức (AI Ethics)?',
		textVi:
			'Áp lực ra mắt sản phẩm. Có nên bỏ qua quy trình kiểm duyệt đạo đức (AI Ethics)?',
		textEn: 'Pressure to launch. Skip AI Ethics review?',
		choices: [
			{
				id: 'ethics_skip',
				text: 'Bỏ qua: Tốc độ là vua (Speed > Safety)',
				textVi: 'Bỏ qua: Tốc độ là vua (Speed > Safety)',
				textEn: 'Skip: Speed is King (Speed > Safety)',
				effects: [{ stat: StatID.VISION, value: -3 }], // Future risk
				next: Chapter8DialogueID.CH8_STRATEGY_LAYOFF,
			},
			{
				id: 'ethics_review',
				text: 'Kiểm duyệt kỹ: Chậm mà chắc (Safety > Speed)',
				textVi: 'Kiểm duyệt kỹ: Chậm mà chắc (Safety > Speed)',
				textEn: 'Strict review: Slow but sure (Safety > Speed)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter8DialogueID.CH8_STRATEGY_LAYOFF,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_LAYOFF]: {
		speaker: 'narrator',
		text: 'AI có thể thay thế 30% nhân sự Junior. Quyết định của bạn?',
		textVi: 'AI có thể thay thế 30% nhân sự Junior. Quyết định của bạn?',
		textEn: 'AI can replace 30% Junior staff. Your decision?',
		choices: [
			{
				id: 'layoff_replace',
				text: 'Sa thải: Tối ưu chi phí',
				textVi: 'Sa thải: Tối ưu chi phí',
				textEn: 'Layoff: Optimize cost',
				effects: [
					{ stat: StatID.MONEY, value: 5000000000 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
				next: Chapter8DialogueID.CH8_STRATEGY_GLOBAL,
			},
			{
				id: 'layoff_train',
				text: 'Đào tạo lại (Reskill): Biến họ thành AI Operator',
				textVi: 'Đào tạo lại (Reskill): Biến họ thành AI Operator',
				textEn: 'Reskill: Turn them into AI Operators',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: -2000000000 },
				],
				next: Chapter8DialogueID.CH8_STRATEGY_GLOBAL,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_GLOBAL]: {
		speaker: 'narrator',
		text: 'Mở rộng thị trường ra nước ngoài (Go Global).',
		textVi: 'Mở rộng thị trường ra nước ngoài (Go Global).',
		textEn: 'Go Global expansion.',
		choices: [
			{
				id: 'global_us',
				text: 'Thị trường Mỹ: Cạnh tranh khốc liệt, lợi nhuận cao',
				textVi: 'Thị trường Mỹ: Cạnh tranh khốc liệt, lợi nhuận cao',
				textEn: 'US Market: Fierce competition, high profit',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter8DialogueID.CH8_STRATEGY_CRISIS,
			},
			{
				id: 'global_sea',
				text: 'Đông Nam Á: Dễ thở hơn, sân nhà',
				textVi: 'Đông Nam Á: Dễ thở hơn, sân nhà',
				textEn: 'SEA: Easier, home turf',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter8DialogueID.CH8_STRATEGY_CRISIS,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_CRISIS]: {
		speaker: 'narrator',
		text: 'Khủng hoảng dữ liệu (Data Breach). Hacker đòi tiền chuộc.',
		textVi: 'Khủng hoảng dữ liệu (Data Breach). Hacker đòi tiền chuộc.',
		textEn: 'Data Breach. Hacker demands ransom.',
		choices: [
			{
				id: 'crisis_pay',
				text: 'Trả tiền: Im lặng xử lý (-10B)',
				textVi: 'Trả tiền: Im lặng xử lý (-10B)',
				textEn: 'Pay: Silent fix (-10B)',
				effects: [{ stat: StatID.MONEY, value: -10000000000 }],
				next: Chapter8DialogueID.CH8_STRATEGY_SUCCESSION,
			},
			{
				id: 'crisis_public',
				text: 'Công khai xin lỗi: Chịu phạt nhưng giữ uy tín',
				textVi: 'Công khai xin lỗi: Chịu phạt nhưng giữ uy tín',
				textEn: 'Public apology: Fined but keep reputation',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter8DialogueID.CH8_STRATEGY_SUCCESSION,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_SUCCESSION]: {
		speaker: 'narrator',
		text: 'Bạn đã già. Cần tìm người kế nhiệm (Successor).',
		textVi: 'Bạn đã già. Cần tìm người kế nhiệm (Successor).',
		textEn: 'You are old. Need Successor.',
		choices: [
			{
				id: 'succ_internal',
				text: 'Chọn từ nội bộ: Người hiểu văn hóa',
				textVi: 'Chọn từ nội bộ: Người hiểu văn hóa',
				textEn: 'Internal: Knows culture',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter8DialogueID.CH8_STRATEGY_REGULATION,
			},
			{
				id: 'succ_external',
				text: 'Thuê CEO chuyên nghiệp: Luồng gió mới',
				textVi: 'Thuê CEO chuyên nghiệp: Luồng gió mới',
				textEn: 'Hire Pro CEO: Fresh wind',
				effects: [{ stat: StatID.VISION, value: 10 }],
				next: Chapter8DialogueID.CH8_STRATEGY_REGULATION,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_REGULATION]: {
		speaker: 'narrator',
		text: 'Luật AI mới được ban hành. Siết chặt quản lý.',
		textVi: 'Luật AI mới được ban hành. Siết chặt quản lý.',
		textEn: 'New AI Law passed. Strict control.',
		choices: [
			{
				id: 'reg_comply',
				text: 'Tuân thủ tuyệt đối: Tốn kém nhưng bền vững',
				textVi: 'Tuân thủ tuyệt đối: Tốn kém nhưng bền vững',
				textEn: 'Full compliance: Costly but sustainable',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter8DialogueID.CH8_STRATEGY_INNOVATION,
			},
			{
				id: 'reg_lobby',
				text: 'Lobby chính sách: Tìm kẽ hở',
				textVi: 'Lobby chính sách: Tìm kẽ hở',
				textEn: 'Lobby: Find loopholes',
				effects: [{ stat: StatID.MONEY, value: -2000000000 }],
				next: Chapter8DialogueID.CH8_STRATEGY_INNOVATION,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_INNOVATION]: {
		speaker: 'narrator',
		text: 'Công nghệ tiếp theo (Next Big Thing)?',
		textVi: 'Công nghệ tiếp theo (Next Big Thing)?',
		textEn: 'Next Big Thing?',
		choices: [
			{
				id: 'inn_quantum',
				text: 'Quantum Computing: Tương lai xa',
				textVi: 'Quantum Computing: Tương lai xa',
				textEn: 'Quantum Computing: Far future',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter8DialogueID.CH8_STRATEGY_BOARD,
			},
			{
				id: 'inn_bio',
				text: 'BioTech: Kết hợp AI và Sinh học',
				textVi: 'BioTech: Kết hợp AI và Sinh học',
				textEn: 'BioTech: AI + Biology',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter8DialogueID.CH8_STRATEGY_BOARD,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_BOARD]: {
		speaker: 'narrator',
		text: 'Hội đồng quản trị đòi tăng trưởng 200%.',
		textVi: 'Hội đồng quản trị đòi tăng trưởng 200%.',
		textEn: 'Board demands 200% growth.',
		choices: [
			{
				id: 'board_agree',
				text: 'Đồng ý: Ép KPI nhân viên',
				textVi: 'Đồng ý: Ép KPI nhân viên',
				textEn: 'Agree: Push staff KPI',
				effects: [
					{ stat: StatID.STRESS, value: 15 },
					{
						stat: StatID.MONEY,
						value: 100000000,
					},
					{
						stat: StatID.HUMANITY,
						value: -10,
					},
				],
				next: Chapter8DialogueID.CH8_STRATEGY_EXIT,
			},
			{
				id: 'board_fight',
				text: 'Phản đối: Bảo vệ nhân viên',
				textVi: 'Phản đối: Bảo vệ nhân viên',
				textEn: 'Fight: Protect staff',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
				next: Chapter8DialogueID.CH8_STRATEGY_EXIT,
			},
		],
	},
	[Chapter8DialogueID.CH8_STRATEGY_EXIT]: {
		speaker: 'narrator',
		text: 'Bạn muốn để lại di sản gì?',
		textVi: 'Bạn muốn để lại di sản gì?',
		textEn: 'What legacy to leave?',
		choices: [
			{
				id: 'exit_foundation',
				text: 'Quỹ từ thiện công nghệ: Giúp đời',
				textVi: 'Quỹ từ thiện công nghệ: Giúp đời',
				textEn: 'Tech Charity Foundation: Help world',
				effects: [{ stat: StatID.HUMANITY, value: 10 }],
				next: Chapter8DialogueID.CH8_AI_VISION,
			},
			{
				id: 'exit_empire',
				text: 'Đế chế công nghệ: Thống trị',
				textVi: 'Đế chế công nghệ: Thống trị',
				textEn: 'Tech Empire: Domination',
				effects: [{ stat: StatID.VISION, value: 10 }],
				next: Chapter8DialogueID.CH8_AI_VISION,
			},
		],
	},
};
