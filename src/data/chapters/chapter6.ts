// ==========================================
// CHAPTER 6: DEPLOYMENT & CRASH (TRIỂN KHAI VÀ SỤP ĐỔ)
// Timeline: 25-30 tuổi
// Theme: Tham vọng, Sự phản bội và Cú ngã ngựa
// ==========================================

import { Chapter6DialogueID, Chapter6SceneID, Chapter6TodoID, Chapter7DialogueID, ConditionType, FlagID, Operator, StatID } from '../enum';
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
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch6_todo_pitch',
				text: 'Pitching gọi vốn',
				textVi: 'Pitching gọi vốn',
				textEn: 'Pitching for funding',
				effects: [{ stat: StatID.VISION, value: 5 }],
				cost: { stress: 5 }, // Increased Stress cost
			},

			{
				id: 'ch6_todo_fire_staff',
				text: 'Sa thải nhân viên kém',
				textVi: 'Sa thải nhân viên kém',
				textEn: 'Fire underperforming staff',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { humanity: 5 },
			},
			{
				id: 'ch6_todo_review_code',
				text: 'Review code của team',
				textVi: 'Review code của team',
				textEn: 'Review team code',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch6_todo_handle_drama',
				text: 'Giải quyết drama công sở',
				textVi: 'Giải quyết drama công sở',
				textEn: 'Resolve office drama',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				cost: { stress: 3 },
			},

			{
				id: 'ch6_todo_work_weekend',
				text: 'Làm việc cả cuối tuần',
				textVi: 'Làm việc cả cuối tuần',
				textEn: 'Work on weekends',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { humanity: 5, health: 5 }, // Increased Humanity cost
			},

			{
				id: 'ch6_todo_check_competitor',
				text: 'Soi sản phẩm đối thủ',
				textVi: 'Soi sản phẩm đối thủ',
				textEn: 'Spy on competitor',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},

			{
				id: 'ch6_todo_fix_prod_bug',
				text: 'Fix bug trên Production lúc 3h sáng',
				textVi: 'Fix bug trên Production lúc 3h sáng',
				textEn: 'Fix Production bug at 3AM',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { health: 5 },
			},
			{
				id: 'ch6_todo_write_vision',
				text: 'Viết Vision & Mission',
				textVi: 'Viết Vision & Mission',
				textEn: 'Write Vision & Mission',
				effects: [{ stat: StatID.VISION, value: 5 }],
			},
			{
				id: 'ch6_todo_ignore_family',
				text: 'Quên sinh nhật người thân',
				textVi: 'Quên sinh nhật người thân',
				textEn: 'Forget relative birthday',
				cost: { humanity: 5 },
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
			},
			{
				id: 'ch6_todo_read_startup_book',
				text: 'Đọc sách "Zero to One"',
				textVi: 'Đọc sách "Zero to One"',
				textEn: 'Read "Zero to One"',
				effects: [{ stat: StatID.VISION, value: 3 }],
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
				effects: [{ stat: StatID.VISION, value: 3 }], // Self-reflection
			},
			{
				id: 'ch6_todo_call_bros',
				text: 'Gọi điện cho anh em Co-founder',
				textVi: 'Gọi điện cho anh em Co-founder',
				textEn: 'Call Co-founders',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
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
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch6_dream_fall_fly',
						text: 'Mọc cánh bay lên',
						textVi: 'Mọc cánh bay lên',
						textEn: 'Grow wings and fly',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch6_dream_fall_accept',
						text: 'Nhắm mắt chấp nhận',
						textVi: 'Nhắm mắt chấp nhận',
						textEn: 'Close eyes and accept',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch6_dream_fall_grab',
						text: 'Cố bám vào cửa sổ',
						textVi: 'Cố bám vào cửa sổ',
						textEn: 'Grab a window',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }], // Survival instinct
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
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch6_dream_betray_ask',
						text: 'Hỏi "Tại sao?"',
						textVi: 'Hỏi "Tại sao?"',
						textEn: 'Ask "Why?"',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch6_dream_betray_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch6_dream_betray_forgive',
						text: 'Tha thứ',
						textVi: 'Tha thứ',
						textEn: 'Forgive',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch6_dream_throne_lonely',
						text: 'Cảm thấy cô đơn',
						textVi: 'Cảm thấy cô đơn',
						textEn: 'Feel lonely',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch6_dream_throne_invite',
						text: 'Gọi mọi người đến',
						textVi: 'Gọi mọi người đến',
						textEn: 'Call everyone',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch6_dream_throne_leave',
						text: 'Bỏ đi',
						textVi: 'Bỏ đi',
						textEn: 'Leave',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -3 }],
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
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch6_dream_fire_save_people',
						text: 'Cứu nhân viên',
						textVi: 'Cứu nhân viên',
						textEn: 'Save employees',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch6_dream_fire_run',
						text: 'Chạy thoát thân',
						textVi: 'Chạy thoát thân',
						textEn: 'Run for life',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 3 }],
					},
					{
						id: 'ch6_dream_fire_watch',
						text: 'Đứng nhìn',
						textVi: 'Đứng nhìn',
						textEn: 'Watch',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
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
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch6_dream_maze_mark',
						text: 'Đánh dấu đường đi',
						textVi: 'Đánh dấu đường đi',
						textEn: 'Mark the path',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch6_dream_maze_break',
						text: 'Đập tường',
						textVi: 'Đập tường',
						textEn: 'Break walls',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch6_dream_maze_sit',
						text: 'Ngồi xuống nghỉ',
						textVi: 'Ngồi xuống nghỉ',
						textEn: 'Sit and rest',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 3 }],
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
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch6_reflect_sleep_1_rest',
					text: 'Nghỉ để sáng mai tiếp tục',
					textVi: 'Nghỉ để sáng mai tiếp tục',
					textEn: 'Rest to continue tomorrow',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
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
						{ stat: StatID.VISION, value: 5 },
						{ stat: StatID.HEALTH, value: -3 },
					],
				},
				{
					id: 'ch6_reflect_success_1_limit',
					text: 'Nhưng cơ thể có giới hạn',
					textVi: 'Nhưng cơ thể có giới hạn',
					textEn: 'But body has limits',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
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
					effects: [{ stat: StatID.STRESS, value: -3 }],
				},
				{
					id: 'ch6_reflect_sleep_2_tomorrow',
					text: 'Mai sẽ mạnh mẽ hơn',
					textVi: 'Mai sẽ mạnh mẽ hơn',
					textEn: 'Tomorrow will be stronger',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 5 }],
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
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch6_reflect_success_2_rest',
					text: 'Nhưng giờ cần nghỉ',
					textVi: 'Nhưng giờ cần nghỉ',
					textEn: 'But need rest now',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
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
					effects: [{ stat: StatID.HEALTH, value: 5 }],
				},
				{
					id: 'ch6_reflect_sleep_3_tired',
					text: 'Quá mệt rồi',
					textVi: 'Quá mệt rồi',
					textEn: 'Too tired',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -3 }],
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
		next: Chapter6DialogueID.CH6_INVESTOR_START,
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
				effects: [{ stat: StatID.MONEY, value: -2000000 }],
				next: Chapter6DialogueID.CH6_INVESTOR_MEET,
			},
			{
				id: 'choice_investor_skip',
				text: 'Tiết kiệm: Mời cafe vỉa hè (Vision +1)',
				textVi: 'Tiết kiệm: Mời cafe vỉa hè (Vision +1)',
				textEn: 'Save: Street coffee (Vision +1)',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter6DialogueID.CH6_STARTUP_MOTIVATION,
			},
		],
	},
	[Chapter6DialogueID.CH6_INVESTOR_MEET]: {
		speaker: 'narrator',
		text: 'Bữa tối tốn kém nhưng bạn học được nhiều điều từ tầm nhìn của họ.',
		textVi: 'Bữa tối tốn kém nhưng bạn học được nhiều điều từ tầm nhìn của họ.',
		textEn: 'Expensive dinner but you learned a lot from their vision.',
		next: Chapter6DialogueID.CH6_STARTUP_MOTIVATION,
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
		speaker: 'narrator',
		text: 'Kích hoạt di sản (Legacy Activation): Bạn lôi giấy phép "Công ty Ma" của bố ra. Vốn điều lệ 20 tỷ (trên giấy). Đây là "Virtual Capital" (Mock Data) - một lớp "Firewall" tạo uy tín cực lớn với đối tác.',
		textVi:
			'Kích hoạt di sản (Legacy Activation): Bạn lôi giấy phép "Công ty Ma" của bố ra. Vốn điều lệ 20 tỷ (trên giấy). Đây là "Virtual Capital" (Mock Data) - một lớp "Firewall" tạo uy tín cực lớn với đối tác.',
		textEn:
			'Legacy Activation: You used Father\'s "Ghost Company" license. 20 billion charter capital (on paper). This is "Virtual Capital" (Mock Data) - a "Firewall" creating huge credibility.',
		effects: [{ stat: StatID.VISION, value: 1 }],
		next: Chapter6DialogueID.CH6_FRAUD_START, // Redirect to Investor Fraud Check
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
				text: 'Làm đẹp số liệu: Để lấy vốn đã (Money +500M, Risk)',
				textVi: 'Làm đẹp số liệu: Để lấy vốn đã (Money +500M, Risk)',
				textEn: 'Fake data: Get funding first (Money +500M, Risk)',
				effects: [{ stat: StatID.MONEY, value: 500000000 }],
				next: Chapter6DialogueID.CH6_FRAUD_EXPOSED,
			},
			{
				id: 'choice_honest_data',
				text: 'Trung thực: Chấp nhận khó khăn (Steel Mind +3)',
				textVi: 'Trung thực: Chấp nhận khó khăn (Steel Mind +3)',
				textEn: 'Honest: Accept hardship (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter6DialogueID.CH6_STARTUP_REPLY,
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
			{ stat: StatID.VISION, value: -10 },
			{ stat: StatID.STRESS, value: 10 },
		],
		next: Chapter6DialogueID.CH6_STARTUP_REPLY,
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
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_START,
			},
			{
				id: 'choice_humble_start',
				text: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textVi: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textEn: "Thank you. I won't let you down.",
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
				next: Chapter6DialogueID.CH6_HIRING_START, // Redirect to Hiring Friends
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
				text: 'Nhận vào: Bạn bè giúp nhau (Humanity +5, Vision -3)',
				textVi: 'Nhận vào: Bạn bè giúp nhau (Humanity +5, Vision -3)',
				textEn: 'Hire: Friends help friends (Humanity +5, Vision -3)',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.VISION, value: -3 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_START,
			},
			{
				id: 'choice_reject_friend',
				text: 'Từ chối: Công việc là công việc (Vision +3, Humanity -3)',
				textVi: 'Từ chối: Công việc là công việc (Vision +3, Humanity -3)',
				textEn: 'Reject: Business is business (Vision +3, Humanity -3)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.HUMANITY, value: -3 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_START,
			},
		],
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
				text: 'Resort 5 sao: Anh em là trên hết (-50M, Humanity +5)',
				textVi: 'Resort 5 sao: Anh em là trên hết (-50M, Humanity +5)',
				textEn: '5-star Resort: Bros before code (-50M, Humanity +5)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 50000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -50000000 },
					{ stat: StatID.HUMANITY, value: 5 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_LUXURY,
			},
			{
				id: 'choice_team_building_motel',
				text: 'Nhà nghỉ Vũng Tàu: Tiết kiệm là quốc sách (-10M, Humanity +3)',
				textVi: 'Nhà nghỉ Vũng Tàu: Tiết kiệm là quốc sách (-10M, Humanity +3)',
				textEn: 'Vung Tau Motel: Saving is policy (-10M, Humanity +3)',
				effects: [
					{ stat: StatID.MONEY, value: -10000000 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
				next: Chapter6DialogueID.CH6_TEAM_BUILDING_MOTEL,
			},
			{
				id: 'choice_team_building_park',
				text: 'Công viên: Team building 0 đồng (Humanity -5)',
				textVi: 'Công viên: Team building 0 đồng (Humanity -5)',
				textEn: 'Public Park: 0 cost team building (Humanity -5)',
				effects: [{ stat: StatID.HUMANITY, value: -5 }],
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
			{ stat: StatID.HUMANITY, value: -10 },
			{ stat: StatID.VISION, value: -5 },
		],
		next: Chapter6DialogueID.CH6_PERSONNEL_1,
	},

	// 6.2 Personnel Crisis
	[Chapter6DialogueID.CH6_PERSONNEL_1]: {
		speaker: 'narrator',
		text: 'Tuyển nhân viên đầu tiên (người thứ 5). Cậu em nhiệt huyết, ngoan ngoãn. Nhưng sau 2 năm, cậu ta tụt hậu, gây Bug nghiêm trọng xóa sạch dữ liệu khách hàng trên Production.',
		textVi:
			'Tuyển nhân viên đầu tiên (người thứ 5). Cậu em nhiệt huyết, ngoan ngoãn. Nhưng sau 2 năm, cậu ta tụt hậu, gây Bug nghiêm trọng xóa sạch dữ liệu khách hàng trên Production.',
		textEn:
			'Hired 1st employee (5th person). Enthusiastic, obedient. But after 2 years, fell behind, caused critical Bug wiping client data on Production.',
		next: Chapter6DialogueID.CH6_PERSONNEL_CAFE,
	},
	[Chapter6DialogueID.CH6_PERSONNEL_CAFE]: {
		speaker: 'narrator',
		text: 'Hẹn cậu ấy ra quán cafe. Trời mưa tầm tã. Cậu ấy ngồi co ro, tay run run cầm cốc nâu nóng.',
		textVi:
			'Hẹn cậu ấy ra quán cafe. Trời mưa tầm tã. Cậu ấy ngồi co ro, tay run run cầm cốc nâu nóng.',
		textEn:
			'Met him at a cafe. Pouring rain. He sat shivering, trembling hands holding hot coffee.',
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
				text: 'Sa thải (Steel Mind ++, Humanity --)',
				textVi: 'Sa thải (Steel Mind ++, Humanity --)',
				textEn: 'Fire (Steel Mind ++, Humanity --)',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.HUMANITY, value: -5 },
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
		speaker: 'narrator',
		text: 'Cậu ấy bỏ đi dưới mưa. Bạn ngồi lại một mình. Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác.',
		textVi:
			'Cậu ấy bỏ đi dưới mưa. Bạn ngồi lại một mình. Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác.',
		textEn:
			'He walked away in the rain. You sat alone. First cruel management lesson: To be a boss is to be ruthless.',
		next: Chapter6DialogueID.CH6_END,
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
		next: Chapter6DialogueID.CH6_STAFF_QUIT_CHECK,
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
				next: Chapter6DialogueID.CH6_MARKET_1,
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
			{ stat: StatID.VISION, value: -5 },
		],
		next: Chapter6DialogueID.CH6_MARKET_1,
	},

	// 6.3 Market
	// NEW: Intro
	[Chapter6DialogueID.CH6_INTRO]: {
		speaker: 'narrator',
		text: 'Căn phòng trọ ngổn ngang dây cáp và vỏ hộp mì tôm. Ba người bạn, ba chiếc laptop, và một giấc mơ thay đổi thế giới (hoặc ít nhất là kiếm được tiền).',
		textVi:
			'Căn phòng trọ ngổn ngang dây cáp và vỏ hộp mì tôm. Ba người bạn, ba chiếc laptop, và một giấc mơ thay đổi thế giới (hoặc ít nhất là kiếm được tiền).',
		textEn:
			'Rental room messy with cables and noodle boxes. Three friends, three laptops, and a dream to change the world (or at least make money).',
		next: 'ch6_start',
	},

	[Chapter6DialogueID.CH6_MARKET_1]: {
		speaker: 'narrator',
		text: '29 tuổi. Tham vọng làm Super App (AI, Blockchain). Over-engineering. Ra mắt: 0 user. Thị trường không cần.',
		textVi:
			'29 tuổi. Tham vọng làm Super App (AI, Blockchain). Over-engineering. Ra mắt: 0 user. Thị trường không cần.',
		textEn:
			"29 years old. Ambition for Super App (AI, Blockchain). Over-engineering. Launch: 0 users. Market didn't need it.",
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
				text: 'Thuê Server giá rẻ: Tiết kiệm chi phí (Money +10M, Risk)',
				textVi: 'Thuê Server giá rẻ: Tiết kiệm chi phí (Money +10M, Risk)',
				textEn: 'Cheap Server: Save cost (Money +10M, Risk)',
				effects: [{ stat: StatID.MONEY, value: 10000000 }],
				next: Chapter6DialogueID.CH6_SERVER_CRASH,
			},
			{
				id: 'choice_server_premium',
				text: 'Server xịn: Đắt xắt ra miếng (Money -20M, Vision +3)',
				textVi: 'Server xịn: Đắt xắt ra miếng (Money -20M, Vision +3)',
				textEn: 'Premium Server: Quality costs (Money -20M, Vision +3)',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.VISION, value: 3 },
				],
				next: Chapter6DialogueID.CH6_MARKET_2,
			},
		],
	},
	[Chapter6DialogueID.CH6_SERVER_CRASH]: {
		speaker: 'narrator',
		text: 'Server giá rẻ liên tục bị down vào giờ cao điểm. Khách hàng phàn nàn dữ dội.',
		textVi:
			'Server giá rẻ liên tục bị down vào giờ cao điểm. Khách hàng phàn nàn dữ dội.',
		textEn:
			'Cheap server keeps crashing at peak hours. Customers complain loudly.',
		effects: [
			{ stat: StatID.VISION, value: -3 },
			{ stat: StatID.STRESS, value: 3 },
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
		next: Chapter6DialogueID.CH6_SALARY_START,
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
				text: 'Khất lương: Anh em thông cảm (Humanity -5)',
				textVi: 'Khất lương: Anh em thông cảm (Humanity -5)',
				textEn: 'Delay: Bros please understand (Humanity -5)',
				effects: [{ stat: StatID.HUMANITY, value: -5 }],
				next: Chapter6DialogueID.CH6_MARKET_FEAR,
			},
		],
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
		effects: [{ stat: StatID.STEELMIND, value: -3 }],
		next: Chapter6DialogueID.CH6_REDEMPTION_1,
	},

	// 6.4 Redemption
	[Chapter6DialogueID.CH6_REDEMPTION_1]: {
		speaker: 'narrator',
		text: 'Gap Year (Nghiên cứu thị trường): Bạn quyết định dành 1 năm đi nước ngoài (Nhật, Mỹ, Sing) để tìm đường. Ở nhà, Anh Q, Anh D, Anh N lo vận hành mảng Outsource (Maintenance Mode).',
		textVi:
			'Gap Year (Nghiên cứu thị trường): Bạn quyết định dành 1 năm đi nước ngoài (Nhật, Mỹ, Sing) để tìm đường. Ở nhà, Anh Q, Anh D, Anh N lo vận hành mảng Outsource (Maintenance Mode).',
		textEn:
			'Gap Year (Market Research): You spent 1 year abroad (Japan, US, Sing) to find the way. At home, Q, D, N managed Outsource (Maintenance Mode).',
		next: Chapter6DialogueID.CH6_REDEMPTION_2,
	},
	[Chapter6DialogueID.CH6_REDEMPTION_2]: {
		speaker: 'narrator',
		text: 'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textVi:
			'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textEn:
			'Enlightenment: "Tech is just a tool. Solving Pain Point is the goal."',
		effects: [{ stat: StatID.VISION, value: 5 }],
		next: Chapter6DialogueID.CH6_SERIES_A_START,
	},

	// NEW: Series A Funding
	[Chapter6DialogueID.CH6_SERIES_A_START]: {
		speaker: 'narrator',
		text: 'Tin vui! Nhà đầu tư thiên thần đã đồng ý rót vốn Series A. 5 tỷ đồng được chuyển vào tài khoản công ty.',
		textVi:
			'Tin vui! Nhà đầu tư thiên thần đã đồng ý rót vốn Series A. 5 tỷ đồng được chuyển vào tài khoản công ty.',
		textEn:
			'Good news! Angel investor agreed to Series A funding. 5 billion transferred to company account.',
		next: Chapter6DialogueID.CH6_SERIES_A_RECEIVE,
	},
	[Chapter6DialogueID.CH6_SERIES_A_RECEIVE]: {
		speaker: 'player',
		text: '(Hét lớn) Chúng ta sống rồi!',
		textVi: '(Hét lớn) Chúng ta sống rồi!',
		textEn: '(Shouting) We are alive!',
		effects: [{ stat: StatID.MONEY, value: 5000000000 }],
		next: Chapter7DialogueID.CH7_INTRO,
	},
};
