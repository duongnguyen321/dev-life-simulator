// ==========================================
// CHAPTER 4: RUNTIME ERROR (LỖI THỜI GIAN CHẠY)
// Timeline: 19-21 tuổi
// Theme: Sự tan vỡ, Nỗi nhục và Sự trưởng thành đau đớn
// ==========================================

import {
	Chapter4DialogueID,
	Chapter4SceneID,
	Chapter4TodoID,
	Chapter5DialogueID,
	ConditionType,
	FlagID,
	Operator,
	StatID,
} from '../enum';
import { type Chapter, type DialogueNode } from '../types';

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
			id: Chapter4SceneID.CH4_FUNERAL,
			name: 'Đám giỗ tủi nhục',
			nameVi: 'Năm 2 ĐH: Đám giỗ tủi nhục',
			nameEn: 'Year 2 Uni: Humiliating Funeral',
			background: '/assets/sprites/backgrounds/funeral_countryside.png',
			music: '/assets/audio/music/chapters/ch4_sadness.mp3',
			dialogueStart: Chapter4DialogueID.CH4_START,
		},
		{
			id: Chapter4SceneID.CH4_DIVORCE,
			name: 'Lá đơn ly hôn',
			nameVi: 'Lá đơn ly hôn (System Failure)',
			nameEn: 'The Divorce Papers (System Failure)',
			background: '/assets/sprites/backgrounds/university_gate.png',
			music: '/assets/audio/music/chapters/ch4_energetic.mp3',
			dialogueStart: Chapter4DialogueID.CH4_DIVORCE_1,
		},
		{
			id: Chapter4SceneID.CH4_INDEPENDENCE,
			name: 'Tự lập',
			nameVi: 'Năm 3 ĐH: Tự lập & Bi',
			nameEn: 'Year 3 Uni: Independence & Bi',
			background: '/assets/sprites/backgrounds/dorm_room_pc.png',
			music: '/assets/audio/music/chapters/ch4_sadness.mp3',
			dialogueStart: Chapter4DialogueID.CH4_INDEPENDENCE_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter4TodoID.CH4_TODO_CODE_HARD,
				text: 'Cày code 16 tiếng/ngày',
				textVi: 'Cày code 16 tiếng/ngày',
				textEn: 'Code 16 hours/day',
				effects: [{ stat: StatID.VISION, value: 4 }],
				cost: { health: 5, stress: 5 }, // Increased costs
			},

			{
				id: 'ch4_todo_call_mom',
				text: 'Gọi điện cho mẹ',
				textVi: 'Gọi điện cho mẹ',
				textEn: 'Call Mom',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch4_todo_ignore_dad',
				text: 'Lờ đi cuộc gọi của bố',
				textVi: 'Lờ đi cuộc gọi của bố',
				textEn: "Ignore Dad's call",
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { humanity: 5 }, // Increased Humanity cost
			},
			{
				id: 'ch4_todo_hackathon',
				text: 'Tham gia Hackathon',
				textVi: 'Tham gia Hackathon',
				textEn: 'Join Hackathon',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 3 },
			},
			{
				id: 'ch4_todo_fix_bug_friend',
				text: 'Sửa bug giúp bạn',
				textVi: 'Sửa bug giúp bạn',
				textEn: 'Fix bug for friend',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch4_todo_play_lol',
				text: 'Chơi LoL giải trí',
				textVi: 'Chơi LoL giải trí',
				textEn: 'Play LoL for fun',
				reward: { stress: -5 },
			},
			{
				id: 'ch4_todo_read_clean_code',
				text: 'Đọc sách "Clean Code"',
				textVi: 'Đọc sách "Clean Code"',
				textEn: 'Read "Clean Code"',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch4_todo_drink_coffee',
				text: 'Uống cafe đen đá không đường',
				textVi: 'Uống cafe đen đá không đường',
				textEn: 'Drink black coffee no sugar',
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { health: 2 },
			},
			{
				id: 'ch4_todo_sleep_lab',
				text: 'Ngủ lại phòng Lab',
				textVi: 'Ngủ lại phòng Lab',
				textEn: 'Sleep in Lab',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { health: 3 },
			},
			{
				id: 'ch4_todo_flirt',
				text: 'Tán tỉnh em khóa dưới',
				textVi: 'Tán tỉnh em khóa dưới',
				textEn: 'Flirt with junior',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
			},
			{
				id: 'ch4_todo_argue_team',
				text: 'Cãi nhau với team',
				textVi: 'Cãi nhau với team',
				textEn: 'Argue with team',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				cost: { stress: 3 },
			},
			{
				id: 'ch4_todo_dream_silicon',
				text: 'Mơ về Silicon Valley',
				textVi: 'Mơ về Silicon Valley',
				textEn: 'Dream of Silicon Valley',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},

			{
				id: 'ch4_todo_skip_shower',
				text: 'Lười tắm',
				textVi: 'Lười tắm',
				textEn: 'Skip shower',
				effects: [{ stat: StatID.VISION, value: 1 }], // Tiết kiệm thời gian code
				cost: { humanity: 2 },
			},
			{
				id: 'ch4_todo_mentor',
				text: 'Mentor cho sinh viên năm nhất',
				textVi: 'Mentor cho sinh viên năm nhất',
				textEn: 'Mentor freshman',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch4_todo_apply_intern',
				text: 'Nộp CV thực tập',
				textVi: 'Nộp CV thực tập',
				textEn: 'Apply for internship',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch4_todo_cry_toilet',
				text: 'Khóc trong nhà vệ sinh',
				textVi: 'Khóc trong nhà vệ sinh',
				textEn: 'Cry in toilet',
				reward: { stress: -5 },
				cost: { steelMind: 2 },
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch4_dream_funeral_stoic',
						text: 'Lạnh lùng không cảm xúc',
						textVi: 'Lạnh lùng không cảm xúc',
						textEn: 'Cold and emotionless',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch4_dream_funeral_regret',
						text: 'Thương bố',
						textVi: 'Thương bố',
						textEn: 'Pity Dad',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch4_dream_funeral_run',
						text: 'Chạy trốn khỏi đám đông',
						textVi: 'Chạy trốn khỏi đám đông',
						textEn: 'Run away from crowd',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch4_dream_bi_train',
						text: 'Huấn luyện nó nghiêm khắc',
						textVi: 'Huấn luyện nó nghiêm khắc',
						textEn: 'Train it strictly',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
					},
					{
						id: 'ch4_dream_bi_ignore',
						text: 'Lờ nó đi',
						textVi: 'Lờ nó đi',
						textEn: 'Ignore it',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch4_dream_bi_sell',
						text: 'Bán nó lấy tiền',
						textVi: 'Bán nó lấy tiền',
						textEn: 'Sell it for money',
						next: '',
						effects: [{ stat: StatID.MONEY, value: 1000000 }], // Cruel
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
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch4_dream_grad_empty',
						text: 'Cảm thấy trống rỗng',
						textVi: 'Cảm thấy trống rỗng',
						textEn: 'Feel empty',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch4_dream_grad_proud',
						text: 'Tự hào vì đã vượt qua',
						textVi: 'Tự hào vì đã vượt qua',
						textEn: 'Proud to have overcome',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch4_dream_grad_scared',
						text: 'Sợ hãi tương lai',
						textVi: 'Sợ hãi tương lai',
						textEn: 'Scared of future',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
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
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
					{
						id: 'ch4_dream_interview_nervous',
						text: 'Run rẩy không nói nên lời',
						textVi: 'Run rẩy không nói nên lời',
						textEn: 'Tremble speechless',
						next: '',
						effects: [{ stat: StatID.STRESS, value: 2 }],
					},
					{
						id: 'ch4_dream_interview_lie',
						text: 'Nói dối để được nhận',
						textVi: 'Nói dối để được nhận',
						textEn: 'Lie to get hired',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch4_dream_interview_honest',
						text: 'Thành thật về điểm yếu',
						textVi: 'Thành thật về điểm yếu',
						textEn: 'Honest about weaknesses',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
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
						effects: [{ stat: StatID.VISION, value: 2 }],
					},
					{
						id: 'ch4_dream_room_sleep',
						text: 'Nằm ngủ',
						textVi: 'Nằm ngủ',
						textEn: 'Sleep',
						next: '',
						effects: [{ stat: StatID.HEALTH, value: 2 }],
					},
					{
						id: 'ch4_dream_room_cry',
						text: 'Khóc một mình',
						textVi: 'Khóc một mình',
						textEn: 'Cry alone',
						next: '',
						effects: [{ stat: StatID.STRESS, value: -2 }],
					},
					{
						id: 'ch4_dream_room_work',
						text: 'Bật máy tính làm việc',
						textVi: 'Bật máy tính làm việc',
						textEn: 'Turn on PC and work',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch4_reflect_sleep_1',
			text: 'Chia tay rồi... trái tim đau nhưng vẫn phải tiếp tục.',
			textVi: 'Chia tay rồi... trái tim đau nhưng vẫn phải tiếp tục.',
			textEn: 'Break up done... heart hurts but must continue.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch4_reflect_sleep_1_cry',
					text: 'Khóc và đi ngủ',
					textVi: 'Khóc và đi ngủ',
					textEn: 'Cry and sleep',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -4 }],
				},
				{
					id: 'ch4_reflect_sleep_1_forget',
					text: 'Ngủ để quên đi',
					textVi: 'Ngủ để quên đi',
					textEn: 'Sleep to forget',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 2 }],
				},
			],
		},
		{
			id: 'ch4_reflect_success_1',
			text: 'Thất bại trong tình yêu... nhưng sự nghiệp vẫn phải phấn đấu.',
			textVi: 'Thất bại trong tình yêu... nhưng sự nghiệp vẫn phải phấn đấu.',
			textEn: 'Failed in love... but career must strive on.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch4_reflect_success_1_focus',
					text: 'Tập trung vào công việc',
					textVi: 'Tập trung vào công việc',
					textEn: 'Focus on work',
					next: '',
					effects: [{ stat: StatID.VISION, value: 3 }],
				},
				{
					id: 'ch4_reflect_success_1_hurt',
					text: 'Nhưng vẫn còn đau lắm',
					textVi: 'Nhưng vẫn còn đau lắm',
					textEn: 'But still hurts so much',
					next: '',
					effects: [{ stat: StatID.HUMANITY, value: 2 }],
				},
			],
		},
		{
			id: 'ch4_reflect_sleep_2',
			text: 'Công việc bù đầu, tình cảm tan vỡ... cần nghỉ ngơi.',
			textVi: 'Công việc bù đầu, tình cảm tan vỡ... cần nghỉ ngơi.',
			textEn: 'Work overwhelming, love broken... need rest.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch4_reflect_sleep_2_rest',
					text: 'Nghỉ ngơi để hồi phục',
					textVi: 'Nghỉ ngơi để hồi phục',
					textEn: 'Rest to recover',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 2 }],
				},
				{
					id: 'ch4_reflect_sleep_2_tired',
					text: 'Mệt mỏi quá rồi',
					textVi: 'Mệt mỏi quá rồi',
					textEn: 'So exhausted',
					next: '',
					effects: [{ stat: StatID.STRESS, value: -1 }],
				},
			],
		},
		{
			id: 'ch4_reflect_success_2',
			text: 'Trưởng thành đau đớn... nhưng đó là cách duy nhất để mạnh mẽ.',
			textVi: 'Trưởng thành đau đớn... nhưng đó là cách duy nhất để mạnh mẽ.',
			textEn: "Painful growth... but it's the only way to be strong.",
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch4_reflect_success_2_accept',
					text: 'Chấp nhận và tiếp tục',
					textVi: 'Chấp nhận và tiếp tục',
					textEn: 'Accept and continue',
					next: '',
					effects: [{ stat: StatID.STEELMIND, value: 3 }],
				},
				{
					id: 'ch4_reflect_success_2_rest',
					text: 'Nhưng giờ cần nghỉ ngơi',
					textVi: 'Nhưng giờ cần nghỉ ngơi',
					textEn: 'But need rest now',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 1 }],
				},
			],
		},
		{
			id: 'ch4_reflect_sleep_3',
			text: 'Một ngày đầy nước mắt... đã đến lúc ngủ.',
			textVi: 'Một ngày đầy nước mắt... đã đến lúc ngủ.',
			textEn: 'A day full of tears... time to sleep.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch4_reflect_sleep_3_sleep',
					text: 'Đi ngủ thôi',
					textVi: 'Đi ngủ thôi',
					textEn: 'Just sleep',
					next: '',
					effects: [{ stat: StatID.HEALTH, value: 1 }],
				},
				{
					id: 'ch4_reflect_sleep_3_tomorrow',
					text: 'Mai sẽ tốt hơn',
					textVi: 'Mai sẽ tốt hơn',
					textEn: 'Tomorrow will be better',
					next: '',
					effects: [{ stat: StatID.VISION, value: 2 }],
				},
			],
		},
	],
};

export const chapter4Dialogues: Record<Chapter4DialogueID, DialogueNode> = {
	[Chapter4DialogueID.CH4_END]: {
		speaker: 'narrator',
		text: 'Lễ tốt nghiệp kết thúc. Bạn ném chiếc mũ cử nhân lên trời, nhưng trong lòng trĩu nặng lo âu. Ngày mai, bạn chính thức thất nghiệp.',
		textVi:
			'Lễ tốt nghiệp kết thúc. Bạn ném chiếc mũ cử nhân lên trời, nhưng trong lòng trĩu nặng lo âu. Ngày mai, bạn chính thức thất nghiệp.',
		textEn:
			'Graduation ceremony ended. You threw the cap in the sky, but heart heavy with worry. Tomorrow, you are officially unemployed.',
		next: Chapter5DialogueID.CH5_INTRO,
	},
	[Chapter4DialogueID.CH4_START]: {
		speaker: 'narrator',
		text: 'Hà Nội ồn ào và bụi bặm. Giảng đường Đại học rộng lớn đến choáng ngợp. Bạn cảm thấy mình thật nhỏ bé giữa dòng người hối hả.',
		textVi:
			'Hà Nội ồn ào và bụi bặm. Giảng đường Đại học rộng lớn đến choáng ngợp. Bạn cảm thấy mình thật nhỏ bé giữa dòng người hối hả.',
		textEn:
			'Hanoi is noisy and dusty. The University lecture hall is overwhelmingly large. You feel so small amidst the rushing crowd.',
		next: Chapter4DialogueID.CH4_FUNERAL_1,
	},
	// 4.1 Đám giỗ
	[Chapter4DialogueID.CH4_FUNERAL_1]: {
		speaker: 'narrator',
		text: 'Năm 2 Đại học. Bà nội mất. Đám giỗ quan trọng nhất dòng họ. Các chú bác lái xe hơi bóng loáng về cổng làng.',
		textVi:
			'Năm 2 Đại học. Bà nội mất. Đám giỗ quan trọng nhất dòng họ. Các chú bác lái xe hơi bóng loáng về cổng làng.',
		textEn:
			'Year 2 Uni. Grandma passed. Important funeral. Uncles drove shiny cars to the village gate.',
		next: Chapter4DialogueID.CH4_FUNERAL_2,
	},
	[Chapter4DialogueID.CH4_FUNERAL_2]: {
		speaker: 'narrator',
		text: 'Gia đình bạn - từng giàu nhất - giờ phải đi nhờ xe họ hàng (LuxSA đã bán). Bố ngồi ghế phụ, im lặng suốt đường đi.',
		textVi:
			'Gia đình bạn - từng giàu nhất - giờ phải đi nhờ xe họ hàng (LuxSA đã bán). Bố ngồi ghế phụ, im lặng suốt đường đi.',
		textEn:
			'Your family - once richest - hitched a ride (LuxSA sold). Father sat in passenger seat, silent all the way.',
		next: Chapter4DialogueID.CH4_FUNERAL_3,
	},
	[Chapter4DialogueID.CH4_FUNERAL_3]: {
		speaker: 'npc',
		text: 'Họ hàng xì xào: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra. Đúng là không ai giàu ba họ."',
		textVi:
			'Họ hàng xì xào: "Đấy, ngày xưa hống hách cho lắm vào. Giờ thì sáng mắt ra. Đúng là không ai giàu ba họ."',
		textEn:
			'Relatives whispered: "See, used to be so arrogant. Now look at them. Wealth never lasts three generations."',
		next: Chapter4DialogueID.CH4_FUNERAL_REACTION,
	},
	[Chapter4DialogueID.CH4_FUNERAL_REACTION]: {
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
				effects: [{ stat: StatID.STEELMIND, value: 1 }],
				next: Chapter4DialogueID.CH4_FUNERAL_OATH,
			},
			{
				id: 'choice_polite_reply',
				text: 'Cháu cảm ơn, gia đình cháu vẫn ổn',
				textVi: 'Cháu cảm ơn, gia đình cháu vẫn ổn',
				textEn: 'Thanks, we are fine',
				effects: [{ stat: StatID.HUMANITY, value: 1 }],
				next: Chapter4DialogueID.CH4_FUNERAL_OATH,
			},
		],
	},
	[Chapter4DialogueID.CH4_FUNERAL_OATH]: {
		speaker: 'player',
		text: '(Thề thốt) Sẽ có ngày mình lấy lại tất cả những gì đã mất.',
		textVi: '(Thề thốt) Sẽ có ngày mình lấy lại tất cả những gì đã mất.',
		textEn: '(Oath) I will take back everything that was lost.',
		effects: [
			{ stat: StatID.STEELMIND, value: 1 },
			{ stat: StatID.HUMANITY, value: -1 },
		],
		next: Chapter4DialogueID.CH4_DIVORCE_1,
	},

	// 4.2 Ly hôn
	[Chapter4DialogueID.CH4_DIVORCE_1]: {
		speaker: 'narrator',
		text: 'Ngay sau đám giỗ, vì nhục, bố lại lao vào dự án mới ở vùng sâu vùng xa bất chấp lời can ngăn. Mẹ không chịu nổi sự bấp bênh nữa.',
		textVi:
			'Ngay sau đám giỗ, vì nhục, bố lại lao vào dự án mới ở vùng sâu vùng xa bất chấp lời can ngăn. Mẹ không chịu nổi sự bấp bênh nữa.',
		textEn:
			"After funeral, humiliated, father joined risky remote project despite warnings. Mom couldn't take the insecurity.",
		next: Chapter4DialogueID.CH4_DIVORCE_2,
	},
	[Chapter4DialogueID.CH4_DIVORCE_2]: {
		speaker: 'npc',
		text: '"Mẹ không chịu nổi nữa rồi. Mẹ đi đây. Con ở lại chăm sóc bố và em."',
		textVi:
			'"Mẹ không chịu nổi nữa rồi. Mẹ đi đây. Con ở lại chăm sóc bố và em."',
		textEn:
			'"I can\'t take it anymore. I\'m leaving. You stay and take care of dad and your brother."',
		next: Chapter4DialogueID.CH4_DIVORCE_REACTION,
	},
	[Chapter4DialogueID.CH4_DIVORCE_REACTION]: {
		speaker: 'narrator',
		text: 'Mẹ xách vali đi, để lại căn nhà trống hoác. Bạn cầm tờ giấy ly hôn, không khóc, chỉ thấy mệt mỏi rã rời. Hệ thống gia đình Crash hoàn toàn (Unrecoverable Error).',
		textVi:
			'Mẹ xách vali đi, để lại căn nhà trống hoác. Bạn cầm tờ giấy ly hôn, không khóc, chỉ thấy mệt mỏi rã rời. Hệ thống gia đình Crash hoàn toàn (Unrecoverable Error).',
		textEn:
			"Mom packed and left, leaving an empty house. You held the divorce paper, didn't cry, just exhausted. Family system Crashed completely (Unrecoverable Error).",
		next: Chapter4DialogueID.CH4_INDEPENDENCE_1,
	},

	// 4.3 Tự lập & Bi
	[Chapter4DialogueID.CH4_INDEPENDENCE_1]: {
		speaker: 'narrator',
		text: 'Bạn chuyển ra ở riêng tại một phòng trọ 15m2 ở Triều Khúc. Mùa hè 40 độ, không điều hòa. Bạn làm bạn với gián và mì tôm.',
		textVi:
			'Bạn chuyển ra ở riêng tại một phòng trọ 15m2 ở Triều Khúc. Mùa hè 40 độ, không điều hòa. Bạn làm bạn với gián và mì tôm.',
		textEn:
			'You moved out to a 15m2 room in Trieu Khuc. 40 degrees summer, no AC. Friends with cockroaches and instant noodles.',
		next: Chapter4DialogueID.CH4_NOODLE_START,
	},

	// NEW: Eat Noodle Event
	[Chapter4DialogueID.CH4_NOODLE_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Cuối tháng rồi. Ví rỗng tuếch. Lại là bài toán muôn thuở: Ăn gì?',
		textVi:
			'(Suy nghĩ) Cuối tháng rồi. Ví rỗng tuếch. Lại là bài toán muôn thuở: Ăn gì?',
		textEn:
			'(Thinking) End of month. Empty wallet. The eternal question: What to eat?',
		choices: [
			{
				id: 'choice_noodle_save',
				text: 'Mì tôm: Người bạn trung thành',
				textVi: 'Mì tôm: Người bạn trung thành',
				textEn: 'Instant noodles: Loyal friend',
				effects: [{ stat: StatID.MONEY, value: 20000 }],
				next: Chapter4DialogueID.CH4_NOODLE_SAVE,
			},
			{
				id: 'choice_noodle_eat',
				text: 'Bún chả: Tự thưởng cho mình (Money -20k)',
				textVi: 'Bún chả: Tự thưởng cho mình (Money -20k)',
				textEn: 'Bun cha: Treat myself (Money -20k)',
				effects: [
					{ stat: StatID.MONEY, value: -20000 },
					{ stat: StatID.HEALTH, value: 2 },
				],
				next: Chapter4DialogueID.CH4_NOODLE_EAT,
			},
		],
	},
	[Chapter4DialogueID.CH4_NOODLE_SAVE]: {
		speaker: 'narrator',
		text: 'Gói mì tôm Hảo Hảo chua cay. Vừa ăn vừa hít hà. Tiết kiệm là quốc sách.',
		textVi:
			'Gói mì tôm Hảo Hảo chua cay. Vừa ăn vừa hít hà. Tiết kiệm là quốc sách.',
		textEn:
			'Spicy Hao Hao noodles. Slurping and sniffing. Saving is national policy.',
		next: Chapter4DialogueID.CH4_FREELANCE_GIG, // Redirect to Freelance
	},
	[Chapter4DialogueID.CH4_NOODLE_EAT]: {
		speaker: 'narrator',
		text: 'Một suất bún chả đầy đặn. Hương vị thịt nướng làm bạn quên đi cái nóng 40 độ.',
		textVi:
			'Một suất bún chả đầy đặn. Hương vị thịt nướng làm bạn quên đi cái nóng 40 độ.',
		textEn:
			'A full portion of Bun Cha. Grilled meat aroma makes you forget the 40-degree heat.',
		next: Chapter4DialogueID.CH4_FREELANCE_GIG, // Redirect to Freelance
	},

	// NEW: Freelance Gig (Chapter 4)
	[Chapter4DialogueID.CH4_FREELANCE_GIG]: {
		speaker: 'narrator',
		text: 'Bạn tìm thấy một job freelance trên mạng: "Fix lỗi giao diện vỡ trên Mobile". Budget: 2 triệu.',
		textVi:
			'Bạn tìm thấy một job freelance trên mạng: "Fix lỗi giao diện vỡ trên Mobile". Budget: 2 triệu.',
		textEn:
			'You found a freelance job online: "Fix broken UI on Mobile". Budget: 2 million.',
		next: Chapter4DialogueID.CH4_FREELANCE_QUIZ,
	},
	[Chapter4DialogueID.CH4_FREELANCE_QUIZ]: {
		speaker: 'player',
		text: 'Để tạo layout linh hoạt (responsive) trên CSS, công nghệ nào phổ biến nhất hiện nay?',
		textVi:
			'Để tạo layout linh hoạt (responsive) trên CSS, công nghệ nào phổ biến nhất hiện nay?',
		textEn:
			'To create responsive layout in CSS, which technology is most popular?',
		choices: [
			{
				id: 'choice_freelance_quiz_4_1',
				text: 'Float & Clear',
				textVi: 'Float & Clear',
				textEn: 'Float & Clear',
				next: Chapter4DialogueID.CH4_FREELANCE_DONE,
				effects: [{ stat: StatID.VISION, value: -1 }], // Outdated
			},
			{
				id: 'choice_freelance_quiz_4_2',
				text: 'Flexbox & Grid',
				textVi: 'Flexbox & Grid',
				textEn: 'Flexbox & Grid',
				next: Chapter4DialogueID.CH4_FREELANCE_DONE,
				effects: [
					{ stat: StatID.MONEY, value: 2000000 },
					{ stat: StatID.VISION, value: 3 },
				], // Correct
			},
			{
				id: 'choice_freelance_quiz_4_3',
				text: 'Table Layout',
				textVi: 'Table Layout',
				textEn: 'Table Layout',
				next: Chapter4DialogueID.CH4_FREELANCE_DONE,
				effects: [{ stat: StatID.VISION, value: -3 }], // Very outdated
			},
		],
	},
	[Chapter4DialogueID.CH4_FREELANCE_DONE]: {
		speaker: 'narrator',
		text: 'Khách hàng hài lòng và chuyển khoản ngay lập tức. 2 triệu đồng - đủ sống cả tháng sinh viên!',
		textVi:
			'Khách hàng hài lòng và chuyển khoản ngay lập tức. 2 triệu đồng - đủ sống cả tháng sinh viên!',
		textEn:
			'Client satisfied and transferred money immediately. 2 million - enough for a whole student month!',
		next: Chapter4DialogueID.CH4_CLUB_START,
	},

	// NEW: Club Activity
	[Chapter4DialogueID.CH4_CLUB_START]: {
		speaker: 'narrator',
		text: 'Trường Đại học có rất nhiều CLB. Bạn đứng trước bàn tuyển thành viên.',
		textVi:
			'Trường Đại học có rất nhiều CLB. Bạn đứng trước bàn tuyển thành viên.',
		textEn: 'University has many clubs. You stand before the recruitment desk.',
		choices: [
			{
				id: 'choice_club_code',
				text: 'CLB Lập trình: Nơi hội tụ tinh hoa',
				textVi: 'CLB Lập trình: Nơi hội tụ tinh hoa',
				textEn: 'Coding Club: Elite gathering',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter4DialogueID.CH4_JOB_START,
			},
			{
				id: 'choice_club_social',
				text: 'CLB Tình nguyện: Kết nối cộng đồng (Humanity +5)',
				textVi: 'CLB Tình nguyện: Kết nối cộng đồng (Humanity +5)',
				textEn: 'Volunteer Club: Community connect (Humanity +5)',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.MONEY, value: -100000 },
				],
				next: Chapter4DialogueID.CH4_JOB_START,
			},
			{
				id: 'choice_club_solo',
				text: 'Không tham gia: Dành thời gian tự học',
				textVi: 'Không tham gia: Dành thời gian tự học',
				textEn: 'Join none: Time for self-study',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter4DialogueID.CH4_JOB_START,
			},
		],
	},

	// NEW: Part-time Job
	[Chapter4DialogueID.CH4_JOB_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Tiền sinh hoạt phí bố gửi không đủ. Mình cần kiếm thêm việc làm thêm.',
		textVi:
			'(Suy nghĩ) Tiền sinh hoạt phí bố gửi không đủ. Mình cần kiếm thêm việc làm thêm.',
		textEn:
			'(Thinking) Allowance from Dad is not enough. I need a part-time job.',
		choices: [
			{
				id: 'choice_job_tutor',
				text: 'Gia sư: Dạy toán cho trẻ con (Humanity +3)',
				textVi: 'Gia sư: Dạy toán cho trẻ con (Humanity +3)',
				textEn: 'Tutor: Teach math to kids (Humanity +3)',
				effects: [
					{ stat: StatID.MONEY, value: 1500000 },
					{ stat: StatID.HUMANITY, value: 2 },
				],
				next: Chapter4DialogueID.CH4_EXAM_START,
			},
			{
				id: 'choice_job_waiter',
				text: 'Phục vụ bàn: Việc nhẹ lương thấp (Money +800k)',
				textVi: 'Phục vụ bàn: Việc nhẹ lương thấp (Money +800k)',
				textEn: 'Waiter: Low pay hard work (Money +800k)',
				effects: [
					{ stat: StatID.MONEY, value: 800000 },
					{ stat: StatID.STRESS, value: 4 },
				],
				next: Chapter4DialogueID.CH4_EXAM_START,
			},
		],
	},

	// NEW: Exam & Cheating Chain
	[Chapter4DialogueID.CH4_EXAM_START]: {
		speaker: 'narrator',
		text: 'Kỳ thi cuối kỳ môn Cấu trúc dữ liệu & Giải thuật. Đề bài cực khó. Bạn bí ở câu cuối cùng.',
		textVi:
			'Kỳ thi cuối kỳ môn Cấu trúc dữ liệu & Giải thuật. Đề bài cực khó. Bạn bí ở câu cuối cùng.',
		textEn:
			'Final exam on Data Structures & Algorithms. Extremely hard. You are stuck on the last question.',
		choices: [
			{
				id: 'choice_exam_cheat',
				text: 'Quay cóp: Nhìn bài bạn bên cạnh',
				textVi: 'Quay cóp: Nhìn bài bạn bên cạnh',
				textEn: 'Cheat: Peek at neighbor',
				next: Chapter4DialogueID.CH4_CHEAT_CAUGHT, // Collapse
			},
			{
				id: 'choice_exam_honest',
				text: 'Tự làm: Chấp nhận điểm thấp',
				textVi: 'Tự làm: Chấp nhận điểm thấp',
				textEn: 'Do yourself: Accept low score',
				effects: [
					{ stat: StatID.STEELMIND, value: 2 },
					{
						stat: StatID.HUMANITY,
						value: -3,
					},
				],
				next: Chapter4DialogueID.CH4_INDEPENDENCE_RAT_RACE,
			},
		],
	},
	[Chapter4DialogueID.CH4_CHEAT_CAUGHT]: {
		speaker: 'narrator',
		text: 'Giám thị bắt gặp bạn đang liếc bài. Bạn bị lập biên bản, đình chỉ thi. Điểm F. Bố mẹ nhận được thông báo về hạnh kiểm.',
		textVi:
			'Giám thị bắt gặp bạn đang liếc bài. Bạn bị lập biên bản, đình chỉ thi. Điểm F. Bố mẹ nhận được thông báo về hạnh kiểm.',
		textEn:
			'Proctor caught you peeking. Record made, suspended. Grade F. Parents notified about conduct.',
		effects: [
			{ stat: StatID.VISION, value: -3 },
			{ stat: StatID.HUMANITY, value: -3 },
			{ stat: StatID.STRESS, value: 7 },
		],
		next: Chapter4DialogueID.CH4_INDEPENDENCE_RAT_RACE,
	},
	[Chapter4DialogueID.CH4_INDEPENDENCE_RAT_RACE]: {
		speaker: 'narrator',
		text: 'Nhìn dòng người chen chúc tắc đường mỗi sáng, bạn nhận ra mình đã chính thức gia nhập "Rat Race". Cuộc đua của những chú chuột.',
		textVi:
			'Nhìn dòng người chen chúc tắc đường mỗi sáng, bạn nhận ra mình đã chính thức gia nhập "Rat Race". Cuộc đua của những chú chuột.',
		textEn:
			'Watching the traffic jam every morning, you realized you officially joined the "Rat Race".',
		next: Chapter4DialogueID.CH4_FREELANCE_START,
	},

	// NEW: Freelance Event
	[Chapter4DialogueID.CH4_FREELANCE_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Có job freelance gấp. Deadline ngày mai. Nhưng mai lại có tiết học quan trọng.',
		textVi:
			'(Suy nghĩ) Có job freelance gấp. Deadline ngày mai. Nhưng mai lại có tiết học quan trọng.',
		textEn:
			'(Thinking) Urgent freelance job. Deadline tomorrow. But important class tomorrow too.',
		choices: [
			{
				id: 'choice_freelance_do',
				text: 'Bùng học làm job: Tiền quan trọng hơn',
				textVi: 'Bùng học làm job: Tiền quan trọng hơn',
				textEn: 'Skip class: Money is more important',
				effects: [{ stat: StatID.MONEY, value: 5000000 }],
				flags: [{ key: FlagID.SKIPPED_CLASS, value: true }],
				next: Chapter4DialogueID.CH4_FREELANCE_DO,
			},
			{
				id: 'choice_freelance_skip',
				text: 'Đi học: Kiến thức là nền tảng',
				textVi: 'Đi học: Kiến thức là nền tảng',
				textEn: 'Go to class: Knowledge is foundation',
				effects: [{ stat: StatID.VISION, value: 2 }],
				flags: [{ key: FlagID.SKIPPED_CLASS, value: false }],
				next: Chapter4DialogueID.CH4_INDEPENDENCE_MONEY,
			},
		],
	},
	[Chapter4DialogueID.CH4_FREELANCE_DO]: {
		speaker: 'narrator',
		text: 'Bạn cày thâu đêm để kịp deadline. Sáng hôm sau ngủ gục, bỏ lỡ buổi điểm danh.',
		textVi:
			'Bạn cày thâu đêm để kịp deadline. Sáng hôm sau ngủ gục, bỏ lỡ buổi điểm danh.',
		textEn:
			'You worked all night to meet deadline. Overslept next morning, missed roll call.',
		next: Chapter4DialogueID.CH4_INDEPENDENCE_MONEY,
	},
	[Chapter4DialogueID.CH4_INDEPENDENCE_MONEY]: {
		speaker: 'boQ',
		text: '"Bố gửi con ít tiền sinh hoạt phí. Cầm lấy đi, đừng lo cho bố."',
		textVi: '"Bố gửi con ít tiền sinh hoạt phí. Cầm lấy đi, đừng lo cho bố."',
		textEn:
			'"I sent you some living allowance. Take it, don\'t worry about me."',
		next: Chapter4DialogueID.CH4_INDEPENDENCE_CHOICE,
	},
	[Chapter4DialogueID.CH4_INDEPENDENCE_CHOICE]: {
		speaker: 'player',
		text: 'Bạn đã kiếm được tiền từ outsource. Bạn sẽ nói gì?',
		textVi: 'Bạn đã kiếm được tiền từ outsource. Bạn sẽ nói gì?',
		textEn: 'You earned money from outsource. What will you say?',
		choices: [
			{
				id: 'choice_refuse_money',
				text: 'Con tự lo được',
				textVi: 'Con tự lo được',
				textEn: 'I can handle myself',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter4DialogueID.CH4_INDEPENDENCE_QUOTE,
			},
		],
	},
	[Chapter4DialogueID.CH4_INDEPENDENCE_QUOTE]: {
		speaker: 'player',
		text: 'Bố cứ lo cho em. Con tự lo được. Con không cần tiền của bố nữa. Con là Developer mà, con có thể tự build cuộc đời mình.',
		textVi:
			'Bố cứ lo cho em. Con tự lo được. Con không cần tiền của bố nữa. Con là Developer mà, con có thể tự build cuộc đời mình.',
		textEn:
			"Take care of younger brother. I can handle myself. I don't need your money anymore. I am a Developer, I can build my own life.",
		next: Chapter4DialogueID.CH4_SITUATION_ESTIMATE,
	},

	// NEW: Buy Keyboard Event
	[Chapter4DialogueID.CH4_KEYBOARD_START]: {
		speaker: 'player',
		text: '(Suy nghĩ) Bàn phím hỏng nút Enter. Bạn muốn mua một chiếc bàn phím cơ xịn để code cho sướng tay. Giá 2 triệu.',
		textVi:
			'(Suy nghĩ) Bàn phím hỏng nút Enter. Bạn muốn mua một chiếc bàn phím cơ xịn để code cho sướng tay. Giá 2 triệu.',
		textEn:
			'(Thinking) Enter key broken. Want a mechanical keyboard to code better. Price 2 million.',
		choices: [
			{
				id: 'choice_keyboard_buy',
				text: 'Mua luôn: Đầu tư cho công cụ',
				textVi: 'Mua luôn: Đầu tư cho công cụ',
				textEn: 'Buy now: Invest in tools',
				condition: {
					type: ConditionType.STAT,
					key: StatID.MONEY,
					operator: Operator.GTE,
					value: 2000000,
				},
				effects: [{ stat: StatID.MONEY, value: -2000000 }],
				next: Chapter4DialogueID.CH4_KEYBOARD_BUY,
			},
			{
				id: 'choice_keyboard_skip',
				text: 'Dùng tạm phím cũ: Vẫn gõ được là được',
				textVi: 'Dùng tạm phím cũ: Vẫn gõ được là được',
				textEn: 'Use old one: Still works',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter4DialogueID.CH4_BI_1,
			},
		],
	},
	[Chapter4DialogueID.CH4_KEYBOARD_BUY]: {
		speaker: 'narrator',
		text: 'Cảm giác gõ phím cơ thật sướng. Code như bay. Tiền nào của nấy.',
		textVi: 'Cảm giác gõ phím cơ thật sướng. Code như bay. Tiền nào của nấy.',
		textEn:
			'Mechanical keyboard feels great. Coding like flying. You get what you pay for.',
		next: Chapter4DialogueID.CH4_BI_1,
	},
	[Chapter4DialogueID.CH4_BI_1]: {
		speaker: 'narrator',
		text: 'Trong lần bố về thăm em, bạn nhận ra con Miu không còn đó nữa. Bạn hỏi bố, bố lảng tránh...',
		textVi:
			'Trong lần bố về thăm em, bạn nhận ra con Miu không còn đó nữa. Bạn hỏi bố, bố lảng tránh...',
		textEn:
			'When father visited, you noticed Miu was gone. You asked, father evaded...',
		next: Chapter4DialogueID.CH4_BI_TRUTH,
	},
	[Chapter4DialogueID.CH4_BI_TRUTH]: {
		speaker: 'narrator',
		text: 'Có lẽ bố đã bán nó trong phút túng quẫn, hoặc vì đi làm xa không ai chăm sóc. Bạn không dám trách. Bạn hiểu cái nghèo nó bào mòn con người ta thế nào. Nhưng trong lòng bạn có một lỗ hổng lớn.',
		textVi:
			'Có lẽ bố đã bán nó trong phút túng quẫn, hoặc vì đi làm xa không ai chăm sóc. Bạn không dám trách. Bạn hiểu cái nghèo nó bào mòn con người ta thế nào. Nhưng trong lòng bạn có một lỗ hổng lớn.',
		textEn:
			'Perhaps father sold it in desperation, or abandoned due to no caretaker. You dared not blame. You understood how poverty erodes people. But a huge void formed in your heart.',
		next: Chapter4DialogueID.CH4_BI_BIRTHDAY,
	},
	[Chapter4DialogueID.CH4_BI_BIRTHDAY]: {
		speaker: 'narrator',
		text: 'Sinh nhật 21 tuổi. Nhận được khoản thanh toán đầu tiên từ dự án outsource cho khách hàng Mỹ. Việc đầu tiên bạn làm: Mua một chú chó Corgi.',
		textVi:
			'Sinh nhật 21 tuổi. Nhận được khoản thanh toán đầu tiên từ dự án outsource cho khách hàng Mỹ. Việc đầu tiên bạn làm: Mua một chú chó Corgi.',
		textEn:
			'21st birthday. Got first payment from US outsource project. First thing you did: Buy a Corgi puppy.',
		next: Chapter4DialogueID.CH4_BI_BIRTHDAY_CHOICE,
	},
	[Chapter4DialogueID.CH4_BI_BIRTHDAY_CHOICE]: {
		speaker: 'player',
		text: '(Suy nghĩ) Một chú chó Corgi lai đang được rao bán. Giá 500k (tiền vía). Nhìn nó giống hệt con Miu ngày xưa.',
		textVi:
			'(Suy nghĩ) Một chú chó Corgi lai đang được rao bán. Giá 500k (tiền vía). Nhìn nó giống hệt con Miu ngày xưa.',
		textEn:
			'(Thinking) A mixed Corgi for sale. Price 500k (adoption fee). Looks just like Miu.',
		choices: [
			{
				id: 'choice_adopt_bi',
				text: 'Nhận nuôi: Thêm bạn thêm vui (-500k)',
				textVi: 'Nhận nuôi: Thêm bạn thêm vui (-500k)',
				textEn: 'Adopt: More friends more fun (-500k)',
				condition: {
					type: ConditionType.STAT,
					key: StatID.HUMANITY,
					operator: Operator.GTE,
					value: 15,
				},
				effects: [
					{ stat: StatID.MONEY, value: -500000 },
					{ stat: StatID.HUMANITY, value: 3 },
				],
				next: Chapter4DialogueID.CH4_BI_NAMING,
			},
			{
				id: 'choice_skip_bi',
				text: 'Thôi: Mình còn chưa lo xong thân mình',
				textVi: 'Thôi: Mình còn chưa lo xong thân mình',
				textEn: "No: Can't even take care of myself",
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter4DialogueID.CH4_BI_REJECT,
			},
		],
	},
	[Chapter4DialogueID.CH4_BI_NAMING]: {
		speaker: 'narrator',
		text: 'Chú chó chân ngắn này mang cái tên của một người khổng lồ. Bi - tên chú Alaska đẹp nhất, trung thành nhất từng bảo vệ căn cứ địa 4.000m² ngày xưa.',
		textVi:
			'Chú chó chân ngắn này mang cái tên của một người khổng lồ. Bi - tên chú Alaska đẹp nhất, trung thành nhất từng bảo vệ căn cứ địa 4.000m² ngày xưa.',
		textEn:
			'This short-legged dog carries the name of a giant. Bi - the most beautiful, most loyal Alaska who guarded the 4,000m² fortress in golden days.',
		next: Chapter4DialogueID.CH4_BI_MEANING,
	},
	[Chapter4DialogueID.CH4_BI_MEANING]: {
		speaker: 'narrator',
		text: 'Nó là sự tiếp nối. Nó là lời nhắc nhở về quá khứ huy hoàng mà bạn quyết tâm sẽ khôi phục lại. Nó là người bạn mới trong hành trình cô độc sắp tới.',
		textVi:
			'Nó là sự tiếp nối. Nó là lời nhắc nhở về quá khứ huy hoàng mà bạn quyết tâm sẽ khôi phục lại. Nó là người bạn mới trong hành trình cô độc sắp tới.',
		textEn:
			'It was a continuation. A reminder of the glorious past you vowed to restore. A new companion for the lonely journey ahead.',
		effects: [{ stat: StatID.VISION, value: 2 }],
		choices: [
			{
				id: 'choice_welcome_bi',
				text: 'Chào mừng Bi',
				textVi: 'Chào mừng Bi',
				textEn: 'Welcome Bi',
				next: Chapter4DialogueID.CH4_BONUS_START,
			},
		],
	},
	[Chapter4DialogueID.CH4_BI_REJECT]: {
		speaker: 'narrator',
		text: 'Bạn quay lưng bỏ đi. Chú chó nhìn theo, ánh mắt buồn rười rượi. Đêm đó, bạn mơ thấy con Miu đang cào cửa xin vào, nhưng bạn đã khóa chặt cửa.',
		textVi:
			'Bạn quay lưng bỏ đi. Chú chó nhìn theo, ánh mắt buồn rười rượi. Đêm đó, bạn mơ thấy con Miu đang cào cửa xin vào, nhưng bạn đã khóa chặt cửa.',
		textEn:
			'You turned away. The dog watched with sad eyes. That night, you dreamt of Miu scratching the door, but you locked it tight.',
		effects: [
			{ stat: StatID.HUMANITY, value: -3 },
			{ stat: StatID.STRESS, value: 2 },
		],
		next: Chapter4DialogueID.CH4_BONUS_START,
	},
	// NEW: Year End Bonus & Retake Fee
	[Chapter4DialogueID.CH4_BONUS_START]: {
		speaker: 'narrator',
		text: 'Cuối năm, công ty thưởng Tết. Bạn nhận được khoản thưởng hiệu suất vượt mong đợi.',
		textVi:
			'Cuối năm, công ty thưởng Tết. Bạn nhận được khoản thưởng hiệu suất vượt mong đợi.',
		textEn:
			'Year end, company Tet bonus. You received a performance bonus exceeding expectations.',
		next: Chapter4DialogueID.CH4_BONUS_RECEIVE,
	},
	[Chapter4DialogueID.CH4_BONUS_RECEIVE]: {
		speaker: 'player',
		text: '(Vui sướng) 20 triệu! Một khoản tiền lớn đối với sinh viên mới ra trường.',
		textVi:
			'(Vui sướng) 20 triệu! Một khoản tiền lớn đối với sinh viên mới ra trường.',
		textEn: '(Joyful) 20 million! A huge amount for a fresh graduate.',
		effects: [{ stat: StatID.MONEY, value: 20000000 }],
		next: Chapter4DialogueID.CH4_RETAKE_FEE_CHECK,
	},
	[Chapter4DialogueID.CH4_RETAKE_FEE_CHECK]: {
		speaker: 'narrator',
		text: 'Kết quả học tập cuối kỳ đã có.',
		textVi: 'Kết quả học tập cuối kỳ đã có.',
		textEn: 'End of semester results are in.',
		choices: [
			{
				id: 'choice_view_results_fail',
				text: 'Kiểu gì chả đỗ...',
				textVi: 'Kiểu gì chả đỗ...',
				textEn: 'I will pass the course anyway...',
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.SKIPPED_CLASS,
					operator: Operator.EQUAL,
					value: true,
				},
				next: Chapter4DialogueID.CH4_RETAKE_FEE_FAIL,
			},
			{
				id: 'choice_view_results_pass',
				text: 'Dạo này bận làm, không biết có ổn không...',
				textVi: 'Dạo này bận làm, không biết có ổn không...',
				textEn: "I'm busy these days, I don't know if it's okay...",
				condition: {
					type: ConditionType.FLAG,
					key: FlagID.SKIPPED_CLASS,
					operator: Operator.NOT_EQUAL,
					value: true,
				},
				next: Chapter4DialogueID.CH4_RETAKE_FEE_PASS,
			},
		],
	},
	[Chapter4DialogueID.CH4_RETAKE_FEE_FAIL]: {
		speaker: 'narrator',
		text: 'Do nghỉ quá số buổi quy định, bạn bị cấm thi môn Chuyên ngành. Phải đóng tiền học lại.',
		textVi:
			'Do nghỉ quá số buổi quy định, bạn bị cấm thi môn Chuyên ngành. Phải đóng tiền học lại.',
		textEn:
			'Due to excessive absences, you are banned from the Major exam. Must pay retake fee.',
		next: Chapter4DialogueID.CH4_RETAKE_FEE_PAY,
	},
	[Chapter4DialogueID.CH4_RETAKE_FEE_PAY]: {
		speaker: 'player',
		text: '(Thở dài) 2 triệu tiền học lại. Coi như mất toi mấy ngày lương freelance.',
		textVi:
			'(Thở dài) 2 triệu tiền học lại. Coi như mất toi mấy ngày lương freelance.',
		textEn: '(Sigh) 2 million retake fee. Lost a few days of freelance salary.',
		effects: [
			{ stat: StatID.MONEY, value: -2000000 },
			{ stat: StatID.STRESS, value: 7 },
		],
		next: Chapter4DialogueID.CH4_CV_START,
	},
	[Chapter4DialogueID.CH4_RETAKE_FEE_PASS]: {
		speaker: 'narrator',
		text: 'Bạn qua môn trót lọt. May mà vẫn đi học đầy đủ.',
		textVi: 'Bạn qua môn trót lọt. May mà vẫn đi học đầy đủ.',
		textEn: 'You passed. Luckily you attended classes.',
		next: Chapter4DialogueID.CH4_CV_START,
	},
	// NEW: CV & Interview Preparation Session
	[Chapter4DialogueID.CH4_CV_START]: {
		speaker: 'narrator',
		text: 'Sắp tốt nghiệp. Bạn bắt đầu viết CV đầu tiên. Mục "Kinh nghiệm" trống trơn.',
		textVi:
			'Sắp tốt nghiệp. Bạn bắt đầu viết CV đầu tiên. Mục "Kinh nghiệm" trống trơn.',
		textEn: 'Graduation near. Writing first CV. "Experience" section empty.',
		choices: [
			{
				id: 'choice_cv_lie',
				text: 'Chém gió: Ghi thêm dự án ảo',
				textVi: 'Chém gió: Ghi thêm dự án ảo',
				textEn: 'Exaggerate: Add fake projects',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter4DialogueID.CH4_CV_SKILLS,
			},
			{
				id: 'choice_cv_honest',
				text: 'Trung thực: Chỉ ghi những gì đã học',
				textVi: 'Trung thực: Chỉ ghi những gì đã học',
				textEn: 'Honest: Only list what learned',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter4DialogueID.CH4_CV_SKILLS,
			},
			{
				id: 'choice_cv_template',
				text: 'Dùng mẫu CV đẹp: Hình thức bù nội dung',
				textVi: 'Dùng mẫu CV đẹp: Hình thức bù nội dung',
				textEn: 'Use nice template: Style over substance',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter4DialogueID.CH4_CV_SKILLS,
			},
		],
	},
	[Chapter4DialogueID.CH4_CV_SKILLS]: {
		speaker: 'player',
		text: 'Phần kỹ năng (Skills) nên ghi gì?',
		textVi: 'Phần kỹ năng (Skills) nên ghi gì?',
		textEn: 'What to put in Skills section?',
		choices: [
			{
				id: 'choice_skills_all',
				text: 'Liệt kê tất cả: HTML, CSS, JS, C++, Python...',
				textVi: 'Liệt kê tất cả: HTML, CSS, JS, C++, Python...',
				textEn: 'List all: HTML, CSS, JS, C++, Python...',
				effects: [{ stat: StatID.VISION, value: -2 }], // Too broad
				next: Chapter4DialogueID.CH4_INTERVIEW_PREP,
			},
			{
				id: 'choice_skills_focus',
				text: 'Tập trung: JavaScript & React',
				textVi: 'Tập trung: JavaScript & React',
				textEn: 'Focus: JavaScript & React',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_PREP,
			},
			{
				id: 'choice_skills_soft',
				text: 'Thêm kỹ năng mềm: Teamwork, Communication',
				textVi: 'Thêm kỹ năng mềm: Teamwork, Communication',
				textEn: 'Add soft skills: Teamwork, Communication',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_PREP,
			},
		],
	},
	[Chapter4DialogueID.CH4_INTERVIEW_PREP]: {
		speaker: 'narrator',
		text: 'Chuẩn bị phỏng vấn thử (Mock Interview). Câu hỏi: "Điểm yếu lớn nhất của bạn là gì?"',
		textVi:
			'Chuẩn bị phỏng vấn thử (Mock Interview). Câu hỏi: "Điểm yếu lớn nhất của bạn là gì?"',
		textEn: 'Mock Interview. Question: "What is your biggest weakness?"',
		choices: [
			{
				id: 'choice_weakness_perfectionist',
				text: 'Em là người cầu toàn',
				textVi: 'Em là người cầu toàn',
				textEn: 'I am a perfectionist)',
				effects: [{ stat: StatID.VISION, value: -2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_SALARY,
			},
			{
				id: 'choice_weakness_honest',
				text: 'Em thiếu kinh nghiệm thực tế',
				textVi: 'Em thiếu kinh nghiệm thực tế',
				textEn: 'I lack real experience',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_SALARY,
			},
			{
				id: 'choice_weakness_fix',
				text: 'Em hay quên nhưng đang dùng Note để khắc phục',
				textVi: 'Em hay quên nhưng đang dùng Note để khắc phục',
				textEn: 'I forget things but use Note to fix',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_SALARY,
			},
		],
	},
	[Chapter4DialogueID.CH4_INTERVIEW_SALARY]: {
		speaker: 'narrator',
		text: 'Câu hỏi: "Em mong muốn mức lương bao nhiêu?"',
		textVi: 'Câu hỏi: "Em mong muốn mức lương bao nhiêu?"',
		textEn: 'Question: "What is your expected salary?"',
		choices: [
			{
				id: 'choice_salary_high',
				text: '15 triệu: Em tự tin vào khả năng',
				textVi: '15 triệu: Em tự tin vào khả năng',
				textEn: '15 million: Confident in ability',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_END,
			},
			{
				id: 'choice_salary_market',
				text: '8-10 triệu: Theo thị trường',
				textVi: '8-10 triệu: Theo thị trường',
				textEn: '8-10 million: Market rate',
				effects: [{ stat: StatID.VISION, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_END,
			},
			{
				id: 'choice_salary_learn',
				text: 'Em quan trọng việc học hỏi hơn lương',
				textVi: 'Em quan trọng việc học hỏi hơn lương',
				textEn: 'Learning is more important than salary',
				effects: [{ stat: StatID.HUMANITY, value: 2 }],
				next: Chapter4DialogueID.CH4_INTERVIEW_END,
			},
		],
	},
	[Chapter4DialogueID.CH4_INTERVIEW_END]: {
		speaker: 'narrator',
		text: 'Bạn đã sẵn sàng cho cuộc chiến tìm việc thực sự.',
		textVi: 'Bạn đã sẵn sàng cho cuộc chiến tìm việc thực sự.',
		textEn: 'You are ready for the real job hunt battle.',
		next: Chapter4DialogueID.CH4_END,
	},
	// NEW: Developer Scenarios (Internship/Freelance Context)
	[Chapter4DialogueID.CH4_SITUATION_ESTIMATE]: {
		speaker: 'narrator',
		text: 'Một khách hàng Freelance hỏi: "Tính năng này làm mất bao lâu?". Bạn nghĩ mất khoảng 2 ngày.',
		textVi:
			'Một khách hàng Freelance hỏi: "Tính năng này làm mất bao lâu?". Bạn nghĩ mất khoảng 2 ngày.',
		textEn:
			'A Freelance client asks: "How long for this feature?". You think 2 days.',
		choices: [
			{
				id: 'est_2_days',
				text: '2 ngày: Hứa thật làm thật',
				textVi: '2 ngày: Hứa thật làm thật',
				textEn: '2 days: Honest promise',
				effects: [
					{ stat: StatID.VISION, value: -5 },
					{ stat: StatID.STRESS, value: 7 },
				], // Overconfident
				next: Chapter4DialogueID.CH4_SITUATION_GIT_CONFLICT,
			},
			{
				id: 'est_4_days',
				text: '4 ngày: Quy tắc x2 (Buffer an toàn)',
				textVi: '4 ngày: Quy tắc x2 (Buffer an toàn)',
				textEn: '4 days: x2 Rule (Safe buffer)',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: 2000000 },
				], // Professional
				next: Chapter4DialogueID.CH4_SITUATION_GIT_CONFLICT,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_GIT_CONFLICT]: {
		speaker: 'narrator',
		text: 'Bạn pull code về và gặp Merge Conflict đỏ lòm cả màn hình. Deadline còn 1 tiếng.',
		textVi:
			'Bạn pull code về và gặp Merge Conflict đỏ lòm cả màn hình. Deadline còn 1 tiếng.',
		textEn:
			'You pulled code and saw red Merge Conflict all over the screen. 1 hour to deadline.',
		choices: [
			{
				id: 'git_force',
				text: 'git push --force: Đè code của người khác',
				textVi: 'git push --force: Đè code của người khác',
				textEn: 'git push --force: Overwrite others',
				effects: [
					{ stat: StatID.VISION, value: -10 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
				next: Chapter4DialogueID.CH4_SITUATION_QA_BUG,
			},
			{
				id: 'git_resolve',
				text: 'Resolve từng file: Chậm mà chắc (Trễ deadline)',
				textVi: 'Resolve từng file: Chậm mà chắc (Trễ deadline)',
				textEn: 'Resolve each file: Slow but sure (Late deadline)',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.VISION, value: 3 },
				],
				next: Chapter4DialogueID.CH4_SITUATION_QA_BUG,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_QA_BUG]: {
		speaker: 'narrator',
		text: 'Tester báo bug: "Tính năng không chạy". Nhưng máy bạn vẫn chạy bình thường.',
		textVi:
			'Tester báo bug: "Tính năng không chạy". Nhưng máy bạn vẫn chạy bình thường.',
		textEn:
			'Tester reported bug: "Feature not working". But it works on your machine.',
		choices: [
			{
				id: 'bug_works_on_my_machine',
				text: 'Trả lời: "Máy em vẫn chạy mà?"',
				textVi: 'Trả lời: "Máy em vẫn chạy mà?"',
				textEn: 'Reply: "It works on my machine?"',
				effects: [{ stat: StatID.VISION, value: -5 }],
				next: Chapter4DialogueID.CH4_SITUATION_REACT_KEY,
			},
			{
				id: 'bug_check_env',
				text: 'Hỏi version trình duyệt và check log server',
				textVi: 'Hỏi version trình duyệt và check log server',
				textEn: 'Ask browser version and check server log',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter4DialogueID.CH4_SITUATION_REACT_KEY,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_REACT_KEY]: {
		speaker: 'narrator',
		text: 'Console đỏ lòm: "Warning: Each child in a list should have a unique key prop."',
		textVi:
			'Console đỏ lòm: "Warning: Each child in a list should have a unique key prop."',
		textEn:
			'Console red: "Warning: Each child in a list should have a unique key prop."',
		choices: [
			{
				id: 'react_key_index',
				text: 'Dùng Index của mảng (key={index}): Nhanh gọn',
				textVi: 'Dùng Index của mảng (key={index}): Nhanh gọn',
				textEn: 'Use Array Index (key={index}): Fast',
				effects: [{ stat: StatID.VISION, value: -3 }], // Bad practice for dynamic lists
				next: Chapter4DialogueID.CH4_SITUATION_REST_METHOD,
			},
			{
				id: 'react_key_id',
				text: 'Dùng ID duy nhất từ DB (key={item.id})',
				textVi: 'Dùng ID duy nhất từ DB (key={item.id})',
				textEn: 'Use Unique ID from DB (key={item.id})',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter4DialogueID.CH4_SITUATION_REST_METHOD,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_REST_METHOD]: {
		speaker: 'narrator',
		text: 'Phỏng vấn: "Sự khác biệt giữa PUT và PATCH là gì?"',
		textVi: 'Phỏng vấn: "Sự khác biệt giữa PUT và PATCH là gì?"',
		textEn: 'Interview: "Difference between PUT and PATCH?"',
		choices: [
			{
				id: 'rest_put_patch_same',
				text: 'Giống nhau, đều là update dữ liệu',
				textVi: 'Giống nhau, đều là update dữ liệu',
				textEn: 'Same, both update data',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter4DialogueID.CH4_SITUATION_AUTH,
			},
			{
				id: 'rest_put_replace',
				text: 'PUT thay thế toàn bộ, PATCH sửa đổi một phần',
				textVi: 'PUT thay thế toàn bộ, PATCH sửa đổi một phần',
				textEn: 'PUT replaces all, PATCH modifies partial',
				effects: [{ stat: StatID.VISION, value: 7 }],
				next: Chapter4DialogueID.CH4_SITUATION_AUTH,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_AUTH]: {
		speaker: 'narrator',
		text: 'Phỏng vấn: "Authentication và Authorization khác nhau thế nào?"',
		textVi: 'Phỏng vấn: "Authentication và Authorization khác nhau thế nào?"',
		textEn: 'Interview: "Difference between Authentication and Authorization?"',
		choices: [
			{
				id: 'auth_who_what',
				text: 'AuthN là "Bạn là ai?", AuthZ là "Bạn được làm gì?"',
				textVi: 'AuthN là "Bạn là ai?", AuthZ là "Bạn được làm gì?"',
				textEn: 'AuthN is "Who are you?", AuthZ is "What can you do?"',
				effects: [{ stat: StatID.VISION, value: 7 }],
				next: Chapter4DialogueID.CH4_SITUATION_ASYNC,
			},
			{
				id: 'auth_login',
				text: 'AuthN là Login, AuthZ là Register',
				textVi: 'AuthN là Login, AuthZ là Register',
				textEn: 'AuthN is Login, AuthZ is Register',
				effects: [{ stat: StatID.VISION, value: -5 }],
				next: Chapter4DialogueID.CH4_SITUATION_ASYNC,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_ASYNC]: {
		speaker: 'narrator',
		text: 'Code chạy không theo thứ tự mong muốn. Bạn chọn cách xử lý bất đồng bộ nào?',
		textVi:
			'Code chạy không theo thứ tự mong muốn. Bạn chọn cách xử lý bất đồng bộ nào?',
		textEn: 'Code runs out of order. Which async handling method?',
		choices: [
			{
				id: 'async_callback',
				text: 'Callback Hell: Lồng nhau 5 tầng',
				textVi: 'Callback Hell: Lồng nhau 5 tầng',
				textEn: 'Callback Hell: 5 levels deep',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter4DialogueID.CH4_SITUATION_ENGLISH,
			},
			{
				id: 'async_await',
				text: 'Async/Await: Code trông như đồng bộ, dễ đọc',
				textVi: 'Async/Await: Code trông như đồng bộ, dễ đọc',
				textEn: 'Async/Await: Looks synchronous, readable',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter4DialogueID.CH4_SITUATION_ENGLISH,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_ENGLISH]: {
		speaker: 'narrator',
		text: 'Cần viết email xin nghỉ phép gửi sếp nước ngoài.',
		textVi: 'Cần viết email xin nghỉ phép gửi sếp nước ngoài.',
		textEn: 'Need to write leave email to foreign boss.',
		choices: [
			{
				id: 'eng_google',
				text: 'Google Translate: "I want to off tomorrow"',
				textVi: 'Google Translate: "I want to off tomorrow"',
				textEn: 'Google Translate: "I want to off tomorrow"',
				effects: [{ stat: StatID.VISION, value: -3 }],
				next: Chapter4DialogueID.CH4_SITUATION_DEPLOY,
			},
			{
				id: 'eng_formal',
				text: 'Formal: "I would like to request a leave of absence..."',
				textVi: 'Formal: "I would like to request a leave of absence..."',
				textEn: 'Formal: "I would like to request a leave of absence..."',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter4DialogueID.CH4_SITUATION_DEPLOY,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_DEPLOY]: {
		speaker: 'narrator',
		text: 'Deploy lên Vercel bị lỗi build. Log báo thiếu biến môi trường (Environment Variable).',
		textVi:
			'Deploy lên Vercel bị lỗi build. Log báo thiếu biến môi trường (Environment Variable).',
		textEn: 'Vercel deploy failed. Log says missing Environment Variable.',
		choices: [
			{
				id: 'deploy_commit_env',
				text: 'Commit file .env lên Git',
				textVi: 'Commit file .env lên Git',
				textEn: 'Commit .env to Git',
				effects: [
					{ stat: StatID.VISION, value: -10 },
					{ stat: StatID.STEELMIND, value: -5 },
				], // Security risk
				next: Chapter4DialogueID.CH4_SITUATION_TEAM_LUNCH,
			},
			{
				id: 'deploy_add_vercel',
				text: 'Thêm biến vào Vercel Project Settings',
				textVi: 'Thêm biến vào Vercel Project Settings',
				textEn: 'Add variable to Vercel Project Settings',
				effects: [{ stat: StatID.VISION, value: 5 }],
				next: Chapter4DialogueID.CH4_SITUATION_TEAM_LUNCH,
			},
		],
	},
	[Chapter4DialogueID.CH4_SITUATION_TEAM_LUNCH]: {
		speaker: 'narrator',
		text: 'Team rủ đi ăn trưa, nhưng bạn đang dở code.',
		textVi: 'Team rủ đi ăn trưa, nhưng bạn đang dở code.',
		textEn: 'Team invites for lunch, but you are coding.',
		choices: [
			{
				id: 'lunch_skip',
				text: 'Ở lại code: "Em ăn bánh mì được rồi"',
				textVi: 'Ở lại code: "Em ăn bánh mì được rồi"',
				textEn: 'Stay code: "I eat bread"',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
				next: Chapter4DialogueID.CH4_KEYBOARD_START,
			},
			{
				id: 'lunch_go',
				text: 'Đi ăn cùng team: Networking quan trọng hơn 1 dòng code',
				textVi: 'Đi ăn cùng team: Networking quan trọng hơn 1 dòng code',
				textEn: 'Go with team: Networking > 1 line of code',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.STRESS, value: -4 },
				],
				next: Chapter4DialogueID.CH4_KEYBOARD_START,
			},
		],
	},
};
