// ==========================================
// CHAPTER 9: SANDBOX MODE (CHẾ ĐỘ TỰ DO)
// Timeline: 55+ tuổi
// Theme: Di sản, Sự viên mãn và Vòng lặp
// ==========================================

import {
	Chapter9DialogueID,
	Chapter9SceneID,
	Chapter9TodoID,
	ConditionType,
	Operator,
	StatID,
	Dialogue_END,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

export const chapter9: Chapter = {
	id: 9,
	name: 'Sandbox Mode',
	nameVi: 'Chế Độ Tự Do',
	nameEn: 'Sandbox Mode',
	ageRange: '55+ tuổi',
	theme: 'Di sản, Sự viên mãn và Vòng lặp',
	themeVi: 'Di sản, Sự viên mãn và Vòng lặp',
	themeEn: 'Legacy, Fulfillment, and The Loop',
	scenes: [
		{
			id: Chapter9SceneID.CH9_BILLIONAIRE,
			name: 'Tỷ phú',
			nameVi: 'Khoảnh khắc Tỷ phú',
			nameEn: 'Billionaire Moment',
			background: '/assets/sprites/backgrounds/skyscraper_office_top.png',
			music: '/assets/audio/music/chapters/ch9_legacy.mp3',
			dialogueStart: Chapter9DialogueID.CH9_INTRO, // Changed from ch9_billionaire_1
		},
		{
			id: Chapter9SceneID.CH9_GIFT,
			name: 'Món quà cho Bố',
			nameVi: 'Món quà cho Bố',
			nameEn: 'Gift for Father',
			background: '/assets/sprites/backgrounds/fortress_rebuilt.png',
			music: '/assets/audio/music/chapters/ch9_legacy.mp3',
			dialogueStart: Chapter9DialogueID.CH9_GIFT_1,
		},
		{
			id: Chapter9SceneID.CH9_ENDING,
			name: 'Kết thúc',
			nameVi: 'Thế giới mở',
			nameEn: 'Open World',
			background: '/assets/sprites/backgrounds/sunset_hill.png',
			music: '/assets/audio/music/chapters/ch9_legacy.mp3',
			dialogueStart: Chapter9DialogueID.CH9_ENDING_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter9TodoID.CH9_TODO_GRANDCHILD,
				text: 'Chơi với cháu nội',
				textVi: 'Chơi với cháu nội',
				textEn: 'Play with grandchild',
				effects: [{ stat: StatID.HUMANITY, value: 5 }], // Happiness
				cost: { health: 2 }, // Energy -
			},
			{
				id: 'ch9_todo_visit_hill',
				text: 'Về thăm đồi cũ ở Lào Cai',
				textVi: 'Về thăm đồi cũ ở Lào Cai',
				textEn: 'Visit old hill in Lao Cai',
				effects: [{ stat: StatID.HUMANITY, value: 3 }], // Nostalgia
			},

			{
				id: 'ch9_todo_teach_kids',
				text: 'Dạy trẻ em nghèo học code',
				textVi: 'Dạy trẻ em nghèo học code',
				textEn: 'Teach poor kids to code',
				effects: [{ stat: StatID.VISION, value: 1 }], // Legacy
			},
			{
				id: 'ch9_todo_sunset',
				text: 'Ngồi ngắm hoàng hôn trong vườn',
				textVi: 'Ngồi ngắm hoàng hôn trong vườn',
				textEn: 'Watch sunset in garden',
				reward: { stress: -3 }, // Peace
			},
			{
				id: 'ch9_todo_call_friends',
				text: 'Gọi điện hỏi thăm bạn bè cũ',
				textVi: 'Gọi điện hỏi thăm bạn bè cũ',
				textEn: 'Call old friends',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch9_todo_album',
				text: 'Xem lại album ảnh gia đình',
				textVi: 'Xem lại album ảnh gia đình',
				textEn: 'Review family album',
				effects: [{ stat: StatID.HUMANITY, value: 3 }], // Nostalgia
			},
			{
				id: 'ch9_todo_write_letter',
				text: 'Viết thư cho bản thân năm 20 tuổi',
				textVi: 'Viết thư cho bản thân năm 20 tuổi',
				textEn: 'Write letter to 20-year-old self',
				effects: [{ stat: StatID.VISION, value: 1 }], // Wisdom
			},
			{
				id: 'ch9_todo_nap',
				text: 'Ngủ trưa',
				textVi: 'Ngủ trưa',
				textEn: 'Nap',
				reward: { health: 3 },
			},
			{
				id: 'ch9_todo_music',
				text: 'Nghe nhạc thính phòng',
				textVi: 'Nghe nhạc thính phòng',
				textEn: 'Listen to chamber music',
				reward: { stress: -3 }, // Peace
			},
			{
				id: 'ch9_todo_plant_tree',
				text: 'Trồng một cái cây',
				textVi: 'Trồng một cái cây',
				textEn: 'Plant a tree',
				effects: [{ stat: StatID.VISION, value: 1 }], // Legacy
			},
			{
				id: 'ch9_todo_advice_startup',
				text: 'Cho lời khuyên một Startup trẻ',
				textVi: 'Cho lời khuyên một Startup trẻ',
				textEn: 'Advise young Startup',
				effects: [{ stat: StatID.VISION, value: 1 }], // Wisdom
			},
			{
				id: 'ch9_todo_donate_clothes',
				text: 'Quyên góp quần áo cũ',
				textVi: 'Quyên góp quần áo cũ',
				textEn: 'Donate old clothes',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch9_todo_read_history',
				text: 'Đọc sách lịch sử',
				textVi: 'Đọc sách lịch sử',
				textEn: 'Read history books',
				effects: [{ stat: StatID.VISION, value: 1 }], // Knowledge
			},
			{
				id: 'ch9_todo_write_book',
				text: 'Viết sách (Legacy)',
				textVi: 'Viết sách (Legacy)',
				textEn: 'Write book (Legacy)',
				effects: [{ stat: StatID.VISION, value: 5 }], // Legacy
				cost: { health: 3 },
			},
			{
				id: 'ch9_todo_teach_uni',
				text: 'Giảng dạy tại Đại học',
				textVi: 'Giảng dạy tại Đại học',
				textEn: 'Teach at University',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 }, // Increased Humanity reward
					{ stat: StatID.VISION, value: 3 },
				],
				cost: { stress: 2 },
			},
			{
				id: 'ch9_todo_walk_bi',
				text: 'Dắt Bi đi dạo quanh hồ',
				textVi: 'Dắt Bi đi dạo quanh hồ',
				textEn: 'Walk Bi around lake',
				reward: { health: 3 },
			},
			{
				id: 'ch9_todo_cook_family',
				text: 'Nấu ăn cho cả đại gia đình',
				textVi: 'Nấu ăn cho cả đại gia đình',
				textEn: 'Cook for big family',
				effects: [{ stat: StatID.HUMANITY, value: 5 }], // Happiness
			},
			{
				id: 'ch9_todo_watch_news_smile',
				text: 'Xem thời sự và mỉm cười',
				textVi: 'Xem thời sự và mỉm cười',
				textEn: 'Watch news and smile',
				reward: { stress: -3 }, // Peace
			},
			{
				id: 'ch9_todo_forget_glasses',
				text: 'Quên kính lão ở đâu đó',
				textVi: 'Quên kính lão ở đâu đó',
				textEn: 'Forget reading glasses',
				effects: [{ stat: StatID.VISION, value: -2 }], // Memory -
			},
			{
				id: 'ch9_todo_tell_story',
				text: 'Kể chuyện "ngày xưa" cho con cháu',
				textVi: 'Kể chuyện "ngày xưa" cho con cháu',
				textEn: 'Tell "old days" stories to grandkids',
				effects: [{ stat: StatID.VISION, value: 1 }], // Legacy
			},
			{
				id: 'ch9_todo_breathe',
				text: 'Chỉ đơn giản là hít thở',
				textVi: 'Chỉ đơn giản là hít thở',
				textEn: 'Just breathe',
				reward: { stress: -3 }, // Peace
			},
		],
		dreamQuestions: [
			{
				id: 'ch9_dream_end',
				text: 'Bạn thấy một cánh cửa trắng xóa.',
				textVi: 'Bạn thấy một cánh cửa trắng xóa.',
				textEn: 'You see a white door.',
				choices: [
					{
						id: 'ch9_dream_end_enter',
						text: 'Bước qua',
						textVi: 'Bước qua',
						textEn: 'Step through',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Acceptance
					},
					{
						id: 'ch9_dream_end_look_back',
						text: 'Quay lại nhìn',
						textVi: 'Quay lại nhìn',
						textEn: 'Look back',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }], // Attachment
					},
					{
						id: 'ch9_dream_end_close',
						text: 'Đóng cửa lại',
						textVi: 'Đóng cửa lại',
						textEn: 'Close door',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -3 }], // Not ready
					},
					{
						id: 'ch9_dream_end_draw',
						text: 'Vẽ lên cánh cửa',
						textVi: 'Vẽ lên cánh cửa',
						textEn: 'Draw on door',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }], // Creativity
					},
				],
			},
			{
				id: 'ch9_dream_legacy',
				text: 'Bạn thấy tên mình được khắc trên một bức tượng.',
				textVi: 'Bạn thấy tên mình được khắc trên một bức tượng.',
				textEn: 'You see your name carved on a statue.',
				choices: [
					{
						id: 'ch9_dream_legacy_smile',
						text: 'Mỉm cười',
						textVi: 'Mỉm cười',
						textEn: 'Smile',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }], // Pride
					},
					{
						id: 'ch9_dream_legacy_break',
						text: 'Đập bỏ nó',
						textVi: 'Đập bỏ nó',
						textEn: 'Break it',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }], // Humility/Wisdom
					},
					{
						id: 'ch9_dream_legacy_add',
						text: 'Khắc thêm tên những người khác',
						textVi: 'Khắc thêm tên những người khác',
						textEn: 'Carve others names',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }], // Gratitude
					},
					{
						id: 'ch9_dream_legacy_scared',
						text: 'Sợ hãi vì nó quá to',
						textVi: 'Sợ hãi vì nó quá to',
						textEn: 'Scared it is too big',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
				],
			},
			{
				id: 'ch9_dream_childhood',
				text: 'Bạn trở lại làm đứa trẻ 5 tuổi ở Lào Cai.',
				textVi: 'Bạn trở lại làm đứa trẻ 5 tuổi ở Lào Cai.',
				textEn: 'You are a 5-year-old in Lao Cai again.',
				choices: [
					{
						id: 'ch9_dream_childhood_dad',
						text: 'Chạy đi tìm Bố',
						textVi: 'Chạy đi tìm Bố',
						textEn: 'Run to find Dad',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }], // Nostalgia
					},
					{
						id: 'ch9_dream_childhood_play',
						text: 'Chơi với những con thú',
						textVi: 'Chơi với những con thú',
						textEn: 'Play with animals',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }], // Joy
					},
					{
						id: 'ch9_dream_childhood_self',
						text: 'Nói với bản thân: "Mọi chuyện sẽ ổn thôi"',
						textVi: 'Nói với bản thân: "Mọi chuyện sẽ ổn thôi"',
						textEn: 'Tell self: "It will be okay"',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Comfort
					},
					{
						id: 'ch9_dream_childhood_change',
						text: 'Cố gắng thay đổi quá khứ',
						textVi: 'Cố gắng thay đổi quá khứ',
						textEn: 'Try to change past',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }], // Regret
					},
				],
			},
			{
				id: 'ch9_dream_space',
				text: 'Bạn bay lơ lửng giữa các vì sao.',
				textVi: 'Bạn bay lơ lửng giữa các vì sao.',
				textEn: 'Floating among stars.',
				choices: [
					{
						id: 'ch9_dream_space_search',
						text: 'Tìm kiếm sự sống khác',
						textVi: 'Tìm kiếm sự sống khác',
						textEn: 'Search for other life',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }], // Curiosity
					},
					{
						id: 'ch9_dream_space_silence',
						text: 'Tận hưởng sự im lặng',
						textVi: 'Tận hưởng sự im lặng',
						textEn: 'Enjoy silence',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }], // Peace
					},
					{
						id: 'ch9_dream_space_scared',
						text: 'Sợ hãi bóng tối',
						textVi: 'Sợ hãi bóng tối',
						textEn: 'Scared of darkness',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }], // Loneliness
					},
					{
						id: 'ch9_dream_space_become',
						text: 'Trở thành một vì sao',
						textVi: 'Trở thành một vì sao',
						textEn: 'Become a star',
						next: '',
						effects: [{ stat: StatID.VISION, value: 10 }], // Unity
					},
				],
			},
			{
				id: 'ch9_dream_code_final',
				text: 'Bạn đang viết dòng code cuối cùng của cuộc đời.',
				textVi: 'Bạn đang viết dòng code cuối cùng của cuộc đời.',
				textEn: 'Writing the final line of code of your life.',
				choices: [
					{
						id: 'ch9_dream_code_return',
						text: 'return 0;',
						textVi: 'return 0;',
						textEn: 'return 0;',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 10 }], // Perfect end
					},
					{
						id: 'ch9_dream_code_while',
						text: 'while(true) continue;',
						textVi: 'while(true) continue;',
						textEn: 'while(true) continue;',
						next: '',
						effects: [{ stat: StatID.VISION, value: 10 }], // Immortality/Loop
					},
					{
						id: 'ch9_dream_code_throw',
						text: 'throw new Error("Not finished");',
						textVi: 'throw new Error("Not finished");',
						textEn: 'throw new Error("Not finished");',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 5 }], // Unfinished
					},
					{
						id: 'ch9_dream_code_print',
						text: 'print("Thank you for playing");',
						textVi: 'print("Thank you for playing");',
						textEn: 'print("Thank you for playing");',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 10 }], // Gratitude
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch9_reflect_sleep_1',
			text: 'Nhìn lại chặng đường đã đi... từ đỉnh cao đến vực sâu rồi lại lên.',
			textVi:
				'Nhìn lại chặng đường đã đi... từ đỉnh cao đến vực sâu rồi lại lên.',
			textEn:
				'Looking back at the journey... from peak to valley and up again.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch9_reflect_sleep_1_grateful',
					text: 'Biết ơn hành trình này',
					textVi: 'Biết ơn hành trình này',
					textEn: 'Grateful for this journey',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 5 }],
				},
				{
					id: 'ch9_reflect_sleep_1_peace',
					text: 'Bình yên với quá khứ',
					textVi: 'Bình yên với quá khứ',
					textEn: 'At peace with past',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 5 }],
				},
			],
		},
		{
			id: 'ch9_reflect_success_1',
			text: 'Di sản để lại cho con... không chỉ là tiền bạc.',
			textVi: 'Di sản để lại cho con... không chỉ là tiền bạc.',
			textEn: 'Legacy for child... not just money.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch9_reflect_success_1_values',
					text: 'Giá trị quan trọng hơn',
					textVi: 'Giá trị quan trọng hơn',
					textEn: 'Values more important',
					next: '',
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch9_reflect_success_1_both',
					text: 'Cả hai đều cần',
					textVi: 'Cả hai đều cần',
					textEn: 'Both are needed',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
			],
		},
		{
			id: 'ch9_reflect_sleep_2',
			text: 'Cuộc đời như vòng lặp... nhưng mỗi vòng lại khác.',
			textVi: 'Cuộc đời như vòng lặp... nhưng mỗi vòng lại khác.',
			textEn: 'Life like a loop... but each iteration different.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch9_reflect_sleep_2_accept',
					text: 'Chấp nhận chu kỳ',
					textVi: 'Chấp nhận chu kỳ',
					textEn: 'Accept the cycle',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 5 }],
				},
				{
					id: 'ch9_reflect_sleep_2_rest',
					text: 'Nghỉ ngơi trong vòng lặp',
					textVi: 'Nghỉ ngơi trong vòng lặp',
					textEn: 'Rest in the loop',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
				},
			],
		},
		{
			id: 'ch9_reflect_success_2',
			text: 'Thành công... nhưng có đáng với những gì đã đánh đổi?',
			textVi: 'Thành công... nhưng có đáng với những gì đã đánh đổi?',
			textEn: 'Success... but was it worth what was traded?',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch9_reflect_success_2_worth',
					text: 'Đáng giá',
					textVi: 'Đáng giá',
					textEn: 'Worth it',
					next: '',
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch9_reflect_success_2_regret',
					text: 'Có những tiếc nuối',
					textVi: 'Có những tiếc nuối',
					textEn: 'Some regrets',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
			],
		},
		{
			id: 'ch9_reflect_sleep_3',
			text: 'Viên mãn... nhưng cũng mệt mỏi.',
			textVi: 'Viên mãn... nhưng cũng mệt mỏi.',
			textEn: 'Fulfilled... but also tired.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch9_reflect_sleep_3_rest',
					text: 'Được nghỉ ngơi rồi',
					textVi: 'Được nghỉ ngơi rồi',
					textEn: 'Can rest now',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 5 }],
				},
				{
					id: 'ch9_reflect_sleep_3_peace',
					text: 'Ngủ một giấc bình yên',
					textVi: 'Ngủ một giấc bình yên',
					textEn: 'Sleep peacefully',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 5 }],
				},
			],
		},
	],
};

export const chapter9Dialogues: Record<Chapter9DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter9DialogueID.CH9_INTRO]: {
		speaker: 'player',
		text: '(Ngồi trên chiếc ghế bành cũ, vuốt nhẹ những tấm bằng khen phủ bụi) 55 tuổi... Tóc đã bạc trắng. Hoàng hôn ngoài kia đẹp quá, nhưng sao lòng mình thấy trống trải thế này?',
		textVi:
			'(Ngồi trên chiếc ghế bành cũ, vuốt nhẹ những tấm bằng khen phủ bụi) 55 tuổi... Tóc đã bạc trắng. Hoàng hôn ngoài kia đẹp quá, nhưng sao lòng mình thấy trống trải thế này?',
		textEn:
			'(Sitting in old armchair, touching dusty awards) 55 years old... Hair turned white. Sunset is beautiful, but why does my heart feel so empty?',
		next: Chapter9DialogueID.CH9_BILLIONAIRE_1,
	},

	// 9.1 Billionaire
	[Chapter9DialogueID.CH9_BILLIONAIRE_1]: {
		speaker: 'npc',
		text: 'Trợ lý (Đặt tạp chí lên bàn): "Thưa ngài, Forbes vừa gửi ấn phẩm mới nhất. Ngài lại lọt Top 10 người giàu nhất hành tinh. Giá trị tài sản ròng hơn 1 tỷ USD. Chúc mừng ngài!"',
		textVi:
			'Trợ lý (Đặt tạp chí lên bàn): "Thưa ngài, Forbes vừa gửi ấn phẩm mới nhất. Ngài lại lọt Top 10 người giàu nhất hành tinh. Giá trị tài sản ròng hơn 1 tỷ USD. Chúc mừng ngài!"',
		textEn:
			'Assistant (Placing magazine): "Sir, Forbes sent latest issue. You are in Top 10 Richest again. Net Worth over $1B. Congratulations!"',
		next: Chapter9DialogueID.CH9_HERMIT_CHECK, // Redirect to Hermit Check
		effects: [
			{
				stat: StatID.MONEY,
				value: 27000000000000,
			},
		],
	},

	// NEW: Hermit Check
	[Chapter9DialogueID.CH9_HERMIT_CHECK]: {
		speaker: 'player',
		text: '(Nhìn xuống thành phố từ tầng 68) Cao quá... Ở trên này không khí loãng thật. Nhìn quanh xem nào... Có ai đang đứng cạnh mình không?',
		textVi:
			'(Nhìn xuống thành phố từ tầng 68) Cao quá... Ở trên này không khí loãng thật. Nhìn quanh xem nào... Có ai đang đứng cạnh mình không?',
		textEn:
			'(Looking down from 68th floor) Too high... Air is thin here. Looking around... Is anyone standing by my side?',
		choices: [
			{
				id: 'choice_hermit_trigger',
				text: '...',
				textVi: '...',
				textEn: '...',
				condition: {
					type: ConditionType.STAT,
					key: StatID.HUMANITY,
					operator: Operator.LT,
					value: 10,
				},
				next: Chapter9DialogueID.CH9_LONELY_DEATH,
			},
			{
				id: 'choice_hermit_pass',
				text: 'Vẫn còn những người thân yêu',
				textVi: 'Vẫn còn những người thân yêu',
				textEn: 'Still have loved ones',
				next: Chapter9DialogueID.CH9_BILLIONAIRE_HANDS,
			},
		],
	},
	[Chapter9DialogueID.CH9_LONELY_DEATH]: {
		speaker: 'player',
		text: '(Tiếng vang vọng trong căn biệt thự trống) "Alo? Có ai ở nhà không?"... Không có tiếng trả lời. Chỉ có tiếng gió rít. Mình giàu nhất thế giới, nhưng mình là kẻ vô gia cư trong chính ngôi nhà của mình.',
		textVi:
			'(Tiếng vang vọng trong căn biệt thự trống) "Alo? Có ai ở nhà không?"... Không có tiếng trả lời. Chỉ có tiếng gió rít. Mình giàu nhất thế giới, nhưng mình là kẻ vô gia cư trong chính ngôi nhà của mình.',
		textEn:
			'(Echo in empty mansion) "Hello? Anyone home?"... No answer. Just wind howling. I am richest, but homeless in my own home.',
		next: Chapter9DialogueID.CH9_TEACHING_START, // Trigger Soulless Tycoon likely
	},
	[Chapter9DialogueID.CH9_BILLIONAIRE_HANDS]: {
		speaker: 'player',
		text: '(Nhìn đôi bàn tay) Từ lấm lem bùn đất năm 6 tuổi, gõ Hello World năm 16 tuổi, đến ký lệnh thu hồi sinh tử năm 48 tuổi. Bố từng muốn làm Kiến trúc sư xây cầu, còn mình đã trở thành Kiến trúc sư của một hệ sinh thái số.',
		textVi:
			'(Nhìn đôi bàn tay) Từ lấm lem bùn đất năm 6 tuổi, gõ Hello World năm 16 tuổi, đến ký lệnh thu hồi sinh tử năm 48 tuổi. Bố từng muốn làm Kiến trúc sư xây cầu, còn mình đã trở thành Kiến trúc sư của một hệ sinh thái số.',
		textEn:
			'(Looking at hands) From muddy at 6, typing Hello World at 16, to signing life-or-death recall at 48. Dad wanted to be a Bridge Architect, I became a Digital Ecosystem Architect.',
		next: Chapter9DialogueID.CH9_BILLIONAIRE_2,
	},
	[Chapter9DialogueID.CH9_BILLIONAIRE_2]: {
		speaker: 'player',
		text: '(Mỉm cười) Tiền chỉ là Database. Di sản mới là thật. Mình đã không lặp lại sai lầm của bố. Mình đã Break the Loop.',
		textVi:
			'(Mỉm cười) Tiền chỉ là Database. Di sản mới là thật. Mình đã không lặp lại sai lầm của bố. Mình đã Break the Loop.',
		textEn:
			"(Smiling) Money is just Database. Legacy is real. I did not repeat Dad's mistake. I Broke the Loop.",
		next: Chapter9DialogueID.CH9_TEACHING_START, // Redirect to Teaching
	},

	// NEW: Teaching & Writing
	[Chapter9DialogueID.CH9_TEACHING_START]: {
		speaker: 'npc',
		text: 'Hiệu trưởng (Gọi điện): "Chào ngài. Sinh viên trường mình rất ngưỡng mộ ngài. Liệu ngài có thể thu xếp về trường thỉnh giảng một buổi chia sẻ kinh nghiệm thực chiến không?"',
		textVi:
			'Hiệu trưởng (Gọi điện): "Chào ngài. Sinh viên trường mình rất ngưỡng mộ ngài. Liệu ngài có thể thu xếp về trường thỉnh giảng một buổi chia sẻ kinh nghiệm thực chiến không?"',
		textEn:
			'Dean (Calling): "Hello sir. Students admire you. Can you arrange a guest lecture to share battle-tested experience?"',
		choices: [
			{
				id: 'choice_teach_accept',
				text: 'Nhận lời: Truyền lửa',
				textVi: 'Nhận lời: Truyền lửa',
				textEn: 'Accept: Pass the torch',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: 500000000 },
				],
				next: Chapter9DialogueID.CH9_WRITING_START,
			},
			{
				id: 'choice_teach_refuse',
				text: 'Từ chối: Nghỉ ngơi thôi',
				textVi: 'Từ chối: Nghỉ ngơi thôi',
				textEn: 'Refuse: Just rest',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{
						stat: StatID.HEALTH,
						value: 20,
					},
				],
				next: Chapter9DialogueID.CH9_WRITING_START,
			},
		],
	},
	[Chapter9DialogueID.CH9_WRITING_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Một nhà xuất bản muốn bạn viết hồi ký. Bạn sẽ viết gì?',
		textVi: '(Suy nghĩ) Một nhà xuất bản muốn bạn viết hồi ký. Bạn sẽ viết gì?',
		textEn: '(Thinking) A publisher wants your memoir. What will you write?',
		choices: [
			{
				id: 'choice_write_truth',
				text: 'Sự thật trần trụi: Cả thất bại và sai lầm',
				textVi: 'Sự thật trần trụi: Cả thất bại và sai lầm',
				textEn: 'Naked truth: Failures and mistakes',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: 1000000000 },
				],
				next: Chapter9DialogueID.CH9_GIFT_1,
			},
			{
				id: 'choice_write_pr',
				text: 'Câu chuyện thành công: PR bản thân',
				textVi: 'Câu chuyện thành công: PR bản thân',
				textEn: 'Success story: Self PR',
				effects: [
					{ stat: StatID.MONEY, value: 1000000000 },
					{ stat: StatID.VISION, value: -2 },
				],
				next: Chapter9DialogueID.CH9_GIFT_1,
			},
		],
	},

	// 9.2 Gift for Father
	[Chapter9DialogueID.CH9_GIFT_1]: {
		speaker: 'player',
		text: 'Bố ơi, hôm nay con đưa bố đi một nơi. Không phải bệnh viện đâu. Chúng ta về nhà. Về Lào Cai.',
		textVi:
			'Bố ơi, hôm nay con đưa bố đi một nơi. Không phải bệnh viện đâu. Chúng ta về nhà. Về Lào Cai.',
		textEn:
			'Dad, taking you somewhere today. Not hospital. We go home. To Lao Cai.',
		next: Chapter9DialogueID.CH9_GIFT_DIALOGUE,
	},
	[Chapter9DialogueID.CH9_GIFT_DIALOGUE]: {
		speaker: 'player',
		text: 'Bố, con đã sửa xong cái bug lớn nhất của đời bố rồi.',
		textVi: 'Bố, con đã sửa xong cái bug lớn nhất của đời bố rồi.',
		textEn: 'Dad, I fixed the biggest bug of your life.',
		next: Chapter9DialogueID.CH9_GIFT_FATHER,
	},
	[Chapter9DialogueID.CH9_GIFT_FATHER]: {
		speaker: 'boQ',
		text: '(Rưng rưng) "Con giỏi hơn bố. Con có cái Tầm nhìn mà bố không có. Bố tự hào về con."',
		textVi:
			'(Rưng rưng) "Con giỏi hơn bố. Con có cái Tầm nhìn mà bố không có. Bố tự hào về con."',
		textEn:
			'(Teary) "You are better than me. You have the Vision I lacked. I\'m proud of you."',
		next: Chapter9DialogueID.CH9_GIFT_REACTION,
	},
	[Chapter9DialogueID.CH9_GIFT_REACTION]: {
		speaker: 'player',
		text: 'Bạn cảm thấy nhẹ nhõm. Gánh nặng quá khứ đã được trút bỏ.',
		textVi: 'Bạn cảm thấy nhẹ nhõm. Gánh nặng quá khứ đã được trút bỏ.',
		textEn: 'You felt relieved. The burden of the past was lifted.',
		effects: [{ stat: StatID.HUMANITY, value: 5 }],
		next: Chapter9DialogueID.CH9_GIFT_BI,
	},
	[Chapter9DialogueID.CH9_GIFT_BI]: {
		speaker: 'player',
		text: '(Vỗ tay) "Bi! Lại đây mày!". Chú chó Corgi nhỏ lon ton chạy tới... Giống hệt Bi ngày xưa. Mọi thứ như chưa từng mất đi.',
		textVi:
			'(Vỗ tay) "Bi! Lại đây mày!". Chú chó Corgi nhỏ lon ton chạy tới... Giống hệt Bi ngày xưa. Mọi thứ như chưa từng mất đi.',
		textEn:
			'(Clapping) "Bi! Come here!". Small Corgi runs over... Just like old Bi. Like nothing was ever lost.',
		effects: [{ stat: StatID.HUMANITY, value: 10 }],
		next: Chapter9DialogueID.CH9_ENDING_1,
	},

	// 9.3 Ending
	[Chapter9DialogueID.CH9_ENDING_1]: {
		speaker: 'npc',
		text: 'Luật sư: "Thưa ông, hồ sơ quỹ Sandbox Foundation đã xong. 50 tỷ sẽ được dùng để mua máy tính cho trẻ em nghèo vùng cao. Ông chắc chắn chứ?"',
		textVi:
			'Luật sư: "Thưa ông, hồ sơ quỹ Sandbox Foundation đã xong. 50 tỷ sẽ được dùng để mua máy tính cho trẻ em nghèo vùng cao. Ông chắc chắn chứ?"',
		textEn:
			'Lawyer: "Sir, Sandbox Foundation papers ready. 50 billion to buy PCs for poor highland kids. Are you sure?"',
		next: Chapter9DialogueID.CH9_FOUNDATION_START,
	},

	// NEW: Foundation Event
	[Chapter9DialogueID.CH9_FOUNDATION_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Quỹ Sandbox Foundation cần nguồn vốn ban đầu để hoạt động. 50 tỷ đồng để mua máy tính cho trẻ em nghèo.',
		textVi:
			'(Suy nghĩ) Quỹ Sandbox Foundation cần nguồn vốn ban đầu để hoạt động. 50 tỷ đồng để mua máy tính cho trẻ em nghèo.',
		textEn:
			'(Thinking) Sandbox Foundation needs seed capital. 50 billion to buy PCs for poor kids.',
		choices: [
			{
				id: 'choice_foundation_sign',
				text: 'Ký séc: Trao cơ hội đổi đời (-50B)',
				textVi: 'Ký séc: Trao cơ hội đổi đời (-50B)',
				textEn: 'Sign check: Give life-changing chance (-50B)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.HUMANITY,
					operator: Operator.GTE,
					value: 50,
				},
				effects: [
					{ stat: StatID.MONEY, value: -50000000000 },
					{ stat: StatID.VISION, value: 5 },
				],
				next: Chapter9DialogueID.CH9_FOUNDATION_SIGN,
			},
			{
				id: 'choice_foundation_skip',
				text: 'Từ chối: Tiền của tôi là của tôi',
				textVi: 'Từ chối: Tiền của tôi là của tôi',
				textEn: 'Refuse: My money is mine',
				effects: [
					{ stat: StatID.VISION, value: -5 },
					{ stat: StatID.HUMANITY, value: -30 },
				],
				next: Chapter9DialogueID.CH9_FOUNDATION_REJECT,
			},
		],
	},
	[Chapter9DialogueID.CH9_FOUNDATION_SIGN]: {
		speaker: 'player',
		text: '(Nhìn chữ ký vừa ráo mực) 50 tỷ... Nhiều thật đấy. Nhưng nhìn nụ cười của tụi nhỏ trong ảnh hồ sơ này... *Thở phào* Nhẹ lòng quá.',
		textVi:
			'(Nhìn chữ ký vừa ráo mực) 50 tỷ... Nhiều thật đấy. Nhưng nhìn nụ cười của tụi nhỏ trong ảnh hồ sơ này... *Thở phào* Nhẹ lòng quá.',
		textEn:
			"(Looking at fresh signature) 50 billion... A lot. But seeing kids' smiles in this profile photo... *Sigh* Heavy heart lifted.",
		next: Chapter9DialogueID.CH9_ENDING_MONOLOGUE,
	},
	[Chapter9DialogueID.CH9_FOUNDATION_REJECT]: {
		speaker: 'npc',
		text: 'Luật sư (Cất tài liệu, ánh mắt thất vọng): "Tôi hiểu. Tiền là của ông. *Thở dài* Tôi xin phép về trước."',
		textVi:
			'Luật sư (Cất tài liệu, ánh mắt thất vọng): "Tôi hiểu. Tiền là của ông. *Thở dài* Tôi xin phép về trước."',
		textEn:
			'Lawyer (Putting away docs, disappointed eyes): "I understand. Money is yours. *Sigh* I will take my leave."',
		next: Chapter9DialogueID.CH9_ENDING_MONOLOGUE,
	},
	[Chapter9DialogueID.CH9_ENDING_MONOLOGUE]: {
		speaker: 'player',
		text: 'Cuộc đời là một dự án Open Source vĩ đại. Chúng ta không thể chọn nơi mình sinh ra (Initial Commit), nhưng chúng ta có thể viết lại mã nguồn của chính mình (Refactor) mỗi ngày. Lỗi lầm (Bug) là không thể tránh khỏi, nhưng quan trọng là ta có dũng cảm để sửa nó (Fix) hay không. Và cuối cùng, hãy để lại một di sản tốt đẹp cho thế hệ sau (Documentation).',
		textVi:
			'Cuộc đời là một dự án Open Source vĩ đại. Chúng ta không thể chọn nơi mình sinh ra (Initial Commit), nhưng chúng ta có thể viết lại mã nguồn của chính mình (Refactor) mỗi ngày. Lỗi lầm (Bug) là không thể tránh khỏi, nhưng quan trọng là ta có dũng cảm để sửa nó (Fix) hay không. Và cuối cùng, hãy để lại một di sản tốt đẹp cho thế hệ sau (Documentation).',
		textEn:
			'Life is a grand Open Source project. We cannot choose where we are born (Initial Commit), but we can rewrite our own source code (Refactor) every day. Bugs are inevitable, but what matters is if we have the courage to Fix them. And finally, leave a good legacy for the next generation (Documentation).',
		next: Chapter9DialogueID.CH9_ENDING_FINAL,
	},
	[Chapter9DialogueID.CH9_ENDING_FINAL]: {
		speaker: 'player',
		text: 'Tôi không phải là tỷ phú. Tôi là một Developer.',
		textVi: 'Tôi không phải là tỷ phú. Tôi là một Developer.',
		textEn: 'I am not a billionaire. I am a Developer.',
		effects: [{ stat: StatID.VISION, value: 10 }],
		next: Dialogue_END.END,
	},
};
