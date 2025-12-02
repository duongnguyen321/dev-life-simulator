// ==========================================
// CHAPTER 4: RUNTIME ERROR (LỖI THỜI GIAN CHẠY)
// Timeline: 19-21 tuổi
// Theme: Sự tan vỡ, Nỗi nhục và Sự trưởng thành đau đớn
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter4: Chapter = {
	id: 4,
	name: 'Runtime Error',
	nameVi: 'Runtime Error',
	nameEn: 'Runtime Error',
	ageRange: '19-21 tuổi',
	theme: 'Sự tan vỡ, Nỗi nhục và Sự trưởng thành đau đớn',
	themeVi: 'Sự tan vỡ, Nỗi nhục và Sự trưởng thành đau đớn',
	themeEn: 'Brokenness, Humiliation, and Painful Growth',
	scenes: [
		{
			id: 'ch4_funeral',
			name: 'Đám giỗ tủi nhục',
			nameVi: 'Năm 2 ĐH: Đám giỗ tủi nhục',
			nameEn: 'Year 2 Uni: Humiliating Funeral',
			background: '/assets/sprites/backgrounds/funeral_countryside.png',
			music: '/assets/audio/music/chapters/ch4_sadness.mp3',
			dialogueStart: 'ch4_funeral_1',
		},
		{
			id: 'ch4_divorce',
			name: 'Lá đơn ly hôn',
			nameVi: 'Lá đơn ly hôn (System Failure)',
			nameEn: 'The Divorce Papers (System Failure)',
			background: '/assets/sprites/backgrounds/home_broken.png',
			music: '/assets/audio/music/chapters/ch4_sadness.mp3',
			dialogueStart: 'ch4_divorce_1',
		},
		{
			id: 'ch4_independence',
			name: 'Tự lập',
			nameVi: 'Năm 3 ĐH: Tự lập & Bi',
			nameEn: 'Year 3 Uni: Independence & Bi',
			background: '/assets/sprites/backgrounds/dorm_room_pc.png',
			music: '/assets/audio/music/chapters/ch4_sadness.mp3',
			dialogueStart: 'ch4_independence_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch4_todo_freelance',
				text: 'Bùng học làm freelance',
				textVi: 'Bùng học làm freelance',
				textEn: 'Skip class for freelance work',
				effects: [{ stat: 'vision', value: 1 }],
				reward: { money: 1 },
			},
			{
				id: 'ch4_todo_adopt_bi',
				text: 'Nhận nuôi Bi (Corgi)',
				textVi: 'Nhận nuôi Bi (Corgi)',
				textEn: 'Adopt Bi (Corgi)',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch4_todo_code_hard',
				text: 'Cày code 16 tiếng/ngày',
				textVi: 'Cày code 16 tiếng/ngày',
				textEn: 'Code 16 hours/day',
				effects: [{ stat: 'vision', value: 2 }],
				cost: { health: 1, stress: 1 },
			},
			{
				id: 'ch4_todo_eat_noodle',
				text: 'Ăn mì tôm qua ngày',
				textVi: 'Ăn mì tôm qua ngày',
				textEn: 'Survive on instant noodles',
				cost: { health: 1 },
				reward: { money: 1 },
			},
			{
				id: 'ch4_todo_call_mom',
				text: 'Gọi điện cho mẹ',
				textVi: 'Gọi điện cho mẹ',
				textEn: 'Call Mom',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch4_todo_ignore_dad',
				text: 'Lờ đi cuộc gọi của bố',
				textVi: 'Lờ đi cuộc gọi của bố',
				textEn: "Ignore Dad's call",
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { humanity: 1 },
			},
			{
				id: 'ch4_todo_hackathon',
				text: 'Tham gia Hackathon',
				textVi: 'Tham gia Hackathon',
				textEn: 'Join Hackathon',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch4_todo_fix_bug_friend',
				text: 'Sửa bug giúp bạn',
				textVi: 'Sửa bug giúp bạn',
				textEn: 'Fix bug for friend',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch4_todo_play_lol',
				text: 'Chơi LoL giải trí',
				textVi: 'Chơi LoL giải trí',
				textEn: 'Play LoL for fun',
				reward: { stress: -1 },
			},
			{
				id: 'ch4_todo_read_clean_code',
				text: 'Đọc sách "Clean Code"',
				textVi: 'Đọc sách "Clean Code"',
				textEn: 'Read "Clean Code"',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch4_todo_drink_coffee',
				text: 'Uống cafe đen đá không đường',
				textVi: 'Uống cafe đen đá không đường',
				textEn: 'Drink black coffee no sugar',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch4_todo_sleep_lab',
				text: 'Ngủ lại phòng Lab',
				textVi: 'Ngủ lại phòng Lab',
				textEn: 'Sleep in Lab',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch4_todo_flirt',
				text: 'Tán tỉnh em khóa dưới',
				textVi: 'Tán tỉnh em khóa dưới',
				textEn: 'Flirt with junior',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch4_todo_argue_team',
				text: 'Cãi nhau với team',
				textVi: 'Cãi nhau với team',
				textEn: 'Argue with team',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch4_todo_dream_silicon',
				text: 'Mơ về Silicon Valley',
				textVi: 'Mơ về Silicon Valley',
				textEn: 'Dream of Silicon Valley',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch4_todo_buy_keyboard',
				text: 'Mua bàn phím cơ xịn',
				textVi: 'Mua bàn phím cơ xịn',
				textEn: 'Buy mechanical keyboard',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 1 },
			},
			{
				id: 'ch4_todo_skip_shower',
				text: 'Lười tắm',
				textVi: 'Lười tắm',
				textEn: 'Skip shower',
				effects: [{ stat: 'vision', value: 1 }], // Tiết kiệm thời gian code
				cost: { humanity: 1 },
			},
			{
				id: 'ch4_todo_mentor',
				text: 'Mentor cho sinh viên năm nhất',
				textVi: 'Mentor cho sinh viên năm nhất',
				textEn: 'Mentor freshman',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch4_todo_apply_intern',
				text: 'Nộp CV thực tập',
				textVi: 'Nộp CV thực tập',
				textEn: 'Apply for internship',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch4_todo_cry_toilet',
				text: 'Khóc trong nhà vệ sinh',
				textVi: 'Khóc trong nhà vệ sinh',
				textEn: 'Cry in toilet',
				reward: { stress: -1 },
				cost: { steelMind: 1 },
			},
		],
		dreamQuestions: [
			{
				id: 'ch4_dream_funeral',
				text: 'Bạn mơ thấy lại đám giỗ tủi nhục năm ấy.',
				textVi: 'Bạn mơ thấy lại đám giỗ tủi nhục năm ấy.',
				textEn: 'You dream of that humiliating funeral again.',
				choices: [
					{
						id: 'ch4_dream_funeral_cry',
						text: 'Khóc vì tủi thân',
						textVi: 'Khóc vì tủi thân',
						textEn: 'Cry out of self-pity',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch4_dream_funeral_stoic',
						text: 'Lạnh lùng không cảm xúc',
						textVi: 'Lạnh lùng không cảm xúc',
						textEn: 'Cold and emotionless',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch4_dream_funeral_regret',
						text: 'Thương bố',
						textVi: 'Thương bố',
						textEn: 'Pity Dad',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch4_dream_funeral_run',
						text: 'Chạy trốn khỏi đám đông',
						textVi: 'Chạy trốn khỏi đám đông',
						textEn: 'Run away from crowd',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
				],
			},
			{
				id: 'ch4_dream_bi',
				text: 'Bi (Corgi) nhìn bạn với ánh mắt của Bi (Alaska cũ).',
				textVi: 'Bi (Corgi) nhìn bạn với ánh mắt của Bi (Alaska cũ).',
				textEn: 'Bi (Corgi) looks at you with eyes of Bi (old Alaska).',
				choices: [
					{
						id: 'ch4_dream_bi_feed',
						text: 'Cho nó ăn',
						textVi: 'Cho nó ăn',
						textEn: 'Feed it',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch4_dream_bi_train',
						text: 'Huấn luyện nó nghiêm khắc',
						textVi: 'Huấn luyện nó nghiêm khắc',
						textEn: 'Train it strictly',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch4_dream_bi_ignore',
						text: 'Lờ nó đi',
						textVi: 'Lờ nó đi',
						textEn: 'Ignore it',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch4_dream_bi_sell',
						text: 'Bán nó lấy tiền',
						textVi: 'Bán nó lấy tiền',
						textEn: 'Sell it for money',
						next: '',
						effects: [{ stat: 'money', value: 1 }], // Cruel
					},
				],
			},
			{
				id: 'ch4_dream_grad',
				text: 'Bạn mơ thấy ngày tốt nghiệp.',
				textVi: 'Bạn mơ thấy ngày tốt nghiệp.',
				textEn: 'You dream of graduation day.',
				choices: [
					{
						id: 'ch4_dream_grad_happy',
						text: 'Cười hạnh phúc',
						textVi: 'Cười hạnh phúc',
						textEn: 'Smile happily',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch4_dream_grad_empty',
						text: 'Cảm thấy trống rỗng',
						textVi: 'Cảm thấy trống rỗng',
						textEn: 'Feel empty',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch4_dream_grad_proud',
						text: 'Tự hào vì đã vượt qua',
						textVi: 'Tự hào vì đã vượt qua',
						textEn: 'Proud to have overcome',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch4_dream_grad_scared',
						text: 'Sợ hãi tương lai',
						textVi: 'Sợ hãi tương lai',
						textEn: 'Scared of future',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
				],
			},
			{
				id: 'ch4_dream_interview',
				text: 'Bạn đang trong một buổi phỏng vấn xin việc.',
				textVi: 'Bạn đang trong một buổi phỏng vấn xin việc.',
				textEn: 'You are in a job interview.',
				choices: [
					{
						id: 'ch4_dream_interview_confident',
						text: 'Tự tin trả lời',
						textVi: 'Tự tin trả lời',
						textEn: 'Answer confidently',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch4_dream_interview_nervous',
						text: 'Run rẩy không nói nên lời',
						textVi: 'Run rẩy không nói nên lời',
						textEn: 'Tremble speechless',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch4_dream_interview_lie',
						text: 'Nói dối để được nhận',
						textVi: 'Nói dối để được nhận',
						textEn: 'Lie to get hired',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch4_dream_interview_honest',
						text: 'Thành thật về điểm yếu',
						textVi: 'Thành thật về điểm yếu',
						textEn: 'Honest about weaknesses',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
				],
			},
			{
				id: 'ch4_dream_room',
				text: 'Bạn thấy căn phòng trọ 15m2 trống trơn.',
				textVi: 'Bạn thấy căn phòng trọ 15m2 trống trơn.',
				textEn: 'You see the empty 15m2 room.',
				choices: [
					{
						id: 'ch4_dream_room_decorate',
						text: 'Trang trí nó',
						textVi: 'Trang trí nó',
						textEn: 'Decorate it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch4_dream_room_sleep',
						text: 'Nằm ngủ',
						textVi: 'Nằm ngủ',
						textEn: 'Sleep',
						next: '',
						effects: [{ stat: 'health', value: 1 }],
					},
					{
						id: 'ch4_dream_room_cry',
						text: 'Khóc một mình',
						textVi: 'Khóc một mình',
						textEn: 'Cry alone',
						next: '',
						effects: [{ stat: 'stress', value: -1 }],
					},
					{
						id: 'ch4_dream_room_work',
						text: 'Bật máy tính làm việc',
						textVi: 'Bật máy tính làm việc',
						textEn: 'Turn on PC and work',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
		],
	},
};

export const chapter4Dialogues: Record<string, DialogueNode> = {
	// 4.1 Đám giỗ
	ch4_funeral_1: {
		id: 'ch4_funeral_1',
		speaker: 'narrator',
		text: 'Năm 2 Đại học. Bà nội mất. Đám giỗ quan trọng nhất dòng họ. Các chú bác lái xe hơi bóng loáng về cổng làng.',
		textVi:
			'Năm 2 Đại học. Bà nội mất. Đám giỗ quan trọng nhất dòng họ. Các chú bác lái xe hơi bóng loáng về cổng làng.',
		textEn:
			'Year 2 Uni. Grandma passed. Important funeral. Uncles drove shiny cars to the village gate.',
		next: 'ch4_funeral_2',
	},
	ch4_funeral_2: {
		id: 'ch4_funeral_2',
		speaker: 'narrator',
		text: 'Gia đình bạn - từng giàu nhất - giờ phải đi nhờ xe họ hàng (LuxSA đã bán). Bố ngồi ghế phụ, im lặng suốt đường đi.',
		textVi:
			'Gia đình bạn - từng giàu nhất - giờ phải đi nhờ xe họ hàng (LuxSA đã bán). Bố ngồi ghế phụ, im lặng suốt đường đi.',
		textEn:
			'Your family - once richest - hitched a ride (LuxSA sold). Father sat in passenger seat, silent all the way.',
		next: 'ch4_funeral_3',
	},
	ch4_funeral_3: {
		id: 'ch4_funeral_3',
		speaker: 'npc',
		text: 'Họ hàng xì xào: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra. Đúng là không ai giàu ba họ."',
		textVi:
			'Họ hàng xì xào: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra. Đúng là không ai giàu ba họ."',
		textEn:
			'Relatives whispered: "See, used to be so arrogant. Now look at them. Wealth never lasts three generations."',
		next: 'ch4_funeral_reaction',
	},
	ch4_funeral_reaction: {
		id: 'ch4_funeral_reaction',
		speaker: 'player',
		text: 'Bạn sẽ phản ứng thế nào?',
		textVi: 'Bạn sẽ phản ứng thế nào?',
		textEn: 'How will you react?',
		choices: [
			{
				id: 'choice_silent_anger',
				text: '(Im lặng, nắm chặt tay)',
				textVi: '(Im lặng, nắm chặt tay)',
				textEn: '(Silence, clenching fists)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch4_funeral_oath',
			},
			{
				id: 'choice_polite_reply',
				text: 'Cháu cảm ơn, gia đình cháu vẫn ổn',
				textVi: 'Cháu cảm ơn, gia đình cháu vẫn ổn',
				textEn: 'Thanks, we are fine',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch4_funeral_oath',
			},
		],
	},
	ch4_funeral_oath: {
		id: 'ch4_funeral_oath',
		speaker: 'player',
		text: '(Thề thốt) Sẽ có ngày mình lấy lại tất cả những gì đã mất.',
		textVi: '(Thề thốt) Sẽ có ngày mình lấy lại tất cả những gì đã mất.',
		textEn: '(Oath) I will take back everything that was lost.',
		effects: [
			{ stat: 'steelMind', value: 2 },
			{ stat: 'humanity', value: -1 },
		],
		next: 'ch4_divorce_1',
	},

	// 4.2 Ly hôn
	ch4_divorce_1: {
		id: 'ch4_divorce_1',
		speaker: 'narrator',
		text: 'Ngay sau đám giỗ, vì nhục, bố lại lao vào dự án mới ở vùng sâu vùng xa bất chấp lời can ngăn. Mẹ không chịu nổi sự bấp bênh nữa.',
		textVi:
			'Ngay sau đám giỗ, vì nhục, bố lại lao vào dự án mới ở vùng sâu vùng xa bất chấp lời can ngăn. Mẹ không chịu nổi sự bấp bênh nữa.',
		textEn:
			"After funeral, humiliated, father joined risky remote project despite warnings. Mom couldn't take the insecurity.",
		next: 'ch4_divorce_2',
	},
	ch4_divorce_2: {
		id: 'ch4_divorce_2',
		speaker: 'npc',
		text: '"Mẹ không chịu nổi nữa rồi. Mẹ đi đây. Con ở lại chăm sóc bố và em."',
		textVi:
			'"Mẹ không chịu nổi nữa rồi. Mẹ đi đây. Con ở lại chăm sóc bố và em."',
		textEn:
			'"I can\'t take it anymore. I\'m leaving. You stay and take care of dad and your brother."',
		next: 'ch4_divorce_reaction',
	},
	ch4_divorce_reaction: {
		id: 'ch4_divorce_reaction',
		speaker: 'narrator',
		text: 'Mẹ xách vali đi, để lại căn nhà trống hoác. Bạn cầm tờ giấy ly hôn, không khóc, chỉ thấy mệt mỏi rã rời. Hệ thống gia đình Crash hoàn toàn (Unrecoverable Error).',
		textVi:
			'Mẹ xách vali đi, để lại căn nhà trống hoác. Bạn cầm tờ giấy ly hôn, không khóc, chỉ thấy mệt mỏi rã rời. Hệ thống gia đình Crash hoàn toàn (Unrecoverable Error).',
		textEn:
			"Mom packed and left, leaving an empty house. You held the divorce paper, didn't cry, just exhausted. Family system Crashed completely (Unrecoverable Error).",
		next: 'ch4_independence_1',
	},

	// 4.3 Tự lập & Bi
	ch4_independence_1: {
		id: 'ch4_independence_1',
		speaker: 'narrator',
		text: 'Bạn chuyển ra ở riêng tại một phòng trọ 15m2 ở Triều Khúc. Mùa hè 40 độ, không điều hòa. Bạn làm bạn với gián và mì tôm.',
		textVi:
			'Bạn chuyển ra ở riêng tại một phòng trọ 15m2 ở Triều Khúc. Mùa hè 40 độ, không điều hòa. Bạn làm bạn với gián và mì tôm.',
		textEn:
			'You moved out to a 15m2 room in Trieu Khuc. 40 degrees summer, no AC. Friends with cockroaches and instant noodles.',
		next: 'ch4_independence_rat_race',
	},
	ch4_independence_rat_race: {
		id: 'ch4_independence_rat_race',
		speaker: 'narrator',
		text: 'Nhìn dòng người chen chúc tắc đường mỗi sáng, bạn nhận ra mình đã chính thức gia nhập "Rat Race". Cuộc đua của những chú chuột.',
		textVi:
			'Nhìn dòng người chen chúc tắc đường mỗi sáng, bạn nhận ra mình đã chính thức gia nhập "Rat Race". Cuộc đua của những chú chuột.',
		textEn:
			'Watching the traffic jam every morning, you realized you officially joined the "Rat Race".',
		next: 'ch4_independence_money',
	},
	ch4_independence_money: {
		id: 'ch4_independence_money',
		speaker: 'boQ',
		text: '"Bố gửi con ít tiền sinh hoạt phí. Cầm lấy đi, đừng lo cho bố."',
		textVi: '"Bố gửi con ít tiền sinh hoạt phí. Cầm lấy đi, đừng lo cho bố."',
		textEn:
			'"I sent you some living allowance. Take it, don\'t worry about me."',
		next: 'ch4_independence_choice',
	},
	ch4_independence_choice: {
		id: 'ch4_independence_choice',
		speaker: 'player',
		text: 'Bạn đã kiếm được tiền từ outsource. Bạn sẽ nói gì?',
		textVi: 'Bạn đã kiếm được tiền từ outsource. Bạn sẽ nói gì?',
		textEn: 'You earned money from outsource. What will you say?',
		choices: [
			{
				id: 'choice_refuse_money',
				text: 'Con tự lo được (Từ chối)',
				textVi: 'Con tự lo được (Từ chối)',
				textEn: 'I can handle myself (Refuse)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch4_independence_quote',
			},
		],
	},
	ch4_independence_quote: {
		id: 'ch4_independence_quote',
		speaker: 'player',
		text: 'Bố cứ lo cho em. Con tự lo được. Con không cần tiền của bố nữa. Con là Developer mà, con có thể tự build cuộc đời mình.',
		textVi:
			'Bố cứ lo cho em. Con tự lo được. Con không cần tiền của bố nữa. Con là Developer mà, con có thể tự build cuộc đời mình.',
		textEn:
			"Take care of younger brother. I can handle myself. I don't need your money anymore. I am a Developer, I can build my own life.",
		next: 'ch4_bi_1',
	},
	ch4_bi_1: {
		id: 'ch4_bi_1',
		speaker: 'narrator',
		text: 'Trong lần bố về thăm em, bạn nhận ra con Miu không còn đó nữa. Bạn hỏi bố, bố lảng tránh...',
		textVi:
			'Trong lần bố về thăm em, bạn nhận ra con Miu không còn đó nữa. Bạn hỏi bố, bố lảng tránh...',
		textEn:
			'When father visited, you noticed Miu was gone. You asked, father evaded...',
		next: 'ch4_bi_truth',
	},
	ch4_bi_truth: {
		id: 'ch4_bi_truth',
		speaker: 'narrator',
		text: 'Có lẽ bố đã bán nó trong phút túng quẫn, hoặc vì đi làm xa không ai chăm sóc. Bạn không dám trách. Bạn hiểu cái nghèo nó bào mòn con người ta thế nào. Nhưng trong lòng bạn có một lỗ hổng lớn.',
		textVi:
			'Có lẽ bố đã bán nó trong phút túng quẫn, hoặc vì đi làm xa không ai chăm sóc. Bạn không dám trách. Bạn hiểu cái nghèo nó bào mòn con người ta thế nào. Nhưng trong lòng bạn có một lỗ hổng lớn.',
		textEn:
			'Perhaps father sold it in desperation, or abandoned due to no caretaker. You dared not blame. You understood how poverty erodes people. But a huge void formed in your heart.',
		next: 'ch4_bi_birthday',
	},
	ch4_bi_birthday: {
		id: 'ch4_bi_birthday',
		speaker: 'narrator',
		text: 'Sinh nhật 21 tuổi. Nhận được khoản thanh toán đầu tiên từ dự án outsource cho khách hàng Mỹ. Việc đầu tiên bạn làm: Mua một chú chó Corgi.',
		textVi:
			'Sinh nhật 21 tuổi. Nhận được khoản thanh toán đầu tiên từ dự án outsource cho khách hàng Mỹ. Việc đầu tiên bạn làm: Mua một chú chó Corgi.',
		textEn:
			'21st birthday. Got first payment from US outsource project. First thing you did: Buy a Corgi puppy.',
		next: 'ch4_bi_naming',
	},
	ch4_bi_naming: {
		id: 'ch4_bi_naming',
		speaker: 'narrator',
		text: 'Chú chó chân ngắn này mang cái tên của một người khổng lồ. Bi - tên chú Alaska đẹp nhất, trung thành nhất từng bảo vệ căn cứ địa 4.000m² ngày xưa.',
		textVi:
			'Chú chó chân ngắn này mang cái tên của một người khổng lồ. Bi - tên chú Alaska đẹp nhất, trung thành nhất từng bảo vệ căn cứ địa 4.000m² ngày xưa.',
		textEn:
			'This short-legged dog carries the name of a giant. Bi - the most beautiful, most loyal Alaska who guarded the 4,000m² fortress in golden days.',
		next: 'ch4_bi_meaning',
	},
	ch4_bi_meaning: {
		id: 'ch4_bi_meaning',
		speaker: 'narrator',
		text: 'Nó là sự tiếp nối. Nó là lời nhắc nhở về quá khứ huy hoàng mà bạn quyết tâm sẽ khôi phục lại. Nó là người bạn mới trong hành trình cô độc sắp tới.',
		textVi:
			'Nó là sự tiếp nối. Nó là lời nhắc nhở về quá khứ huy hoàng mà bạn quyết tâm sẽ khôi phục lại. Nó là người bạn mới trong hành trình cô độc sắp tới.',
		textEn:
			'It was a continuation. A reminder of the glorious past you vowed to restore. A new companion for the lonely journey ahead.',
		effects: [{ stat: 'vision', value: 1 }],
		choices: [
			{
				id: 'choice_welcome_bi',
				text: 'Chào mừng Bi (New Companion)',
				textVi: 'Chào mừng Bi (New Companion)',
				textEn: 'Welcome Bi (New Companion)',
				next: 'ch5_cv_1',
			},
		],
	},
};
