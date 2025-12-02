// ==========================================
// CHAPTER 1: BIẾN SỐ KHỞI TẠO (INITIALIZATION)
// Timeline: 0-10 tuổi
// Theme: Vị vua không ngai và Thế giới hoàn hảo giả tạo
// ==========================================

import type { Chapter, DialogueNode } from '../types';

export const chapter1: Chapter = {
	id: 1,
	name: 'Biến Số Khởi Tạo',
	nameVi: 'Biến Số Khởi Tạo',
	nameEn: 'Initialization',
	ageRange: '0-10 tuổi',
	theme: 'Vị vua không ngai và Thế giới hoàn hảo giả tạo',
	themeVi: 'Vị vua không ngai và Thế giới hoàn hảo giả tạo',
	themeEn: 'The King Without a Throne and The False Perfect World',
	scenes: [
		{
			id: 'ch1_intro',
			name: 'Ký ức 3 tuổi',
			nameVi: 'Ký ức 3 tuổi: Người khổng lồ xây cầu',
			nameEn: 'Age 3: The Giant Who Built Bridges',
			background: '/assets/sprites/backgrounds/construction_site.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: 'ch1_intro',
		},
		{
			id: 'ch1_school',
			name: 'Lớp 1-3',
			nameVi: 'Lớp 1-3: Hoàng tử bé nơi biên ải',
			nameEn: 'Grade 1-3: The Little Prince of the Border',
			background: '/assets/sprites/backgrounds/school_gate.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: 'ch1_intro', // Changed from ch1_start
		},
		{
			id: 'ch1_fortress',
			name: 'Căn cứ địa 4.000m²',
			nameVi: 'Căn cứ địa 4.000m² - The Fortress',
			nameEn: 'The 4,000m² Fortress',
			background: '/assets/sprites/backgrounds/fortress.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: 'ch1_fortress_1',
		},
		{
			id: 'ch1_revelation',
			name: 'Mùa hè Hà Nội',
			nameVi: 'Mùa hè Hà Nội - The Revelation',
			nameEn: 'Summer in Hanoi - The Revelation',
			background: '/assets/sprites/backgrounds/hanoi_city.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: 'ch1_revelation_1',
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: 'ch1_todo_garden',
				text: 'Khám phá khu vườn 4000m²',
				textVi: 'Khám phá khu vườn 4000m²',
				textEn: 'Explore the 4000m² garden',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch1_todo_stars',
				text: 'Hỏi bố về các vì sao',
				textVi: 'Hỏi bố về các vì sao',
				textEn: 'Ask Dad about the stars',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch1_todo_mom_cook',
				text: 'Giúp mẹ nấu ăn',
				textVi: 'Giúp mẹ nấu ăn',
				textEn: 'Help Mom cook',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch1_todo_play_bi',
				text: 'Chơi với chó Bi',
				textVi: 'Chơi với chó Bi',
				textEn: 'Play with Bi the dog',
				effects: [{ stat: 'humanity', value: 1 }],
				reward: { stress: -1 },
			},
			{
				id: 'ch1_todo_listen_adults',
				text: 'Nghe lén người lớn nói chuyện',
				textVi: 'Nghe lén người lớn nói chuyện',
				textEn: 'Eavesdrop on adults',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { stress: 1 },
			},
			{
				id: 'ch1_todo_read_comics',
				text: 'Đọc truyện tranh',
				textVi: 'Đọc truyện tranh',
				textEn: 'Read comic books',
				reward: { stress: -1 },
			},
			{
				id: 'ch1_todo_break_toy',
				text: 'Tháo tung đồ chơi ra xem',
				textVi: 'Tháo tung đồ chơi ra xem',
				textEn: 'Disassemble toys',
				effects: [{ stat: 'vision', value: 1 }],
				cost: { money: 100000 }, // Tốn tiền mua đồ chơi mới
			},
			{
				id: 'ch1_todo_climb_tree',
				text: 'Leo cây hái quả',
				textVi: 'Leo cây hái quả',
				textEn: 'Climb tree to pick fruits',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 1 },
			},
			{
				id: 'ch1_todo_watch_tv',
				text: 'Xem hoạt hình',
				textVi: 'Xem hoạt hình',
				textEn: 'Watch cartoons',
				reward: { stress: -1 },
			},
			{
				id: 'ch1_todo_draw',
				text: 'Vẽ tranh nguệch ngoạc',
				textVi: 'Vẽ tranh nguệch ngoạc',
				textEn: 'Draw doodles',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch1_todo_fight',
				text: 'Đánh nhau với bạn hàng xóm',
				textVi: 'Đánh nhau với bạn hàng xóm',
				textEn: 'Fight with neighbor kid',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { health: 2, humanity: 1 }, // Increased Health cost
			},
			{
				id: 'ch1_todo_sleep_late',
				text: 'Ngủ nướng',
				textVi: 'Ngủ nướng',
				textEn: 'Sleep in',
				reward: { health: 1 },
			},
			// Removed ch1_todo_ask_money - Moved to dialogue
			{
				id: 'ch1_todo_hide_seek',
				text: 'Chơi trốn tìm',
				textVi: 'Chơi trốn tìm',
				textEn: 'Play hide and seek',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch1_todo_catch_bugs',
				text: 'Bắt dế mèn',
				textVi: 'Bắt dế mèn',
				textEn: 'Catch crickets',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'ch1_todo_cry',
				text: 'Khóc nhè ăn vạ',
				textVi: 'Khóc nhè ăn vạ',
				textEn: 'Cry and throw tantrum',
				cost: { humanity: 1 },
			},
			{
				id: 'ch1_todo_share_toy',
				text: 'Chia sẻ đồ chơi',
				textVi: 'Chia sẻ đồ chơi',
				textEn: 'Share toys',
				effects: [{ stat: 'humanity', value: 1 }],
			},
			{
				id: 'ch1_todo_bully',
				text: 'Bắt nạt bạn yếu hơn',
				textVi: 'Bắt nạt bạn yếu hơn',
				textEn: 'Bully weaker kids',
				effects: [{ stat: 'steelMind', value: 1 }],
				cost: { humanity: 3 }, // Increased Humanity cost
			},
			{
				id: 'ch1_todo_learn_math',
				text: 'Học đếm số',
				textVi: 'Học đếm số',
				textEn: 'Learn to count',
				effects: [{ stat: 'vision', value: 1 }],
			},
			{
				id: 'ch1_todo_dream',
				text: 'Mơ mộng nhìn mây',
				textVi: 'Mơ mộng nhìn mây',
				textEn: 'Daydream watching clouds',
				effects: [{ stat: 'vision', value: 1 }],
			},
		],
		dreamQuestions: [
			{
				id: 'ch1_dream_fly',
				text: 'Bạn mơ thấy mình biết bay. Bạn sẽ bay đi đâu?',
				textVi: 'Bạn mơ thấy mình biết bay. Bạn sẽ bay đi đâu?',
				textEn: 'You dream you can fly. Where will you go?',
				choices: [
					{
						id: 'ch1_dream_fly_moon',
						text: 'Bay lên mặt trăng',
						textVi: 'Bay lên mặt trăng',
						textEn: 'Fly to the moon',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch1_dream_fly_home',
						text: 'Bay quanh nhà bảo vệ bố mẹ',
						textVi: 'Bay quanh nhà bảo vệ bố mẹ',
						textEn: 'Fly around house to protect parents',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_fly_school',
						text: 'Bay đến trường khoe bạn bè',
						textVi: 'Bay đến trường khoe bạn bè',
						textEn: 'Fly to school to show off',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch1_dream_fly_fall',
						text: 'Sợ độ cao, không dám bay',
						textVi: 'Sợ độ cao, không dám bay',
						textEn: 'Scared of heights, dare not fly',
						next: '',
						effects: [{ stat: 'steelMind', value: -1 }],
					},
				],
			},
			{
				id: 'ch1_dream_monster',
				text: 'Một con quái vật gầm gừ dưới gầm giường.',
				textVi: 'Một con quái vật gầm gừ dưới gầm giường.',
				textEn: 'A monster growls under the bed.',
				choices: [
					{
						id: 'ch1_dream_monster_fight',
						text: 'Lấy kiếm nhựa đánh nó',
						textVi: 'Lấy kiếm nhựa đánh nó',
						textEn: 'Fight it with plastic sword',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch1_dream_monster_friend',
						text: 'Mời nó ăn kẹo',
						textVi: 'Mời nó ăn kẹo',
						textEn: 'Offer it candy',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_monster_cry',
						text: 'Khóc gọi mẹ',
						textVi: 'Khóc gọi mẹ',
						textEn: 'Cry for Mom',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_monster_ignore',
						text: 'Trùm chăn ngủ tiếp',
						textVi: 'Trùm chăn ngủ tiếp',
						textEn: 'Cover with blanket and sleep',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
			{
				id: 'ch1_dream_king',
				text: 'Bạn mơ thấy mình là vua của một vương quốc đồ chơi.',
				textVi: 'Bạn mơ thấy mình là vua của một vương quốc đồ chơi.',
				textEn: 'You dream you are king of a toy kingdom.',
				choices: [
					{
						id: 'ch1_dream_king_rule',
						text: 'Ra lệnh cho lính chì',
						textVi: 'Ra lệnh cho lính chì',
						textEn: 'Command toy soldiers',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch1_dream_king_share',
						text: 'Chia đồ chơi cho mọi người',
						textVi: 'Chia đồ chơi cho mọi người',
						textEn: 'Share toys with everyone',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_king_build',
						text: 'Xây lâu đài cao hơn nữa',
						textVi: 'Xây lâu đài cao hơn nữa',
						textEn: 'Build castle higher',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch1_dream_king_destroy',
						text: 'Đập phá hết',
						textVi: 'Đập phá hết',
						textEn: 'Destroy everything',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
				],
			},
			{
				id: 'ch1_dream_lost',
				text: 'Bạn bị lạc trong siêu thị.',
				textVi: 'Bạn bị lạc trong siêu thị.',
				textEn: 'You are lost in a supermarket.',
				choices: [
					{
						id: 'ch1_dream_lost_find',
						text: 'Tự tìm đường ra',
						textVi: 'Tự tìm đường ra',
						textEn: 'Find way out yourself',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch1_dream_lost_wait',
						text: 'Đứng yên chờ bố mẹ',
						textVi: 'Đứng yên chờ bố mẹ',
						textEn: 'Stand still wait for parents',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch1_dream_lost_cry',
						text: 'Khóc toáng lên',
						textVi: 'Khóc toáng lên',
						textEn: 'Cry loudly',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_lost_play',
						text: 'Mải chơi quên cả sợ',
						textVi: 'Mải chơi quên cả sợ',
						textEn: 'Too busy playing to fear',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
			{
				id: 'ch1_dream_future',
				text: 'Một người lớn lạ mặt xuất hiện và nói là bạn trong tương lai.',
				textVi: 'Một người lớn lạ mặt xuất hiện và nói là bạn trong tương lai.',
				textEn: 'A stranger appears and says they are you in the future.',
				choices: [
					{
						id: 'ch1_dream_future_ask',
						text: 'Hỏi xem mình có giàu không',
						textVi: 'Hỏi xem mình có giàu không',
						textEn: 'Ask if I am rich',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
					{
						id: 'ch1_dream_future_hug',
						text: 'Ôm người đó',
						textVi: 'Ôm người đó',
						textEn: 'Hug them',
						next: '',
						effects: [{ stat: 'humanity', value: 1 }],
					},
					{
						id: 'ch1_dream_future_doubt',
						text: 'Không tin, bỏ chạy',
						textVi: 'Không tin, bỏ chạy',
						textEn: 'Disbelieve, run away',
						next: '',
						effects: [{ stat: 'steelMind', value: 1 }],
					},
					{
						id: 'ch1_dream_future_gift',
						text: 'Đòi quà',
						textVi: 'Đòi quà',
						textEn: 'Demand a gift',
						next: '',
						effects: [{ stat: 'vision', value: 1 }],
					},
				],
			},
		],
	},
};

// ==========================================
// DIALOGUE NODES - Chapter 1
// ==========================================

export const chapter1Dialogues: Record<string, DialogueNode> = {
	// NEW: Intro
	ch1_intro: {
		id: 'ch1_intro',
		speaker: 'narrator',
		text: 'Những năm 2000. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textVi:
			'Những năm 2000. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textEn:
			'The 2000s. Cicadas buzzing on flamboyant trees. Your world is wrapped in a small courtyard and sparkling marbles.',
		next: 'ch1_intro_1',
	},
	// 1.1 Ký ức 3 tuổi
	ch1_intro_1: {
		id: 'ch1_intro_1',
		speaker: 'narrator',
		text: 'Ký ức đầu tiên của bạn không phải là lời ru của mẹ, mà là mùi xi măng và tiếng ầm ầm của xe lu.',
		textVi:
			'Ký ức đầu tiên của bạn không phải là lời ru của mẹ, mà là mùi xi măng và tiếng ầm ầm của xe lu.',
		textEn:
			"Your first memory was not your mother's lullaby, but the smell of cement and the rumbling of road rollers.",
		next: 'ch1_intro_2',
	},
	ch1_intro_2: {
		id: 'ch1_intro_2',
		speaker: 'narrator',
		text: 'Bố Q là một huyền thoại trong mắt đứa trẻ 3 tuổi. Một người đàn ông da sạm nắng, tiếng nói vang như chuông, mỗi lần về nhà là mang theo mùi thuốc lá và bụi đường.',
		textVi:
			'Bố Q là một huyền thoại trong mắt đứa trẻ 3 tuổi. Một người đàn ông da sạm nắng, tiếng nói vang như chuông, mỗi lần về nhà là mang theo mùi thuốc lá và bụi đường.',
		textEn:
			'Father Q was a legend in the eyes of a 3-year-old. A sun-tanned man with a voice that rang like a bell, bringing the smell of tobacco and road dust every time he came home.',
		next: 'ch1_intro_lore',
	},
	ch1_intro_lore: {
		id: 'ch1_intro_lore',
		speaker: 'narrator',
		text: 'Để có ngày hôm nay, bố đã trải qua 10 năm địa ngục. Bố làm thuê cho 3 công ty xây dựng cùng lúc...',
		textVi:
			'Để có ngày hôm nay, bố đã trải qua 10 năm địa ngục. Bố làm thuê cho 3 công ty xây dựng cùng lúc...',
		textEn:
			'To get here, father went through 10 years of hell. He worked for 3 construction companies simultaneously...',
		next: 'ch1_intro_schedule',
	},
	ch1_intro_schedule: {
		id: 'ch1_intro_schedule',
		speaker: 'narrator',
		text: 'Lịch trình của bố là một cỗ máy không nghỉ: Sáng chỉ huy công trường A, chiều chạy thầu công ty B, đêm đi tiếp khách công ty C.',
		textVi:
			'Lịch trình của bố là một cỗ máy không nghỉ: Sáng chỉ huy công trường A, chiều chạy thầu công ty B, đêm đi tiếp khách công ty C.',
		textEn:
			"Father's schedule was a relentless machine: Morning at site A, afternoon bidding for company B, night entertaining for company C.",
		next: 'ch1_father_drunk',
	},
	ch1_father_drunk: {
		id: 'ch1_father_drunk',
		speaker: 'boQ',
		text: '(Say khướt) Bố làm tất cả... ực... là vì cái nhà này. Để không ai khinh thường bố con mình nữa.',
		textVi:
			'(Say khướt) Bố làm tất cả... ực... là vì cái nhà này. Để không ai khinh thường bố con mình nữa.',
		textEn:
			'(Drunk) I do it all... *hic*... for this family. So no one looks down on us anymore.',
		next: 'ch1_intro_lesson',
	},
	ch1_intro_lesson: {
		id: 'ch1_intro_lesson',
		speaker: 'narrator',
		text: 'Bạn nhìn thấy bố ngủ gục trên bàn làm việc, tay vẫn cầm chiếc bút kỹ thuật. Bạn cảm thấy gì?',
		textVi:
			'Bạn nhìn thấy bố ngủ gục trên bàn làm việc, tay vẫn cầm chiếc bút kỹ thuật. Bạn cảm thấy gì?',
		textEn:
			'You saw father asleep on his desk, pen in hand. What did you feel?',
		choices: [
			{
				id: 'choice_admire_dad',
				text: 'Ngưỡng mộ: Thành công xây bằng mồ hôi (Steel Mind +1)',
				textVi: 'Ngưỡng mộ: Thành công xây bằng mồ hôi (Steel Mind +1)',
				textEn: 'Admire: Success is built on sweat (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch1_ask_money_start',
			},
			{
				id: 'choice_pity_dad',
				text: 'Thương bố: Bố vất vả quá (Humanity +1)',
				textVi: 'Thương bố: Bố vất vả quá (Humanity +1)',
				textEn: 'Pity: Father works too hard (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch1_ask_money_start',
			},
		],
	},

	// NEW: Ask for Money Event
	ch1_ask_money_start: {
		id: 'ch1_ask_money_start',
		speaker: 'player',
		text: '(Suy nghĩ) Bố đang vui vẻ sau khi uống rượu xong. Mình có nên xin tiền mua kẹo không nhỉ? Mẹ thì chắc chắn không cho rồi.',
		textVi:
			'(Suy nghĩ) Bố đang vui vẻ sau khi uống rượu xong. Mình có nên xin tiền mua kẹo không nhỉ? Mẹ thì chắc chắn không cho rồi.',
		textEn:
			"(Thinking) Dad is happy after drinking. Should I ask for candy money? Mom definitely wouldn't give any.",
		choices: [
			{
				id: 'choice_ask_money_yes',
				text: 'Xin bố 50k: "Bố ơi cho con tiền mua kẹo"',
				textVi: 'Xin bố 50k: "Bố ơi cho con tiền mua kẹo"',
				textEn: 'Ask for 50k: "Dad, can I have candy money?"',
				effects: [{ stat: 'money', value: 50000 }],
				next: 'ch1_ask_money_success',
			},
			{
				id: 'choice_ask_money_no',
				text: 'Thôi ngại lắm: Bố đang mệt (Humanity +1)',
				textVi: 'Thôi ngại lắm: Bố đang mệt (Humanity +1)',
				textEn: 'Too shy: Dad is tired (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch1_school_1',
			},
		],
	},
	ch1_ask_money_success: {
		id: 'ch1_ask_money_success',
		speaker: 'boQ',
		text: '"Tiền đây. Cầm lấy mà mua. Đừng có nói với mẹ đấy nhé!" (Bố dúi tờ 50k vào tay bạn)',
		textVi:
			'"Tiền đây. Cầm lấy mà mua. Đừng có nói với mẹ đấy nhé!" (Bố dúi tờ 50k vào tay bạn)',
		textEn:
			'"Here. Take it. Don\'t tell your mom!" (Dad slips a 50k note into your hand)',
		next: 'ch1_school_1',
	},

	// 1.2 Lớp 1-3: Hoàng tử bé nơi biên ải
	ch1_school_1: {
		id: 'ch1_school_1',
		speaker: 'narrator',
		text: 'Gia đình bạn sống ở Lào Cai. Bố là chủ doanh nghiệp xây dựng hạ tầng "có tiếng nói nhất tỉnh". Các quan chức địa phương thường ghé nhà uống trà.',
		textVi:
			'Gia đình bạn sống ở Lào Cai. Bố là chủ doanh nghiệp xây dựng hạ tầng "có tiếng nói nhất tỉnh". Các quan chức địa phương thường ghé nhà uống trà.',
		textEn:
			'Your family lived in Lao Cai. Father was the most influential infrastructure contractor in the province. Local officials often visited for tea.',
		next: 'ch1_school_2',
	},
	ch1_school_2: {
		id: 'ch1_school_2',
		speaker: 'narrator',
		text: 'Bạn đi học có tài xế đưa đón. Bạn bè nhìn bạn với ánh mắt ngưỡng mộ pha lẫn sợ sệt.',
		textVi:
			'Bạn đi học có tài xế đưa đón. Bạn bè nhìn bạn với ánh mắt ngưỡng mộ pha lẫn sợ sệt.',
		textEn:
			'You went to school with a chauffeur. Friends looked at you with a mix of admiration and fear.',
		next: 'ch1_classmates_whisper',
	},
	ch1_end: {
		id: 'ch1_end',
		speaker: 'narrator',
		text: 'Một buổi chiều muộn, tiếng đập cửa dồn dập phá tan sự yên bình. Những người lạ mặt bước vào, và bố mẹ bạn cúi đầu im lặng.',
		textVi:
			'Một buổi chiều muộn, tiếng đập cửa dồn dồn dập phá tan sự yên bình. Những người lạ mặt bước vào, và bố mẹ bạn cúi đầu im lặng.',
		textEn:
			'Late one afternoon, frantic knocking shattered the peace. Strangers walked in, and your parents bowed their heads in silence.',
		next: 'chapter_2_start', // Will be handled by engine to switch chapter
	},
	ch1_classmates_whisper: {
		id: 'ch1_classmates_whisper',
		speaker: 'npc',
		text: '"Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textVi:
			'"Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textEn:
			'"Rich kid, don\'t touch him. His dad knows the provincial chairman."',
		next: 'ch1_school_reaction',
	},
	ch1_school_reaction: {
		id: 'ch1_school_reaction',
		speaker: 'player',
		text: '(Suy nghĩ) Họ sợ mình... nhưng mình chẳng có ai để chơi cùng cả.',
		textVi: '(Suy nghĩ) Họ sợ mình... nhưng mình chẳng có ai để chơi cùng cả.',
		textEn: '(Thinking) They fear me... but I have no one to play with.',
		next: 'ch1_bully_start', // Redirect to Bully event
	},

	// NEW: School Bully Event
	ch1_bully_start: {
		id: 'ch1_bully_start',
		speaker: 'narrator',
		text: 'Một đứa bạn to con trong lớp chặn đường bạn. Nó muốn trấn lột chiếc bút máy xịn của bạn.',
		textVi:
			'Một đứa bạn to con trong lớp chặn đường bạn. Nó muốn trấn lột chiếc bút máy xịn của bạn.',
		textEn:
			'A big kid in class blocks your way. He wants to take your fancy fountain pen.',
		choices: [
			{
				id: 'choice_bully_fight',
				text: 'Đánh lại: Không được bắt nạt tao! (Steel Mind +2, Health -1)',
				textVi: 'Đánh lại: Không được bắt nạt tao! (Steel Mind +2, Health -1)',
				textEn: "Fight back: Don't bully me! (Steel Mind +2, Health -1)",
				effects: [
					{ stat: 'steelMind', value: 2 },
					{ stat: 'health', value: -1 },
					{ stat: 'humanity', value: -1 },
				],
				next: 'ch1_bully_fight_result',
			},
			{
				id: 'choice_bully_report',
				text: 'Mách cô giáo: An toàn là trên hết (Vision +1)',
				textVi: 'Mách cô giáo: An toàn là trên hết (Vision +1)',
				textEn: 'Tell teacher: Safety first (Vision +1)',
				effects: [
					{ stat: 'vision', value: 1 },
					{ stat: 'steelMind', value: -1 },
				],
				next: 'ch1_bully_report_result',
			},
			{
				id: 'choice_bully_give',
				text: 'Đưa bút: Tránh rắc rối (Humanity +1)',
				textVi: 'Đưa bút: Tránh rắc rối (Humanity +1)',
				textEn: 'Give pen: Avoid trouble (Humanity +1)',
				effects: [
					{ stat: 'humanity', value: 1 },
					{ stat: 'steelMind', value: -2 },
				],
				next: 'ch1_school_trip',
			},
		],
	},
	ch1_bully_fight_result: {
		id: 'ch1_bully_fight_result',
		speaker: 'narrator',
		text: 'Bạn lao vào đánh nhau. Cả hai đều sứt đầu mẻ trán. Bố mẹ bị mời lên trường, nhưng bố lại cười: "Đàn ông là phải thế".',
		textVi:
			'Bạn lao vào đánh nhau. Cả hai đều sứt đầu mẻ trán. Bố mẹ bị mời lên trường, nhưng bố lại cười: "Đàn ông là phải thế".',
		textEn:
			'You fought. Both bruised. Parents called, but Dad laughed: "That\'s how men are".',
		next: 'ch1_school_trip',
	},
	ch1_bully_report_result: {
		id: 'ch1_bully_report_result',
		speaker: 'narrator',
		text: 'Cô giáo phạt đứa bạn kia. Nhưng từ đó, cả lớp gọi bạn là "kẻ mách lẻo". Bạn càng cô đơn hơn.',
		textVi:
			'Cô giáo phạt đứa bạn kia. Nhưng từ đó, cả lớp gọi bạn là "kẻ mách lẻo". Bạn càng cô đơn hơn.',
		textEn:
			'Teacher punished him. But class called you "tattletale". You became lonelier.',
		next: 'ch1_school_trip',
	},
	ch1_school_trip: {
		id: 'ch1_school_trip',
		speaker: 'narrator',
		text: 'Cuối tuần, bố cho bạn ngồi trên chiếc Land Cruiser, đi khảo sát những con đường xuyên núi.',
		textVi:
			'Cuối tuần, bố cho bạn ngồi trên chiếc Land Cruiser, đi khảo sát những con đường xuyên núi.',
		textEn:
			'On weekends, father took you in the Land Cruiser to survey mountain roads.',
		next: 'ch1_school_quote',
	},
	ch1_school_quote: {
		id: 'ch1_school_quote',
		speaker: 'boQ',
		text: '"Con nhìn xem, trước kia chỗ này là rừng rậm. Bố đã vẽ một đường thẳng lên bản đồ, và giờ nó là con đường nhựa. Con người có thể thay đổi địa hình, miễn là có ý chí."',
		textVi:
			'"Con nhìn xem, trước kia chỗ này là rừng rậm. Bố đã vẽ một đường thẳng lên bản đồ, và giờ nó là con đường nhựa. Con người có thể thay đổi địa hình, miễn là có ý chí."',
		textEn:
			'"Look, this used to be jungle. I drew a straight line on the map, and now it\'s an asphalt road. Humans can reshape the land, as long as they have the will."',
		next: 'ch1_school_ego',
	},
	ch1_school_ego: {
		id: 'ch1_school_ego',
		speaker: 'player',
		text: '(Nhìn những vách núi dựng đứng) Bố mình như một vị thần dời non lấp bể.',
		textVi:
			'(Nhìn những vách núi dựng đứng) Bố mình như một vị thần dời non lấp bể.',
		textEn:
			'(Looking at towering cliffs) My father is like a god moving mountains.',
		choices: [
			{
				id: 'choice_enjoy_attention',
				text: 'Tự hào: Mình là con của Bố (Ego ++)',
				textVi: 'Tự hào: Mình là con của Bố (Ego ++)',
				textEn: "Proud: I am Father's son (Ego ++)",
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch1_buy_toy_start',
			},
			{
				id: 'choice_feel_isolated',
				text: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textVi: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textEn: 'Fear: This power feels alien (Humanity ++)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch1_buy_toy_start',
			},
		],
	},

	// NEW: Buy Toy Event
	ch1_buy_toy_start: {
		id: 'ch1_buy_toy_start',
		speaker: 'narrator',
		text: 'Trên đường về, bạn đi ngang qua cửa hàng đồ chơi. Một con robot Gundam mới toanh đang được trưng bày. Nó đẹp lấp lánh.',
		textVi:
			'Trên đường về, bạn đi ngang qua cửa hàng đồ chơi. Một con robot Gundam mới toanh đang được trưng bày. Nó đẹp lấp lánh.',
		textEn:
			'On the way home, you pass a toy store. A brand new Gundam robot is on display. It sparkles beautifully.',
		choices: [
			{
				id: 'choice_buy_toy_yes',
				text: 'Mua luôn: Đắt sắt ra miếng (-100k)',
				textVi: 'Mua luôn: Đắt sắt ra miếng (-100k)',
				textEn: 'Buy it: Quality costs money (-100k)',
				effects: [
					{ stat: 'money', value: -100000 },
					{ stat: 'humanity', value: 1 }, // Happiness/Childhood joy
				],
				next: 'ch1_buy_toy_success',
			},
			{
				id: 'choice_buy_toy_no',
				text: 'Tiếc tiền: Thôi để dành tiền làm việc khác (Steel Mind +1)',
				textVi: 'Tiếc tiền: Thôi để dành tiền làm việc khác (Steel Mind +1)',
				textEn: 'Save money: Save for other things (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch1_fortress_1',
			},
		],
	},
	ch1_buy_toy_success: {
		id: 'ch1_buy_toy_success',
		speaker: 'player',
		text: '(Cầm con robot trên tay) Cảm giác sở hữu món đồ mình thích thật tuyệt vời. Lũ bạn sẽ lác mắt cho xem.',
		textVi:
			'(Cầm con robot trên tay) Cảm giác sở hữu món đồ mình thích thật tuyệt vời. Lũ bạn sẽ lác mắt cho xem.',
		textEn:
			'(Holding the robot) The feeling of owning what you want is amazing. Friends will be jealous.',
		next: 'ch1_toy_showoff', // Redirect to Showoff choice
	},

	// NEW: Spoiled Prince Chain
	ch1_toy_showoff: {
		id: 'ch1_toy_showoff',
		speaker: 'player',
		text: '(Suy nghĩ) Con robot đẹp thế này, có nên mang đến lớp khoe không nhỉ?',
		textVi:
			'(Suy nghĩ) Con robot đẹp thế này, có nên mang đến lớp khoe không nhỉ?',
		textEn: '(Thinking) This robot is so cool, should I show it off at class?',
		choices: [
			{
				id: 'choice_showoff_yes',
				text: 'Mang đi khoe: Cho chúng nó lác mắt (Ego ++)',
				textVi: 'Mang đi khoe: Cho chúng nó lác mắt (Ego ++)',
				textEn: 'Show off: Make them jealous (Ego ++)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch1_show_off_fail',
			},
			{
				id: 'choice_showoff_no',
				text: 'Để ở nhà: Sợ bị mất (Vision +1)',
				textVi: 'Để ở nhà: Sợ bị mất (Vision +1)',
				textEn: 'Keep at home: Fear losing it (Vision +1)',
				effects: [{ stat: 'vision', value: 1 }],
				next: 'ch1_fortress_1',
			},
		],
	},
	ch1_show_off_fail: {
		id: 'ch1_show_off_fail',
		speaker: 'narrator',
		text: 'Bạn mang robot đến lớp. Lũ bạn xúm lại xem, tranh giành nhau. "Rắc!" - cánh tay robot bị gãy. Bạn khóc nức nở, còn lũ bạn tản ra, cười cợt.',
		textVi:
			'Bạn mang robot đến lớp. Lũ bạn xúm lại xem, tranh giành nhau. "Rắc!" - cánh tay robot bị gãy. Bạn khóc nức nở, còn lũ bạn tản ra, cười cợt.',
		textEn:
			'You brought robot to class. Kids grabbed it. "Snap!" - arm broke. You cried, they laughed.',
		effects: [
			{ stat: 'humanity', value: -2 },
			{ stat: 'steelMind', value: 2 },
			{ stat: 'stress', value: 2 },
		],
		next: 'ch1_fortress_1',
	},

	// 1.3 Lớp 4: Căn cứ địa 4.000m²
	ch1_fortress_1: {
		id: 'ch1_fortress_1',
		speaker: 'narrator',
		text: 'Sau nhiều năm tích cóp, bố quyết định xây dựng "di sản" của đời mình. Bố mua đứt quả đồi của ông ngoại. Một dinh thự rộng 4.000m² mọc lên.',
		textVi:
			'Sau nhiều năm tích cóp, bố quyết định xây dựng "di sản" của đời mình. Bố mua đứt quả đồi của ông ngoại. Một dinh thự rộng 4.000m² mọc lên.',
		textEn:
			'After years of saving, father decided to build his life\'s "legacy". He bought grandfather\'s hill. A 4,000m² mansion rose up.',
		next: 'ch1_fortress_zoo',
	},
	ch1_fortress_zoo: {
		id: 'ch1_fortress_zoo',
		speaker: 'narrator',
		text: 'Nó là một pháo đài với hệ sinh thái riêng. Sân trước: Đà điểu chạy ầm ầm. Vườn sau: Công xòe đuôi múa. Trên cây: Vượn và khỉ chuyền cành.',
		textVi:
			'Nó là một pháo đài với hệ sinh thái riêng. Sân trước: Đà điểu chạy ầm ầm. Vườn sau: Công xòe đuôi múa. Trên cây: Vượn và khỉ chuyền cành.',
		textEn:
			'It was a fortress with its own ecosystem. Front yard: Thundering ostriches. Back yard: Dancing peacocks. Trees: Swinging gibbons and monkeys.',
		next: 'ch1_fortress_guards',
	},
	ch1_fortress_guards: {
		id: 'ch1_fortress_guards',
		speaker: 'boQ',
		text: '"Đội vệ sĩ của bố đấy. 15 con chó được tuyển chọn kỹ lưỡng. Chúng trung thành hơn con người nhiều."',
		textVi:
			'"Đội vệ sĩ của bố đấy. 15 con chó được tuyển chọn kỹ lưỡng. Chúng trung thành hơn con người nhiều."',
		textEn:
			'"My guard squad. 15 carefully selected dogs. They are far more loyal than humans."',
		next: 'ch1_fortress_guards_detail',
	},
	ch1_fortress_guards_detail: {
		id: 'ch1_fortress_guards_detail',
		speaker: 'narrator',
		text: 'Những con Ngao Tạng lầm lì như tảng đá. Những con chó Phú Quốc tinh khôn, xoáy lưng dựng ngược. Và đặc biệt là Bi.',
		textVi:
			'Những con Ngao Tạng lầm lì như tảng đá. Những con chó Phú Quốc tinh khôn, xoáy lưng dựng ngược. Và đặc biệt là Bi.',
		textEn:
			'Tibetan Mastiffs stoic as boulders. Clever Phu Quoc ridgebacks. And especially Bi.',
		next: 'ch1_fortress_bi',
	},
	ch1_fortress_bi: {
		id: 'ch1_fortress_bi',
		speaker: 'narrator',
		text: 'Bi là con Alaska khổng lồ, lông mượt, đẹp nhất và trung thành nhất. Nó luôn đi theo bạn như hình với bóng trong khu vườn rộng lớn này.',
		textVi:
			'Bi là con Alaska khổng lồ, lông mượt, đẹp nhất và trung thành nhất. Nó luôn đi theo bạn như hình với bóng trong khu vườn rộng lớn này.',
		textEn:
			'Bi was a giant Alaska, silky fur, the most beautiful and loyal. He followed you like a shadow in this vast garden.',
		next: 'ch1_fortress_feeling',
	},
	ch1_fortress_feeling: {
		id: 'ch1_fortress_feeling',
		speaker: 'player',
		text: '(Chạy chơi cùng Bi) Ở đây thật an toàn. Bố là luật pháp, và mọi thứ đều vận hành trơn tru.',
		textVi:
			'(Chạy chơi cùng Bi) Ở đây thật an toàn. Bố là luật pháp, và mọi thứ đều vận hành trơn tru.',
		textEn:
			'(Playing with Bi) It feels so safe here. Father is the law, and everything runs smoothly.',
		next: 'ch1_secret_base_start', // Redirect to Secret Base
	},

	// NEW: Secret Base Event
	ch1_secret_base_start: {
		id: 'ch1_secret_base_start',
		speaker: 'narrator',
		text: 'Trong góc khuất nhất của khu vườn, bạn phát hiện một cái hang nhỏ dưới gốc cây cổ thụ. Một căn cứ bí mật tuyệt vời.',
		textVi:
			'Trong góc khuất nhất của khu vườn, bạn phát hiện một cái hang nhỏ dưới gốc cây cổ thụ. Một căn cứ bí mật tuyệt vời.',
		textEn:
			'In a hidden corner, you found a small cave under an old tree. A perfect secret base.',
		choices: [
			{
				id: 'choice_base_secret',
				text: 'Giữ bí mật: Nơi này là của riêng mình (Steel Mind +1)',
				textVi: 'Giữ bí mật: Nơi này là của riêng mình (Steel Mind +1)',
				textEn: 'Keep secret: This is mine alone (Steel Mind +1)',
				effects: [{ stat: 'steelMind', value: 1 }],
				next: 'ch1_revelation_1',
			},
			{
				id: 'choice_base_share',
				text: 'Rủ bạn bè đến: Cùng chơi mới vui (Humanity +2, Money -50k)',
				textVi: 'Rủ bạn bè đến: Cùng chơi mới vui (Humanity +2, Money -50k)',
				textEn: 'Invite friends: Fun together (Humanity +2, Money -50k)',
				effects: [
					{ stat: 'humanity', value: 2 },
					{ stat: 'money', value: -50000 }, // Snacks
				],
				next: 'ch1_base_party',
			},
		],
	},
	ch1_base_party: {
		id: 'ch1_base_party',
		speaker: 'narrator',
		text: 'Bạn mua bim bim, nước ngọt mời lũ bạn. Căn cứ bí mật rộn rã tiếng cười. Lần đầu tiên bạn thấy mình không cô đơn.',
		textVi:
			'Bạn mua bim bim, nước ngọt mời lũ bạn. Căn cứ bí mật rộn rã tiếng cười. Lần đầu tiên bạn thấy mình không cô đơn.',
		textEn:
			'You bought snacks. Secret base filled with laughter. First time you felt not alone.',
		next: 'ch1_revelation_1',
	},

	// 1.4 Lớp 5: Bước ngoặt và Sự so sánh
	ch1_revelation_1: {
		id: 'ch1_revelation_1',
		speaker: 'narrator',
		text: 'Lớp 5. Bạn là học sinh xuất sắc nhất trường. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột - cũng là một đại gia bất động sản.',
		textVi:
			'Lớp 5. Bạn là học sinh xuất sắc nhất trường. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột - cũng là một đại gia bất động sản.',
		textEn:
			'Grade 5. Top student. That summer, father sent you to Hanoi to stay with your uncle - also a real estate tycoon.',
		next: 'ch1_revelation_shock',
	},
	ch1_revelation_shock: {
		id: 'ch1_revelation_shock',
		speaker: 'narrator',
		text: 'Cú sốc văn hóa. Ở Lào Cai, bạn là vua. Ở Hà Nội, bạn thấy những tòa nhà chọc trời Keangnam, Lotte cao vút.',
		textVi:
			'Cú sốc văn hóa. Ở Lào Cai, bạn là vua. Ở Hà Nội, bạn thấy những tòa nhà chọc trời Keangnam, Lotte cao vút.',
		textEn:
			'Culture shock. In Lao Cai, you were king. In Hanoi, you saw towering Keangnam, Lotte skyscrapers.',
		next: 'ch1_uncle_boast',
	},
	ch1_uncle_boast: {
		id: 'ch1_uncle_boast',
		speaker: 'npc',
		text: 'Bác ruột cười lớn: "Cái nhà to nhất Lào Cai của bố mày, bán đi chưa chắc mua được cái chung cư cao cấp ở đây đâu con ạ."',
		textVi:
			'Bác ruột cười lớn: "Cái nhà to nhất Lào Cai của bố mày, bán đi chưa chắc mua được cái chung cư cao cấp ở đây đâu con ạ."',
		textEn:
			'Uncle laughed: "Your dad\'s biggest house in Lao Cai, selling it might not even buy a luxury apartment here, kid."',
		next: 'ch1_revelation_details',
	},
	ch1_revelation_details: {
		id: 'ch1_revelation_details',
		speaker: 'narrator',
		text: 'Những đứa trẻ hàng xóm nói tiếng Anh như gió. Những chiếc siêu xe lạ lẫm lướt qua. Bạn nhận ra điều gì?',
		textVi:
			'Những đứa trẻ hàng xóm nói tiếng Anh như gió. Những chiếc siêu xe lạ lẫm lướt qua. Bạn nhận ra điều gì?',
		textEn:
			'Neighbor kids spoke fluent English. Strange supercars glided by. What did you realize?',
		next: 'ch1_revelation_realization',
	},
	ch1_revelation_realization: {
		id: 'ch1_revelation_realization',
		speaker: 'player',
		text: '(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textVi:
			'(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textEn:
			"(Thinking) Father's kingdom, however grand, is just a village pond. The world out there is much bigger and crueler.",
		effects: [{ stat: 'vision', value: 1 }],
		next: 'ch1_revelation_decision',
	},
	ch1_revelation_decision: {
		id: 'ch1_revelation_decision',
		speaker: 'player',
		text: 'Bố ơi, hết hè con muốn xuống Hà Nội học. Con muốn bơi ra biển lớn.',
		textVi:
			'Bố ơi, hết hè con muốn xuống Hà Nội học. Con muốn bơi ra biển lớn.',
		textEn:
			'Dad, after summer I want to study in Hanoi. I want to swim in the big ocean.',
		choices: [
			{
				id: 'choice_hanoi',
				text: 'Quyết tâm: Xin đi học Hà Nội (Vision +1)',
				textVi: 'Quyết tâm: Xin đi học Hà Nội (Vision +1)',
				textEn: 'Determined: Ask to study in Hanoi (Vision +1)',
				effects: [
					{ stat: 'vision', value: 1 },
					{ stat: 'steelMind', value: 1 },
				],
				next: 'ch1_father_agrees',
			},
		],
	},
	ch1_father_agrees: {
		id: 'ch1_father_agrees',
		speaker: 'boQ',
		text: '"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textVi:
			'"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textEn:
			'"Okay. I agree." Father\'s eyes shone with pride but also a hint of worry.',
		next: 'ch1_end',
	},
};
