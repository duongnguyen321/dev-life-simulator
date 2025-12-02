// ==========================================
// CHAPTER 6: DEPLOYMENT & CRASH (TRIỂN KHAI VÀ SỤP ĐỔ)
// Timeline: 25-30 tuổi
// Theme: Tham vọng, Sự phản bội và Cú ngã ngựa
// ==========================================

import type { Chapter, DialogueNode } from '../types';

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
			id: 'ch6_startup',
			name: 'Khởi nghiệp',
			nameVi: '25-28 tuổi: Khởi nghiệp & Dream Team',
			nameEn: 'Age 25-28: Startup & Dream Team',
			background: '/assets/sprites/backgrounds/startup_office.png',
			music: '/assets/audio/music/chapters/ch6_ambition.ogg',
			dialogueStart: 'ch6_startup_1',
		},
		{
			id: 'ch6_personnel',
			name: 'Biến cố nhân sự',
			nameVi: 'Biến cố nhân sự: Nhân viên thứ 5',
			nameEn: 'Personnel Crisis: The 5th Employee',
			background: '/assets/sprites/backgrounds/cafe_rain.png',
			music: '/assets/audio/music/chapters/ch6_crisis.ogg',
			dialogueStart: 'ch6_personnel_1',
		},
		{
			id: 'ch6_market',
			name: 'Cú tát thị trường',
			nameVi: '29-30 tuổi: Cú tát của thị trường',
			nameEn: 'Age 29-30: The Market Slap',
			background: '/assets/sprites/backgrounds/office_empty.png',
			music: '/assets/audio/music/chapters/ch6_crisis.ogg',
			dialogueStart: 'ch6_market_1',
		},
		{
			id: 'ch6_redemption',
			name: 'Hành trình cứu rỗi',
			nameVi: 'Hành trình cứu rỗi: Đi để học',
			nameEn: 'The Redemption Journey: Travel to Learn',
			background: '/assets/sprites/backgrounds/tokyo_subway.png',
			music: '/assets/audio/music/chapters/ch6_redemption.ogg',
			dialogueStart: 'ch6_redemption_1',
		},
	],
};

export const chapter6Dialogues: Record<string, DialogueNode> = {
	// 6.1 Startup
	ch6_startup_1: {
		id: 'ch6_startup_1',
		speaker: 'npc',
		text: 'Hội tụ (Reunion): Anh Q (đang làm cho Big Tech Singapore), Anh D (Tech Lead công ty Product top đầu), Anh N (Quản lý dự án thâm niên). Tất cả đều đang ở đỉnh cao sự nghiệp.',
		textVi:
			'Hội tụ (Reunion): Anh Q (đang làm cho Big Tech Singapore), Anh D (Tech Lead công ty Product top đầu), Anh N (Quản lý dự án thâm niên). Tất cả đều đang ở đỉnh cao sự nghiệp.',
		textEn:
			'Reunion: Brother Q (Big Tech Singapore), Brother D (Top Product Company Tech Lead), Brother N (Senior PM). All at the peak of their careers.',
		next: 'ch6_startup_motivation',
	},
	ch6_startup_motivation: {
		id: 'ch6_startup_motivation',
		speaker: 'npc',
		text: 'Họ bỏ mức lương nghìn đô không phải vì thất nghiệp, mà vì "Ownership". Họ muốn làm chủ cuộc chơi. "Anh em mình đủ lông đủ cánh rồi. Làm một cái gì đó để đời đi!"',
		textVi:
			'Họ bỏ mức lương nghìn đô không phải vì thất nghiệp, mà vì "Ownership". Họ muốn làm chủ cuộc chơi. "Anh em mình đủ lông đủ cánh rồi. Làm một cái gì đó để đời đi!"',
		textEn:
			'They quit high salaries not due to unemployment, but for "Ownership". They want to own the game. "We are ready. Let\'s build a legacy!"',
		next: 'ch6_startup_2',
	},
	ch6_startup_2: {
		id: 'ch6_startup_2',
		speaker: 'narrator',
		text: 'Kích hoạt di sản (Legacy Activation): Bạn lôi giấy phép "Công ty Ma" của bố ra. Vốn điều lệ 20 tỷ (trên giấy). Đây là "Virtual Capital" (Mock Data) - một lớp "Firewall" tạo uy tín cực lớn với đối tác.',
		textVi:
			'Kích hoạt di sản (Legacy Activation): Bạn lôi giấy phép "Công ty Ma" của bố ra. Vốn điều lệ 20 tỷ (trên giấy). Đây là "Virtual Capital" (Mock Data) - một lớp "Firewall" tạo uy tín cực lớn với đối tác.',
		textEn:
			'Legacy Activation: You used Father\'s "Ghost Company" license. 20 billion charter capital (on paper). This is "Virtual Capital" (Mock Data) - a "Firewall" creating huge credibility.',
		effects: [{ stat: 'vision', value: 1 }],
		next: 'ch6_startup_reply',
	},
	ch6_startup_reply: {
		id: 'ch6_startup_reply',
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
				effects: [{ stat: 'vision', value: 2 }],
				next: 'ch6_personnel_1',
			},
			{
				id: 'choice_humble_start',
				text: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textVi: 'Cảm ơn các anh. Em sẽ không để mọi người thất vọng.',
				textEn: "Thank you. I won't let you down.",
				effects: [{ stat: 'humanity', value: 2 }],
				next: 'ch6_personnel_1',
			},
		],
	},

	// 6.2 Personnel Crisis
	ch6_personnel_1: {
		id: 'ch6_personnel_1',
		speaker: 'narrator',
		text: 'Tuyển nhân viên đầu tiên (người thứ 5). Cậu em nhiệt huyết, ngoan ngoãn. Nhưng sau 2 năm, cậu ta tụt hậu, gây Bug nghiêm trọng xóa sạch dữ liệu khách hàng trên Production.',
		textVi:
			'Tuyển nhân viên đầu tiên (người thứ 5). Cậu em nhiệt huyết, ngoan ngoãn. Nhưng sau 2 năm, cậu ta tụt hậu, gây Bug nghiêm trọng xóa sạch dữ liệu khách hàng trên Production.',
		textEn:
			'Hired 1st employee (5th person). Enthusiastic, obedient. But after 2 years, fell behind, caused critical Bug wiping client data on Production.',
		next: 'ch6_personnel_cafe',
	},
	ch6_personnel_cafe: {
		id: 'ch6_personnel_cafe',
		speaker: 'narrator',
		text: 'Hẹn cậu ấy ra quán cafe. Trời mưa tầm tã. Cậu ấy ngồi co ro, tay run run cầm cốc nâu nóng.',
		textVi:
			'Hẹn cậu ấy ra quán cafe. Trời mưa tầm tã. Cậu ấy ngồi co ro, tay run run cầm cốc nâu nóng.',
		textEn:
			'Met him at a cafe. Pouring rain. He sat shivering, trembling hands holding hot coffee.',
		next: 'ch6_personnel_conflict',
	},
	ch6_personnel_conflict: {
		id: 'ch6_personnel_conflict',
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
					{ stat: 'steelMind', value: 2 },
					{ stat: 'humanity', value: -2 },
				],
				next: 'ch6_personnel_scene',
			},
		],
	},
	ch6_personnel_scene: {
		id: 'ch6_personnel_scene',
		speaker: 'player',
		text: '"Anh xin lỗi. Em rất tốt, nhưng công ty cần người chạy nhanh hơn. Đây là lương 2 tháng đền bù cho em."',
		textVi:
			'"Anh xin lỗi. Em rất tốt, nhưng công ty cần người chạy nhanh hơn. Đây là lương 2 tháng đền bù cho em."',
		textEn:
			'"I\'m sorry. You are good, but the company needs someone faster. Here is 2 months salary compensation."',
		next: 'ch6_personnel_reaction',
	},
	ch6_personnel_reaction: {
		id: 'ch6_personnel_reaction',
		speaker: 'npc',
		text: '(Oán trách) "Anh thay đổi rồi. Anh không còn là người anh mà em từng biết nữa."',
		textVi:
			'(Oán trách) "Anh thay đổi rồi. Anh không còn là người anh mà em từng biết nữa."',
		textEn:
			'(Resentful) "You changed. You are not the brother I used to know."',
		next: 'ch6_personnel_lesson',
	},
	ch6_personnel_lesson: {
		id: 'ch6_personnel_lesson',
		speaker: 'narrator',
		text: 'Cậu ấy bỏ đi dưới mưa. Bạn ngồi lại một mình. Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác.',
		textVi:
			'Cậu ấy bỏ đi dưới mưa. Bạn ngồi lại một mình. Bài học quản trị tàn khốc đầu tiên: Làm sếp là phải biết ác.',
		textEn:
			'He walked away in the rain. You sat alone. First cruel management lesson: To be a boss is to be ruthless.',
		next: 'ch6_market_1',
	},

	// 6.3 Market Slap
	ch6_market_1: {
		id: 'ch6_market_1',
		speaker: 'narrator',
		text: '29 tuổi. Tham vọng làm Super App (AI, Blockchain). Over-engineering. Ra mắt: 0 user. Thị trường không cần.',
		textVi:
			'29 tuổi. Tham vọng làm Super App (AI, Blockchain). Over-engineering. Ra mắt: 0 user. Thị trường không cần.',
		textEn:
			"29 years old. Ambition for Super App (AI, Blockchain). Over-engineering. Launch: 0 users. Market didn't need it.",
		next: 'ch6_market_2',
	},
	ch6_market_2: {
		id: 'ch6_market_2',
		speaker: 'narrator',
		text: 'Sản phẩm thất bại (Product Fail). Nhưng may mắn thay, mảng Outsource vẫn hoạt động tốt, gánh team qua cơn bĩ cực (Fallback Mechanism). Công ty không chết, nhưng giấc mơ Product bị trì hoãn.',
		textVi:
			'Sản phẩm thất bại (Product Fail). Nhưng may mắn thay, mảng Outsource vẫn hoạt động tốt, gánh team qua cơn bĩ cực (Fallback Mechanism). Công ty không chết, nhưng giấc mơ Product bị trì hoãn.',
		textEn:
			'Product Fail. Luckily, Outsource arm worked well, carrying the team through crisis (Fallback Mechanism). Company survived, but Product dream delayed.',
		next: 'ch6_market_fear',
	},
	ch6_market_fear: {
		id: 'ch6_market_fear',
		speaker: 'player',
		text: '(Suy nghĩ) Mình đang đi vào vết xe đổ của bố sao? Mình cũng sẽ thất bại sao?',
		textVi:
			'(Suy nghĩ) Mình đang đi vào vết xe đổ của bố sao? Mình cũng sẽ thất bại sao?',
		textEn: "(Thinking) Am I following father's path? Will I fail too?",
		effects: [{ stat: 'steelMind', value: -1 }],
		next: 'ch6_redemption_1',
	},

	// 6.4 Redemption
	ch6_redemption_1: {
		id: 'ch6_redemption_1',
		speaker: 'narrator',
		text: 'Gap Year (Nghiên cứu thị trường): Bạn quyết định dành 1 năm đi nước ngoài (Nhật, Mỹ, Sing) để tìm đường. Ở nhà, Anh Q, Anh D, Anh N lo vận hành mảng Outsource (Maintenance Mode).',
		textVi:
			'Gap Year (Nghiên cứu thị trường): Bạn quyết định dành 1 năm đi nước ngoài (Nhật, Mỹ, Sing) để tìm đường. Ở nhà, Anh Q, Anh D, Anh N lo vận hành mảng Outsource (Maintenance Mode).',
		textEn:
			'Gap Year (Market Research): You spent 1 year abroad (Japan, US, Sing) to find the way. At home, Q, D, N managed Outsource (Maintenance Mode).',
		next: 'ch6_redemption_2',
	},
	ch6_redemption_2: {
		id: 'ch6_redemption_2',
		speaker: 'narrator',
		text: 'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textVi:
			'Giác ngộ: "Công nghệ chỉ là công cụ. Giải quyết nỗi đau (Pain Point) mới là mục đích."',
		textEn:
			'Enlightenment: "Tech is just a tool. Solving Pain Point is the goal."',
		effects: [{ stat: 'vision', value: 2 }],
		next: 'ch7_divide_1',
	},
};
