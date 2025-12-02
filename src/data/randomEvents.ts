import type { RandomEvent } from './types';

export const randomEvents: RandomEvent[] = [
	{
		id: 'evt_server_crash',
		name: 'Server Crash',
		nameVi: 'Server Crash lúc 2h sáng',
		nameEn: 'Server Crash at 2 AM',
		description: 'Server sập lúc nửa đêm.',
		descriptionVi: 'Server sập lúc nửa đêm.',
		descriptionEn: 'Server crashed at midnight.',
		probability: 0.1,
		choices: [
			{
				id: 'evt_server_crash_ignore',
				text: 'Kệ, sáng mai sửa',
				textVi: 'Kệ, sáng mai sửa',
				textEn: 'Ignore, fix tomorrow',
				next: '',
				effects: [
					{ stat: 'steelMind', value: 1 },
					{ stat: 'vision', value: -2 }, // Uy tín -2 -> Vision? Or maybe money. Let's map to Vision for Reputation.
				],
			},
			{
				id: 'evt_server_crash_fix',
				text: 'Dậy sửa ngay',
				textVi: 'Dậy sửa ngay',
				textEn: 'Wake up and fix',
				next: '',
				effects: [
					{ stat: 'health', value: -1 },
					{ stat: 'vision', value: 2 },
				],
			},
		],
	},
	{
		id: 'evt_headhunter',
		name: 'Headhunter Call',
		nameVi: 'Headhunter gọi điện mời lương x2',
		nameEn: 'Headhunter offers x2 salary',
		description: 'Một lời mời hấp dẫn.',
		descriptionVi: 'Một lời mời hấp dẫn.',
		descriptionEn: 'A tempting offer.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_headhunter_accept',
				text: 'Đi phỏng vấn',
				textVi: 'Đi phỏng vấn',
				textEn: 'Go for interview',
				next: '',
				effects: [
					{ stat: 'money', value: 3 },
					{ stat: 'humanity', value: -1 }, // Loyalty -
				],
			},
			{
				id: 'evt_headhunter_reject',
				text: 'Từ chối',
				textVi: 'Từ chối',
				textEn: 'Reject',
				next: '',
				effects: [
					{ stat: 'humanity', value: 1 }, // Loyalty +
				],
			},
		],
	},
	{
		id: 'evt_staff_quit',
		name: 'Staff Quit',
		nameVi: 'Nhân viên giỏi đòi nghỉ việc',
		nameEn: 'Top talent wants to quit',
		description: 'Nhân viên chủ chốt muốn ra đi.',
		descriptionVi: 'Nhân viên chủ chốt muốn ra đi.',
		descriptionEn: 'Key employee wants to leave.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_staff_quit_raise',
				text: 'Tăng lương giữ lại',
				textVi: 'Tăng lương giữ lại',
				textEn: 'Raise salary to keep',
				next: '',
				effects: [{ stat: 'money', value: -1 }],
			},
			{
				id: 'evt_staff_quit_bye',
				text: 'Chúc may mắn',
				textVi: 'Chúc may mắn',
				textEn: 'Good luck',
				next: '',
				effects: [{ stat: 'vision', value: -1 }], // Team morale?
			},
		],
	},
	{
		id: 'evt_copycat',
		name: 'Copycat',
		nameVi: 'Đối thủ sao chép sản phẩm',
		nameEn: 'Competitor copies product',
		description: 'Sản phẩm của bạn bị nhái.',
		descriptionVi: 'Sản phẩm của bạn bị nhái.',
		descriptionEn: 'Your product is cloned.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_copycat_sue',
				text: 'Kiện',
				textVi: 'Kiện',
				textEn: 'Sue',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'stress', value: 1 },
				],
			},
			{
				id: 'evt_copycat_improve',
				text: 'Cải tiến sản phẩm',
				textVi: 'Cải tiến sản phẩm',
				textEn: 'Improve product',
				next: '',
				effects: [{ stat: 'vision', value: 1 }],
			},
		],
	},
	{
		id: 'evt_dad_sick',
		name: 'Dad Sick',
		nameVi: 'Bố ốm nặng',
		nameEn: 'Dad is very sick',
		description: 'Tin dữ từ gia đình.',
		descriptionVi: 'Tin dữ từ gia đình.',
		descriptionEn: 'Bad news from home.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_dad_sick_care',
				text: 'Về chăm sóc',
				textVi: 'Về chăm sóc',
				textEn: 'Go home to care',
				next: '',
				effects: [
					{ stat: 'humanity', value: 2 },
					{ stat: 'vision', value: -1 }, // Project delayed
				],
			},
			{
				id: 'evt_dad_sick_nurse',
				text: 'Thuê y tá xịn',
				textVi: 'Thuê y tá xịn',
				textEn: 'Hire expensive nurse',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'vision', value: 1 }, // Project on time
				],
			},
		],
	},
	{
		id: 'evt_ex_lover',
		name: 'Ex Lover',
		nameVi: 'Gặp lại người yêu cũ',
		nameEn: 'Meet ex-lover',
		description: 'Tình cờ gặp lại người xưa.',
		descriptionVi: 'Tình cờ gặp lại người xưa.',
		descriptionEn: 'Accidentally meet ex.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_ex_lover_coffee',
				text: 'Cà phê xã giao',
				textVi: 'Cà phê xã giao',
				textEn: 'Social coffee',
				next: '',
				effects: [{ stat: 'stress', value: 1 }], // Emotional stir
			},
			{
				id: 'evt_ex_lover_ignore',
				text: 'Lơ đi',
				textVi: 'Lơ đi',
				textEn: 'Ignore',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
		],
	},
	{
		id: 'evt_bitcoin',
		name: 'Bitcoin Investment',
		nameVi: 'Đầu tư Bitcoin',
		nameEn: 'Invest in Bitcoin',
		description: 'Cơ hội đổi đời?',
		descriptionVi: 'Cơ hội đổi đời?',
		descriptionEn: 'Life changing opportunity?',
		probability: 0.05,
		choices: [
			{
				id: 'evt_bitcoin_all_in',
				text: 'All-in',
				textVi: 'All-in',
				textEn: 'All-in',
				next: '',
				effects: [{ stat: 'stress', value: 2 }], // High risk
			},
			{
				id: 'evt_bitcoin_skip',
				text: 'Bỏ qua',
				textVi: 'Bỏ qua',
				textEn: 'Skip',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }], // Safe
			},
		],
	},
	{
		id: 'evt_data_scandal',
		name: 'Data Scandal',
		nameVi: 'Scandal dữ liệu người dùng',
		nameEn: 'User Data Scandal',
		description: 'Dữ liệu bị rò rỉ.',
		descriptionVi: 'Dữ liệu bị rò rỉ.',
		descriptionEn: 'Data leaked.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_data_scandal_hide',
				text: 'Che giấu',
				textVi: 'Che giấu',
				textEn: 'Hide it',
				next: '',
				effects: [{ stat: 'stress', value: 2 }], // Risk of jail
			},
			{
				id: 'evt_data_scandal_apologize',
				text: 'Công khai xin lỗi',
				textVi: 'Công khai xin lỗi',
				textEn: 'Public apology',
				next: '',
				effects: [
					{ stat: 'vision', value: -1 }, // Temp rep loss
					{ stat: 'humanity', value: 1 }, // Long term gain
				],
			},
		],
	},
	{
		id: 'evt_ddos',
		name: 'DDoS Attack',
		nameVi: 'Server bị DDoS',
		nameEn: 'Server DDoS Attack',
		description: 'Hệ thống bị tấn công.',
		descriptionVi: 'Hệ thống bị tấn công.',
		descriptionEn: 'System under attack.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_ddos_service',
				text: 'Mua dịch vụ chống DDoS',
				textVi: 'Mua dịch vụ chống DDoS',
				textEn: 'Buy anti-DDoS service',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'steelMind', value: 1 }, // Safe
				],
			},
			{
				id: 'evt_ddos_script',
				text: 'Tự viết script chặn IP',
				textVi: 'Tự viết script chặn IP',
				textEn: 'Write IP block script',
				next: '',
				effects: [
					{ stat: 'vision', value: 2 }, // Skill +
					{ stat: 'stress', value: 1 }, // Risk
				],
			},
		],
	},
	{
		id: 'evt_confession',
		name: 'Confession',
		nameVi: 'Nhân viên nữ tỏ tình',
		nameEn: 'Female staff confesses',
		description: 'Rắc rối tình cảm nơi công sở.',
		descriptionVi: 'Rắc rối tình cảm nơi công sở.',
		descriptionEn: 'Office romance trouble.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_confession_accept',
				text: 'Đồng ý',
				textVi: 'Đồng ý',
				textEn: 'Accept',
				next: '',
				effects: [{ stat: 'stress', value: 1 }], // Drama risk
			},
			{
				id: 'evt_confession_reject',
				text: 'Từ chối khéo',
				textVi: 'Từ chối khéo',
				textEn: 'Polite rejection',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
		],
	},
	{
		id: 'evt_stock_crash',
		name: 'Stock Crash',
		nameVi: 'Cổ phiếu công ty tụt dốc',
		nameEn: 'Company stock crashes',
		description: 'Thị trường biến động mạnh.',
		descriptionVi: 'Thị trường biến động mạnh.',
		descriptionEn: 'Market volatility.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_stock_crash_buy',
				text: 'Mua vào (Buy the dip)',
				textVi: 'Mua vào (Buy the dip)',
				textEn: 'Buy the dip',
				next: '',
				effects: [{ stat: 'stress', value: 2 }], // High risk
			},
			{
				id: 'evt_stock_crash_sell',
				text: 'Bán cắt lỗ',
				textVi: 'Bán cắt lỗ',
				textEn: 'Cut loss',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'steelMind', value: 1 }, // Safe
				],
			},
		],
	},
	{
		id: 'evt_tedx',
		name: 'TEDx Invite',
		nameVi: 'Được mời làm diễn giả TEDx',
		nameEn: 'Invited to TEDx',
		description: 'Cơ hội chia sẻ kiến thức.',
		descriptionVi: 'Cơ hội chia sẻ kiến thức.',
		descriptionEn: 'Opportunity to share knowledge.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_tedx_join',
				text: 'Tham gia',
				textVi: 'Tham gia',
				textEn: 'Join',
				next: '',
				effects: [
					{ stat: 'vision', value: 3 }, // Reputation
					{ stat: 'stress', value: 1 }, // Time
				],
			},
			{
				id: 'evt_tedx_reject',
				text: 'Từ chối vì bận code',
				textVi: 'Từ chối vì bận code',
				textEn: 'Reject (busy coding)',
				next: '',
				effects: [
					{ stat: 'steelMind', value: 1 },
					{ stat: 'vision', value: -1 }, // Missed PR
				],
			},
		],
	},
	{
		id: 'evt_zero_day',
		name: 'Zero-day Exploit',
		nameVi: 'Phát hiện lỗ hổng Zero-day',
		nameEn: 'Zero-day Exploit Found',
		description: 'Lỗ hổng trong thư viện Open Source.',
		descriptionVi: 'Lỗ hổng trong thư viện Open Source.',
		descriptionEn: 'Vulnerability in Open Source library.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_zero_day_report',
				text: 'Báo cáo cho tác giả',
				textVi: 'Báo cáo cho tác giả',
				textEn: 'Report to author',
				next: '',
				effects: [{ stat: 'vision', value: 1 }], // Community rep
			},
			{
				id: 'evt_zero_day_exploit',
				text: 'Giữ kín để exploit (Black Hat)',
				textVi: 'Giữ kín để exploit (Black Hat)',
				textEn: 'Keep to exploit (Black Hat)',
				next: '',
				effects: [
					{ stat: 'money', value: 3 },
					{ stat: 'humanity', value: -3 }, // Unethical
				],
			},
		],
	},
	{
		id: 'evt_team_building',
		name: 'Team Building',
		nameVi: 'Team Building đi biển',
		nameEn: 'Beach Team Building',
		description: 'Hoạt động gắn kết team.',
		descriptionVi: 'Hoạt động gắn kết team.',
		descriptionEn: 'Team bonding activity.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_team_building_go',
				text: 'Đi và quẩy hết mình',
				textVi: 'Đi và quẩy hết mình',
				textEn: 'Go and party',
				next: '',
				effects: [
					{ stat: 'humanity', value: 2 }, // Bonding
					{ stat: 'health', value: -1 },
				],
			},
			{
				id: 'evt_team_building_stay',
				text: 'Ở nhà làm việc',
				textVi: 'Ở nhà làm việc',
				textEn: 'Stay home and work',
				next: '',
				effects: [
					{ stat: 'vision', value: 1 }, // Productivity
					{ stat: 'humanity', value: -1 }, // Morale -
				],
			},
		],
	},
	{
		id: 'evt_bad_debt',
		name: 'Bad Debt',
		nameVi: 'Khách hàng quỵt tiền',
		nameEn: 'Client refuses to pay',
		description: 'Rủi ro kinh doanh.',
		descriptionVi: 'Rủi ro kinh doanh.',
		descriptionEn: 'Business risk.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_bad_debt_thug',
				text: 'Thuê đòi nợ thuê',
				textVi: 'Thuê đòi nợ thuê',
				textEn: 'Hire thugs',
				next: '',
				effects: [
					{ stat: 'humanity', value: -1 },
					{ stat: 'money', value: 1 }, // Fast money
				],
			},
			{
				id: 'evt_bad_debt_sue',
				text: 'Kiện ra tòa',
				textVi: 'Kiện ra tòa',
				textEn: 'Sue in court',
				next: '',
				effects: [{ stat: 'stress', value: 1 }], // Time consuming
			},
		],
	},
	{
		id: 'evt_cat_server',
		name: 'Cat vs Server',
		nameVi: 'Mèo của văn phòng đái vào server',
		nameEn: 'Office cat pees on server',
		description: 'Tai nạn hy hữu.',
		descriptionVi: 'Tai nạn hy hữu.',
		descriptionEn: 'Rare accident.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_cat_server_fire',
				text: 'Đuổi việc con mèo',
				textVi: 'Đuổi việc con mèo',
				textEn: 'Fire the cat',
				next: '',
				effects: [{ stat: 'humanity', value: -1 }], // Team hates it
			},
			{
				id: 'evt_cat_server_buy',
				text: 'Mua server mới',
				textVi: 'Mua server mới',
				textEn: 'Buy new server',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'humanity', value: 1 }, // Keep mascot
				],
			},
		],
	},
	{
		id: 'evt_land_fever',
		name: 'Land Fever',
		nameVi: 'Sốt đất ở quê',
		nameEn: 'Land Fever in hometown',
		description: 'Cơn sốt đất lan rộng.',
		descriptionVi: 'Cơn sốt đất lan rộng.',
		descriptionEn: 'Land fever spreading.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_land_fever_trade',
				text: 'Về quê buôn đất',
				textVi: 'Về quê buôn đất',
				textEn: 'Trade land',
				next: '',
				effects: [
					{ stat: 'money', value: 3 },
					{ stat: 'vision', value: -1 }, // Skill drops
				],
			},
			{
				id: 'evt_land_fever_ignore',
				text: 'Kệ, tập trung làm Tech',
				textVi: 'Kệ, tập trung làm Tech',
				textEn: 'Ignore, focus on Tech',
				next: '',
				effects: [{ stat: 'vision', value: 1 }],
			},
		],
	},
	{
		id: 'evt_friend_loan',
		name: 'Friend Loan',
		nameVi: 'Bạn cũ vay tiền',
		nameEn: 'Old friend asks for loan',
		description: 'Vấn đề tiền bạc và tình bạn.',
		descriptionVi: 'Vấn đề tiền bạc và tình bạn.',
		descriptionEn: 'Money and friendship.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_friend_loan_give',
				text: 'Cho vay',
				textVi: 'Cho vay',
				textEn: 'Lend',
				next: '',
				effects: [
					{ stat: 'humanity', value: 1 },
					{ stat: 'money', value: -1 }, // Risk losing
				],
			},
			{
				id: 'evt_friend_loan_reject',
				text: 'Say No',
				textVi: 'Say No',
				textEn: 'Say No',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }], // Lose friend
			},
		],
	},
	{
		id: 'evt_back_pain',
		name: 'Back Pain',
		nameVi: 'Bị đau lưng thoát vị đĩa đệm',
		nameEn: 'Herniated Disc Back Pain',
		description: 'Bệnh nghề nghiệp.',
		descriptionVi: 'Bệnh nghề nghiệp.',
		descriptionEn: 'Occupational disease.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_back_pain_gym',
				text: 'Đi tập Gym/Yoga',
				textVi: 'Đi tập Gym/Yoga',
				textEn: 'Go to Gym/Yoga',
				next: '',
				effects: [
					{ stat: 'health', value: 1 },
					{ stat: 'stress', value: 1 }, // Time consuming
				],
			},
			{
				id: 'evt_back_pain_pill',
				text: 'Uống thuốc giảm đau làm tiếp',
				textVi: 'Uống thuốc giảm đau làm tiếp',
				textEn: 'Take painkillers and work',
				next: '',
				effects: [
					{ stat: 'health', value: -3 },
					{ stat: 'vision', value: 1 }, // Done early
				],
			},
		],
	},
	{
		id: 'evt_shark_buy',
		name: 'Shark Buyout',
		nameVi: 'Cá mập muốn mua lại công ty',
		nameEn: 'Shark wants to buyout',
		description: 'Lời đề nghị mua lại.',
		descriptionVi: 'Lời đề nghị mua lại.',
		descriptionEn: 'Buyout offer.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_shark_buy_sell',
				text: 'Bán luôn',
				textVi: 'Bán luôn',
				textEn: 'Sell now',
				next: '',
				effects: [{ stat: 'money', value: 10 }], // End game early?
			},
			{
				id: 'evt_shark_buy_next',
				text: 'Next',
				textVi: 'Next',
				textEn: 'Next',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }], // Hard path
			},
		],
	},
	{
		id: 'evt_leak_code',
		name: 'Code Leak',
		nameVi: 'Nhân viên làm lộ source code',
		nameEn: 'Staff leaks source code',
		description: 'Sự cố bảo mật nội bộ.',
		descriptionVi: 'Sự cố bảo mật nội bộ.',
		descriptionEn: 'Internal security incident.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_leak_code_fire',
				text: 'Đuổi việc và kiện',
				textVi: 'Đuổi việc và kiện',
				textEn: 'Fire and sue',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
			{
				id: 'evt_leak_code_forgive',
				text: 'Tha thứ và đào tạo lại',
				textVi: 'Tha thứ và đào tạo lại',
				textEn: 'Forgive and retrain',
				next: '',
				effects: [
					{ stat: 'humanity', value: 2 },
					{ stat: 'stress', value: 1 }, // Risk
				],
			},
		],
	},
	{
		id: 'evt_internet_cut',
		name: 'Internet Cut',
		nameVi: 'Internet bị cá mập cắn cáp',
		nameEn: 'Shark bites internet cable',
		description: 'Mất mạng toàn công ty.',
		descriptionVi: 'Mất mạng toàn công ty.',
		descriptionEn: 'No internet.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_internet_cut_break',
				text: 'Cho nhân viên nghỉ',
				textVi: 'Cho nhân viên nghỉ',
				textEn: 'Let staff rest',
				next: '',
				effects: [
					{ stat: 'humanity', value: 1 }, // Team happy
					{ stat: 'vision', value: -1 }, // Delayed
				],
			},
			{
				id: 'evt_internet_cut_4g',
				text: 'Bắt dùng 4G làm việc',
				textVi: 'Bắt dùng 4G làm việc',
				textEn: 'Force 4G usage',
				next: '',
				effects: [
					{ stat: 'humanity', value: -1 }, // Team hates
					{ stat: 'vision', value: 1 }, // Done
				],
			},
		],
	},
	{
		id: 'evt_wife_nag',
		name: 'Wife Nags',
		nameVi: 'Vợ cằn nhằn vì đi làm về muộn',
		nameEn: 'Wife nags about late work',
		description: 'Mâu thuẫn gia đình.',
		descriptionVi: 'Mâu thuẫn gia đình.',
		descriptionEn: 'Family conflict.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_wife_nag_argue',
				text: 'Cãi nhau',
				textVi: 'Cãi nhau',
				textEn: 'Argue',
				next: '',
				effects: [{ stat: 'humanity', value: -1 }], // Happiness -
			},
			{
				id: 'evt_wife_nag_gift',
				text: 'Mua quà xin lỗi',
				textVi: 'Mua quà xin lỗi',
				textEn: 'Buy apology gift',
				next: '',
				effects: [
					{ stat: 'money', value: -1 },
					{ stat: 'humanity', value: 1 }, // Happiness +
				],
			},
		],
	},
	{
		id: 'evt_kid_youtuber',
		name: 'Kid YouTuber',
		nameVi: 'Con muốn học làm YouTuber',
		nameEn: 'Kid wants to be YouTuber',
		description: 'Định hướng tương lai cho con.',
		descriptionVi: 'Định hướng tương lai cho con.',
		descriptionEn: 'Future path for kid.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_kid_youtuber_forbid',
				text: 'Cấm đoán',
				textVi: 'Cấm đoán',
				textEn: 'Forbid',
				next: '',
				effects: [{ stat: 'humanity', value: -1 }], // Relationship -
			},
			{
				id: 'evt_kid_youtuber_support',
				text: 'Ủng hộ và đầu tư',
				textVi: 'Ủng hộ và đầu tư',
				textEn: 'Support and invest',
				next: '',
				effects: [
					{ stat: 'vision', value: 1 },
					{ stat: 'money', value: -1 },
				],
			},
		],
	},
	{
		id: 'evt_mentor_jobless',
		name: 'Jobless Mentor',
		nameVi: 'Gặp lại Mentor cũ đang thất nghiệp',
		nameEn: 'Meet jobless old Mentor',
		description: 'Người thầy năm xưa gặp khó khăn.',
		descriptionVi: 'Người thầy năm xưa gặp khó khăn.',
		descriptionEn: 'Old mentor in trouble.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_mentor_jobless_hire',
				text: 'Mời về làm cố vấn',
				textVi: 'Mời về làm cố vấn',
				textEn: 'Hire as advisor',
				next: '',
				effects: [
					{ stat: 'humanity', value: 2 },
					{ stat: 'money', value: -1 }, // High salary
				],
			},
			{
				id: 'evt_mentor_jobless_ignore',
				text: 'Lơ đi',
				textVi: 'Lơ đi',
				textEn: 'Ignore',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }],
			},
		],
	},
	{
		id: 'evt_boycott',
		name: 'Boycott',
		nameVi: 'Cộng đồng mạng tẩy chay sản phẩm',
		nameEn: 'Netizens boycott product',
		description: 'Khủng hoảng truyền thông.',
		descriptionVi: 'Khủng hoảng truyền thông.',
		descriptionEn: 'Media crisis.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_boycott_kol',
				text: 'Thuê KOL tẩy trắng',
				textVi: 'Thuê KOL tẩy trắng',
				textEn: 'Hire KOL to whitewash',
				next: '',
				effects: [{ stat: 'money', value: -1 }], // Fast
			},
			{
				id: 'evt_boycott_data',
				text: 'Chứng minh bằng dữ liệu',
				textVi: 'Chứng minh bằng dữ liệu',
				textEn: 'Prove with data',
				next: '',
				effects: [
					{ stat: 'vision', value: 1 }, // Sustainable
					{ stat: 'stress', value: 1 }, // Slow
				],
			},
		],
	},
	{
		id: 'evt_party_invite',
		name: 'Party Invite',
		nameVi: 'Được mời vào Đảng',
		nameEn: 'Invited to Party',
		description: 'Cơ hội chính trị.',
		descriptionVi: 'Cơ hội chính trị.',
		descriptionEn: 'Political opportunity.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_party_invite_join',
				text: 'Vào',
				textVi: 'Vào',
				textEn: 'Join',
				next: '',
				effects: [
					{ stat: 'vision', value: 1 }, // Power +
					{ stat: 'steelMind', value: -1 }, // Freedom -
				],
			},
			{
				id: 'evt_party_invite_out',
				text: 'Ở ngoài',
				textVi: 'Ở ngoài',
				textEn: 'Stay out',
				next: '',
				effects: [
					{ stat: 'steelMind', value: 1 }, // Freedom +
					{ stat: 'vision', value: -1 }, // Hard for gov projects
				],
			},
		],
	},
	{
		id: 'evt_stroke',
		name: 'Mini Stroke',
		nameVi: 'Sức khỏe báo động đỏ (Đột quỵ nhẹ)',
		nameEn: 'Health Red Alert (Mini Stroke)',
		description: 'Cảnh báo sức khỏe nghiêm trọng.',
		descriptionVi: 'Cảnh báo sức khỏe nghiêm trọng.',
		descriptionEn: 'Serious health warning.',
		probability: 0.05,
		choices: [
			{
				id: 'evt_stroke_retire',
				text: 'Nghỉ hưu sớm',
				textVi: 'Nghỉ hưu sớm',
				textEn: 'Retire early',
				next: '',
				effects: [{ stat: 'health', value: 1 }], // End game: Retired
			},
			{
				id: 'evt_stroke_reduce',
				text: 'Giảm khối lượng việc',
				textVi: 'Giảm khối lượng việc',
				textEn: 'Reduce workload',
				next: '',
				effects: [{ stat: 'vision', value: -1 }], // Balance
			},
		],
	},
	{
		id: 'evt_old_hdd',
		name: 'Old HDD',
		nameVi: 'Tìm thấy ổ cứng chứa Bitcoin từ năm 2010',
		nameEn: 'Found old HDD with 2010 Bitcoin',
		description: 'Kho báu bị lãng quên.',
		descriptionVi: 'Kho báu bị lãng quên.',
		descriptionEn: 'Forgotten treasure.',
		probability: 0.01, // Rare
		choices: [
			{
				id: 'evt_old_hdd_sell',
				text: 'Bán hết',
				textVi: 'Bán hết',
				textEn: 'Sell all',
				next: '',
				effects: [{ stat: 'money', value: 10 }], // Rich
			},
			{
				id: 'evt_old_hdd_hold',
				text: 'Hold to die',
				textVi: 'Hold to die',
				textEn: 'Hold to die',
				next: '',
				effects: [{ stat: 'stress', value: 2 }], // Risk
			},
		],
	},
	{
		id: 'evt_singularity',
		name: 'Singularity',
		nameVi: 'AI tự nhận thức (Singularity)',
		nameEn: 'AI Sentience (Singularity)',
		description: 'AI bắt đầu có ý thức.',
		descriptionVi: 'AI bắt đầu có ý thức.',
		descriptionEn: 'AI becomes sentient.',
		probability: 0.01, // Rare
		choices: [
			{
				id: 'evt_singularity_off',
				text: 'Tắt nguồn nó',
				textVi: 'Tắt nguồn nó',
				textEn: 'Turn it off',
				next: '',
				effects: [{ stat: 'steelMind', value: 1 }], // Safe
			},
			{
				id: 'evt_singularity_talk',
				text: 'Trò chuyện với nó',
				textVi: 'Trò chuyện với nó',
				textEn: 'Talk to it',
				next: '',
				effects: [{ stat: 'vision', value: 5 }], // Secret Ending
			},
		],
	},
];
