// ==========================================
// CHAPTER 3: HELLO WORLD & BUGS
// Timeline: 16-18 tuổi
// Theme: Sóng gió, Hy vọng giả tạo và Sự kiên định
// ==========================================

import {
	Chapter3DialogueID,
	Chapter3SceneID,
	Chapter3TodoID,
	Chapter4DialogueID,
	ConditionType,
	FlagID,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

export const chapter3: Chapter = {
	id: 3,
	name: 'Hello World & Bugs',
	nameVi: 'Hello World & Bugs',
	nameEn: 'Hello World & Bugs',
	ageRange: '16-18 tuổi',
	theme: 'Sóng gió, Hy vọng giả tạo và Sự kiên định',
	themeVi: 'Sóng gió, Hy vọng giả tạo và Sự kiên định',
	themeEn: 'Turbulence, False Hope, and Persistence',
	scenes: [
		{
			id: Chapter3SceneID.CH3_DORM,
			name: 'Khu tập thể cũ',
			nameVi: 'Lớp 10: Khu tập thể & Miu',
			nameEn: 'Grade 10: Old Dorm & Miu',
			background: '/assets/sprites/backgrounds/dorm_old.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: Chapter3DialogueID.CH3_DORM_1,
		},
		{
			id: Chapter3SceneID.CH3_DEBT,
			name: 'Chủ nợ',
			nameVi: 'Biến cố chủ nợ',
			nameEn: 'Debt Collectors',
			background: '/assets/sprites/backgrounds/dorm_night.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: Chapter3DialogueID.CH3_DEBT_1,
		},
		{
			id: Chapter3SceneID.CH3_HOPE,
			name: 'Hy vọng lóe lên',
			nameVi: 'Lớp 11: Hy vọng lóe lên (VinFast LuxSA)',
			nameEn: 'Grade 11: Flashing Hope (VinFast LuxSA)',
			background: '/assets/sprites/backgrounds/bedroom_pc.png',
			music: '/assets/audio/music/chapters/ch3_hope.mp3',
			dialogueStart: Chapter3DialogueID.CH3_INTRO, // Changed from ch3_hope_1
		},
		{
			id: Chapter3SceneID.CH3_HACK,
			name: 'Công ty Ma',
			nameVi: 'Tầm nhìn của Bố (The Legacy Code)',
			nameEn: "Father's Vision (The Legacy Code)",
			background: '/assets/sprites/backgrounds/dorm_room.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: Chapter3DialogueID.CH3_LEGACY_1, // Assuming it uses the same dialogue start as the original 'ch3_legacy'
		},
		{
			id: Chapter3SceneID.CH3_COVID,
			name: 'Đại dịch COVID',
			nameVi: 'Lớp 11-12: Đại dịch COVID',
			nameEn: 'Grade 11-12: COVID Pandemic',
			background: '/assets/sprites/backgrounds/home_covid.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: Chapter3DialogueID.CH3_COVID_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter3TodoID.CH3_TODO_CODE_NIGHT,
				text: 'Cày code thâu đêm',
				textVi: 'Cày code thâu đêm',
				textEn: 'Code all night',
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { health: 5, stress: 5 },
			},

			{
				id: 'ch3_todo_net_cafe',
				text: 'Trốn học đi net',
				textVi: 'Trốn học đi net',
				textEn: 'Skip school for internet cafe',
				effects: [
					{ stat: StatID.VISION, value: -3 },
					{ stat: StatID.MONEY, value: -50000 },
				],
				reward: { stress: -10 },
			},
			{
				id: 'ch3_todo_learn_english',
				text: 'Học tiếng Anh online',
				textVi: 'Học tiếng Anh online',
				textEn: 'Learn English online',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch3_todo_care_miu',
				text: 'Chăm sóc Miu',
				textVi: 'Chăm sóc Miu',
				textEn: 'Take care of Miu',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch3_todo_hide_debt',
				text: 'Trốn trong phòng khi chủ nợ đến',
				textVi: 'Trốn trong phòng khi chủ nợ đến',
				textEn: 'Hide in room from debt collectors',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { stress: 10 },
			},

			{
				id: 'ch3_todo_read_blog',
				text: 'Đọc blog công nghệ',
				textVi: 'Đọc blog công nghệ',
				textEn: 'Read tech blogs',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch3_todo_hack',
				text: 'Thử hack một trang web dạo',
				textVi: 'Thử hack một trang web dạo',
				textEn: 'Try hacking a random site',
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { stress: 5, humanity: 2 },
			},
			{
				id: 'ch3_todo_love_letter',
				text: 'Viết thư tình cho crush',
				textVi: 'Viết thư tình cho crush',
				textEn: 'Write love letter to crush',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				cost: { stress: 5 },
			},
			{
				id: 'ch3_todo_clean_house',
				text: 'Dọn dẹp nhà cửa giúp mẹ',
				textVi: 'Dọn dẹp nhà cửa giúp mẹ',
				textEn: 'Clean house for Mom',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch3_todo_rap',
				text: 'Nghe nhạc Đen Vâu để giải tỏa',
				textVi: 'Nghe nhạc Đen Vâu để giải tỏa',
				textEn: 'Listen to Đen Vâu to relieve stress',
				reward: { stress: -5 },
			},
			{
				id: 'ch3_todo_debug',
				text: 'Debug code suốt 3 tiếng',
				textVi: 'Debug code suốt 3 tiếng',
				textEn: 'Debug code for 3 hours',
				effects: [{ stat: StatID.VISION, value: 2 }],
				cost: { stress: 5, health: 2 },
			},
			{
				id: 'ch3_todo_dream_uni',
				text: 'Mơ về cánh cổng đại học',
				textVi: 'Mơ về cánh cổng đại học',
				textEn: 'Dream of university gates',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch3_todo_teach_bro',
				text: 'Dạy em trai học bài',
				textVi: 'Dạy em trai học bài',
				textEn: 'Teach younger brother',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},

			{
				id: 'ch3_todo_argue_parents',
				text: 'Cãi nhau với bố mẹ về tiền bạc',
				textVi: 'Cãi nhau với bố mẹ về tiền bạc',
				textEn: 'Argue with parents about money',
				cost: { stress: 10, humanity: 5 },
			},
			{
				id: 'ch3_todo_watch_movie',
				text: 'Xem phim cùng cả nhà',
				textVi: 'Xem phim cùng cả nhà',
				textEn: 'Watch movie with family',
				reward: { stress: -5, humanity: 3 },
			},
			{
				id: 'ch3_todo_typing',
				text: 'Luyện gõ phím 10 ngón',
				textVi: 'Luyện gõ phím 10 ngón',
				textEn: 'Practice touch typing',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch3_todo_sleep_sun',
				text: 'Ngủ nướng ngày Chủ nhật',
				textVi: 'Ngủ nướng ngày Chủ nhật',
				textEn: 'Sleep in on Sunday',
				reward: { health: 5, stress: -5 },
			},
		],
		dreamQuestions: [
			{
				id: 'ch3_dream_code',
				text: 'Bạn thấy những dòng code đang rơi xuống như trong Matrix.',
				textVi: 'Bạn thấy những dòng code đang rơi xuống như trong Matrix.',
				textEn: 'You see lines of code falling like in The Matrix.',
				choices: [
					{
						id: 'ch3_dream_code_read',
						text: 'Cố gắng đọc hiểu chúng',
						textVi: 'Cố gắng đọc hiểu chúng',
						textEn: 'Try to read them',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch3_dream_code_control',
						text: 'Điều khiển chúng',
						textVi: 'Điều khiển chúng',
						textEn: 'Control them',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch3_dream_code_run',
						text: 'Sợ hãi bỏ chạy',
						textVi: 'Sợ hãi bỏ chạy',
						textEn: 'Run away in fear',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 1 }],
					},
					{
						id: 'ch3_dream_code_money',
						text: 'Biến chúng thành tiền',
						textVi: 'Biến chúng thành tiền',
						textEn: 'Turn them into money',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_debt',
				text: 'Chủ nợ đang đuổi theo bạn.',
				textVi: 'Chủ nợ đang đuổi theo bạn.',
				textEn: 'Debt collectors are chasing you.',
				choices: [
					{
						id: 'ch3_dream_debt_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 1 }],
					},
					{
						id: 'ch3_dream_debt_face',
						text: 'Đứng lại đối mặt',
						textVi: 'Đứng lại đối mặt',
						textEn: 'Stand and face them',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 1 }],
					},
					{
						id: 'ch3_dream_debt_super',
						text: 'Biến thành siêu nhân đánh lại',
						textVi: 'Biến thành siêu nhân đánh lại',
						textEn: 'Turn into superman and fight',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch3_dream_debt_pay',
						text: 'Trả tiền cho họ',
						textVi: 'Trả tiền cho họ',
						textEn: 'Pay them',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -1 }],
					},
				],
			},
			{
				id: 'ch3_dream_miu',
				text: 'Miu biết nói tiếng người.',
				textVi: 'Miu biết nói tiếng người.',
				textEn: 'Miu can speak human language.',
				choices: [
					{
						id: 'ch3_dream_miu_talk',
						text: 'Trò chuyện với Miu',
						textVi: 'Trò chuyện với Miu',
						textEn: 'Talk to Miu',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 1 }],
					},
					{
						id: 'ch3_dream_miu_money',
						text: 'Bảo Miu đi kiếm tiền',
						textVi: 'Bảo Miu đi kiếm tiền',
						textEn: 'Tell Miu to earn money',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch3_dream_miu_fear',
						text: 'Sợ hãi',
						textVi: 'Sợ hãi',
						textEn: 'Be scared',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -1 }],
					},
					{
						id: 'ch3_dream_miu_hug',
						text: 'Ôm Miu ngủ',
						textVi: 'Ôm Miu ngủ',
						textEn: 'Hug Miu to sleep',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_luxsa',
				text: 'Chiếc xe LuxSA biến thành một con quái vật nuốt chửng gia đình.',
				textVi:
					'Chiếc xe LuxSA biến thành một con quái vật nuốt chửng gia đình.',
				textEn: 'The LuxSA car turns into a monster swallowing the family.',
				choices: [
					{
						id: 'ch3_dream_luxsa_destroy',
						text: 'Phá hủy chiếc xe',
						textVi: 'Phá hủy chiếc xe',
						textEn: 'Destroy the car',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_save',
						text: 'Cứu gia đình',
						textVi: 'Cứu gia đình',
						textEn: 'Save the family',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_drive',
						text: 'Lái nó đi',
						textVi: 'Lái nó đi',
						textEn: 'Drive it away',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_sell',
						text: 'Bán nó đi',
						textVi: 'Bán nó đi',
						textEn: 'Sell it',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_uni',
				text: 'Bạn thấy cổng trường đại học đóng sầm trước mặt.',
				textVi: 'Bạn thấy cổng trường đại học đóng sầm trước mặt.',
				textEn: 'You see university gates slamming shut in front of you.',
				choices: [
					{
						id: 'ch3_dream_uni_climb',
						text: 'Leo rào vào',
						textVi: 'Leo rào vào',
						textEn: 'Climb over the fence',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 1 }],
					},
					{
						id: 'ch3_dream_uni_cry',
						text: 'Ngồi khóc',
						textVi: 'Ngồi khóc',
						textEn: 'Sit and cry',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -1 }],
					},
					{
						id: 'ch3_dream_uni_path',
						text: 'Tìm đường khác',
						textVi: 'Tìm đường khác',
						textEn: 'Find another way',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch3_dream_uni_break',
						text: 'Phá cổng',
						textVi: 'Phá cổng',
						textEn: 'Break the gate',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 1 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch3_reflect_sleep_1',
			text: 'Học lập trình đến khuya, đầu óc tràn ngập code...',
			textVi: 'Học lập trình đến khuya, đầu óc tràn ngập code...',
			textEn: 'Coding until late, head full of code...',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch3_reflect_sleep_1_rest',
					text: 'Ngủ thôi, code mệt rồi',
					textVi: 'Ngủ thôi, code mệt rồi',
					textEn: 'Sleep now, tired of coding',
					next: '',
				},
				{
					id: 'ch3_reflect_sleep_1_break',
					text: 'Cần nghỉ để tránh bug',
					textVi: 'Cần nghỉ để tránh bug',
					textEn: 'Need rest to avoid bugs',
					next: '',
				},
			],
		},
		{
			id: 'ch3_reflect_success_1',
			text: 'Mỗi dòng code là một bước tiến lên... nhưng sao dài quá.',
			textVi: 'Mỗi dòng code là một bước tiến lên... nhưng sao dài quá.',
			textEn: "Each line of code is progress... but it's so long.",
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch3_reflect_success_1_continue',
					text: 'Cố gắng thêm một chút',
					textVi: 'Cố gắng thêm một chút',
					textEn: 'Try a bit more',
					next: '',
				},
				{
					id: 'ch3_reflect_success_1_tomorrow',
					text: 'Mai tiếp tục, giờ cần ngủ',
					textVi: 'Mai tiếp tục, giờ cần ngủ',
					textEn: 'Continue tomorrow, need sleep now',
					next: '',
				},
			],
		},
		{
			id: 'ch3_reflect_sleep_2',
			text: 'Debug cả ngày vẫn chưa xong... mắt đã mỏi lắm rồi.',
			textVi: 'Debug cả ngày vẫn chưa xong... mắt đã mỏi lắm rồi.',
			textEn: 'Debugging all day still not done... eyes are so tired.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch3_reflect_sleep_2_rest',
					text: ' Nghỉ ngơi thôi',
					textVi: 'Nghỉ ngơi thôi',
					textEn: 'Time to rest',
					next: '',
				},
				{
					id: 'ch3_reflect_sleep_2_long_day',
					text: 'Hôm nay là một ngày dài',
					textVi: 'Hôm nay là một ngày dài',
					textEn: 'Today was a long day',
					next: '',
				},
			],
		},
		{
			id: 'ch3_reflect_success_2',
			text: 'Developer đầu tiên... con đường này mới chỉ bắt đầu.',
			textVi: 'Developer đầu tiên... con đường này mới chỉ bắt đầu.',
			textEn: 'First developer steps... the journey just started.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch3_reflect_success_2_excited',
					text: 'Phấn khích với tương lai',
					textVi: 'Phấn khích với tương lai',
					textEn: 'Excited for the future',
					next: '',
				},
				{
					id: 'ch3_reflect_success_2_scared',
					text: 'Nhưng cũng lo lắng quá',
					textVi: 'Nhưng cũng lo lắng quá',
					textEn: 'But also quite worried',
					next: '',
				},
			],
		},
		{
			id: 'ch3_reflect_sleep_3',
			text: 'Học quá nhiều có thể burnout... cần cân bằng.',
			textVi: 'Học quá nhiều có thể burnout... cần cân bằng.',
			textEn: 'Learning too much can burnout... need balance.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch3_reflect_sleep_3_balance',
					text: 'Cân bằng cuộc sống',
					textVi: 'Cân bằng cuộc sống',
					textEn: 'Balance life',
					next: '',
				},
				{
					id: 'ch3_reflect_sleep_3_sleep',
					text: 'Đi ngủ để khôi phục',
					textVi: 'Đi ngủ để khôi phục',
					textEn: 'Sleep to recover',
					next: '',
				},
			],
		},
	],
};

export const chapter3Dialogues: Record<Chapter3DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter3DialogueID.CH3_INTRO]: {
		speaker: 'player',
		text: '(Gõ phím lạch cạch) Tiếng ve sầu ồn ào quá... nhưng khi đeo tai nghe vào, chỉ còn mình và những dòng code.',
		textVi:
			'(Gõ phím lạch cạch) Tiếng ve sầu ồn ào quá... nhưng khi đeo tai nghe vào, chỉ còn mình và những dòng code.',
		textEn:
			"(Typing clack-clack) Cicadas are loud... but with headphones on, it's just me and the code.",
		next: Chapter3DialogueID.CH3_LEARN_LANG_CHOICE,
	},

	// NEW: Programming Learning Session
	[Chapter3DialogueID.CH3_LEARN_LANG_CHOICE]: {
		speaker: 'player',
		text: 'Ngôn ngữ lập trình đầu tiên nên học gì?',
		textVi: 'Ngôn ngữ lập trình đầu tiên nên học gì?',
		textEn: 'Which programming language should I learn first?',
		choices: [
			{
				id: 'choice_python',
				text: 'Python: Dễ học, phổ biến',
				textVi: 'Python: Dễ học, phổ biến',
				textEn: 'Python: Easy, popular',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_LOOPS,
			},
			{
				id: 'choice_javascript',
				text: 'JavaScript: Web development',
				textVi: 'JavaScript: Web development',
				textEn: 'JavaScript: Web development',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_LOOPS,
			},
			{
				id: 'choice_cpp',
				text: 'C++: Học nền tảng vững',
				textVi: 'C++: Học nền tảng vững',
				textEn: 'C++: Strong foundation',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.STRESS, value: 1 },
				],
				next: Chapter3DialogueID.CH3_LEARN_LOOPS,
			},
		],
	},
	[Chapter3DialogueID.CH3_LEARN_LOOPS]: {
		speaker: 'narrator',
		text: 'Vòng lặp (Loop) là gì? Bạn sẽ học như thế nào?',
		textVi: 'Vòng lặp (Loop) là gì? Bạn sẽ học như thế nào?',
		textEn: 'What are loops? How will you learn?',
		choices: [
			{
				id: 'choice_loops_practice',
				text: 'Làm bài tập thực hành ngay',
				textVi: 'Làm bài tập thực hành ngay',
				textEn: 'Practice exercises immediately',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_DEBUG,
			},
			{
				id: 'choice_loops_theory',
				text: 'Đọc kỹ lý thuyết trước',
				textVi: 'Đọc kỹ lý thuyết trước',
				textEn: 'Read theory first',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_DEBUG,
			},
			{
				id: 'choice_loops_video',
				text: 'Xem video hướng dẫn',
				textVi: 'Xem video hướng dẫn',
				textEn: 'Watch tutorial videos',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_DEBUG,
			},
		],
	},
	[Chapter3DialogueID.CH3_LEARN_DEBUG]: {
		speaker: 'narrator',
		text: 'Code bị lỗi. Màn hình đỏ rực. Stack trace dài như sợi mì.',
		textVi: 'Code bị lỗi. Màn hình đỏ rực. Stack trace dài như sợi mì.',
		textEn: 'Code has error. Red screen. Long stack trace.',
		flags: [{ key: FlagID.BUGS_FIXED, value: 1, operation: 'add' }],
		choices: [
			{
				id: 'choice_debug_google',
				text: 'Google error message',
				textVi: 'Google error message',
				textEn: 'Google error message',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_FREELANCE,
			},
			{
				id: 'choice_debug_ask',
				text: 'Hỏi anh senior (trên diễn đàn)',
				textVi: 'Hỏi anh senior (trên diễn đàn)',
				textEn: 'Ask senior (on forum)',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter3DialogueID.CH3_FREELANCE,
			},
			{
				id: 'choice_debug_cry',
				text: 'Khóc và viết lại từ đầu',
				textVi: 'Khóc và viết lại từ đầu',
				textEn: 'Cry and rewrite',
				effects: [{ stat: StatID.STRESS, value: 6 }],
				next: Chapter3DialogueID.CH3_FREELANCE,
			},
		],
	},
	// NEW: Freelance Event (Chapter 3)
	[Chapter3DialogueID.CH3_FREELANCE]: {
		speaker: 'npc',
		text: 'Hàng xóm: "Cháu biết làm web à? Làm cho chú cái web bán hàng đơn giản nhé? Chú trả công."',
		textVi:
			'Hàng xóm: "Cháu biết làm web à? Làm cho chú cái web bán hàng đơn giản nhé? Chú trả công."',
		textEn:
			'Neighbor: "You know web dev? Build me a simple shop site? I\'ll pay you."',
		next: Chapter3DialogueID.CH3_FREELANCE_QUIZ,
	},
	[Chapter3DialogueID.CH3_FREELANCE_QUIZ]: {
		speaker: 'player',
		text: 'Để căn giữa một thẻ <div> trong CSS, bạn dùng thuộc tính nào?',
		textVi: 'Để căn giữa một thẻ <div> trong CSS, bạn dùng thuộc tính nào?',
		textEn: 'To center a <div> in CSS, which property do you use?',
		choices: [
			{
				id: 'choice_freelance_quiz_1',
				text: 'text-align: center',
				textVi: 'text-align: center',
				textEn: 'text-align: center',
				next: Chapter3DialogueID.CH3_FREELANCE_DONE,
				effects: [{ stat: StatID.VISION, value: -1 }], // Wrong answer
			},
			{
				id: 'choice_freelance_quiz_2',
				text: 'margin: 0 auto',
				textVi: 'margin: 0 auto',
				textEn: 'margin: 0 auto',
				next: Chapter3DialogueID.CH3_FREELANCE_DONE,
				effects: [
					{ stat: StatID.MONEY, value: 2000000 },
					{ stat: StatID.VISION, value: 1 },
				], // Correct answer
			},
			{
				id: 'choice_freelance_quiz_3',
				text: 'float: center',
				textVi: 'float: center',
				textEn: 'float: center',
				next: Chapter3DialogueID.CH3_FREELANCE_DONE,
				effects: [{ stat: StatID.VISION, value: -1 }], // Wrong answer
			},
		],
	},
	[Chapter3DialogueID.CH3_FREELANCE_DONE]: {
		speaker: 'narrator',
		text: 'Bạn hoàn thành dự án. Tuy chỉ là web tĩnh đơn giản nhưng cầm 1 triệu trong tay, bạn thấy mình như Bill Gates.',
		textVi:
			'Bạn hoàn thành dự án. Tuy chỉ là web tĩnh đơn giản nhưng cầm 1 triệu trong tay, bạn thấy mình như Bill Gates.',
		textEn:
			'You finished the project. Just a simple static site, but holding 1 million, you feel like Bill Gates.',
		flags: [{ key: FlagID.FREELANCE_INCOME, value: 500, operation: 'add' }],
		next: Chapter3DialogueID.CH3_QUIZ_FE_BE, // Start Quiz Chunk 2
	},
	[Chapter3DialogueID.CH3_LEARN_TIME]: {
		speaker: 'player',
		text: 'Học code + đi học + gia đình. Làm sao quản lý thời gian?',
		textVi: 'Học code + đi học + gia đình. Làm sao quản lý thời gian?',
		textEn: 'Coding + school + family. How to manage time?',
		choices: [
			{
				id: 'choice_time_night',
				text: 'Thức đêm học code',
				textVi: 'Thức đêm học code',
				textEn: 'Stay up late coding',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.HEALTH, value: -1 },
				],
				next: Chapter3DialogueID.CH3_LEARN_RESOURCES,
			},
			{
				id: 'choice_time_morning',
				text: 'Dậy sớm 5h sáng',
				textVi: 'Dậy sớm 5h sáng',
				textEn: 'Wake at 5am',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.STEELMIND, value: 2 },
				],
				next: Chapter3DialogueID.CH3_LEARN_RESOURCES,
			},
			{
				id: 'choice_time_weekend',
				text: 'Chỉ học cuối tuần',
				textVi: 'Chỉ học cuối tuần',
				textEn: 'Only weekends',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_LEARN_RESOURCES,
			},
		],
	},
	[Chapter3DialogueID.CH3_LEARN_RESOURCES]: {
		speaker: 'narrator',
		text: 'Bạn kiếm được một chút tiền, giờ sẽ chọn học ở đâu?',
		textVi: 'Bạn kiếm được một chút tiền, giờ sẽ chọn học ở đâu?',
		textEn: 'You have some money, where will you learn?',
		choices: [
			{
				id: 'choice_resource_paid',
				text: 'Học trung tâm F8 của anh S (-5 triệu)',
				textVi: 'Học trung tâm F8 của anh S (-5 triệu)',
				textEn: 'F8 Center with Mr. S (-5M)',
				effects: [
					{ stat: StatID.VISION, value: 12 },
					{ stat: StatID.MONEY, value: -5000000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_HTML_TAGS, // Start Quiz Chunk 1
			},
			{
				id: 'choice_resource_tutor',
				text: 'Học kèm 1-1 anh A (Unicode) (-2 triệu)',
				textVi: 'Học kèm 1-1 anh A (Unicode) (-2 triệu)',
				textEn: '1-on-1 with Mr. A (Unicode) (-2M)',
				effects: [
					{ stat: StatID.VISION, value: 20 },
					{ stat: StatID.STRESS, value: 10 },
					{ stat: StatID.MONEY, value: -2000000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_HTML_TAGS, // Start Quiz Chunk 1
			},
			{
				id: 'choice_resource_free',
				text: 'Xem Youtube kênh F8 (Free)',
				textVi: 'Xem Youtube kênh F8 (Free)',
				textEn: 'Watch F8 Youtube (Free)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 0 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_HTML_TAGS, // Start Quiz Chunk 1
			},
		],
	},
	// 3.1 Khu tập thể & Miu
	[Chapter3DialogueID.CH3_DORM_1]: {
		speaker: 'meQ',
		text: 'Con ơi, lấy cái xô hứng nước chỗ dột đi. Mưa to quá, tường mốc hết rồi.',
		textVi:
			'Con ơi, lấy cái xô hứng nước chỗ dột đi. Mưa to quá, tường mốc hết rồi.',
		textEn:
			'Son, get the bucket for the leak. Heavy rain, walls are all moldy.',
		next: Chapter3DialogueID.CH3_CRUSH_START,
	},

	// NEW: First Crush Event
	[Chapter3DialogueID.CH3_CRUSH_START]: {
		speaker: 'narrator',
		text: 'Lớp 10. Một cô bạn cùng lớp mượn vở bạn chép bài. Cô ấy cười rất xinh, làm tim bạn lệch một nhịp.',
		textVi:
			'Lớp 10. Một cô bạn cùng lớp mượn vở bạn chép bài. Cô ấy cười rất xinh, làm tim bạn lệch một nhịp.',
		textEn:
			'Grade 10. A classmate borrowed your notes. Her smile made your heart skip a beat.',
		choices: [
			{
				id: 'choice_crush_confess',
				text: 'Tỏ tình: Liều ăn nhiều (Humanity +5)',
				textVi: 'Tỏ tình: Liều ăn nhiều (Humanity +5)',
				textEn: 'Confess: High risk high reward (Humanity +5)',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.STRESS, value: 4 },
				],
				next: Chapter3DialogueID.CH3_CRUSH_REJECT,
			},
			{
				id: 'choice_crush_hide',
				text: 'Giấu kín: Yêu đơn phương (Stress +3)',
				textVi: 'Giấu kín: Yêu đơn phương (Stress +3)',
				textEn: 'Hide it: Unrequited love (Stress +3)',
				effects: [{ stat: StatID.STRESS, value: 2 }],
				next: Chapter3DialogueID.CH3_FIX_PC_START,
			},
			{
				id: 'choice_crush_ignore',
				text: 'Lơ đi: Code là chân ái (Humanity -2)',
				textVi: 'Lơ đi: Code là chân ái (Humanity -2)',
				textEn: 'Ignore: Code is true love (Humanity -2)',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.HUMANITY, value: -1 },
				],
				next: Chapter3DialogueID.CH3_FIX_PC_START,
			},
		],
	},
	[Chapter3DialogueID.CH3_CRUSH_REJECT]: {
		speaker: 'narrator',
		text: 'Cô ấy bối rối: "Tớ chỉ coi cậu là bạn tốt thôi". Bạn quê độ, muốn độn thổ.',
		textVi:
			'Cô ấy bối rối: "Tớ chỉ coi cậu là bạn tốt thôi". Bạn quê độ, muốn độn thổ.',
		textEn:
			'She was confused: "I only see you as a good friend". You felt embarrassed.',
		effects: [{ stat: StatID.STEELMIND, value: 2 }],
		next: Chapter3DialogueID.CH3_FIX_PC_START,
	},

	// NEW: Fix PC Event
	[Chapter3DialogueID.CH3_FIX_PC_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Hàng xóm nhờ sửa máy tính. Họ hứa trả 500k. Máy cũ rích, bụi bặm.',
		textVi:
			'(Suy nghĩ) Hàng xóm nhờ sửa máy tính. Họ hứa trả 500k. Máy cũ rích, bụi bặm.',
		textEn:
			'(Thinking) Neighbor asked to fix PC. Promised 500k. Old, dusty machine.',
		choices: [
			{
				id: 'choice_fix_pc_yes',
				text: 'Sửa giúp: Kiếm thêm thu nhập (+500k)',
				textVi: 'Sửa giúp: Kiếm thêm thu nhập (+500k)',
				textEn: 'Fix it: Earn extra income (+500k)',
				// effects: [{ stat: StatID.MONEY, value: 500000 }], // Removed direct reward
				next: Chapter3DialogueID.CH3_FIX_PC_TWIST, // Redirect to twist
			},
			{
				id: 'choice_fix_pc_no',
				text: 'Từ chối: Tập trung học',
				textVi: 'Từ chối: Tập trung học',
				textEn: 'Refuse: Focus on study',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_QUIZ_DEBUG_LOGIC,
			},
		],
	},
	[Chapter3DialogueID.CH3_FIX_PC_TWIST]: {
		speaker: 'narrator',
		text: 'Bạn hì hục cả buổi chiều. Máy chạy ngon lành. Hàng xóm rút tờ 500k ra trả, nhưng lỡ tay làm rơi xuống cống. Bạn vớt lên được... 1/5 tờ tiền.',
		textVi:
			'Bạn hì hục cả buổi chiều. Máy chạy ngon lành. Hàng xóm rút tờ 500k ra trả, nhưng lỡ tay làm rơi xuống cống. Bạn vớt lên được... 1/5 tờ tiền.',
		textEn:
			'You toiled all afternoon. PC runs great. Neighbor pulled out 500k bill, but dropped it into sewer. You fished out... 1/5 of the bill.',
		next: Chapter3DialogueID.CH3_FIX_PC_SUCCESS,
	},
	[Chapter3DialogueID.CH3_FIX_PC_SUCCESS]: {
		speaker: 'narrator',
		text: 'Hàng xóm ái ngại đưa tạm bạn 100k tiền lẻ. "Thôi cầm tạm uống nước nhé cháu". Công cốc.',
		textVi:
			'Hàng xóm ái ngại đưa tạm bạn 100k tiền lẻ. "Thôi cầm tạm uống nước nhé cháu". Công cốc.',
		textEn:
			'Neighbor awkwardly gave you 100k small change. "Take this for water". Wasted effort.',
		effects: [{ stat: StatID.MONEY, value: 100000 }],
		next: Chapter3DialogueID.CH3_QUIZ_DEBUG_LOGIC, // Start Quiz Chunk 3
	},

	// 3.2 Biến cố chủ nợ
	[Chapter3DialogueID.CH3_DEBT_1]: {
		speaker: 'npc',
		text: '(Tiếng đập cửa rầm rầm) "Mở cửa ra! Trốn mãi được à?"',
		textVi: '(Tiếng đập cửa rầm rầm) "Mở cửa ra! Trốn mãi được à?"',
		textEn: '(Banging on door) "Open up! Can\'t hide forever!"',
		next: Chapter3DialogueID.CH3_DEBT_2,
	},
	[Chapter3DialogueID.CH3_DEBT_2]: {
		speaker: 'npc',
		text: '"Mở cửa ra! Trốn chui trốn lủi mãi được à? Ông Q đâu, ra đây nói chuyện!"',
		textVi:
			'"Mở cửa ra! Trốn chui trốn lủi mãi được à? Ông Q đâu, ra đây nói chuyện!"',
		textEn: '"Open up! Can\'t hide forever! Mr. Q, come out and talk!"',
		next: Chapter3DialogueID.CH3_DEBT_FATHER,
	},
	[Chapter3DialogueID.CH3_DEBT_FATHER]: {
		speaker: 'boQ',
		text: '(Run rẩy) "Các anh cho tôi khất... Tôi không chạy đi đâu cả. Xin các anh đừng làm con tôi sợ."',
		textVi:
			'(Run rẩy) "Các anh cho tôi khất... Tôi không chạy đi đâu cả. Xin các anh đừng làm con tôi sợ."',
		textEn:
			'(Trembling) "Please give me time... I\'m not running. Please don\'t scare my son."',
		next: Chapter3DialogueID.CH3_DEBT_ESCAPE,
	},
	[Chapter3DialogueID.CH3_DEBT_ESCAPE]: {
		speaker: 'narrator',
		text: 'Ngay trong đêm đó, cả nhà phải di tản. Đồ đạc ném vội lên xe ba gác, chạy trốn như những kẻ tội phạm.',
		textVi:
			'Ngay trong đêm đó, cả nhà phải di tản. Đồ đạc ném vội lên xe ba gác, chạy trốn như những kẻ tội phạm.',
		textEn:
			'That very night, family evacuated. Belongings thrown onto a tricycle, fleeing like criminals.',
		next: Chapter3DialogueID.CH3_DEBT_MIU,
	},
	[Chapter3DialogueID.CH3_DEBT_MIU]: {
		speaker: 'narrator',
		text: 'Bố chấp nhận đi làm xa ở miền Trung để trả nợ. Trước khi đi, bố mang về một con chó lai nhỏ xíu, lông vàng, tên là Miu. "Nó xấu xí nhưng trung thành," bố nói, mắt đỏ hoe.',
		textVi:
			'Bố chấp nhận đi làm xa ở miền Trung để trả nợ. Trước khi đi, bố mang về một con chó lai nhỏ xíu, lông vàng, tên là Miu. "Nó xấu xí nhưng trung thành," bố nói, mắt đỏ hoe.',
		textEn:
			'Father went to work far away in Central region. Before leaving, he brought home a small yellow mixed-breed dog named Miu. "He\'s ugly but loyal," father said, eyes red.',
		next: Chapter3DialogueID.CH3_DEBT_QUOTE,
	},
	[Chapter3DialogueID.CH3_DEBT_QUOTE]: {
		speaker: 'boQ',
		text: 'Bố đi vắng, Miu sẽ thay bố bảo vệ con, nghe con tâm sự. Đàn ông không được khóc, buồn thì nói với nó.',
		textVi:
			'Bố đi vắng, Miu sẽ thay bố bảo vệ con, nghe con tâm sự. Đàn ông không được khóc, buồn thì nói với nó.',
		textEn:
			"I'm away, Miu will protect you. Men don't cry, if you are sad, talk to him.",
		effects: [{ stat: StatID.HUMANITY, value: 3 }],
		next: Chapter3DialogueID.CH3_DEBT_VISIT,
	},
	[Chapter3DialogueID.CH3_DEBT_VISIT]: {
		speaker: 'narrator',
		text: 'Một lần bố tạt qua nhà, dúi vào tay bạn 500k. Bố gầy rộc đi, quần áo lấm lem bụi đường. "Cầm lấy mà tiêu vặt," bố nói rồi vội vã đi ngay.',
		textVi:
			'Một lần bố tạt qua nhà, dúi vào tay bạn 500k. Bố gầy rộc đi, quần áo lấm lem bụi đường. "Cầm lấy mà tiêu vặt," bố nói rồi vội vã đi ngay.',
		textEn:
			'Once father stopped by, shoved 500k into your hand. He looked haggard, clothes dusty. "Take it for pocket money," he said and left in a hurry.',
		next: Chapter3DialogueID.CH3_DEBT_CHOICE,
	},
	[Chapter3DialogueID.CH3_DEBT_CHOICE]: {
		speaker: 'player',
		text: 'Bạn sẽ làm gì?',
		textVi: 'Bạn sẽ làm gì?',
		textEn: 'What will you do?',
		choices: [
			{
				id: 'choice_accept_money',
				text: 'Nhận tiền (Bố làm vất vả lắm rồi)',
				textVi: 'Nhận tiền (Bố làm vất vả lắm rồi)',
				textEn: 'Accept the money (Father worked so hard)',
				effects: [{ stat: StatID.MONEY, value: 500000 }],
				next: Chapter3DialogueID.CH3_NOODLE_START,
			},
			{
				id: 'choice_refuse_money',
				text: 'Từ chối (Bố cần tiền hơn con)',
				textVi: 'Từ chối (Bố cần tiền hơn con)',
				textEn: 'Refuse (Father needs it more)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter3DialogueID.CH3_DEBT_REFUSE,
			},
		],
	},
	[Chapter3DialogueID.CH3_DEBT_REFUSE]: {
		speaker: 'narrator',
		text: 'Bạn đẩy tay bố ra. "Con tự lo được, bố giữ tiền đi." Bố nhìn bạn, mắt ngấn lệ, rồi gật đầu. Bố ôm bạn thật chặt, không nói gì.',
		textVi:
			'Bạn đẩy tay bố ra. "Con tự lo được, bố giữ tiền đi." Bố nhìn bạn, mắt ngấn lệ, rồi gật đầu. Bố ôm bạn thật chặt, không nói gì.',
		textEn:
			'You pushed his hand away. "I can manage, Dad. Keep the money." Father looked at you, eyes watering, then nodded. He hugged you tightly, saying nothing.',
		effects: [{ stat: StatID.STEELMIND, value: 2 }],
		next: Chapter3DialogueID.CH3_NOODLE_START,
	},

	// NEW: Eat Noodle Event
	[Chapter3DialogueID.CH3_NOODLE_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Đói quá. Trong túi còn ít tiền. Ăn gì đây?',
		textVi: '(Suy nghĩ) Đói quá. Trong túi còn ít tiền. Ăn gì đây?',
		textEn: '(Thinking) So hungry. Little money left. What to eat?',
		choices: [
			{
				id: 'choice_noodle_save',
				text: 'Mì tôm: Tiết kiệm là quốc sách (+20k)',
				textVi: 'Mì tôm: Tiết kiệm là quốc sách (+20k)',
				textEn: 'Instant noodles: Saving is policy (+20k)',
				effects: [{ stat: StatID.MONEY, value: 20000 }],
				next: Chapter3DialogueID.CH3_NOODLE_SAVE,
			},
			{
				id: 'choice_noodle_eat',
				text: 'Cơm rang: Ăn no mới có sức học (Health +3)',
				textVi: 'Cơm rang: Ăn no mới có sức học (Health +3)',
				textEn: 'Fried rice: Eat well to study well (Health +3)',
				effects: [{ stat: StatID.HEALTH, value: 2 }],
				next: Chapter3DialogueID.CH3_NOODLE_EAT,
			},
		],
	},
	[Chapter3DialogueID.CH3_NOODLE_SAVE]: {
		speaker: 'narrator',
		text: 'Gói mì tôm 3k. Nước sôi miễn phí. Bạn tiết kiệm được một khoản nhỏ.',
		textVi:
			'Gói mì tôm 3k. Nước sôi miễn phí. Bạn tiết kiệm được một khoản nhỏ.',
		textEn: '3k noodle pack. Free boiling water. You saved a small amount.',
		next: Chapter3DialogueID.CH3_HOPE_1,
	},
	[Chapter3DialogueID.CH3_NOODLE_EAT]: {
		speaker: 'narrator',
		text: 'Đĩa cơm rang nóng hổi. Bạn cảm thấy tràn trề năng lượng.',
		textVi: 'Đĩa cơm rang nóng hổi. Bạn cảm thấy tràn trề năng lượng.',
		textEn: 'Hot fried rice. You feel full of energy.',
		next: Chapter3DialogueID.CH3_HOPE_1,
	},

	// 3.3 Hy vọng lóe lên
	[Chapter3DialogueID.CH3_HOPE_1]: {
		speaker: 'boQ',
		text: 'Con ra xem này! Xe VinFast LuxSA đấy! Bố mua trả góp. Từ giờ nhà mình sẽ khác.',
		textVi:
			'Con ra xem này! Xe VinFast LuxSA đấy! Bố mua trả góp. Từ giờ nhà mình sẽ khác.',
		textEn:
			'Come look! VinFast LuxSA! Bought on installment. Things will change now.',
		next: Chapter3DialogueID.CH3_HOPE_2,
	},
	[Chapter3DialogueID.CH3_HOPE_2]: {
		speaker: 'narrator',
		text: 'Không phải để khoe khoang. Bố cần một "bộ mặt" để giao dịch. Chiếc xe là biểu tượng cho sự trở lại của lòng tự trọng.',
		textVi:
			'Không phải để khoe khoang. Bố cần một "bộ mặt" để giao dịch. Chiếc xe là biểu tượng cho sự trở lại của lòng tự trọng.',
		textEn:
			'Not to show off. He needed a "face" for business. The car was a symbol of returned self-esteem.',
		next: Chapter3DialogueID.CH3_HOPE_CRASH,
	},
	[Chapter3DialogueID.CH3_HOPE_CRASH]: {
		speaker: 'narrator',
		text: 'Nhưng tai nạn định mệnh ập đến. Sếp tổng công ty bố đột ngột qua đời. Công ty loạn lạc. Nợ lương, nợ thưởng. Chiếc LuxSA trở thành cục nợ khổng lồ.',
		textVi:
			'Nhưng tai nạn định mệnh ập đến. Sếp tổng công ty bố đột ngột qua đời. Công ty loạn lạc. Nợ lương, nợ thưởng. Chiếc LuxSA trở thành cục nợ khổng lồ.',
		textEn:
			'But fate struck. Boss died of stroke. Company in chaos. Salary/bonus frozen. The LuxSA became a giant debt burden.',
		next: Chapter3DialogueID.CH3_LEGACY_1,
	},

	// 3.4 Công ty Ma
	[Chapter3DialogueID.CH3_LEGACY_1]: {
		speaker: 'narrator',
		text: 'Dù túng quẫn, bố vẫn âm thầm duy trì một công ty xây dựng "Ma" (không hoạt động). Bạn hỏi tại sao tốn tiền vô ích.',
		textVi:
			'Dù túng quẫn, bố vẫn âm thầm duy trì một công ty xây dựng "Ma" (không hoạt động). Bạn hỏi tại sao tốn tiền vô ích.',
		textEn:
			'Despite poverty, father kept a "Ghost" construction company running. You asked why waste money.',
		next: Chapter3DialogueID.CH3_LEGACY_QUOTE,
	},
	[Chapter3DialogueID.CH3_LEGACY_QUOTE]: {
		speaker: 'boQ',
		text: 'Để sau này con ra trường, con sẽ có một công ty thâm niên 5-7 năm. Khách hàng sẽ tin con hơn. Bố đang lót đường cho con.',
		textVi:
			'Để sau này con ra trường, con sẽ có một công ty thâm niên 5-7 năm. Khách hàng sẽ tin con hơn. Bố đang lót đường cho con.',
		textEn:
			"So when you graduate, you have a 5-7 year old company. Clients will trust you. I'm paving the way for you.",
		effects: [{ stat: StatID.VISION, value: 1 }],
		next: Chapter3DialogueID.CH3_COVID_1,
	},

	// 3.5 COVID
	[Chapter3DialogueID.CH3_COVID_1]: {
		speaker: 'narrator',
		text: 'Đại dịch COVID bùng phát. Hà Nội giãn cách. Mẹ mất thu nhập. Bố thất nghiệp, chiếc LuxSA phủ bụi.',
		textVi:
			'Đại dịch COVID bùng phát. Hà Nội giãn cách. Mẹ mất thu nhập. Bố thất nghiệp, chiếc LuxSA phủ bụi.',
		textEn:
			'COVID pandemic. Hanoi lockdown. Mom lost income. Father unemployed, LuxSA dusty.',
		next: Chapter3DialogueID.CH3_COVID_2,
	},
	[Chapter3DialogueID.CH3_END]: {
		speaker: 'narrator',
		text: 'Giấy báo trúng tuyển Đại học trên tay. Bạn xếp gọn chiếc máy tính vào ba lô. Chuyến tàu đêm đưa bạn rời xa thị trấn nhỏ, hướng về ánh đèn thành phố.',
		textVi:
			'Giấy báo trúng tuyển Đại học trên tay. Bạn xếp gọn chiếc máy tính vào ba lô. Chuyến tàu đêm đưa bạn rời xa thị trấn nhỏ, hướng về ánh đèn thành phố.',
		textEn:
			'University acceptance letter in hand. You packed the computer into the backpack. Night train took you away from small town, towards city lights.',
		next: Chapter4DialogueID.CH4_START,
	},
	[Chapter3DialogueID.CH3_COVID_2]: {
		speaker: 'narrator',
		text: 'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textVi:
			'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textEn:
			'You devoured coding courses on Udemy, Coursera. 14 hours a day by the old PC.',
		next: Chapter3DialogueID.CH3_QUIZ_BROWSER, // Start Quiz Chunk 4
	},

	// NEW: Sell Items Event
	[Chapter3DialogueID.CH3_SELL_ITEMS_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Tài khoản game của mình có vài món đồ hiếm. Có người hỏi mua giá 500k.',
		textVi:
			'(Suy nghĩ) Tài khoản game của mình có vài món đồ hiếm. Có người hỏi mua giá 500k.',
		textEn: '(Thinking) My game account has rare items. Someone offered 200k.',
		choices: [
			{
				id: 'choice_sell_items_yes',
				text: 'Bán hết: Cầm cự qua ngày (+500k, Humanity -3)',
				textVi: 'Bán hết: Cầm cự qua ngày (+500k, Humanity -3)',
				textEn: 'Sell all: Survive the day (+500k, Humanity -3)',
				effects: [
					{ stat: StatID.MONEY, value: 500000 },
					{ stat: StatID.HUMANITY, value: -2 },
				],
				next: Chapter3DialogueID.CH3_SELL_ITEMS_SELL, // Redirect to Gamble Chain
			},
			{
				id: 'choice_sell_items_no',
				text: 'Giữ lại: Kỷ niệm tuổi thơ (Humanity +3)',
				textVi: 'Giữ lại: Kỷ niệm tuổi thơ (Humanity +3)',
				textEn: 'Keep it: Childhood memories (Humanity +3)',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter3DialogueID.CH3_COVID_FATHER,
			},
		],
	},
	[Chapter3DialogueID.CH3_SELL_ITEMS_SELL]: {
		speaker: 'narrator',
		text: 'Giao dịch thành công. Bạn có thêm tiền để trang trải, nhưng lòng hơi tiếc nuối.',
		textVi:
			'Giao dịch thành công. Bạn có thêm tiền để trang trải, nhưng lòng hơi tiếc nuối.',
		textEn:
			'Transaction successful. Extra money for expenses, but a bit regretful.',
		next: Chapter3DialogueID.CH3_GAMBLE_START,
	},

	// NEW: Gamble Chain
	[Chapter3DialogueID.CH3_GAMBLE_START]: {
		speaker: 'npc',
		text: 'Thằng bạn rủ rê: "Mày có 500k à? Đánh con lô đi, tối nay về là có 2 triệu mua màn hình mới."',
		textVi:
			'Thằng bạn rủ rê: "Mày có 500k à? Đánh con lô đi, tối nay về là có 2 triệu mua màn hình mới."',
		textEn:
			'Friend tempted: "You have 500k? Bet on lottery, tonight you get 2 million for new screen."',
		choices: [
			{
				id: 'choice_gamble_yes',
				text: 'Chơi luôn: Liều ăn nhiều (Money ??)',
				textVi: 'Chơi luôn: Liều ăn nhiều (Money ??)',
				textEn: 'Bet it: High risk (Money ??)',
				next: Chapter3DialogueID.CH3_GAMBLE_LOSE, // Most likely lose
			},
			{
				id: 'choice_gamble_no',
				text: 'Thôi: Cờ bạc là bác thằng bần',
				textVi: 'Thôi: Cờ bạc là bác thằng bần',
				textEn: 'No: Gambling is ruin',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter3DialogueID.CH3_COVID_FATHER,
			},
		],
	},
	[Chapter3DialogueID.CH3_GAMBLE_LOSE]: {
		speaker: 'narrator',
		text: 'Tối hôm đó, kết quả về... trượt lòi mắt. Bạn mất trắng 500k. Cảm giác cay cú và hối hận xâm chiếm.',
		textVi:
			'Tối hôm đó, kết quả về... trượt lòi mắt. Bạn mất trắng 500k. Cảm giác cay cú và hối hận xâm chiếm.',
		textEn:
			'That night, result came... lost. You lost 500k. Anger and regret took over.',
		effects: [
			{ stat: StatID.MONEY, value: -500000 },
			{ stat: StatID.STRESS, value: 7 },
			{ stat: StatID.STEELMIND, value: -2 },
		],
		next: Chapter3DialogueID.CH3_COVID_FATHER,
	},
	[Chapter3DialogueID.CH3_COVID_FATHER]: {
		speaker: 'boQ',
		text: 'Bố nhìn bạn, thở dài: "Con nghỉ ngơi chút đi. Đừng cố quá như bố ngày xưa."',
		textVi:
			'Bố nhìn bạn, thở dài: "Con nghỉ ngơi chút đi. Đừng cố quá như bố ngày xưa."',
		textEn:
			'Father looked at you, sighing: "Rest a bit, son. Don\'t push too hard like I did."',
		next: Chapter3DialogueID.CH3_COVID_REPLY,
	},
	[Chapter3DialogueID.CH3_COVID_REPLY]: {
		speaker: 'player',
		text: 'Bạn sẽ trả lời sao?',
		textVi: 'Bạn sẽ trả lời sao?',
		textEn: 'How will you reply?',
		choices: [
			{
				id: 'choice_grind_reply',
				text: 'Con phải cố, đây là cơ hội duy nhất',
				textVi: 'Con phải cố, đây là cơ hội duy nhất',
				textEn: 'I must push, this is the only chance',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter3DialogueID.CH3_COVID_FREELANCE,
			},
			{
				id: 'choice_reassure_reply',
				text: 'Con ổn mà bố, con thích lập trình',
				textVi: 'Con ổn mà bố, con thích lập trình',
				textEn: "I'm fine Dad, I love coding",
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_COVID_FREELANCE,
			},
		],
	},
	[Chapter3DialogueID.CH3_COVID_FREELANCE]: {
		speaker: 'narrator',
		text: 'Sau 4 tháng "tu luyện" trong phòng kín, bạn nhận được job freelance đầu tiên: Cắt HTML/CSS cho một landing page đơn giản. Thù lao: 300.000 VNĐ.',
		textVi:
			'Sau 4 tháng "tu luyện" trong phòng kín, bạn nhận được job freelance đầu tiên: Cắt HTML/CSS cho một landing page đơn giản. Thù lao: 300.000 VNĐ.',
		textEn:
			'After 4 months of "cultivation" in isolation, you got your first freelance job: HTML/CSS for a simple landing page. Pay: 300,000 VND.',
		next: Chapter3DialogueID.CH3_BLACKHAT_START, // Redirect to Black Hat
	},

	// NEW: Black Hat Event
	[Chapter3DialogueID.CH3_BLACKHAT_START]: {
		speaker: 'npc',
		text: 'Một người lạ trên diễn đàn nhắn tin: "Viết cho anh con tool lấy cắp cookie Facebook. Trả 2 triệu."',
		textVi:
			'Một người lạ trên diễn đàn nhắn tin: "Viết cho anh con tool lấy cắp cookie Facebook. Trả 2 triệu."',
		textEn:
			'Stranger on forum messaged: "Write me a tool to steal Facebook cookies. Pay 2 million."',
		choices: [
			{
				id: 'choice_blackhat_accept',
				text: 'Nhận lời: Đang túng quá (Money +2M)',
				textVi: 'Nhận lời: Đang túng quá (Money +2M)',
				textEn: 'Accept: Desperate (Money +2M)',
				effects: [
					{ stat: StatID.MONEY, value: 2000000 },
					{ stat: StatID.HUMANITY, value: -10 },
					{ stat: StatID.STRESS, value: 4 }, // Fear of police
				],
				next: Chapter3DialogueID.CH3_COVID_JOB_CHOICE,
			},
			{
				id: 'choice_blackhat_refuse',
				text: 'Từ chối: Đạo đức nghề nghiệp',
				textVi: 'Từ chối: Đạo đức nghề nghiệp',
				textEn: 'Refuse: Professional ethics',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter3DialogueID.CH3_COVID_JOB_CHOICE,
			},
		],
	},
	[Chapter3DialogueID.CH3_COVID_JOB_CHOICE]: {
		speaker: 'player',
		text: 'Bạn sẽ quyết định như thế nào?',
		textVi: 'Bạn sẽ quyết định như thế nào?',
		textEn: 'What will you decide?',
		choices: [
			{
				id: 'choice_accept_job',
				text: 'Nhận job (Cơ hội để kiếm tiền)',
				textVi: 'Nhận job (Cơ hội để kiếm tiền)',
				textEn: 'Accept the job (Opportunity to earn money)',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.MONEY, value: 300000 },
				],
				next: Chapter3DialogueID.CH3_COVID_ACCEPT,
			},
			{
				id: 'choice_refuse_job',
				text: 'Từ chối (Chưa đủ kỹ năng, cần học thêm)',
				textVi: 'Từ chối (Chưa đủ kỹ năng, cần học thêm)',
				textEn: 'Refuse (Not skilled enough, need to learn more)',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_COVID_REFUSE,
			},
		],
	},
	[Chapter3DialogueID.CH3_COVID_ACCEPT]: {
		speaker: 'narrator',
		text: 'Bạn nhận job và làm việc suốt 3 ngày liền. Kết quả không hoàn hảo nhưng khách hàng chấp nhận. Đây là bước đầu tiên trong sự nghiệp lập trình viên của bạn.',
		textVi:
			'Bạn nhận job và làm việc suốt 3 ngày liền. Kết quả không hoàn hảo nhưng khách hàng chấp nhận. Đây là bước đầu tiên trong sự nghiệp lập trình viên của bạn.',
		textEn:
			"You accepted and worked for 3 days straight. Result wasn't perfect but client accepted it. This is your first step as a programmer.",
		next: Chapter3DialogueID.CH3_COVID_END,
	},
	[Chapter3DialogueID.CH3_COVID_REFUSE]: {
		speaker: 'narrator',
		text: 'Bạn từ chối và dành thêm 2 tháng để học sâu hơn về JavaScript và React. Sau đó bạn tự tin nhận các job phức tạp hơn với thù lao cao hơn.',
		textVi:
			'Bạn từ chối và dành thêm 2 tháng để học sâu hơn về JavaScript và React. Sau đó bạn tự tin nhận các job phức tạp hơn với thù lao cao hơn.',
		textEn:
			'You refused and spent 2 more months learning JavaScript and React deeply. Later you confidently took more complex jobs with higher pay.',
		effects: [{ stat: StatID.STEELMIND, value: 2 }],
		next: Chapter3DialogueID.CH3_COVID_END,
	},
	[Chapter3DialogueID.CH3_COVID_END]: {
		speaker: 'narrator',
		text: 'Hết dịch, bố lại đi làm dự án resort. Lại thất bại vì vấn đề pháp lý. Bố về tay trắng. Sự tự tin rạn nứt thực sự.',
		textVi:
			'Hết dịch, bố lại đi làm dự án resort. Lại thất bại vì vấn đề pháp lý. Bố về tay trắng. Sự tự tin rạn nứt thực sự.',
		textEn:
			'Post-COVID, father joined resort project. Failed due to legal issues. Returned empty handed. Confidence truly cracked.',
		next: Chapter3DialogueID.CH3_PTIT_ADMISSION,
	},

	// NEW: Developer Scenarios (Quizzes)
	[Chapter3DialogueID.CH3_QUIZ_HTML_TAGS]: {
		speaker: 'narrator',
		text: 'Trong một trang web chuẩn SEO, nên có bao nhiêu thẻ H1?',
		textVi: 'Trong một trang web chuẩn SEO, nên có bao nhiêu thẻ H1?',
		textEn: 'How many H1 tags should be on a standard SEO page?',
		choices: [
			{
				id: 'quiz_h1_one',
				text: 'Duy nhất 1 thẻ H1 (Best Practice)',
				textVi: 'Duy nhất 1 thẻ H1 (Best Practice)',
				textEn: 'Only 1 H1 tag (Best Practice)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_CSS_DISPLAY,
			},
			{
				id: 'quiz_h1_many',
				text: 'Bao nhiêu cũng được, miễn là to đẹp',
				textVi: 'Bao nhiêu cũng được, miễn là to đẹp',
				textEn: 'As many as needed for styling',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_CSS_DISPLAY,
			},
			{
				id: 'quiz_h1_none',
				text: 'Không cần H1, dùng div font-size lớn là được',
				textVi: 'Không cần H1, dùng div font-size lớn là được',
				textEn: 'No H1 needed, use div with big font-size',
				effects: [{ stat: StatID.VISION, value: -5 }],
				next: Chapter3DialogueID.CH3_QUIZ_CSS_DISPLAY,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_CSS_DISPLAY]: {
		speaker: 'narrator',
		text: 'Mặc định, thẻ <div> có thuộc tính display là gì?',
		textVi: 'Mặc định, thẻ <div> có thuộc tính display là gì?',
		textEn: 'By default, what is the display property of a <div>?',
		choices: [
			{
				id: 'quiz_css_block',
				text: 'block (Chiếm hết chiều ngang)',
				textVi: 'block (Chiếm hết chiều ngang)',
				textEn: 'block (Takes full width)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_JS_VAR,
			},
			{
				id: 'quiz_css_inline',
				text: 'inline (Nằm trên cùng một dòng)',
				textVi: 'inline (Nằm trên cùng một dòng)',
				textEn: 'inline (Sits on same line)',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_JS_VAR,
			},
			{
				id: 'quiz_css_flex',
				text: 'flex (Linh hoạt)',
				textVi: 'flex (Linh hoạt)',
				textEn: 'flex (Flexible)',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_JS_VAR,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_JS_VAR]: {
		speaker: 'narrator',
		text: 'Sự khác biệt chính giữa var, let và const?',
		textVi: 'Sự khác biệt chính giữa var, let và const?',
		textEn: 'Main difference between var, let, and const?',
		choices: [
			{
				id: 'quiz_js_scope',
				text: 'Scope (Phạm vi) và khả năng gán lại (Reassignment)',
				textVi: 'Scope (Phạm vi) và khả năng gán lại (Reassignment)',
				textEn: 'Scope and Reassignment',
				effects: [
					{ stat: StatID.VISION, value: 7 },
					{ stat: StatID.MONEY, value: 1000000 },
				],
				next: Chapter3DialogueID.CH3_DORM_1, // End Quiz Chunk 1 -> Dorm
			},
			{
				id: 'quiz_js_syntax',
				text: 'Chỉ là cú pháp, dùng cái nào cũng được',
				textVi: 'Chỉ là cú pháp, dùng cái nào cũng được',
				textEn: 'Just syntax, use any',
				effects: [{ stat: StatID.VISION, value: -5 }],
				next: Chapter3DialogueID.CH3_DORM_1, // End Quiz Chunk 1 -> Dorm
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_FE_BE]: {
		speaker: 'narrator',
		text: 'Frontend Developer chủ yếu làm việc với?',
		textVi: 'Frontend Developer chủ yếu làm việc với?',
		textEn: 'Frontend Developer mainly works with?',
		choices: [
			{
				id: 'quiz_fe_ui',
				text: 'Giao diện người dùng (UI) và trải nghiệm (UX) trên trình duyệt',
				textVi:
					'Giao diện người dùng (UI) và trải nghiệm (UX) trên trình duyệt',
				textEn: 'User Interface (UI) and Experience (UX) in browser',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_API,
			},
			{
				id: 'quiz_fe_db',
				text: 'Cơ sở dữ liệu và Server',
				textVi: 'Cơ sở dữ liệu và Server',
				textEn: 'Database and Server',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_API,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_API]: {
		speaker: 'narrator',
		text: 'API là viết tắt của?',
		textVi: 'API là viết tắt của?',
		textEn: 'API stands for?',
		choices: [
			{
				id: 'quiz_api_app',
				text: 'Application Programming Interface',
				textVi: 'Application Programming Interface',
				textEn: 'Application Programming Interface',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_LEARN_TIME, // End Quiz Chunk 2 -> Time Management
			},
			{
				id: 'quiz_api_auto',
				text: 'Automated Process Integration',
				textVi: 'Automated Process Integration',
				textEn: 'Automated Process Integration',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_LEARN_TIME, // End Quiz Chunk 2 -> Time Management
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_DEBUG_LOGIC]: {
		speaker: 'narrator',
		text: "Tại sao trong JS: 1 + '1' = '11'?",
		textVi: "Tại sao trong JS: 1 + '1' = '11'?",
		textEn: "Why in JS: 1 + '1' = '11'?",
		choices: [
			{
				id: 'quiz_debug_coercion',
				text: 'Type Coercion (Ép kiểu tự động): Số thành chuỗi',
				textVi: 'Type Coercion (Ép kiểu tự động): Số thành chuỗi',
				textEn: 'Type Coercion: Number to String',
				effects: [
					{ stat: StatID.VISION, value: 7 },
					{ stat: StatID.MONEY, value: 1000000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_HTTP,
			},
			{
				id: 'quiz_debug_math',
				text: 'Do lỗi của máy tính',
				textVi: 'Do lỗi của máy tính',
				textEn: 'Computer error',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_HTTP,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_HTTP]: {
		speaker: 'narrator',
		text: 'HTTP Status 404 nghĩa là gì?',
		textVi: 'HTTP Status 404 nghĩa là gì?',
		textEn: 'What does HTTP Status 404 mean?',
		choices: [
			{
				id: 'quiz_http_notfound',
				text: 'Not Found (Không tìm thấy trang)',
				textVi: 'Not Found (Không tìm thấy trang)',
				textEn: 'Not Found',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_DEBT_1, // End Quiz Chunk 3 -> Debt Crisis
			},
			{
				id: 'quiz_http_server',
				text: 'Server Error (Lỗi máy chủ)',
				textVi: 'Server Error (Lỗi máy chủ)',
				textEn: 'Server Error',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_DEBT_1, // End Quiz Chunk 3 -> Debt Crisis
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_BROWSER]: {
		speaker: 'narrator',
		text: 'Phím F12 trên trình duyệt thường dùng để làm gì?',
		textVi: 'Phím F12 trên trình duyệt thường dùng để làm gì?',
		textEn: 'What is F12 key usually used for in browser?',
		choices: [
			{
				id: 'quiz_browser_dev',
				text: 'Mở Developer Tools (Console, Network, Elements)',
				textVi: 'Mở Developer Tools (Console, Network, Elements)',
				textEn: 'Open Developer Tools',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_VSCODE,
			},
			{
				id: 'quiz_browser_refresh',
				text: 'Refresh trang web',
				textVi: 'Refresh trang web',
				textEn: 'Refresh page',
				effects: [{ stat: StatID.VISION, value: -1 }],
				next: Chapter3DialogueID.CH3_QUIZ_VSCODE,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_VSCODE]: {
		speaker: 'narrator',
		text: 'Để format code đẹp tự động trong VS Code?',
		textVi: 'Để format code đẹp tự động trong VS Code?',
		textEn: 'To auto-format code in VS Code?',
		choices: [
			{
				id: 'quiz_vscode_format',
				text: 'Shift + Alt + F (Windows) hoặc Shift + Option + F (Mac)',
				textVi: 'Shift + Alt + F (Windows) hoặc Shift + Option + F (Mac)',
				textEn: 'Shift + Alt + F (Win) / Shift + Opt + F (Mac)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_QUIZ_GIT_INIT,
			},
			{
				id: 'quiz_vscode_space',
				text: 'Gõ phím Space từng dòng một',
				textVi: 'Gõ phím Space từng dòng một',
				textEn: 'Type Space line by line',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_QUIZ_GIT_INIT,
			},
		],
	},
	[Chapter3DialogueID.CH3_QUIZ_GIT_INIT]: {
		speaker: 'narrator',
		text: 'Lệnh nào để khởi tạo một Git repository mới?',
		textVi: 'Lệnh nào để khởi tạo một Git repository mới?',
		textEn: 'Which command initializes a new Git repository?',
		choices: [
			{
				id: 'quiz_git_init',
				text: 'git init',
				textVi: 'git init',
				textEn: 'git init',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 500000 },
				],
				next: Chapter3DialogueID.CH3_SELL_ITEMS_START, // End Quiz Chunk 4 -> Sell Items
			},
			{
				id: 'quiz_git_commit',
				text: 'git commit',
				textVi: 'git commit',
				textEn: 'git commit',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter3DialogueID.CH3_SELL_ITEMS_START, // End Quiz Chunk 4 -> Sell Items
			},
			{
				id: 'quiz_git_clone',
				text: 'git clone (Copy repo có sẵn)',
				textVi: 'git clone (Copy repo có sẵn)',
				textEn: 'git clone (Copy existing repo)',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter3DialogueID.CH3_SELL_ITEMS_START, // End Quiz Chunk 4 -> Sell Items
			},
		],
	},
	[Chapter3DialogueID.CH3_PTIT_ADMISSION]: {
		speaker: 'narrator',
		text: 'Kết thúc lớp 12, giữa bộn bề khó khăn, bạn nhận giấy báo trúng tuyển Học viện. Đây là tấm vé thông hành đầu tiên để bạn bước vào thế giới của "Mã nguồn", rời xa những công trình xây dựng đầy bụi bặm của bố.',
		textVi:
			'Kết thúc lớp 12, giữa bộn bề khó khăn, bạn nhận giấy báo trúng tuyển Học viện. Đây là tấm vé thông hành đầu tiên để bạn bước vào thế giới của "Mã nguồn", rời xa những công trình xây dựng đầy bụi bặm của bố.',
		textEn:
			'End of Grade 12, amidst difficulties, you got admitted to the Academy. This is your first ticket into the world of "Source Code", away from father\'s dusty construction sites.',
		next: Chapter4DialogueID.CH4_START,
	},
};
