// ==========================================
// CHAPTER 3: HELLO WORLD & BUGS
// Timeline: 16-18 tuổi
// Theme: Sóng gió, Hy vọng giả tạo và Sự kiên định
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter3: Chapter = {
	id: 3,
	name: 'Hello World & Bugs',
	nameVi: 'Hello World & Bugs',
	nameEn: 'Hello World & Bugs',
	ageRange: '16-18 tuổi',
	theme: 'Sóng gió, Hy vọng giả tạo và Sự kiên định',
	themeVi: 'Sóng gió, Hy vọng giả tạo và Sự kiên định',
	themeEn: 'Turbulence, False Hope, and Persistence',
	scenes: [
		{
			id: 'ch3_dorm',
			name: 'Khu tập thể cũ',
			nameVi: 'Lớp 10: Khu tập thể & Miu',
			nameEn: 'Grade 10: Old Dorm & Miu',
			background: '/assets/sprites/backgrounds/dorm_old.png',
			music: '/assets/audio/music/chapters/ch3_struggle.ogg',
			dialogueStart: 'ch3_dorm_1',
		},
		{
			id: 'ch3_debt',
			name: 'Chủ nợ',
			nameVi: 'Biến cố chủ nợ',
			nameEn: 'Debt Collectors',
			background: '/assets/sprites/backgrounds/dorm_night.png',
			music: '/assets/audio/music/chapters/ch3_struggle.ogg',
			dialogueStart: 'ch3_debt_1',
		},
		{
			id: 'ch3_hope',
			name: 'Hy vọng lóe lên',
			nameVi: 'Lớp 11: Hy vọng lóe lên (VinFast LuxSA)',
			nameEn: 'Grade 11: Flashing Hope (VinFast LuxSA)',
			background: '/assets/sprites/backgrounds/car_luxury.png',
			music: '/assets/audio/music/chapters/ch3_hope.ogg',
			dialogueStart: 'ch3_hope_1',
		},
		{
			id: 'ch3_legacy',
			name: 'Công ty Ma',
			nameVi: 'Tầm nhìn của Bố (The Legacy Code)',
			nameEn: "Father's Vision (The Legacy Code)",
			background: '/assets/sprites/backgrounds/dorm_room.png',
			music: '/assets/audio/music/chapters/ch3_struggle.ogg',
			dialogueStart: 'ch3_legacy_1',
		},
		{
			id: 'ch3_covid',
			name: 'Đại dịch COVID',
			nameVi: 'Lớp 11-12: Đại dịch COVID',
			nameEn: 'Grade 11-12: COVID Pandemic',
			background: '/assets/sprites/backgrounds/home_covid.png',
			music: '/assets/audio/music/chapters/ch3_struggle.ogg',
			dialogueStart: 'ch3_covid_1',
		},
	],
};

export const chapter3Dialogues: Record<string, DialogueNode> = {
	// 3.1 Khu tập thể & Miu
	ch3_dorm_1: {
		id: 'ch3_dorm_1',
		speaker: 'narrator',
		text: 'Căn nhà thuê ở khu tập thể Thành Công. Tường mốc xanh, mùa mưa nước dột tứ bề, phải lấy xô chậu hứng. Bạn sống cùng mẹ và em trai V.',
		textVi:
			'Căn nhà thuê ở khu tập thể Thành Công. Tường mốc xanh, mùa mưa nước dột tứ bề, phải lấy xô chậu hứng. Bạn sống cùng mẹ và em trai V.',
		textEn:
			'Rented house in Thanh Cong dorm. Moldy walls, leaking roof requiring buckets when it rained. You lived with mom and brother V.',
		next: 'ch3_debt_1',
	},

	// 3.2 Biến cố chủ nợ
	ch3_debt_1: {
		id: 'ch3_debt_1',
		speaker: 'narrator',
		text: 'Một buổi tối, chủ nợ tìm được địa chỉ. Họ đập cửa, la hét, dọa dẫm. Bạn và em trai V co rúm trong góc nhà.',
		textVi:
			'Một buổi tối, chủ nợ tìm được địa chỉ. Họ đập cửa, la hét, dọa dẫm. Bạn và em trai V co rúm trong góc nhà.',
		textEn:
			'One evening, debt collectors found the address. Banging doors, screaming, threatening. You and brother V cowered in the corner.',
		next: 'ch3_debt_2',
	},
	ch3_debt_2: {
		id: 'ch3_debt_2',
		speaker: 'npc',
		text: '"Mở cửa ra! Trốn chui trốn lủi mãi được à? Ông Q đâu, ra đây nói chuyện!"',
		textVi:
			'"Mở cửa ra! Trốn chui trốn lủi mãi được à? Ông Q đâu, ra đây nói chuyện!"',
		textEn: '"Open up! Can\'t hide forever! Mr. Q, come out and talk!"',
		next: 'ch3_debt_father',
	},
	ch3_debt_father: {
		id: 'ch3_debt_father',
		speaker: 'boQ',
		text: '(Run rẩy) "Các anh cho tôi khất... Tôi không chạy đi đâu cả. Xin các anh đừng làm con tôi sợ."',
		textVi:
			'(Run rẩy) "Các anh cho tôi khất... Tôi không chạy đi đâu cả. Xin các anh đừng làm con tôi sợ."',
		textEn:
			'(Trembling) "Please give me time... I\'m not running. Please don\'t scare my son."',
		next: 'ch3_debt_escape',
	},
	ch3_debt_escape: {
		id: 'ch3_debt_escape',
		speaker: 'narrator',
		text: 'Ngay trong đêm đó, cả nhà phải di tản. Đồ đạc ném vội lên xe ba gác, chạy trốn như những kẻ tội phạm.',
		textVi:
			'Ngay trong đêm đó, cả nhà phải di tản. Đồ đạc ném vội lên xe ba gác, chạy trốn như những kẻ tội phạm.',
		textEn:
			'That very night, family evacuated. Belongings thrown onto a tricycle, fleeing like criminals.',
		next: 'ch3_debt_miu',
	},
	ch3_debt_miu: {
		id: 'ch3_debt_miu',
		speaker: 'narrator',
		text: 'Bố chấp nhận đi làm xa ở miền Trung để trả nợ. Trước khi đi, bố mang về một con chó lai nhỏ xíu, lông vàng, tên là Miu. "Nó xấu xí nhưng trung thành," bố nói, mắt đỏ hoe.',
		textVi:
			'Bố chấp nhận đi làm xa ở miền Trung để trả nợ. Trước khi đi, bố mang về một con chó lai nhỏ xíu, lông vàng, tên là Miu. "Nó xấu xí nhưng trung thành," bố nói, mắt đỏ hoe.',
		textEn:
			'Father went to work far away in Central region. Before leaving, he brought home a small yellow mixed-breed dog named Miu. "He\'s ugly but loyal," father said, eyes red.',
		next: 'ch3_debt_quote',
	},
	ch3_debt_quote: {
		id: 'ch3_debt_quote',
		speaker: 'boQ',
		text: 'Bố đi vắng, Miu sẽ thay bố bảo vệ con, nghe con tâm sự. Đàn ông không được khóc, buồn thì nói với nó.',
		textVi:
			'Bố đi vắng, Miu sẽ thay bố bảo vệ con, nghe con tâm sự. Đàn ông không được khóc, buồn thì nói với nó.',
		textEn:
			"I'm away, Miu will protect you. Men don't cry, if you are sad, talk to him.",
		effects: [{ stat: 'humanity', value: 2 }],
		next: 'ch3_debt_visit',
	},
	ch3_debt_visit: {
		id: 'ch3_debt_visit',
		speaker: 'narrator',
		text: 'Một lần bố tạt qua nhà, dúi vào tay bạn 500k. Bố gầy rộc đi, quần áo lấm lem bụi đường. "Cầm lấy mà tiêu vặt," bố nói rồi vội vã đi ngay.',
		textVi:
			'Một lần bố tạt qua nhà, dúi vào tay bạn 500k. Bố gầy rộc đi, quần áo lấm lem bụi đường. "Cầm lấy mà tiêu vặt," bố nói rồi vội vã đi ngay.',
		textEn:
			'Once father stopped by, shoved 500k into your hand. He looked haggard, clothes dusty. "Take it for pocket money," he said and left in a hurry.',
		next: 'ch3_hope_1',
	},

	// 3.3 Hy vọng lóe lên
	ch3_hope_1: {
		id: 'ch3_hope_1',
		speaker: 'narrator',
		text: 'Lớp 11. Công việc của bố tiến triển tốt. Bố được chia thưởng dự án và quyết định trả góp mua một chiếc VinFast LuxSA.',
		textVi:
			'Lớp 11. Công việc của bố tiến triển tốt. Bố được chia thưởng dự án và quyết định trả góp mua một chiếc VinFast LuxSA.',
		textEn:
			"Grade 11. Father's work went well. Got bonus, decided to buy a VinFast LuxSA on installment.",
		next: 'ch3_hope_2',
	},
	ch3_hope_2: {
		id: 'ch3_hope_2',
		speaker: 'narrator',
		text: 'Không phải để khoe khoang. Bố cần một "bộ mặt" để giao dịch. Chiếc xe là biểu tượng cho sự trở lại của lòng tự trọng.',
		textVi:
			'Không phải để khoe khoang. Bố cần một "bộ mặt" để giao dịch. Chiếc xe là biểu tượng cho sự trở lại của lòng tự trọng.',
		textEn:
			'Not to show off. He needed a "face" for business. The car was a symbol of returned self-esteem.',
		next: 'ch3_hope_crash',
	},
	ch3_hope_crash: {
		id: 'ch3_hope_crash',
		speaker: 'narrator',
		text: 'Nhưng tai nạn định mệnh ập đến. Sếp tổng công ty bố đột ngột qua đời. Công ty loạn lạc. Nợ lương, nợ thưởng. Chiếc LuxSA trở thành cục nợ khổng lồ.',
		textVi:
			'Nhưng tai nạn định mệnh ập đến. Sếp tổng công ty bố đột ngột qua đời. Công ty loạn lạc. Nợ lương, nợ thưởng. Chiếc LuxSA trở thành cục nợ khổng lồ.',
		textEn:
			'But fate struck. Boss died of stroke. Company in chaos. Salary/bonus frozen. The LuxSA became a giant debt burden.',
		next: 'ch3_legacy_1',
	},

	// 3.4 Công ty Ma
	ch3_legacy_1: {
		id: 'ch3_legacy_1',
		speaker: 'narrator',
		text: 'Dù túng quẫn, bố vẫn âm thầm duy trì một công ty xây dựng "Ma" (không hoạt động). Bạn hỏi tại sao tốn tiền vô ích.',
		textVi:
			'Dù túng quẫn, bố vẫn âm thầm duy trì một công ty xây dựng "Ma" (không hoạt động). Bạn hỏi tại sao tốn tiền vô ích.',
		textEn:
			'Despite poverty, father kept a "Ghost" construction company running. You asked why waste money.',
		next: 'ch3_legacy_quote',
	},
	ch3_legacy_quote: {
		id: 'ch3_legacy_quote',
		speaker: 'boQ',
		text: 'Để sau này con ra trường, con sẽ có một công ty thâm niên 5-7 năm. Khách hàng sẽ tin con hơn. Bố đang lót đường cho con.',
		textVi:
			'Để sau này con ra trường, con sẽ có một công ty thâm niên 5-7 năm. Khách hàng sẽ tin con hơn. Bố đang lót đường cho con.',
		textEn:
			"So when you graduate, you have a 5-7 year old company. Clients will trust you. I'm paving the way for you.",
		effects: [{ stat: 'vision', value: 2 }],
		next: 'ch3_covid_1',
	},

	// 3.5 COVID
	ch3_covid_1: {
		id: 'ch3_covid_1',
		speaker: 'narrator',
		text: 'Đại dịch COVID bùng phát. Hà Nội giãn cách. Mẹ mất thu nhập. Bố thất nghiệp, chiếc LuxSA phủ bụi.',
		textVi:
			'Đại dịch COVID bùng phát. Hà Nội giãn cách. Mẹ mất thu nhập. Bố thất nghiệp, chiếc LuxSA phủ bụi.',
		textEn:
			'COVID pandemic. Hanoi lockdown. Mom lost income. Father unemployed, LuxSA dusty.',
		next: 'ch3_covid_2',
	},
	ch3_covid_2: {
		id: 'ch3_covid_2',
		speaker: 'narrator',
		text: 'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textVi:
			'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textEn:
			'You devoured coding courses on Udemy, Coursera. 14 hours a day by the old PC.',
		next: 'ch3_covid_father',
	},
	ch3_covid_father: {
		id: 'ch3_covid_father',
		speaker: 'boQ',
		text: 'Bố nhìn bạn, thở dài: "Con nghỉ ngơi chút đi. Đừng cố quá như bố ngày xưa."',
		textVi:
			'Bố nhìn bạn, thở dài: "Con nghỉ ngơi chút đi. Đừng cố quá như bố ngày xưa."',
		textEn:
			'Father looked at you, sighing: "Rest a bit, son. Don\'t push too hard like I did."',
		next: 'ch3_covid_reply',
	},
	ch3_covid_reply: {
		id: 'ch3_covid_reply',
		speaker: 'player',
		text: 'Bạn sẽ trả lời sao?',
		textVi: 'Bạn sẽ trả lời sao?',
		textEn: 'How will you reply?',
		choices: [
			{
				id: 'choice_grind_reply',
				text: 'Con phải cố, đây là cơ hội duy nhất',
				textVi: 'Con phải cố, đây là cơ hội duy nhất',
				textEn: 'I must push, this is the only chance',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch3_covid_freelance',
			},
			{
				id: 'choice_reassure_reply',
				text: 'Con ổn mà bố, con thích lập trình',
				textVi: 'Con ổn mà bố, con thích lập trình',
				textEn: "I'm fine Dad, I love coding",
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch3_covid_freelance',
			},
		],
	},
	ch3_covid_freelance: {
		id: 'ch3_covid_freelance',
		speaker: 'narrator',
		text: 'Sau 4 tháng "tu luyện" trong phòng kín, bạn nhận được job freelance đầu tiên: Cắt HTML/CSS cho một landing page đơn giản. Thù lao: 300.000 VNĐ.',
		textVi:
			'Sau 4 tháng "tu luyện" trong phòng kín, bạn nhận được job freelance đầu tiên: Cắt HTML/CSS cho một landing page đơn giản. Thù lao: 300.000 VNĐ.',
		textEn:
			'After 4 months of "cultivation" in isolation, you got your first freelance job: HTML/CSS for a simple landing page. Pay: 300,000 VND.',
		effects: [{ stat: 'steelMind', value: 2 }],
		next: 'ch3_covid_end',
	},
	ch3_covid_end: {
		id: 'ch3_covid_end',
		speaker: 'narrator',
		text: 'Hết dịch, bố lại đi làm dự án resort. Lại thất bại vì vấn đề pháp lý. Bố về tay trắng. Sự tự tin rạn nứt thực sự.',
		textVi:
			'Hết dịch, bố lại đi làm dự án resort. Lại thất bại vì vấn đề pháp lý. Bố về tay trắng. Sự tự tin rạn nứt thực sự.',
		textEn:
			'Post-COVID, father joined resort project. Failed due to legal issues. Returned empty handed. Confidence truly cracked.',
		next: 'ch3_ptit_admission',
	},
	ch3_ptit_admission: {
		id: 'ch3_ptit_admission',
		speaker: 'narrator',
		text: 'Kết thúc lớp 12, giữa bộn bề khó khăn, bạn nhận giấy báo trúng tuyển Học viện. Đây là tấm vé thông hành đầu tiên để bạn bước vào thế giới của "Mã nguồn", rời xa những công trình xây dựng đầy bụi bặm của bố.',
		textVi:
			'Kết thúc lớp 12, giữa bộn bề khó khăn, bạn nhận giấy báo trúng tuyển Học viện. Đây là tấm vé thông hành đầu tiên để bạn bước vào thế giới của "Mã nguồn", rời xa những công trình xây dựng đầy bụi bặm của bố.',
		textEn:
			'End of Grade 12, amidst difficulties, you got admitted to the Academy. This is your first ticket into the world of "Source Code", away from father\'s dusty construction sites.',
		next: 'ch4_funeral_1',
	},
};
