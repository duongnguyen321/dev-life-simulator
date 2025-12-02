// ==========================================
// CHAPTER 9: SANDBOX MODE (CHẾ ĐỘ TỰ DO)
// Timeline: 55+ tuổi
// Theme: Di sản, Sự viên mãn và Vòng lặp
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter9: Chapter = {
	id: 9,
	name: 'Sandbox Mode',
	nameVi: 'Chế Độ Tự Do',
	nameEn: 'Sandbox Mode',
	ageRange: '55+ tuổi',
	theme: 'Di sản, Sự viên mãn và Vòng lặp',
	themeVi: 'Di sản, Sự viên mãn và Vòng lặp',
	themeEn: 'Legacy, Fulfillment, and The Loop',
	scenes: [
		{
			id: 'ch9_billionaire',
			name: 'Tỷ phú',
			nameVi: 'Khoảnh khắc Tỷ phú',
			nameEn: 'Billionaire Moment',
			background: '/assets/sprites/backgrounds/skyscraper_office_top.png',
			music: '/assets/audio/music/chapters/ch9_legacy.ogg',
			dialogueStart: 'ch9_billionaire_1',
		},
		{
			id: 'ch9_gift',
			name: 'Món quà cho Bố',
			nameVi: 'Món quà cho Bố',
			nameEn: 'Gift for Father',
			background: '/assets/sprites/backgrounds/fortress_rebuilt.png',
			music: '/assets/audio/music/chapters/ch9_legacy.ogg',
			dialogueStart: 'ch9_gift_1',
		},
		{
			id: 'ch9_ending',
			name: 'Kết thúc',
			nameVi: 'Thế giới mở',
			nameEn: 'Open World',
			background: '/assets/sprites/backgrounds/sunset_hill.png',
			music: '/assets/audio/music/chapters/ch9_legacy.ogg',
			dialogueStart: 'ch9_ending_1',
		},
	],
};

export const chapter9Dialogues: Record<string, DialogueNode> = {
	// 9.1 Billionaire
	ch9_billionaire_1: {
		id: 'ch9_billionaire_1',
		speaker: 'narrator',
		text: '55 tuổi. Tạp chí Forbes vinh danh bạn trong Top 10 người giàu nhất. Net Worth > 1 tỷ USD. Bạn đang ngồi trong văn phòng trên tầng 68, nhìn xuống thành phố bé tí hon.',
		textVi:
			'55 tuổi. Tạp chí Forbes vinh danh bạn trong Top 10 người giàu nhất. Net Worth > 1 tỷ USD. Bạn đang ngồi trong văn phòng trên tầng 68, nhìn xuống thành phố bé tí hon.',
		textEn:
			'55 years old. Forbes honored you in Top 10 richest. Net Worth > $1B. Sitting in 68th floor office, looking down at tiny city.',
		next: 'ch9_billionaire_hands',
	},
	ch9_billionaire_hands: {
		id: 'ch9_billionaire_hands',
		speaker: 'player',
		text: '(Nhìn đôi bàn tay) Từ lấm lem bùn đất năm 6 tuổi, gõ Hello World năm 16 tuổi, đến ký lệnh thu hồi sinh tử năm 48 tuổi. Bố từng muốn làm Kiến trúc sư xây cầu, còn mình đã trở thành Kiến trúc sư của một hệ sinh thái số.',
		textVi:
			'(Nhìn đôi bàn tay) Từ lấm lem bùn đất năm 6 tuổi, gõ Hello World năm 16 tuổi, đến ký lệnh thu hồi sinh tử năm 48 tuổi. Bố từng muốn làm Kiến trúc sư xây cầu, còn mình đã trở thành Kiến trúc sư của một hệ sinh thái số.',
		textEn:
			'(Looking at hands) From muddy at 6, typing Hello World at 16, to signing life-or-death recall at 48. Dad wanted to be a Bridge Architect, I became a Digital Ecosystem Architect.',
		next: 'ch9_billionaire_2',
	},
	ch9_billionaire_2: {
		id: 'ch9_billionaire_2',
		speaker: 'narrator',
		text: 'Tiền chỉ là con số trong Database. Di sản (Legacy) mới là thật. Bạn đã phá vỡ vòng lặp (Break the Loop) thất bại của gia đình.',
		textVi:
			'Tiền chỉ là con số trong Database. Di sản (Legacy) mới là thật. Bạn đã phá vỡ vòng lặp (Break the Loop) thất bại của gia đình.',
		textEn:
			"Money is just a number in Database. Legacy is real. You broke the family's Loop of failure.",
		next: 'ch9_gift_1',
	},

	// 9.2 Gift for Father
	ch9_gift_1: {
		id: 'ch9_gift_1',
		speaker: 'narrator',
		text: 'Đưa bố về Lào Cai. Mua lại quả đồi năm xưa. Xây khu nghỉ dưỡng sinh thái yên bình (không phải pháo đài phô trương).',
		textVi:
			'Đưa bố về Lào Cai. Mua lại quả đồi năm xưa. Xây khu nghỉ dưỡng sinh thái yên bình (không phải pháo đài phô trương).',
		textEn:
			'Took father to Lao Cai. Bought back the hill. Built peaceful eco-resort (not showy fortress).',
		next: 'ch9_gift_dialogue',
	},
	ch9_gift_dialogue: {
		id: 'ch9_gift_dialogue',
		speaker: 'player',
		text: 'Bố, con đã sửa xong cái bug lớn nhất của đời bố rồi.',
		textVi: 'Bố, con đã sửa xong cái bug lớn nhất của đời bố rồi.',
		textEn: 'Dad, I fixed the biggest bug of your life.',
		next: 'ch9_gift_father',
	},
	ch9_gift_father: {
		id: 'ch9_gift_father',
		speaker: 'boQ',
		text: '(Rưng rưng) "Con giỏi hơn bố. Con có cái Tầm nhìn mà bố không có. Bố tự hào về con."',
		textVi:
			'(Rưng rưng) "Con giỏi hơn bố. Con có cái Tầm nhìn mà bố không có. Bố tự hào về con."',
		textEn:
			'(Teary) "You are better than me. You have the Vision I lacked. I\'m proud of you."',
		next: 'ch9_gift_reaction',
	},
	ch9_gift_reaction: {
		id: 'ch9_gift_reaction',
		speaker: 'player',
		text: 'Bạn cảm thấy nhẹ nhõm. Gánh nặng quá khứ đã được trút bỏ.',
		textVi: 'Bạn cảm thấy nhẹ nhõm. Gánh nặng quá khứ đã được trút bỏ.',
		textEn: 'You felt relieved. The burden of the past was lifted.',
		effects: [{ stat: 'humanity', value: 2 }],
		next: 'ch9_gift_bi',
	},
	ch9_gift_bi: {
		id: 'ch9_gift_bi',
		speaker: 'narrator',
		text: 'Chú chó Bi (đời con cháu của con Corgi ngày xưa) chạy nhảy trong sân, như cái bóng của quá khứ ùa về nhưng trọn vẹn hơn.',
		textVi:
			'Chú chó Bi (đời con cháu của con Corgi ngày xưa) chạy nhảy trong sân, như cái bóng của quá khứ ùa về nhưng trọn vẹn hơn.',
		textEn:
			'Bi the dog (descendant of old Corgi) running in yard, like shadow of the past returning but more complete.',
		effects: [{ stat: 'humanity', value: 5 }],
		next: 'ch9_ending_1',
	},

	// 9.3 Ending
	ch9_ending_1: {
		id: 'ch9_ending_1',
		speaker: 'narrator',
		text: 'Thành lập quỹ "Sandbox Foundation". Tài trợ cho những đứa trẻ nghèo vùng cao (như Lào Cai quê mình) có đam mê công nghệ. Trao cho chúng chiếc máy tính đầu tiên, giống như bố đã trao cho bạn năm xưa.',
		textVi:
			'Thành lập quỹ "Sandbox Foundation". Tài trợ cho những đứa trẻ nghèo vùng cao (như Lào Cai quê mình) có đam mê công nghệ. Trao cho chúng chiếc máy tính đầu tiên, giống như bố đã trao cho bạn năm xưa.',
		textEn:
			'Founded "Sandbox Foundation". Fund poor highland kids (like in Lao Cai) with tech passion. Give them their first PC, just like Dad gave you years ago.',
		next: 'ch9_ending_monologue',
	},
	ch9_ending_monologue: {
		id: 'ch9_ending_monologue',
		speaker: 'player',
		text: 'Cuộc đời là một dự án Open Source vĩ đại. Chúng ta không thể chọn nơi mình sinh ra (Initial Commit), nhưng chúng ta có thể viết lại mã nguồn của chính mình (Refactor) mỗi ngày. Lỗi lầm (Bug) là không thể tránh khỏi, nhưng quan trọng là ta có dũng cảm để sửa nó (Fix) hay không. Và cuối cùng, hãy để lại một di sản tốt đẹp cho thế hệ sau (Documentation).',
		textVi:
			'Cuộc đời là một dự án Open Source vĩ đại. Chúng ta không thể chọn nơi mình sinh ra (Initial Commit), nhưng chúng ta có thể viết lại mã nguồn của chính mình (Refactor) mỗi ngày. Lỗi lầm (Bug) là không thể tránh khỏi, nhưng quan trọng là ta có dũng cảm để sửa nó (Fix) hay không. Và cuối cùng, hãy để lại một di sản tốt đẹp cho thế hệ sau (Documentation).',
		textEn:
			'Life is a grand Open Source project. We cannot choose where we are born (Initial Commit), but we can rewrite our own source code (Refactor) every day. Bugs are inevitable, but what matters is if we have the courage to Fix them. And finally, leave a good legacy for the next generation (Documentation).',
		next: 'ch9_ending_final',
	},
	ch9_ending_final: {
		id: 'ch9_ending_final',
		speaker: 'player',
		text: 'Tôi không phải là tỷ phú. Tôi là một Developer.',
		textVi: 'Tôi không phải là tỷ phú. Tôi là một Developer.',
		textEn: 'I am not a billionaire. I am a Developer.',
		effects: [{ stat: 'vision', value: 10 }],
		next: 'ending_calculation',
	},
};
