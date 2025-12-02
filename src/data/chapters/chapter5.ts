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
			music: '/assets/audio/music/chapters/ch5_work.ogg',
			dialogueStart: 'ch5_cv_1',
		},
		{
			id: 'ch5_commute',
			name: '20km Commute',
			nameVi: 'Năm 1: 20km và Sự khiêm nhường',
			nameEn: 'Year 1: 20km and Humility',
			background: '/assets/sprites/backgrounds/road_rain.png',
			music: '/assets/audio/music/chapters/ch5_work.ogg',
			dialogueStart: 'ch5_commute_1',
		},
		{
			id: 'ch5_edtech',
			name: 'EdTech & Anh S',
			nameVi: 'Năm 2: Anh S và Đế chế EdTech',
			nameEn: 'Year 2: Brother S and EdTech Empire',
			background: '/assets/sprites/backgrounds/office_edtech.png',
			music: '/assets/audio/music/chapters/ch5_work.ogg',
			dialogueStart: 'ch5_edtech_1',
		},
		{
			id: 'ch5_brother_v',
			name: 'Lời mời Anh V',
			nameVi: 'Cuộc gọi từ Anh V',
			nameEn: 'Call from Brother V',
			background: '/assets/sprites/backgrounds/office_corridor.png',
			music: '/assets/audio/music/chapters/ch5_work.ogg',
			dialogueStart: 'ch5_brother_v_1',
		},
		{
			id: 'ch5_outsource',
			name: 'Lò luyện Outsource',
			nameVi: 'Anh L và Lò luyện Outsource',
			nameEn: 'Brother L and Outsource Hell',
			background: '/assets/sprites/backgrounds/office_outsource.png',
			music: '/assets/audio/music/chapters/ch5_work.ogg',
			dialogueStart: 'ch5_outsource_1',
		},
	],
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
