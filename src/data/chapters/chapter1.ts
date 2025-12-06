// ==========================================
// CHAPTER 1: BIẾN SỐ KHỞI TẠO (INITIALIZATION)
// Timeline: 0-10 tuổi
// Theme: Vị vua không ngai và Thế giới hoàn hảo giả tạo
// ==========================================

import {
	Chapter1DialogueID,
	Chapter1SceneID,
	Chapter1TodoID,
	Chapter2DialogueID,
	ConditionType,
	StatID,
} from '../enum';
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
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { health: 2 },
			},
			{
				id: 'ch1_todo_stars',
				text: 'Hỏi bố về các vì sao',
				textVi: 'Hỏi bố về các vì sao',
				textEn: 'Ask Dad about the stars',
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { stress: 2 },
			},
			{
				id: 'ch1_todo_mom_cook',
				text: 'Giúp mẹ nấu ăn',
				textVi: 'Giúp mẹ nấu ăn',
				textEn: 'Help Mom cook',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch1_todo_play_bi',
				text: 'Chơi với chó Bi',
				textVi: 'Chơi với chó Bi',
				textEn: 'Play with Bi the dog',
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
				reward: { stress: -5 },
			},
			{
				id: 'ch1_todo_listen_adults',
				text: 'Nghe lén người lớn nói chuyện',
				textVi: 'Nghe lén người lớn nói chuyện',
				textEn: 'Eavesdrop on adults',
				effects: [{ stat: StatID.VISION, value: 1 }],
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
				effects: [{ stat: StatID.VISION, value: 1 }],
				cost: { money: 50000 }, // Tốn tiền mua đồ chơi mới
			},
			{
				id: 'ch1_todo_climb_tree',
				text: 'Leo cây hái quả',
				textVi: 'Leo cây hái quả',
				textEn: 'Climb tree to pick fruits',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
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
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch1_todo_fight',
				text: 'Đánh nhau với bạn hàng xóm',
				textVi: 'Đánh nhau với bạn hàng xóm',
				textEn: 'Fight with neighbor kid',
				effects: [{ stat: StatID.STEELMIND, value: 3 }],
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
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch1_todo_catch_bugs',
				text: 'Bắt dế mèn',
				textVi: 'Bắt dế mèn',
				textEn: 'Catch crickets',
				effects: [{ stat: StatID.STEELMIND, value: 1 }],
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
				effects: [{ stat: StatID.HUMANITY, value: 3 }],
			},
			{
				id: 'ch1_todo_bully',
				text: 'Bắt nạt bạn yếu hơn',
				textVi: 'Bắt nạt bạn yếu hơn',
				textEn: 'Bully weaker kids',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				cost: { humanity: 5 }, // Reduced Humanity cost
			},
			{
				id: 'ch1_todo_learn_math',
				text: 'Học đếm số',
				textVi: 'Học đếm số',
				textEn: 'Learn to count',
				effects: [{ stat: StatID.VISION, value: 1 }],
			},
			{
				id: 'ch1_todo_dream',
				text: 'Mơ mộng nhìn mây',
				textVi: 'Mơ mộng nhìn mây',
				textEn: 'Daydream watching clouds',
				effects: [{ stat: StatID.VISION, value: 1 }],
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
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch1_dream_fly_home',
						text: 'Bay quanh nhà bảo vệ bố mẹ',
						textVi: 'Bay quanh nhà bảo vệ bố mẹ',
						textEn: 'Fly around house to protect parents',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch1_dream_fly_school',
						text: 'Bay đến trường khoe bạn bè',
						textVi: 'Bay đến trường khoe bạn bè',
						textEn: 'Fly to school to show off',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch1_dream_fly_fall',
						text: 'Sợ độ cao, không dám bay',
						textVi: 'Sợ độ cao, không dám bay',
						textEn: 'Scared of heights, dare not fly',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: -2 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch1_dream_monster_friend',
						text: 'Mời nó ăn kẹo',
						textVi: 'Mời nó ăn kẹo',
						textEn: 'Offer it candy',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch1_dream_monster_cry',
						text: 'Khóc gọi mẹ',
						textVi: 'Khóc gọi mẹ',
						textEn: 'Cry for Mom',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 1 }],
					},
					{
						id: 'ch1_dream_monster_ignore',
						text: 'Trùm chăn ngủ tiếp',
						textVi: 'Trùm chăn ngủ tiếp',
						textEn: 'Cover with blanket and sleep',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
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
						effects: [{ stat: StatID.STEELMIND, value: 3 }],
					},
					{
						id: 'ch1_dream_king_share',
						text: 'Chia đồ chơi cho mọi người',
						textVi: 'Chia đồ chơi cho mọi người',
						textEn: 'Share toys with everyone',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch1_dream_king_build',
						text: 'Xây lâu đài cao hơn nữa',
						textVi: 'Xây lâu đài cao hơn nữa',
						textEn: 'Build castle higher',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch1_dream_king_destroy',
						text: 'Đập phá hết',
						textVi: 'Đập phá hết',
						textEn: 'Destroy everything',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
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
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch1_dream_lost_wait',
						text: 'Đứng yên chờ bố mẹ',
						textVi: 'Đứng yên chờ bố mẹ',
						textEn: 'Stand still wait for parents',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch1_dream_lost_cry',
						text: 'Khóc toáng lên',
						textVi: 'Khóc toáng lên',
						textEn: 'Cry loudly',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 1 }],
					},
					{
						id: 'ch1_dream_lost_play',
						text: 'Mải chơi quên cả sợ',
						textVi: 'Mải chơi quên cả sợ',
						textEn: 'Too busy playing to fear',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
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
						effects: [{ stat: StatID.VISION, value: 1 }],
					},
					{
						id: 'ch1_dream_future_hug',
						text: 'Ôm người đó',
						textVi: 'Ôm người đó',
						textEn: 'Hug them',
						next: '',
						effects: [{ stat: StatID.HUMANITY, value: 3 }],
					},
					{
						id: 'ch1_dream_future_doubt',
						text: 'Không tin, bỏ chạy',
						textVi: 'Không tin, bỏ chạy',
						textEn: 'Disbelieve, run away',
						next: '',
						effects: [{ stat: StatID.STEELMIND, value: 2 }],
					},
					{
						id: 'ch1_dream_future_gift',
						text: 'Đòi quà',
						textVi: 'Đòi quà',
						textEn: 'Demand a gift',
						next: '',
						effects: [{ stat: StatID.VISION, value: 1 }],
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
		text: 'Những năm 2007. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textVi:
			'Những năm 2007. Tiếng ve kêu râm ran trên những tán phượng vĩ. Thế giới của bạn gói gọn trong khoảng sân nhỏ và những viên bi ve lấp lánh.',
		textEn:
			'The 2007s. Cicadas buzzing on flamboyant trees. Your world is wrapped in a small courtyard and sparkling marbles.',
		next: Chapter1DialogueID.CH1_INTRO_1,
	},
	// 1.1 Ký ức 3 tuổi
	[Chapter1DialogueID.CH1_INTRO_1]: {
		speaker: 'player',
		text: 'Mẹ ơi, sao bố lúc nào cũng mùi xi măng và thuốc lá vậy?',
		textVi: 'Mẹ ơi, sao bố lúc nào cũng mùi xi măng và thuốc lá vậy?',
		textEn: 'Mom, why does Dad always smell like cement and cigarettes?',
		next: Chapter1DialogueID.CH1_INTRO_2,
	},
	[Chapter1DialogueID.CH1_INTRO_2]: {
		speaker: 'meQ',
		text: '(Vuốt tóc con) Đó là mùi của sự vất vả con ạ. Bố con làm việc suốt ngày trời dưới nắng nóng.',
		textVi:
			'(Vuốt tóc con) Đó là mùi của sự vất vả con ạ. Bố con làm việc suốt ngày trời dưới nắng nóng.',
		textEn:
			'(Stroking your hair) That is the smell of hard work, my child. Your father works all day under the scorching sun.',
		next: Chapter1DialogueID.CH1_INTRO_LORE,
	},
	[Chapter1DialogueID.CH1_INTRO_LORE]: {
		speaker: 'player',
		text: 'Bố làm việc vất vả lắm phải không mẹ? Sao bố không nghỉ ngơi?',
		textVi: 'Bố làm việc vất vả lắm phải không mẹ? Sao bố không nghỉ ngơi?',
		textEn: "Dad works very hard, right Mom? Why doesn't he rest?",
		next: Chapter1DialogueID.CH1_INTRO_SCHEDULE,
	},
	[Chapter1DialogueID.CH1_INTRO_SCHEDULE]: {
		speaker: 'meQ',
		text: '(Thở dài) 10 năm trước, bố con làm thuê cho 3 công ty cùng lúc. Sáng chỉ huy công trường này, chiều chạy thầu công ty kia, đêm về tiếp khách... Có lúc mẹ tưởng bố sẽ gục ngã.',
		textVi:
			'(Thở dài) 10 năm trước, bố con làm thuê cho 3 công ty cùng lúc. Sáng chỉ huy công trường này, chiều chạy thầu công ty kia, đêm về tiếp khách... Có lúc mẹ tưởng bố sẽ gục ngã.',
		textEn:
			'(Sighs) 10 years ago, your father worked for 3 companies at once. Morning at this site, afternoon bidding there, night entertaining clients... There were times I thought he would collapse.',
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
				text: 'Ngưỡng mộ: Thành công xây bằng mồ hôi',
				textVi: 'Ngưỡng mộ: Thành công xây bằng mồ hôi',
				textEn: 'Admire: Success is built on sweat',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter1DialogueID.CH1_ASK_MONEY_START,
			},
			{
				id: 'choice_pity_dad',
				text: 'Thương bố: Bố vất vả quá',
				textVi: 'Thương bố: Bố vất vả quá',
				textEn: 'Pity: Father works too hard',
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
				text: 'Thôi ngại lắm: Bố đang mệt',
				textVi: 'Thôi ngại lắm: Bố đang mệt',
				textEn: 'Too shy: Dad is tired',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
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
		text: 'Vài năm sau. Lớp 1.',
		textVi: 'Vài năm sau. Lớp 1.',
		textEn: 'A few years later. Grade 1.',
		next: Chapter1DialogueID.CH1_SCHOOL_2,
	},
	[Chapter1DialogueID.CH1_SCHOOL_2]: {
		speaker: 'npc',
		text: 'Cô giáo: "Các em chào em D nhé. Bố em là ông chủ công ty xây dựng lớn nhất tỉnh đấy. Trường mình vinh dự lắm."',
		textVi:
			'Cô giáo: "Các em chào em D nhé. Bố em là ông chủ công ty xây dựng lớn nhất tỉnh đấy. Trường mình vinh dự lắm."',
		textEn:
			'Teacher: "Everyone say hello to D. His father owns the biggest construction company in the province. We are honored."',
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
		text: 'Bạn cùng lớp 1: "Nhìn kìa, xe sang đưa đón đấy!"',
		textVi: 'Bạn cùng lớp 1: "Nhìn kìa, xe sang đưa đón đấy!"',
		textEn: 'Classmate 1: "Look, a luxury car picking him up!"',
		next: Chapter1DialogueID.CH1_CLASSMATES_WHISPER_2,
	},
	[Chapter1DialogueID.CH1_CLASSMATES_WHISPER_2]: {
		speaker: 'npc',
		text: 'Bạn cùng lớp 2: (Thì thầm) "Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textVi:
			'Bạn cùng lớp 2: (Thì thầm) "Con nhà đại gia đấy, đừng động vào nó. Bố nó quen cả chủ tịch tỉnh đấy."',
		textEn:
			'Classmate 2: (Whispers) "Rich kid, don\'t touch him. His dad knows the provincial chairman."',
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
				text: 'Đánh lại: Không được bắt nạt tao!',
				textVi: 'Đánh lại: Không được bắt nạt tao!',
				textEn: "Fight back: Don't bully me!",
				effects: [
					{ stat: StatID.STEELMIND, value: 3 },
					{ stat: StatID.HEALTH, value: -1 },
					{ stat: StatID.HUMANITY, value: -1 },
				],
				next: Chapter1DialogueID.CH1_BULLY_FIGHT_RESULT,
			},
			{
				id: 'choice_bully_report',
				text: 'Mách cô giáo: An toàn là trên hết',
				textVi: 'Mách cô giáo: An toàn là trên hết',
				textEn: 'Tell teacher: Safety first',
				effects: [
					{ stat: StatID.VISION, value: 1 },
					{ stat: StatID.STEELMIND, value: -1 },
				],
				next: Chapter1DialogueID.CH1_BULLY_REPORT_RESULT,
			},
			{
				id: 'choice_bully_give',
				text: 'Đưa bút: Tránh rắc rối',
				textVi: 'Đưa bút: Tránh rắc rối',
				textEn: 'Give pen: Avoid trouble',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.STEELMIND, value: -2 },
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
				text: 'Tự hào: Mình là con của Bố',
				textVi: 'Tự hào: Mình là con của Bố',
				textEn: "Proud: I am Father's son",
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter1DialogueID.CH1_BUY_TOY_START,
			},
			{
				id: 'choice_feel_isolated',
				text: 'Sợ hãi: Quyền lực này thật xa lạ',
				textVi: 'Sợ hãi: Quyền lực này thật xa lạ',
				textEn: 'Fear: This power feels alien',
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
					{ stat: StatID.HUMANITY, value: 3 }, // Happiness/Childhood joy
				],
				next: Chapter1DialogueID.CH1_BUY_TOY_SUCCESS,
			},
			{
				id: 'choice_buy_toy_no',
				text: 'Tiếc tiền: Thôi để dành tiền làm việc khác',
				textVi: 'Tiếc tiền: Thôi để dành tiền làm việc khác',
				textEn: 'Save money: Save for other things',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
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
				text: 'Mang đi khoe: Cho chúng nó lác mắt',
				textVi: 'Mang đi khoe: Cho chúng nó lác mắt',
				textEn: 'Show off: Make them jealous',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter1DialogueID.CH1_SHOW_OFF_FAIL,
			},
			{
				id: 'choice_showoff_no',
				text: 'Để ở nhà: Sợ bị mất',
				textVi: 'Để ở nhà: Sợ bị mất',
				textEn: 'Keep at home: Fear losing it',
				effects: [{ stat: StatID.VISION, value: 1 }],
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
			{ stat: StatID.HUMANITY, value: -3 },
			{ stat: StatID.STEELMIND, value: 3 },
			{ stat: StatID.STRESS, value: 4 },
		],
		next: Chapter1DialogueID.CH1_FORTRESS_1,
	},

	// 1.3 Lớp 4: Căn cứ địa 4.000m²
	[Chapter1DialogueID.CH1_FORTRESS_1]: {
		speaker: 'boQ',
		text: 'Con ơi, đây là di sản bố xây cho con. 4000m², mấy năm cố gắng mới có ngày hôm nay!',
		textVi:
			'Con ơi, đây là di sản bố xây cho con. 4000m², mấy năm cố gắng mới có ngày hôm nay!',
		textEn:
			'My child, this is the legacy I built for you. 4000m², years of effort to reach this day!',
		next: Chapter1DialogueID.CH1_FORTRESS_ZOO,
	},
	[Chapter1DialogueID.CH1_FORTRESS_ZOO]: {
		speaker: 'player',
		text: 'Bố ơi! Đà điểu đang chạy ầm ầm kia! Và con công xòe đuôi mưa đẹp quá!',
		textVi:
			'Bố ơi! Đà điểu đang chạy ầm ầm kia! Và con công xòe đuôi mưa đẹp quá!',
		textEn:
			'Dad! The ostriches are running! And the peacock dancing is so beautiful!',
		next: Chapter1DialogueID.CH1_FORTRESS_ZOO_2,
	},
	[Chapter1DialogueID.CH1_FORTRESS_ZOO_2]: {
		speaker: 'boQ',
		text: '(Cười tự hào) Trên cây có vượn và khỉ nữa. Mình không chỉ có nhà , mà còn có hệ sinh thái riêng!',
		textVi:
			'(Cười tự hào) Trên cây có vượn và khỉ nữa. Mình không chỉ có nhà , mà còn có hệ sinh thái riêng!',
		textEn:
			'(Laughs proudly) Up in the trees are gibbons and monkeys. We have not just a house, but our own ecosystem!',
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
		effects: [{ stat: StatID.HUMANITY, value: 3 }],
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
				text: 'Giữ bí mật: Nơi này là của riêng mình',
				textVi: 'Giữ bí mật: Nơi này là của riêng mình',
				textEn: 'Keep secret: This is mine alone',
				effects: [{ stat: StatID.STEELMIND, value: 2 }],
				next: Chapter1DialogueID.CH1_REVELATION_1,
			},
			{
				id: 'choice_base_share',
				text: 'Rủ bạn bè đến: Cùng chơi mới vui (Money -100k)',
				textVi: 'Rủ bạn bè đến: Cùng chơi mới vui (Money -100k)',
				textEn: 'Invite friends: Fun together (Money -100k)',
				effects: [
					{ stat: StatID.HUMANITY, value: 3 },
					{ stat: StatID.MONEY, value: -100000 }, // Snacks
				],
				next: Chapter1DialogueID.CH1_SECRET_BASE_END,
			},
		],
	},

	// NEW: Secret Base Event
	[Chapter1DialogueID.CH1_SECRET_BASE_END]: {
		speaker: 'narrator',
		text: 'Trong góc khuất nhất của căn cứ bí mật tuyệt vời, bạn tìm thấy rương kho báu của bố',
		textVi:
			'Trong góc khuất nhất của căn cứ bí mật tuyệt vời, bạn tìm thấy rương kho báu của bố',
		textEn:
			"In the hidden corner of the perfect secret base, you found Father's treasure chest.",
		choices: [
			{
				id: 'choice_base_secret',
				text: 'Giữ bí mật: Mình sẽ giữ làm của riêng mình (Humanity -20)',
				textVi: 'Giữ bí mật: Mình sẽ giữ làm của riêng mình (Humanity -20)',
				textEn: 'Keep secret: I will keep it for myself (Humanity -20)',
				effects: [
					{ stat: StatID.HUMANITY, value: -20 },
					{ stat: StatID.MONEY, value: 50000000 },
				],
				next: Chapter1DialogueID.CH1_BASE_PARTY,
			},
			{
				id: 'choice_base_share',
				text: 'Bảo bố: Mình sẽ bảo bố, mong rằng bố sẽ cho mình tiền ăn bim bim',
				textVi:
					'Bảo bố: Mình sẽ bảo bố, mong rằng bố sẽ cho mình tiền ăn bim bim',
				textEn:
					'Tell Father: I will tell Father, hoping he will give me money for snacks',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 },
					{ stat: StatID.MONEY, value: 5000000 }, // Snacks
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
		text: 'Lớp 5. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột.',
		textVi: 'Lớp 5. Mùa hè năm đó, bố gửi bạn về Hà Nội ở nhà bác ruột.',
		textEn:
			'Grade 5. That summer, father sent you to stay in Hanoi with your uncle.',
		next: Chapter1DialogueID.CH1_REVELATION_SHOCK,
	},
	[Chapter1DialogueID.CH1_REVELATION_SHOCK]: {
		speaker: 'player',
		text: '(Nhìn tòa nhà Keangnam, Lotte cao vút) Ở Lào Cai mình là vua... nhưng ở đây...',
		textVi:
			'(Nhìn tòa nhà Keangnam, Lotte cao vút) Ở Lào Cai mình là vua... nhưng ở đây...',
		textEn:
			'(Looking at towering Keangnam, Lotte buildings) In Lao Cai I was king... but here...',
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
		speaker: 'player',
		text: '(Nghe lũ bạn hàng xóm nói tiếng Anh trướt) Sao chúng nó giỏi thế nhỉ?',
		textVi:
			'(Nghe lũ bạn hàng xóm nói tiếng Anh trướt) Sao chúng nó giỏi thế nhỉ?',
		textEn:
			'(Hearing neighbor kids speak fluent English) How are they so good?',
		next: Chapter1DialogueID.CH1_REVELATION_NEIGHBOR,
	},
	[Chapter1DialogueID.CH1_REVELATION_NEIGHBOR]: {
		speaker: 'npc',
		text: 'Bạn hàng xóm: "How about you? Where are you from?" (Bạn đế “Lào Cow” đã sai rồi)',
		textVi:
			'Bạn hàng xóm: "How about you? Where are you from?" (Bạn đế “Lào Cow” đã sai rồi)',
		textEn:
			'Neighbor kid: "How about you? Where are you from?" (You said "Lao Cow" wrong already)',
		next: Chapter1DialogueID.CH1_REVELATION_REALIZATION,
	},
	[Chapter1DialogueID.CH1_REVELATION_REALIZATION]: {
		speaker: 'player',
		text: '(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textVi:
			'(Suy nghĩ) Vương quốc của bố, dù hoành tráng, vẫn chỉ là một cái ao làng. Thế giới ngoài kia rộng lớn và tàn khốc hơn nhiều.',
		textEn:
			"(Thinking) Father's kingdom, however grand, is just a village pond. The world out there is much bigger and crueler.",
		effects: [{ stat: StatID.VISION, value: 1 }],
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
				text: 'Quyết tâm: Xin đi học Hà Nội',
				textVi: 'Quyết tâm: Xin đi học Hà Nội',
				textEn: 'Determined: Ask to study in Hanoi',
				effects: [
					{ stat: StatID.VISION, value: 1 },
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
