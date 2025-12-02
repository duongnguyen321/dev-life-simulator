// ==========================================
// CHAPTER 5: REFACTORING (TÁI CẤU TRÚC)
// Timeline: 22-24 tuổi
// Theme: Những người thầy, Những người sếp và Sự lựa chọn
// ==========================================

import type { Chapter, DialogueNode } from '../types';

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
			id: 'ch5_cv',
			name: 'Viết CV',
			nameVi: 'Khởi tạo nhân vật: Viết CV đầu tiên',
			nameEn: 'Character Creation: First CV',
			background: '/assets/sprites/backgrounds/dorm_room_pc.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: 'ch5_cv_1',
		},
		{
			id: 'ch5_commute',
			name: '20km Commute',
			nameVi: 'Năm 1: 20km và Sự khiêm nhường',
			nameEn: 'Year 1: 20km and Humility',
			background: '/assets/sprites/backgrounds/road_rain.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: 'ch5_commute_1',
		},
		{
			id: 'ch5_edtech',
			name: 'EdTech & Anh S',
			nameVi: 'Năm 2: Anh S và Đế chế EdTech',
			nameEn: 'Year 2: Brother S and EdTech Empire',
			background: '/assets/sprites/backgrounds/office_edtech.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: 'ch5_edtech_1',
		},
		{
			id: 'ch5_brother_v',
			name: 'Lời mời Anh V',
			nameVi: 'Cuộc gọi từ Anh V',
			nameEn: 'Call from Brother V',
			background: '/assets/sprites/backgrounds/office_corridor.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: 'ch5_brother_v_1',
		},
		{
			id: 'ch5_outsource',
			name: 'Lò luyện Outsource',
			nameVi: 'Anh L và Lò luyện Outsource',
			nameEn: 'Brother L and Outsource Hell',
			background: '/assets/sprites/backgrounds/office_outsource.png',
			music: '/assets/audio/music/chapters/ch5_work.mp3',
			dialogueStart: 'ch5_outsource_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch5_todo_commute_rain',
				text: 'Đi làm dưới mưa 20km',
				textVi: 'Đi làm dưới mưa 20km',
				textEn: 'Commute 20km in rain',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch5_todo_fix_bug_senior',
				text: 'Fix bug hộ Senior',
				textVi: 'Fix bug hộ Senior',
				textEn: 'Fix bug for Senior',
				effects: [{ stat: 'vision', value: 1 }],
				reward: { money: 100000 }, // Bonus?
			},
			{
				id: 'ch5_todo_ot_no_pay',
				text: 'OT không lương',
				textVi: 'OT không lương',
				textEn: 'Unpaid OT',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1, stress: 1 },
			},
			{
				id: 'ch5_todo_learn_english',
				text: 'Học tiếng Anh buổi tối',
				textVi: 'Học tiếng Anh buổi tối',
				textEn: 'Study English at night',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch5_todo_networking',
				text: 'Đi nhậu với sếp',
				textVi: 'Đi nhậu với sếp',
				textEn: 'Drink with boss',
				effects: [{ stat: 'vision', value: 1 }], // Networking
				cost: { health: 1, money: 1000000 },
			},
			{
				id: 'ch5_todo_refactor_legacy',
				text: 'Refactor code rác',
				textVi: 'Refactor code rác',
				textEn: 'Refactor legacy code',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch5_todo_write_blog',
				text: 'Viết Tech Blog',
				textVi: 'Viết Tech Blog',
				textEn: 'Write Tech Blog',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch5_todo_gym_skip',
				text: 'Bỏ tập Gym vì deadline',
				textVi: 'Bỏ tập Gym vì deadline',
				textEn: 'Skip Gym for deadline',
				cost: { health: 1 },
				reward: { money: 100000 }, // Done work
			},
			{
				id: 'ch5_todo_call_mom_salary',
				text: 'Gửi lương về cho mẹ',
				textVi: 'Gửi lương về cho mẹ',
				textEn: 'Send salary to Mom',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 2000000 },
			},
			{
				id: 'ch5_todo_date_fail',
				text: 'Đi date nhưng chỉ nói về code',
				textVi: 'Đi date nhưng chỉ nói về code',
				textEn: 'Date but only talk code',
				cost: { money: 200000, humanity: 1 }, // Fail
			},
			{
				id: 'ch5_todo_buy_course',
				text: 'Mua khóa học Udemy',
				textVi: 'Mua khóa học Udemy',
				textEn: 'Buy Udemy course',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 100000 },
			},
			{
				id: 'ch5_todo_argue_pm',
				text: 'Cãi nhau với PM về feature',
				textVi: 'Cãi nhau với PM về feature',
				textEn: 'Argue with PM about feature',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch5_todo_mentor_junior',
				text: 'Hướng dẫn thực tập sinh',
				textVi: 'Hướng dẫn thực tập sinh',
				textEn: 'Mentor intern',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch5_todo_sleep_office',
				text: 'Ngủ gục trên bàn phím',
				textVi: 'Ngủ gục trên bàn phím',
				textEn: 'Sleep on keyboard',
				cost: { health: 1 },
				reward: { stress: -1 },
			},
			{
				id: 'ch5_todo_apply_big_tech',
				text: 'Nộp CV vào Big Tech',
				textVi: 'Nộp CV vào Big Tech',
				textEn: 'Apply to Big Tech',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch5_todo_read_system_design',
				text: 'Đọc sách System Design',
				textVi: 'Đọc sách System Design',
				textEn: 'Read System Design',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch5_todo_coffee_addict',
				text: 'Uống 3 ly cafe/ngày',
				textVi: 'Uống 3 ly cafe/ngày',
				textEn: 'Drink 3 coffees/day',
				cost: { health: 1 },
				reward: { vision: 1 }, // Focus
			},
			{
				id: 'ch5_todo_ignore_health',
				text: 'Lờ đi cơn đau lưng',
				textVi: 'Lờ đi cơn đau lưng',
				textEn: 'Ignore back pain',
				cost: { health: 2 },
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'ch5_todo_dream_startup',
				text: 'Mơ về công ty riêng',
				textVi: 'Mơ về công ty riêng',
				textEn: 'Dream of own company',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch5_todo_save_money',
				text: 'Tiết kiệm tiền mua Mac',
				textVi: 'Tiết kiệm tiền mua Mac',
				textEn: 'Save for Mac',
				reward: { money: 500000 },
				cost: { humanity: 1 }, // Stingy
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
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch5_dream_code_wait',
						text: 'Ngồi đợi nó dừng',
						textVi: 'Ngồi đợi nó dừng',
						textEn: 'Wait for it to stop',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Patience
					},
					{
						id: 'ch5_dream_code_panic',
						text: 'Hoảng loạn tắt máy',
						textVi: 'Hoảng loạn tắt máy',
						textEn: 'Panic shutdown',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch5_dream_code_fix',
						text: 'Tìm nguyên nhân (Debug)',
						textVi: 'Tìm nguyên nhân (Debug)',
						textEn: 'Debug',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
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
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch5_dream_mentor_listen',
						text: 'Lắng nghe',
						textVi: 'Lắng nghe',
						textEn: 'Listen',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch5_dream_mentor_cry',
						text: 'Khóc',
						textVi: 'Khóc',
						textEn: 'Cry',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch5_dream_mentor_ignore',
						text: 'Bỏ đi',
						textVi: 'Bỏ đi',
						textEn: 'Walk away',
						next: '',
						effects: [{ stat: 'stress', value: -1 }],
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
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch5_dream_office_leave',
						text: 'Về nhà',
						textVi: 'Về nhà',
						textEn: 'Go home',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch5_dream_office_scared',
						text: 'Sợ ma',
						textVi: 'Sợ ma',
						textEn: 'Scared of ghosts',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch5_dream_office_party',
						text: 'Mở nhạc quẩy',
						textVi: 'Mở nhạc quẩy',
						textEn: 'Play music and dance',
						next: '',
						effects: [{ stat: 'stress', value: -1 }],
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
						effects: [{ stat: 'money', value: 1 }], // Greed?
					},
					{
						id: 'ch5_dream_money_burn',
						text: 'Đốt đi',
						textVi: 'Đốt đi',
						textEn: 'Burn it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch5_dream_money_run',
						text: 'Chạy đi',
						textVi: 'Chạy đi',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch5_dream_money_laugh',
						text: 'Cười lớn',
						textVi: 'Cười lớn',
						textEn: 'Laugh',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
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
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch5_dream_fly_fall',
						text: 'Thả rơi tự do',
						textVi: 'Thả rơi tự do',
						textEn: 'Free fall',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch5_dream_fly_help',
						text: 'Kêu cứu',
						textVi: 'Kêu cứu',
						textEn: 'Call for help',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch5_dream_fly_wake',
						text: 'Cố gắng tỉnh dậy',
						textVi: 'Cố gắng tỉnh dậy',
						textEn: 'Try to wake up',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
				],
			},
		],
	},
};

export const chapter5Dialogues: Record<string, DialogueNode> = {
	// 5.0 Viết CV
	ch5_cv_1: {
		id: 'ch5_cv_1',
		speaker: 'narrator',
		text: 'Năm cuối ĐH. Bạn bè check-in sang chảnh. Bạn ví rỗng, mở Word viết CV. Kinh nghiệm trống trơn. Ghi đại "HTML, CSS, Java".',
		textVi:
			'Năm cuối ĐH. Bạn bè check-in sang chảnh. Bạn ví rỗng, mở Word viết CV. Kinh nghiệm trống trơn. Ghi đại "HTML, CSS, Java".',
		textEn:
			'Final year. Friends checking in fancy places. You broke, writing CV. Empty experience. Just put "HTML, CSS, Java".',
		next: 'ch5_cv_2',
	},
	ch5_cv_2: {
		id: 'ch5_cv_2',
		speaker: 'narrator',
		text: 'Spam 50 cái CV. Im lặng. Hoặc những email từ chối tự động lạnh lùng. Cảm giác Imposter Syndrome (Hội chứng kẻ mạo danh) xâm chiếm. Bạn tự hỏi: "Mình có thực sự biết code không hay chỉ là thằng thợ gõ phím?" Sự tự tin "thần đồng" ngày xưa bị nghiền nát.',
		textVi:
			'Spam 50 cái CV. Im lặng. Hoặc những email từ chối tự động lạnh lùng. Cảm giác Imposter Syndrome (Hội chứng kẻ mạo danh) xâm chiếm. Bạn tự hỏi: "Mình có thực sự biết code không hay chỉ là thằng thợ gõ phím?" Sự tự tin "thần đồng" ngày xưa bị nghiền nát.',
		textEn:
			'Spammed 50 CVs. Silence. Or cold automated rejection emails. Imposter Syndrome took over. You asked yourself: "Do I really know how to code or am I just a typist?" The "prodigy" confidence was crushed.',
		effects: [{ stat: 'steelMind', value: 1 }],
		next: 'ch5_commute_1',
	},

	// 5.1 20km Commute
	ch5_commute_1: {
		id: 'ch5_commute_1',
		speaker: 'narrator',
		text: 'Xin được thực tập ở FPT Software (Hòa Lạc). Cách nhà 20km. Bạn cưỡi con Wave Alpha cũ của mẹ, "chiến mã" già nua gào thét trên đại lộ Thăng Long bất kể nắng mưa.',
		textVi:
			'Xin được thực tập ở FPT Software (Hòa Lạc). Cách nhà 20km. Bạn cưỡi con Wave Alpha cũ của mẹ, "chiến mã" già nua gào thét trên đại lộ Thăng Long bất kể nắng mưa.',
		textEn:
			'Got internship at FPT Software (Hoa Lac). 20km away. You rode Mom\'s old Wave Alpha, the aging "warhorse" screaming on Thang Long Avenue rain or shine.',
		next: 'ch5_commute_mentor',
	},
	ch5_commute_mentor: {
		id: 'ch5_commute_mentor',
		speaker: 'npc',
		text: '"Code chạy được là rác. Code dễ đọc mới là vàng. Mày đặt tên biến như thế này à? Mày ẩu giống bố mày ngày xưa đấy."',
		textVi:
			'"Code chạy được là rác. Code dễ đọc mới là vàng. Mày đặt tên biến như thế này à? Mày ẩu giống bố mày ngày xưa đấy."',
		textEn:
			'"Working code is trash. Readable code is gold. Is this how you name variables? You\'re careless like your dad used to be."',
		next: 'ch5_mentor_reaction',
	},
	ch5_mentor_reaction: {
		id: 'ch5_mentor_reaction',
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
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch5_edtech_1',
			},
			{
				id: 'choice_absorb_mentor',
				text: 'Im lặng tiếp thu và sửa lại',
				textVi: 'Im lặng tiếp thu và sửa lại',
				textEn: 'Silently absorb and refactor',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch5_edtech_1',
			},
		],
	},

	// 5.2 EdTech
	ch5_edtech_1: {
		id: 'ch5_edtech_1',
		speaker: 'npc',
		text: 'Anh S (CEO EdTech) vỗ vai bạn: "Ở đây chúng ta không có Frontend hay Backend. Chỉ có Fullstack. Em phải làm tất cả, từ DB đến CSS. Chúng ta bán tương lai cho bọn trẻ."',
		textVi:
			'Anh S (CEO EdTech) vỗ vai bạn: "Ở đây chúng ta không có Frontend hay Backend. Chỉ có Fullstack. Em phải làm tất cả, từ DB đến CSS. Chúng ta bán tương lai cho bọn trẻ."',
		textEn:
			'Brother S (EdTech CEO) patted your shoulder: "Here we don\'t have Frontend or Backend. Only Fullstack. You do everything, from DB to CSS. We sell futures to kids."',
		next: 'ch5_edtech_thought',
	},
	ch5_edtech_thought: {
		id: 'ch5_edtech_thought',
		speaker: 'player',
		text: '(Suy nghĩ) Lần đầu tiên mình hiểu code không chỉ là kỹ thuật, mà là trách nhiệm.',
		textVi:
			'(Suy nghĩ) Lần đầu tiên mình hiểu code không chỉ là kỹ thuật, mà là trách nhiệm.',
		textEn:
			'(Thinking) For the first time, I understood code is not just tech, but responsibility.',
		next: 'ch5_edtech_network',
	},
	ch5_edtech_network: {
		id: 'ch5_edtech_network',
		speaker: 'narrator',
		text: 'Mối quan hệ (The Network): Tại đây, bạn gặp Anh N (trợ giảng điềm đạm), Anh Q (học viên giỏi, tư duy sắc bén) và Anh D (học viên lầm lì, code trâu). Bộ ba bắt đầu hình thành.',
		textVi:
			'Mối quan hệ (The Network): Tại đây, bạn gặp Anh N (trợ giảng điềm đạm), Anh Q (học viên giỏi, tư duy sắc bén) và Anh D (học viên lầm lì, code trâu). Bộ ba bắt đầu hình thành.',
		textEn:
			'The Network: Here you met Brother N (calm TA), Brother Q (sharp student), and Brother D (quiet, hardcore coder). The trio began to form.',
		next: 'ch5_brother_v_1',
	},

	// 5.3 Lời mời Anh V
	ch5_brother_v_1: {
		id: 'ch5_brother_v_1',
		speaker: 'narrator',
		text: 'Đang ổn định thì Anh V (sếp cũ) gọi. Rủ về làm dự án "triệu đô". Bạn lao vào và nhận ra đó là địa ngục "Callback Hell". Code rối như canh hẹ (Spaghetti Code).',
		textVi:
			'Đang ổn định thì Anh V (sếp cũ) gọi. Rủ về làm dự án "triệu đô". Bạn lao vào và nhận ra đó là địa ngục "Callback Hell". Code rối như canh hẹ (Spaghetti Code).',
		textEn:
			'Stable job, then Brother V (old boss) called. Invited to "million dollar" project. You jumped in and realized it was "Callback Hell". Spaghetti Code everywhere.',
		next: 'ch5_brother_v_assemble',
	},
	ch5_brother_v_assemble: {
		id: 'ch5_brother_v_assemble',
		speaker: 'narrator',
		text: 'Triệu tập (Assemble): Bạn gọi cả Anh N, Anh Q và Anh D sang làm cùng. Tuy nhiên, dự án thất bại. Cả 4 người tách ra với lời hứa: "Sau này anh em mình sẽ gặp lại nhau ở một thành công khác."',
		textVi:
			'Triệu tập (Assemble): Bạn gọi cả Anh N, Anh Q và Anh D sang làm cùng. Tuy nhiên, dự án thất bại. Cả 4 người tách ra với lời hứa: "Sau này anh em mình sẽ gặp lại nhau ở một thành công khác."',
		textEn:
			'Assemble: You called N, Q, and D to join. However, project failed. The 4 separated with a promise: "We will meet again in another success."',
		next: 'ch5_brother_v_choice',
	},
	ch5_brother_v_choice: {
		id: 'ch5_brother_v_choice',
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
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch5_outsource_hunt',
			},
			{
				id: 'choice_leave_v',
				text: 'Rời bỏ con tàu đắm (Thực tế)',
				textVi: 'Rời bỏ con tàu đắm (Thực tế)',
				textEn: 'Abandon sinking ship (Realistic)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch5_outsource_hunt',
			},
		],
	},

	// 5.3b Hunter becomes Hunted
	ch5_outsource_hunt: {
		id: 'ch5_outsource_hunt',
		speaker: 'narrator',
		text: 'Dự án thất bại/Rời đi. Thất nghiệp lại. Nhắm vào công ty Outsource của Anh L. Phỏng vấn: Code thuật toán trong 15 phút.',
		textVi:
			'Dự án thất bại/Rời đi. Thất nghiệp lại. Nhắm vào công ty Outsource của Anh L. Phỏng vấn: Code thuật toán trong 15 phút.',
		textEn:
			"Project failed/Left. Unemployed again. Targeted Brother L's Outsource firm. Interview: Code algo in 15 mins.",
		next: 'ch5_outsource_1',
	},

	// 5.4 Outsource Hell
	ch5_outsource_1: {
		id: 'ch5_outsource_1',
		speaker: 'npc',
		text: '"Dự án này cháy deadline rồi. Cần người vào cứu hỏa. Chịu nhiệt được không? Làm 16 tiếng/ngày?"',
		textVi:
			'"Dự án này cháy deadline rồi. Cần người vào cứu hỏa. Chịu nhiệt được không? Làm 16 tiếng/ngày?"',
		textEn:
			'"This project is on fire. Need a firefighter. Can you take the heat? 16 hours/day?"',
		next: 'ch5_outsource_reply',
	},
	ch5_outsource_reply: {
		id: 'ch5_outsource_reply',
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
				effects: [{ stat: 'steelMind', value: 2 }],
				next: 'ch5_english',
			},
		],
	},
	ch5_english: {
		id: 'ch5_english',
		speaker: 'narrator',
		text: 'Nhận ra PM lương nghìn đô nhờ tiếng Anh. Lao vào học tiếng Anh như con nghiện. Unlock Global Market.',
		textVi:
			'Nhận ra PM lương nghìn đô nhờ tiếng Anh. Lao vào học tiếng Anh như con nghiện. Unlock Global Market.',
		textEn:
			'Realized PMs got $1000s due to English. Studied English like an addict. Unlocked Global Market.',
		next: 'ch5_freelance',
	},
	ch5_freelance: {
		id: 'ch5_freelance',
		speaker: 'narrator',
		text: 'Bỏ việc. Làm Remote/Freelance. Thu nhập USD. Đón mẹ về phụng dưỡng. Chứng minh bố đúng.',
		textVi:
			'Bỏ việc. Làm Remote/Freelance. Thu nhập USD. Đón mẹ về phụng dưỡng. Chứng minh bố đúng.',
		textEn:
			'Quit job. Remote/Freelance. USD income. Brought Mom home. Proved Father right.',
		next: 'ch5_runtime_status',
	},
	ch5_runtime_status: {
		id: 'ch5_runtime_status',
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
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch6_startup_1',
			},
		],
	},
};
