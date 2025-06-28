export interface Player {
  id: number;
  name: string;
  era: string;
  formats: string[];
  speciality: string;
  achievement: string;
  featured?: boolean;
  socialMedia?: {
    twitter?: string;
    instagram?: string;
  };
}

export const players: Player[] = [
  // Featured Legends
  {
    id: 1,
    name: "Sachin Tendulkar",
    era: "1990s-2010s",
    formats: ["Test", "ODI"],
    speciality: "Master Blaster - Right-hand batsman",
    achievement: "100 international centuries, highest run scorer in cricket history",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/sachin_rt",
      instagram: "https://instagram.com/sachintendulkar"
    }
  },
  {
    id: 2,
    name: "MS Dhoni",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper batsman & Captain Cool",
    achievement: "Led India to 2007 T20 World Cup, 2011 World Cup victories",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/msdhoni",
      instagram: "https://instagram.com/mahi7781"
    }
  },
  {
    id: 3,
    name: "Virat Kohli",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, aggressive captain",
    achievement: "Modern batting legend with 70+ international centuries",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/imVkohli",
      instagram: "https://instagram.com/virat.kohli"
    }
  },
  {
    id: 4,
    name: "Kapil Dev",
    era: "1970s-1990s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, fast bowler",
    achievement: "Led India to first World Cup victory in 1983",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/therealkapildev",
      instagram: "https://instagram.com/kapildev"
    }
  },
  {
    id: 5,
    name: "Sunil Gavaskar",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Opening batsman, technique master",
    achievement: "First to score 10,000 Test runs, 34 Test centuries",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/gavaskarsunilm",
      instagram: "https://instagram.com/gavaskarsunil"
    }
  },
  {
    id: 6,
    name: "Anil Kumble",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Leg-spin bowler",
    achievement: "619 Test wickets, perfect 10 wickets in an innings",
    featured: true,
    socialMedia: {
      twitter: "https://twitter.com/anilkumble1074",
      instagram: "https://instagram.com/anilkumble1074"
    }
  },

  // 1950s-1960s Era
  {
    id: 7,
    name: "Vinoo Mankad",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "All-rounder, left-arm spinner",
    achievement: "India's first great all-rounder, 2109 Test runs"
  },
  {
    id: 8,
    name: "Polly Umrigar",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Right-hand batsman",
    achievement: "First Indian to score double century in Tests"
  },
  {
    id: 9,
    name: "Vijay Hazare",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Right-hand batsman, captain",
    achievement: "First Indian captain to win a Test series"
  },
  {
    id: 10,
    name: "Subhash Gupte",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Leg-spin bowler",
    achievement: "First Indian spinner to take 100 Test wickets"
  },

  // Additional 1950s-1960s Era Players
  {
    id: 51,
    name: "Vijay Merchant",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Right-hand batsman, opening batsman",
    achievement: "Elegant batsman with highest Test average for India at retirement"
  },
  {
    id: 52,
    name: "Dattu Phadkar",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "All-rounder, fast-medium bowler",
    achievement: "First Indian to score 50+ and take 5+ wickets in same Test"
  },
  {
    id: 53,
    name: "Nari Contractor",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Left-hand batsman, captain",
    achievement: "Stylish opener, career ended by bouncer injury"
  },
  {
    id: 54,
    name: "Madhav Apte",
    era: "1950s-1960s",
    formats: ["Test"],
    speciality: "Right-hand batsman",
    achievement: "Consistent middle-order batsman from Bombay"
  },

  // 1970s-1980s Era
  {
    id: 11,
    name: "Gundappa Viswanath",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, elegant stroke play",
    achievement: "14 Test centuries, stylish middle-order batsman"
  },
  {
    id: 12,
    name: "Bishan Singh Bedi",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Left-arm orthodox spinner",
    achievement: "266 Test wickets, part of famous spin quartet"
  },
  {
    id: 13,
    name: "Erapalli Prasanna",
    era: "1970s-1980s",
    formats: ["Test"],
    speciality: "Off-spin bowler",
    achievement: "189 Test wickets, spin bowling legend"
  },
  {
    id: 14,
    name: "Bhagwath Chandrasekhar",
    era: "1970s-1980s",
    formats: ["Test"],
    speciality: "Leg-spin bowler",
    achievement: "242 Test wickets, unique bowling action"
  },
  {
    id: 15,
    name: "Dilip Vengsarkar",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman",
    achievement: "17 Test centuries, reliable middle-order"
  },

  // Additional 1970s-1980s Era Players
  {
    id: 55,
    name: "Farokh Engineer",
    era: "1970s-1980s",
    formats: ["Test"],
    speciality: "Wicket-keeper batsman",
    achievement: "India's first attacking wicket-keeper batsman"
  },
  {
    id: 56,
    name: "Syed Kirmani",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Wicket-keeper",
    achievement: "198 dismissals in Tests, 1983 World Cup winner"
  },
  {
    id: 57,
    name: "Mohinder Amarnath",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, medium pace",
    achievement: "1983 World Cup Man of Match in final and semi-final"
  },
  {
    id: 58,
    name: "Ravi Shastri",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, left-arm spinner",
    achievement: "Champion of Champions in 1985, solid all-rounder"
  },
  {
    id: 59,
    name: "Sandeep Patil",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman",
    achievement: "Aggressive batsman, 1983 World Cup contributor"
  },
  {
    id: 60,
    name: "Madan Lal",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, medium pace",
    achievement: "1983 World Cup hero, key wickets in final"
  },
  {
    id: 61,
    name: "Roger Binny",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, medium pace",
    achievement: "1983 World Cup highest wicket-taker, 18 wickets"
  },

  // 1990s-2000s Era
  {
    id: 16,
    name: "Rahul Dravid",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, 'The Wall'",
    achievement: "13,288 Test runs, 36 Test centuries",
    socialMedia: {
      twitter: "https://twitter.com/dravidrahul",
      instagram: "https://instagram.com/rahuldravid1"
    }
  },
  {
    id: 17,
    name: "Sourav Ganguly",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Left-hand batsman, captain",
    achievement: "Transformed Indian cricket, aggressive leadership",
    socialMedia: {
      twitter: "https://twitter.com/SGanguly99",
      instagram: "https://instagram.com/souravganguly"
    }
  },
  {
    id: 18,
    name: "VVS Laxman",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, wristy stroke play",
    achievement: "281 vs Australia in 2001, match-winner",
    socialMedia: {
      twitter: "https://twitter.com/VVSLaxman281",
      instagram: "https://instagram.com/vvslaxman281"
    }
  },
  {
    id: 19,
    name: "Javagal Srinath",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Fast bowler",
    achievement: "236 Test wickets, India's pace spearhead"
  },
  {
    id: 20,
    name: "Venkatesh Prasad",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Fast bowler",
    achievement: "96 Test wickets, 1996 World Cup hero"
  },

  // Additional 1990s-2000s Era Players
  {
    id: 62,
    name: "Ajay Jadeja",
    era: "1990s-2000s",
    formats: ["ODI"],
    speciality: "Right-hand batsman, medium pace",
    achievement: "5359 ODI runs, aggressive middle-order batsman"
  },
  {
    id: 63,
    name: "Mohammad Azharuddin",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, captain",
    achievement: "22 Test centuries, elegant wristwork"
  },
  {
    id: 64,
    name: "Navjot Singh Sidhu",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand opening batsman",
    achievement: "Aggressive opener, entertaining personality"
  },
  {
    id: 65,
    name: "Nayan Mongia",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Wicket-keeper batsman",
    achievement: "Reliable keeper, lower-order runs"
  },
  {
    id: 66,
    name: "Ajit Agarkar",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Fast bowler, lower-order batsman",
    achievement: "288 ODI wickets, handy batsman"
  },
  {
    id: 67,
    name: "Ashish Nehra",
    era: "1990s-2000s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "2003 World Cup star, yorker specialist"
  },

  // 2000s-2010s Era
  {
    id: 21,
    name: "Yuvraj Singh",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-hand batsman",
    achievement: "2011 World Cup Player of Tournament, 6 sixes in T20",
    socialMedia: {
      twitter: "https://twitter.com/YUVSTRONG12",
      instagram: "https://instagram.com/yuvisofficial"
    }
  },
  {
    id: 22,
    name: "Harbhajan Singh",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Off-spin bowler",
    achievement: "417 Test wickets, hat-trick vs Australia",
    socialMedia: {
      twitter: "https://twitter.com/harbhajan_singh",
      instagram: "https://instagram.com/harbhajan3"
    }
  },
  {
    id: 23,
    name: "Zaheer Khan",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "311 Test wickets, 2011 World Cup star",
    socialMedia: {
      twitter: "https://twitter.com/ImZaheer",
      instagram: "https://instagram.com/zaheer_khan34"
    }
  },
  {
    id: 24,
    name: "Virender Sehwag",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Opening batsman, aggressive stroke play",
    achievement: "Two triple centuries in Tests, fastest 300",
    socialMedia: {
      twitter: "https://twitter.com/virendersehwag",
      instagram: "https://instagram.com/virendersehwag"
    }
  },
  {
    id: 25,
    name: "Gautam Gambhir",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Match-winner in 2007 T20 & 2011 World Cup finals",
    socialMedia: {
      twitter: "https://twitter.com/GautamGambhir",
      instagram: "https://instagram.com/gautamgambhir"
    }
  },

  // Additional 2000s-2010s Era Players
  {
    id: 68,
    name: "Irfan Pathan",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-arm fast bowler",
    achievement: "Hat-trick vs Pakistan, explosive lower-order batsman"
  },
  {
    id: 69,
    name: "RP Singh",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "2007 T20 World Cup winner, swing bowler"
  },
  {
    id: 70,
    name: "S Sreesanth",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "2007 T20 & 2011 World Cup winner, aggressive fast bowler"
  },
  {
    id: 71,
    name: "Munaf Patel",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "2011 World Cup winner, economical bowler"
  },
  {
    id: 72,
    name: "Pragyan Ojha",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm orthodox spinner",
    achievement: "113 Test wickets, effective home spinner"
  },

  // 2010s-Present Era
  {
    id: 26,
    name: "Rohit Sharma",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "Three double centuries in ODIs, 'Hitman' of cricket",
    socialMedia: {
      twitter: "https://twitter.com/ImRo45",
      instagram: "https://instagram.com/rohitsharma45"
    }
  },
  {
    id: 27,
    name: "Shikhar Dhawan",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Fastest Test century on debut, ICC tournament specialist",
    socialMedia: {
      twitter: "https://twitter.com/SDhawan25",
      instagram: "https://instagram.com/shikhardofficial"
    }
  },
  {
    id: 28,
    name: "Ravichandran Ashwin",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Off-spin bowler, all-rounder",
    achievement: "400+ Test wickets, multiple Player of Series awards",
    socialMedia: {
      twitter: "https://twitter.com/ashwinravi99",
      instagram: "https://instagram.com/rashwin99"
    }
  },
  {
    id: 29,
    name: "Jasprit Bumrah",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler, unique action",
    achievement: "Fastest to 100 ODI wickets, yorker specialist",
    socialMedia: {
      twitter: "https://twitter.com/Jaspritbumrah93",
      instagram: "https://instagram.com/jaspritb1"
    }
  },
  {
    id: 30,
    name: "KL Rahul",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, wicket-keeper",
    achievement: "Versatile batsman across all formats",
    socialMedia: {
      twitter: "https://twitter.com/klrahul11",
      instagram: "https://instagram.com/klrahul"
    }
  },

  // Additional Notable Players
  {
    id: 31,
    name: "Ravindra Jadeja",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-arm spinner",
    achievement: "Triple threat - batting, bowling, fielding excellence",
    socialMedia: {
      twitter: "https://twitter.com/imjadeja",
      instagram: "https://instagram.com/ravindrajadeja"
    }
  },
  {
    id: 32,
    name: "Hardik Pandya",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "All-rounder, fast bowler",
    achievement: "T20 World Cup 2024 winner, explosive lower-order batsman",
    socialMedia: {
      twitter: "https://twitter.com/hardikpandya7",
      instagram: "https://instagram.com/hardikpandya93"
    }
  },
  {
    id: 33,
    name: "Mohammed Shami",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Fast bowler",
    achievement: "200+ Test wickets, reverse swing expert",
    socialMedia: {
      twitter: "https://twitter.com/MdShami11",
      instagram: "https://instagram.com/mdshami.official"
    }
  },
  {
    id: 34,
    name: "Ishant Sharma",
    era: "2000s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "300+ Test wickets, height advantage"
  },
  {
    id: 35,
    name: "Umesh Yadav",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "150+ Test wickets, pace and aggression"
  },

  // Current Generation
  {
    id: 36,
    name: "Rishabh Pant",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper batsman",
    achievement: "Game-changing knocks in Australia and England",
    socialMedia: {
      twitter: "https://twitter.com/RishabhPant17",
      instagram: "https://instagram.com/rishabpant"
    }
  },
  {
    id: 37,
    name: "Cheteshwar Pujara",
    era: "2010s-2020s",
    formats: ["Test"],
    speciality: "Right-hand batsman, Test specialist",
    achievement: "Hero of 2018-19 Australia series, solid technique",
    socialMedia: {
      twitter: "https://twitter.com/cheteshwar1",
      instagram: "https://instagram.com/cheteshwarpujara"
    }
  },
  {
    id: 38,
    name: "Ajinkya Rahane",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, vice-captain",
    achievement: "Overseas specialist, calm under pressure",
    socialMedia: {
      twitter: "https://twitter.com/ajinkyarahane88",
      instagram: "https://instagram.com/ajirahane"
    }
  },
  {
    id: 39,
    name: "Mohammed Siraj",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "Breakthrough performer, consistent line and length",
    socialMedia: {
      twitter: "https://twitter.com/mdsirajofficial",
      instagram: "https://instagram.com/mdsirajofficial"
    }
  },
  {
    id: 40,
    name: "Axar Patel",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-arm spinner",
    achievement: "Home advantage with spin, useful lower-order batsman"
  },

  // T20 Specialists and Recent Additions
  {
    id: 41,
    name: "Suryakumar Yadav",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Right-hand batsman, T20 specialist",
    achievement: "360-degree batsman, T20 world rankings leader",
    socialMedia: {
      twitter: "https://twitter.com/surya_14kumar",
      instagram: "https://instagram.com/suryakumaryadav"
    }
  },
  {
    id: 42,
    name: "Ishan Kishan",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Wicket-keeper batsman",
    achievement: "Explosive opener, IPL success",
    socialMedia: {
      twitter: "https://twitter.com/ishankishan51",
      instagram: "https://instagram.com/ishankishan23"
    }
  },
  {
    id: 43,
    name: "Shreyas Iyer",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "Consistent middle-order performer, leadership qualities",
    socialMedia: {
      twitter: "https://twitter.com/ShreyasIyer15",
      instagram: "https://instagram.com/shreyas41"
    }
  },
  {
    id: 44,
    name: "Deepak Chahar",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Fast bowler, swing specialist",
    achievement: "Best T20I figures 6/7, death bowling expert"
  },
  {
    id: 45,
    name: "Yuzvendra Chahal",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Leg-spin bowler",
    achievement: "Leading wicket-taker in T20Is, wicket-taking ability",
    socialMedia: {
      twitter: "https://twitter.com/yuzi_chahal",
      instagram: "https://instagram.com/yuzi_chahal23"
    }
  },
  {
    id: 46,
    name: "Shubman Gill",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, opener",
    achievement: "Rising star, elegant stroke play, future captain material",
    socialMedia: {
      twitter: "https://twitter.com/ShubmanGill",
      instagram: "https://instagram.com/shubmangill"
    }
  },
  {
    id: 47,
    name: "Prithvi Shaw",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand opening batsman",
    achievement: "Century on Test debut, aggressive opener",
    socialMedia: {
      twitter: "https://twitter.com/PrithviShaw",
      instagram: "https://instagram.com/prithvishaw"
    }
  },
  {
    id: 48,
    name: "Washington Sundar",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, off-spinner",
    achievement: "Utility player across formats, batting depth"
  },
  {
    id: 49,
    name: "Shardul Thakur",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler, handy batsman",
    achievement: "Lord Shardul, match-turning performances"
  },
  {
    id: 50,
    name: "Kuldeep Yadav",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm wrist spinner",
    achievement: "Unique bowling style, wicket-taking ability"
  },

  // Current Era Players (2020s-Present)
  {
    id: 73,
    name: "Yashasvi Jaiswal",
    era: "2010s-2020s",
    formats: ["Test", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Youngest to score double century for India, rising star"
  },
  {
    id: 74,
    name: "Ruturaj Gaikwad",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Right-hand opening batsman",
    achievement: "Consistent IPL performer, elegant strokeplay"
  },
  {
    id: 75,
    name: "Tilak Varma",
    era: "2010s-2020s",
    formats: ["T20"],
    speciality: "Left-hand middle-order batsman",
    achievement: "T20 sensation, versatile batting"
  },
  {
    id: 76,
    name: "Dhruv Jurel",
    era: "2010s-2020s",
    formats: ["Test"],
    speciality: "Wicket-keeper batsman",
    achievement: "Promising keeper-batsman, Test debut hero"
  },
  {
    id: 77,
    name: "Rinku Singh",
    era: "2010s-2020s",
    formats: ["T20"],
    speciality: "Left-hand middle-order batsman",
    achievement: "T20 finisher, inspirational story"
  },
  {
    id: 78,
    name: "Arshdeep Singh",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "T20 World Cup winner 2024, death bowling specialist"
  },
  {
    id: 79,
    name: "Avesh Khan",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "Pace and bounce, emerging fast bowler"
  },
  {
    id: 80,
    name: "Mukesh Kumar",
    era: "2010s-2020s",
    formats: ["ODI"],
    speciality: "Fast bowler",
    achievement: "Swing bowler, domestic cricket success"
  },

  // Women's Cricket Legends
  {
    id: 81,
    name: "Mithali Raj",
    era: "2000s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "Highest run-scorer in women's ODIs, leadership icon"
  },
  {
    id: 82,
    name: "Jhulan Goswami",
    era: "2000s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "Highest wicket-taker in women's ODIs, pace pioneer"
  },
  {
    id: 83,
    name: "Harmanpreet Kaur",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "2017 World Cup final hero, T20 captain"
  },
  {
    id: 84,
    name: "Smriti Mandhana",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Elegant strokeplay, ICC Women's Cricketer of the Year"
  },

  // Test Match Specialists
  {
    id: 85,
    name: "Murali Vijay",
    era: "2000s-2010s",
    formats: ["Test"],
    speciality: "Right-hand opening batsman",
    achievement: "12 Test centuries, overseas specialist opener"
  },
  {
    id: 86,
    name: "Abhinav Mukund",
    era: "2000s-2010s",
    formats: ["Test"],
    speciality: "Left-hand opening batsman",
    achievement: "Solid opener, Chennai Super Kings stalwart"
  },
  {
    id: 87,
    name: "Karun Nair",
    era: "2010s-2020s",
    formats: ["Test"],
    speciality: "Right-hand batsman",
    achievement: "Triple century vs England, only Indian with 300+ in Tests after Sehwag"
  },

  // IPL Era T20 Specialists
  {
    id: 88,
    name: "Dinesh Karthik",
    era: "2000s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper batsman",
    achievement: "Nidahas Trophy final hero, T20 finisher extraordinaire"
  },
  {
    id: 89,
    name: "Manish Pandey",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Right-hand batsman",
    achievement: "First Indian to score T20I century, consistent middle-order"
  },
  {
    id: 90,
    name: "Kedar Jadhav",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Right-hand batsman, part-time spinner",
    achievement: "Useful all-rounder, unorthodox bowling action"
  },

  // Regional Cricket Heroes
  {
    id: 91,
    name: "Robin Uthappa",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, wicket-keeper",
    achievement: "2007 T20 World Cup winner, IPL Orange Cap winner"
  },
  {
    id: 92,
    name: "Parthiv Patel",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper batsman",
    achievement: "Youngest Test debutant keeper for India at 17"
  },
  {
    id: 93,
    name: "Wriddhiman Saha",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper",
    achievement: "Best keeper in Tests, multiple Player of Match awards"
  },
  {
    id: 94,
    name: "Bhuvneshwar Kumar",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-arm fast-medium bowler",
    achievement: "Swing bowling specialist, purple cap winner IPL"
  },
  {
    id: 95,
    name: "Varun Chakravarthy",
    era: "2010s-2020s",
    formats: ["T20"],
    speciality: "Mystery spinner",
    achievement: "Carrom ball specialist, IPL breakthrough performer"
  },

  // Fast Bowling Talents
  {
    id: 96,
    name: "Prasidh Krishna",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "Tall fast bowler, promising pace prospect"
  },
  {
    id: 97,
    name: "T Natarajan",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "Yorker specialist, debut across all formats in same tour"
  },
  {
    id: 98,
    name: "Khaleel Ahmed",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "Left-arm pace option, domestic cricket success"
  },

  // Spin Bowling Talent
  {
    id: 99,
    name: "Ravi Bishnoi",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Leg-spin bowler",
    achievement: "Young leg-spinner, U19 World Cup star"
  },
  {
    id: 100,
    name: "Rahul Chahar",
    era: "2010s-2020s",
    formats: ["T20"],
    speciality: "Leg-spin bowler",
    achievement: "IPL performer, leg-spin option"
  }
];
