import type { RandomEvent } from './types';
import { Dialogue_END, FlagID, RandomEventID, StatID } from './enum';

export const randomEvents: RandomEvent[] = [
	// Chapter 1 Events
	{
		id: RandomEventID.EVT_KID_SICK,
		name: 'Sốt Virus',
		nameVi: 'Sốt Virus',
		nameEn: 'Viral Fever',
		description: 'Bạn bị sốt cao, mẹ lo lắng thức trắng đêm chăm sóc.',
		descriptionVi: 'Bạn bị sốt cao, mẹ lo lắng thức trắng đêm chăm sóc.',
		descriptionEn: 'High fever, mom stayed up all night caring for you.',
		probability: 0.2,
		minChapter: 1,
		maxChapter: 1,
		choices: [
			{
				id: RandomEventID.EVT_KID_SICK_REST,
				text: 'Ngoan ngoãn uống thuốc',
				textVi: 'Ngoan ngoãn uống thuốc',
				textEn: 'Take medicine obediently',
				next: '',
				effects: [
					{ stat: StatID.HEALTH, value: 5 },
					{ stat: StatID.HUMANITY, value: 5 },
				],
			},
			{
				id: RandomEventID.EVT_KID_SICK_PLAY,
				text: 'Đòi chơi đồ chơi',
				textVi: 'Đòi chơi đồ chơi',
				textEn: 'Demand toys',
				next: '',
				effects: [
					{ stat: StatID.HEALTH, value: -5 },
					{ stat: StatID.STEELMIND, value: 2 },
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_KID_FIGHT,
		name: 'Đại chiến đồ chơi',
		nameVi: 'Đại chiến đồ chơi',
		nameEn: 'Toy War',
		description: 'Thằng bạn hàng xóm giật đồ chơi của bạn.',
		descriptionVi: 'Thằng bạn hàng xóm giật đồ chơi của bạn.',
		descriptionEn: 'Neighbor kid snatched your toy.',
		probability: 0.2,
		minChapter: 1,
		maxChapter: 1,
		choices: [
			{
				id: RandomEventID.EVT_KID_FIGHT_FIGHT,
				text: 'Lao vào đấm',
				textVi: 'Lao vào đấm',
				textEn: 'Punch him',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.HUMANITY, value: -5 },
				],
			},
			{
				id: RandomEventID.EVT_KID_FIGHT_TELL,
				text: 'Mách mẹ',
				textVi: 'Mách mẹ',
				textEn: 'Tell mom',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 2 },
					{ stat: StatID.STEELMIND, value: -2 },
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_KID_LOST,
		name: 'Lạc ở chợ',
		nameVi: 'Lạc ở chợ',
		nameEn: 'Lost in Market',
		description: 'Bạn mải xem hàng đồ chơi và lạc mất mẹ.',
		descriptionVi: 'Bạn mải xem hàng đồ chơi và lạc mất mẹ.',
		descriptionEn: 'Distracted by toys, lost mom.',
		probability: 0.1,
		minChapter: 1,
		maxChapter: 1,
		choices: [
			{
				id: RandomEventID.EVT_KID_LOST_CRY,
				text: 'Khóc toáng lên',
				textVi: 'Khóc toáng lên',
				textEn: 'Cry out loud',
				next: '',
				effects: [{ stat: StatID.HUMANITY, value: 5 }],
			},
			{
				id: RandomEventID.EVT_KID_LOST_ASK,
				text: 'Tìm chú công an',
				textVi: 'Tìm chú công an',
				textEn: 'Find police',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.STEELMIND, value: 5 },
				],
			},
		],
	},
	// Chapter 2 Events
	{
		id: RandomEventID.EVT_TEEN_NET,
		name: 'Cám dỗ Net Cỏ',
		nameVi: 'Cám dỗ Net Cỏ',
		nameEn: 'Internet Cafe Temptation',
		description: 'Lũ bạn rủ trốn học đi net. Half-Life đang hot.',
		descriptionVi: 'Lũ bạn rủ trốn học đi net. Half-Life đang hot.',
		descriptionEn: 'Friends invite to skip school for net. Half-Life is hot.',
		probability: 0.2,
		minChapter: 2,
		maxChapter: 2,
		choices: [
			{
				id: RandomEventID.EVT_TEEN_NET_PLAY,
				text: 'Đi luôn sợ gì',
				textVi: 'Đi luôn sợ gì',
				textEn: 'Go for it',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: -5 },
					{ stat: StatID.VISION, value: 2 },
				],
			},
			{
				id: RandomEventID.EVT_TEEN_NET_STUDY,
				text: 'Về nhà học bài',
				textVi: 'Về nhà học bài',
				textEn: 'Go home and study',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_TEEN_CRUSH,
		name: 'Rung động đầu đời',
		nameVi: 'Rung động đầu đời',
		nameEn: 'First Crush',
		description: 'Cô bạn bàn bên cười với bạn. Tim bạn đập thình thịch.',
		descriptionVi: 'Cô bạn bàn bên cười với bạn. Tim bạn đập thình thịch.',
		descriptionEn: 'Girl next desk smiled. Heart pounding.',
		probability: 0.1,
		minChapter: 2,
		maxChapter: 2,
		choices: [
			{
				id: RandomEventID.EVT_TEEN_CRUSH_CONFESS,
				text: 'Viết thư làm quen',
				textVi: 'Viết thư làm quen',
				textEn: 'Write a letter',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.HUMANITY, value: 5 },
				],
			},
			{
				id: RandomEventID.EVT_TEEN_CRUSH_HIDE,
				text: 'Giấu kín trong lòng',
				textVi: 'Giấu kín trong lòng',
				textEn: 'Keep it secret',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_TEEN_CHEAT,
		name: 'Bài kiểm tra 1 tiết',
		nameVi: 'Bài kiểm tra 1 tiết',
		nameEn: '1-Period Test',
		description: 'Đề khó quá. Bạn có phao trong túi.',
		descriptionVi: 'Đề khó quá. Bạn có phao trong túi.',
		descriptionEn: 'Test is hard. You have cheat sheet.',
		probability: 0.2,
		minChapter: 2,
		maxChapter: 2,
		choices: [
			{
				id: RandomEventID.EVT_TEEN_CHEAT_COPY,
				text: 'Quay cóp',
				textVi: 'Quay cóp',
				textEn: 'Cheat',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: -5 },
					{ stat: StatID.VISION, value: -2 },
				],
			},
			{
				id: RandomEventID.EVT_TEEN_CHEAT_STUDY,
				text: 'Tự làm',
				textVi: 'Tự làm',
				textEn: 'Do it yourself',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_SERVER_CRASH,
		name: 'Server Crash',
		nameVi: 'Server Crash lúc 2h sáng',
		nameEn: 'Server Crash at 2 AM',
		description: 'Server sập lúc nửa đêm.',
		descriptionVi: 'Server sập lúc nửa đêm.',
		descriptionEn: 'Server crashed at midnight.',
		probability: 0.1,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_SERVER_CRASH_IGNORE,
				text: 'Kệ, sáng mai sửa',
				textVi: 'Kệ, sáng mai sửa',
				textEn: 'Ignore, fix tomorrow',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.VISION, value: -10 }, // Uy tín -2 -> Vision? Or maybe money. Let's map to Vision for Reputation.
				],
				flags: [{ key: FlagID.BUG_CRASH_TRIGGERED, value: true }],
			},
			{
				id: RandomEventID.EVT_SERVER_CRASH_FIX,
				text: 'Dậy sửa ngay',
				textVi: 'Dậy sửa ngay',
				textEn: 'Wake up and fix',
				next: '',
				effects: [
					{ stat: StatID.HEALTH, value: -5 },
					{ stat: StatID.VISION, value: 5 },
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_HEADHUNTER,
		name: 'Headhunter Call',
		nameVi: 'Headhunter gọi điện mời lương x2',
		nameEn: 'Headhunter offers x2 salary',
		description: 'Một lời mời hấp dẫn.',
		descriptionVi: 'Một lời mời hấp dẫn.',
		descriptionEn: 'A tempting offer.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_HEADHUNTER_ACCEPT,
				text: 'Đi phỏng vấn',
				textVi: 'Đi phỏng vấn',
				textEn: 'Go for interview',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: 50000000 },
					{ stat: StatID.HUMANITY, value: -10 }, // Loyalty -
				],
			},
			{
				id: RandomEventID.EVT_HEADHUNTER_REJECT,
				text: 'Từ chối',
				textVi: 'Từ chối',
				textEn: 'Reject',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 }, // Loyalty +
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_STAFF_QUIT,
		name: 'Staff Quit',
		nameVi: 'Nhân viên giỏi đòi nghỉ việc',
		nameEn: 'Top talent wants to quit',
		description: 'Nhân viên chủ chốt muốn ra đi.',
		descriptionVi: 'Nhân viên chủ chốt muốn ra đi.',
		descriptionEn: 'Key employee wants to leave.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_STAFF_QUIT_RAISE,
				text: 'Tăng lương giữ lại',
				textVi: 'Tăng lương giữ lại',
				textEn: 'Raise salary to keep',
				next: '',
				effects: [{ stat: StatID.MONEY, value: -5000000 }],
			},
			{
				id: RandomEventID.EVT_STAFF_QUIT_BYE,
				text: 'Chúc may mắn',
				textVi: 'Chúc may mắn',
				textEn: 'Good luck',
				next: '',
				effects: [{ stat: StatID.VISION, value: -5 }], // Team morale?
			},
		],
	},
	{
		id: RandomEventID.EVT_COPYCAT,
		name: 'Copycat',
		nameVi: 'Đối thủ sao chép sản phẩm',
		nameEn: 'Competitor copies product',
		description: 'Sản phẩm của bạn bị nhái.',
		descriptionVi: 'Sản phẩm của bạn bị nhái.',
		descriptionEn: 'Your product is cloned.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_COPYCAT_SUE,
				text: 'Kiện',
				textVi: 'Kiện',
				textEn: 'Sue',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -10000000 },
					{ stat: StatID.STRESS, value: 10 },
				],
			},
			{
				id: RandomEventID.EVT_COPYCAT_IMPROVE,
				text: 'Cải tiến sản phẩm',
				textVi: 'Cải tiến sản phẩm',
				textEn: 'Improve product',
				next: '',
				effects: [{ stat: StatID.VISION, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_DAD_SICK,
		name: 'Dad Sick',
		nameVi: 'Bố ốm nặng',
		nameEn: 'Dad is very sick',
		description: 'Tin dữ từ gia đình.',
		descriptionVi: 'Tin dữ từ gia đình.',
		descriptionEn: 'Bad news from home.',
		probability: 0.05,
		minChapter: 4,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_DAD_SICK_CARE,
				text: 'Về chăm sóc',
				textVi: 'Về chăm sóc',
				textEn: 'Go home to care',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 },
					{ stat: StatID.VISION, value: -5 }, // Project delayed
				],
			},
			{
				id: RandomEventID.EVT_DAD_SICK_NURSE,
				text: 'Thuê y tá xịn',
				textVi: 'Thuê y tá xịn',
				textEn: 'Hire expensive nurse',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.VISION, value: 5 }, // Project on time
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_EX_LOVER,
		name: 'Ex Lover',
		nameVi: 'Gặp lại người yêu cũ',
		nameEn: 'Meet ex-lover',
		description: 'Tình cờ gặp lại người xưa.',
		descriptionVi: 'Tình cờ gặp lại người xưa.',
		descriptionEn: 'Accidentally meet ex.',
		probability: 0.05,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_EX_LOVER_COFFEE,
				text: 'Cà phê xã giao',
				textVi: 'Cà phê xã giao',
				textEn: 'Social coffee',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 5 }], // Emotional stir
			},
			{
				id: RandomEventID.EVT_EX_LOVER_IGNORE,
				text: 'Lơ đi',
				textVi: 'Lơ đi',
				textEn: 'Ignore',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_BITCOIN,
		name: 'Bitcoin',
		nameVi: 'Cơ hội đầu tư Bitcoin năm 2017',
		nameEn: 'Bitcoin investment opportunity 2017',
		description: 'Cơ hội đổi đời?',
		descriptionVi: 'Cơ hội đổi đời?',
		descriptionEn: 'Life changing opportunity?',
		probability: 0.05,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_BITCOIN_ALL_IN,
				text: 'All-in',
				textVi: 'All-in',
				textEn: 'All-in',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 20 }], // High risk
			},
			{
				id: RandomEventID.EVT_BITCOIN_SKIP,
				text: 'Bỏ qua',
				textVi: 'Bỏ qua',
				textEn: 'Skip',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }], // Safe
			},
		],
	},
	{
		id: RandomEventID.EVT_DATA_SCANDAL,
		name: 'Data Scandal',
		nameVi: 'Scandal dữ liệu người dùng',
		nameEn: 'User Data Scandal',
		description: 'Dữ liệu bị rò rỉ.',
		descriptionVi: 'Dữ liệu bị rò rỉ.',
		descriptionEn: 'Data leaked.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_DATA_SCANDAL_HIDE,
				text: 'Che giấu',
				textVi: 'Che giấu',
				textEn: 'Hide it',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 20 }], // Risk of jail
			},
			{
				id: RandomEventID.EVT_DATA_SCANDAL_APOLOGIZE,
				text: 'Công khai xin lỗi',
				textVi: 'Công khai xin lỗi',
				textEn: 'Public apology',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: -10 }, // Temp rep loss
					{ stat: StatID.HUMANITY, value: 10 }, // Long term gain
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_DDOS,
		name: 'DDoS Attack',
		nameVi: 'Server bị DDoS',
		nameEn: 'Server DDoS Attack',
		description: 'Hệ thống bị tấn công.',
		descriptionVi: 'Hệ thống bị tấn công.',
		descriptionEn: 'System under attack.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_DDOS_SERVICE,
				text: 'Mua dịch vụ chống DDoS',
				textVi: 'Mua dịch vụ chống DDoS',
				textEn: 'Buy anti-DDoS service',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -5000000 },
					{ stat: StatID.STEELMIND, value: 5 }, // Safe
				],
			},
			{
				id: RandomEventID.EVT_DDOS_SCRIPT,
				text: 'Tự viết script chặn IP',
				textVi: 'Tự viết script chặn IP',
				textEn: 'Write IP block script',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 10 }, // Skill +
					{ stat: StatID.STRESS, value: 5 }, // Risk
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_CONFESSION,
		name: 'Confession',
		nameVi: 'Nhân viên nữ tỏ tình',
		nameEn: 'Female staff confesses',
		description: 'Rắc rối tình cảm nơi công sở.',
		descriptionVi: 'Rắc rối tình cảm nơi công sở.',
		descriptionEn: 'Office romance trouble.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_CONFESSION_ACCEPT,
				text: 'Đồng ý',
				textVi: 'Đồng ý',
				textEn: 'Accept',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 10 }], // Drama risk
			},
			{
				id: RandomEventID.EVT_CONFESSION_REJECT,
				text: 'Từ chối khéo',
				textVi: 'Từ chối khéo',
				textEn: 'Polite rejection',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_STOCK_CRASH,
		name: 'Stock Crash',
		nameVi: 'Cổ phiếu công ty tụt dốc',
		nameEn: 'Company stock crashes',
		description: 'Thị trường biến động mạnh.',
		descriptionVi: 'Thị trường biến động mạnh.',
		descriptionEn: 'Market volatility.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_STOCK_CRASH_BUY,
				text: 'Mua vào (Buy the dip)',
				textVi: 'Mua vào (Buy the dip)',
				textEn: 'Buy the dip',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 15 }], // High risk
			},
			{
				id: RandomEventID.EVT_STOCK_CRASH_SELL,
				text: 'Bán cắt lỗ',
				textVi: 'Bán cắt lỗ',
				textEn: 'Cut loss',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.STEELMIND, value: 5 }, // Safe
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_TEDX,
		name: 'TEDx Invite',
		nameVi: 'Được mời làm diễn giả TEDx',
		nameEn: 'Invited to TEDx',
		description: 'Cơ hội chia sẻ kiến thức.',
		descriptionVi: 'Cơ hội chia sẻ kiến thức.',
		descriptionEn: 'Opportunity to share knowledge.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_TEDX_JOIN,
				text: 'Tham gia',
				textVi: 'Tham gia',
				textEn: 'Join',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 15 }, // Reputation
					{ stat: StatID.STRESS, value: 5 }, // Time
				],
			},
			{
				id: RandomEventID.EVT_TEDX_REJECT,
				text: 'Từ chối vì bận code',
				textVi: 'Từ chối vì bận code',
				textEn: 'Reject (busy coding)',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 },
					{ stat: StatID.VISION, value: -5 }, // Missed PR
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_ZERO_DAY,
		name: 'Zero-day Exploit',
		nameVi: 'Phát hiện lỗ hổng Zero-day',
		nameEn: 'Zero-day Exploit Found',
		description: 'Lỗ hổng trong thư viện Open Source.',
		descriptionVi: 'Lỗ hổng trong thư viện Open Source.',
		descriptionEn: 'Vulnerability in Open Source library.',
		probability: 0.05,
		minChapter: 4,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_ZERO_DAY_REPORT,
				text: 'Báo cáo cho tác giả',
				textVi: 'Báo cáo cho tác giả',
				textEn: 'Report to author',
				next: '',
				effects: [{ stat: StatID.VISION, value: 10 }], // Community rep
			},
			{
				id: RandomEventID.EVT_ZERO_DAY_EXPLOIT,
				text: 'Giữ kín để exploit (Black Hat)',
				textVi: 'Giữ kín để exploit (Black Hat)',
				textEn: 'Keep to exploit (Black Hat)',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: 100000000 },
					{ stat: StatID.HUMANITY, value: -20 }, // Unethical
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_TEAM_BUILDING,
		name: 'Team Building',
		nameVi: 'Team Building đi biển',
		nameEn: 'Beach Team Building',
		description: 'Hoạt động gắn kết team.',
		descriptionVi: 'Hoạt động gắn kết team.',
		descriptionEn: 'Team bonding activity.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_TEAM_BUILDING_GO,
				text: 'Đi và quẩy hết mình',
				textVi: 'Đi và quẩy hết mình',
				textEn: 'Go and party',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 }, // Bonding
					{ stat: StatID.HEALTH, value: -5 },
				],
			},
			{
				id: RandomEventID.EVT_TEAM_BUILDING_STAY,
				text: 'Ở nhà làm việc',
				textVi: 'Ở nhà làm việc',
				textEn: 'Stay home and work',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 5 }, // Productivity
					{ stat: StatID.HUMANITY, value: -5 }, // Morale -
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_BAD_DEBT,
		name: 'Bad Debt',
		nameVi: 'Khách hàng quỵt tiền',
		nameEn: 'Client refuses to pay',
		description: 'Rủi ro kinh doanh.',
		descriptionVi: 'Rủi ro kinh doanh.',
		descriptionEn: 'Business risk.',
		probability: 0.05,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_BAD_DEBT_THUG,
				text: 'Thuê đòi nợ thuê',
				textVi: 'Thuê đòi nợ thuê',
				textEn: 'Hire thugs',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: -10 },
					{ stat: StatID.MONEY, value: 10000000 }, // Fast money
				],
			},
			{
				id: RandomEventID.EVT_BAD_DEBT_SUE,
				text: 'Kiện ra tòa',
				textVi: 'Kiện ra tòa',
				textEn: 'Sue in court',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 10 }], // Time consuming
			},
		],
	},
	{
		id: RandomEventID.EVT_CAT_SERVER,
		name: 'Cat vs Server',
		nameVi: 'Mèo của văn phòng đái vào server',
		nameEn: 'Office cat pees on server',
		description: 'Tai nạn hy hữu.',
		descriptionVi: 'Tai nạn hy hữu.',
		descriptionEn: 'Rare accident.',
		probability: 0.05,
		minChapter: 4,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_CAT_SERVER_FIRE,
				text: 'Đuổi việc con mèo',
				textVi: 'Đuổi việc con mèo',
				textEn: 'Fire the cat',
				next: '',
				effects: [{ stat: StatID.HUMANITY, value: -10 }], // Team hates it
			},
			{
				id: RandomEventID.EVT_CAT_SERVER_BUY,
				text: 'Mua server mới',
				textVi: 'Mua server mới',
				textEn: 'Buy new server',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -20000000 },
					{ stat: StatID.HUMANITY, value: 5 }, // Keep mascot
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_LAND_FEVER,
		name: 'Land Fever',
		nameVi: 'Sốt đất ở quê',
		nameEn: 'Land Fever in hometown',
		description: 'Cơn sốt đất lan rộng.',
		descriptionVi: 'Cơn sốt đất lan rộng.',
		descriptionEn: 'Land fever spreading.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_LAND_FEVER_TRADE,
				text: 'Về quê buôn đất',
				textVi: 'Về quê buôn đất',
				textEn: 'Trade land',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: 200000000 },
					{ stat: StatID.VISION, value: -10 }, // Skill drops
				],
			},
			{
				id: RandomEventID.EVT_LAND_FEVER_IGNORE,
				text: 'Kệ, tập trung làm Tech',
				textVi: 'Kệ, tập trung làm Tech',
				textEn: 'Ignore, focus on Tech',
				next: '',
				effects: [{ stat: StatID.VISION, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_FRIEND_LOAN,
		name: 'Friend Loan',
		nameVi: 'Bạn cũ vay tiền',
		nameEn: 'Old friend asks for loan',
		description: 'Vấn đề tiền bạc và tình bạn.',
		descriptionVi: 'Vấn đề tiền bạc và tình bạn.',
		descriptionEn: 'Money and friendship.',
		probability: 0.05,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_FRIEND_LOAN_GIVE,
				text: 'Cho vay',
				textVi: 'Cho vay',
				textEn: 'Lend',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 },
					{ stat: StatID.MONEY, value: -50000000 }, // Risk losing
				],
			},
			{
				id: RandomEventID.EVT_FRIEND_LOAN_REJECT,
				text: 'Say No',
				textVi: 'Say No',
				textEn: 'Say No',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }], // Lose friend
			},
		],
	},
	{
		id: RandomEventID.EVT_BACK_PAIN,
		name: 'Back Pain',
		nameVi: 'Bị đau lưng thoát vị đĩa đệm',
		nameEn: 'Herniated Disc Back Pain',
		description: 'Bệnh nghề nghiệp.',
		descriptionVi: 'Bệnh nghề nghiệp.',
		descriptionEn: 'Occupational disease.',
		probability: 0.05,
		minChapter: 4,
		maxChapter: 8,
		choices: [
			{
				id: RandomEventID.EVT_BACK_PAIN_GYM,
				text: 'Đi tập Gym/Yoga',
				textVi: 'Đi tập Gym/Yoga',
				textEn: 'Go to Gym/Yoga',
				next: '',
				effects: [
					{ stat: StatID.HEALTH, value: 10 },
					{ stat: StatID.STRESS, value: 5 }, // Time consuming
				],
			},
			{
				id: RandomEventID.EVT_BACK_PAIN_PILL,
				text: 'Uống thuốc giảm đau làm tiếp',
				textVi: 'Uống thuốc giảm đau làm tiếp',
				textEn: 'Take painkillers and work',
				next: '',
				effects: [
					{ stat: StatID.HEALTH, value: -15 },
					{ stat: StatID.VISION, value: 5 }, // Done early
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_SHARK_BUY,
		name: 'Shark Buyout',
		nameVi: 'Cá mập muốn mua lại công ty',
		nameEn: 'Shark wants to buyout',
		description: 'Lời đề nghị mua lại.',
		descriptionVi: 'Lời đề nghị mua lại.',
		descriptionEn: 'Buyout offer.',
		probability: 0.05,
		minChapter: 6,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_SHARK_BUY_SELL,
				text: 'Bán luôn',
				textVi: 'Bán luôn',
				textEn: 'Sell now',
				next: '',
				effects: [{ stat: StatID.MONEY, value: 10000000000 }], // End game early?
			},
			{
				id: RandomEventID.EVT_SHARK_BUY_NEXT,
				text: 'Next',
				textVi: 'Next',
				textEn: 'Next',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }], // Hard path
			},
		],
	},
	{
		id: RandomEventID.EVT_LEAK_CODE,
		name: 'Code Leak',
		nameVi: 'Nhân viên làm lộ source code',
		nameEn: 'Staff leaks source code',
		description: 'Sự cố bảo mật nội bộ.',
		descriptionVi: 'Sự cố bảo mật nội bộ.',
		descriptionEn: 'Internal security incident.',
		probability: 0.05,
		minChapter: 5,
		maxChapter: 6,
		choices: [
			{
				id: RandomEventID.EVT_LEAK_CODE_FIRE,
				text: 'Đuổi việc và kiện',
				textVi: 'Đuổi việc và kiện',
				textEn: 'Fire and sue',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
				flags: [{ key: FlagID.SPAGHETTI_CODE, value: true }], // Assuming leak was due to bad code? A bit stretch but okay for now.
			},
			{
				id: RandomEventID.EVT_LEAK_CODE_FORGIVE,
				text: 'Tha thứ và đào tạo lại',
				textVi: 'Tha thứ và đào tạo lại',
				textEn: 'Forgive and retrain',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 },
					{ stat: StatID.STRESS, value: 5 }, // Risk
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_INTERNET_CUT,
		name: 'Internet Cut',
		nameVi: 'Internet bị cá mập cắn cáp',
		nameEn: 'Shark bites internet cable',
		description: 'Mất mạng toàn công ty.',
		descriptionVi: 'Mất mạng toàn công ty.',
		descriptionEn: 'No internet.',
		probability: 0.05,
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_INTERNET_CUT_BREAK,
				text: 'Cho nhân viên nghỉ',
				textVi: 'Cho nhân viên nghỉ',
				textEn: 'Let staff rest',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 5 }, // Team happy
					{ stat: StatID.VISION, value: -5 }, // Delayed
				],
			},
			{
				id: RandomEventID.EVT_INTERNET_CUT_4G,
				text: 'Bắt dùng 4G làm việc',
				textVi: 'Bắt dùng 4G làm việc',
				textEn: 'Force 4G usage',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: -5 }, // Team hates
					{ stat: StatID.VISION, value: 5 }, // Done
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_WIFE_NAG,
		name: 'Wife Nags',
		nameVi: 'Vợ cằn nhằn vì đi làm về muộn',
		nameEn: 'Wife nags about late work',
		description: 'Mâu thuẫn gia đình.',
		descriptionVi: 'Mâu thuẫn gia đình.',
		descriptionEn: 'Family conflict.',
		probability: 0.05,
		minChapter: 7, // Only after married (Ch6/7)
		choices: [
			{
				id: RandomEventID.EVT_WIFE_NAG_ARGUE,
				text: 'Cãi nhau',
				textVi: 'Cãi nhau',
				textEn: 'Argue',
				next: '',
				effects: [{ stat: StatID.HUMANITY, value: -5 }], // Happiness -
			},
			{
				id: RandomEventID.EVT_WIFE_NAG_GIFT,
				text: 'Mua quà xin lỗi',
				textVi: 'Mua quà xin lỗi',
				textEn: 'Buy apology gift',
				next: '',
				effects: [
					{ stat: StatID.MONEY, value: -5000000 },
					{ stat: StatID.HUMANITY, value: 5 }, // Happiness +
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_KID_YOUTUBER,
		name: 'Kid YouTuber',
		nameVi: 'Con muốn học làm YouTuber',
		nameEn: 'Kid wants to be YouTuber',
		description: 'Định hướng tương lai cho con.',
		descriptionVi: 'Định hướng tương lai cho con.',
		descriptionEn: 'Future path for kid.',
		probability: 0.05,
		minChapter: 7, // Only after having kids (Ch7+)
		choices: [
			{
				id: RandomEventID.EVT_KID_YOUTUBER_FORBID,
				text: 'Cấm đoán',
				textVi: 'Cấm đoán',
				textEn: 'Forbid',
				next: '',
				effects: [{ stat: StatID.HUMANITY, value: -5 }], // Relationship -
			},
			{
				id: RandomEventID.EVT_KID_YOUTUBER_SUPPORT,
				text: 'Ủng hộ và đầu tư',
				textVi: 'Ủng hộ và đầu tư',
				textEn: 'Support and invest',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 5 },
					{ stat: StatID.MONEY, value: -20000000 },
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_MENTOR_JOBLESS,
		name: 'Jobless Mentor',
		nameVi: 'Gặp lại Mentor cũ đang thất nghiệp',
		nameEn: 'Meet jobless old Mentor',
		description: 'Người thầy năm xưa gặp khó khăn.',
		descriptionVi: 'Người thầy năm xưa gặp khó khăn.',
		descriptionEn: 'Old mentor in trouble.',
		probability: 0.05,
		minChapter: 7, // Late career, successful enough to help
		choices: [
			{
				id: RandomEventID.EVT_MENTOR_JOBLESS_HIRE,
				text: 'Mời về làm cố vấn',
				textVi: 'Mời về làm cố vấn',
				textEn: 'Hire as advisor',
				next: '',
				effects: [
					{ stat: StatID.HUMANITY, value: 10 },
					{ stat: StatID.MONEY, value: -30000000 }, // High salary
				],
			},
			{
				id: RandomEventID.EVT_MENTOR_JOBLESS_IGNORE,
				text: 'Lơ đi',
				textVi: 'Lơ đi',
				textEn: 'Ignore',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }],
			},
		],
	},
	{
		id: RandomEventID.EVT_BOYCOTT,
		name: 'Boycott',
		nameVi: 'Cộng đồng mạng tẩy chay sản phẩm',
		nameEn: 'Netizens boycott product',
		description: 'Khủng hoảng truyền thông.',
		descriptionVi: 'Khủng hoảng truyền thông.',
		descriptionEn: 'Media crisis.',
		probability: 0.05,
		minChapter: 7, // Need big Company with users
		choices: [
			{
				id: RandomEventID.EVT_BOYCOTT_KOL,
				text: 'Thuê KOL tẩy trắng',
				textVi: 'Thuê KOL tẩy trắng',
				textEn: 'Hire KOL to whitewash',
				next: '',
				effects: [{ stat: StatID.MONEY, value: -50000000 }], // Fast
			},
			{
				id: RandomEventID.EVT_BOYCOTT_DATA,
				text: 'Chứng minh bằng dữ liệu',
				textVi: 'Chứng minh bằng dữ liệu',
				textEn: 'Prove with data',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 5 }, // Sustainable
					{ stat: StatID.STRESS, value: 5 }, // Slow
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_PARTY_INVITE,
		name: 'Party Invite',
		nameVi: 'Được mời vào Đảng',
		nameEn: 'Invited to Party',
		description: 'Cơ hội chính trị.',
		descriptionVi: 'Cơ hội chính trị.',
		descriptionEn: 'Political opportunity.',
		probability: 0.05,
		minChapter: 7,
		choices: [
			{
				id: RandomEventID.EVT_PARTY_INVITE_JOIN,
				text: 'Vào',
				textVi: 'Vào',
				textEn: 'Join',
				next: '',
				effects: [
					{ stat: StatID.VISION, value: 10 }, // Power +
					{ stat: StatID.STEELMIND, value: -5 }, // Freedom -
				],
			},
			{
				id: RandomEventID.EVT_PARTY_INVITE_OUT,
				text: 'Ở ngoài',
				textVi: 'Ở ngoài',
				textEn: 'Stay out',
				next: '',
				effects: [
					{ stat: StatID.STEELMIND, value: 5 }, // Freedom +
					{ stat: StatID.VISION, value: -5 }, // Hard for gov projects
				],
			},
		],
	},
	{
		id: RandomEventID.EVT_STROKE,
		name: 'Mini Stroke',
		nameVi: 'Sức khỏe báo động đỏ (Đột quỵ nhẹ)',
		nameEn: 'Health Red Alert (Mini Stroke)',
		description: 'Cảnh báo sức khỏe nghiêm trọng.',
		descriptionVi: 'Cảnh báo sức khỏe nghiêm trọng.',
		descriptionEn: 'Serious health warning.',
		probability: 0.05,
		minChapter: 8, // Age 45+, late career
		choices: [
			{
				id: RandomEventID.EVT_STROKE_RETIRE,
				text: 'Nghỉ hưu sớm',
				textVi: 'Nghỉ hưu sớm',
				textEn: 'Retire early',
				next: Dialogue_END.END,
				effects: [{ stat: StatID.HEALTH, value: 20 }], // End game: Retired
			},
			{
				id: RandomEventID.EVT_STROKE_REDUCE,
				text: 'Giảm khối lượng việc',
				textVi: 'Giảm khối lượng việc',
				textEn: 'Reduce workload',
				next: '',
				effects: [{ stat: StatID.VISION, value: -10 }], // Balance
			},
		],
	},
	{
		id: RandomEventID.EVT_OLD_HDD,
		name: 'Old HDD',
		nameVi: 'Tìm thấy ổ cứng chứa Bitcoin từ năm 2010',
		nameEn: 'Found old HDD with 2010 Bitcoin',
		description: 'Kho báu bị lãng quên.',
		descriptionVi: 'Kho báu bị lãng quên.',
		descriptionEn: 'Forgotten treasure.',
		probability: 0.01, // Rare
		minChapter: 3,
		maxChapter: 4,
		choices: [
			{
				id: RandomEventID.EVT_OLD_HDD_SELL,
				text: 'Bán hết',
				textVi: 'Bán hết',
				textEn: 'Sell all',
				next: '',
				effects: [{ stat: StatID.MONEY, value: 5000000000 }], // Rich
			},
			{
				id: RandomEventID.EVT_OLD_HDD_HOLD,
				text: 'Hold to die',
				textVi: 'Hold to die',
				textEn: 'Hold to die',
				next: '',
				effects: [{ stat: StatID.STRESS, value: 10 }], // Risk
			},
		],
	},
	{
		id: RandomEventID.EVT_SINGULARITY,
		name: 'Singularity',
		nameVi: 'AI tự nhận thức (Singularity)',
		nameEn: 'AI Sentience (Singularity)',
		description: 'AI bắt đầu có ý thức.',
		descriptionVi: 'AI bắt đầu có ý thức.',
		descriptionEn: 'AI becomes sentient.',
		probability: 0.01,
		minChapter: 8, // AI era, late game // Rare
		choices: [
			{
				id: RandomEventID.EVT_SINGULARITY_OFF,
				text: 'Tắt nguồn nó',
				textVi: 'Tắt nguồn nó',
				textEn: 'Turn it off',
				next: '',
				effects: [{ stat: StatID.STEELMIND, value: 5 }], // Safe
			},
			{
				id: RandomEventID.EVT_SINGULARITY_TALK,
				text: 'Trò chuyện với nó',
				textVi: 'Trò chuyện với nó',
				textEn: 'Talk to it',
				next: '',
				effects: [{ stat: StatID.VISION, value: 20 }], // Secret Ending
			},
		],
	},
];
