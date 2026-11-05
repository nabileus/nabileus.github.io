// All site content lives here — edit this file to update the website.

export const profile = {
  name: 'Md Hasibul Islam',
  nickname: 'Nabil',
  role: 'Civil Engineering (Structural) Undergraduate, BUET',
  tagline:
    'I study FRP-reinforced and lightweight concrete, and use machine learning to make structural engineering faster and more accurate.',
  status: 'Seeking a PhD position in Structural Engineering · Fall 2027',
  location: 'Dhaka, Bangladesh',
  email: 'hasibulislam737@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hasibul-islam-buet',
  github: 'https://github.com/nabileus',
};

export const about = [
  "I'm a final-year Civil Engineering undergraduate at Bangladesh University of Engineering and Technology (BUET), majoring in structural engineering with a minor in geotechnical engineering.",
  'My research is about FRP-reinforced and lightweight concrete. I also build software: Python and MATLAB tools for structural analysis, and machine-learning models for problems in civil engineering.',
];

export const interests = [
  'FRP composites',
  'Sustainable & lightweight concrete',
  'Bond and anchorage',
  'Finite element modeling',
  'Machine learning for structures',
];

export const thesis = {
  title: 'Bond-slip behavior of GFRP bars in recycled-pumice lightweight concrete',
  supervisor: 'Prof. A. F. M. Saiful Amin',
  summary:
    "The concrete uses pumice, a waste product of Bangladesh's denim-washing industry, as fine aggregate and recycled demolition concrete as coarse aggregate. ACI CODE-440.11-22 leaves lightweight concrete out of its GFRP design scope, and no one has yet characterized bond-slip behavior in this material system.",
  methods: [
    'ASTM D7913 pull-out tests with LVDT slip measurement',
    '10–50 MPa concrete mixes, 8–20 mm bar diameters',
    'Abaqus finite element models to validate the experiments',
  ],
};

export const competition = {
  title: 'ACI FRP Composites Competition 2026',
  where: 'ACI Spring Convention · Rosemont, Chicago · March 2026',
  role: 'Computational Analysis Lead',
  summary:
    'Our eight-member BUET team designed, built and tested a 1 m concrete beam reinforced with GFRP bars, made with pumice-based lightweight concrete. Each team had to predict its beam\'s ultimate load and failure mode in advance and achieve the lowest cost-to-load ratio.',
  points: [
    "Wrote a Python program that generated the beam's stress trajectories. We used it to place the FRP bars to resist both moment and shear at minimum cost.",
    'Worked in the lab on concrete mix design and beam forming.',
  ],
  results: [
    '4th Place Award (tied on points for 3rd) among 43 teams from 11 countries',
    '1st in load-prediction accuracy: predicted vs. measured ultimate load within 0.47%',
    'Highest ultimate load of any ranked team',
  ],
  link: 'https://www.concrete.org/Portals/0/files/pdf/FRPCompetition_26.pdf',
};

export const publications = [
  {
    title:
      'Revolutionizing Concrete Mix Design with Neural Networks: A Machine Learning Approach',
    authors: 'M. H. Islam, M. R. H. Sarkar, M. M. Rahman, S. Islam, M. F. Alam',
    venue: '8th ICERIE 2025, SUST · Poster presentation',
    date: 'Apr 2025',
    note: 'First author',
    summary:
      'Feedforward neural network trained in MATLAB on 500,000 synthetic ACI and BS mix designs (R² = 0.97). It gives continuous mix proportions and a sensitivity analysis without chart lookups.',
  },
  {
    title:
      "Automated Liquid Limit Determination Using Video and Acoustic Analysis of Casagrande's Test",
    authors: 'M. H. Maruf, M. A. Rahman, M. H. Islam, S. Islam, M. F. Alam',
    venue: 'ICCEI 2025, RUET',
    date: 'Dec 2025',
    note: 'Presented',
    summary:
      'Automates the Casagrande test with a smartphone. Blows are counted from audio peaks and groove closure is measured frame by frame (CIE Lab segmentation, K-means). Liquid limits for three clays came within 1–11% of the manual method.',
  },
  {
    title:
      'Image Processing-Based Automated Detection and Counting of Coliform Colonies on Petri Dishes for Water Quality Analysis',
    authors: 'M. H. Maruf, M. H. Islam, H. Mahmud, S. K. Sunny',
    venue: 'ICCEI 2025, RUET',
    date: 'Dec 2025',
    note: '',
    summary:
      'U-Net segmentation model trained on 58,000 synthetic Petri-dish images rendered in Blender. It counts coliform colonies from ordinary smartphone photos within 1–10% of manual counts.',
  },
];

export const experience = [
  {
    title: 'Director (Research & Development)',
    org: 'ACI BUET Student Chapter',
    period: 'Jul 2026 – Present',
    points: [
      "Executive panel member of the American Concrete Institute's BUET student chapter",
      "Led the development of the chapter's website",
      'Organizes chapter events and industry site visits',
    ],
  },
  {
    title: 'Computational Analysis Lead',
    org: 'ACI FRP Composites Competition · BUET',
    period: 'Oct 2025 – Mar 2026',
    points: [
      'Built the stress-trajectory tool used to place the FRP reinforcement',
      'Concrete mix design and beam forming in the lab',
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. in Civil Engineering',
    school: 'Bangladesh University of Engineering and Technology (BUET)',
    period: '2022 – 2027 (expected)',
    details: [
      'Major: Structural Engineering · Minor: Geotechnical Engineering',
    ],
  },
  {
    degree: 'Higher Secondary Certificate, Science',
    school: 'Notre Dame College, Dhaka',
    period: '2019 – 2021',
    details: [],
  },
];

export const skills = [
  {
    group: 'Engineering',
    items: ['Structural Engineering', 'Reinforced Concrete', 'Fiber Reinforced Polymer (FRP)', 'Concrete Mix Design', 'Finite Element Analysis'],
  },
  {
    group: 'Software & Code',
    items: ['Python', 'MATLAB', 'Abaqus', 'C++', 'Android (Kotlin, Jetpack Compose)', 'Web Development'],
  },
  {
    group: 'Machine Learning',
    items: ['Neural Networks', 'Computer Vision', 'Image Segmentation (U-Net)', 'Synthetic Data (Blender)'],
  },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hasibul-islam-buet', icon: 'mdi:linkedin' },
  { label: 'GitHub', href: 'https://github.com/nabileus', icon: 'mdi:github' },
  { label: 'Telegram', href: 'https://t.me/nabileus', icon: 'mdi:send' },
  { label: 'X / Twitter', href: 'https://twitter.com/nabileus', icon: 'mdi:twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com/nabileus0/', icon: 'mdi:facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/nabileus0/', icon: 'mdi:instagram' },
];

// Android apps. Icons live in src/assets/. Store stats (downloads/rating) are as of Nov 2026 — update as they grow.
export const apps = [
  {
    name: 'Beam Calc',
    tagline: 'Beam, frame & truss solver for Android',
    icon: 'beamcalc',
    featured: true,
    playId: 'com.nabil.beam',
    stats: ['5K+ downloads', '5.0★ rating'],
    summary:
      'A structural analysis app for civil engineering students and engineers. Model a beam, 2D frame or truss and get shear force, bending moment, slope and deflection diagrams and member forces instantly.',
    features: [
      'Indeterminate beams and frames solved by the direct stiffness method; determinate beams by statics',
      'Supports, internal hinges, point/UDL/triangular/trapezoidal loads, and moments',
      'Variable E and I, support settlement and rotation',
      'Influence lines, degree of indeterminacy, and detection of unstable layouts',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Direct stiffness method'],
  },
  {
    name: 'Just One Reel',
    tagline: 'Watch the reel a friend sent, then stop',
    icon: 'justonereel',
    featured: false,
    playId: 'com.nabil.antibook',
    stats: [],
    summary:
      'Opens only the Facebook or Instagram reel you were sent and closes the moment you try to scroll on, so you can stay social without doomscrolling.',
    features: [],
    tech: ['Kotlin', 'Android'],
  },
];
