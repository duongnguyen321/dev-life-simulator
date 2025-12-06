// ==========================================
// CHAPTER 6: DEPLOYMENT & CRASH (TRIỂN KHAI VÀ SỤP ĐỔ)
// Timeline: 25-30 tuổi
// Theme: Tham vọng, Sự phản bội và Cú ngã ngựa
// ==========================================

import {
	Chapter6DialogueID,
	Chapter6SceneID,
	Chapter6TodoID,
	Chapter7DialogueID,
	ConditionType,
	FlagID,
	Operator,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

export const chapter6: Chapter = {
	id: 6,
	name: 'Deployment & Crash',
	nameVi: 'Triển Khai & Sụp Đổ',
	nameEn: 'Deployment & Crash',
	ageRange: '25-30 tuổi',
	theme: 'Tham vọng, Sự phản bội và Cú ngã ngựa',
	themeVi: 'Tham vọng, Sự phản bội và Cú ngã ngựa',
	themeEn: 'Ambition, Betrayal, and The Fall',
	scenes: [
		{
			id: Chapter6SceneID.CH6_STARTUP,
			name: 'Khởi nghiệp',
			nameVi: '25-28 tuổi: Khởi nghiệp & Dream Team',
			nameEn: 'Age 25-28: Startup & Dream Team',
			background: '/assets/sprites/backgrounds/startup_office.png',
			music: '/assets/audio/music/chapters/ch6_ambition.mp3',
			dialogueStart: Chapter6DialogueID.CH6_STARTUP_1,
		},
		{
			id: Chapter6SceneID.CH6_PERSONNEL,
			name: 'Biến cố nhân sự',
			nameVi: 'Biến cố nhân sự: Nhân viên thứ 5',
			nameEn: 'Personnel Crisis: The 5th Employee',
			background: '/assets/sprites/backgrounds/cafe_rain.png',
			music: '/assets/audio/music/chapters/ch6_crisis.mp3',
			dialogueStart: Chapter6DialogueID.CH6_PERSONNEL_1,
		},
		{
			id: Chapter6SceneID.CH6_MARKET,
			name: 'Cú tát thị trường',
			nameVi: '29-30 tuổi: Cú tát của thị trường',
			nameEn: 'Age 29-30: The Market Slap',
			background: '/assets/sprites/backgrounds/office_empty.png',
			music: '/assets/audio/music/chapters/ch6_crisis.mp3',
			dialogueStart: Chapter6DialogueID.CH6_MARKET_1,
		},
		{
			id: Chapter6SceneID.CH6_REDEMPTION,
			name: 'Hành trình cứu rỗi',
			nameVi: 'Hành trình cứu rỗi: Đi để học',
			nameEn: 'The Redemption Journey: Travel to Learn',
			background: '/assets/sprites/backgrounds/tokyo_subway.png',
			music: '/assets/audio/music/chapters/ch6_redemption.mp3',
			dialogueStart: Chapter6DialogueID.CH6_REDEMPTION_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter6TodoID.CH6_TODO_RECRUIT,
				text: 'Phỏng vấn ứng viên',
				textVi: 'Phỏng vấn ứng viên',
				textEn: 'Interview candidates',
				effects: [{ stat: StatID.VISION, value: 2 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch6_todo_pitch',
				text: 'Pitching gọi vốn',
				textVi: 'Pitching gọi vốn',
				textEn: 'Pitching for funding',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 5 }, // Increased Stress cost
			},

			{
				id: 'ch6_todo_fire_staff',
				text: 'Sa thải nhân viên kém',
				textVi: 'Sa thải nhân viên kém',
				textEn: 'Fire underperforming staff',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { humanity: 5 },
			},
			{
				id: 'ch6_todo_review_code',
				text: 'Review code của team',
				textVi: 'Review code của team',
				textEn: 'Review team code',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch6_todo_handle_drama',
				text: 'Giải quyết drama công sở',
				textVi: 'Giải quyết drama công sở',
				textEn: 'Resolve office drama',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				cost: { stress: 3 },
			},

			{
				id: 'ch6_todo_work_weekend',
				text: 'Làm việc cả cuối tuần',
				textVi: 'Làm việc cả cuối tuần',
				textEn: 'Work on weekends',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { humanity: 5, health: 5 }, // Increased Humanity cost
			},

			{
				id: 'ch6_todo_check_competitor',
				text: 'Soi sản phẩm đối thủ',
				textVi: 'Soi sản phẩm đối thủ',
				textEn: 'Spy on competitor',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},

			{
				id: 'ch6_todo_fix_prod_bug',
				text: 'Fix bug trên Production lúc 3h sáng',
				textVi: 'Fix bug trên Production lúc 3h sáng',
				textEn: 'Fix Production bug at 3AM',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { health: 5 },
			},
			{
				id: 'ch6_todo_write_vision',
				text: 'Viết Vision & Mission',
				textVi: 'Viết Vision & Mission',
				textEn: 'Write Vision & Mission',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch6_todo_ignore_family',
				text: 'Quên sinh nhật người thân',
				textVi: 'Quên sinh nhật người thân',
				textEn: 'Forget relative birthday',
				cost: { humanity: 5 },
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
			},
			{
				id: 'ch6_todo_read_startup_book',
				text: 'Đọc sách "Zero to One"',
				textVi: 'Đọc sách "Zero to One"',
				textEn: 'Read "Zero to One"',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch6_todo_meditate',
				text: 'Thiền 15 phút',
				textVi: 'Thiền 15 phút',
				textEn: 'Meditate 15 mins',
				reward: { stress: -3 },
			},
			{
				id: 'ch6_todo_drink_alcohol',
				text: 'Uống rượu giải sầu',
				textVi: 'Uống rượu giải sầu',
				textEn: 'Drink alcohol',
				cost: { health: 3 },
				reward: { stress: -5 },
			},
			{
				id: 'ch6_todo_cry_car',
				text: 'Khóc trong xe hơi',
				textVi: 'Khóc trong xe hơi',
				textEn: 'Cry in car',
				reward: { stress: -5 },
				cost: { steelMind: 2 },
			},
			{
				id: 'ch6_todo_look_mirror',
				text: 'Nhìn mình trong gương',
				textVi: 'Nhìn mình trong gương',
				textEn: 'Look in mirror',
				effects: [{ stat: StatID.VISION, value: 2 }], // Self-reflection
			},
			{
				id: 'ch6_todo_call_bros',
				text: 'Gọi điện cho anh em Co-founder',
				textVi: 'Gọi điện cho anh em Co-founder',
				textEn: 'Call Co-founders',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
			},
		],
		dreamQuestions: [
			{
				id: 'ch6_dream_fall',
				text: 'Bạn mơ thấy mình rơi từ đỉnh tòa nhà chọc trời.',
				textVi: 'Bạn mơ thấy mình rơi từ đỉnh tòa nhà chọc trời.',
				textEn: 'Dream of falling from skyscraper.',
				choices: [
					{
						id: 'ch6_dream_fall_scream',
						text: 'Hét lên',
						textVi: 'Hét lên',
						textEn: 'Scream',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch6_dream_fall_fly',
						text: 'Mọc cánh bay lên',
						textVi: 'Mọc cánh bay lên',
						textEn: 'Grow wings and fly',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch6_dream_fall_accept',
						text: 'Nhắm mắt chấp nhận',
						textVi: 'Nhắm mắt chấp nhận',
						textEn: 'Close eyes and accept',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch6_dream_fall_grab',
						text: 'Cố bám vào cửa sổ',
						textVi: 'Cố bám vào cửa sổ',
						textEn: 'Grab a window',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }], // Survival instinct
					},
				],
			},
			{
				id: 'ch6_dream_betray',
				text: 'Bạn mơ thấy người bạn thân nhất đâm sau lưng mình.',
				textVi: 'Bạn mơ thấy người bạn thân nhất đâm sau lưng mình.',
				textEn: 'Dream of best friend backstabbing you.',
				choices: [
					{
						id: 'ch6_dream_betray_fight',
						text: 'Quay lại đánh trả',
						textVi: 'Quay lại đánh trả',
						textEn: 'Fight back',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch6_dream_betray_ask',
						text: 'Hỏi "Tại sao?"',
						textVi: 'Hỏi "Tại sao?"',
						textEn: 'Ask "Why?"',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch6_dream_betray_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch6_dream_betray_forgive',
						text: 'Tha thứ',
						textVi: 'Tha thứ',
						textEn: 'Forgive',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
				],
			},
			{
				id: 'ch6_dream_throne',
				text: 'Bạn ngồi trên ngai vàng nhưng xung quanh không có ai.',
				textVi: 'Bạn ngồi trên ngai vàng nhưng xung quanh không có ai.',
				textEn: 'Sitting on throne but no one around.',
				choices: [
					{
						id: 'ch6_dream_throne_enjoy',
						text: 'Tận hưởng quyền lực',
						textVi: 'Tận hưởng quyền lực',
						textEn: 'Enjoy power',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch6_dream_throne_lonely',
						text: 'Cảm thấy cô đơn',
						textVi: 'Cảm thấy cô đơn',
						textEn: 'Feel lonely',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch6_dream_throne_invite',
						text: 'Gọi mọi người đến',
						textVi: 'Gọi mọi người đến',
						textEn: 'Call everyone',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch6_dream_throne_leave',
						text: 'Bỏ đi',
						textVi: 'Bỏ đi',
						textEn: 'Leave',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -2 }],
					},
				],
			},
			{
				id: 'ch6_dream_fire',
				text: 'Văn phòng công ty bốc cháy.',
				textVi: 'Văn phòng công ty bốc cháy.',
				textEn: 'Office on fire.',
				choices: [
					{
						id: 'ch6_dream_fire_save_data',
						text: 'Lao vào cứu Server',
						textVi: 'Lao vào cứu Server',
						textEn: 'Save Server',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch6_dream_fire_save_people',
						text: 'Cứu nhân viên',
						textVi: 'Cứu nhân viên',
						textEn: 'Save employees',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch6_dream_fire_run',
						text: 'Chạy thoát thân',
						textVi: 'Chạy thoát thân',
						textEn: 'Run for life',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 2 }],
					},
					{
						id: 'ch6_dream_fire_watch',
						text: 'Đứng nhìn',
						textVi: 'Đứng nhìn',
						textEn: 'Watch',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
				],
			},
			{
				id: 'ch6_dream_maze',
				text: 'Bạn lạc trong một mê cung không lối thoát.',
				textVi: 'Bạn lạc trong một mê cung không lối thoát.',
				textEn: 'Lost in a maze with no exit.',
				choices: [
					{
						id: 'ch6_dream_maze_run',
						text: 'Chạy loạn xạ',
						textVi: 'Chạy loạn xạ',
						textEn: 'Run wildly',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch6_dream_maze_mark',
						text: 'Đánh dấu đường đi',
						textVi: 'Đánh dấu đường đi',
						textEn: 'Mark the path',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
					},
					{
						id: 'ch6_dream_maze_break',
						text: 'Đập tường',
						textVi: 'Đập tường',
						textEn: 'Break walls',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch6_dream_maze_sit',
						text: 'Ngồi xuống nghỉ',
						textVi: 'Ngồi xuống nghỉ',
						textEn: 'Sit and rest',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 2 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch6_reflect_sleep_1',
			text: 'Startup đầu tiên... mơ và thực đan xen.',
			textVi: 'Startup đầu tiên... mơ và thực đan xen.',
			textEn: 'First startup... dreams and reality intertwined.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch6_reflect_sleep_1_dream',
					text: 'Mơ về thành công',
					textVi: 'Mơ về thành công',
					textEn: 'Dream of success',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
				{
					id: 'ch6_reflect_sleep_1_rest',
					text: 'Nghỉ để sáng mai tiếp tục',
					textVi: 'Nghỉ để sáng mai tiếp tục',
					textEn: 'Rest to continue tomorrow',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
			],
		},
		{
			id: 'ch6_reflect_success_1',
			text: 'Làm việc 16 giờ/ngày... tham vọng đốt cháy cơ thể.',
			textVi: 'Làm việc 16 giờ/ngày... tham vọng đốt cháy cơ thể.',
			textEn: 'Working 16hours/day... ambition burning the body.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch6_reflect_success_1_push',
					text: 'Cố gắng thêm chút nữa',
					textVi: 'Cố gắng thêm chút nữa',
					textEn: 'Push a bit more',
					next: '',
					effects: [
						{ stat: StatID.VISION, value: 3 },
						{ stat: StatID.HEALTH, value: -2 },
					],
				},
				{
					id: 'ch6_reflect_success_1_limit',
					text: 'Nhưng cơ thể có giới hạn',
					textVi: 'Nhưng cơ thể có giới hạn',
					textEn: 'But body has limits',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
			],
		},
		{
			id: 'ch6_reflect_sleep_2',
			text: 'Bị phản bội... lòng tin tan vỡ nhưng phải tiếp tục.',
			textVi: 'Bị phản bội... lòng tin tan vỡ nhưng phải tiếp tục.',
			textEn: 'Betrayed... trust shattered but must continue.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch6_reflect_sleep_2_hurt',
					text: 'Đau nhưng cần ngủ',
					textVi: 'Đau nhưng cần ngủ',
					textEn: 'Hurt but need sleep',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -2 }],
				},
				{
					id: 'ch6_reflect_sleep_2_tomorrow',
					text: 'Mai sẽ mạnh mẽ hơn',
					textVi: 'Mai sẽ mạnh mẽ hơn',
					textEn: 'Tomorrow will be stronger',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 3 }],
				},
			],
		},
		{
			id: 'ch6_reflect_success_2',
			text: 'Startup thất bại... nhưng bài học vô giá.',
			textVi: 'Startup thất bại... nhưng bài học vô giá.',
			textEn: 'Startup failed... but priceless lessons.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch6_reflect_success_2_learn',
					text: 'Học từ thất bại',
					textVi: 'Học từ thất bại',
					textEn: 'Learn from failure',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch6_reflect_success_2_rest',
					text: 'Nhưng giờ cần nghỉ',
					textVi: 'Nhưng giờ cần nghỉ',
					textEn: 'But need rest now',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
			],
		},
		{
			id: 'ch6_reflect_sleep_3',
			text: 'Ngựa đã ngã... nhưng vẫn phải đứng dậy.',
			textVi: 'Ngựa đã ngã... nhưng vẫn phải đứng dậy.',
			textEn: 'Horse has fallen... but must stand up.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch6_reflect_sleep_3_recover',
					text: 'Nghỉ để phục hồi',
					textVi: 'Nghỉ để phục hồi',
					textEn: 'Rest to recover',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 4 }],
				},
				{
					id: 'ch6_reflect_sleep_3_tired',
					text: 'Quá mệt rồi',
					textVi: 'Quá mệt rồi',
					textEn: 'Too tired',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -2 }],
				},
			],
		},
	],
};

export const chapter6Dialogues: Record<Chapter6DialogueID, DialogueNode> = {
	// 6.1 Startup
	[Chapter6DialogueID.CH6_STARTUP_1]: {
		speaker: 'npc',
		text: 'Hội tụ (Reunion): Anh Q (đang làm cho Big Tech Singapore), Anh D (Tech Lead công ty Product top đầu), Anh N (Quản lý dự án thâm niên). Tất cả đều đang ở đỉnh cao sự nghiệp.',
		textVi:
			'Hội tụ (Reunion): Anh Q (đang làm cho Big Tech Singapore), Anh D (Tech Lead công ty Product top đầu), Anh N (Quản lý dự án thâm niên). Tất cả đều đang ở đỉnh cao sự nghiệp.',
		textEn:
			'Reunion: Brother Q (Big Tech Singapore), Brother D (Top Product Company Tech Lead), Brother N (Senior PM). All at the peak of their careers.',
		next: Chapter6DialogueID.CH6_STARTUP_MOTIVATION,
	},

	// NEW: Investor Event
	[Chapter6DialogueID.CH6_INVESTOR_START]: {
		speaker: 'npc',
		text: 'Một nhà đầu tư thiên thần hẹn gặp. Cơ hội gọi vốn triệu đô. Nhưng phải mời họ đi ăn tối ở nhà hàng 5 sao.',
		textVi:
			'Một nhà đầu tư thiên thần hẹn gặp. Cơ hội gọi vốn triệu đô. Nhưng phải mời họ đi ăn tối ở nhà hàng 5 sao.',
		textEn:
			'Angel investor meeting. Million dollar opportunity. But must treat them to 5-star dinner.',
		choices: [
			{
				id: 'choice_investor_meet',
				text: 'Chơi lớn: Mời bữa tối sang trọng (-2M)',
				textVi: 'Chơi lớn: Mời bữa tối sang trọng (-2M)',
				textEn: 'Go big: Luxury dinner (-2M)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 2000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -2000000 },
					{
						stat: StatID.VISION,
						value: 10,
					},
					{
						stat: StatID.STRESS,
						value: -10,
					},
					{
						stat: StatID.HEALTH,
						value: -5,
					},
				],
				next: Chapter6DialogueID.CH6_FRAUD_START,
			},
			{
				id: 'choice_investor_skip',
				text: 'Tiết kiệm: Mời cafe vỉa hè (Vision +1)',
				textVi: 'Tiết kiệm: Mời cafe vỉa hè (Vision +1)',
				textEn: 'Save: Street coffee (Vision +1)',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.VISION, value: -5 },
				],
				next: Chapter6DialogueID.CH6_FRAUD_START,
			},
		],
	},
	[Chapter6DialogueID.CH6_INVESTOR_MEET]: {
		speaker: 'npc',
		text: 'Nhà đầu tư: "Tôi thấy tiềm năng trong team của các bạn. Tầm nhìn rất hay. Nhưng hãy nhớ: Execution mới là tất cả."',
		textVi:
			'Nhà đầu tư: "Tôi thấy tiềm năng trong team của các bạn. Tầm nhìn rất hay. Nhưng hãy nhớ: Execution mới là tất cả."',
		textEn:
			'Investor: "I see potential in your team. Great vision. But remember: Execution is everything."',
		next: Chapter6DialogueID.CH6_MARKET_1,
	},
	[Chapter6DialogueID.CH6_STARTUP_MOTIVATION]: {
		speaker: 'npc',
		text: 'Họ bỏ mức lương nghìn đô không phải vì thất nghiệp, mà vì "Ownership". Họ muốn làm chủ cuộc chơi. "Anh em mình đủ lông đủ cánh rồi. Làm một cái gì đó để đời đi!"',
		textVi:
			'Họ bỏ mức lương nghìn đô không phải vì thất nghiệp, mà vì "Ownership". Họ muốn làm chủ cuộc chơi. "Anh em mình đủ lông đủ cánh rồi. Làm một cái gì đó để đời đi!"',
		textEn:
			'They quit high salaries not due to unemployment, but for "Ownership". They want to own the game. "We are ready. Let\'s build a legacy!"',
		next: Chapter6DialogueID.CH6_STARTUP_2,
	},
	[Chapter6DialogueID.CH6_STARTUP_2]: {
		speaker: 'player',
		text: '(Lôi giấy tờ ra) Các anh ơi, em có giấy phép "Công ty Ma" của bố em. Vốn điều lệ 20 tỷ trên giấy. Firewall uy tín cực lớn với đối tác!',
		textVi:
			'(Lôi giấy tờ ra) Các anh ơi, em có giấy phép "Công ty Ma" của bố em. Vốn điều lệ 20 tỷ trên giấy. Firewall uy tín cực lớn với đối tác!',
		textEn:
			'(Pulling out papers) Bros, I have Father\'s "Ghost Company" license. 20 billion charter capital on paper. Huge credibility Firewall!',
		flags: [{ key: FlagID.IS_FOUNDER, value: true }],
		effects: [{ stat: StatID.VISION, value: 1 }],
		next: Chapter6DialogueID.CH6_STARTUP_REPLY,
	},

	// NEW: Investor Fraud Chain
	[Chapter6DialogueID.CH6_FRAUD_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Nhà đầu tư yêu cầu số liệu tăng trưởng user. Thực tế đang đi ngang. Có nên "xào nấu" số liệu một chút không?',
		textVi:
			'(Suy nghĩ) Nhà đầu tư yêu cầu số liệu tăng trưởng user. Thực tế đang đi ngang. Có nên "xào nấu" số liệu một chút không?',
		textEn:
			'(Thinking) Investor asks for user growth data. Reality is flat. Should I "cook" the data a bit?',
		choices: [
			{
				id: 'choice_fake_data',
				text: 'Làm đẹp số liệu: Để lấy vốn đã (Money +500M)',
				textVi: 'Làm đẹp số liệu: Để lấy vốn đã (Money +500M)',
				textEn: 'Fake data: Get funding first (Money +500M)',
				effects: [{ stat: StatID.MONEY, value: 500000000 }],
				next: Chapter6DialogueID.CH6_FRAUD_EXPOSED,
			},
			{
				id: 'choice_honest_data',
				text: 'Trung thực: Chấp nhận khó khăn',
				textVi: 'Trung thực: Chấp nhận khó khăn',
				textEn: 'Honest: Accept hardship',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter6DialogueID.CH6_INVESTOR_MEET,
			},
		],
	},
	[Chapter6DialogueID.CH6_FRAUD_EXPOSED]: {
		speaker: 'narrator',
		text: 'Đội ngũ Due Diligence của nhà đầu tư phát hiện sự bất thường. Họ rút vốn và dọa kiện. Uy tín công ty sụp đổ.',
		textVi:
			'Đội ngũ Due Diligence của nhà đầu tư phát hiện sự bất thường. Họ rút vốn và dọa kiện. Uy tín công ty sụp đổ.',
		textEn:
			'Investor Due Diligence team found anomalies. Pulled funding, threatened lawsuit. Company reputation collapsed.',
		effects: [
			{ stat: StatID.MONEY, value: -500000000 }, // Lose the funding
			{ stat: StatID.VISION, value: -5 },
			{ stat: StatID.STRESS, value: 7 },
		],
		next: Chapter6DialogueID.CH6_MARKET_1,
	},
	[Chapter6DialogueID.CH6_STARTUP_REPLY]: {
		speaker: 'player',
		text: 'Bạn nhìn những người anh em chí cốt. Bạn nói gì?',
		textVi: 'Bạn nhìn những người anh em chí cốt. Bạn nói gì?',
		textEn: 'You look at your brothers in arms. What do you say?',
		choices: [
			{
				id: 'choice_dream_big',
				text: 'Chúng ta sẽ thay đổi thế giới!',
				textVi: 'Chúng ta sẽ thay đổi thế giới!',
				textEn: 'We will change the world!',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter6DialogueID.CH6_INTRO,
				// Chapter6DialogueID.CH6_STARTUP_REPLY
			},
			{
				id: 'choice_humble_start',
				text: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textVi: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textEn: "Thank you. I won't let you down.",
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter6DialogueID.CH6_INTRO, // Redirect to Hiring Friends
			},
		],
	},

	// NEW: Hiring Friends
	[Chapter6DialogueID.CH6_HIRING_START]: {
		speaker: 'narrator',
		text: 'Một người bạn cũ thời đại học xin vào làm. Cậu ta nhiệt tình nhưng kỹ năng còn yếu.',
		textVi:
			'Một người bạn cũ thời đại học xin vào làm. Cậu ta nhiệt tình nhưng kỹ năng còn yếu.',
		textEn: 'Old college friend applies. Enthusiastic but weak skills.',
		choices: [
			{
				id: 'choice_hire_friend',
				text: 'Nhận vào: Bạn bè giúp nhau (Vision -3)',
				textVi: 'Nhận vào: Bạn bè giúp nhau (Vision -3)',
				textEn: 'Hire: Friends help friends (Vision -3)',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.VISION, value: -2 },
				],
				next: Chapter6DialogueID.CH6_DECISION_FIRE,
			},
			{
				id: 'choice_reject_friend',
				text: 'Từ chối: Công việc là công việc (Vision +3)',
				textVi: 'Từ chối: Công việc là công việc (Vision +3)',
				textEn: 'Reject: Business is business (Vision +3)',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.HUMANITY, value: -2 },
				],
				next: Chapter6DialogueID.CH6_DECISION_FIRE,
			},
		],
	},

	// NEW: Consulting Gig (Chapter 6)
	[Chapter6DialogueID.CH6_CONSULTING]: {
		speaker: 'narrator',
		text: 'Một startup đàn em nhờ bạn tư vấn kiến trúc hệ thống. Phí tư vấn: 5 triệu.',
		textVi:
			'Một startup đàn em nhờ bạn tư vấn kiến trúc hệ thống. Phí tư vấn: 5 triệu.',
		textEn:
			'A junior startup asks for your advice on system architecture. Fee: 5 million.',
		next: Chapter6DialogueID.CH6_CONSULTING_QUIZ,
	},
	[Chapter6DialogueID.CH6_CONSULTING_QUIZ]: {
		speaker: 'player',
		text: 'Họ đang gặp vấn đề query chậm. Bạn khuyên họ nên làm gì đầu tiên?',
		textVi: 'Họ đang gặp vấn đề query chậm. Bạn khuyên họ nên làm gì đầu tiên?',
		textEn: 'They have slow query issues. What do you advise them to do first?',
		choices: [
			{
				id: 'choice_consulting_quiz_6_1',
				text: 'Mua server mạnh hơn (Scale Up)',
				textVi: 'Mua server mạnh hơn (Scale Up)',
				textEn: 'Buy stronger server (Scale Up)',
				next: Chapter6DialogueID.CH6_CONSULTING_DONE,
				effects: [{ stat: StatID.VISION, value: -1 }], // Costly and temporary
			},
			{
				id: 'choice_consulting_quiz_6_2',
				text: 'Đánh Index cho DB',
				textVi: 'Đánh Index cho DB',
				textEn: 'Add Index to DB',
				next: Chapter6DialogueID.CH6_CONSULTING_DONE,
				effects: [
					{ stat: StatID.MONEY, value: 5000000 },
					{ stat: StatID.VISION, value: 3 },
				], // Correct and efficient
			},
			{
				id: 'choice_consulting_quiz_6_3',
				text: 'Viết lại bằng Golang',
				textVi: 'Viết lại bằng Golang',
				textEn: 'Rewrite in Golang',
				next: Chapter6DialogueID.CH6_CONSULTING_DONE,
				effects: [{ stat: StatID.VISION, value: -3 }], // Premature optimization
			},
		],
	},
	[Chapter6DialogueID.CH6_CONSULTING_DONE]: {
		speaker: 'narrator',
		text: 'Lời khuyên của bạn giúp họ giảm 90% thời gian query. 5 triệu tiền tươi thóc thật.',
		textVi:
			'Lời khuyên của bạn giúp họ giảm 90% thời gian query. 5 triệu tiền tươi thóc thật.',
		textEn: 'Your advice reduced query time by 90%. 5 million hard cash.',
		next: Chapter6DialogueID.CH6_DECISION_CACHE, // Start Quiz Chunk 2
	},

	// NEW: Team Building Event
	[Chapter6DialogueID.CH6_TEAM_BUILDING_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Team mới thành lập. Anh em cần gắn kết. Một chuyến đi Resort 5 sao sẽ xốc lại tinh thần.',
		textVi:
			'(Suy nghĩ) Team mới thành lập. Anh em cần gắn kết. Một chuyến đi Resort 5 sao sẽ xốc lại tinh thần.',
		textEn:
			'(Thinking) New team. Need bonding. A 5-star Resort trip will boost morale.',
		choices: [
			{
				id: 'choice_team_building_luxury',
				text: 'Resort 5 sao: Anh em là trên hết (-50M)',
				textVi: 'Resort 5 sao: Anh em là trên hết (-50M)',
				textEn: '5-star Resort: Bros before code (-50M)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 50000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -50000000 },
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_LUXURY,
			},
			{
				id: 'choice_team_building_motel',
				text: 'Nhà nghỉ Vũng Tàu: Tiết kiệm là quốc sách (-10M)',
				textVi: 'Nhà nghỉ Vũng Tàu: Tiết kiệm là quốc sách (-10M)',
				textEn: 'Vung Tau Motel: Saving is policy (-10M)',
				effects: [
					{ stat: StatID.MONEY, value: -10000000 },
					{ stat: StatID.HUMANITY, value: 2 },
					{ stat: StatID.VISION, value: 3 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_MOTEL,
			},
			{
				id: 'choice_team_building_park',
				text: 'Công viên: Team building 0 đồng',
				textVi: 'Công viên: Team building 0 đồng',
				textEn: 'Public Park: 0 cost team building',
				effects: [
					{ stat: StatID.HUMANITY, value: -3 },
					{ stat: StatID.VISION, value: -7 },
				],
				flags: [{ key: FlagID.CHEAP_TEAM_BUILDING, value: true }],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_PARK,
			},
		],
	},
	[Chapter6DialogueID.CH6_TEAM_BUILDING_LUXURY]: {
		speaker: 'narrator',
		text: 'Chuyến đi tuyệt vời. Mọi người được tận hưởng dịch vụ đẳng cấp. Sức mạnh đoàn kết tăng lên tột đỉnh.',
		textVi:
			'Chuyến đi tuyệt vời. Mọi người được tận hưởng dịch vụ đẳng cấp. Sức mạnh đoàn kết tăng lên tột đỉnh.',
		textEn: 'Great trip. Everyone enjoyed premium service. Unity reached peak.',
		next: Chapter6DialogueID.CH6_PERSONNEL_1,
	},
	[Chapter6DialogueID.CH6_TEAM_BUILDING_MOTEL]: {
		speaker: 'narrator',
		text: 'Chuyến đi vui vẻ nhưng hơi chật chội. Anh em cũng thông cảm cho giai đoạn khó khăn của công ty.',
		textVi:
			'Chuyến đi vui vẻ nhưng hơi chật chội. Anh em cũng thông cảm cho giai đoạn khó khăn của công ty.',
		textEn:
			"Fun but cramped trip. Team sympathized with company's tough times.",
		next: Chapter6DialogueID.CH6_PERSONNEL_1,
	},
	[Chapter6DialogueID.CH6_TEAM_BUILDING_PARK]: {
		speaker: 'narrator',
		text: 'Anh em nhìn nhau ngán ngẩm giữa trời nắng chang chang. "Sếp ki bo quá". Tinh thần team sụp đổ hoàn toàn.',
		textVi:
			'Anh em nhìn nhau ngán ngẩm giữa trời nắng chang chang. "Sếp ki bo quá". Tinh thần team sụp đổ hoàn toàn.',
		textEn:
			'Team looked at each other in dismay under hot sun. "Boss is too stingy". Team morale collapsed completely.',
		effects: [
			{ stat: StatID.HUMANITY, value: -5 },
			{ stat: StatID.VISION, value: -3 },
		],
		next: Chapter6DialogueID.CH6_PERSONNEL_1,
	},

	// 6.2 Personnel Crisis
	[Chapter6DialogueID.CH6_PERSONNEL_1]: {
		speaker: 'npc',
		text: 'Anh N (PM): "Em ơi, có chuyện rồi. Thằng cu thực tập sinh mới xóa sạch database Production. Dữ liệu khách hàng bay hết rồi..."',
		textVi:
			'Anh N (PM): "Em ơi, có chuyện rồi. Thằng cu thực tập sinh mới xóa sạch database Production. Dữ liệu khách hàng bay hết rồi..."',
		textEn:
			'Brother N (PM): "Bro, we have a problem. The intern just wiped the Production database. All client data is gone..."',
		next: Chapter6DialogueID.CH6_PERSONNEL_CAFE,
	},
	[Chapter6DialogueID.CH6_PERSONNEL_CAFE]: {
		speaker: 'player',
		text: '(Nhìn cậu ấy co ro trong quán cafe, trời mưa tầm tã bên ngoài) Mình phải nói gì đây? Cậu ấy từng tốt lắm...',
		textVi:
			'(Nhìn cậu ấy co ro trong quán cafe, trời mưa tầm tã bên ngoài) Mình phải nói gì đây? Cậu ấy từng tốt lắm...',
		textEn:
			'(Looking at him huddled in cafe, rain pouring outside) What should I say? He used to be so good...',
		next: Chapter6DialogueID.CH6_PERSONNEL_CONFLICT,
	},
	[Chapter6DialogueID.CH6_PERSONNEL_CONFLICT]: {
		speaker: 'narrator',
		text: 'Đấu tranh nội tâm: Giữ lại vì tình nghĩa (Humanity) hay Sa thải vì kỷ luật (Steel Mind)?',
		textVi:
			'Đấu tranh nội tâm: Giữ lại vì tình nghĩa (Humanity) hay Sa thải vì kỷ luật (Steel Mind)?',
		textEn:
			'Inner conflict: Keep for loyalty (Humanity) or Fire for discipline (Steel Mind)?',
		choices: [
			{
				id: 'choice_fire',
				text: 'Sa thải (Humanity --)',
				textVi: 'Sa thải (Humanity --)',
				textEn: 'Fire (Humanity --)',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				next: Chapter6DialogueID.CH6_PERSONNEL_SCENE,
			},
		],
	},
	[Chapter6DialogueID.CH6_PERSONNEL_SCENE]: {
		speaker: 'player',
		text: '"Anh xin lỗi. Em rất tốt, nhưng công ty cần người chạy nhanh hơn. Đây là lương 2 tháng đền bù cho em."',
		textVi:
			'"Anh xin lỗi. Em rất tốt, nhưng công ty cần người chạy nhanh hơn. Đây là lương 2 tháng đền bù cho em."',
		textEn:
			'"I\'m sorry. You are good, but the company needs someone faster. Here is 2 months salary compensation."',
		next: Chapter6DialogueID.CH6_PERSONNEL_REACTION,
	},
	[Chapter6DialogueID.CH6_PERSONNEL_REACTION]: {
		speaker: 'npc',
		text: '(Oán trách) "Anh thay đổi rồi. Anh không còn là người anh mà em từng biết nữa."',
		textVi:
			'(Oán trách) "Anh thay đổi rồi. Anh không còn là người anh mà em từng biết nữa."',
		textEn:
			'(Resentful) "You changed. You are not the brother I used to know."',
		next: Chapter6DialogueID.CH6_PERSONNEL_LESSON,
	},
	[Chapter6DialogueID.CH6_PERSONNEL_LESSON]: {
		speaker: 'player',
		text: '(Ngồi lại một mình, nhìn cậu ấy bỏ đi dưới mưa) Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác...',
		textVi:
			'(Ngồi lại một mình, nhìn cậu ấy bỏ đi dưới mưa) Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác...',
		textEn:
			'(Sitting alone, watching him walk away in rain) First cruel management lesson: To be a boss is to be ruthless...',
		next: Chapter6DialogueID.CH6_STAFF_QUIT_CHECK, // Start Quiz Chunk 3
	},

	// NEW: Big Contract Event
	[Chapter6DialogueID.CH6_BIG_CONTRACT_START]: {
		speaker: 'narrator',
		text: 'Công ty nhận được một hợp đồng outsource lớn từ Nhật Bản. Giá trị 500 triệu.',
		textVi:
			'Công ty nhận được một hợp đồng outsource lớn từ Nhật Bản. Giá trị 500 triệu.',
		textEn:
			'Company received a big outsource contract from Japan. Value 500 million.',
		next: Chapter6DialogueID.CH6_BIG_CONTRACT_RECEIVE,
	},
	[Chapter6DialogueID.CH6_BIG_CONTRACT_RECEIVE]: {
		speaker: 'player',
		text: '(Thở phào) Đủ tiền trả lương cho anh em rồi.',
		textVi: '(Thở phào) Đủ tiền trả lương cho anh em rồi.',
		textEn: '(Relieved) Enough money to pay salaries.',
		effects: [{ stat: StatID.MONEY, value: 500000000 }],
		next: Chapter6DialogueID.CH6_TEAM_BUILDING_START,
	},
	// NEW: Staff Quit Consequence
	[Chapter6DialogueID.CH6_STAFF_QUIT_CHECK]: {
		speaker: 'narrator',
		text: 'Không khí trong công ty bỗng trở nên căng thẳng.',
		textVi: 'Không khí trong công ty bỗng trở nên căng thẳng.',
		textEn: 'Atmosphere in company suddenly became tense.',
		choices: [
			{
				id: 'choice_staff_quit_check_bad',
				text: 'Có chuyện gì vậy?',
				textVi: 'Có chuyện gì vậy?',
				textEn: "What's happening?",
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.CHEAP_TEAM_BUILDING,
					operator: Operator.EQUAL,
					value: true,
				},
				next: Chapter6DialogueID.CH6_STAFF_QUIT_BAD,
			},
			{
				id: 'choice_staff_quit_check_ok',
				text: 'Mọi người vẫn làm việc chăm chỉ.',
				textVi: 'Mọi người vẫn làm việc chăm chỉ.',
				textEn: 'Everyone is working hard.',
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.CHEAP_TEAM_BUILDING,
					operator: Operator.NOT_EQUAL,
					value: true,
				},
				next: Chapter6DialogueID.CH6_CONSULTING,
			},
		],
	},
	[Chapter6DialogueID.CH6_STAFF_QUIT_BAD]: {
		speaker: 'npc',
		text: 'Anh D (Tech Lead) nộp đơn xin nghỉ việc. "Tôi không thể làm việc với một người sếp coi thường nhân viên như vậy. Buổi team building ở công viên là giọt nước tràn ly."',
		textVi:
			'Anh D (Tech Lead) nộp đơn xin nghỉ việc. "Tôi không thể làm việc với một người sếp coi thường nhân viên như vậy. Buổi team building ở công viên là giọt nước tràn ly."',
		textEn:
			'Brother D (Tech Lead) resigned. "I cannot work with a boss who disrespects employees like that. The park team building was the last straw."',
		next: Chapter6DialogueID.CH6_STAFF_QUIT_PENALTY,
	},
	[Chapter6DialogueID.CH6_STAFF_QUIT_PENALTY]: {
		speaker: 'narrator',
		text: 'Sự ra đi của Anh D khiến dự án bị đình trệ. Bạn phải thuê Outsource ngoài giá cao để lấp chỗ trống. Thiệt hại 50 triệu.',
		textVi:
			'Sự ra đi của Anh D khiến dự án bị đình trệ. Bạn phải thuê Outsource ngoài giá cao để lấp chỗ trống. Thiệt hại 50 triệu.',
		textEn:
			"Brother D's departure stalled the project. You had to hire expensive external Outsource to fill the gap. Loss 50 million.",
		effects: [
			{ stat: StatID.MONEY, value: -50000000 },
			{ stat: StatID.VISION, value: -3 },
		],
		next: Chapter6DialogueID.CH6_CONSULTING,
	},

	// 6.3 Market
	// NEW: Intro
	[Chapter6DialogueID.CH6_INTRO]: {
		speaker: 'player',
		text: '(Nhìn quanh căn phòng trọ ngổn ngang) Dây cáp, vỏ mì tôm... Ba thằng tao, ba cái laptop, và một giấc mơ thay đổi thế giới. Hoặc ít nhất là kiếm được tiền.',
		textVi:
			'(Nhìn quanh căn phòng trọ ngổn ngang) Dây cáp, vỏ mì tôm... Ba thằng tao, ba cái laptop, và một giấc mơ thay đổi thế giới. Hoặc ít nhất là kiếm được tiền.',
		textEn:
			'(Looking around messy rental room) Cables, noodle boxes... Three of us, three laptops, and a dream to change the world. Or at least make money.',
		next: Chapter6DialogueID.CH6_DECISION_HIRE,
	},

	[Chapter6DialogueID.CH6_MARKET_1]: {
		speaker: 'player',
		text: '(Nhìn dashboard trống rỗng) 29 tuổi. Super App với AI, Blockchain... Ra mắt xong: 0 user. Thị trường không cần mình.',
		textVi:
			'(Nhìn dashboard trống rỗng) 29 tuổi. Super App với AI, Blockchain... Ra mắt xong: 0 user. Thị trường không cần mình.',
		textEn:
			"(Looking at empty dashboard) 29 years old. Super App with AI, Blockchain... Launched: 0 users. Market doesn't need us.",
		next: Chapter6DialogueID.CH6_SERVER_START,
	},

	// NEW: Server Event
	[Chapter6DialogueID.CH6_SERVER_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Hệ thống AI cần GPU khủng để train model. Server hiện tại đang quá tải.',
		textVi:
			'(Suy nghĩ) Hệ thống AI cần GPU khủng để train model. Server hiện tại đang quá tải.',
		textEn:
			'(Thinking) AI system needs massive GPU for training. Current server overloaded.',
		choices: [
			{
				id: 'choice_server_cheap',
				text: 'Thuê Server giá rẻ: Tiết kiệm chi phí (Money +10M)',
				textVi: 'Thuê Server giá rẻ: Tiết kiệm chi phí (Money +10M)',
				textEn: 'Cheap Server: Save cost (Money +10M)',
				effects: [{ stat: StatID.MONEY, value: 10000000 }],
				next: Chapter6DialogueID.CH6_SERVER_CRASH,
			},
			{
				id: 'choice_server_premium',
				text: 'Server xịn: Đắt xắt ra miếng (Money -20M)',
				textVi: 'Server xịn: Đắt xắt ra miếng (Money -20M)',
				textEn: 'Premium Server: Quality costs (Money -20M)',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.VISION, value: 2 },
				],
				next: Chapter6DialogueID.CH6_SERVER_BUY,
			},
		],
	},
	[Chapter6DialogueID.CH6_SERVER_CRASH]: {
		speaker: 'narrator',
		text: 'Server giá rẻ liên tục bị down vào giờ cao điểm. Khách hàng phàn nàn dữ dội và quyết định không sử dụng nữa.',
		textVi:
			'Server giá rẻ liên tục bị down vào giờ cao điểm. Khách hàng phàn nàn dữ dội và quyết định không sử dụng nữa.',
		textEn:
			'Cheap server keeps crashing at peak hours. Customers complain loudly.',
		effects: [
			{ stat: StatID.VISION, value: -2 },
			{ stat: StatID.STRESS, value: 2 },
			{ stat: StatID.MONEY, value: -15000000 },
		],
		next: Chapter6DialogueID.CH6_MARKET_2,
	},
	[Chapter6DialogueID.CH6_SERVER_BUY]: {
		speaker: 'narrator',
		text: 'Server mới chạy mượt mà. Model train nhanh hơn hẳn. Nhưng ví tiền thì rỗng tuếch.',
		textVi:
			'Server mới chạy mượt mà. Model train nhanh hơn hẳn. Nhưng ví tiền thì rỗng tuếch.',
		textEn: 'New server runs smooth. Model trains faster. But wallet is empty.',
		next: Chapter6DialogueID.CH6_MARKET_2,
	},
	[Chapter6DialogueID.CH6_MARKET_2]: {
		speaker: 'narrator',
		text: 'Sản phẩm thất bại (Product Fail). Nhưng may mắn thay, mảng Outsource vẫn hoạt động tốt, gánh team qua cơn bĩ cực (Fallback Mechanism). Công ty không chết, nhưng giấc mơ Product bị trì hoãn.',
		textVi:
			'Sản phẩm thất bại (Product Fail). Nhưng may mắn thay, mảng Outsource vẫn hoạt động tốt, gánh team qua cơn bĩ cực (Fallback Mechanism). Công ty không chết, nhưng giấc mơ Product bị trì hoãn.',
		textEn:
			'Product Fail. Luckily, Outsource arm worked well, carrying the team through crisis (Fallback Mechanism). Company survived, but Product dream delayed.',
		next: Chapter6DialogueID.CH6_DECISION_MENTOR, // Start Quiz Chunk 4
	},

	// NEW: Salary Event
	[Chapter6DialogueID.CH6_SALARY_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Cuối tháng. Bảng lương 100 triệu đang chờ duyệt. Dòng tiền Outsource vừa về kịp lúc.',
		textVi:
			'(Suy nghĩ) Cuối tháng. Bảng lương 100 triệu đang chờ duyệt. Dòng tiền Outsource vừa về kịp lúc.',
		textEn:
			'(Thinking) End of month. 100M payroll waiting. Outsource cashflow just arrived.',
		choices: [
			{
				id: 'choice_salary_pay',
				text: 'Duyệt chi: Uy tín là vàng (-100M)',
				textVi: 'Duyệt chi: Uy tín là vàng (-100M)',
				textEn: 'Approve: Reputation is gold (-100M)',
				effects: [{ stat: StatID.MONEY, value: -100000000 }],
				next: Chapter6DialogueID.CH6_SALARY_PAY,
			},
			{
				id: 'choice_salary_delay',
				text: 'Khất lương: Anh em thông cảm',
				textVi: 'Khất lương: Anh em thông cảm',
				textEn: 'Delay: Bros please understand',
				effects: [{ stat: StatID.HUMANITY, value: -3 }],
				next: Chapter6DialogueID.CH6_SALARY_DELAY,
			},
		],
	},
	[Chapter6DialogueID.CH6_SALARY_DELAY]: {
		speaker: 'narrator',
		text: 'Ting ting. Tiếng tin nhắn làm cả văn phòng reo hò. Không hề có đồng lương nào cả, các nhân viên được mời 1 cốc highland rồi không ai muốn làm việc nữa.',
		textVi:
			'Ting ting. Tiếng tin nhắn làm cả văn phòng reo hò. Không hề có đồng lương nào cả, các nhân viên được mời 1 cốc highland rồi không ai muốn làm việc nữa.',
		textEn:
			'Ding ding. The sound of a text message made the whole office cheer. There was no salary, the employees were invited to a cup of highland coffee and no one wanted to work anymore.',
		effects: [
			{ stat: StatID.HUMANITY, value: -10 },
			{ stat: StatID.MONEY, value: -50000000 },
		],
		next: Chapter6DialogueID.CH6_MARKET_FEAR,
	},
	[Chapter6DialogueID.CH6_SALARY_PAY]: {
		speaker: 'narrator',
		text: 'Ting ting. Tiếng tin nhắn báo lương làm cả văn phòng reo hò. Bạn thở phào nhẹ nhõm.',
		textVi:
			'Ting ting. Tiếng tin nhắn báo lương làm cả văn phòng reo hò. Bạn thở phào nhẹ nhõm.',
		textEn:
			'Ding ding. Salary notification makes office cheer. You sigh in relief.',
		next: Chapter6DialogueID.CH6_MARKET_FEAR,
	},
	[Chapter6DialogueID.CH6_MARKET_FEAR]: {
		speaker: 'player',
		text: '(Suy nghĩ) Mình đang đi vào vết xe đổ của bố sao? Mình cũng sẽ thất bại sao?',
		textVi:
			'(Suy nghĩ) Mình đang đi vào vết xe đổ của bố sao? Mình cũng sẽ thất bại sao?',
		textEn: "(Thinking) Am I following father's path? Will I fail too?",
		effects: [{ stat: StatID.STEELMIND, value: -2 }],
		next: Chapter6DialogueID.CH6_REDEMPTION_1,
	},

	// 6.4 Redemption
	[Chapter6DialogueID.CH6_REDEMPTION_1]: {
		speaker: 'npc',
		text: 'Anh Q (Co-founder): "Em cần đi ra ngoài, thở một chút. Gap year đi! Tao với anh D, anh N lo mảng Outsource. Em đi tìm đường mới đi."',
		textVi:
			'Anh Q (Co-founder): "Em cần đi ra ngoài, thở một chút. Gap year đi! Tao với anh D, anh N lo mảng Outsource. Em đi tìm đường mới đi."',
		textEn:
			'Brother Q (Co-founder): "You need to get out, breathe. Take a gap year! We\'ll handle Outsource. Go find a new path."',
		next: Chapter6DialogueID.CH6_REDEMPTION_2,
	},
	[Chapter6DialogueID.CH6_REDEMPTION_2]: {
		speaker: 'narrator',
		text: 'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textVi:
			'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textEn:
			'Enlightenment: "Tech is just a tool. Solving Pain Point is the goal."',
		effects: [{ stat: StatID.VISION, value: 3 }],
		next: Chapter6DialogueID.CH6_SERIES_A_START,
	},

	// NEW: Series A Funding
	[Chapter6DialogueID.CH6_SERIES_A_START]: {
		speaker: 'npc',
		text: 'Nhà đầu tư thiên thần (hào hứng): "Chúng tôi đồng ý rót vốn Series A! 5 tỷ đồng sẽ được chuyển vào tài khoản công ty ngay hôm nay!"',
		textVi:
			'Nhà đầu tư thiên thần (hào hứng): "Chúng tôi đồng ý rót vốn Series A! 5 tỷ đồng sẽ được chuyển vào tài khoản công ty ngay hôm nay!"',
		textEn:
			'Angel Investor (excited): "We agree to Series A funding! 5 billion will be transferred to company account today!"',
		next: Chapter6DialogueID.CH6_SERIES_A_RECEIVE,
	},
	[Chapter6DialogueID.CH6_SERIES_A_RECEIVE]: {
		speaker: 'player',
		text: '(Hét lớn) Chúng ta sống rồi!',
		textVi: '(Hét lớn) Chúng ta sống rồi!',
		textEn: '(Shouting) We are alive!',
		effects: [{ stat: StatID.MONEY, value: 5000000000 }],
		next: Chapter6DialogueID.CH6_END,
	},

	// NEW: Developer Scenarios (Startup Tech Decisions)
	[Chapter6DialogueID.CH6_DECISION_ARCH]: {
		speaker: 'narrator',
		text: 'Khởi động dự án. Chọn kiến trúc nào cho MVP (Minimum Viable Product)?',
		textVi:
			'Khởi động dự án. Chọn kiến trúc nào cho MVP (Minimum Viable Product)?',
		textEn: 'Starting project. Which architecture for MVP?',
		choices: [
			{
				id: 'arch_mono',
				text: 'Monolith: Nhanh, gọn, dễ deploy (Tech Debt về sau)',
				textVi: 'Monolith: Nhanh, gọn, dễ deploy (Tech Debt về sau)',
				textEn: 'Monolith: Fast, simple, easy deploy (Future Tech Debt)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.MONEY, value: 10000000 }, // Save cost
				],
				next: Chapter6DialogueID.CH6_DECISION_DB,
			},
			{
				id: 'arch_micro',
				text: 'Microservices: Scale tốt nhưng phức tạp (Overengineering)',
				textVi: 'Microservices: Scale tốt nhưng phức tạp (Overengineering)',
				textEn: 'Microservices: Good Scale but complex (Overengineering)',
				effects: [
					{ stat: StatID.VISION, value: -5 },
					{ stat: StatID.MONEY, value: -5000000 }, // Burn rate high
					{ stat: StatID.STRESS, value: 7 },
				],
				next: Chapter6DialogueID.CH6_DECISION_DB,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_DB]: {
		speaker: 'narrator',
		text: 'Chọn Database chính cho hệ thống? Dữ liệu có cấu trúc phức tạp.',
		textVi: 'Chọn Database chính cho hệ thống? Dữ liệu có cấu trúc phức tạp.',
		textEn: 'Choose main Database? Data is complex structured.',
		choices: [
			{
				id: 'db_sql',
				text: 'PostgreSQL/MySQL: An toàn (ACID), Join tốt',
				textVi: 'PostgreSQL/MySQL: An toàn (ACID), Join tốt',
				textEn: 'PostgreSQL/MySQL: Safe (ACID), Good Join',
				effects: [{ stat: StatID.VISION, value: 7 }],
				next: Chapter6DialogueID.CH6_DECISION_CLOUD,
			},
			{
				id: 'db_nosql',
				text: 'MongoDB: Schemaless, Dev nhanh (Rủi ro Data Integrity)',
				textVi: 'MongoDB: Schemaless, Dev nhanh (Rủi ro Data Integrity)',
				textEn: 'MongoDB: Schemaless, Fast Dev (Data Integrity Risk)',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.MONEY, value: 5000000 }, // Faster dev
				],
				next: Chapter6DialogueID.CH6_DECISION_CLOUD,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_CLOUD]: {
		speaker: 'narrator',
		text: 'Chọn Cloud Provider nào để tiết kiệm chi phí ban đầu?',
		textVi: 'Chọn Cloud Provider nào để tiết kiệm chi phí ban đầu?',
		textEn: 'Choose Cloud Provider to save initial cost?',
		choices: [
			{
				id: 'cloud_aws',
				text: 'AWS: Đầy đủ nhưng phức tạp, dễ tốn tiền (Vendor Lock-in)',
				textVi: 'AWS: Đầy đủ nhưng phức tạp, dễ tốn tiền (Vendor Lock-in)',
				textEn: 'AWS: Complete but complex, costly (Vendor Lock-in)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: -2000000 },
				],
				next: Chapter6DialogueID.CH6_HIRING_START,
			},
			{
				id: 'cloud_vps',
				text: 'VPS/DigitalOcean: Rẻ, tự config (Tốn công vận hành)',
				textVi: 'VPS/DigitalOcean: Rẻ, tự config (Tốn công vận hành)',
				textEn: 'VPS/DigitalOcean: Cheap, self-config (Ops effort)',
				effects: [
					{ stat: StatID.MONEY, value: 1000000 }, // Save money
					{ stat: StatID.STRESS, value: 7 }, // Ops headache
				],
				next: Chapter6DialogueID.CH6_HIRING_START,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_CACHE]: {
		speaker: 'narrator',
		text: 'Hệ thống chậm. Cần Cache. Dùng gì?',
		textVi: 'Hệ thống chậm. Cần Cache. Dùng gì?',
		textEn: 'System slow. Need Cache. Use what?',
		choices: [
			{
				id: 'cache_redis',
				text: 'Redis: In-memory, nhanh, phổ biến',
				textVi: 'Redis: In-memory, nhanh, phổ biến',
				textEn: 'Redis: In-memory, fast, popular',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter6DialogueID.CH6_DECISION_SCALE,
			},
			{
				id: 'cache_file',
				text: 'File Cache: Đơn giản nhưng khó Scale',
				textVi: 'File Cache: Đơn giản nhưng khó Scale',
				textEn: 'File Cache: Simple but hard to Scale',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter6DialogueID.CH6_DECISION_SCALE,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_SCALE]: {
		speaker: 'narrator',
		text: 'User tăng đột biến. Server quá tải. Scale thế nào?',
		textVi: 'User tăng đột biến. Server quá tải. Scale thế nào?',
		textEn: 'User spike. Server overload. How to scale?',
		choices: [
			{
				id: 'scale_vert',
				text: 'Vertical: Nâng cấp Server xịn hơn (Giới hạn phần cứng)',
				textVi: 'Vertical: Nâng cấp Server xịn hơn (Giới hạn phần cứng)',
				textEn: 'Vertical: Upgrade Server (Hardware Limit)',
				effects: [
					{ stat: StatID.MONEY, value: -1000000 },
					{ stat: StatID.VISION, value: -3 },
				],
				next: Chapter6DialogueID.CH6_INVESTOR_START, // End Quiz Chunk 2
			},
			{
				id: 'scale_horiz',
				text: 'Horizontal: Thêm nhiều Server nhỏ + Load Balancer',
				textVi: 'Horizontal: Thêm nhiều Server nhỏ + Load Balancer',
				textEn: 'Horizontal: Add small Servers + Load Balancer',
				effects: [
					{ stat: StatID.VISION, value: 7 },
					{ stat: StatID.MONEY, value: -1500000 },
				],
				next: Chapter6DialogueID.CH6_INVESTOR_START, // End Quiz Chunk 2
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_HIRE]: {
		speaker: 'narrator',
		text: 'Tuyển dụng nhân viên đầu tiên (Key Member). Ưu tiên tiêu chí nào?',
		textVi: 'Tuyển dụng nhân viên đầu tiên (Key Member). Ưu tiên tiêu chí nào?',
		textEn: 'Hiring first Key Member. Priority?',
		choices: [
			{
				id: 'hire_attitude',
				text: 'Thái độ (Attitude) > Kỹ năng (Skill): Đào tạo được',
				textVi: 'Thái độ (Attitude) > Kỹ năng (Skill): Đào tạo được',
				textEn: 'Attitude > Skill: Trainable',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.VISION, value: -3 }, // Slow start
				],
				next: Chapter6DialogueID.CH6_DECISION_ARCH,
			},
			{
				id: 'hire_rockstar',
				text: 'Rockstar Developer: Code giỏi nhưng cái tôi lớn (Toxic)',
				textVi: 'Rockstar Developer: Code giỏi nhưng cái tôi lớn (Toxic)',
				textEn: 'Rockstar Developer: Good code but big ego (Toxic)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.HUMANITY, value: -5 },
					{ stat: StatID.STRESS, value: 7 },
				],
				next: Chapter6DialogueID.CH6_DECISION_ARCH,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_FIRE]: {
		speaker: 'narrator',
		text: 'Một nhân viên làm việc kém hiệu quả, ảnh hưởng tiến độ. Xử lý sao?',
		textVi:
			'Một nhân viên làm việc kém hiệu quả, ảnh hưởng tiến độ. Xử lý sao?',
		textEn: 'An employee underperforms, affecting progress. How to handle?',
		choices: [
			{
				id: 'fire_fast',
				text: 'Sa thải ngay: "Hire slow, Fire fast" (Bảo vệ team)',
				textVi: 'Sa thải ngay: "Hire slow, Fire fast" (Bảo vệ team)',
				textEn: 'Fire immediately: "Hire slow, Fire fast" (Protect team)',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				next: Chapter6DialogueID.CH6_BIG_CONTRACT_START, // End Quiz Chunk 3
			},
			{
				id: 'fire_coach',
				text: 'PIP (Performance Improvement Plan): Cho cơ hội sửa sai',
				textVi: 'PIP (Performance Improvement Plan): Cho cơ hội sửa sai',
				textEn: 'PIP: Give chance to improve',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: -10000000 }, // Wasted salary
				],
				next: Chapter6DialogueID.CH6_BIG_CONTRACT_START, // End Quiz Chunk 3
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_MENTOR]: {
		speaker: 'narrator',
		text: 'Bạn cảm thấy cô đơn và quá tải với vai trò Founder. Cần Mentor?',
		textVi: 'Bạn cảm thấy cô đơn và quá tải với vai trò Founder. Cần Mentor?',
		textEn: 'Lonely and overwhelmed as Founder. Need Mentor?',
		choices: [
			{
				id: 'mentor_find',
				text: 'Tìm Mentor: Chia sẻ cổ phần để đổi lấy kinh nghiệm',
				textVi: 'Tìm Mentor: Chia sẻ cổ phần để đổi lấy kinh nghiệm',
				textEn: 'Find Mentor: Share equity for experience',
				effects: [
					{ stat: StatID.VISION, value: 7 },
					{ stat: StatID.MONEY, value: -25000000 }, // Equity value
				],
				next: Chapter6DialogueID.CH6_DECISION_PIVOT,
			},
			{
				id: 'mentor_self',
				text: 'Tự học: Thử và sai (Giữ 100% cổ phần)',
				textVi: 'Tự học: Thử và sai (Giữ 100% cổ phần)',
				textEn: 'Self-taught: Trial & Error (Keep 100% equity)',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.STRESS, value: 20 },
				],
				next: Chapter6DialogueID.CH6_DECISION_PIVOT,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_PIVOT]: {
		speaker: 'narrator',
		text: 'Sản phẩm ra mắt không đạt Product-Market Fit. User không quay lại.',
		textVi:
			'Sản phẩm ra mắt không đạt Product-Market Fit. User không quay lại.',
		textEn: 'Product launch failed Product-Market Fit. Users not returning.',
		choices: [
			{
				id: 'pivot_yes',
				text: 'Pivot: Đập đi xây lại theo hướng mới (Tốn kém nhưng cần thiết)',
				textVi:
					'Pivot: Đập đi xây lại theo hướng mới (Tốn kém nhưng cần thiết)',
				textEn: 'Pivot: Rebuild new direction (Costly but needed)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: -50000000 }, // Burn rate
				],
				next: Chapter6DialogueID.CH6_DECISION_CULTURE,
			},
			{
				id: 'pivot_no',
				text: 'Persevere: Kiên trì tối ưu sản phẩm cũ (Cố đấm ăn xôi)',
				textVi: 'Persevere: Kiên trì tối ưu sản phẩm cũ (Cố đấm ăn xôi)',
				textEn: 'Persevere: Optimize old product (Stubborn)',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.MONEY, value: -20000000 }, // Slow death
				],
				next: Chapter6DialogueID.CH6_DECISION_CULTURE,
			},
		],
	},
	[Chapter6DialogueID.CH6_DECISION_CULTURE]: {
		speaker: 'narrator',
		text: 'Văn hóa công ty (Culture). Bạn muốn xây dựng kiểu nào?',
		textVi: 'Văn hóa công ty (Culture). Bạn muốn xây dựng kiểu nào?',
		textEn: 'Company Culture. Which type?',
		choices: [
			{
				id: 'cult_family',
				text: 'Gia đình: Yêu thương, bao dung (Thoải mái nhưng chậm)',
				textVi: 'Gia đình: Yêu thương, bao dung (Thoải mái nhưng chậm)',
				textEn: 'Family: Loving, forgiving (Comfortable but slow)',
				effects: [
					{ stat: StatID.HUMANITY, value: 7 },
					{ stat: StatID.VISION, value: -3 },
				],
				next: Chapter6DialogueID.CH6_SALARY_START, // End Quiz Chunk 4
			},
			{
				id: 'cult_sport',
				text: 'Đội bóng chuyên nghiệp: Hiệu suất cao, đào thải khắc nghiệt',
				textVi: 'Đội bóng chuyên nghiệp: Hiệu suất cao, đào thải khắc nghiệt',
				textEn: 'Pro Sports Team: High performance, harsh elimination',
				effects: [
					{ stat: StatID.VISION, value: 7 },
					{ stat: StatID.STRESS, value: 20 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				next: Chapter6DialogueID.CH6_SALARY_START, // End Quiz Chunk 4
			},
		],
	},
	[Chapter6DialogueID.CH6_END]: {
		speaker: 'narrator',
		text: 'Hợp đồng đầu tư được ký kết. Tiếng nổ của sâm-panh vang lên. Các bạn ôm chầm lấy nhau. Nhưng ánh mắt của Co-founder có gì đó là lạ.',
		textVi:
			'Hợp đồng đầu tư được ký kết. Tiếng nổ của sâm-panh vang lên. Các bạn ôm chầm lấy nhau. Nhưng ánh mắt của Co-founder có gì đó là lạ.',
		textEn:
			"Investment contract signed. Champagne popped. You hugged each other. But Co-founder's eyes had something strange.",
		next: Chapter7DialogueID.CH7_INTRO,
	},
};
