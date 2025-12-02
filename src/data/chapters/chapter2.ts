// ==========================================
// CHAPTER 2: EXCEPTION HANDLING (XỬ LÝ NGOẠI LỆ)
// Timeline: 11-15 tuổi
// Theme: Sự sụp đổ của thần tượng và Bài học về sự vội vàng
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter2: Chapter = {
	id: 2,
	name: 'Exception Handling',
	nameVi: 'Xử Lý Ngoại Lệ',
	nameEn: 'Exception Handling',
	ageRange: '11-15 tuổi',
	theme: 'Sự sụp đổ của thần tượng và Bài học về sự vội vàng',
	themeVi: 'Sự sụp đổ của thần tượng và Bài học về sự vội vàng',
	themeEn: 'The Fall of Idols and Lessons on Haste',
	scenes: [
		{
			id: 'ch2_fpt',
			name: 'FPT School',
			nameVi: 'Lớp 6: Rời tổ và FPT School',
			nameEn: 'Grade 6: Leaving the Nest & FPT School',
			background: '/assets/sprites/backgrounds/fpt_school.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: 'ch2_fpt_1',
		},
		{
			id: 'ch2_overflow',
			name: 'Stack Overflow',
			nameVi: 'Sự cố Stack Overflow',
			nameEn: 'Stack Overflow Incident',
			background: '/assets/sprites/backgrounds/construction_fail.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: 'ch2_overflow_1',
		},
		{
			id: 'ch2_crash',
			name: 'Sụp đổ',
			nameVi: 'Lớp 8: System Crash',
			nameEn: 'Grade 8: System Crash',
			background: '/assets/sprites/backgrounds/fortress_ruined.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: 'ch2_crash_1',
		},
		{
			id: 'ch2_countryside',
			name: 'Về quê',
			nameVi: 'Lớp 9: Cold Boot ở quê',
			nameEn: 'Grade 9: Cold Boot in Countryside',
			background: '/assets/sprites/backgrounds/countryside_poor.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: 'ch2_countryside_1',
		},
		{
			id: 'ch2_mentor',
			name: 'Người thầy đầu tiên',
			nameVi: 'Trước Lớp 10: Người thầy vĩ đại',
			nameEn: 'Pre-Grade 10: The Great Mentor',
			background: '/assets/sprites/backgrounds/hanoi_rented.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: 'ch2_mentor_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch2_todo_clean',
				text: 'Dọn dẹp nhà cửa',
				textVi: 'Dọn dẹp nhà cửa',
				textEn: 'Clean the house',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch2_todo_cook_rice',
				text: 'Nấu cơm bằng bếp rơm',
				textVi: 'Nấu cơm bằng bếp rơm',
				textEn: 'Cook rice with straw stove',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1 }, // Khói bụi
			},
			{
				id: 'ch2_todo_carry_water',
				text: 'Gánh nước giếng',
				textVi: 'Gánh nước giếng',
				textEn: 'Carry well water',
				effects: [{ stat: 'health', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch2_todo_study_late',
				text: 'Học bài khuya',
				textVi: 'Học bài khuya',
				textEn: 'Study late',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch2_todo_hide_debt',
				text: 'Trốn trong nhà khi chủ nợ đến',
				textVi: 'Trốn trong nhà khi chủ nợ đến',
				textEn: 'Hide when debt collectors come',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch2_todo_read_book',
				text: 'Đọc sách cũ của bố',
				textVi: 'Đọc sách cũ của bố',
				textEn: "Read Dad's old books",
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch2_todo_ignore_mock',
				text: 'Lờ đi lời trêu chọc của hàng xóm',
				textVi: 'Lờ đi lời trêu chọc của hàng xóm',
				textEn: 'Ignore neighbors mocking',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch2_todo_help_mom',
				text: 'Bóp vai cho mẹ',
				textVi: 'Bóp vai cho mẹ',
				textEn: "Massage Mom's shoulders",
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch2_todo_miss_dad',
				text: 'Nhớ bố',
				textVi: 'Nhớ bố',
				textEn: 'Miss Dad',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch2_todo_look_mirror',
				text: 'Nhìn mình trong gương',
				textVi: 'Nhìn mình trong gương',
				textEn: 'Look in the mirror',
				effects: [{ stat: 'vision', value: 1 }], // Tự nhủ phải thành công
			},
			{
				id: 'ch2_todo_save_money',
				text: 'Nhịn ăn sáng tiết kiệm tiền',
				textVi: 'Nhịn ăn sáng tiết kiệm tiền',
				textEn: 'Skip breakfast to save money',
				reward: { money: 20000 },
				cost: { health: 1 },
			},
			{
				id: 'ch2_todo_fix_roof',
				text: 'Chèn mái nhà chống dột',
				textVi: 'Chèn mái nhà chống dột',
				textEn: 'Fix leaking roof',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch2_todo_dream_rich',
				text: 'Mơ về ngày xưa giàu có',
				textVi: 'Mơ về ngày xưa giàu có',
				textEn: 'Dream about rich past',
				cost: { stress: 1 }, // Càng nhớ càng buồn
			},
			{
				id: 'ch2_todo_play_mud',
				text: 'Nặn đất sét',
				textVi: 'Nặn đất sét',
				textEn: 'Play with clay',
				effects: [{ stat: 'vision', value: 1 }], // Sáng tạo
			},
			{
				id: 'ch2_todo_catch_crab',
				text: 'Mò cua bắt ốc',
				textVi: 'Mò cua bắt ốc',
				textEn: 'Catch crabs and snails',
				reward: { money: 5000 },
				cost: { health: 1 },
			},
			{
				id: 'ch2_todo_fight_bully',
				text: 'Đánh nhau với bọn bắt nạt',
				textVi: 'Đánh nhau với bọn bắt nạt',
				textEn: 'Fight bullies',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 2 },
			},
			{
				id: 'ch2_todo_teach_brother',
				text: 'Dạy em học',
				textVi: 'Dạy em học',
				textEn: 'Teach younger brother',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch2_todo_write_diary',
				text: 'Viết nhật ký',
				textVi: 'Viết nhật ký',
				textEn: 'Write diary',
				reward: { stress: -1 },
			},
			{
				id: 'ch2_todo_stare_wall',
				text: 'Nhìn vách tường nứt',
				textVi: 'Nhìn vách tường nứt',
				textEn: 'Stare at cracked wall',
				effects: [{ stat: 'vision', value: 1 }], // Quyết tâm xây nhà mới
			},
			{
				id: 'ch2_todo_cry_silent',
				text: 'Khóc thầm trong chăn',
				textVi: 'Khóc thầm trong chăn',
				textEn: 'Cry silently under blanket',
				reward: { stress: -1 },
				cost: { steelMind: 1 },
			},
		],
		dreamQuestions: [
			{
				id: 'ch2_dream_house',
				text: 'Bạn mơ thấy ngôi nhà 4000m² cũ.',
				textVi: 'Bạn mơ thấy ngôi nhà 4000m² cũ.',
				textEn: 'You dream of the old 4000m² house.',
				choices: [
					{
						id: 'ch2_dream_house_enter',
						text: 'Chạy vào nhà',
						textVi: 'Chạy vào nhà',
						textEn: 'Run inside',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch2_dream_house_burn',
						text: 'Thấy nó đang cháy',
						textVi: 'Thấy nó đang cháy',
						textEn: 'See it burning',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch2_dream_house_buy',
						text: 'Tự hứa sẽ mua lại nó',
						textVi: 'Tự hứa sẽ mua lại nó',
						textEn: 'Promise to buy it back',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch2_dream_house_leave',
						text: 'Quay lưng bỏ đi',
						textVi: 'Quay lưng bỏ đi',
						textEn: 'Turn away and leave',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
			{
				id: 'ch2_dream_car',
				text: 'Chiếc xe LuxSA của bố biến thành quái vật.',
				textVi: 'Chiếc xe LuxSA của bố biến thành quái vật.',
				textEn: "Dad's LuxSA car turns into a monster.",
				choices: [
					{
						id: 'ch2_dream_car_fight',
						text: 'Chiến đấu với nó',
						textVi: 'Chiến đấu với nó',
						textEn: 'Fight it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch2_dream_car_drive',
						text: 'Leo lên lái nó',
						textVi: 'Leo lên lái nó',
						textEn: 'Climb in and drive',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch2_dream_car_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }],
					},
					{
						id: 'ch2_dream_car_sell',
						text: 'Bán nó đi',
						textVi: 'Bán nó đi',
						textEn: 'Sell it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch2_dream_trade',
				text: 'Bạn có sẵn sàng đổi 10 năm tuổi thọ để lấy lại sự thịnh vượng cho gia đình ngay lập tức?',
				textVi:
					'Bạn có sẵn sàng đổi 10 năm tuổi thọ để lấy lại sự thịnh vượng cho gia đình ngay lập tức?',
				textEn:
					"Would you trade 10 years of life to restore your family's prosperity instantly?",
				choices: [
					{
						id: 'ch2_dream_trade_yes',
						text: 'Có, tôi đổi ngay',
						textVi: 'Có, tôi đổi ngay',
						textEn: 'Yes, trade instantly',
						next: '',
						effects: [
							{ stat: 'humanity', value: 1 },
							{ stat: 'vision', value: -1 },
						], // Hy sinh mù quáng
					},
					{
						id: 'ch2_dream_trade_no',
						text: 'Không, tôi sẽ tự tay lấy lại',
						textVi: 'Không, tôi sẽ tự tay lấy lại',
						textEn: 'No, I will earn it back myself',
						next: '',
						effects: [
							{ stat: 'steelMind', value: 1 },
							{ stat: 'vision', value: 1 },
						],
					},
					{
						id: 'ch2_dream_trade_half',
						text: 'Chỉ đổi 5 năm thôi được không?',
						textVi: 'Chỉ đổi 5 năm thôi được không?',
						textEn: 'Can I trade just 5 years?',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }],
					},
					{
						id: 'ch2_dream_trade_all',
						text: 'Đổi cả mạng sống cũng được',
						textVi: 'Đổi cả mạng sống cũng được',
						textEn: 'Take my whole life',
						next: '',
						effects: [{ stat: 'humanity', value: 2 }],
					},
				],
			},
			{
				id: 'ch2_dream_falling',
				text: 'Bạn mơ thấy mình rơi xuống vực thẳm không đáy.',
				textVi: 'Bạn mơ thấy mình rơi xuống vực thẳm không đáy.',
				textEn: 'You dream of falling into a bottomless abyss.',
				choices: [
					{
						id: 'ch2_dream_falling_scream',
						text: 'Hét lên',
						textVi: 'Hét lên',
						textEn: 'Scream',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch2_dream_falling_fly',
						text: 'Cố gắng bay lên',
						textVi: 'Cố gắng bay lên',
						textEn: 'Try to fly',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch2_dream_falling_relax',
						text: 'Thả lỏng tận hưởng',
						textVi: 'Thả lỏng tận hưởng',
						textEn: 'Relax and enjoy',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch2_dream_falling_grab',
						text: 'Bám vào vách đá',
						textVi: 'Bám vào vách đá',
						textEn: 'Grab the cliff edge',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
			{
				id: 'ch2_dream_dog',
				text: 'Bạn thấy Bi (chó cưng) đang bị người lạ dắt đi.',
				textVi: 'Bạn thấy Bi (chó cưng) đang bị người lạ dắt đi.',
				textEn: 'You see Bi (pet dog) being led away by a stranger.',
				choices: [
					{
						id: 'ch2_dream_dog_chase',
						text: 'Đuổi theo đòi lại',
						textVi: 'Đuổi theo đòi lại',
						textEn: 'Chase to get him back',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch2_dream_dog_cry',
						text: 'Đứng khóc',
						textVi: 'Đứng khóc',
						textEn: 'Stand and cry',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch2_dream_dog_stone',
						text: 'Ném đá người lạ',
						textVi: 'Ném đá người lạ',
						textEn: 'Throw stones at stranger',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch2_dream_dog_ignore',
						text: 'Quay mặt đi',
						textVi: 'Quay mặt đi',
						textEn: 'Look away',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
		],
	},
};

export const chapter2Dialogues: Record<string, DialogueNode> = {
	// 2.1 Lớp 6: Rời tổ
	ch2_fpt_1: {
		id: 'ch2_fpt_1',
		speaker: 'narrator',
		text: 'Bạn vào học nội trú tại FPT School. Một môi trường kỷ luật, hiện đại và đầy tính cạnh tranh.',
		textVi:
			'Bạn vào học nội trú tại FPT School. Một môi trường kỷ luật, hiện đại và đầy tính cạnh tranh.',
		textEn:
			'You entered boarding school at FPT School. A disciplined, modern, and competitive environment.',
		next: 'ch2_fpt_2',
	},
	ch2_fpt_2: {
		id: 'ch2_fpt_2',
		speaker: 'narrator',
		text: 'Bạn mang theo niềm kiêu hãnh của "thiếu gia Lào Cai". Hào phóng bao bạn bè, dùng đồ hiệu. Nhưng sâu bên trong, bạn thấy cô đơn.',
		textVi:
			'Bạn mang theo niềm kiêu hãnh của "thiếu gia Lào Cai". Hào phóng bao bạn bè, dùng đồ hiệu. Nhưng sâu bên trong, bạn thấy cô đơn.',
		textEn:
			'You carried the pride of the "Lao Cai young master". Treating friends, using branded goods. But deep down, lonely.',
		next: 'ch2_fpt_lonely',
	},
	ch2_fpt_lonely: {
		id: 'ch2_fpt_lonely',
		speaker: 'player',
		text: '(Nằm nghe tiếng mưa) Nhớ nhà quá. Nhớ tiếng chó sủa, nhớ tiếng công kêu. Ở đây chỉ có tiếng mưa lạnh lẽo.',
		textVi:
			'(Nằm nghe tiếng mưa) Nhớ nhà quá. Nhớ tiếng chó sủa, nhớ tiếng công kêu. Ở đây chỉ có tiếng mưa lạnh lẽo.',
		textEn:
			'(Listening to rain) I miss home. Miss the barking dogs, the calling peacocks. Here, only cold rain.',
		next: 'ch2_overflow_1',
	},

	// 2.2 Sự cố Stack Overflow
	ch2_overflow_1: {
		id: 'ch2_overflow_1',
		speaker: 'narrator',
		text: 'Tại Lào Cai, bố đang ở đỉnh cao nhưng bắt đầu tự tin thái quá. Bố nhận thầu cùng lúc 3 dự án trọng điểm: Đường cao tốc biên giới, Kè sông chống lũ, và Khu đô thị mới.',
		textVi:
			'Tại Lào Cai, bố đang ở đỉnh cao nhưng bắt đầu tự tin thái quá. Bố nhận thầu cùng lúc 3 dự án trọng điểm: Đường cao tốc biên giới, Kè sông chống lũ, và Khu đô thị mới.',
		textEn:
			'In Lao Cai, father was at his peak but overconfident. Took 3 major projects at once: Border Highway, River Embankment, and New Urban Area.',
		next: 'ch2_overflow_mindset',
	},
	ch2_overflow_mindset: {
		id: 'ch2_overflow_mindset',
		speaker: 'narrator',
		text: 'Nguồn vốn bị dàn trải. Chi phí vận hành tăng phi mã. Bố muốn "đánh nhanh thắng nhanh" để khẳng định vị thế số 1.',
		textVi:
			'Nguồn vốn bị dàn trải. Chi phí vận hành tăng phi mã. Bố muốn "đánh nhanh thắng nhanh" để khẳng định vị thế số 1.',
		textEn:
			'Capital spread thin. OpEx skyrocketed. Father wanted "blitzkrieg" to claim #1 spot.',
		next: 'ch2_overflow_bug',
	},
	ch2_overflow_bug: {
		id: 'ch2_overflow_bug',
		speaker: 'narrator',
		text: 'Cú trượt chân (The Bug): Trong một lần nghiệm thu vật liệu tại dự án Kè sông, do vội vàng muốn đẩy nhanh tiến độ, bố đã lơ là khâu kiểm định chất lượng đầu vào của một lô thép.',
		textVi:
			'Cú trượt chân (The Bug): Trong một lần nghiệm thu vật liệu tại dự án Kè sông, do vội vàng muốn đẩy nhanh tiến độ, bố đã lơ là khâu kiểm định chất lượng đầu vào của một lô thép.',
		textEn:
			'The Bug: In a rush at River Embankment project, father neglected quality check on a steel batch to speed up progress.',
		next: 'ch2_overflow_2',
	},
	ch2_overflow_2: {
		id: 'ch2_overflow_2',
		speaker: 'boQ',
		text: '(Hét vào điện thoại) "Lô thép đó bị lỗi thì hủy đi! Tại sao lại tiếc rẻ mà xuất đi? Giờ khách hàng kiện thì bán nhà cũng không đền nổi đâu!"',
		textVi:
			'(Hét vào điện thoại) "Lô thép đó bị lỗi thì hủy đi! Tại sao lại tiếc rẻ mà xuất đi? Giờ khách hàng kiện thì bán nhà cũng không đền nổi đâu!"',
		textEn:
			'(Shouting on phone) "If that steel batch is faulty, scrap it! Why ship it? Now if they sue, selling the house won\'t cover it!"',
		next: 'ch2_overflow_collapse',
	},
	ch2_overflow_collapse: {
		id: 'ch2_overflow_collapse',
		speaker: 'narrator',
		text: 'Thanh tra phát hiện. Dự án đình chỉ. Ngân hàng siết nợ (Margin Call). Dòng tiền đứt gãy. Bố buông điện thoại, người trượt dài xuống ghế. Chỉ sau một đêm, tóc bố bạc đi một nửa.',
		textVi:
			'Thanh tra phát hiện. Dự án đình chỉ. Ngân hàng siết nợ (Margin Call). Dòng tiền đứt gãy. Bố buông điện thoại, người trượt dài xuống ghế. Chỉ sau một đêm, tóc bố bạc đi một nửa.',
		textEn:
			'Inspectors found out. Project suspended. Margin Call. Cash flow broken. Father dropped the phone, sliding down. Overnight, hair turned half gray.',
		next: 'ch2_crash_1',
	},

	// 2.3 System Crash
	ch2_crash_1: {
		id: 'ch2_crash_1',
		speaker: 'narrator',
		text: 'Đang trong giờ học Toán, giám thị gọi bạn ra ngoài. Mẹ đang đợi ở cổng trường, mắt đỏ hoe.',
		textVi:
			'Đang trong giờ học Toán, giám thị gọi bạn ra ngoài. Mẹ đang đợi ở cổng trường, mắt đỏ hoe.',
		textEn:
			'During Math class, supervisor called you out. Mom was waiting at the gate, eyes red.',
		next: 'ch2_mom_call',
	},
	ch2_mom_call: {
		id: 'ch2_mom_call',
		speaker: 'npc',
		text: '"Về thôi con. Nhà mình... mất hết rồi. Bố con đang đợi ở nhà."',
		textVi: '"Về thôi con. Nhà mình... mất hết rồi. Bố con đang đợi ở nhà."',
		textEn:
			'"Let\'s go home, son. We... lost everything. Your dad is waiting."',
		next: 'ch2_crash_2',
	},
	ch2_crash_2: {
		id: 'ch2_crash_2',
		speaker: 'narrator',
		text: 'Bạn về lại Lào Cai. Biệt thự 4.000m² bị niêm phong. Đà điểu, công, khỉ đã bị bán tháo.',
		textVi:
			'Bạn về lại Lào Cai. Biệt thự 4.000m² bị niêm phong. Đà điểu, công, khỉ đã bị bán tháo.',
		textEn:
			'Back in Lao Cai. Mansion sealed. Ostriches, peacocks, monkeys sold off.',
		next: 'ch2_crash_dogs',
	},
	ch2_crash_dogs: {
		id: 'ch2_crash_dogs',
		speaker: 'player',
		text: '(Hoảng hốt) Bi đâu? Đội vệ sĩ 15 con chó đâu rồi?',
		textVi: '(Hoảng hốt) Bi đâu? Đội vệ sĩ 15 con chó đâu rồi?',
		textEn: '(Panicked) Where is Bi? Where are the 15 guard dogs?',
		next: 'ch2_crash_3',
	},
	ch2_crash_3: {
		id: 'ch2_crash_3',
		speaker: 'narrator',
		text: 'Chúng đã bị bắt đi gán nợ hoặc chạy tán loạn. Bố ngồi trên bậc thềm đá, hút thuốc. Lần đầu tiên bạn thấy bố già đi chục tuổi. Người khổng lồ đã gục ngã.',
		textVi:
			'Chúng đã bị bắt đi gán nợ hoặc chạy tán loạn. Bố ngồi trên bậc thềm đá, hút thuốc. Lần đầu tiên bạn thấy bố già đi chục tuổi. Người khổng lồ đã gục ngã.',
		textEn:
			'Taken for debt or scattered. Father sat on stone steps, smoking. Looked 10 years older. The giant had fallen.',
		next: 'ch2_crash_4',
	},
	ch2_crash_4: {
		id: 'ch2_crash_4',
		speaker: 'boQ',
		text: '"Bố xin lỗi. Bố đã quá tự tin. Bố đã đánh cược cả tương lai của con."',
		textVi:
			'"Bố xin lỗi. Bố đã quá tự tin. Bố đã đánh cược cả tương lai của con."',
		textEn: '"I\'m sorry. I was too confident. I gambled with your future."',
		next: 'ch2_crash_reaction',
	},
	ch2_crash_reaction: {
		id: 'ch2_crash_reaction',
		speaker: 'narrator',
		text: 'Bạn nhìn người đàn ông từng là "Vua" giờ đây đang khóc. Bạn sẽ nói gì?',
		textVi:
			'Bạn nhìn người đàn ông từng là "Vua" giờ đây đang khóc. Bạn sẽ nói gì?',
		textEn:
			'You looked at the man who was once "King" now crying. What will you say?',
		choices: [
			{
				id: 'choice_comfort_dad',
				text: 'Không sao đâu bố, mình làm lại được mà',
				textVi: 'Không sao đâu bố, mình làm lại được mà',
				textEn: "It's okay Dad, we can rebuild",
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch2_countryside_1',
			},
			{
				id: 'choice_silent_dad',
				text: '(Im lặng nắm tay bố)',
				textVi: '(Im lặng nắm tay bố)',
				textEn: "(Silently hold Dad's hand)",
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch2_countryside_1',
			},
		],
	},
	ch2_crash_lesson: {
		id: 'ch2_crash_lesson',
		speaker: 'narrator',
		text: 'Hình tượng người hùng vỡ vụn. Một nỗi sợ hãi mơ hồ hình thành: Sự giàu sang thật mong manh.',
		textVi:
			'Hình tượng người hùng vỡ vụn. Một nỗi sợ hãi mơ hồ hình thành: Sự giàu sang thật mong manh.',
		textEn: 'Hero image shattered. A vague fear formed: Wealth is fragile.',
		effects: [{ stat: 'steelMind', value: 2 }],
		next: 'ch2_countryside_1',
	},

	// 2.4 Cold Boot ở quê
	ch2_countryside_1: {
		id: 'ch2_countryside_1',
		speaker: 'narrator',
		text: 'Cả gia đình dắt díu nhau về quê nội. Không còn biệt thự, chỉ còn căn nhà cấp 4 dột nát. Bố mẹ ly thân tạm thời. Bố ở lại Lào Cai giải quyết nợ.',
		textVi:
			'Cả gia đình dắt díu nhau về quê nội. Không còn biệt thự, chỉ còn căn nhà cấp 4 dột nát. Bố mẹ ly thân tạm thời. Bố ở lại Lào Cai giải quyết nợ.',
		textEn:
			'Family moved to countryside. Dilapidated cottage. Parents separated temporarily. Father stayed in Lao Cai for debts.',
		next: 'ch2_countryside_2',
	},
	ch2_countryside_2: {
		id: 'ch2_countryside_2',
		speaker: 'narrator',
		text: 'Mùa đông miền Bắc rét cắt da cắt thịt. Nhà không có lò sưởi, gió lùa qua khe cửa.',
		textVi:
			'Mùa đông miền Bắc rét cắt da cắt thịt. Nhà không có lò sưởi, gió lùa qua khe cửa.',
		textEn:
			'Northern winter was bone-chilling. No heater, wind whistling through door cracks.',
		next: 'ch2_neighbor_mock',
	},
	ch2_neighbor_mock: {
		id: 'ch2_neighbor_mock',
		speaker: 'npc',
		text: 'Hàng xóm đi qua, chỉ trỏ: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra."',
		textVi:
			'Hàng xóm đi qua, chỉ trỏ: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra."',
		textEn:
			'Neighbors passed by, pointing: "See, used to be so arrogant. Now look at them."',
		next: 'ch2_countryside_3',
	},
	ch2_countryside_3: {
		id: 'ch2_countryside_3',
		speaker: 'narrator',
		text: 'Bạn phải tự đi gánh nước giếng khơi, nấu cơm bằng bếp rơm khói mù mịt. Mùa đông gió lùa qua khe cửa nứt nẻ. Bạn bè xa lánh "thằng công tử sa cơ". Bạn trở nên lầm lì, giấu mình vào sách vở, coi kiến thức là lối thoát duy nhất.',
		textVi:
			'Bạn phải tự đi gánh nước giếng khơi, nấu cơm bằng bếp rơm khói mù mịt. Mùa đông gió lùa qua khe cửa nứt nẻ. Bạn bè xa lánh "thằng công tử sa cơ". Bạn trở nên lầm lì, giấu mình vào sách vở, coi kiến thức là lối thoát duy nhất.',
		textEn:
			'Carried water from deep well, cooked with smoky straw stove. Winter wind blew through cracked doors. Friends shunned "fallen prince". Became silent, hid in books, seeing knowledge as the only escape.',
		next: 'ch2_countryside_steel',
	},
	ch2_countryside_steel: {
		id: 'ch2_countryside_steel',
		speaker: 'narrator',
		text: 'Bạn nhận ra rằng khi không còn tiền, lòng tự trọng là thứ duy nhất giữ bạn đứng thẳng. Bạn học cách phớt lờ những lời xì xào.',
		textVi:
			'Bạn nhận ra rằng khi không còn tiền, lòng tự trọng là thứ duy nhất giữ bạn đứng thẳng. Bạn học cách phớt lờ những lời xì xào.',
		textEn:
			'Realized without money, self-esteem is all that keeps you standing. Learned to ignore whispers.',
		effects: [{ stat: 'steelMind', value: 2 }],
		next: 'ch2_mentor_1',
	},

	// 2.5 Người thầy vĩ đại
	ch2_mentor_1: {
		id: 'ch2_mentor_1',
		speaker: 'narrator',
		text: 'Bố giải quyết xong vụ kiện tụng (dù vẫn nợ đầm đìa), cùng về Hà Nội với mẹ con. Bố không đi trốn, không nát rượu. Bố bình tĩnh vẽ lại bản đồ cuộc đời.',
		textVi:
			'Bố giải quyết xong vụ kiện tụng (dù vẫn nợ đầm đìa), cùng về Hà Nội với mẹ con. Bố không đi trốn, không nát rượu. Bố bình tĩnh vẽ lại bản đồ cuộc đời.',
		textEn:
			"Father settled lawsuits (still in debt), brought family to Hanoi. Didn't run, didn't drink. Calmly redrew life map.",
		next: 'ch2_mentor_2',
	},
	ch2_mentor_2: {
		id: 'ch2_mentor_2',
		speaker: 'boQ',
		text: '"Xây cầu có thể sập vì thiên tai, vì cơ chế. Nhưng xây phần mềm thì con nắm quyền kiểm soát trong tay. Nếu sai, con có thể sửa (Debug). Học lập trình đi con."',
		textVi:
			'"Xây cầu có thể sập vì thiên tai, vì cơ chế. Nhưng xây phần mềm thì con nắm quyền kiểm soát trong tay. Nếu sai, con có thể sửa (Debug). Học lập trình đi con."',
		textEn:
			'"Bridges collapse due to disasters/policy. Software is in your control. If wrong, you can Debug. Learn programming, son."',
		next: 'ch2_mentor_3',
	},
	ch2_mentor_3: {
		id: 'ch2_mentor_3',
		speaker: 'narrator',
		text: 'Bố vay mượn mua cho bạn bộ máy tính cũ. Bố là người đầu tiên đặt tay bạn lên bàn phím, dạy bạn tư duy hệ thống (System Thinking) dù bố không biết code.',
		textVi:
			'Bố vay mượn mua cho bạn bộ máy tính cũ. Bố là người đầu tiên đặt tay bạn lên bàn phím, dạy bạn tư duy hệ thống (System Thinking) dù bố không biết code.',
		textEn:
			"Father borrowed to buy old PC. Put your hands on keyboard. Taught System Thinking though he couldn't code.",
		effects: [{ stat: 'vision', value: 2 }],
		choices: [
			{
				id: 'choice_accept_destiny',
				text: 'Nghe lời bố, bắt đầu học Code',
				textVi: 'Nghe lời bố, bắt đầu học Code',
				textEn: 'Listen to father, start coding',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch3_dorm_1',
			},
		],
	},
};
