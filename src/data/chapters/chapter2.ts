// ==========================================
// CHAPTER 2: EXCEPTION HANDLING (XỬ LÝ NGOẠI LỆ)
// Timeline: 11-15 tuổi
// Theme: Sự sụp đổ của thần tượng và Bài học về sự vội vàng
// ==========================================

import {
	Chapter2DialogueID,
	Chapter2SceneID,
	Chapter2TodoID,
	Chapter3DialogueID,
	ConditionType,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

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
			id: Chapter2SceneID.CH2_FPT,
			name: 'FPT School',
			nameVi: 'Lớp 6: Rời tổ và FPT School',
			nameEn: 'Grade 6: Leaving the Nest & FPT School',
			background: '/assets/sprites/backgrounds/living_room_dark.png',
			music: '/assets/audio/music/chapters/ch2_sad.mp3',
			dialogueStart: Chapter2DialogueID.CH2_INTRO,
		},
		{
			id: Chapter2SceneID.CH2_OVERFLOW,
			name: 'Stack Overflow',
			nameVi: 'Sự cố Stack Overflow',
			nameEn: 'Stack Overflow Incident',
			background: '/assets/sprites/backgrounds/construction_fail.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: Chapter2DialogueID.CH2_OVERFLOW_1,
		},
		{
			id: Chapter2SceneID.CH2_CRASH,
			name: 'Sụp đổ',
			nameVi: 'Lớp 8: System Crash',
			nameEn: 'Grade 8: System Crash',
			background: '/assets/sprites/backgrounds/fortress_ruined.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: Chapter2DialogueID.CH2_CRASH_1,
		},
		{
			id: Chapter2SceneID.CH2_COUNTRYSIDE,
			name: 'Về quê',
			nameVi: 'Lớp 9: Cold Boot ở quê',
			nameEn: 'Grade 9: Cold Boot in Countryside',
			background: '/assets/sprites/backgrounds/countryside_poor.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: Chapter2DialogueID.CH2_COUNTRYSIDE_1,
		},
		{
			id: Chapter2SceneID.CH2_MENTOR,
			name: 'Người thầy đầu tiên',
			nameVi: 'Trước Lớp 10: Người thầy vĩ đại',
			nameEn: 'Pre-Grade 10: The Great Mentor',
			background: '/assets/sprites/backgrounds/hanoi_rented.png',
			music: '/assets/audio/music/chapters/ch2_collapse.mp3',
			dialogueStart: Chapter2DialogueID.CH2_MENTOR_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter2TodoID.CH2_TODO_CLEAN,
				text: 'Dọn dẹp nhà cửa',
				textVi: 'Dọn dẹp nhà cửa',
				textEn: 'Clean the house',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				cost: { health: 2 },
			},
			{
				id: 'ch2_todo_cook_rice',
				text: 'Nấu cơm bằng bếp rơm',
				textVi: 'Nấu cơm bằng bếp rơm',
				textEn: 'Cook rice with straw stove',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { health: 2 }, // Khói bụi
			},
			{
				id: 'ch2_todo_carry_water',
				text: 'Gánh nước giếng',
				textVi: 'Gánh nước giếng',
				textEn: 'Carry well water',
				effects: [{ stat: StatID.HEALTH, value: 4 }],
				cost: { stress: 5, health: 2 }, // Increased Stress cost, physical labor
			},
			{
				id: 'ch2_todo_study_late',
				text: 'Học bài khuya',
				textVi: 'Học bài khuya',
				textEn: 'Study late',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { health: 5 }, // Increased health cost
			},
			{
				id: 'ch2_todo_hide_debt',
				text: 'Trốn trong nhà khi chủ nợ đến',
				textVi: 'Trốn trong nhà khi chủ nợ đến',
				textEn: 'Hide when debt collectors come',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { stress: 10 }, // High stress
			},
			{
				id: 'ch2_todo_read_book',
				text: 'Đọc sách cũ của bố',
				textVi: 'Đọc sách cũ của bố',
				textEn: "Read Dad's old books",
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch2_todo_ignore_mock',
				text: 'Lờ đi lời trêu chọc của hàng xóm',
				textVi: 'Lờ đi lời trêu chọc của hàng xóm',
				textEn: 'Ignore neighbors mocking',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { stress: 5 }, // Increased stress
			},
			{
				id: 'ch2_todo_help_mom',
				text: 'Bóp vai cho mẹ',
				textVi: 'Bóp vai cho mẹ',
				textEn: "Massage Mom's shoulders",
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch2_todo_miss_dad',
				text: 'Nhớ bố',
				textVi: 'Nhớ bố',
				textEn: 'Miss Dad',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				cost: { stress: 5 }, // Increased stress
			},
			{
				id: 'ch2_todo_look_mirror',
				text: 'Nhìn mình trong gương',
				textVi: 'Nhìn mình trong gương',
				textEn: 'Look in the mirror',
				effects: [{ stat: StatID.VISION, value: 2 }], // Tự nhủ phải thành công
			},

			{
				id: 'ch2_todo_fix_roof',
				text: 'Chèn mái nhà chống dột',
				textVi: 'Chèn mái nhà chống dột',
				textEn: 'Fix leaking roof',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { health: 5 }, // Dangerous/Tiring
			},
			{
				id: 'ch2_todo_dream_rich',
				text: 'Mơ về ngày xưa giàu có',
				textVi: 'Mơ về ngày xưa giàu có',
				textEn: 'Dream about rich past',
				cost: { stress: 5 }, // Càng nhớ càng buồn
			},
			{
				id: 'ch2_todo_play_mud',
				text: 'Nặn đất sét',
				textVi: 'Nặn đất sét',
				textEn: 'Play with clay',
				effects: [{ stat: StatID.VISION, value: 2 }], // Sáng tạo
			},

			{
				id: 'ch2_todo_fight_bully',
				text: 'Đánh nhau với bọn bắt nạt',
				textVi: 'Đánh nhau với bọn bắt nạt',
				textEn: 'Fight bullies',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { health: 10 }, // Getting beaten up
			},
			{
				id: 'ch2_todo_teach_brother',
				text: 'Dạy em học',
				textVi: 'Dạy em học',
				textEn: 'Teach younger brother',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch2_todo_write_diary',
				text: 'Viết nhật ký',
				textVi: 'Viết nhật ký',
				textEn: 'Write diary',
				reward: { stress: -5 },
			},
			{
				id: 'ch2_todo_stare_wall',
				text: 'Nhìn vách tường nứt',
				textVi: 'Nhìn vách tường nứt',
				textEn: 'Stare at cracked wall',
				effects: [{ stat: StatID.VISION, value: 2 }], // Quyết tâm xây nhà mới
			},
			{
				id: 'ch2_todo_cry_silent',
				text: 'Khóc thầm trong chăn',
				textVi: 'Khóc thầm trong chăn',
				textEn: 'Cry silently under blanket',
				reward: { stress: -5 },
				cost: { steelMind: 2 },
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch2_dream_house_burn',
						text: 'Thấy nó đang cháy',
						textVi: 'Thấy nó đang cháy',
						textEn: 'See it burning',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch2_dream_house_buy',
						text: 'Tự hứa sẽ mua lại nó',
						textVi: 'Tự hứa sẽ mua lại nó',
						textEn: 'Promise to buy it back',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch2_dream_house_leave',
						text: 'Quay lưng bỏ đi',
						textVi: 'Quay lưng bỏ đi',
						textEn: 'Turn away and leave',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch2_dream_car_drive',
						text: 'Leo lên lái nó',
						textVi: 'Leo lên lái nó',
						textEn: 'Climb in and drive',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch2_dream_car_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -2 }],
					},
					{
						id: 'ch2_dream_car_sell',
						text: 'Bán nó đi',
						textVi: 'Bán nó đi',
						textEn: 'Sell it',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
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
							{ stat: StatID.HUMANITY, value: 3 },
							{ stat: StatID.VISION, value: -3 },
						], // Hy sinh mù quáng
					},
					{
						id: 'ch2_dream_trade_no',
						text: 'Không, tôi sẽ tự tay lấy lại',
						textVi: 'Không, tôi sẽ tự tay lấy lại',
						textEn: 'No, I will earn it back myself',
						next: '',
						effects: [
							{ stat: StatID.STEELMIND, value: 3 },
							{ stat: StatID.VISION, value: 3 },
						],
					},
					{
						id: 'ch2_dream_trade_half',
						text: 'Chỉ đổi 5 năm thôi được không?',
						textVi: 'Chỉ đổi 5 năm thôi được không?',
						textEn: 'Can I trade just 5 years?',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -2 }],
					},
					{
						id: 'ch2_dream_trade_all',
						text: 'Đổi cả mạng sống cũng được',
						textVi: 'Đổi cả mạng sống cũng được',
						textEn: 'Take my whole life',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
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
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch2_dream_falling_fly',
						text: 'Cố gắng bay lên',
						textVi: 'Cố gắng bay lên',
						textEn: 'Try to fly',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch2_dream_falling_relax',
						text: 'Thả lỏng tận hưởng',
						textVi: 'Thả lỏng tận hưởng',
						textEn: 'Relax and enjoy',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch2_dream_falling_grab',
						text: 'Bám vào vách đá',
						textVi: 'Bám vào vách đá',
						textEn: 'Grab the cliff edge',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch2_dream_dog_cry',
						text: 'Đứng khóc',
						textVi: 'Đứng khóc',
						textEn: 'Stand and cry',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch2_dream_dog_stone',
						text: 'Ném đá người lạ',
						textVi: 'Ném đá người lạ',
						textEn: 'Throw stones at stranger',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch2_dream_dog_ignore',
						text: 'Quay mặt đi',
						textVi: 'Quay mặt đi',
						textEn: 'Look away',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch2_reflect_sleep_1',
			text: 'Từ giường êm đến nệm rách... nhưng giấc ngủ vẫn cần thiết.',
			textVi: 'Từ giường êm đến nệm rách... nhưng giấc ngủ vẫn cần thiết.',
			textEn: 'From soft bed to torn mattress... but sleep is still needed.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch2_reflect_sleep_1_rest',
					text: 'Nghỉ ngơi để ngày mai có sức',
					textVi: 'Nghỉ ngơi để ngày mai có sức',
					textEn: 'Rest to have strength tomorrow',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 1 }],
				},
				{
					id: 'ch2_reflect_sleep_1_tired',
					text: 'Hôm nay mệt lắm rồi',
					textVi: 'Hôm nay mệt lắm rồi',
					textEn: 'So tired today',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -1 }],
				},
			],
		},
		{
			id: 'ch2_reflect_success_1',
			text: 'Bố từng nói: "Thất bại là mẹ thành công". Nhưng sao nó đau đớn thế này...',
			textVi:
				'Bố từng nói: "Thất bại là mẹ thành công". Nhưng sao nó đau đớn thế này...',
			textEn:
				'Dad said: "Failure is the mother of success". But why does it hurt so much...',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch2_reflect_success_1_believe',
					text: 'Tin vào lời bố, sẽ vượt qua',
					textVi: 'Tin vào lời bố, sẽ vượt qua',
					textEn: "Believe in Dad's words, will overcome",
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 3 }],
				},
				{
					id: 'ch2_reflect_success_1_sleep',
					text: 'Đi ngủ, để quên nỗi đau',
					textVi: 'Đi ngủ, để quên nỗi đau',
					textEn: 'Sleep, to forget the pain',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -2 }],
				},
			],
		},
		{
			id: 'ch2_reflect_sleep_2',
			text: 'Đã khuya rồi, những lời chế giễu vẫn đeo đẳng trong đầu.',
			textVi: 'Đã khuya rồi, những lời chế giễu vẫn đeo đẳng trong đầu.',
			textEn: "It's late, the mocking words still linger in my head.",
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch2_reflect_sleep_2_forget',
					text: 'Ngủ để quên đi',
					textVi: 'Ngủ để quên đi',
					textEn: 'Sleep to forget',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -2 }],
				},
				{
					id: 'ch2_reflect_sleep_2_tomorrow',
					text: 'Mai sẽ chứng minh họ sai',
					textVi: 'Mai sẽ chứng minh họ sai',
					textEn: 'Tomorrow will prove them wrong',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
			],
		},
		{
			id: 'ch2_reflect_success_2',
			text: 'Mình phải vượt qua. Phải chứng minh rằng mình không phải "công tử sa cơ".',
			textVi:
				'Mình phải vượt qua. Phải chứng minh rằng mình không phải "công tử sa cơ".',
			textEn: 'I must overcome. Must prove I\'m not just a "fallen prince".',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch2_reflect_success_2_study',
					text: 'Học thêm trước khi ngủ',
					textVi: 'Học thêm trước khi ngủ',
					textEn: 'Study more before sleep',
					next: '',
					effects: [
						{ stat: StatID.VISION, value: 3 },
						{ stat: StatID.HEALTH, value: -1 },
					],
				},
				{
					id: 'ch2_reflect_success_2_rest',
					text: 'Ngủ đủ mới học tốt được',
					textVi: 'Ngủ đủ mới học tốt được',
					textEn: 'Need sleep to study well',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 1 }],
				},
			],
		},
		{
			id: 'ch2_reflect_sleep_3',
			text: 'Ngày đã dài và đầy gian khổ... cơ thể đang kêu cứu.',
			textVi: 'Ngày đã dài và đầy gian khổ... cơ thể đang kêu cứu.',
			textEn: 'Day was long and full of hardship... body is crying out.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch2_reflect_sleep_3_rest',
					text: 'Nghỉ ngơi thôi',
					textVi: 'Nghỉ ngơi thôi',
					textEn: 'Time to rest',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
				{
					id: 'ch2_reflect_sleep_3_recover',
					text: 'Hôm nay là một ngày dài',
					textVi: 'Hôm nay là một ngày dài',
					textEn: 'Today was a long day',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -1 }],
				},
			],
		},
		{
			id: 'ch2_reflect_success_3',
			text: 'Kiến thức là vũ khí duy nhất mình còn... phải nắm chắc nó.',
			textVi: 'Kiến thức là vũ khí duy nhất mình còn... phải nắm chắc nó.',
			textEn:
				'Knowledge is the only weapon I have left... must grasp it tight.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch2_reflect_success_3_continue',
					text: 'Học tiếp một chút',
					textVi: 'Học tiếp một chút',
					textEn: 'Study a bit more',
					next: '',
					effects: [
						{ stat: StatID.VISION, value: 2 },
						{ stat: StatID.STRESS, value: 1 },
					],
				},
				{
					id: 'ch2_reflect_success_3_balance',
					text: 'Nhưng cũng cần nghỉ ngơi',
					textVi: 'Nhưng cũng cần nghỉ ngơi',
					textEn: 'But also need rest',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 1 }],
				},
			],
		},
	],
};

export const chapter2Dialogues: Record<Chapter2DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter2DialogueID.CH2_INTRO]: {
		speaker: 'narrator',
		text: 'Căn nhà mới lạ lẫm và chật hẹp. Không còn khoảng sân rộng, không còn những món đồ chơi đắt tiền. Chỉ còn lại sự im lặng nặng nề trong bữa cơm.',
		textVi:
			'Căn nhà mới lạ lẫm và chật hẹp. Không còn khoảng sân rộng, không còn những món đồ chơi đắt tiền. Chỉ còn lại sự im lặng nặng nề trong bữa cơm.',
		textEn:
			'The new house is strange and cramped. No more wide yard, no more expensive toys. Only heavy silence remains during meals.',
		next: Chapter2DialogueID.CH2_START,
	},
	// 2.1 Lớp 6: Rời tổ
	[Chapter2DialogueID.CH2_START]: {
		speaker: 'narrator',
		text: 'Bạn vào học nội trú tại FPT School. Một môi trường kỷ luật, hiện đại và đầy tính cạnh tranh.',
		textVi:
			'Bạn vào học nội trú tại FPT School. Một môi trường kỷ luật, hiện đại và đầy tính cạnh tranh.',
		textEn:
			'You entered boarding school at FPT School. A disciplined, modern, and competitive environment.',
		next: Chapter2DialogueID.CH2_FPT_2,
	},
	[Chapter2DialogueID.CH2_END]: {
		speaker: 'player',
		text: '(Khám phá phòng kho bụi bặm) Cái gì đây? Màn hình cũ kỹ này còn sáng được sao?',
		textVi:
			'(Khám phá phòng kho bụi bặm) Cái gì đây? Màn hình cũ kỹ này còn sáng được sao?',
		textEn:
			"(Exploring dusty storage) What's this? This old monitor still works?",
		next: Chapter2DialogueID.CH2_END_DISCOVERY,
	},
	[Chapter2DialogueID.CH2_END_DISCOVERY]: {
		speaker: 'narrator',
		text: 'Màn hình CRT bỗng sáng lên. Dòng lệnh nhấp nháy màu xanh lá. Một cánh cửa bí mật vừa hé mở.',
		textVi:
			'Màn hình CRT bỗng sáng lên. Dòng lệnh nhấp nháy màu xanh lá. Một cánh cửa bí mật vừa hé mở.',
		textEn:
			'CRT monitor flickered on. Green blinking cursor. A secret door cracked open.',
		next: Chapter3DialogueID.CH3_INTRO,
	},
	[Chapter2DialogueID.CH2_FPT_2]: {
		speaker: 'narrator',
		text: 'Bạn mang theo niềm kiêu hãnh của "thiếu gia Lào Cai". Hào phóng bao bạn bè, dùng đồ hiệu. Nhưng sâu bên trong, bạn thấy cô đơn.',
		textVi:
			'Bạn mang theo niềm kiêu hãnh của "thiếu gia Lào Cai". Hào phóng bao bạn bè, dùng đồ hiệu. Nhưng sâu bên trong, bạn thấy cô đơn.',
		textEn:
			'You carried the pride of the "Lao Cai young master". Treating friends, using branded goods. But deep down, lonely.',
		next: Chapter2DialogueID.CH2_FPT_LONELY,
	},
	[Chapter2DialogueID.CH2_FPT_LONELY]: {
		speaker: 'player',
		text: '(Nằm nghe tiếng mưa) Nhớ nhà quá. Nhớ tiếng chó sủa, nhớ tiếng công kêu. Ở đây chỉ có tiếng mưa lạnh lẽo.',
		textVi:
			'(Nằm nghe tiếng mưa) Nhớ nhà quá. Nhớ tiếng chó sủa, nhớ tiếng công kêu. Ở đây chỉ có tiếng mưa lạnh lẽo.',
		textEn:
			'(Listening to rain) I miss home. Miss the barking dogs, the calling peacocks. Here, only cold rain.',
		next: Chapter2DialogueID.CH2_INTERNET_START, // Redirect to Internet Escape
	},

	// NEW: Internet Escape Event
	[Chapter2DialogueID.CH2_INTERNET_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Cổng trường có quán Net mới mở. Mấy đứa bạn rủ ra đó "giải khuây".',
		textVi:
			'(Suy nghĩ) Cổng trường có quán Net mới mở. Mấy đứa bạn rủ ra đó "giải khuây".',
		textEn:
			'(Thinking) New Net cafe opened near school. Friends invited to "relax" there.',
		choices: [
			{
				id: 'choice_internet_go',
				text: 'Đi Net: Quên hết sự đời',
				textVi: 'Đi Net: Quên hết sự đời',
				textEn: 'Go to Net: Forget everything',
				effects: [
					{ stat: StatID.STRESS, value: -4 },
					{ stat: StatID.VISION, value: -2 },
					{ stat: StatID.MONEY, value: -20000 },
				],
				next: Chapter2DialogueID.CH2_OVERFLOW_1,
			},
			{
				id: 'choice_internet_stay',
				text: 'Ở lại thư viện: Đọc sách',
				textVi: 'Ở lại thư viện: Đọc sách',
				textEn: 'Stay in library: Read books',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.STRESS, value: 1 },
				],
				next: Chapter2DialogueID.CH2_OVERFLOW_1,
			},
		],
	},

	// 2.2 Sự cố Stack Overflow
	[Chapter2DialogueID.CH2_OVERFLOW_1]: {
		speaker: 'boQ',
		text: '(Điện thoại với đối tác) "Anh tin tôi đi! 3 dự án mà! Đường cao tốc, kè sông, khu đô thị - tôi làm được hết! Lào Cai ai không biết Q!"',
		textVi:
			'(Điện thoại với đối tác) "Anh tin tôi đi! 3 dự án mà! Đường cao tốc, kè sông, khu đô thị - tôi làm được hết! Lào Cai ai không biết Q!"',
		textEn:
			'(Phone with partner) "Trust me! 3 projects! Highway, embankment, urban area - I can handle all! Everyone in Lao Cai knows Q!"',
		next: Chapter2DialogueID.CH2_OVERFLOW_MINDSET,
	},
	[Chapter2DialogueID.CH2_OVERFLOW_MINDSET]: {
		speaker: 'meQ',
		text: '(Lo lắng) "Anh ơi, tiền đâu ra mà làm cả 3 dự án? Em sợ lắm..."',
		textVi: '(Lo lắng) "Anh ơi, tiền đâu ra mà làm cả 3 dự án? Em sợ lắm..."',
		textEn:
			'(Worried) "Dear, where will we get money for 3 projects? I\'m scared..."',
		next: Chapter2DialogueID.CH2_OVERFLOW_REPLY,
	},
	[Chapter2DialogueID.CH2_OVERFLOW_REPLY]: {
		speaker: 'boQ',
		text: '"Đừng lo! Đánh nhanh thắng nhanh! Làm xong 3 cái này là mình khẳng định vị thế số 1 rồi!"',
		textVi:
			'"Đừng lo! Đánh nhanh thắng nhanh! Làm xong 3 cái này là mình khẳng định vị thế số 1 rồi!"',
		textEn: '"Don\'t worry! Blitzkrieg! Finish these 3 and we\'ll be #1!"',
		next: Chapter2DialogueID.CH2_OVERFLOW_BUG,
	},
	[Chapter2DialogueID.CH2_OVERFLOW_BUG]: {
		speaker: 'npc',
		text: 'Nhân viên: (Điện thoại) "Sếp ơi, lô thép này chưa kiểm định kỹ lắm. Có xuất luôn không ạ? Để đẩy nhanh tiến độ..."',
		textVi:
			'Nhân viên: (Điện thoại) "Sếp ơi, lô thép này chưa kiểm định kỹ lắm. Có xuất luôn không ạ? Để đẩy nhanh tiến độ..."',
		textEn:
			'Employee: (Phone) "Boss, this steel batch wasn\'t thoroughly checked. Should we ship it? To speed up progress..."',
		next: Chapter2DialogueID.CH2_OVERFLOW_2,
	},
	[Chapter2DialogueID.CH2_OVERFLOW_2]: {
		speaker: 'boQ',
		text: '(Hét vào điện thoại) "Lô thép đó bị lỗi thì hủy đi! Tại sao lại tiếc rẻ mà xuất đi? Giờ khách hàng kiện thì bán nhà cũng không đền nổi đâu!"',
		textVi:
			'(Hét vào điện thoại) "Lô thép đó bị lỗi thì hủy đi! Tại sao lại tiếc rẻ mà xuất đi? Giờ khách hàng kiện thì bán nhà cũng không đền nổi đâu!"',
		textEn:
			'(Shouting on phone) "If that steel batch is faulty, scrap it! Why ship it? Now if they sue, selling the house won\'t cover it!"',
		next: Chapter2DialogueID.CH2_OVERFLOW_COLLAPSE,
	},
	[Chapter2DialogueID.CH2_OVERFLOW_COLLAPSE]: {
		speaker: 'npc',
		text: 'Thanh tra: "Anh Q, dự án đình chỉ. Chúng tôi phát hiện vật liệu không đạt chuẩn."',
		textVi:
			'Thanh tra: "Anh Q, dự án đình chỉ. Chúng tôi phát hiện vật liệu không đạt chuẩn."',
		textEn:
			'Inspector: "Mr. Q, project suspended. We found substandard materials."',
		next: Chapter2DialogueID.CH2_BANK_CALL,
	},
	[Chapter2DialogueID.CH2_BANK_CALL]: {
		speaker: 'npc',
		text: 'Ngân hàng: (Điện thoại) "Anh Q, margin call. Anh phải thanh toán ngay trong 24h hoặc chúng tôi sẽ phong tỏa tài sản."',
		textVi:
			'Ngân hàng: (Điện thoại) "Anh Q, margin call. Anh phải thanh toán ngay trong 24h hoặc chúng tôi sẽ phong tỏa tài sản."',
		textEn:
			'Bank: (Phone) "Mr. Q, margin call. You must pay within 24h or we seize assets."',
		next: Chapter2DialogueID.CH2_FATHER_COLLAPSE,
	},
	[Chapter2DialogueID.CH2_FATHER_COLLAPSE]: {
		speaker: 'narrator',
		text: 'Bố buông điện thoại, người trượt dài xuống ghế. Chỉ sau một đêm, tóc bố bạc đi một nửa.',
		textVi:
			'Bố buông điện thoại, người trượt dài xuống ghế. Chỉ sau một đêm, tóc bố bạc đi một nửa.',
		textEn:
			'Father dropped phone, slid down chair. Overnight, hair turned half gray.',
		next: Chapter2DialogueID.CH2_CRASH_1,
	},

	// 2.3 System Crash
	[Chapter2DialogueID.CH2_CRASH_1]: {
		speaker: 'narrator',
		text: 'Đang trong giờ học Toán, giám thị gọi bạn ra ngoài. Mẹ đang đợi ở cổng trường, mắt đỏ hoe.',
		textVi:
			'Đang trong giờ học Toán, giám thị gọi bạn ra ngoài. Mẹ đang đợi ở cổng trường, mắt đỏ hoe.',
		textEn:
			'During Math class, supervisor called you out. Mom was waiting at the gate, eyes red.',
		next: Chapter2DialogueID.CH2_MOM_CALL,
	},
	[Chapter2DialogueID.CH2_MOM_CALL]: {
		speaker: 'npc',
		text: '"Về thôi con. Nhà mình... mất hết rồi. Bố con đang đợi ở nhà."',
		textVi: '"Về thôi con. Nhà mình... mất hết rồi. Bố con đang đợi ở nhà."',
		textEn:
			'"Let\'s go home, son. We... lost everything. Your dad is waiting."',
		next: Chapter2DialogueID.CH2_CRASH_2,
	},
	[Chapter2DialogueID.CH2_CRASH_2]: {
		speaker: 'narrator',
		text: 'Bạn về lại Lào Cai. Biệt thự 4.000m² bị niêm phong. Đà điểu, công, khỉ đã bị bán tháo.',
		textVi:
			'Bạn về lại Lào Cai. Biệt thự 4.000m² bị niêm phong. Đà điểu, công, khỉ đã bị bán tháo.',
		textEn:
			'Back in Lao Cai. Mansion sealed. Ostriches, peacocks, monkeys sold off.',
		next: Chapter2DialogueID.CH2_CRASH_DOGS,
	},
	[Chapter2DialogueID.CH2_CRASH_DOGS]: {
		speaker: 'player',
		text: '(Hoảng hốt) Bi đâu? Đội vệ sĩ 15 con chó đâu rồi?',
		textVi: '(Hoảng hốt) Bi đâu? Đội vệ sĩ 15 con chó đâu rồi?',
		textEn: '(Panicked) Where is Bi? Where are the 15 guard dogs?',
		next: Chapter2DialogueID.CH2_CRASH_3,
	},
	[Chapter2DialogueID.CH2_CRASH_3]: {
		speaker: 'narrator',
		text: 'Chúng đã bị bắt đi gán nợ hoặc chạy tán loạn. Bố ngồi trên bậc thềm đá, hút thuốc. Lần đầu tiên bạn thấy bố già đi chục tuổi. Người khổng lồ đã gục ngã.',
		textVi:
			'Chúng đã bị bắt đi gán nợ hoặc chạy tán loạn. Bố ngồi trên bậc thềm đá, hút thuốc. Lần đầu tiên bạn thấy bố già đi chục tuổi. Người khổng lồ đã gục ngã.',
		textEn:
			'Taken for debt or scattered. Father sat on stone steps, smoking. Looked 10 years older. The giant had fallen.',
		next: Chapter2DialogueID.CH2_CRASH_4,
	},
	[Chapter2DialogueID.CH2_CRASH_4]: {
		speaker: 'boQ',
		text: '"Bố xin lỗi. Bố đã quá tự tin. Bố đã đánh cược cả tương lai của con."',
		textVi:
			'"Bố xin lỗi. Bố đã quá tự tin. Bố đã đánh cược cả tương lai của con."',
		textEn: '"I\'m sorry. I was too confident. I gambled with your future."',
		next: Chapter2DialogueID.CH2_CRASH_REACTION,
	},
	[Chapter2DialogueID.CH2_CRASH_REACTION]: {
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
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter2DialogueID.CH2_COUNTRYSIDE_1,
			},
			{
				id: 'choice_silent_dad',
				text: '(Im lặng nắm tay bố)',
				textVi: '(Im lặng nắm tay bố)',
				textEn: "(Silently hold Dad's hand)",
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter2DialogueID.CH2_COUNTRYSIDE_1,
			},
		],
	},
	[Chapter2DialogueID.CH2_CRASH_LESSON]: {
		speaker: 'narrator',
		text: 'Hình tượng người hùng vỡ vụn. Một nỗi sợ hãi mơ hồ hình thành: Sự giàu sang thật mong manh.',
		textVi:
			'Hình tượng người hùng vỡ vụn. Một nỗi sợ hãi mơ hồ hình thành: Sự giàu sang thật mong manh.',
		textEn: 'Hero image shattered. A vague fear formed: Wealth is fragile.',
		effects: [{ stat: StatID.STEELMIND, value: 3 }],
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_1,
	},

	// 2.4 Cold Boot ở quê
	[Chapter2DialogueID.CH2_COUNTRYSIDE_1]: {
		speaker: 'narrator',
		text: 'Cả gia đình dắt díu nhau về quê nội. Không còn biệt thự, chỉ còn căn nhà cấp 4 dột nát. Bố mẹ ly thân tạm thời. Bố ở lại Lào Cai giải quyết nợ.',
		textVi:
			'Cả gia đình dắt díu nhau về quê nội. Không còn biệt thự, chỉ còn căn nhà cấp 4 dột nát. Bố mẹ ly thân tạm thời. Bố ở lại Lào Cai giải quyết nợ.',
		textEn:
			'Family moved to countryside. Dilapidated cottage. Parents separated temporarily. Father stayed in Lao Cai for debts.',
		next: Chapter2DialogueID.CH2_BREAKFAST_START,
	},

	// NEW: Breakfast Event
	[Chapter2DialogueID.CH2_BREAKFAST_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Sáng sớm đi học xa. Bụng đói cồn cào. Mẹ cho 5 nghìn ăn sáng.',
		textVi:
			'(Suy nghĩ) Sáng sớm đi học xa. Bụng đói cồn cào. Mẹ cho 5 nghìn ăn sáng.',
		textEn:
			'(Thinking) Early morning school. Stomach growling. Mom gave 5k for breakfast.',
		choices: [
			{
				id: 'choice_breakfast_skip',
				text: 'Nhịn ăn: Tiết kiệm tiền mua sách (+5k)',
				textVi: 'Nhịn ăn: Tiết kiệm tiền mua sách (+5k)',
				textEn: 'Skip: Save for books (+5k)',
				effects: [
					{ stat: StatID.MONEY, value: 5000 },
					{ stat: StatID.HEALTH, value: -1 },
				],
				next: Chapter2DialogueID.CH2_HEALTH_COLLAPSE,
			},
			{
				id: 'choice_breakfast_eat',
				text: 'Ăn xôi: Có thực mới vực được đạo',
				textVi: 'Ăn xôi: Có thực mới vực được đạo',
				textEn: 'Eat sticky rice: Health first',
				effects: [{ stat: StatID.HEALTH, value: 2 }],
				next: Chapter2DialogueID.CH2_COUNTRYSIDE_2,
			},
		],
	},
	[Chapter2DialogueID.CH2_COUNTRYSIDE_2]: {
		speaker: 'narrator',
		text: 'Mùa đông miền Bắc rét cắt da cắt thịt. Nhà không có lò sưởi, gió lùa qua khe cửa.',
		textVi:
			'Mùa đông miền Bắc rét cắt da cắt thịt. Nhà không có lò sưởi, gió lùa qua khe cửa.',
		textEn:
			'Northern winter was bone-chilling. No heater, wind whistling through door cracks.',
		next: Chapter2DialogueID.CH2_THEFT_START, // Redirect to Theft Event
	},

	// NEW: Health Collapse Chain
	[Chapter2DialogueID.CH2_HEALTH_COLLAPSE]: {
		speaker: 'narrator',
		text: 'Vì nhịn ăn và lạnh, bạn bị tụt huyết áp ngất xỉu giữa lớp. Tiền thuốc men tốn gấp đôi số tiền bạn tiết kiệm được.',
		textVi:
			'Vì nhịn ăn và lạnh, bạn bị tụt huyết áp ngất xỉu giữa lớp. Tiền thuốc men tốn gấp đôi số tiền bạn tiết kiệm được.',
		textEn:
			'Due to hunger and cold, you fainted in class. Medical bills cost double what you saved.',
		effects: [
			{ stat: StatID.MONEY, value: -50000 },
			{ stat: StatID.HEALTH, value: -4 },
			{ stat: StatID.VISION, value: -2 }, // Missed lessons
		],
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_2,
	},

	// NEW: The Theft Event
	[Chapter2DialogueID.CH2_THEFT_START]: {
		speaker: 'narrator',
		text: 'Giờ ra chơi, bạn thấy trên bàn giáo viên có tờ 50k ai đó để quên. Bụng bạn đang đói cồn cào.',
		textVi:
			'Giờ ra chơi, bạn thấy trên bàn giáo viên có tờ 50k ai đó để quên. Bụng bạn đang đói cồn cào.',
		textEn:
			"Recess time. You saw a 50k note left on teacher's desk. Your stomach is growling.",
		choices: [
			{
				id: 'choice_theft_take',
				text: 'Lấy trộm: Cần tiền ăn (Money +50k)',
				textVi: 'Lấy trộm: Cần tiền ăn (Money +50k)',
				textEn: 'Steal it: Need food money (Money +50k)',
				effects: [
					{ stat: StatID.MONEY, value: 50000 },
					{ stat: StatID.HUMANITY, value: -7 },
					{ stat: StatID.STEELMIND, value: -3 }, // Guilt
				],
				next: Chapter2DialogueID.CH2_THEFT_GUILT,
			},
			{
				id: 'choice_theft_ignore',
				text: 'Bỏ qua: Đói cho sạch, rách cho thơm',
				textVi: 'Bỏ qua: Đói cho sạch, rách cho thơm',
				textEn: 'Ignore: Starve but stay clean',
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.HEALTH, value: -1 }, // Still hungry
				],
				next: Chapter2DialogueID.CH2_NEIGHBOR_MOCK,
			},
		],
	},
	[Chapter2DialogueID.CH2_THEFT_GUILT]: {
		speaker: 'player',
		text: '(Suy nghĩ) Mình đã trở thành kẻ cắp sao? Miếng bánh mì này sao đắng ngắt...',
		textVi:
			'(Suy nghĩ) Mình đã trở thành kẻ cắp sao? Miếng bánh mì này sao đắng ngắt...',
		textEn: '(Thinking) Have I become a thief? This bread tastes so bitter...',
		next: Chapter2DialogueID.CH2_NEIGHBOR_MOCK,
	},
	[Chapter2DialogueID.CH2_NEIGHBOR_MOCK]: {
		speaker: 'npc',
		text: 'Hàng xóm đi qua, chỉ trỏ: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra."',
		textVi:
			'Hàng xóm đi qua, chỉ trỏ: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra."',
		textEn:
			'Neighbors passed by, pointing: "See, used to be so arrogant. Now look at them."',
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_3,
	},
	[Chapter2DialogueID.CH2_COUNTRYSIDE_3]: {
		speaker: 'player',
		text: '(Gánh nước từ giếng khơi về) Nặng quá... ngày xưa bám nút là có nước, giờ phải tự gánh.',
		textVi:
			'(Gánh nước từ giếng khơi về) Nặng quá... ngày xưa bám nút là có nước, giờ phải tự gánh.',
		textEn:
			'(Carrying water from well) So heavy... used to turn a tap, now must carry myself.',
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_CHORES,
	},
	[Chapter2DialogueID.CH2_COUNTRYSIDE_CHORES]: {
		speaker: 'meQ',
		text: 'Con ơi, nấu cơm bằng bếp rơm nhé. Rơm không đủ thì ra sân nhặt rác lá khô.',
		textVi:
			'Con ơi, nấu cơm bằng bếp rơm nhé. Rơm không đủ thì ra sân nhặt rác lá khô.',
		textEn:
			'Son, cook rice with straw stove. If not enough straw, collect dried leaves from yard.',
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_FRIENDS,
	},
	[Chapter2DialogueID.CH2_COUNTRYSIDE_FRIENDS]: {
		speaker: 'npc',
		text: 'Bạn cũ: (Đi qua) "Thằng công tử sa cơ đấy! Đừng chơi với nó, còn lây bệnh."',
		textVi:
			'Bạn cũ: (Đi qua) "Thằng công tử sa cơ đấy! Đừng chơi với nó, còn lây bệnh."',
		textEn:
			'Old friend: (Passing by) "The fallen prince! Don\'t play with him, might catch poverty."',
		next: Chapter2DialogueID.CH2_COUNTRYSIDE_STEEL,
	},
	[Chapter2DialogueID.CH2_COUNTRYSIDE_STEEL]: {
		speaker: 'narrator',
		text: 'Bạn nhận ra rằng khi không còn tiền, lòng tự trọng là thứ duy nhất giữ bạn đứng thẳng. Bạn học cách phớt lờ những lời xì xào.',
		textVi:
			'Bạn nhận ra rằng khi không còn tiền, lòng tự trọng là thứ duy nhất giữ bạn đứng thẳng. Bạn học cách phớt lờ những lời xì xào.',
		textEn:
			'Realized without money, self-esteem is all that keeps you standing. Learned to ignore whispers.',
		effects: [{ stat: StatID.STEELMIND, value: 3 }],
		next: Chapter2DialogueID.CH2_CRAB_START,
	},

	// NEW: Crab Event
	[Chapter2DialogueID.CH2_CRAB_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Chiều về, lũ bạn rủ đi mò cua bắt ốc bán lấy tiền.',
		textVi: '(Suy nghĩ) Chiều về, lũ bạn rủ đi mò cua bắt ốc bán lấy tiền.',
		textEn:
			'(Thinking) Afternoon, friends invite to catch crabs/snails to sell.',
		choices: [
			{
				id: 'choice_crab_go',
				text: 'Đi luôn: Kiếm thêm thu nhập (Health -2)',
				textVi: 'Đi luôn: Kiếm thêm thu nhập (Health -2)',
				textEn: 'Go: Earn extra income (Health -2)',
				effects: [
					{ stat: StatID.MONEY, value: 5000 },
					{ stat: StatID.HEALTH, value: -1 },
				],
				next: Chapter2DialogueID.CH2_CRAB_GO,
			},
			{
				id: 'choice_crab_skip',
				text: 'Về học: Tương lai quan trọng hơn',
				textVi: 'Về học: Tương lai quan trọng hơn',
				textEn: 'Study: Future matters',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter2DialogueID.CH2_MENTOR_1,
			},
		],
	},
	[Chapter2DialogueID.CH2_CRAB_GO]: {
		speaker: 'narrator',
		text: 'Bạn lấm lem bùn đất, nhưng cầm 5 nghìn trên tay thấy vui vui.',
		textVi: 'Bạn lấm lem bùn đất, nhưng cầm 5 nghìn trên tay thấy vui vui.',
		textEn: 'Muddy, but holding 5k makes you happy.',
		next: Chapter2DialogueID.CH2_MENTOR_1,
	},

	// 2.5 Người thầy vĩ đại
	[Chapter2DialogueID.CH2_MENTOR_1]: {
		speaker: 'narrator',
		text: 'Bố giải quyết xong vụ kiện tụng (dù vẫn nợ đầm đìa), cùng về Hà Nội với mẹ con. Bố không đi trốn, không nát rượu. Bố bình tĩnh vẽ lại bản đồ cuộc đời.',
		textVi:
			'Bố giải quyết xong vụ kiện tụng (dù vẫn nợ đầm đìa), cùng về Hà Nội với mẹ con. Bố không đi trốn, không nát rượu. Bố bình tĩnh vẽ lại bản đồ cuộc đời.',
		textEn:
			"Father settled lawsuits (still in debt), brought family to Hanoi. Didn't run, didn't drink. Calmly redrew life map.",
		next: Chapter2DialogueID.CH2_MENTOR_2,
	},
	[Chapter2DialogueID.CH2_MENTOR_2]: {
		speaker: 'boQ',
		text: '"Xây cầu có thể sập vì thiên tai, vì cơ chế. Nhưng xây phần mềm thì con nắm quyền kiểm soát trong tay. Nếu sai, con có thể sửa (Debug). Học lập trình đi con."',
		textVi:
			'"Xây cầu có thể sập vì thiên tai, vì cơ chế. Nhưng xây phần mềm thì con nắm quyền kiểm soát trong tay. Nếu sai, con có thể sửa (Debug). Học lập trình đi con."',
		textEn:
			'"Bridges collapse due to disasters/policy. Software is in your control. If wrong, you can Debug. Learn programming, son."',
		next: Chapter2DialogueID.CH2_MENTOR_3,
	},
	[Chapter2DialogueID.CH2_MENTOR_3]: {
		speaker: 'narrator',
		text: 'Bố vay mượn mua cho bạn bộ máy tính cũ. Bố là người đầu tiên đặt tay bạn lên bàn phím, dạy bạn tư duy hệ thống (System Thinking) dù bố không biết code.',
		textVi:
			'Bố vay mượn mua cho bạn bộ máy tính cũ. Bố là người đầu tiên đặt tay bạn lên bàn phím, dạy bạn tư duy hệ thống (System Thinking) dù bố không biết code.',
		textEn:
			"Father borrowed to buy old PC. Put your hands on keyboard. Taught System Thinking though he couldn't code.",
		effects: [{ stat: StatID.VISION, value: 3 }],
		choices: [
			{
				id: 'choice_accept_destiny',
				text: 'Nghe lời bố, bắt đầu học Code',
				textVi: 'Nghe lời bố, bắt đầu học Code',
				textEn: 'Listen to father, start coding',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter3DialogueID.CH3_INTRO,
			},
		],
	},
};
