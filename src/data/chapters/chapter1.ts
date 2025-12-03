// ==========================================
// CHAPTER 1: BIẾN SỐ KHỞI TẠO (INITIALIZATION)
// Timeline: 0-10 tuổi
// Theme: Vị vua không ngai và Thế giới hoàn hảo giả tạo
// ==========================================

import { Chapter1DialogueID, Chapter1SceneID, Chapter1TodoID, Chapter2DialogueID, ConditionType, StatID } from '../enum';
import { type Chapter, type DialogueNode } from '../types';

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
			id: Chapter1SceneID.CH1_INTRO,
			name: 'Ký ức 3 tuổi',
			nameVi: 'Ký ức 3 tuổi: Người khổng lồ xây cầu',
			nameEn: 'Age 3: The Giant Who Built Bridges',
			background: '/assets/sprites/backgrounds/construction_site.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: Chapter1DialogueID.CH1_INTRO,
		},
		{
			id: Chapter1SceneID.CH1_SCHOOL,
			name: 'Lớp 1-3',
			nameVi: 'Lớp 1-3: Hoàng tử bé nơi biên ải',
			nameEn: 'Grade 1-3: The Little Prince of the Border',
			background: '/assets/sprites/backgrounds/school_gate.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: Chapter1DialogueID.CH1_INTRO, // Changed from ch1_start
		},
		{
			id: Chapter1SceneID.CH1_FORTRESS,
			name: 'Căn cứ địa 4.000m²',
			nameVi: 'Căn cứ địa 4.000m² - The Fortress',
			nameEn: 'The 4,000m² Fortress',
			background: '/assets/sprites/backgrounds/fortress.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: Chapter1DialogueID.CH1_FORTRESS_1,
		},
		{
			id: Chapter1SceneID.CH1_REVELATION,
			name: 'Mùa hè Hà Nội',
			nameVi: 'Mùa hè Hà Nội - The Revelation',
			nameEn: 'Summer in Hanoi - The Revelation',
			background: '/assets/sprites/backgrounds/hanoi_city.png',
			music: '/assets/audio/music/chapters/ch1_childhood.mp3',
			dialogueStart: Chapter1DialogueID.CH1_REVELATION_1,
		},
	],
	nightlyEvents: {
		todoList: [
			{
				id: Chapter1TodoID.CH1_TODO_GARDEN,
				text: 'Khám phá khu vườn 4000m²',
				textVi: 'Khám phá khu vườn 4000m²',
				textEn: 'Explore the 4000m² garden',
				effects: [{ stat: StatID.VISION, value: 5 }],
				cost: { health: 2 },
			},
			{
				id: 'ch1_todo_stars',
				text: 'Hỏi bố về các vì sao',
				textVi: 'Hỏi bố về các vì sao',
				textEn: 'Ask Dad about the stars',
				effects: [{ stat: StatID.VISION, value: 5 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch1_todo_mom_cook',
				text: 'Giúp mẹ nấu ăn',
				textVi: 'Giúp mẹ nấu ăn',
				textEn: 'Help Mom cook',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
			},
			{
				id: 'ch1_todo_play_bi',
				text: 'Chơi với chó Bi',
				textVi: 'Chơi với chó Bi',
				textEn: 'Play with Bi the dog',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
				reward: { stress: -5 },
			},
			{
				id: 'ch1_todo_listen_adults',
				text: 'Nghe lén người lớn nói chuyện',
				textVi: 'Nghe lén người lớn nói chuyện',
				textEn: 'Eavesdrop on adults',
				effects: [{ stat: StatID.VISION, value: 3 }],
				cost: { stress: 3 },
			},
			{
				id: 'ch1_todo_read_comics',
				text: 'Đọc truyện tranh',
				textVi: 'Đọc truyện tranh',
				textEn: 'Read comic books',
				reward: { stress: -5 },
			},
			{
				id: 'ch1_todo_break_toy',
				text: 'Tháo tung đồ chơi ra xem',
				textVi: 'Tháo tung đồ chơi ra xem',
				textEn: 'Disassemble toys',
				effects: [{ stat: StatID.VISION, value: 5 }],
				cost: { money: 50000 }, // Tốn tiền mua đồ chơi mới
			},
			{
				id: 'ch1_todo_climb_tree',
				text: 'Leo cây hái quả',
				textVi: 'Leo cây hái quả',
				textEn: 'Climb tree to pick fruits',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { health: 3 },
			},
			{
				id: 'ch1_todo_watch_tv',
				text: 'Xem hoạt hình',
				textVi: 'Xem hoạt hình',
				textEn: 'Watch cartoons',
				reward: { stress: -3 },
			},
			{
				id: 'ch1_todo_draw',
				text: 'Vẽ tranh nguệch ngoạc',
				textVi: 'Vẽ tranh nguệch ngoạc',
				textEn: 'Draw doodles',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch1_todo_fight',
				text: 'Đánh nhau với bạn hàng xóm',
				textVi: 'Đánh nhau với bạn hàng xóm',
				textEn: 'Fight with neighbor kid',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				cost: { health: 5, humanity: 2 }, // Reduced Health cost
			},
			{
				id: 'ch1_todo_sleep_late',
				text: 'Ngủ nướng',
				textVi: 'Ngủ nướng',
				textEn: 'Sleep in',
				reward: { health: 5 },
			},
			// Removed ch1_todo_ask_money - Moved to dialogue
			{
				id: 'ch1_todo_hide_seek',
				text: 'Chơi trốn tìm',
				textVi: 'Chơi trốn tìm',
				textEn: 'Play hide and seek',
				effects: [{ stat: StatID.VISION, value: 2 }],
			},
			{
				id: 'ch1_todo_catch_bugs',
				text: 'Bắt dế mèn',
				textVi: 'Bắt dế mèn',
				textEn: 'Catch crickets',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
			},
			{
				id: 'ch1_todo_cry',
				text: 'Khóc nhè ăn vạ',
				textVi: 'Khóc nhè ăn vạ',
				textEn: 'Cry and throw tantrum',
				cost: { humanity: 2 },
			},
			{
				id: 'ch1_todo_share_toy',
				text: 'Chia sẻ đồ chơi',
				textVi: 'Chia sẻ đồ chơi',
				textEn: 'Share toys',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
			},
			{
				id: 'ch1_todo_bully',
				text: 'Bắt nạt bạn yếu hơn',
				textVi: 'Bắt nạt bạn yếu hơn',
				textEn: 'Bully weaker kids',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				cost: { humanity: 5 }, // Reduced Humanity cost
			},
			{
				id: 'ch1_todo_learn_math',
				text: 'Học đếm số',
				textVi: 'Học đếm số',
				textEn: 'Learn to count',
				effects: [{ stat: StatID.VISION, value: 3 }],
			},
			{
				id: 'ch1_todo_dream',
				text: 'Mơ mộng nhìn mây',
				textVi: 'Mơ mộng nhìn mây',
				textEn: 'Daydream watching clouds',
				effects: [{ stat: StatID.VISION, value: 3 }],
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
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch1_dream_fly_home',
						text: 'Bay quanh nhà bảo vệ bố mẹ',
						textVi: 'Bay quanh nhà bảo vệ bố mẹ',
						textEn: 'Fly around house to protect parents',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch1_dream_fly_school',
						text: 'Bay đến trường khoe bạn bè',
						textVi: 'Bay đến trường khoe bạn bè',
						textEn: 'Fly to school to show off',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch1_dream_fly_fall',
						text: 'Sợ độ cao, không dám bay',
						textVi: 'Sợ độ cao, không dám bay',
						textEn: 'Scared of heights, dare not fly',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -3 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch1_dream_monster_friend',
						text: 'Mời nó ăn kẹo',
						textVi: 'Mời nó ăn kẹo',
						textEn: 'Offer it candy',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch1_dream_monster_cry',
						text: 'Khóc gọi mẹ',
						textVi: 'Khóc gọi mẹ',
						textEn: 'Cry for Mom',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch1_dream_monster_ignore',
						text: 'Trùm chăn ngủ tiếp',
						textVi: 'Trùm chăn ngủ tiếp',
						textEn: 'Cover with blanket and sleep',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 5 }],
					},
					{
						id: 'ch1_dream_king_share',
						text: 'Chia đồ chơi cho mọi người',
						textVi: 'Chia đồ chơi cho mọi người',
						textEn: 'Share toys with everyone',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch1_dream_king_build',
						text: 'Xây lâu đài cao hơn nữa',
						textVi: 'Xây lâu đài cao hơn nữa',
						textEn: 'Build castle higher',
						next: '',
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch1_dream_king_destroy',
						text: 'Đập phá hết',
						textVi: 'Đập phá hết',
						textEn: 'Destroy everything',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
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
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch1_dream_lost_wait',
						text: 'Đứng yên chờ bố mẹ',
						textVi: 'Đứng yên chờ bố mẹ',
						textEn: 'Stand still wait for parents',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch1_dream_lost_cry',
						text: 'Khóc toáng lên',
						textVi: 'Khóc toáng lên',
						textEn: 'Cry loudly',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 2 }],
					},
					{
						id: 'ch1_dream_lost_play',
						text: 'Mải chơi quên cả sợ',
						textVi: 'Mải chơi quên cả sợ',
						textEn: 'Too busy playing to fear',
						next: '',
						effects: [{ stat: StatID.VISION, value: 3 }],
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
						effects: [{ stat: StatID.VISION, value: 5 }],
					},
					{
						id: 'ch1_dream_future_hug',
						text: 'Ôm người đó',
						textVi: 'Ôm người đó',
						textEn: 'Hug them',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 5 }],
					},
					{
						id: 'ch1_dream_future_doubt',
						text: 'Không tin, bỏ chạy',
						textVi: 'Không tin, bỏ chạy',
						textEn: 'Disbelieve, run away',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch1_dream_future_gift',
						text: 'Đòi quà',
						textVi: 'Đòi quà',
						textEn: 'Demand a gift',
						next: '',
						effects: [{ stat: StatID.VISION, value: 2 }],
					},
				],
			},
		],
	},
	reflectionQuotes: [
		{
			id: 'ch1_reflect_sleep_1',
			text: 'Mẹ nói tuổi thơ phải ngủ đủ giấc mới cao lớn...',
			textVi: 'Mẹ nói tuổi thơ phải ngủ đủ giấc mới cao lớn...',
			textEn: 'Mom says children need sleep to grow tall...',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch1_reflect_sleep_1_rest',
					text: 'Đi ngủ thôi, mai còn chơi',
					textVi: 'Đi ngủ thôi, mai còn chơi',
					textEn: "Let's sleep, play tomorrow",
					next: '',
				},
				{
					id: 'ch1_reflect_sleep_1_tired',
					text: 'Hôm nay chơi quá mệt rồi',
					textVi: 'Hôm nay chơi quá mệt rồi',
					textEn: 'Too tired from playing today',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_success_1',
			text: 'Bố nói muốn giàu có phải cố gắng từ bé... nhưng mình còn nhỏ lắm cơ mà.',
			textVi:
				'Bố nói muốn giàu có phải cố gắng từ bé... nhưng mình còn nhỏ lắm cơ mà.',
			textEn:
				"Dad says to be rich, work hard from young... but I'm still so small.",
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch1_reflect_success_1_tomorrow',
					text: 'Để mai suy nghĩ, giờ đi ngủ',
					textVi: 'Để mai suy nghĩ, giờ đi ngủ',
					textEn: 'Think tomorrow, sleep now',
					next: '',
				},
				{
					id: 'ch1_reflect_success_1_dream',
					text: 'Mơ về một ngày được giàu như bố',
					textVi: 'Mơ về một ngày được giàu như bố',
					textEn: 'Dream of being rich like Dad',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_sleep_2',
			text: 'Một ngày dài ở trường học... mắt đã nhắm nghiền rồi.',
			textVi: 'Một ngày dài ở trường học... mắt đã nhắm nghiền rồi.',
			textEn: 'A long day at school... eyes are closing.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch1_reflect_sleep_2_rest',
					text: 'Nghỉ ngơi thôi',
					textVi: 'Nghỉ ngơi thôi',
					textEn: 'Time to rest',
					next: '',
				},
				{
					id: 'ch1_reflect_sleep_2_long',
					text: 'Hôm nay là một ngày dài',
					textVi: 'Hôm nay là một ngày dài',
					textEn: 'Today was a long day',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_success_2',
			text: 'Cô giáo bảo con ngoan học giỏi sẽ thành công... nhưng học nhiều quá mệt.',
			textVi:
				'Cô giáo bảo con ngoan học giỏi sẽ thành công... nhưng học nhiều quá mệt.',
			textEn:
				'Teacher says good kids who study will succeed... but studying is tiring.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch1_reflect_success_2_sleep',
					text: 'Ngủ đủ mới học được',
					textVi: 'Ngủ đủ mới học được',
					textEn: 'Need sleep to study',
					next: '',
				},
				{
					id: 'ch1_reflect_success_2_balance',
					text: 'Cân bằng giữa chơi và học',
					textVi: 'Cân bằng giữa chơi và học',
					textEn: 'Balance play and study',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_sleep_3',
			text: 'Đã khuya rồi... bố mẹ đã ngủ từ lâu.',
			textVi: 'Đã khuya rồi... bố mẹ đã ngủ từ lâu.',
			textEn: "It's late... parents sleeping already.",
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch1_reflect_sleep_3_sleep',
					text: 'Đi ngủ với ba mẹ',
					textVi: 'Đi ngủ với ba mẹ',
					textEn: 'Sleep with parents',
					next: '',
				},
				{
					id: 'ch1_reflect_sleep_3_night',
					text: 'Đêm nay ngủ ngon nhé',
					textVi: 'Đêm nay ngủ ngon nhé',
					textEn: 'Good night tonight',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_success_3',
			text: 'Lũ bạn nhìn mình với ánh mắt ngưỡng mộ... nhưng mình chỉ muốn có bạn chơi cùng thôi.',
			textVi:
				'Lũ bạn nhìn mình với ánh mắt ngưỡng mộ... nhưng mình chỉ muốn có bạn chơi cùng thôi.',
			textEn:
				'Friends look at me with admiration... but I just want friends to play with.',
			type: ConditionType.SUCCESS,
			choices: [
				{
					id: 'ch1_reflect_success_3_lonely',
					text: 'Giàu có nhưng cô đơn',
					textVi: 'Giàu có nhưng cô đơn',
					textEn: 'Rich but lonely',
					next: '',
				},
				{
					id: 'ch1_reflect_success_3_tomorrow',
					text: 'Nghĩ về điều này sau, giờ cần ngủ',
					textVi: 'Nghĩ về điều này sau, giờ cần ngủ',
					textEn: 'Think about this later, need sleep',
					next: '',
				},
			],
		},
		{
			id: 'ch1_reflect_sleep_4',
			text: 'Tuổi thơ của mình như khu vườn bao la... nhưng cũng cần nghỉ ngơi.',
			textVi:
				'Tuổi thơ của mình như khu vườn bao la... nhưng cũng cần nghỉ ngơi.',
			textEn: 'My childhood like a vast garden... but also need rest.',
			type: ConditionType.SLEEP,
			choices: [
				{
					id: 'ch1_reflect_sleep_4_rest',
					text: 'Nghỉ ngơi để mai tiếp tục khám phá',
					textVi: 'Nghỉ ngơi để mai tiếp tục khám phá',
					textEn: 'Rest to explore tomorrow',
					next: '',
				},
				{
					id: 'ch1_reflect_sleep_4_dream',
					text: 'Đi ngủ và mơ về những cuộc phiêu lưu',
					textVi: 'Đi ngủ và mơ về những cuộc phiêu lưu',
					textEn: 'Sleep and dream of adventures',
					next: '',
				},
			],
		},
	],
};

// ==========================================
// DIALOGUE NODES - Chapter 1
// ==========================================

export const chapter1Dialogues: Record<Chapter1DialogueID, DialogueNode> = {
	// NEW: Intro
	[Chapter1DialogueID.CH1_INTRO]: {
		speaker: 'narrator',
		text: 'Những năm 2000. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textVi:
			'Những năm 2000. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textEn:
			'The 2000s. Cicadas buzzing on flamboyant trees. Your world is wrapped in a small courtyard and sparkling marbles.',
		next: Chapter1DialogueID.CH1_INTRO_1,
	},
	// 1.1 Ký ức 3 tuổi
	[Chapter1DialogueID.CH1_INTRO_1]: {
		speaker: 'narrator',
		text: 'Ký ức đầu tiên của bạn không phải là lời ru của mẹ, mà là mùi xi măng và tiếng ầm ầm của xe lu.',
		textVi:
			'Ký ức đầu tiên của bạn không phải là lời ru của mẹ, mà là mùi xi măng và tiếng ầm ầm của xe lu.',
		textEn:
			"Your first memory was not your mother's lullaby, but the smell of cement and the rumbling of road rollers.",
		next: Chapter1DialogueID.CH1_INTRO_2,
	},
	[Chapter1DialogueID.CH1_INTRO_2]: {
		speaker: 'narrator',
		text: 'Bố Q là một huyền thoại trong mắt đứa trẻ 3 tuổi. Một người đàn ông da sạm nắng, tiếng nói vang như chuông, mỗi lần về nhà là mang theo mùi thuốc lá và bụi đường.',
		textVi:
			'Bố Q là một huyền thoại trong mắt đứa trẻ 3 tuổi. Một người đàn ông da sạm nắng, tiếng nói vang như chuông, mỗi lần về nhà là mang theo mùi thuốc lá và bụi đường.',
		textEn:
			'Father Q was a legend in the eyes of a 3-year-old. A sun-tanned man with a voice that rang like a bell, bringing the smell of tobacco and road dust every time he came home.',
		next: Chapter1DialogueID.CH1_INTRO_LORE,
	},
	[Chapter1DialogueID.CH1_INTRO_LORE]: {
		speaker: 'narrator',
		text: 'Để có ngày hôm nay, bố đã trải qua 10 năm địa ngục. Bố làm thuê cho 3 công ty xây dựng cùng lúc...',
		textVi:
			'Để có ngày hôm nay, bố đã trải qua 10 năm địa ngục. Bố làm thuê cho 3 công ty xây dựng cùng lúc...',
		textEn:
			'To get here, father went through 10 years of hell. He worked for 3 construction companies simultaneously...',
		next: Chapter1DialogueID.CH1_INTRO_SCHEDULE,
	},
	[Chapter1DialogueID.CH1_INTRO_SCHEDULE]: {
		speaker: 'narrator',
		text: 'Lịch trình của bố là một cỗ máy không nghỉ: Sáng chỉ huy công trường A, chiều chạy thầu công ty B, đêm đi tiếp khách công ty C.',
		textVi:
			'Lịch trình của bố là một cỗ máy không nghỉ: Sáng chỉ huy công trường A, chiều chạy thầu công ty B, đêm đi tiếp khách công ty C.',
		textEn:
			"Father's schedule was a relentless machine: Morning at site A, afternoon bidding for company B, night entertaining for company C.",
		next: Chapter1DialogueID.CH1_FATHER_DRUNK,
	},
	[Chapter1DialogueID.CH1_FATHER_DRUNK]: {
		speaker: 'boQ',
		text: '(Say khướt) Bố làm tất cả... ực... là vì cái nhà này. Để không ai khinh thường bố con mình nữa.',
		textVi:
			'(Say khướt) Bố làm tất cả... ực... là vì cái nhà này. Để không ai khinh thường bố con mình nữa.',
		textEn:
			'(Drunk) I do it all... *hic*... for this family. So no one looks down on us anymore.',
		next: Chapter1DialogueID.CH1_INTRO_LESSON,
	},
	[Chapter1DialogueID.CH1_INTRO_LESSON]: {
		speaker: 'narrator',
		text: 'Bạn nhìn thấy bố ngủ gục trên bàn làm việc, tay vẫn cầm chiếc bút kỹ thuật. Bạn cảm thấy gì?',
		textVi:
			'Bạn nhìn thấy bố ngủ gục trên bàn làm việc, tay vẫn cầm chiếc bút kỹ thuật. Bạn cảm thấy gì?',
		textEn:
			'You saw father asleep on his desk, pen in hand. What did you feel?',
		choices: [
			{
				id: 'choice_admire_dad',
				text: 'Ngưỡng mộ: Thành công xây bằng mồ hôi (Steel Mind +3)',
				textVi: 'Ngưỡng mộ: Thành công xây bằng mồ hôi (Steel Mind +3)',
				textEn: 'Admire: Success is built on sweat (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter1DialogueID.CH1_ASK_MONEY_START,
			},
			{
				id: 'choice_pity_dad',
				text: 'Thương bố: Bố vất vả quá (Humanity +3)',
				textVi: 'Thương bố: Bố vất vả quá (Humanity +3)',
				textEn: 'Pity: Father works too hard (Humanity +3)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter1DialogueID.CH1_ASK_MONEY_START,
			},
		],
	},

	// NEW: Ask for Money Event
	[Chapter1DialogueID.CH1_ASK_MONEY_START]: {
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
				effects: [{ stat: StatID.MONEY, value: 50000 }],
				next: Chapter1DialogueID.CH1_ASK_MONEY_SUCCESS,
			},
			{
				id: 'choice_ask_money_no',
				text: 'Thôi ngại lắm: Bố đang mệt (Humanity +3)',
				textVi: 'Thôi ngại lắm: Bố đang mệt (Humanity +3)',
				textEn: 'Too shy: Dad is tired (Humanity +3)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter1DialogueID.CH1_SCHOOL_1,
			},
		],
	},
	[Chapter1DialogueID.CH1_ASK_MONEY_SUCCESS]: {
		speaker: 'boQ',
		text: '"Tiền đây. Cầm lấy mà mua. Đừng có nói với mẹ đấy nhé!" (Bố dúi tờ 50k vào tay bạn)',
		textVi:
			'"Tiền đây. Cầm lấy mà mua. Đừng có nói với mẹ đấy nhé!" (Bố dúi tờ 50k vào tay bạn)',
		textEn:
			'"Here. Take it. Don\'t tell your mom!" (Dad slips a 50k note into your hand)',
		next: Chapter1DialogueID.CH1_SCHOOL_1,
	},

	// 1.2 Lớp 1-3: Hoàng tử bé nơi biên ải
	[Chapter1DialogueID.CH1_SCHOOL_1]: {
		speaker: 'narrator',
		text: 'Gia đình bạn sống ở Lào Cai. Bố là chủ doanh nghiệp xây dựng hạ tầng "có tiếng nói nhất tỉnh". Các quan chức địa phương thường ghé nhà uống trà.',
		textVi:
			'Gia đình bạn sống ở Lào Cai. Bố là chủ doanh nghiệp xây dựng hạ tầng "có tiếng nói nhất tỉnh". Các quan chức địa phương thường ghé nhà uống trà.',
		textEn:
			'Your family lived in Lao Cai. Father was the most influential infrastructure contractor in the province. Local officials often visited for tea.',
		next: Chapter1DialogueID.CH1_SCHOOL_2,
	},
	[Chapter1DialogueID.CH1_SCHOOL_2]: {
		speaker: 'narrator',
		text: 'Bạn đi học có tài xế đưa đón. Bạn bè nhìn bạn với ánh mắt ngưỡng mộ pha lẫn sợ sệt.',
		textVi:
			'Bạn đi học có tài xế đưa đón. Bạn bè nhìn bạn với ánh mắt ngưỡng mộ pha lẫn sợ sệt.',
		textEn:
			'You went to school with a chauffeur. Friends looked at you with a mix of admiration and fear.',
		next: Chapter1DialogueID.CH1_CLASSMATES_WHISPER,
	},
	[Chapter1DialogueID.CH1_END]: {
		speaker: 'narrator',
		text: 'Một buổi chiều muộn, tiếng đập cửa dồn dập phá tan sự yên bình. Những người lạ mặt bước vào, và bố mẹ bạn cúi đầu im lặng.',
		textVi:
			'Một buổi chiều muộn, tiếng đập cửa dồn dồn dập phá tan sự yên bình. Những người lạ mặt bước vào, và bố mẹ bạn cúi đầu im lặng.',
		textEn:
			'Late one afternoon, frantic knocking shattered the peace. Strangers walked in, and your parents bowed their heads in silence.',
		next: Chapter2DialogueID.CH2_INTRO, // Will be handled by engine to switch chapter
	},
	[Chapter1DialogueID.CH1_CLASSMATES_WHISPER]: {
		speaker: 'npc',
		text: '"Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textVi:
			'"Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textEn:
			'"Rich kid, don\'t touch him. His dad knows the provincial chairman."',
		next: Chapter1DialogueID.CH1_SCHOOL_REACTION,
	},
	[Chapter1DialogueID.CH1_SCHOOL_REACTION]: {
		speaker: 'player',
		text: '(Suy nghĩ) Họ sợ mình... nhưng mình chẳng có ai để chơi cùng cả.',
		textVi: '(Suy nghĩ) Họ sợ mình... nhưng mình chẳng có ai để chơi cùng cả.',
		textEn: '(Thinking) They fear me... but I have no one to play with.',
		next: Chapter1DialogueID.CH1_BULLY_START, // Redirect to Bully event
	},

	// NEW: School Bully Event
	[Chapter1DialogueID.CH1_BULLY_START]: {
		speaker: 'narrator',
		text: 'Một đứa bạn to con trong lớp chặn đường bạn. Nó muốn trấn lột chiếc bút máy xịn của bạn.',
		textVi:
			'Một đứa bạn to con trong lớp chặn đường bạn. Nó muốn trấn lột chiếc bút máy xịn của bạn.',
		textEn:
			'A big kid in class blocks your way. He wants to take your fancy fountain pen.',
		choices: [
			{
				id: 'choice_bully_fight',
				text: 'Đánh lại: Không được bắt nạt tao! (Steel Mind +5, Health -2)',
				textVi: 'Đánh lại: Không được bắt nạt tao! (Steel Mind +5, Health -2)',
				textEn: "Fight back: Don't bully me! (Steel Mind +5, Health -2)",
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.HEALTH, value: -2 },
					{ stat: StatID.HUMANITY, value: -2 },
				],
				next: Chapter1DialogueID.CH1_BULLY_FIGHT_RESULT,
			},
			{
				id: 'choice_bully_report',
				text: 'Mách cô giáo: An toàn là trên hết (Vision +3)',
				textVi: 'Mách cô giáo: An toàn là trên hết (Vision +3)',
				textEn: 'Tell teacher: Safety first (Vision +3)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.STEELMIND, value: -2 },
				],
				next: Chapter1DialogueID.CH1_BULLY_REPORT_RESULT,
			},
			{
				id: 'choice_bully_give',
				text: 'Đưa bút: Tránh rắc rối (Humanity +3)',
				textVi: 'Đưa bút: Tránh rắc rối (Humanity +3)',
				textEn: 'Give pen: Avoid trouble (Humanity +3)',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.STEELMIND, value: -3 },
				],
				next: Chapter1DialogueID.CH1_SCHOOL_TRIP,
			},
		],
	},
	[Chapter1DialogueID.CH1_BULLY_FIGHT_RESULT]: {
		speaker: 'narrator',
		text: 'Bạn lao vào đánh nhau. Cả hai đều sứt đầu mẻ trán. Bố mẹ bị mời lên trường, nhưng bố lại cười: "Đàn ông là phải thế".',
		textVi:
			'Bạn lao vào đánh nhau. Cả hai đều sứt đầu mẻ trán. Bố mẹ bị mời lên trường, nhưng bố lại cười: "Đàn ông là phải thế".',
		textEn:
			'You fought. Both bruised. Parents called, but Dad laughed: "That\'s how men are".',
		next: Chapter1DialogueID.CH1_SCHOOL_TRIP,
	},
	[Chapter1DialogueID.CH1_BULLY_REPORT_RESULT]: {
		speaker: 'narrator',
		text: 'Cô giáo phạt đứa bạn kia. Nhưng từ đó, cả lớp gọi bạn là "kẻ mách lẻo". Bạn càng cô đơn hơn.',
		textVi:
			'Cô giáo phạt đứa bạn kia. Nhưng từ đó, cả lớp gọi bạn là "kẻ mách lẻo". Bạn càng cô đơn hơn.',
		textEn:
			'Teacher punished him. But class called you "tattletale". You became lonelier.',
		next: Chapter1DialogueID.CH1_SCHOOL_TRIP,
	},
	[Chapter1DialogueID.CH1_SCHOOL_TRIP]: {
		speaker: 'narrator',
		text: 'Cuối tuần, bố cho bạn ngồi trên chiếc Land Cruiser, đi khảo sát những con đường xuyên núi.',
		textVi:
			'Cuối tuần, bố cho bạn ngồi trên chiếc Land Cruiser, đi khảo sát những con đường xuyên núi.',
		textEn:
			'On weekends, father took you in the Land Cruiser to survey mountain roads.',
		next: Chapter1DialogueID.CH1_SCHOOL_QUOTE,
	},
	[Chapter1DialogueID.CH1_SCHOOL_QUOTE]: {
		speaker: 'boQ',
		text: '"Con nhìn xem, trước kia chỗ này là rừng rậm. Bố đã vẽ một đường thẳng lên bản đồ, và giờ nó là con đường nhựa. Con người có thể thay đổi địa hình, miễn là có ý chí."',
		textVi:
			'"Con nhìn xem, trước kia chỗ này là rừng rậm. Bố đã vẽ một đường thẳng lên bản đồ, và giờ nó là con đường nhựa. Con người có thể thay đổi địa hình, miễn là có ý chí."',
		textEn:
			'"Look, this used to be jungle. I drew a straight line on the map, and now it\'s an asphalt road. Humans can reshape the land, as long as they have the will."',
		next: Chapter1DialogueID.CH1_SCHOOL_EGO,
	},
	[Chapter1DialogueID.CH1_SCHOOL_EGO]: {
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
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter1DialogueID.CH1_BUY_TOY_START,
			},
			{
				id: 'choice_feel_isolated',
				text: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textVi: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textEn: 'Fear: This power feels alien (Humanity ++)',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				next: Chapter1DialogueID.CH1_BUY_TOY_START,
			},
		],
	},

	// NEW: Buy Toy Event
	[Chapter1DialogueID.CH1_BUY_TOY_START]: {
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
					{ stat: StatID.MONEY, value: -100000 },
					{ stat: StatID.HUMANITY, value: 5 }, // Happiness/Childhood joy
				],
				next: Chapter1DialogueID.CH1_BUY_TOY_SUCCESS,
			},
			{
				id: 'choice_buy_toy_no',
				text: 'Tiếc tiền: Thôi để dành tiền làm việc khác (Steel Mind +3)',
				textVi: 'Tiếc tiền: Thôi để dành tiền làm việc khác (Steel Mind +3)',
				textEn: 'Save money: Save for other things (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter1DialogueID.CH1_FORTRESS_1,
			},
		],
	},
	[Chapter1DialogueID.CH1_BUY_TOY_SUCCESS]: {
		speaker: 'player',
		text: '(Cầm con robot trên tay) Cảm giác sở hữu món đồ mình thích thật tuyệt vời. Lũ bạn sẽ lác mắt cho xem.',
		textVi:
			'(Cầm con robot trên tay) Cảm giác sở hữu món đồ mình thích thật tuyệt vời. Lũ bạn sẽ lác mắt cho xem.',
		textEn:
			'(Holding the robot) The feeling of owning what you want is amazing. Friends will be jealous.',
		next: Chapter1DialogueID.CH1_TOY_SHOWOFF, // Redirect to Showoff choice
	},

	// NEW: Spoiled Prince Chain
	[Chapter1DialogueID.CH1_TOY_SHOWOFF]: {
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
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter1DialogueID.CH1_SHOW_OFF_FAIL,
			},
			{
				id: 'choice_showoff_no',
				text: 'Để ở nhà: Sợ bị mất (Vision +3)',
				textVi: 'Để ở nhà: Sợ bị mất (Vision +3)',
				textEn: 'Keep at home: Fear losing it (Vision +3)',
				effects: [{ stat: StatID.VISION, value: 3 }],
				next: Chapter1DialogueID.CH1_FORTRESS_1,
			},
		],
	},
	[Chapter1DialogueID.CH1_SHOW_OFF_FAIL]: {
		speaker: 'narrator',
		text: 'Bạn mang robot đến lớp. Lũ bạn xúm lại xem, tranh giành nhau. "Rắc!" - cánh tay robot bị gãy. Bạn khóc nức nở, còn lũ bạn tản ra, cười cợt.',
		textVi:
			'Bạn mang robot đến lớp. Lũ bạn xúm lại xem, tranh giành nhau. "Rắc!" - cánh tay robot bị gãy. Bạn khóc nức nở, còn lũ bạn tản ra, cười cợt.',
		textEn:
			'You brought robot to class. Kids grabbed it. "Snap!" - arm broke. You cried, they laughed.',
		effects: [
			{ stat: StatID.HUMANITY, value: -5 },
			{ stat: StatID.STEELMIND, value: 5 },
			{ stat: StatID.STRESS, value: 5 },
		],
		next: Chapter1DialogueID.CH1_FORTRESS_1,
	},

	// 1.3 Lớp 4: Căn cứ địa 4.000m²
	[Chapter1DialogueID.CH1_FORTRESS_1]: {
		speaker: 'narrator',
		text: 'Sau nhiều năm tích cóp, bố quyết định xây dựng "di sản" của đời mình. Bố mua đứt quả đồi của ông ngoại. Một dinh thự rộng 4.000m² mọc lên.',
		textVi:
			'Sau nhiều năm tích cóp, bố quyết định xây dựng "di sản" của đời mình. Bố mua đứt quả đồi của ông ngoại. Một dinh thự rộng 4.000m² mọc lên.',
		textEn:
			'After years of saving, father decided to build his life\'s "legacy". He bought grandfather\'s hill. A 4,000m² mansion rose up.',
		next: Chapter1DialogueID.CH1_FORTRESS_ZOO,
	},
	[Chapter1DialogueID.CH1_FORTRESS_ZOO]: {
		speaker: 'narrator',
		text: 'Nó là một pháo đài với hệ sinh thái riêng. Sân trước: Đà điểu chạy ầm ầm. Vườn sau: Công xòe đuôi múa. Trên cây: Vượn và khỉ chuyền cành.',
		textVi:
			'Nó là một pháo đài với hệ sinh thái riêng. Sân trước: Đà điểu chạy ầm ầm. Vườn sau: Công xòe đuôi múa. Trên cây: Vượn và khỉ chuyền cành.',
		textEn:
			'It was a fortress with its own ecosystem. Front yard: Thundering ostriches. Back yard: Dancing peacocks. Trees: Swinging gibbons and monkeys.',
		next: Chapter1DialogueID.CH1_FORTRESS_GUARDS,
	},
	[Chapter1DialogueID.CH1_FORTRESS_GUARDS]: {
		speaker: 'boQ',
		text: '"Đội vệ sĩ của bố đấy. 15 con chó được tuyển chọn kỹ lưỡng. Chúng trung thành hơn con người nhiều."',
		textVi:
			'"Đội vệ sĩ của bố đấy. 15 con chó được tuyển chọn kỹ lưỡng. Chúng trung thành hơn con người nhiều."',
		textEn:
			'"My guard squad. 15 carefully selected dogs. They are far more loyal than humans."',
		next: Chapter1DialogueID.CH1_FORTRESS_GUARDS_DETAIL,
	},
	[Chapter1DialogueID.CH1_FORTRESS_GUARDS_DETAIL]: {
		speaker: 'narrator',
		text: 'Những con Ngao Tạng lầm lì như tảng đá. Những con chó Phú Quốc tinh khôn, xoáy lưng dựng ngược. Và đặc biệt là Bi.',
		textVi:
			'Những con Ngao Tạng lầm lì như tảng đá. Những con chó Phú Quốc tinh khôn, xoáy lưng dựng ngược. Và đặc biệt là Bi.',
		textEn:
			'Tibetan Mastiffs stoic as boulders. Clever Phu Quoc ridgebacks. And especially Bi.',
		next: Chapter1DialogueID.CH1_FORTRESS_BI,
	},
	[Chapter1DialogueID.CH1_FORTRESS_BI]: {
		speaker: 'narrator',
		text: 'Bi là con Alaska khổng lồ, lông mượt, đẹp nhất và trung thành nhất. Nó luôn đi theo bạn như hình với bóng trong khu vườn rộng lớn này.',
		textVi:
			'Bi là con Alaska khổng lồ, lông mượt, đẹp nhất và trung thành nhất. Nó luôn đi theo bạn như hình với bóng trong khu vườn rộng lớn này.',
		textEn:
			'Bi was a giant Alaska, silky fur, the most beautiful and loyal. He followed you like a shadow in this vast garden.',
		next: Chapter1DialogueID.CH1_FORTRESS_FEELING,
	},
	[Chapter1DialogueID.CH1_FORTRESS_FEELING]: {
		speaker: 'player',
		text: '(Chạy chơi cùng Bi) Ở đây thật an toàn. Bố là luật pháp, và mọi thứ đều vận hành trơn tru.',
		textVi:
			'(Chạy chơi cùng Bi) Ở đây thật an toàn. Bố là luật pháp, và mọi thứ đều vận hành trơn tru.',
		textEn:
			'(Playing with Bi) It feels so safe here. Father is the law, and everything runs smoothly.',
		next: Chapter1DialogueID.CH1_SECRET_BASE_START, // Redirect to Secret Base
	},

	// NEW: Secret Base Event
	[Chapter1DialogueID.CH1_SECRET_BASE_START]: {
		speaker: 'narrator',
		text: 'Trong góc khuất nhất của khu vườn, bạn phát hiện một cái hang nhỏ dưới gốc cây cổ thụ. Một căn cứ bí mật tuyệt vời.',
		textVi:
			'Trong góc khuất nhất của khu vườn, bạn phát hiện một cái hang nhỏ dưới gốc cây cổ thụ. Một căn cứ bí mật tuyệt vời.',
		textEn:
			'In a hidden corner, you found a small cave under an old tree. A perfect secret base.',
		choices: [
			{
				id: 'choice_base_secret',
				text: 'Giữ bí mật: Nơi này là của riêng mình (Steel Mind +3)',
				textVi: 'Giữ bí mật: Nơi này là của riêng mình (Steel Mind +3)',
				textEn: 'Keep secret: This is mine alone (Steel Mind +3)',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
				next: Chapter1DialogueID.CH1_REVELATION_1,
			},
			{
				id: 'choice_base_share',
				text: 'Rủ bạn bè đến: Cùng chơi mới vui (Humanity +5, Money -50k)',
				textVi: 'Rủ bạn bè đến: Cùng chơi mới vui (Humanity +5, Money -50k)',
				textEn: 'Invite friends: Fun together (Humanity +5, Money -50k)',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: -50000 }, // Snacks
				],
				next: Chapter1DialogueID.CH1_BASE_PARTY,
			},
		],
	},
	[Chapter1DialogueID.CH1_BASE_PARTY]: {
		speaker: 'narrator',
		text: 'Bạn mua bim bim, nước ngọt mời lũ bạn. Căn cứ bí mật rộn rã tiếng cười. Lần đầu tiên bạn thấy mình không cô đơn.',
		textVi:
			'Bạn mua bim bim, nước ngọt mời lũ bạn. Căn cứ bí mật rộn rã tiếng cười. Lần đầu tiên bạn thấy mình không cô đơn.',
		textEn:
			'You bought snacks. Secret base filled with laughter. First time you felt not alone.',
		next: Chapter1DialogueID.CH1_REVELATION_1,
	},

	// 1.4 Lớp 5: Bước ngoặt và Sự so sánh
	[Chapter1DialogueID.CH1_REVELATION_1]: {
		speaker: 'narrator',
		text: 'Lớp 5. Bạn là học sinh xuất sắc nhất trường. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột - cũng là một đại gia bất động sản.',
		textVi:
			'Lớp 5. Bạn là học sinh xuất sắc nhất trường. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột - cũng là một đại gia bất động sản.',
		textEn:
			'Grade 5. Top student. That summer, father sent you to Hanoi to stay with your uncle - also a real estate tycoon.',
		next: Chapter1DialogueID.CH1_REVELATION_SHOCK,
	},
	[Chapter1DialogueID.CH1_REVELATION_SHOCK]: {
		speaker: 'narrator',
		text: 'Cú sốc văn hóa. Ở Lào Cai, bạn là vua. Ở Hà Nội, bạn thấy những tòa nhà chọc trời Keangnam, Lotte cao vút.',
		textVi:
			'Cú sốc văn hóa. Ở Lào Cai, bạn là vua. Ở Hà Nội, bạn thấy những tòa nhà chọc trời Keangnam, Lotte cao vút.',
		textEn:
			'Culture shock. In Lao Cai, you were king. In Hanoi, you saw towering Keangnam, Lotte skyscrapers.',
		next: Chapter1DialogueID.CH1_UNCLE_BOAST,
	},
	[Chapter1DialogueID.CH1_UNCLE_BOAST]: {
		speaker: 'npc',
		text: 'Bác ruột cười lớn: "Cái nhà to nhất Lào Cai của bố mày, bán đi chưa chắc mua được cái chung cư cao cấp ở đây đâu con ạ."',
		textVi:
			'Bác ruột cười lớn: "Cái nhà to nhất Lào Cai của bố mày, bán đi chưa chắc mua được cái chung cư cao cấp ở đây đâu con ạ."',
		textEn:
			'Uncle laughed: "Your dad\'s biggest house in Lao Cai, selling it might not even buy a luxury apartment here, kid."',
		next: Chapter1DialogueID.CH1_REVELATION_DETAILS,
	},
	[Chapter1DialogueID.CH1_REVELATION_DETAILS]: {
		speaker: 'narrator',
		text: 'Những đứa trẻ hàng xóm nói tiếng Anh như gió. Những chiếc siêu xe lạ lẫm lướt qua. Bạn nhận ra điều gì?',
		textVi:
			'Những đứa trẻ hàng xóm nói tiếng Anh như gió. Những chiếc siêu xe lạ lẫm lướt qua. Bạn nhận ra điều gì?',
		textEn:
			'Neighbor kids spoke fluent English. Strange supercars glided by. What did you realize?',
		next: Chapter1DialogueID.CH1_REVELATION_REALIZATION,
	},
	[Chapter1DialogueID.CH1_REVELATION_REALIZATION]: {
		speaker: 'player',
		text: '(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textVi:
			'(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textEn:
			"(Thinking) Father's kingdom, however grand, is just a village pond. The world out there is much bigger and crueler.",
		effects: [{ stat: StatID.VISION, value: 3 }],
		next: Chapter1DialogueID.CH1_REVELATION_DECISION,
	},
	[Chapter1DialogueID.CH1_REVELATION_DECISION]: {
		speaker: 'player',
		text: 'Bố ơi, hết hè con muốn xuống Hà Nội học. Con muốn bơi ra biển lớn.',
		textVi:
			'Bố ơi, hết hè con muốn xuống Hà Nội học. Con muốn bơi ra biển lớn.',
		textEn:
			'Dad, after summer I want to study in Hanoi. I want to swim in the big ocean.',
		choices: [
			{
				id: 'choice_hanoi',
				text: 'Quyết tâm: Xin đi học Hà Nội (Vision +3)',
				textVi: 'Quyết tâm: Xin đi học Hà Nội (Vision +3)',
				textEn: 'Determined: Ask to study in Hanoi (Vision +3)',
				effects: [
					{ stat: StatID.VISION, value: 3 },
					{ stat: StatID.STEELMIND, value: 3 },
				],
				next: Chapter1DialogueID.CH1_FATHER_AGREES,
			},
		],
	},
	[Chapter1DialogueID.CH1_FATHER_AGREES]: {
		speaker: 'boQ',
		text: '"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textVi:
			'"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textEn:
			'"Okay. I agree." Father\'s eyes shone with pride but also a hint of worry.',
		next: Chapter1DialogueID.CH1_END,
	},
};
