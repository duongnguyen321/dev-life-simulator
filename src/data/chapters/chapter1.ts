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
			music: '/assets/audio/music/chapters/ch1_childhood.ogg',
			dialogueStart: 'ch1_intro_1',
		},
		{
			id: 'ch1_school',
			name: 'Lớp 1-3',
			nameVi: 'Lớp 1-3: Hoàng tử bé nơi biên ải',
			nameEn: 'Grade 1-3: The Little Prince of the Border',
			background: '/assets/sprites/backgrounds/school_luxury.png',
			music: '/assets/audio/music/chapters/ch1_childhood.ogg',
			dialogueStart: 'ch1_school_1',
		},
		{
			id: 'ch1_fortress',
			name: 'Căn cứ địa 4.000m²',
			nameVi: 'Căn cứ địa 4.000m² - The Fortress',
			nameEn: 'The 4,000m² Fortress',
			background: '/assets/sprites/backgrounds/fortress.png',
			music: '/assets/audio/music/chapters/ch1_childhood.ogg',
			dialogueStart: 'ch1_fortress_1',
		},
		{
			id: 'ch1_revelation',
			name: 'Mùa hè Hà Nội',
			nameVi: 'Mùa hè Hà Nội - The Revelation',
			nameEn: 'Summer in Hanoi - The Revelation',
			background: '/assets/sprites/backgrounds/hanoi_city.png',
			music: '/assets/audio/music/chapters/ch1_childhood.ogg',
			dialogueStart: 'ch1_revelation_1',
		},
	],
};

// ==========================================
// DIALOGUE NODES - Chapter 1
// ==========================================

export const chapter1Dialogues: Record<string, DialogueNode> = {
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
				next: 'ch1_school_1',
			},
			{
				id: 'choice_pity_dad',
				text: 'Thương bố: Bố vất vả quá (Humanity +1)',
				textVi: 'Thương bố: Bố vất vả quá (Humanity +1)',
				textEn: 'Pity: Father works too hard (Humanity +1)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch1_school_1',
			},
		],
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
				next: 'ch1_fortress_1',
			},
			{
				id: 'choice_feel_isolated',
				text: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textVi: 'Sợ hãi: Quyền lực này thật xa lạ (Humanity ++)',
				textEn: 'Fear: This power feels alien (Humanity ++)',
				effects: [{ stat: 'humanity', value: 1 }],
				next: 'ch1_fortress_1',
			},
		],
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
				next: 'ch1_end',
			},
		],
	},
	ch1_end: {
		id: 'ch1_end',
		speaker: 'boQ',
		text: '"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textVi:
			'"Được. Bố đồng ý." Mắt bố ánh lên niềm tự hào nhưng cũng thoáng chút lo âu.',
		textEn:
			'"Okay. I agree." Father\'s eyes shone with pride but also a hint of worry.',
		next: 'ch2_fpt_1',
	},
};
