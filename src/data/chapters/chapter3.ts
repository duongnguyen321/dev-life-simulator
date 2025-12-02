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
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: 'ch3_dorm_1',
		},
		{
			id: 'ch3_debt',
			name: 'Chủ nợ',
			nameVi: 'Biến cố chủ nợ',
			nameEn: 'Debt Collectors',
			background: '/assets/sprites/backgrounds/dorm_night.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: 'ch3_debt_1',
		},
		{
			id: 'ch3_hope',
			name: 'Hy vọng lóe lên',
			nameVi: 'Lớp 11: Hy vọng lóe lên (VinFast LuxSA)',
			nameEn: 'Grade 11: Flashing Hope (VinFast LuxSA)',
			background: '/assets/sprites/backgrounds/bedroom_pc.png',
			music: '/assets/audio/music/chapters/ch3_hope.mp3',
			dialogueStart: 'ch3_intro', // Changed from ch3_hope_1
		},
		{
			id: 'ch3_hack',
			name: 'Công ty Ma',
			nameVi: 'Tầm nhìn của Bố (The Legacy Code)',
			nameEn: "Father's Vision (The Legacy Code)",
			background: '/assets/sprites/backgrounds/dorm_room.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: 'ch3_legacy_1', // Assuming it uses the same dialogue start as the original 'ch3_legacy'
		},
		{
			id: 'ch3_covid',
			name: 'Đại dịch COVID',
			nameVi: 'Lớp 11-12: Đại dịch COVID',
			nameEn: 'Grade 11-12: COVID Pandemic',
			background: '/assets/sprites/backgrounds/home_covid.png',
			music: '/assets/audio/music/chapters/ch3_struggle.mp3',
			dialogueStart: 'ch3_covid_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch3_todo_code_night',
				text: 'Cày code thâu đêm',
				textVi: 'Cày code thâu đêm',
				textEn: 'Code all night',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { health: 2 }, // Increased Health cost
			},

			{
				id: 'ch3_todo_net_cafe',
				text: 'Trốn học đi net',
				textVi: 'Trốn học đi net',
				textEn: 'Skip school for internet cafe',
				effects: [{ stat: 'vision', value: -1 }],
				reward: { stress: -1 },
			},
			{
				id: 'ch3_todo_learn_english',
				text: 'Học tiếng Anh online',
				textVi: 'Học tiếng Anh online',
				textEn: 'Learn English online',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch3_todo_care_miu',
				text: 'Chăm sóc Miu',
				textVi: 'Chăm sóc Miu',
				textEn: 'Take care of Miu',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch3_todo_hide_debt',
				text: 'Trốn trong phòng khi chủ nợ đến',
				textVi: 'Trốn trong phòng khi chủ nợ đến',
				textEn: 'Hide in room from debt collectors',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { stress: 1 },
			},

			{
				id: 'ch3_todo_read_blog',
				text: 'Đọc blog công nghệ',
				textVi: 'Đọc blog công nghệ',
				textEn: 'Read tech blogs',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch3_todo_hack',
				text: 'Thử hack một trang web dạo',
				textVi: 'Thử hack một trang web dạo',
				textEn: 'Try hacking a random site',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1, humanity: 1 }, // Added Humanity cost
			},
			{
				id: 'ch3_todo_love_letter',
				text: 'Viết thư tình cho crush',
				textVi: 'Viết thư tình cho crush',
				textEn: 'Write love letter to crush',
				effects: [{ stat: 'humanity', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch3_todo_clean_house',
				text: 'Dọn dẹp nhà cửa giúp mẹ',
				textVi: 'Dọn dẹp nhà cửa giúp mẹ',
				textEn: 'Clean house for Mom',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch3_todo_rap',
				text: 'Nghe nhạc rap để giải tỏa',
				textVi: 'Nghe nhạc rap để giải tỏa',
				textEn: 'Listen to rap to relieve stress',
				reward: { stress: -1 },
			},
			{
				id: 'ch3_todo_debug',
				text: 'Debug code suốt 3 tiếng',
				textVi: 'Debug code suốt 3 tiếng',
				textEn: 'Debug code for 3 hours',
				effects: [{ stat: 'vision', value: 2 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch3_todo_dream_uni',
				text: 'Mơ về cánh cổng đại học',
				textVi: 'Mơ về cánh cổng đại học',
				textEn: 'Dream of university gates',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch3_todo_teach_bro',
				text: 'Dạy em trai học bài',
				textVi: 'Dạy em trai học bài',
				textEn: 'Teach younger brother',
				effects: [{ stat: 'humanity', value: 1 }],
			},

			{
				id: 'ch3_todo_argue_parents',
				text: 'Cãi nhau với bố mẹ về tiền bạc',
				textVi: 'Cãi nhau với bố mẹ về tiền bạc',
				textEn: 'Argue with parents about money',
				cost: { stress: 1, humanity: 1 },
			},
			{
				id: 'ch3_todo_watch_movie',
				text: 'Xem phim cùng cả nhà',
				textVi: 'Xem phim cùng cả nhà',
				textEn: 'Watch movie with family',
				reward: { stress: -1 },
			},
			{
				id: 'ch3_todo_typing',
				text: 'Luyện gõ phím 10 ngón',
				textVi: 'Luyện gõ phím 10 ngón',
				textEn: 'Practice touch typing',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch3_todo_sleep_sun',
				text: 'Ngủ nướng ngày Chủ nhật',
				textVi: 'Ngủ nướng ngày Chủ nhật',
				textEn: 'Sleep in on Sunday',
				reward: { health: 1 },
			},
		],
		dreamQuestions: [
			{
				id: 'ch3_dream_code',
				text: 'Bạn thấy những dòng code đang rơi xuống như trong Matrix.',
				textVi: 'Bạn thấy những dòng code đang rơi xuống như trong Matrix.',
				textEn: 'You see lines of code falling like in The Matrix.',
				choices: [
					{
						id: 'ch3_dream_code_read',
						text: 'Cố gắng đọc hiểu chúng',
						textVi: 'Cố gắng đọc hiểu chúng',
						textEn: 'Try to read them',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch3_dream_code_control',
						text: 'Điều khiển chúng',
						textVi: 'Điều khiển chúng',
						textEn: 'Control them',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch3_dream_code_run',
						text: 'Sợ hãi bỏ chạy',
						textVi: 'Sợ hãi bỏ chạy',
						textEn: 'Run away in fear',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch3_dream_code_money',
						text: 'Biến chúng thành tiền',
						textVi: 'Biến chúng thành tiền',
						textEn: 'Turn them into money',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_debt',
				text: 'Chủ nợ đang đuổi theo bạn.',
				textVi: 'Chủ nợ đang đuổi theo bạn.',
				textEn: 'Debt collectors are chasing you.',
				choices: [
					{
						id: 'ch3_dream_debt_run',
						text: 'Chạy trốn',
						textVi: 'Chạy trốn',
						textEn: 'Run away',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch3_dream_debt_face',
						text: 'Đứng lại đối mặt',
						textVi: 'Đứng lại đối mặt',
						textEn: 'Stand and face them',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch3_dream_debt_super',
						text: 'Biến thành siêu nhân đánh lại',
						textVi: 'Biến thành siêu nhân đánh lại',
						textEn: 'Turn into superman and fight',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch3_dream_debt_pay',
						text: 'Trả tiền cho họ',
						textVi: 'Trả tiền cho họ',
						textEn: 'Pay them',
						next: '',
						effects: [{ stat: 'stress', value: -1 }],
					},
				],
			},
			{
				id: 'ch3_dream_miu',
				text: 'Miu biết nói tiếng người.',
				textVi: 'Miu biết nói tiếng người.',
				textEn: 'Miu can speak human language.',
				choices: [
					{
						id: 'ch3_dream_miu_talk',
						text: 'Trò chuyện với Miu',
						textVi: 'Trò chuyện với Miu',
						textEn: 'Talk to Miu',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch3_dream_miu_money',
						text: 'Bảo Miu đi kiếm tiền',
						textVi: 'Bảo Miu đi kiếm tiền',
						textEn: 'Tell Miu to earn money',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch3_dream_miu_fear',
						text: 'Sợ hãi',
						textVi: 'Sợ hãi',
						textEn: 'Be scared',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }],
					},
					{
						id: 'ch3_dream_miu_hug',
						text: 'Ôm Miu ngủ',
						textVi: 'Ôm Miu ngủ',
						textEn: 'Hug Miu to sleep',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_luxsa',
				text: 'Chiếc xe LuxSA biến thành một con quái vật nuốt chửng gia đình.',
				textVi:
					'Chiếc xe LuxSA biến thành một con quái vật nuốt chửng gia đình.',
				textEn: 'The LuxSA car turns into a monster swallowing the family.',
				choices: [
					{
						id: 'ch3_dream_luxsa_destroy',
						text: 'Phá hủy chiếc xe',
						textVi: 'Phá hủy chiếc xe',
						textEn: 'Destroy the car',
						next: '',
						effects: [{ stat: 'stress', value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_save',
						text: 'Cứu gia đình',
						textVi: 'Cứu gia đình',
						textEn: 'Save the family',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_drive',
						text: 'Lái nó đi',
						textVi: 'Lái nó đi',
						textEn: 'Drive it away',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch3_dream_luxsa_sell',
						text: 'Bán nó đi',
						textVi: 'Bán nó đi',
						textEn: 'Sell it',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch3_dream_uni',
				text: 'Bạn thấy cổng trường đại học đóng sầm trước mặt.',
				textVi: 'Bạn thấy cổng trường đại học đóng sầm trước mặt.',
				textEn: 'You see university gates slamming shut in front of you.',
				choices: [
					{
						id: 'ch3_dream_uni_climb',
						text: 'Leo rào vào',
						textVi: 'Leo rào vào',
						textEn: 'Climb over the fence',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch3_dream_uni_cry',
						text: 'Ngồi khóc',
						textVi: 'Ngồi khóc',
						textEn: 'Sit and cry',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }],
					},
					{
						id: 'ch3_dream_uni_path',
						text: 'Tìm đường khác',
						textVi: 'Tìm đường khác',
						textEn: 'Find another way',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch3_dream_uni_break',
						text: 'Phá cổng',
						textVi: 'Phá cổng',
						textEn: 'Break the gate',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
		],
	},
};

export const chapter3Dialogues: Record<string, DialogueNode> = {
	// NEW: Intro
	ch3_intro: {
		id: 'ch3_intro',
		speaker: 'narrator',
		text: 'Tiếng bàn phím lạch cạch thay thế tiếng ve sầu. Những dòng code chạy dài trên màn hình đen. Bạn tìm thấy sự bình yên trong logic của máy tính.',
		textVi:
			'Tiếng bàn phím lạch cạch thay thế tiếng ve sầu. Những dòng code chạy dài trên màn hình đen. Bạn tìm thấy sự bình yên trong logic của máy tính.',
		textEn:
			'Clacking keyboard replaced cicadas. Lines of code running on black screen. You found peace in computer logic.',
		next: 'ch3_dorm_1',
	},
	// 3.1 Khu tập thể & Miu
	ch3_dorm_1: {
		id: 'ch3_dorm_1',
		speaker: 'narrator',
		text: 'Căn nhà thuê ở khu tập thể Thành Công. Tường mốc xanh, mùa mưa nước dột tứ bề, phải lấy xô chậu hứng. Bạn sống cùng mẹ và em trai V.',
		textVi:
			'Căn nhà thuê ở khu tập thể Thành Công. Tường mốc xanh, mùa mưa nước dột tứ bề, phải lấy xô chậu hứng. Bạn sống cùng mẹ và em trai V.',
		textEn:
			'Rented house in Thanh Cong dorm. Moldy walls, leaking roof requiring buckets when it rained. You lived with mom and brother V.',
		next: 'ch3_crush_start', // Redirect to Crush Event
	},

	// NEW: First Crush Event
	ch3_crush_start: {
		id: 'ch3_crush_start',
		speaker: 'narrator',
		text: 'Lớp 10. Một cô bạn cùng lớp mượn vở bạn chép bài. Cô ấy cười rất xinh, làm tim bạn lệch một nhịp.',
		textVi:
			'Lớp 10. Một cô bạn cùng lớp mượn vở bạn chép bài. Cô ấy cười rất xinh, làm tim bạn lệch một nhịp.',
		textEn:
			'Grade 10. A classmate borrowed your notes. Her smile made your heart skip a beat.',
		choices: [
			{
				id: 'choice_crush_confess',
				text: 'Tỏ tình: Liều ăn nhiều (Humanity +2, Stress +2)',
				textVi: 'Tỏ tình: Liều ăn nhiều (Humanity +2, Stress +2)',
				textEn: 'Confess: High risk high reward (Humanity +2, Stress +2)',
				effects: [
					{ stat: 'humanity', value: 2 },
					{ stat: 'stress', value: 2 },
				],
				next: 'ch3_crush_reject',
			},
			{
				id: 'choice_crush_hide',
				text: 'Giấu kín: Yêu đơn phương (Stress +1)',
				textVi: 'Giấu kín: Yêu đơn phương (Stress +1)',
				textEn: 'Hide it: Unrequited love (Stress +1)',
				effects: [{ stat: 'stress', value: 1 }],
				next: 'ch3_fix_pc_start',
			},
			{
				id: 'choice_crush_ignore',
				text: 'Lơ đi: Code là chân ái (Vision +1, Humanity -1)',
				textVi: 'Lơ đi: Code là chân ái (Vision +1, Humanity -1)',
				textEn: 'Ignore: Code is true love (Vision +1, Humanity -1)',
				effects: [
					{ stat: 'vision', value: 1 },
					{ stat: 'humanity', value: -1 },
				],
				next: 'ch3_fix_pc_start',
			},
		],
	},
	ch3_crush_reject: {
		id: 'ch3_crush_reject',
		speaker: 'narrator',
		text: 'Cô ấy bối rối: "Tớ chỉ coi cậu là bạn tốt thôi". Bạn quê độ, muốn độn thổ.',
		textVi:
			'Cô ấy bối rối: "Tớ chỉ coi cậu là bạn tốt thôi". Bạn quê độ, muốn độn thổ.',
		textEn:
			'She was confused: "I only see you as a good friend". You felt embarrassed.',
		effects: [{ stat: 'steelMind', value: 1 }],
		next: 'ch3_fix_pc_start',
	},

	// NEW: Fix PC Event
	ch3_fix_pc_start: {
		id: 'ch3_fix_pc_start',
		speaker: 'player',
		text: '(Suy nghĩ) Hàng xóm nhờ sửa máy tính. Họ hứa trả 500k. Máy cũ rích, bụi bặm.',
		textVi:
			'(Suy nghĩ) Hàng xóm nhờ sửa máy tính. Họ hứa trả 500k. Máy cũ rích, bụi bặm.',
		textEn:
			'(Thinking) Neighbor asked to fix PC. Promised 500k. Old, dusty machine.',
		choices: [
			{
				id: 'choice_fix_pc_yes',
				text: 'Sửa giúp: Kiếm thêm thu nhập (+500k)',
				textVi: 'Sửa giúp: Kiếm thêm thu nhập (+500k)',
				textEn: 'Fix it: Earn extra income (+500k)',
				// effects: [{ stat: 'money', value: 500000 }], // Removed direct reward
				next: 'ch3_fix_pc_twist', // Redirect to twist
			},
			{
				id: 'choice_fix_pc_no',
				text: 'Từ chối: Tập trung học (Vision +1)',
				textVi: 'Từ chối: Tập trung học (Vision +1)',
				textEn: 'Refuse: Focus on study (Vision +1)',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch3_debt_1',
			},
		],
	},
	ch3_fix_pc_twist: {
		id: 'ch3_fix_pc_twist',
		speaker: 'narrator',
		text: 'Bạn hì hục cả buổi chiều. Máy chạy ngon lành. Hàng xóm rút tờ 500k ra trả, nhưng lỡ tay làm rơi xuống cống. Bạn vớt lên được... 1/5 tờ tiền.',
		textVi:
			'Bạn hì hục cả buổi chiều. Máy chạy ngon lành. Hàng xóm rút tờ 500k ra trả, nhưng lỡ tay làm rơi xuống cống. Bạn vớt lên được... 1/5 tờ tiền.',
		textEn:
			'You toiled all afternoon. PC runs great. Neighbor pulled out 500k bill, but dropped it into sewer. You fished out... 1/5 of the bill.',
		next: 'ch3_fix_pc_success',
	},
	ch3_fix_pc_success: {
		id: 'ch3_fix_pc_success',
		speaker: 'narrator',
		text: 'Hàng xóm ái ngại đưa tạm bạn 100k tiền lẻ. "Thôi cầm tạm uống nước nhé cháu". Công cốc.',
		textVi:
			'Hàng xóm ái ngại đưa tạm bạn 100k tiền lẻ. "Thôi cầm tạm uống nước nhé cháu". Công cốc.',
		textEn:
			'Neighbor awkwardly gave you 100k small change. "Take this for water". Wasted effort.',
		effects: [{ stat: 'money', value: 100000 }],
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
		next: 'ch3_debt_choice',
	},
	ch3_debt_choice: {
		id: 'ch3_debt_choice',
		speaker: 'player',
		text: 'Bạn sẽ làm gì?',
		textVi: 'Bạn sẽ làm gì?',
		textEn: 'What will you do?',
		choices: [
			{
				id: 'choice_accept_money',
				text: 'Nhận tiền (Bố làm vất vả lắm rồi)',
				textVi: 'Nhận tiền (Bố làm vất vả lắm rồi)',
				textEn: 'Accept the money (Father worked so hard)',
				effects: [{ stat: 'money', value: 500000 }],
				next: 'ch3_noodle_start',
			},
			{
				id: 'choice_refuse_money',
				text: 'Từ chối (Bố cần tiền hơn con)',
				textVi: 'Từ chối (Bố cần tiền hơn con)',
				textEn: 'Refuse (Father needs it more)',
				effects: [{ stat: 'humanity', value: 2 }],
				next: 'ch3_debt_refuse',
			},
		],
	},
	ch3_debt_refuse: {
		id: 'ch3_debt_refuse',
		speaker: 'narrator',
		text: 'Bạn đẩy tay bố ra. "Con tự lo được, bố giữ tiền đi." Bố nhìn bạn, mắt ngấn lệ, rồi gật đầu. Bố ôm bạn thật chặt, không nói gì.',
		textVi:
			'Bạn đẩy tay bố ra. "Con tự lo được, bố giữ tiền đi." Bố nhìn bạn, mắt ngấn lệ, rồi gật đầu. Bố ôm bạn thật chặt, không nói gì.',
		textEn:
			'You pushed his hand away. "I can manage, Dad. Keep the money." Father looked at you, eyes watering, then nodded. He hugged you tightly, saying nothing.',
		effects: [{ stat: 'steelMind', value: 1 }],
		next: 'ch3_noodle_start',
	},

	// NEW: Eat Noodle Event
	ch3_noodle_start: {
		id: 'ch3_noodle_start',
		speaker: 'player',
		text: '(Suy nghĩ) Đói quá. Trong túi còn ít tiền. Ăn gì đây?',
		textVi: '(Suy nghĩ) Đói quá. Trong túi còn ít tiền. Ăn gì đây?',
		textEn: '(Thinking) So hungry. Little money left. What to eat?',
		choices: [
			{
				id: 'choice_noodle_save',
				text: 'Mì tôm: Tiết kiệm là quốc sách (+20k)',
				textVi: 'Mì tôm: Tiết kiệm là quốc sách (+20k)',
				textEn: 'Instant noodles: Saving is policy (+20k)',
				effects: [{ stat: 'money', value: 20000 }],
				next: 'ch3_noodle_save',
			},
			{
				id: 'choice_noodle_eat',
				text: 'Cơm rang: Ăn no mới có sức học (Health +1)',
				textVi: 'Cơm rang: Ăn no mới có sức học (Health +1)',
				textEn: 'Fried rice: Eat well to study well (Health +1)',
				effects: [{ stat: 'health', value: 1 }],
				next: 'ch3_noodle_eat',
			},
		],
	},
	ch3_noodle_save: {
		id: 'ch3_noodle_save',
		speaker: 'narrator',
		text: 'Gói mì tôm 3k. Nước sôi miễn phí. Bạn tiết kiệm được một khoản nhỏ.',
		textVi:
			'Gói mì tôm 3k. Nước sôi miễn phí. Bạn tiết kiệm được một khoản nhỏ.',
		textEn: '3k noodle pack. Free boiling water. You saved a small amount.',
		next: 'ch3_hope_1',
	},
	ch3_noodle_eat: {
		id: 'ch3_noodle_eat',
		speaker: 'narrator',
		text: 'Đĩa cơm rang nóng hổi. Bạn cảm thấy tràn trề năng lượng.',
		textVi: 'Đĩa cơm rang nóng hổi. Bạn cảm thấy tràn trề năng lượng.',
		textEn: 'Hot fried rice. You feel full of energy.',
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
	ch3_end: {
		id: 'ch3_end',
		speaker: 'narrator',
		text: 'Giấy báo trúng tuyển Đại học trên tay. Bạn xếp gọn chiếc máy tính vào ba lô. Chuyến tàu đêm đưa bạn rời xa thị trấn nhỏ, hướng về ánh đèn thành phố.',
		textVi:
			'Giấy báo trúng tuyển Đại học trên tay. Bạn xếp gọn chiếc máy tính vào ba lô. Chuyến tàu đêm đưa bạn rời xa thị trấn nhỏ, hướng về ánh đèn thành phố.',
		textEn:
			'University acceptance letter in hand. You packed the computer into the backpack. Night train took you away from small town, towards city lights.',
		next: 'chapter_4_start',
	},
	ch3_covid_2: {
		id: 'ch3_covid_2',
		speaker: 'narrator',
		text: 'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textVi:
			'Bạn tận dụng thời gian cày nát các khóa học lập trình trên Udemy, Coursera. 14 tiếng mỗi ngày bên màn hình máy tính cũ kỹ.',
		textEn:
			'You devoured coding courses on Udemy, Coursera. 14 hours a day by the old PC.',
		next: 'ch3_sell_items_start',
	},

	// NEW: Sell Items Event
	ch3_sell_items_start: {
		id: 'ch3_sell_items_start',
		speaker: 'player',
		text: '(Suy nghĩ) Tài khoản game của mình có vài món đồ hiếm. Có người hỏi mua giá 500k.',
		textVi:
			'(Suy nghĩ) Tài khoản game của mình có vài món đồ hiếm. Có người hỏi mua giá 500k.',
		textEn: '(Thinking) My game account has rare items. Someone offered 200k.',
		choices: [
			{
				id: 'choice_sell_items_yes',
				text: 'Bán hết: Cầm cự qua ngày (+500k, Humanity -1)',
				textVi: 'Bán hết: Cầm cự qua ngày (+500k, Humanity -1)',
				textEn: 'Sell all: Survive the day (+500k, Humanity -1)',
				effects: [
					{ stat: 'money', value: 500000 },
					{ stat: 'humanity', value: -1 },
				],
				next: 'ch3_gamble_start', // Redirect to Gamble Chain
			},
			{
				id: 'choice_sell_items_no',
				text: 'Giữ lại: Kỷ niệm tuổi thơ (Humanity +1)',
				textVi: 'Giữ lại: Kỷ niệm tuổi thơ (Humanity +1)',
				textEn: 'Keep it: Childhood memories (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch3_covid_father',
			},
		],
	},
	ch3_sell_items_sell: {
		id: 'ch3_sell_items_sell',
		speaker: 'narrator',
		text: 'Giao dịch thành công. Bạn có thêm tiền để trang trải, nhưng lòng hơi tiếc nuối.',
		textVi:
			'Giao dịch thành công. Bạn có thêm tiền để trang trải, nhưng lòng hơi tiếc nuối.',
		textEn:
			'Transaction successful. Extra money for expenses, but a bit regretful.',
		next: 'ch3_covid_father',
	},

	// NEW: Gamble Chain
	ch3_gamble_start: {
		id: 'ch3_gamble_start',
		speaker: 'npc',
		text: 'Thằng bạn rủ rê: "Mày có 500k à? Đánh con lô đi, tối nay về là có 2 triệu mua màn hình mới."',
		textVi:
			'Thằng bạn rủ rê: "Mày có 500k à? Đánh con lô đi, tối nay về là có 2 triệu mua màn hình mới."',
		textEn:
			'Friend tempted: "You have 500k? Bet on lottery, tonight you get 2 million for new screen."',
		choices: [
			{
				id: 'choice_gamble_yes',
				text: 'Chơi luôn: Liều ăn nhiều (Money ??)',
				textVi: 'Chơi luôn: Liều ăn nhiều (Money ??)',
				textEn: 'Bet it: High risk (Money ??)',
				next: 'ch3_gamble_lose', // Most likely lose
			},
			{
				id: 'choice_gamble_no',
				text: 'Thôi: Cờ bạc là bác thằng bần (Steel Mind +1)',
				textVi: 'Thôi: Cờ bạc là bác thằng bần (Steel Mind +1)',
				textEn: 'No: Gambling is ruin (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch3_covid_father',
			},
		],
	},
	ch3_gamble_lose: {
		id: 'ch3_gamble_lose',
		speaker: 'narrator',
		text: 'Tối hôm đó, kết quả về... trượt lòi mắt. Bạn mất trắng 500k. Cảm giác cay cú và hối hận xâm chiếm.',
		textVi:
			'Tối hôm đó, kết quả về... trượt lòi mắt. Bạn mất trắng 500k. Cảm giác cay cú và hối hận xâm chiếm.',
		textEn:
			'That night, result came... lost. You lost 500k. Anger and regret took over.',
		effects: [
			{ stat: 'money', value: -500000 },
			{ stat: 'stress', value: 3 },
			{ stat: 'steelMind', value: -1 },
		],
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
		next: 'ch3_blackhat_start', // Redirect to Black Hat
	},

	// NEW: Black Hat Event
	ch3_blackhat_start: {
		id: 'ch3_blackhat_start',
		speaker: 'npc',
		text: 'Một người lạ trên diễn đàn nhắn tin: "Viết cho anh con tool lấy cắp cookie Facebook. Trả 2 triệu."',
		textVi:
			'Một người lạ trên diễn đàn nhắn tin: "Viết cho anh con tool lấy cắp cookie Facebook. Trả 2 triệu."',
		textEn:
			'Stranger on forum messaged: "Write me a tool to steal Facebook cookies. Pay 2 million."',
		choices: [
			{
				id: 'choice_blackhat_accept',
				text: 'Nhận lời: Đang túng quá (Money +2M, Humanity -10)',
				textVi: 'Nhận lời: Đang túng quá (Money +2M, Humanity -10)',
				textEn: 'Accept: Desperate (Money +2M, Humanity -10)',
				effects: [
					{ stat: 'money', value: 2000000 },
					{ stat: 'humanity', value: -10 },
					{ stat: 'stress', value: 2 }, // Fear of police
				],
				next: 'ch3_covid_job_choice',
			},
			{
				id: 'choice_blackhat_refuse',
				text: 'Từ chối: Đạo đức nghề nghiệp (Steel Mind +2)',
				textVi: 'Từ chối: Đạo đức nghề nghiệp (Steel Mind +2)',
				textEn: 'Refuse: Professional ethics (Steel Mind +2)',
				effects: [{ stat: 'steelMind', value: 2 }],
				next: 'ch3_covid_job_choice',
			},
		],
	},
	ch3_covid_job_choice: {
		id: 'ch3_covid_job_choice',
		speaker: 'player',
		text: 'Bạn sẽ quyết định như thế nào?',
		textVi: 'Bạn sẽ quyết định như thế nào?',
		textEn: 'What will you decide?',
		choices: [
			{
				id: 'choice_accept_job',
				text: 'Nhận job (Cơ hội để kiếm tiền)',
				textVi: 'Nhận job (Cơ hội để kiếm tiền)',
				textEn: 'Accept the job (Opportunity to earn money)',
				effects: [
					{ stat: 'steelMind', value: 2 },
					{ stat: 'money', value: 300000 },
				],
				next: 'ch3_covid_accept',
			},
			{
				id: 'choice_refuse_job',
				text: 'Từ chối (Chưa đủ kỹ năng, cần học thêm)',
				textVi: 'Từ chối (Chưa đủ kỹ năng, cần học thêm)',
				textEn: 'Refuse (Not skilled enough, need to learn more)',
				effects: [{ stat: 'vision', value: 2 }],
				next: 'ch3_covid_refuse',
			},
		],
	},
	ch3_covid_accept: {
		id: 'ch3_covid_accept',
		speaker: 'narrator',
		text: 'Bạn nhận job và làm việc suốt 3 ngày liền. Kết quả không hoàn hảo nhưng khách hàng chấp nhận. Đây là bước đầu tiên trong sự nghiệp lập trình viên của bạn.',
		textVi:
			'Bạn nhận job và làm việc suốt 3 ngày liền. Kết quả không hoàn hảo nhưng khách hàng chấp nhận. Đây là bước đầu tiên trong sự nghiệp lập trình viên của bạn.',
		textEn:
			"You accepted and worked for 3 days straight. Result wasn't perfect but client accepted it. This is your first step as a programmer.",
		next: 'ch3_covid_end',
	},
	ch3_covid_refuse: {
		id: 'ch3_covid_refuse',
		speaker: 'narrator',
		text: 'Bạn từ chối và dành thêm 2 tháng để học sâu hơn về JavaScript và React. Sau đó bạn tự tin nhận các job phức tạp hơn với thù lao cao hơn.',
		textVi:
			'Bạn từ chối và dành thêm 2 tháng để học sâu hơn về JavaScript và React. Sau đó bạn tự tin nhận các job phức tạp hơn với thù lao cao hơn.',
		textEn:
			'You refused and spent 2 more months learning JavaScript and React deeply. Later you confidently took more complex jobs with higher pay.',
		effects: [{ stat: 'steelMind', value: 1 }],
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
