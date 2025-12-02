// ==========================================
// CHAPTER 8: THE BLACK SWAN (THIÊN NGA ĐEN)
// Timeline: 40-52 tuổi
// Theme: Đột phá, Rủi ro và Sự trở lại
// ==========================================

import type { Chapter, DialogueNode } from '../types';

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
			id: 'ch8_ai',
			name: 'Canh bạc AI',
			nameVi: '40-45 tuổi: Canh bạc AI & Robot',
			nameEn: 'Age 40-45: AI Gamble & Robots',
			background: '/assets/sprites/backgrounds/server_room_future.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: 'ch8_ai_1',
		},
		{
			id: 'ch8_recall',
			name: 'The Recall',
			nameVi: '45-48 tuổi: The Recall (Cao trào)',
			nameEn: 'Age 45-48: The Recall (Climax)',
			background: '/assets/sprites/backgrounds/press_conference.png',
			music: '/assets/audio/music/chapters/ch8_crisis.mp3',
			dialogueStart: 'ch8_recall_1',
		},
		{
			id: 'ch8_rebirth',
			name: 'Phục sinh',
			nameVi: '50-52 tuổi: Phục sinh (Resurrection)',
			nameEn: 'Age 50-52: Resurrection',
			background: '/assets/sprites/backgrounds/skyscraper_view.png',
			music: '/assets/audio/music/chapters/ch8_epic.mp3',
			dialogueStart: 'ch8_rebirth_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch8_todo_read_ai',
				text: 'Đọc tài liệu nghiên cứu AI',
				textVi: 'Đọc tài liệu nghiên cứu AI',
				textEn: 'Read AI research papers',
				effects: [{ stat: 'vision', value: 1 }], // Knowledge
			},
			{
				id: 'ch8_todo_meet_gov',
				text: 'Gặp gỡ quan chức chính phủ',
				textVi: 'Gặp gỡ quan chức chính phủ',
				textEn: 'Meet government officials',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { stress: 1 },
			},
			{
				id: 'ch8_todo_approve_budget',
				text: 'Duyệt ngân sách R&D cho Robot',
				textVi: 'Duyệt ngân sách R&D cho Robot',
				textEn: 'Approve R&D budget for Robot',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch8_todo_ethics',
				text: 'Đối mặt với tình huống khó xử về đạo đức',
				textVi: 'Đối mặt với tình huống khó xử về đạo đức',
				textEn: 'Face ethical dilemma',
				effects: [
					{ stat: 'steelMind', value: 1 },
					{ stat: 'humanity', value: 1 },
				],
			},
			{
				id: 'ch8_todo_visit_dad',
				text: 'Vào viện thăm Bố',
				textVi: 'Vào viện thăm Bố',
				textEn: 'Visit Dad in hospital',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch8_todo_ignore_press',
				text: 'Phớt lờ báo chí tiêu cực',
				textVi: 'Phớt lờ báo chí tiêu cực',
				textEn: 'Ignore negative press',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'ch8_todo_press_conf',
				text: 'Tổ chức họp báo',
				textVi: 'Tổ chức họp báo',
				textEn: 'Hold press conference',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { stress: 2 },
			},
			{
				id: 'ch8_todo_fire_inspector',
				text: 'Sa thải thanh tra an toàn',
				textVi: 'Sa thải thanh tra an toàn',
				textEn: 'Fire safety inspector',
				effects: [{ stat: 'vision', value: 1 }], // Speed
				cost: { stress: 1 }, // Risk High
			},
			{
				id: 'ch8_todo_hire_ethics',
				text: 'Thuê Giám đốc Đạo đức',
				textVi: 'Thuê Giám đốc Đạo đức',
				textEn: 'Hire Ethics Director',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { money: 1 },
			},
			{
				id: 'ch8_todo_meditate_life',
				text: 'Thiền định về ý nghĩa cuộc sống',
				textVi: 'Thiền định về ý nghĩa cuộc sống',
				textEn: 'Meditate on life meaning',
				effects: [{ stat: 'vision', value: 1 }], // Wisdom
			},
			{
				id: 'ch8_todo_review_core',
				text: 'Review mã nguồn lõi của AI',
				textVi: 'Review mã nguồn lõi của AI',
				textEn: 'Review AI core source code',
				effects: [{ stat: 'vision', value: 1 }], // Skill Coding
			},
			{
				id: 'ch8_todo_family_time',
				text: 'Dành thời gian cho con cái đã lớn',
				textVi: 'Dành thời gian cho con cái đã lớn',
				textEn: 'Time with grown-up kids',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch8_todo_donate_uni',
				text: 'Quyên góp cho nghiên cứu đại học',
				textVi: 'Quyên góp cho nghiên cứu đại học',
				textEn: 'Donate to university research',
				effects: [{ stat: 'vision', value: 1 }], // Reputation
				cost: { money: 1 },
			},
			{
				id: 'ch8_todo_long_leave',
				text: 'Nghỉ phép dài hạn',
				textVi: 'Nghỉ phép dài hạn',
				textEn: 'Long leave',
				reward: { health: 1 },
				cost: { vision: 1 }, // Career -
			},
			{
				id: 'ch8_todo_write_memoir',
				text: 'Viết hồi ký',
				textVi: 'Viết hồi ký',
				textEn: 'Write memoir',
				effects: [{ stat: 'vision', value: 1 }], // Legacy
			},
			{
				id: 'ch8_todo_watch_news',
				text: 'Xem tin tức về AI cướp việc làm',
				textVi: 'Xem tin tức về AI cướp việc làm',
				textEn: 'Watch news about AI taking jobs',
				cost: { stress: 1 },
			},
			{
				id: 'ch8_todo_consult_lawyer',
				text: 'Tham vấn luật sư',
				textVi: 'Tham vấn luật sư',
				textEn: 'Consult lawyer',
				cost: { money: 1 },
				effects: [{ stat: 'steelMind', value: 1 }], // Safety
			},
			{
				id: 'ch8_todo_sleeping_pill',
				text: 'Uống thuốc ngủ',
				textVi: 'Uống thuốc ngủ',
				textEn: 'Take sleeping pills',
				cost: { health: 1 },
			},
			{
				id: 'ch8_todo_stare_button',
				text: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textVi: 'Nhìn chằm chằm vào nút "Thu hồi"',
				textEn: 'Stare at "Recall" button',
				cost: { stress: 2 },
			},
			{
				id: 'ch8_todo_remember_dad',
				text: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textVi: 'Nhớ lại sự cố "Stack Overflow" của Bố',
				textEn: 'Remember Dad\'s "Stack Overflow" incident',
				effects: [{ stat: 'vision', value: 1 }], // Wisdom
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
						effects: [{ stat: 'vision', value: 1 }], // Harmony
					},
					{
						id: 'ch8_dream_robot_off',
						text: 'Tắt nguồn nó',
						textVi: 'Tắt nguồn nó',
						textEn: 'Turn it off',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Fear
					},
					{
						id: 'ch8_dream_robot_ask',
						text: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textVi: 'Hỏi nó: "Ngươi có linh hồn không?"',
						textEn: 'Ask: "Do you have a soul?"',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Wisdom
					},
					{
						id: 'ch8_dream_robot_order',
						text: 'Ra lệnh cho nó',
						textVi: 'Ra lệnh cho nó',
						textEn: 'Order it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Control
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
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch8_dream_court_defend',
						text: 'Biện hộ',
						textVi: 'Biện hộ',
						textEn: 'Defend',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Reason
					},
					{
						id: 'ch8_dream_court_blame',
						text: 'Đổ lỗi cho người khác',
						textVi: 'Đổ lỗi cho người khác',
						textEn: 'Blame others',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }], // Cowardice
					},
					{
						id: 'ch8_dream_court_silent',
						text: 'Im lặng',
						textVi: 'Im lặng',
						textEn: 'Silence',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Stoic
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
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch8_dream_dad_stop',
						text: 'Bảo bố dừng lại',
						textVi: 'Bảo bố dừng lại',
						textEn: 'Tell him to stop',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Warning
					},
					{
						id: 'ch8_dream_dad_watch',
						text: 'Đứng nhìn từ xa',
						textVi: 'Đứng nhìn từ xa',
						textEn: 'Watch from afar',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }], // Nostalgia
					},
					{
						id: 'ch8_dream_dad_destroy',
						text: 'Phá cây cầu',
						textVi: 'Phá cây cầu',
						textEn: 'Destroy bridge',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Obsession
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
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch8_dream_butterfly_watch',
						text: 'Ngắm nhìn nó',
						textVi: 'Ngắm nhìn nó',
						textEn: 'Watch it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Wisdom
					},
					{
						id: 'ch8_dream_butterfly_catch',
						text: 'Bắt nó ép vào sổ',
						textVi: 'Bắt nó ép vào sổ',
						textEn: 'Catch and press it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }], // Control
					},
					{
						id: 'ch8_dream_butterfly_fly',
						text: 'Biến thành bướm bay đi',
						textVi: 'Biến thành bướm bay đi',
						textEn: 'Turn into butterfly and fly',
						next: '',
						effects: [{ stat: 'vision', value: 1 }], // Freedom
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
						effects: [{ stat: 'vision', value: -1 }], // Redo
					},
					{
						id: 'ch8_dream_reset_ignore',
						text: 'Không bấm',
						textVi: 'Không bấm',
						textEn: "Don't press",
						next: '',
						effects: [{ stat: 'steelMind', value: 2 }], // Accept past
					},
					{
						id: 'ch8_dream_reset_destroy',
						text: 'Phá hủy cái nút',
						textVi: 'Phá hủy cái nút',
						textEn: 'Destroy button',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch8_dream_reset_stare',
						text: 'Đứng nhìn mãi',
						textVi: 'Đứng nhìn mãi',
						textEn: 'Stare at it',
						next: '',
						effects: [{ stat: 'stress', value: 1 }], // Hesitation
					},
				],
			},
		],
	},
};

export const chapter8Dialogues: Record<string, DialogueNode> = {
	// 8.1 AI Gamble
	ch8_ai_1: {
		id: 'ch8_ai_1',
		speaker: 'narrator',
		text: '40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textVi:
			'40 tuổi. Cơn sóng thần AI ập đến. ChatGPT, Copilot khiến mảng Outsource truyền thống lao đao. "Innovate or Die" (Đổi mới hay là chết).',
		textEn:
			'40 years old. AI Tsunami hit. ChatGPT, Copilot crushed traditional Outsource. "Innovate or Die".',
		next: 'ch8_ai_vision',
	},
	ch8_ai_vision: {
		id: 'ch8_ai_vision',
		speaker: 'narrator',
		text: 'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textVi:
			'Bạn thấy cơ hội trong mảng Robot chăm sóc sức khỏe (Care Robots). Không phải vì tiền, mà vì ý nghĩa: Giúp người già sống đàng hoàng hơn.',
		textEn:
			'Saw opportunity in Care Robots. Not for money, but for meaning: Help elderly live with dignity.',
		next: 'ch8_ai_bet',
	},
	ch8_ai_bet: {
		id: 'ch8_ai_bet',
		speaker: 'narrator',
		text: 'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textVi:
			'Đốc toàn lực. Vay vốn nhà nước, hợp tác với các giáo sư đầu ngành. Đây là canh bạc cuối cùng để đưa công ty lên tầm Unicorn (Kỳ lân).',
		textEn:
			'All-in. Government loans, top professor partnerships. Final gamble to become a Unicorn.',
		effects: [{ stat: 'vision', value: 2 }],
		next: 'ch8_recall_1',
	},

	// 8.2 The Recall
	ch8_recall_1: {
		id: 'ch8_recall_1',
		speaker: 'narrator',
		text: '45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textVi:
			'45-48 tuổi. Robot phiên bản 1 ra mắt. Cháy hàng. Cổ phiếu tăng trần. Bạn đang thắng. Bạn đang lên.',
		textEn:
			'Age 45-48. Robot V1 launched. Sold out. Stock hit ceiling. You were winning. You were rising.',
		next: 'ch8_recall_report',
	},
	ch8_recall_report: {
		id: 'ch8_recall_report',
		speaker: 'narrator',
		text: 'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textVi:
			'Một báo cáo nội bộ gửi đến bàn làm việc: Trong một số điều kiện hiếm gặp, AI bị ảo giác (Hallucination) và robot có thể kẹp tay người già gây thương tích. Tỷ lệ: 1%.',
		textEn:
			'Internal report landed on desk: In rare edge cases, AI hallucinates and robot may clamp elderly hands causing injury. Rate: 1%.',
		next: 'ch8_recall_pressure',
	},
	ch8_recall_pressure: {
		id: 'ch8_recall_pressure',
		speaker: 'npc',
		text: 'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textVi:
			'Cổ đông gào lên: "Mày điên à? Tỷ lệ 1% là sai số cho phép! Im lặng mà vá lỗi (Silent Patch). Thu hồi bây giờ là tự sát! Mày muốn mất tất cả như bố mày à?"',
		textEn:
			'Shareholder screamed: "Are you crazy? 1% is acceptable margin! Silent Patch it. Recall now is suicide! Do you want to lose everything like your dad?"',
		next: 'ch8_recall_reply',
	},
	ch8_recall_reply: {
		id: 'ch8_recall_reply',
		speaker: 'player',
		text: 'Bạn sẽ làm gì trước áp lực này?',
		textVi: 'Bạn sẽ làm gì trước áp lực này?',
		textEn: 'What will you do under this pressure?',
		choices: [
			{
				id: 'choice_argue_shareholder',
				text: 'Nhưng đó là sinh mạng con người!',
				textVi: 'Nhưng đó là sinh mạng con người!',
				textEn: 'But those are human lives!',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch8_recall_flashback',
			},
			{
				id: 'choice_listen_shareholder',
				text: '(Im lặng suy nghĩ về con số)',
				textVi: '(Im lặng suy nghĩ về con số)',
				textEn: '(Silently think about the numbers)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch8_recall_flashback',
			},
		],
	},
	ch8_recall_flashback: {
		id: 'ch8_recall_flashback',
		speaker: 'narrator',
		text: 'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textVi:
			'Bóng ma quá khứ ùa về. Bạn thấy hình ảnh bố năm xưa, ngồi trên bậc thềm đá, hút thuốc với đôi mắt vô hồn.',
		textEn:
			'Ghost of past surged. You saw father years ago, sitting on stone steps, smoking with soulless eyes.',
		next: 'ch8_flashback_voice',
	},
	ch8_flashback_voice: {
		id: 'ch8_flashback_voice',
		speaker: 'boQ',
		text: '(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textVi:
			'(Văng vẳng) "Bố sụp đổ vì sự vội vàng, vì che giấu... Đừng như bố."',
		textEn:
			'(Echoing) "I fell due to haste, due to concealment... Don\'t be like me."',
		next: 'ch8_recall_realization',
	},
	ch8_recall_realization: {
		id: 'ch8_recall_realization',
		speaker: 'player',
		text: '(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textVi:
			'(Suy nghĩ) Mình đang đứng trước ngã ba đường y hệt bố năm xưa. Cùng một kịch bản, chỉ khác quy mô. Lặp lại vòng lặp (Loop) hay phá vỡ lời nguyền (Break)?',
		textEn:
			'(Thinking) I am standing at the same crossroads as Father years ago. Same script, different scale. Repeat the Loop or Break the curse?',
		next: 'ch8_recall_choice',
	},
	ch8_recall_choice: {
		id: 'ch8_recall_choice',
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
				effects: [
					{ stat: 'humanity', value: 3 },
					{ stat: 'vision', value: 1 },
				],
				next: 'ch8_recall_action',
			},
			{
				id: 'choice_silent_patch',
				text: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textVi: 'Vá lỗi âm thầm - Nghe cổ đông (Machine Ending)',
				textEn: 'Silent Patch - Follow Shareholders (Machine Ending)',
				effects: [
					{ stat: 'steelMind', value: 3 },
					{ stat: 'humanity', value: -3 },
				],
				next: 'ch8_machine_ending',
			},
		],
	},
	// 8.3 Rebirth
	ch8_recall_action: {
		id: 'ch8_recall_action',
		speaker: 'narrator',
		text: 'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textVi:
			'Tổ chức họp báo. Cúi đầu xin lỗi. Công khai mã nguồn lỗi. Đền bù 100%.',
		textEn:
			'Press conference. Bowed in apology. Published buggy source code. 100% compensation.',
		next: 'ch8_final_commit',
	},
	ch8_final_commit: {
		id: 'ch8_final_commit',
		speaker: 'narrator',
		text: 'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textVi:
			'Di sản cuối cùng (Final Commit): Bạn thức trắng đêm, tự tay code bản vá lỗi. Commit message: "Fix bug, heal soul". Đây là dòng code đẹp nhất cuộc đời bạn.',
		textEn:
			'Final Commit: You stayed up all night, coding the patch yourself. Commit message: "Fix bug, heal soul". The most beautiful line of code in your life.',
		next: 'ch8_rebirth_1',
	},

	// 8.2b Machine Ending (Alternative)
	ch8_machine_ending: {
		id: 'ch8_machine_ending',
		speaker: 'narrator',
		text: 'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textVi:
			'Bạn chọn im lặng. Vá lỗi âm thầm. Giữ tiền, giữ ghế. Lặp lại vòng lặp của bố. Bạn đã trở thành Cỗ máy (The Machine).',
		textEn:
			"You chose silence. Silent patch. Kept money, kept power. Repeated Father's loop. You became The Machine.",
		next: 'ch9_billionaire_1',
	},

	// 8.3 Rebirth
	ch8_rebirth_1: {
		id: 'ch8_rebirth_1',
		speaker: 'narrator',
		text: 'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textVi:
			'Cổ phiếu lao dốc. Bị chửi rủa. Nhưng sau đó, khách hàng tin tưởng: "Ông ta không lừa dối".',
		textEn:
			'Stocks crashed. Mocked. But then, clients trusted: "He doesn\'t lie".',
		next: 'ch8_rebirth_2',
	},
	ch8_rebirth_2: {
		id: 'ch8_rebirth_2',
		speaker: 'narrator',
		text: 'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textVi:
			'Thị trường Mỹ, Nhật mở cửa. Thắng lợi bằng sự Tử tế (Integrity). Phá vỡ lời nguyền gia đình.',
		textEn:
			'US, Japan markets opened. Victory by Integrity. Family curse broken.',
		next: 'ch9_billionaire_1',
	},
};
