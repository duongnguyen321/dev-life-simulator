// ==========================================
// CHAPTER 5: REFACTORING (TÁI CẤU TRÚC)
// Timeline: 22-24 tuổi
// Theme: Những người thầy, Những người sếp và Sự lựa chọn
// ==========================================

import { Chapter5DialogueID, Chapter5SceneID, Chapter5TodoID, Chapter6DialogueID, ConditionType, FlagID, Operator, StatID } from '../enum';
import { type Chapter, type DialogueNode } from '../types';

export const chapter5: Chapter = {
	id: 5,
	name: 'Refactoring',
	nameVi: 'Refactoring',
	nameEn: 'Refactoring',
	ageRange: '22-24 tuổi',
	theme: 'Những người thầy, Những người sếp và Sự lựa chọn',
	themeVi: 'Những người thầy, Những người sếp và Sự lựa chọn',
	themeEn: 'Mentors, Bosses, and Choices',
	scenes: [
		{
			id: Chapter5SceneID.CH5_CV,
			name: 'Viết CV',
			nameVi: 'Khởi tạo nhân vật: Viết CV đầu tiên',
			nameEn: 'Character Creation: First CV',
			background: '/assets/sprites/backgrounds/dorm_room_pc.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: Chapter5DialogueID.CH5_CV_1,
		},
		{
			id: Chapter5SceneID.CH5_COMMUTE,
			name: '20km Commute',
			nameVi: 'Năm 1: 20km và Sự khiêm nhường',
			nameEn: 'Year 1: 20km and Humility',
			background: '/assets/sprites/backgrounds/road_rain.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: Chapter5DialogueID.CH5_COMMUTE_1,
		},
		{
			id: Chapter5SceneID.CH5_EDTECH,
			name: 'EdTech & Anh S',
			nameVi: 'Năm 2: Anh S và Đế chế EdTech',
			nameEn: 'Year 2: Brother S and EdTech Empire',
			background: '/assets/sprites/backgrounds/office_edtech.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: Chapter5DialogueID.CH5_EDTECH_1,
		},
		{
			id: Chapter5SceneID.CH5_BROTHER_V,
			name: 'Lời mời Anh V',
			nameVi: 'Cuộc gọi từ Anh V',
			nameEn: 'Call from Brother V',
			background: '/assets/sprites/backgrounds/office_corridor.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: Chapter5DialogueID.CH5_BROTHER_V_1,
		},
		{
			id: Chapter5SceneID.CH5_OUTSOURCE,
			name: 'Lò luyện Outsource',
			nameVi: 'Anh L và Lò luyện Outsource',
			nameEn: 'Brother L and Outsource Hell',
			background: '/assets/sprites/backgrounds/office_outsource.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: Chapter5DialogueID.CH5_OUTSOURCE_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter5TodoID.CH5_TODO_COMMUTE_RAIN,
				text: 'Đi làm dưới mưa 20km',
				textVi: 'Đi làm dưới mưa 20km',
				textEn: 'Commute 20km in rain',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { health: 3 },
			},

			{
				id: 'ch5_todo_ot_no_pay',
				text: 'OT không lương',
				textVi: 'OT không lương',
				textEn: 'Unpaid OT',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { health: 5, stress: 5 }, // Increased Stress cost
			},
			{
				id: 'ch5_todo_learn_english',
				text: 'Học tiếng Anh buổi tối',
				textVi: 'Học tiếng Anh buổi tối',
				textEn: 'Study English at night',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 2 },
			},

			{
				id: 'ch5_todo_refactor_legacy',
				text: 'Refactor code rác',
				textVi: 'Refactor code rác',
				textEn: 'Refactor legacy code',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 3 },
			},
			{
				id: 'ch5_todo_write_blog',
				text: 'Viết Tech Blog',
				textVi: 'Viết Tech Blog',
				textEn: 'Write Tech Blog',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},

			{
				id: 'ch5_todo_date_fail',
				text: 'Đi date nhưng chỉ nói về code',
				textVi: 'Đi date nhưng chỉ nói về code',
				textEn: 'Date but only talk code',
				cost: { money: 500000, humanity: 3 }, // Fail
			},

			{
				id: 'ch5_todo_argue_pm',
				text: 'Cãi nhau với PM về feature',
				textVi: 'Cãi nhau với PM về feature',
				textEn: 'Argue with PM about feature',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { stress: 3 }, // Increased Stress cost
			},
			{
				id: 'ch5_todo_mentor_junior',
				text: 'Hướng dẫn thực tập sinh',
				textVi: 'Hướng dẫn thực tập sinh',
				textEn: 'Mentor intern',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
			},
			{
				id: 'ch5_todo_sleep_office',
				text: 'Ngủ gục trên bàn phím',
				textVi: 'Ngủ gục trên bàn phím',
				textEn: 'Sleep on keyboard',
				cost: { health: 2 },
				reward: { stress: -3 },
			},
			{
				id: 'ch5_todo_apply_big_tech',
				text: 'Nộp CV vào Big Tech',
				textVi: 'Nộp CV vào Big Tech',
				textEn: 'Apply to Big Tech',
				effects: [{ stat: StatID.VISION, value: 5 }],
				cost: { stress: 3 },
			},
			{
				id: 'ch5_todo_read_system_design',
				text: 'Đọc sách System Design',
				textVi: 'Đọc sách System Design',
				textEn: 'Read System Design',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch5_todo_coffee_addict',
				text: 'Uống 3 ly cafe/ngày',
				textVi: 'Uống 3 ly cafe/ngày',
				textEn: 'Drink 3 coffees/day',
				cost: { health: 3 },
				reward: { vision: 2 }, // Focus
			},
			{
				id: 'ch5_todo_ignore_health',
				text: 'Lờ đi cơn đau lưng',
				textVi: 'Lờ đi cơn đau lưng',
				textEn: 'Ignore back pain',
				cost: { health: 5 }, // Increased Health cost
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
			},
			{
				id: 'ch5_todo_dream_startup',
				text: 'Mơ về công ty riêng',
				textVi: 'Mơ về công ty riêng',
				textEn: 'Dream of own company',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch5_todo_save_money',
				text: 'Tiết kiệm tiền mua Mac',
				textVi: 'Tiết kiệm tiền mua Mac',
				textEn: 'Save for Mac',
				reward: { money: 2000000 },
				cost: { humanity: 2 }, // Stingy
			},
		],
		dreamQuestions: [
			{
				id: 'ch5_dream_code',
				text: 'Bạn mơ thấy code chạy mãi không dừng (Infinite Loop).',
				textVi: 'Bạn mơ thấy code chạy mãi không dừng (Infinite Loop).',
				textEn: 'Dream of Infinite Loop.',
				choices: [
					{
						id: 'ch5_dream_code_break',
						text: 'Dùng lệnh Break',
						textVi: 'Dùng lệnh Break',
						textEn: 'Use Break',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch5_dream_code_wait',
						text: 'Ngồi đợi nó dừng',
						textVi: 'Ngồi đợi nó dừng',
						textEn: 'Wait for it to stop',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }], // Patience
					},
					{
						id: 'ch5_dream_code_panic',
						text: 'Hoảng loạn tắt máy',
						textVi: 'Hoảng loạn tắt máy',
						textEn: 'Panic shutdown',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch5_dream_code_fix',
						text: 'Tìm nguyên nhân (Debug)',
						textVi: 'Tìm nguyên nhân (Debug)',
						textEn: 'Debug',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
				],
			},
			{
				id: 'ch5_dream_mentor',
				text: 'Bạn mơ thấy người Mentor cũ mắng mình.',
				textVi: 'Bạn mơ thấy người Mentor cũ mắng mình.',
				textEn: 'Dream of old Mentor scolding you.',
				choices: [
					{
						id: 'ch5_dream_mentor_argue',
						text: 'Cãi lại',
						textVi: 'Cãi lại',
						textEn: 'Argue back',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch5_dream_mentor_listen',
						text: 'Lắng nghe',
						textVi: 'Lắng nghe',
						textEn: 'Listen',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch5_dream_mentor_cry',
						text: 'Khóc',
						textVi: 'Khóc',
						textEn: 'Cry',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch5_dream_mentor_ignore',
						text: 'Bỏ đi',
						textVi: 'Bỏ đi',
						textEn: 'Walk away',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -3 }],
					},
				],
			},
			{
				id: 'ch5_dream_office',
				text: 'Bạn mơ thấy văn phòng vắng tanh, chỉ còn mình bạn.',
				textVi: 'Bạn mơ thấy văn phòng vắng tanh, chỉ còn mình bạn.',
				textEn: 'Dream of empty office, only you.',
				choices: [
					{
						id: 'ch5_dream_office_work',
						text: 'Tiếp tục làm việc',
						textVi: 'Tiếp tục làm việc',
						textEn: 'Keep working',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch5_dream_office_leave',
						text: 'Về nhà',
						textVi: 'Về nhà',
						textEn: 'Go home',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch5_dream_office_scared',
						text: 'Sợ ma',
						textVi: 'Sợ ma',
						textEn: 'Scared of ghosts',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch5_dream_office_party',
						text: 'Mở nhạc quẩy',
						textVi: 'Mở nhạc quẩy',
						textEn: 'Play music and dance',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -3 }],
					},
				],
			},
			{
				id: 'ch5_dream_money',
				text: 'Bạn mơ thấy tiền rơi từ trên trời xuống nhưng là tiền âm phủ.',
				textVi: 'Bạn mơ thấy tiền rơi từ trên trời xuống nhưng là tiền âm phủ.',
				textEn: 'Dream of money raining but it is hell money.',
				choices: [
					{
						id: 'ch5_dream_money_pick',
						text: 'Nhặt lên',
						textVi: 'Nhặt lên',
						textEn: 'Pick it up',
						next: '',
						effects: [{ stat: StatID.MONEY, value: 1 }], // Greed?
					},
					{
						id: 'ch5_dream_money_burn',
						text: 'Đốt đi',
						textVi: 'Đốt đi',
						textEn: 'Burn it',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch5_dream_money_run',
						text: 'Chạy đi',
						textVi: 'Chạy đi',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
					{
						id: 'ch5_dream_money_laugh',
						text: 'Cười lớn',
						textVi: 'Cười lớn',
						textEn: 'Laugh',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
				],
			},
			{
				id: 'ch5_dream_fly',
				text: 'Bạn mơ thấy mình đang bay nhưng không biết cách hạ cánh.',
				textVi: 'Bạn mơ thấy mình đang bay nhưng không biết cách hạ cánh.',
				textEn: "Dream of flying but don't know how to land.",
				choices: [
					{
						id: 'ch5_dream_fly_higher',
						text: 'Bay cao hơn nữa',
						textVi: 'Bay cao hơn nữa',
						textEn: 'Fly higher',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch5_dream_fly_fall',
						text: 'Thả rơi tự do',
						textVi: 'Thả rơi tự do',
						textEn: 'Free fall',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch5_dream_fly_help',
						text: 'Kêu cứu',
						textVi: 'Kêu cứu',
						textEn: 'Call for help',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch5_dream_fly_wake',
						text: 'Cố gắng tỉnh dậy',
						textVi: 'Cố gắng tỉnh dậy',
						textEn: 'Try to wake up',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 3 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch5_reflect_sleep_1',
			text: 'Học hỏi từ người thầy, học hỏi từ sếp... mệt nhưng bổ ích.',
			textVi: 'Học hỏi từ người thầy, học hỏi từ sếp... mệt nhưng bổ ích.',
			textEn: 'Learning from mentors, from bosses... tired but worthwhile.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch5_reflect_sleep_1_grateful',
					text: 'Biết ơn và đi ngủ',
					textVi: 'Biết ơn và đi ngủ',
					textEn: 'Grateful and sleep',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 3 }],
				},
				{
					id: 'ch5_reflect_sleep_1_rest',
					text: 'Cần nghỉ để tiếp thu',
					textVi: 'Cần nghỉ để tiếp thu',
					textEn: 'Need rest to absorb',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
			],
		},
		{
			id: 'ch5_reflect_success_1',
			text: 'Mỗi công ty là một bài học... con đường vẫn còn dài.',
			textVi: 'Mỗi công ty là một bài học... con đường vẫn còn dài.',
			textEn: 'Each company a lesson... the journey still long.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch5_reflect_success_1_continue',
					text: 'Tiếp tục học hỏi',
					textVi: 'Tiếp tục học hỏi',
					textEn: 'Continue learning',
					next: '',
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch5_reflect_success_1_balance',
					text: 'Nhưng cũng cần cân bằng',
					textVi: 'Nhưng cũng cần cân bằng',
					textEn: 'But also need balance',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
				},
			],
		},
		{
			id: 'ch5_reflect_sleep_2',
			text: 'Đi làm xa 20km mỗi ngày... về đến nhà đã kiệt sức.',
			textVi: 'Đi làm xa 20km mỗi ngày... về đến nhà đã kiệt sức.',
			textEn: '20km commute daily... exhausted when home.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch5_reflect_sleep_2_rest',
					text: 'Nghỉ ngơi ngay',
					textVi: 'Nghỉ ngơi ngay',
					textEn: 'Rest immediately',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 5 }],
				},
				{
					id: 'ch5_reflect_sleep_2_long',
					text: 'Hôm nay dài quá',
					textVi: 'Hôm nay dài quá',
					textEn: 'Today was too long',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -3 }],
				},
			],
		},
		{
			id: 'ch5_reflect_success_2',
			text: 'Học từ anh S, anh V, anh L... mỗi người một phong cách.',
			textVi: 'Học từ anh S, anh V, anh L... mỗi người một phong cách.',
			textEn: 'Learning from S, V, L... each has their style.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch5_reflect_success_2_absorb',
					text: 'Tiếp thu hết',
					textVi: 'Tiếp thu hết',
					textEn: 'Absorb everything',
					next: '',
					effects: [{ stat: StatID.VISION, value: 5 }],
				},
				{
					id: 'ch5_reflect_success_2_tired',
					text: 'Nhưng cũng mệt rồi',
					textVi: 'Nhưng cũng mệt rồi',
					textEn: 'But also tired now',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -2 }],
				},
			],
		},
		{
			id: 'ch5_reflect_sleep_3',
			text: 'Lựa chọn công ty, lựa chọn sếp... quyết định quan trọng.',
			textVi: 'Lựa chọn công ty, lựa chọn sếp... quyết định quan trọng.',
			textEn: 'Choosing company, choosing boss... important decisions.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch5_reflect_sleep_3_think',
					text: 'Suy nghĩ kỹ sau',
					textVi: 'Suy nghĩ kỹ sau',
					textEn: 'Think carefully later',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch5_reflect_sleep_3_sleep',
					text: 'Giờ cần ngủ đã',
					textVi: 'Giờ cần ngủ đã',
					textEn: 'Need sleep now',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 3 }],
				},
			],
		},
	],
};

export const chapter5Dialogues: Record<Chapter5DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter5DialogueID.CH5_INTRO]: {
		speaker: 'narrator',
		text: 'Thẻ nhân viên đeo trên cổ. Văn phòng máy lạnh chạy ro ro. Bạn có một chỗ ngồi, một mức lương, và hàng tá deadline đang chờ đợi.',
		textVi:
			'Thẻ nhân viên đeo trên cổ. Văn phòng máy lạnh chạy ro ro. Bạn có một chỗ ngồi, một mức lương, và hàng tá deadline đang chờ đợi.',
		textEn:
			'Employee badge on neck. AC humming in office. You have a seat, a salary, and dozens of deadlines waiting.',
		next: Chapter5DialogueID.CH5_CV_1,
	},
	// 5.0 Viết CV
	[Chapter5DialogueID.CH5_CV_1]: {
		speaker: 'narrator',
		text: 'Năm cuối ĐH. Bạn bè check-in sang chảnh. Bạn ví rỗng, mở Word viết CV. Kinh nghiệm trống trơn. Ghi đại "HTML, CSS, Java".',
		textVi:
			'Năm cuối ĐH. Bạn bè check-in sang chảnh. Bạn ví rỗng, mở Word viết CV. Kinh nghiệm trống trơn. Ghi đại "HTML, CSS, Java".',
		textEn:
			'Final year. Friends checking in fancy places. You broke, writing CV. Empty experience. Just put "HTML, CSS, Java".',
		next: Chapter5DialogueID.CH5_CV_2,
	},
	[Chapter5DialogueID.CH5_CV_2]: {
		speaker: 'narrator',
		text: 'Spam 50 cái CV. Im lặng. Hoặc những email từ chối tự động lạnh lùng. Cảm giác Imposter Syndrome (Hội chứng kẻ mạo danh) xâm chiếm. Bạn tự hỏi: "Mình có thực sự biết code không hay chỉ là thằng thợ gõ phím?" Sự tự tin "thần đồng" ngày xưa bị nghiền nát.',
		textVi:
			'Spam 50 cái CV. Im lặng. Hoặc những email từ chối tự động lạnh lùng. Cảm giác Imposter Syndrome (Hội chứng kẻ mạo danh) xâm chiếm. Bạn tự hỏi: "Mình có thực sự biết code không hay chỉ là thằng thợ gõ phím?" Sự tự tin "thần đồng" ngày xưa bị nghiền nát.',
		textEn:
			'Spammed 50 CVs. Silence. Or cold automated rejection emails. Imposter Syndrome took over. You asked yourself: "Do I really know how to code or am I just a typist?" The "prodigy" confidence was crushed.',
		effects: [{ stat: StatID.STEELMIND, value: 1 }],
		next: Chapter5DialogueID.CH5_BUY_COURSE_START,
	},

	// NEW: Buy Course Event
	[Chapter5DialogueID.CH5_BUY_COURSE_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Kiến thức hổng quá nhiều. Có khóa học Fullstack chuyên sâu giá 10 triệu.',
		textVi:
			'(Suy nghĩ) Kiến thức hổng quá nhiều. Có khóa học Fullstack chuyên sâu giá 10 triệu.',
		textEn:
			'(Thinking) Too many knowledge gaps. Advanced Fullstack course costs 10 million.',
		choices: [
			{
				id: 'choice_buy_course_yes',
				text: 'Mua khóa học: Đầu tư cho bản thân (-10M, Vision +2)',
				textVi: 'Mua khóa học: Đầu tư cho bản thân (-10M, Vision +2)',
				textEn: 'Buy course: Invest in self (-10M, Vision +2)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 10000000,
				},
				effects: [
					{ stat: StatID.MONEY, value: -10000000 },
					{ stat: StatID.VISION, value: 2 },
				],
				next: Chapter5DialogueID.CH5_BUY_COURSE_BUY,
			},
			{
				id: 'choice_buy_course_no',
				text: 'Tự học: Google là miễn phí (Vision +1)',
				textVi: 'Tự học: Google là miễn phí (Vision +1)',
				textEn: 'Self-study: Google is free (Vision +1)',
				effects: [{ stat: StatID.VISION, value: 1 }],
				next: Chapter5DialogueID.CH5_COMMUTE_1,
			},
		],
	},
	[Chapter5DialogueID.CH5_BUY_COURSE_BUY]: {
		speaker: 'narrator',
		text: 'Bạn mua khóa học và cày ngày đêm. Những mảnh ghép kiến thức dần được lấp đầy.',
		textVi:
			'Bạn mua khóa học và cày ngày đêm. Những mảnh ghép kiến thức dần được lấp đầy.',
		textEn:
			'You bought the course and studied day and night. Knowledge gaps slowly filled.',
		next: Chapter5DialogueID.CH5_COMMUTE_1,
	},

	// 5.1 20km Commute
	[Chapter5DialogueID.CH5_COMMUTE_1]: {
		speaker: 'narrator',
		text: 'Xin được thực tập ở FPT Software (Hòa Lạc). Cách nhà 20km. Bạn cưỡi con Wave Alpha cũ của mẹ, "chiến mã" già nua gào thét trên đại lộ Thăng Long bất kể nắng mưa.',
		textVi:
			'Xin được thực tập ở FPT Software (Hòa Lạc). Cách nhà 20km. Bạn cưỡi con Wave Alpha cũ của mẹ, "chiến mã" già nua gào thét trên đại lộ Thăng Long bất kể nắng mưa.',
		textEn:
			'Got internship at FPT Software (Hoa Lac). 20km away. You rode Mom\'s old Wave Alpha, the aging "warhorse" screaming on Thang Long Avenue rain or shine.',
		next: Chapter5DialogueID.CH5_FIX_BUG_START,
	},

	// NEW: Fix Bug Event
	[Chapter5DialogueID.CH5_FIX_BUG_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Senior đang bận tối mắt. Có con bug nhỏ mình có thể fix được. Nhưng sẽ phải về muộn.',
		textVi:
			'(Suy nghĩ) Senior đang bận tối mắt. Có con bug nhỏ mình có thể fix được. Nhưng sẽ phải về muộn.',
		textEn:
			'(Thinking) Senior is swamped. I can fix this small bug. But will go home late.',
		choices: [
			{
				id: 'choice_fix_bug_yes',
				text: 'Fix giúp: Lấy điểm với sếp (+100k bonus)',
				textVi: 'Fix giúp: Lấy điểm với sếp (+100k bonus)',
				textEn: 'Fix it: Impress boss (+100k bonus)',
				effects: [{ stat: StatID.MONEY, value: 100000 }],
				next: Chapter5DialogueID.CH5_FIX_BUG_DO,
			},
			{
				id: 'choice_fix_bug_no',
				text: 'Về đúng giờ: Mưa to quá rồi (Health +3)',
				textVi: 'Về đúng giờ: Mưa to quá rồi (Health +3)',
				textEn: 'Leave on time: Rain is heavy (Health +3)',
				effects: [{ stat: StatID.HEALTH, value: 3 }],
				next: Chapter5DialogueID.CH5_COMMUTE_MENTOR,
			},
		],
	},
	[Chapter5DialogueID.CH5_FIX_BUG_DO]: {
		speaker: 'narrator',
		text: 'Bạn ở lại fix bug. Sếp gật đầu hài lòng và thưởng nóng cho bạn.',
		textVi: 'Bạn ở lại fix bug. Sếp gật đầu hài lòng và thưởng nóng cho bạn.',
		textEn: 'You stayed to fix bug. Boss nodded in approval and gave a bonus.',
		next: Chapter5DialogueID.CH5_COMMUTE_MENTOR,
	},
	[Chapter5DialogueID.CH5_COMMUTE_MENTOR]: {
		speaker: 'npc',
		text: '"Code chạy được là rác. Code dễ đọc mới là vàng. Mày đặt tên biến như thế này à? Mày ẩu giống bố mày ngày xưa đấy."',
		textVi:
			'"Code chạy được là rác. Code dễ đọc mới là vàng. Mày đặt tên biến như thế này à? Mày ẩu giống bố mày ngày xưa đấy."',
		textEn:
			'"Working code is trash. Readable code is gold. Is this how you name variables? You\'re careless like your dad used to be."',
		next: Chapter5DialogueID.CH5_MENTOR_REACTION,
	},
	[Chapter5DialogueID.CH5_MENTOR_REACTION]: {
		speaker: 'player',
		text: 'Bị chạm vào tự ái, bạn sẽ phản ứng sao?',
		textVi: 'Bị chạm vào tự ái, bạn sẽ phản ứng sao?',
		textEn: 'Ego hurt, how will you react?',
		choices: [
			{
				id: 'choice_argue_mentor',
				text: 'Cãi lại: Code chạy ngon là được',
				textVi: 'Cãi lại: Code chạy ngon là được',
				textEn: 'Argue: It works fine',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_DEV_START, // Redirect to Prof Dev
			},
			{
				id: 'choice_absorb_mentor',
				text: 'Im lặng tiếp thu và sửa lại',
				textVi: 'Im lặng tiếp thu và sửa lại',
				textEn: 'Silently absorb and refactor',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_DEV_START, // Redirect to Prof Dev
			},
		],
	},

	// NEW: Professional Development Session
	[Chapter5DialogueID.CH5_PROF_DEV_START]: {
		speaker: 'narrator',
		text: 'Sau giờ làm, bạn nhận ra code giỏi thôi chưa đủ. Cần phải phát triển bản thân toàn diện hơn.',
		textVi:
			'Sau giờ làm, bạn nhận ra code giỏi thôi chưa đủ. Cần phải phát triển bản thân toàn diện hơn.',
		textEn:
			'After work, you realize coding well is not enough. Need comprehensive self-development.',
		choices: [
			{
				id: 'choice_dev_network',
				text: 'Đi Tech Meetup: Mở rộng quan hệ (Vision +3, Network ++)',
				textVi: 'Đi Tech Meetup: Mở rộng quan hệ (Vision +3, Network ++)',
				textEn: 'Go to Tech Meetup: Expand network (Vision +3, Network ++)',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_SOFT_SKILLS,
			},
			{
				id: 'choice_dev_english',
				text: 'Học tiếng Anh: Chuẩn bị cho Global (Vision +5)',
				textVi: 'Học tiếng Anh: Chuẩn bị cho Global (Vision +5)',
				textEn: 'Learn English: Prepare for Global (Vision +5)',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter5DialogueID.CH5_PROF_SOFT_SKILLS,
			},
			{
				id: 'choice_dev_rest',
				text: 'Về nhà ngủ: Sức khỏe là vàng (Health +3)',
				textVi: 'Về nhà ngủ: Sức khỏe là vàng (Health +3)',
				textEn: 'Go home sleep: Health is gold (Health +3)',
				effects: [{ stat: StatID.HEALTH, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_SOFT_SKILLS,
			},
		],
	},
	[Chapter5DialogueID.CH5_PROF_SOFT_SKILLS]: {
		speaker: 'player',
		text: 'Kỹ năng mềm nào quan trọng nhất lúc này?',
		textVi: 'Kỹ năng mềm nào quan trọng nhất lúc này?',
		textEn: 'Which soft skill is most important right now?',
		choices: [
			{
				id: 'choice_soft_comm',
				text: 'Giao tiếp: Để không bị hiểu lầm',
				textVi: 'Giao tiếp: Để không bị hiểu lầm',
				textEn: 'Communication: To avoid misunderstanding',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_PATH,
			},
			{
				id: 'choice_soft_time',
				text: 'Quản lý thời gian: Để không trễ deadline',
				textVi: 'Quản lý thời gian: Để không trễ deadline',
				textEn: 'Time management: To meet deadlines',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_PATH,
			},
			{
				id: 'choice_soft_eq',
				text: 'Trí tuệ cảm xúc (EQ): Để chịu đựng sếp',
				textVi: 'Trí tuệ cảm xúc (EQ): Để chịu đựng sếp',
				textEn: 'EQ: To tolerate boss',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_PATH,
			},
		],
	},
	[Chapter5DialogueID.CH5_PROF_PATH]: {
		speaker: 'narrator',
		text: 'Bạn bắt đầu suy nghĩ về con đường sự nghiệp dài hạn.',
		textVi: 'Bạn bắt đầu suy nghĩ về con đường sự nghiệp dài hạn.',
		textEn: 'You start thinking about long-term career path.',
		choices: [
			{
				id: 'choice_path_specialist',
				text: 'Technical Specialist: Chuyên gia công nghệ sâu',
				textVi: 'Technical Specialist: Chuyên gia công nghệ sâu',
				textEn: 'Technical Specialist: Deep tech expert',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter5DialogueID.CH5_PROF_BALANCE,
			},
			{
				id: 'choice_path_manager',
				text: 'Manager: Quản lý con người và dự án',
				textVi: 'Manager: Quản lý con người và dự án',
				textEn: 'Manager: Manage people and projects',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.VISION, value: 3 },
				],
				next: Chapter5DialogueID.CH5_PROF_BALANCE,
			},
			{
				id: 'choice_path_startup',
				text: 'Startup Founder: Làm chủ cuộc chơi (Risk High)',
				textVi: 'Startup Founder: Làm chủ cuộc chơi (Risk High)',
				textEn: 'Startup Founder: Own the game (Risk High)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.STEELMIND, value: 3 },
				],
				next: Chapter5DialogueID.CH5_PROF_BALANCE,
			},
		],
	},
	[Chapter5DialogueID.CH5_PROF_BALANCE]: {
		speaker: 'player',
		text: 'Sếp đề nghị OT (làm thêm giờ) không lương để kịp tiến độ dự án.',
		textVi: 'Sếp đề nghị OT (làm thêm giờ) không lương để kịp tiến độ dự án.',
		textEn: 'Boss asks for unpaid OT to meet project schedule.',
		choices: [
			{
				id: 'choice_ot_accept',
				text: 'Đồng ý: Cống hiến hết mình (Vision +3, Health -3)',
				textVi: 'Đồng ý: Cống hiến hết mình (Vision +3, Health -3)',
				textEn: 'Accept: Dedicate fully (Vision +3, Health -3)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.HEALTH, value: -3 },
				],
				next: Chapter5DialogueID.CH5_PROF_MENTOR,
			},
			{
				id: 'choice_ot_refuse',
				text: 'Từ chối khéo: Em có việc bận (Steel Mind +3)',
				textVi: 'Từ chối khéo: Em có việc bận (Steel Mind +3)',
				textEn: 'Polite refuse: I have plans (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_MENTOR,
			},
			{
				id: 'choice_ot_negotiate',
				text: 'Đàm phán: OT phải có lương hoặc nghỉ bù',
				textVi: 'Đàm phán: OT phải có lương hoặc nghỉ bù',
				textEn: 'Negotiate: OT must be paid or comp time',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_PROF_MENTOR,
			},
		],
	},
	[Chapter5DialogueID.CH5_PROF_MENTOR]: {
		speaker: 'narrator',
		text: 'Bạn nhận ra tầm quan trọng của một người dẫn dắt (Mentor).',
		textVi: 'Bạn nhận ra tầm quan trọng của một người dẫn dắt (Mentor).',
		textEn: 'You realize the importance of a Mentor.',
		choices: [
			{
				id: 'choice_mentor_find',
				text: 'Tìm Mentor giỏi trong công ty',
				textVi: 'Tìm Mentor giỏi trong công ty',
				textEn: 'Find good Mentor in company',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_POLITICS_START,
			},
			{
				id: 'choice_mentor_online',
				text: 'Follow các KOLs công nghệ trên mạng',
				textVi: 'Follow các KOLs công nghệ trên mạng',
				textEn: 'Follow tech KOLs online',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_POLITICS_START,
			},
			{
				id: 'choice_mentor_self',
				text: 'Tự mình làm Mentor cho chính mình',
				textVi: 'Tự mình làm Mentor cho chính mình',
				textEn: 'Be my own Mentor',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				next: Chapter5DialogueID.CH5_POLITICS_START,
			},
		],
	},
	// NEW: Office Politics
	[Chapter5DialogueID.CH5_POLITICS_START]: {
		speaker: 'narrator',
		text: 'Trong team có một Senior hay bắt nạt Junior. Hôm nay, hắn ta đang mắng xối xả một cậu thực tập sinh vì lỗi nhỏ.',
		textVi:
			'Trong team có một Senior hay bắt nạt Junior. Hôm nay, hắn ta đang mắng xối xả một cậu thực tập sinh vì lỗi nhỏ.',
		textEn:
			'A Senior in team bullies Juniors. Today, he is yelling at an intern for a small mistake.',
		choices: [
			{
				id: 'choice_politics_defend',
				text: 'Bảo vệ Junior: Anh đừng quá đáng thế (Humanity +5, Risk)',
				textVi: 'Bảo vệ Junior: Anh đừng quá đáng thế (Humanity +5, Risk)',
				textEn: "Defend Junior: Don't be so harsh (Humanity +5, Risk)",
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
				next: Chapter5DialogueID.CH5_EDTECH_1,
			},
			{
				id: 'choice_politics_ignore',
				text: 'Lờ đi: Không phải việc của mình (Steel Mind +3)',
				textVi: 'Lờ đi: Không phải việc của mình (Steel Mind +3)',
				textEn: 'Ignore: Not my business (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter5DialogueID.CH5_EDTECH_1,
			},
			{
				id: 'choice_politics_join',
				text: 'Hùa theo: Đúng là gà mờ (Steel Mind +3, Humanity -5)',
				textVi: 'Hùa theo: Đúng là gà mờ (Steel Mind +3, Humanity -5)',
				textEn: 'Join in: Such a noob (Steel Mind +3, Humanity -5)',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
				next: Chapter5DialogueID.CH5_EDTECH_1,
			},
		],
	},

	// 5.2 EdTech
	[Chapter5DialogueID.CH5_EDTECH_1]: {
		speaker: 'npc',
		text: 'Anh S (CEO EdTech) vỗ vai bạn: "Ở đây chúng ta không có Frontend hay Backend. Chỉ có Fullstack. Em phải làm tất cả, từ DB đến CSS. Chúng ta bán tương lai cho bọn trẻ."',
		textVi:
			'Anh S (CEO EdTech) vỗ vai bạn: "Ở đây chúng ta không có Frontend hay Backend. Chỉ có Fullstack. Em phải làm tất cả, từ DB đến CSS. Chúng ta bán tương lai cho bọn trẻ."',
		textEn:
			'Brother S (EdTech CEO) patted your shoulder: "Here we don\'t have Frontend or Backend. Only Fullstack. You do everything, from DB to CSS. We sell futures to kids."',
		next: Chapter5DialogueID.CH5_EDTECH_THOUGHT,
	},
	[Chapter5DialogueID.CH5_EDTECH_THOUGHT]: {
		speaker: 'player',
		text: '(Suy nghĩ) Lần đầu tiên mình hiểu code không chỉ là kỹ thuật, mà là trách nhiệm.',
		textVi:
			'(Suy nghĩ) Lần đầu tiên mình hiểu code không chỉ là kỹ thuật, mà là trách nhiệm.',
		textEn:
			'(Thinking) For the first time, I understood code is not just tech, but responsibility.',
		next: Chapter5DialogueID.CH5_OT_START, // Redirect to OT
	},

	// NEW: OT Culture
	[Chapter5DialogueID.CH5_OT_START]: {
		speaker: 'npc',
		text: 'Sếp yêu cầu cả team ở lại làm thêm giờ để kịp tiến độ. "Anh em cố gắng nhé, cuối năm sẽ có thưởng to."',
		textVi:
			'Sếp yêu cầu cả team ở lại làm thêm giờ để kịp tiến độ. "Anh em cố gắng nhé, cuối năm sẽ có thưởng to."',
		textEn:
			'Boss asks team to OT to meet deadline. "Try hard guys, big bonus at year end."',
		choices: [
			{
				id: 'choice_ot_stay',
				text: 'Ở lại làm: Cống hiến hết mình (Vision +3, Health -3)',
				textVi: 'Ở lại làm: Cống hiến hết mình (Vision +3, Health -3)',
				textEn: 'Stay: Dedicate yourself (Vision +3, Health -3)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.HEALTH, value: -3 },
				],
				next: Chapter5DialogueID.CH5_SALARY_START,
			},
			{
				id: 'choice_ot_leave',
				text: 'Về sớm: Sức khỏe quan trọng hơn (Health +3, Risk)',
				textVi: 'Về sớm: Sức khỏe quan trọng hơn (Health +3, Risk)',
				textEn: 'Leave early: Health first (Health +3, Risk)',
				effects: [{ stat: StatID.HEALTH, value: 3 }],
				next: Chapter5DialogueID.CH5_SALARY_START,
			},
		],
	},

	// NEW: Salary Event
	[Chapter5DialogueID.CH5_SALARY_START]: {
		speaker: 'narrator',
		text: 'Lương tháng đầu tiên. Cầm tiền trong tay, bạn nhớ đến mẹ ở quê.',
		textVi: 'Lương tháng đầu tiên. Cầm tiền trong tay, bạn nhớ đến mẹ ở quê.',
		textEn: 'First salary. Holding money, you remember Mom back home.',
		choices: [
			{
				id: 'choice_salary_send',
				text: 'Gửi về cho mẹ: Con hứa rồi (-5M, Humanity +5)',
				textVi: 'Gửi về cho mẹ: Con hứa rồi (-5M, Humanity +5)',
				textEn: 'Send to mom: I promised (-5M, Humanity +5)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.HUMANITY,
					operator: Operator.GTE,
					value: 20,
				},
				effects: [
					{ stat: StatID.MONEY, value: -5000000 },
					{ stat: StatID.HUMANITY, value: 5 },
				],
				flags: [{ key: FlagID.SENT_MONEY_MOM, value: true }],
				next: Chapter5DialogueID.CH5_SALARY_SEND,
			},
			{
				id: 'choice_salary_keep',
				text: 'Giữ lại: Mình cần trang trải cuộc sống',
				textVi: 'Giữ lại: Mình cần trang trải cuộc sống',
				textEn: 'Keep it: I need to cover expenses',
				flags: [{ key: FlagID.SENT_MONEY_MOM, value: false }],
				next: Chapter5DialogueID.CH5_SALARY_KEEP_CONSEQUENCE,
			},
		],
	},
	[Chapter5DialogueID.CH5_SALARY_SEND]: {
		speaker: 'narrator',
		text: 'Mẹ gọi điện lên, giọng rưng rưng. Bạn thấy ấm lòng.',
		textVi: 'Mẹ gọi điện lên, giọng rưng rưng. Bạn thấy ấm lòng.',
		textEn: 'Mom called, voice trembling. You feel warm inside.',
		next: Chapter5DialogueID.CH5_SIDE_PROJECT_START,
	},
	[Chapter5DialogueID.CH5_SALARY_KEEP_CONSEQUENCE]: {
		speaker: 'narrator',
		text: 'Bạn giữ tiền lại. Mấy hôm sau nghe tin mẹ ốm nhưng không dám báo vì sợ bạn lo. Bạn cảm thấy có lỗi vô cùng.',
		textVi:
			'Bạn giữ tiền lại. Mấy hôm sau nghe tin mẹ ốm nhưng không dám báo vì sợ bạn lo. Bạn cảm thấy có lỗi vô cùng.',
		textEn:
			"You kept the money. Days later, heard Mom was sick but didn't tell you. You felt terrible guilt.",
		effects: [
			{ stat: StatID.HUMANITY, value: -10 },
			{ stat: StatID.STRESS, value: 5 },
		],
		next: Chapter5DialogueID.CH5_BURNOUT_START, // Redirect to Burnout Check
	},

	// NEW: Side Project Exit
	[Chapter5DialogueID.CH5_SIDE_PROJECT_START]: {
		speaker: 'narrator',
		text: 'Ngoài giờ làm, bạn cùng nhóm bạn làm một tool nhỏ hỗ trợ học tiếng Anh. Bất ngờ thay, một trung tâm tiếng Anh đề nghị mua lại với giá 100 triệu.',
		textVi:
			'Ngoài giờ làm, bạn cùng nhóm bạn làm một tool nhỏ hỗ trợ học tiếng Anh. Bất ngờ thay, một trung tâm tiếng Anh đề nghị mua lại với giá 100 triệu.',
		textEn:
			'After work, you and friends built a small English learning tool. Surprisingly, an English center offered to buy it for 100 million.',
		next: Chapter5DialogueID.CH5_SIDE_PROJECT_SELL,
	},
	[Chapter5DialogueID.CH5_SIDE_PROJECT_SELL]: {
		speaker: 'player',
		text: '(Ngỡ ngàng) 100 triệu! Chia cho 3 anh em, mỗi người cũng được một khoản kha khá.',
		textVi:
			'(Ngỡ ngàng) 100 triệu! Chia cho 3 anh em, mỗi người cũng được một khoản kha khá.',
		textEn: '(Shocked) 100 million! Split among 3, each gets a decent amount.',
		effects: [{ stat: StatID.MONEY, value: 33000000 }],
		next: Chapter5DialogueID.CH5_BURNOUT_START, // Redirect to Burnout Check
	},
	// NEW: Burnout Check (Bridge)
	[Chapter5DialogueID.CH5_BURNOUT_START]: {
		speaker: 'narrator',
		text: 'Những ngày tháng làm việc không ngừng nghỉ bắt đầu bào mòn sức khỏe của bạn.',
		textVi:
			'Những ngày tháng làm việc không ngừng nghỉ bắt đầu bào mòn sức khỏe của bạn.',
		textEn: 'Endless working days start to wear down your health.',
		next: Chapter5DialogueID.CH5_EDTECH_NETWORK,
	},

	[Chapter5DialogueID.CH5_EDTECH_NETWORK]: {
		speaker: 'narrator',
		text: 'Mối quan hệ (The Network): Tại đây, bạn gặp Anh N (trợ giảng điềm đạm), Anh Q (học viên giỏi, tư duy sắc bén) và Anh D (học viên lầm lì, code trâu). Bộ ba bắt đầu hình thành.',
		textVi:
			'Mối quan hệ (The Network): Tại đây, bạn gặp Anh N (trợ giảng điềm đạm), Anh Q (học viên giỏi, tư duy sắc bén) và Anh D (học viên lầm lì, code trâu). Bộ ba bắt đầu hình thành.',
		textEn:
			'The Network: Here you met Brother N (calm TA), Brother Q (sharp student), and Brother D (quiet, hardcore coder). The trio began to form.',
		next: Chapter5DialogueID.CH5_NETWORKING_START,
	},

	// NEW: Networking Event
	[Chapter5DialogueID.CH5_NETWORKING_START]: {
		speaker: 'npc',
		text: 'Sếp rủ đi nhậu. "Đi với anh, anh giới thiệu cho vài người hay ho". Nhưng đi bar thì tốn kém lắm.',
		textVi:
			'Sếp rủ đi nhậu. "Đi với anh, anh giới thiệu cho vài người hay ho". Nhưng đi bar thì tốn kém lắm.',
		textEn:
			'Boss invites for drinks. "Come, I\'ll introduce cool people". But bars are expensive.',
		choices: [
			{
				id: 'choice_networking_yes',
				text: 'Đi luôn: Quan hệ là tiền tệ (-1M)',
				textVi: 'Đi luôn: Quan hệ là tiền tệ (-1M)',
				textEn: 'Go: Network is net worth (-1M)',
				effects: [{ stat: StatID.MONEY, value: -1000000 }],
				next: Chapter5DialogueID.CH5_NETWORKING_GO,
			},
			{
				id: 'choice_networking_no',
				text: 'Từ chối: Em bận học rồi (Vision +3)',
				textVi: 'Từ chối: Em bận học rồi (Vision +3)',
				textEn: 'Refuse: Busy studying (Vision +3)',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter5DialogueID.CH5_BROTHER_V_1,
			},
		],
	},
	[Chapter5DialogueID.CH5_NETWORKING_GO]: {
		speaker: 'narrator',
		text: 'Một đêm tưng bừng. Ví đau nhưng bạn quen được vài đàn anh trong ngành.',
		textVi:
			'Một đêm tưng bừng. Ví đau nhưng bạn quen được vài đàn anh trong ngành.',
		textEn: 'Wild night. Wallet hurts but you met some seniors in industry.',
		next: Chapter5DialogueID.CH5_BROTHER_V_1,
	},

	// 5.3 Lời mời Anh V
	[Chapter5DialogueID.CH5_BROTHER_V_1]: {
		speaker: 'narrator',
		text: 'Đang ổn định thì Anh V (sếp cũ) gọi. Rủ về làm dự án "triệu đô". Bạn lao vào và nhận ra đó là địa ngục "Callback Hell". Code rối như canh hẹ (Spaghetti Code).',
		textVi:
			'Đang ổn định thì Anh V (sếp cũ) gọi. Rủ về làm dự án "triệu đô". Bạn lao vào và nhận ra đó là địa ngục "Callback Hell". Code rối như canh hẹ (Spaghetti Code).',
		textEn:
			'Stable job, then Brother V (old boss) called. Invited to "million dollar" project. You jumped in and realized it was "Callback Hell". Spaghetti Code everywhere.',
		next: Chapter5DialogueID.CH5_BROTHER_V_ASSEMBLE,
	},
	[Chapter5DialogueID.CH5_BROTHER_V_ASSEMBLE]: {
		speaker: 'narrator',
		text: 'Triệu tập (Assemble): Bạn gọi cả Anh N, Anh Q và Anh D sang làm cùng. Tuy nhiên, dự án thất bại. Cả 4 người tách ra với lời hứa: "Sau này anh em mình sẽ gặp lại nhau ở một thành công khác."',
		textVi:
			'Triệu tập (Assemble): Bạn gọi cả Anh N, Anh Q và Anh D sang làm cùng. Tuy nhiên, dự án thất bại. Cả 4 người tách ra với lời hứa: "Sau này anh em mình sẽ gặp lại nhau ở một thành công khác."',
		textEn:
			'Assemble: You called N, Q, and D to join. However, project failed. The 4 separated with a promise: "We will meet again in another success."',
		next: Chapter5DialogueID.CH5_BROTHER_V_CHOICE,
	},
	[Chapter5DialogueID.CH5_BROTHER_V_CHOICE]: {
		speaker: 'player',
		text: 'Dự án bế tắc. Bạn đứng giữa ngã ba đường.',
		textVi: 'Dự án bế tắc. Bạn đứng giữa ngã ba đường.',
		textEn: 'Project stalled. You are at a crossroads.',
		choices: [
			{
				id: 'choice_stay_v',
				text: 'Cố gắng refactor (Trung thành)',
				textVi: 'Cố gắng refactor (Trung thành)',
				textEn: 'Try to refactor (Loyalty)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter5DialogueID.CH5_OUTSOURCE_HUNT,
			},
			{
				id: 'choice_leave_v',
				text: 'Rời bỏ con tàu đắm (Thực tế)',
				textVi: 'Rời bỏ con tàu đắm (Thực tế)',
				textEn: 'Abandon sinking ship (Realistic)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter5DialogueID.CH5_OUTSOURCE_HUNT,
			},
		],
	},

	// 5.3b Hunter becomes Hunted
	[Chapter5DialogueID.CH5_OUTSOURCE_HUNT]: {
		speaker: 'narrator',
		text: 'Dự án thất bại/Rời đi. Thất nghiệp lại. Nhắm vào công ty Outsource của Anh L. Phỏng vấn: Code thuật toán trong 15 phút.',
		textVi:
			'Dự án thất bại/Rời đi. Thất nghiệp lại. Nhắm vào công ty Outsource của Anh L. Phỏng vấn: Code thuật toán trong 15 phút.',
		textEn:
			"Project failed/Left. Unemployed again. Targeted Brother L's Outsource firm. Interview: Code algo in 15 mins.",
		next: Chapter5DialogueID.CH5_OUTSOURCE_1,
	},

	// 5.4 Outsource Hell
	[Chapter5DialogueID.CH5_OUTSOURCE_1]: {
		speaker: 'npc',
		text: '"Dự án này cháy deadline rồi. Cần người vào cứu hỏa. Chịu nhiệt được không? Làm 16 tiếng/ngày?"',
		textVi:
			'"Dự án này cháy deadline rồi. Cần người vào cứu hỏa. Chịu nhiệt được không? Làm 16 tiếng/ngày?"',
		textEn:
			'"This project is on fire. Need a firefighter. Can you take the heat? 16 hours/day?"',
		next: Chapter5DialogueID.CH5_OUTSOURCE_REPLY,
	},
	[Chapter5DialogueID.CH5_OUTSOURCE_REPLY]: {
		speaker: 'player',
		text: 'Bạn cần tiền. Bạn trả lời sao?',
		textVi: 'Bạn cần tiền. Bạn trả lời sao?',
		textEn: 'You need money. How do you reply?',
		choices: [
			{
				id: 'choice_accept_grind',
				text: 'Em làm được. Em cần tiền.',
				textVi: 'Em làm được. Em cần tiền.',
				textEn: 'I can do it. I need money.',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				next: Chapter5DialogueID.CH5_SKIP_GYM_START,
			},
		],
	},

	// NEW: Skip Gym Event
	[Chapter5DialogueID.CH5_SKIP_GYM_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Deadline dí sát cổ. Lịch tập Gym đã đóng tiền rồi. Đi tập hay ở lại cày?',
		textVi:
			'(Suy nghĩ) Deadline dí sát cổ. Lịch tập Gym đã đóng tiền rồi. Đi tập hay ở lại cày?',
		textEn:
			'(Thinking) Deadline close. Gym paid. Go workout or stay and grind?',
		choices: [
			{
				id: 'choice_skip_gym_work',
				text: 'Bỏ tập cày code: Xong việc mới có tiền (+100k)',
				textVi: 'Bỏ tập cày code: Xong việc mới có tiền (+100k)',
				textEn: 'Skip gym, grind code: Finish work get money (+100k)',
				effects: [{ stat: StatID.MONEY, value: 100000 }],
				next: Chapter5DialogueID.CH5_SKIP_GYM_WORK,
			},
			{
				id: 'choice_skip_gym_go',
				text: 'Đi tập: Sức khỏe là vàng (Health +3)',
				textVi: 'Đi tập: Sức khỏe là vàng (Health +3)',
				textEn: 'Go gym: Health is gold (Health +3)',
				effects: [{ stat: StatID.HEALTH, value: 3 }],
				next: Chapter5DialogueID.CH5_ENGLISH,
			},
		],
	},
	[Chapter5DialogueID.CH5_SKIP_GYM_WORK]: {
		speaker: 'narrator',
		text: 'Bạn cày xong task. Người mỏi nhừ nhưng ví dày thêm một chút.',
		textVi: 'Bạn cày xong task. Người mỏi nhừ nhưng ví dày thêm một chút.',
		textEn: 'Task done. Body aches but wallet thicker.',
		next: Chapter5DialogueID.CH5_END,
	},
	[Chapter5DialogueID.CH5_END]: {
		speaker: 'narrator',
		text: 'Bạn thu dọn đồ đạc vào chiếc thùng các-tông. Tạm biệt cái cubicle chật hẹp. Bạn bước ra khỏi tòa nhà cao tầng, hít một hơi thật sâu. Tự do, nhưng đầy rủi ro.',
		textVi:
			'Bạn thu dọn đồ đạc vào chiếc thùng các-tông. Tạm biệt cái cubicle chật hẹp. Bạn bước ra khỏi tòa nhà cao tầng, hít một hơi thật sâu. Tự do, nhưng đầy rủi ro.',
		textEn:
			'You packed belongings into a cardboard box. Goodbye cramped cubicle. You walked out of the high-rise, taking a deep breath. Freedom, but risky.',
		next: Chapter6DialogueID.CH6_STARTUP_1,
	},
	[Chapter5DialogueID.CH5_ENGLISH]: {
		speaker: 'narrator',
		text: 'Nhận ra PM lương nghìn đô nhờ tiếng Anh. Lao vào học tiếng Anh như con nghiện. Unlock Global Market.',
		textVi:
			'Nhận ra PM lương nghìn đô nhờ tiếng Anh. Lao vào học tiếng Anh như con nghiện. Unlock Global Market.',
		textEn:
			'Realized PMs got $1000s due to English. Studied English like an addict. Unlocked Global Market.',
		next: Chapter5DialogueID.CH5_FREELANCE,
	},
	[Chapter5DialogueID.CH5_FREELANCE]: {
		speaker: 'narrator',
		text: 'Bỏ việc. Làm Remote/Freelance. Thu nhập USD. Đón mẹ về phụng dưỡng. Chứng minh bố đúng.',
		textVi:
			'Bỏ việc. Làm Remote/Freelance. Thu nhập USD. Đón mẹ về phụng dưỡng. Chứng minh bố đúng.',
		textEn:
			'Quit job. Remote/Freelance. USD income. Brought Mom home. Proved Father right.',
		next: Chapter5DialogueID.CH5_MOM_SICK_CHECK,
	},
	// NEW: Mom Sick Consequence
	[Chapter5DialogueID.CH5_MOM_SICK_CHECK]: {
		speaker: 'narrator',
		text: 'Vừa đón mẹ lên thì mẹ đổ bệnh. Căn bệnh mãn tính tái phát.',
		textVi: 'Vừa đón mẹ lên thì mẹ đổ bệnh. Căn bệnh mãn tính tái phát.',
		textEn: 'Just brought Mom up when she fell ill. Chronic illness relapsed.',
		choices: [
			{
				id: 'choice_mom_sick_ok',
				text: 'Kiểm tra tình hình...',
				textVi: 'Kiểm tra tình hình...',
				textEn: 'Check situation...',
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.SENT_MONEY_MOM,
					operator: Operator.EQUAL,
					value: true,
				},
				next: Chapter5DialogueID.CH5_MOM_SICK_OK,
			},
			{
				id: 'choice_mom_sick_bad',
				text: 'Kiểm tra tình hình...',
				textVi: 'Kiểm tra tình hình...',
				textEn: 'Check situation...',
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.SENT_MONEY_MOM,
					operator: Operator.NOT_EQUAL,
					value: true,
				},
				next: Chapter5DialogueID.CH5_MOM_SICK_BAD,
			},
		],
	},
	[Chapter5DialogueID.CH5_MOM_SICK_OK]: {
		speaker: 'narrator',
		text: 'May mắn là mẹ đã dùng số tiền bạn gửi trước đó để mua thuốc điều trị đều đặn. Bệnh tình không quá nghiêm trọng.',
		textVi:
			'May mắn là mẹ đã dùng số tiền bạn gửi trước đó để mua thuốc điều trị đều đặn. Bệnh tình không quá nghiêm trọng.',
		textEn:
			'Luckily Mom used the money you sent to buy medicine regularly. Condition is not too serious.',
		next: Chapter5DialogueID.CH5_RUNTIME_STATUS,
	},
	[Chapter5DialogueID.CH5_MOM_SICK_BAD]: {
		speaker: 'narrator',
		text: 'Do không có thuốc điều trị đều đặn, bệnh tình trở nặng. Bạn phải đưa mẹ đi cấp cứu. Viện phí tốn kém.',
		textVi:
			'Do không có thuốc điều trị đều đặn, bệnh tình trở nặng. Bạn phải đưa mẹ đi cấp cứu. Viện phí tốn kém.',
		textEn:
			'Due to lack of regular medicine, condition worsened. You had to rush Mom to ER. Expensive hospital bills.',
		effects: [
			{ stat: StatID.MONEY, value: -20000000 },
			{ stat: StatID.STRESS, value: 20 },
		],
		next: Chapter5DialogueID.CH5_RUNTIME_STATUS,
	},
	[Chapter5DialogueID.CH5_RUNTIME_STATUS]: {
		speaker: 'narrator',
		text: 'Trạng thái hiện tại (Runtime Status): Anh Q (Senior, lương 4k$), Anh D (Tech Lead, 2k$), Anh N (Team Lead, 1.5k$). Bạn đang làm Outsource tích lũy vốn. Team phân tán nhưng vẫn giữ liên lạc (Distributed System).',
		textVi:
			'Trạng thái hiện tại (Runtime Status): Anh Q (Senior, lương 4k$), Anh D (Tech Lead, 2k$), Anh N (Team Lead, 1.5k$). Bạn đang làm Outsource tích lũy vốn. Team phân tán nhưng vẫn giữ liên lạc (Distributed System).',
		textEn:
			'Runtime Status: Brother Q (Senior, $4k), Brother D (Tech Lead, $2k), Brother N (Team Lead, $1.5k). You are outsourcing to build capital. Team distributed but connected.',
		choices: [
			{
				id: 'choice_startup',
				text: 'Chuẩn bị khởi nghiệp',
				textVi: 'Chuẩn bị khởi nghiệp',
				textEn: 'Prepare for Startup',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter6DialogueID.CH6_STARTUP_1,
			},
		],
	},
};
