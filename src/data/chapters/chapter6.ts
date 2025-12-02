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
			music: '/assets/audio/music/chapters/ch6_ambition.mp3',
			dialogueStart: 'ch6_startup_1',
		},
		{
			id: 'ch6_personnel',
			name: 'Biến cố nhân sự',
			nameVi: 'Biến cố nhân sự: Nhân viên thứ 5',
			nameEn: 'Personnel Crisis: The 5th Employee',
			background: '/assets/sprites/backgrounds/cafe_rain.png',
			music: '/assets/audio/music/chapters/ch6_crisis.mp3',
			dialogueStart: 'ch6_personnel_1',
		},
		{
			id: 'ch6_market',
			name: 'Cú tát thị trường',
			nameVi: '29-30 tuổi: Cú tát của thị trường',
			nameEn: 'Age 29-30: The Market Slap',
			background: '/assets/sprites/backgrounds/office_empty.png',
			music: '/assets/audio/music/chapters/ch6_crisis.mp3',
			dialogueStart: 'ch6_market_1',
		},
		{
			id: 'ch6_redemption',
			name: 'Hành trình cứu rỗi',
			nameVi: 'Hành trình cứu rỗi: Đi để học',
			nameEn: 'The Redemption Journey: Travel to Learn',
			background: '/assets/sprites/backgrounds/tokyo_subway.png',
			music: '/assets/audio/music/chapters/ch6_redemption.mp3',
			dialogueStart: 'ch6_redemption_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch6_todo_recruit',
				text: 'Phỏng vấn ứng viên',
				textVi: 'Phỏng vấn ứng viên',
				textEn: 'Interview candidates',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch6_todo_pitch',
				text: 'Pitching gọi vốn',
				textVi: 'Pitching gọi vốn',
				textEn: 'Pitching for funding',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch6_todo_team_building',
				text: 'Tổ chức Team Building',
				textVi: 'Tổ chức Team Building',
				textEn: 'Organize Team Building',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 10000000 },
			},
			{
				id: 'ch6_todo_fire_staff',
				text: 'Sa thải nhân viên kém',
				textVi: 'Sa thải nhân viên kém',
				textEn: 'Fire underperforming staff',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { humanity: 1 },
			},
			{
				id: 'ch6_todo_review_code',
				text: 'Review code của team',
				textVi: 'Review code của team',
				textEn: 'Review team code',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch6_todo_handle_drama',
				text: 'Giải quyết drama công sở',
				textVi: 'Giải quyết drama công sở',
				textEn: 'Resolve office drama',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch6_todo_buy_server',
				text: 'Mua thêm Server',
				textVi: 'Mua thêm Server',
				textEn: 'Buy more Servers',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 10000000 },
			},
			{
				id: 'ch6_todo_work_weekend',
				text: 'Làm việc cả cuối tuần',
				textVi: 'Làm việc cả cuối tuần',
				textEn: 'Work on weekends',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { humanity: 1, health: 1 },
			},
			{
				id: 'ch6_todo_coffee_investor',
				text: 'Cafe với nhà đầu tư',
				textVi: 'Cafe với nhà đầu tư',
				textEn: 'Coffee with investor',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 200000 },
			},
			{
				id: 'ch6_todo_check_competitor',
				text: 'Soi sản phẩm đối thủ',
				textVi: 'Soi sản phẩm đối thủ',
				textEn: 'Spy on competitor',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch6_todo_pay_salary',
				text: 'Duyệt bảng lương',
				textVi: 'Duyệt bảng lương',
				textEn: 'Approve payroll',
				cost: { money: 100000000 },
				reward: { stress: -1 }, // Relief
			},
			{
				id: 'ch6_todo_fix_prod_bug',
				text: 'Fix bug trên Production lúc 3h sáng',
				textVi: 'Fix bug trên Production lúc 3h sáng',
				textEn: 'Fix Production bug at 3AM',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch6_todo_write_vision',
				text: 'Viết Vision & Mission',
				textVi: 'Viết Vision & Mission',
				textEn: 'Write Vision & Mission',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch6_todo_ignore_family',
				text: 'Quên sinh nhật người thân',
				textVi: 'Quên sinh nhật người thân',
				textEn: 'Forget relative birthday',
				cost: { humanity: 1 },
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'ch6_todo_read_startup_book',
				text: 'Đọc sách "Zero to One"',
				textVi: 'Đọc sách "Zero to One"',
				textEn: 'Read "Zero to One"',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch6_todo_meditate',
				text: 'Thiền 15 phút',
				textVi: 'Thiền 15 phút',
				textEn: 'Meditate 15 mins',
				reward: { stress: -1 },
			},
			{
				id: 'ch6_todo_drink_alcohol',
				text: 'Uống rượu giải sầu',
				textVi: 'Uống rượu giải sầu',
				textEn: 'Drink alcohol',
				cost: { health: 1 },
				reward: { stress: -1 },
			},
			{
				id: 'ch6_todo_cry_car',
				text: 'Khóc trong xe hơi',
				textVi: 'Khóc trong xe hơi',
				textEn: 'Cry in car',
				reward: { stress: -1 },
				cost: { steelMind: 1 },
			},
			{
				id: 'ch6_todo_look_mirror',
				text: 'Nhìn mình trong gương',
				textVi: 'Nhìn mình trong gương',
				textEn: 'Look in mirror',
				effects: [{ stat: 'vision', value: 1 }], // Self-reflection
			},
			{
				id: 'ch6_todo_call_bros',
				text: 'Gọi điện cho anh em Co-founder',
				textVi: 'Gọi điện cho anh em Co-founder',
				textEn: 'Call Co-founders',
				effects: [{ stat: 'humanity', value: 1 }],
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
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch6_dream_fall_fly',
						text: 'Mọc cánh bay lên',
						textVi: 'Mọc cánh bay lên',
						textEn: 'Grow wings and fly',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch6_dream_fall_accept',
						text: 'Nhắm mắt chấp nhận',
						textVi: 'Nhắm mắt chấp nhận',
						textEn: 'Close eyes and accept',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch6_dream_fall_grab',
						text: 'Cố bám vào cửa sổ',
						textVi: 'Cố bám vào cửa sổ',
						textEn: 'Grab a window',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }], // Survival instinct
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
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch6_dream_betray_ask',
						text: 'Hỏi "Tại sao?"',
						textVi: 'Hỏi "Tại sao?"',
						textEn: 'Ask "Why?"',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch6_dream_betray_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch6_dream_betray_forgive',
						text: 'Tha thứ',
						textVi: 'Tha thứ',
						textEn: 'Forgive',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
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
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch6_dream_throne_lonely',
						text: 'Cảm thấy cô đơn',
						textVi: 'Cảm thấy cô đơn',
						textEn: 'Feel lonely',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch6_dream_throne_invite',
						text: 'Gọi mọi người đến',
						textVi: 'Gọi mọi người đến',
						textEn: 'Call everyone',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch6_dream_throne_leave',
						text: 'Bỏ đi',
						textVi: 'Bỏ đi',
						textEn: 'Leave',
						next: '',
						effects: [{ stat: 'stress', value: -1 }],
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
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch6_dream_fire_save_people',
						text: 'Cứu nhân viên',
						textVi: 'Cứu nhân viên',
						textEn: 'Save employees',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch6_dream_fire_run',
						text: 'Chạy thoát thân',
						textVi: 'Chạy thoát thân',
						textEn: 'Run for life',
						next: '',
						effects: [{ stat: 'health', value: 1 }],
					},
					{
						id: 'ch6_dream_fire_watch',
						text: 'Đứng nhìn',
						textVi: 'Đứng nhìn',
						textEn: 'Watch',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
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
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch6_dream_maze_mark',
						text: 'Đánh dấu đường đi',
						textVi: 'Đánh dấu đường đi',
						textEn: 'Mark the path',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch6_dream_maze_break',
						text: 'Đập tường',
						textVi: 'Đập tường',
						textEn: 'Break walls',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch6_dream_maze_sit',
						text: 'Ngồi xuống nghỉ',
						textVi: 'Ngồi xuống nghỉ',
						textEn: 'Sit and rest',
						next: '',
						effects: [{ stat: 'health', value: 1 }],
					},
				],
			},
		],
	},
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
