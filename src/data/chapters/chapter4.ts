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
			music: '/assets/audio/music/chapters/ch4_sadness.ogg',
			dialogueStart: 'ch4_funeral_1',
		},
		{
			id: 'ch4_divorce',
			name: 'Lá đơn ly hôn',
			nameVi: 'Lá đơn ly hôn (System Failure)',
			nameEn: 'The Divorce Papers (System Failure)',
			background: '/assets/sprites/backgrounds/home_broken.png',
			music: '/assets/audio/music/chapters/ch4_sadness.ogg',
			dialogueStart: 'ch4_divorce_1',
		},
		{
			id: 'ch4_independence',
			name: 'Tự lập',
			nameVi: 'Năm 3 ĐH: Tự lập & Bi',
			nameEn: 'Year 3 Uni: Independence & Bi',
			background: '/assets/sprites/backgrounds/dorm_room_pc.png',
			music: '/assets/audio/music/chapters/ch4_sadness.ogg',
			dialogueStart: 'ch4_independence_1',
		},
	],
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
