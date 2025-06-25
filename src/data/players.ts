
export interface Player {
  id: number;
  name: string;
  era: string;
  formats: string[];
  speciality: string;
  achievement: string;
  featured?: boolean;
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
    featured: true
  },
  {
    id: 2,
    name: "MS Dhoni",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Wicket-keeper batsman & Captain Cool",
    achievement: "Led India to 2007 T20 World Cup, 2011 World Cup victories",
    featured: true
  },
  {
    id: 3,
    name: "Virat Kohli",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, aggressive captain",
    achievement: "Modern batting legend with 70+ international centuries",
    featured: true
  },
  {
    id: 4,
    name: "Kapil Dev",
    era: "1970s-1990s",
    formats: ["Test", "ODI"],
    speciality: "All-rounder, fast bowler",
    achievement: "Led India to first World Cup victory in 1983",
    featured: true
  },
  {
    id: 5,
    name: "Sunil Gavaskar",
    era: "1970s-1980s",
    formats: ["Test", "ODI"],
    speciality: "Opening batsman, technique master",
    achievement: "First to score 10,000 Test runs, 34 Test centuries",
    featured: true
  },
  {
    id: 6,
    name: "Anil Kumble",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Leg-spin bowler",
    achievement: "619 Test wickets, perfect 10 wickets in an innings",
    featured: true
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

  // 1990s-2000s Era
  {
    id: 16,
    name: "Rahul Dravid",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, 'The Wall'",
    achievement: "13,288 Test runs, 36 Test centuries"
  },
  {
    id: 17,
    name: "Sourav Ganguly",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Left-hand batsman, captain",
    achievement: "Transformed Indian cricket, aggressive leadership"
  },
  {
    id: 18,
    name: "VVS Laxman",
    era: "1990s-2000s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, wristy stroke play",
    achievement: "281 vs Australia in 2001, match-winner"
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

  // 2000s-2010s Era
  {
    id: 21,
    name: "Yuvraj Singh",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-hand batsman",
    achievement: "2011 World Cup Player of Tournament, 6 sixes in T20"
  },
  {
    id: 22,
    name: "Harbhajan Singh",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Off-spin bowler",
    achievement: "417 Test wickets, hat-trick vs Australia"
  },
  {
    id: 23,
    name: "Zaheer Khan",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-arm fast bowler",
    achievement: "311 Test wickets, 2011 World Cup star"
  },
  {
    id: 24,
    name: "Virender Sehwag",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Opening batsman, aggressive stroke play",
    achievement: "Two triple centuries in Tests, fastest 300"
  },
  {
    id: 25,
    name: "Gautam Gambhir",
    era: "2000s-2010s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Match-winner in 2007 T20 & 2011 World Cup finals"
  },

  // 2010s-Present Era
  {
    id: 26,
    name: "Rohit Sharma",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "Three double centuries in ODIs, 'Hitman' of cricket"
  },
  {
    id: 27,
    name: "Shikhar Dhawan",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Left-hand opening batsman",
    achievement: "Fastest Test century on debut, ICC tournament specialist"
  },
  {
    id: 28,
    name: "Ravichandran Ashwin",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Off-spin bowler, all-rounder",
    achievement: "400+ Test wickets, multiple Player of Series awards"
  },
  {
    id: 29,
    name: "Jasprit Bumrah",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler, unique action",
    achievement: "Fastest to 100 ODI wickets, yorker specialist"
  },
  {
    id: 30,
    name: "KL Rahul",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, wicket-keeper",
    achievement: "Versatile batsman across all formats"
  },

  // Additional Notable Players
  {
    id: 31,
    name: "Ravindra Jadeja",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "All-rounder, left-arm spinner",
    achievement: "Triple threat - batting, bowling, fielding excellence"
  },
  {
    id: 32,
    name: "Hardik Pandya",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "All-rounder, fast bowler",
    achievement: "T20 World Cup 2024 winner, explosive lower-order batsman"
  },
  {
    id: 33,
    name: "Mohammed Shami",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Fast bowler",
    achievement: "200+ Test wickets, reverse swing expert"
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
    achievement: "Game-changing knocks in Australia and England"
  },
  {
    id: 37,
    name: "Cheteshwar Pujara",
    era: "2010s-2020s",
    formats: ["Test"],
    speciality: "Right-hand batsman, Test specialist",
    achievement: "Hero of 2018-19 Australia series, solid technique"
  },
  {
    id: 38,
    name: "Ajinkya Rahane",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand batsman, vice-captain",
    achievement: "Overseas specialist, calm under pressure"
  },
  {
    id: 39,
    name: "Mohammed Siraj",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Fast bowler",
    achievement: "Breakthrough performer, consistent line and length"
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
    achievement: "360-degree batsman, T20 world rankings leader"
  },
  {
    id: 42,
    name: "Ishan Kishan",
    era: "2010s-2020s",
    formats: ["ODI", "T20"],
    speciality: "Wicket-keeper batsman",
    achievement: "Explosive opener, IPL success"
  },
  {
    id: 43,
    name: "Shreyas Iyer",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, captain",
    achievement: "Consistent middle-order performer, leadership qualities"
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
    achievement: "Leading wicket-taker in T20Is, wicket-taking ability"
  },

  // Emerging Talents
  {
    id: 46,
    name: "Shubman Gill",
    era: "2010s-2020s",
    formats: ["Test", "ODI", "T20"],
    speciality: "Right-hand batsman, opener",
    achievement: "Rising star, elegant stroke play, future captain material"
  },
  {
    id: 47,
    name: "Prithvi Shaw",
    era: "2010s-2020s",
    formats: ["Test", "ODI"],
    speciality: "Right-hand opening batsman",
    achievement: "Century on Test debut, aggressive opener"
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
  }
];
