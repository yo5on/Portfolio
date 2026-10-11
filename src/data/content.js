export const github = 'https://github.com/yo5on'
export const email = 'yo5on2025@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/yo5on'

// Project copy comes from the existing portfolio and each repository's README;
// images are the ones published in those READMEs. Nothing here is embellished.
export const projects = [
  {
    id: 'line', n: '01', title: 'Line Follower', type: 'Robotics & Control Systems',
    intro: 'An ESP32 robot that follows a line using eight infrared sensors and PID steering, built for fast, smooth tracking through curves and sharp turns.',
    detail: 'High-speed PID Line Follower Robot using ESP32, TB6612FNG, and an 8-array IR sensor.',
    stack: ['ESP32', 'PID control', 'TB6612FNG', '8-array IR sensor'], plate: 'track', caption: 'On the line',
    note: 'eight IR sensors',
    image: { src: '/images/work/line-follower.webp', alt: 'The line follower robot on a black track line, its IR sensor array at the front', w: 675, h: 1200, frame: 'square', position: '50% 51%', crop: 'shift-right' },
    repo: 'https://github.com/yo5on/line-follower',
  },
  {
    id: 'fakeguard', n: '02', title: 'FakeGuard', type: 'Full-stack Development',
    intro: 'A social-media account risk analyzer: explainable 0\u2060–\u2060100 risk scores that help human reviewers prioritise their work.',
    detail: 'A full-stack prototype that analyzes synthetic social-media account data, scores risk from 0 to 100 across four categories, and explains each score feature by feature with reason codes. It is a decision-support tool built on synthetic data — it does not access real platforms or replace human review.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript'], caption: 'Analyzer — a HIGH result',
    note: 'a synthetic account',
    image: { src: '/images/work/fakeguard.webp', alt: 'FakeGuard analyzer scoring a synthetic account at 71 out of 100, HIGH risk, with manual review recommended and the start of its per-feature breakdown', w: 950, h: 664 },
    repo: 'https://github.com/yo5on/fakeguard',
  },
  {
    id: 'daymark', n: '03', title: 'Daymark', type: 'Product Design & Development',
    intro: 'A personalised study planner that adapts each day around time, priorities, exam proximity and how sessions actually went.',
    detail: 'Daymark is designed to feel less like a static timetable and more like a study companion that responds to what actually happens during the day: quick changes reshape a plan, completed sessions feed confidence and outcomes back into planning, and Insights surfaces patterns from real study records.',
    stack: ['React', 'TypeScript', 'Vite', 'Product design'], plate: 'dial', caption: 'Dashboard — Make today count',
    image: { src: '/images/work/daymark.webp', alt: 'Daymark home screen: the “Make today count.” header above the next study session, Eigenvalues & eigenvectors', w: 900, h: 629 },
    repo: 'https://github.com/yo5on/Personalised-study-planner',
  },
  {
    id: 'arm', n: '04', title: 'Robotic Arm', type: 'Embedded Robotics',
    intro: 'An ESP32-based 4-DOF robotic arm controlled wirelessly with an RC transmitter and servo motors.',
    detail: 'An ESP32-based 4-DOF robotic arm controlled wirelessly using an RC transmitter and receiver. The project demonstrates embedded control, servo motor manipulation, wireless communication, and coordinated robotic movement for pick-and-place applications.',
    stack: ['ESP32', 'Servo control', 'RC transmitter', '4-DOF'], plate: 'arm', caption: 'Pick and place',
    image: { src: '/images/work/robotic-arm.webp', alt: 'The yellow 4-DOF robotic arm lit from above against a dark background', w: 1280, h: 960 },
    repo: 'https://github.com/yo5on/Robotic-arm',
  },
  {
    id: 'maze', n: '05', title: 'Maze Runner', type: 'Game Development',
    intro: 'A 2D side-scrolling platformer built with Unity — three levels, combat, enemies, checkpoints and level goals.',
    detail: 'Maze Runner is a 2D side-scrolling platform game built with Unity: three gameplay levels, menu and customization scenes, player movement and combat systems, enemies, checkpoints, level goals, and supporting UI and audio. It is an active college project prototype.',
    stack: ['Unity', 'C#', '2D platformer', 'Game development'], caption: 'Level 1, mid-jump',
    // A frame of the Level 1 recording (86 s), cropped to the game view; pixels unchanged.
    image: { src: '/images/work/maze-runner.webp', alt: 'Maze Runner Level 1: the hooded player character mid-jump above a large green goblin standing on a platform', w: 1015, h: 710 },
    // Web version of the unedited gameplay recording (97 MB, kept in the maze-runner repository as
    // media/gameplay-level-1.mp4): same 1920x1016 frames and timing, H.264 (x264 CRF 23, preset slow)
    // with the original AAC audio copied, faststart. The poster is a frame of it (12 s), decoded unchanged.
    video: { src: '/media/maze-runner-level-1-web.mp4', poster: '/media/maze-runner-level-1-poster.webp', w: 1920, h: 1016, size: '7.1 MB', label: 'Maze Runner Level 1 gameplay recording', caption: 'Level 1, played in the Unity Editor’s Game view (Unity 6.5).' },
    repo: 'https://github.com/yo5on/maze-runner',
  },
  {
    id: 'sparky', n: '06', title: 'Sparky', type: 'Embedded Interaction',
    intro: 'A tiny animated companion on a 128×64 OLED, with moods, button reactions and smooth morphs between expressions.',
    detail: 'Sparky lives on a 128×64 OLED. It has moods, reacts to two buttons, drifts between expressions with smooth morphs, falls asleep when left alone, and wakes up on its own.',
    stack: ['ESP32', 'SSD1306', 'Arduino', 'Embedded animation'], caption: 'Sparky, smiling',
    image: { src: '/images/work/mochi.webp', still: '/images/work/mochi-still.webp', alt: 'Sparky’s pixel face on the OLED, smiling and changing expression', w: 256, h: 128, oled: true },
    note: 'pixels from the firmware',
    repo: 'https://github.com/yo5on/oled-project',
  },
]

// Full case studies (Brief → What I built → How it works → Stack → Status → Gallery → Links), keyed by
// project id. Checked against each repository's code: neither FakeGuard nor Daymark uses a trained model
// or an LLM, so no AI/ML claims are made for them. Projects without an entry keep the short project view.
const gallery = 'images/work/gallery'
export const studies = {
  line: {
    brief: 'An ESP32 robot that follows a line using eight infrared sensors and PID steering, built for fast, smooth tracking through curves and sharp turns.',
    built: 'I designed the chassis layout, assembled and wired the robot, and wrote and tuned the firmware.',
    how: [
      'Before a run, a calibration button starts a five-second sweep that records each sensor’s range; the status LED blinks while it runs.',
      'While running, the ESP32 reads the eight sensors on a Smart Elex RLS08 board through an 8-channel analog multiplexer and turns their readings into a single line position, so the robot knows how far off centre it is. A PID controller turns that error into a steering correction, speeding up one motor and slowing the other through a TB6612FNG driver.',
      'The firmware detects black or white lines automatically, and if the line disappears, the robot turns towards the side where it last saw it.',
    ],
    stack: ['ESP32 NodeMCU', 'C++ (Arduino)', 'PID_v1 library', 'Smart Elex RLS08 8-sensor IR board', '8-channel analog multiplexer', 'TB6612FNG motor driver', 'N20 gear motors', '2 × 3.7 V Li-ion cells', 'MP1584 and HW133A buck converters'],
    status: ['Built and tested on track.'],
    gallery: [
      { src: `/${gallery}/line-follower-1.webp`, w: 720, h: 1280, alt: 'The line-follower robot on a black-line test track.', caption: 'On the track' },
      { src: `/${gallery}/line-follower-2.webp`, w: 720, h: 1280, alt: 'Top view of the line-follower robot held in hand, showing the ESP32, motor driver and sensor board.', caption: 'Top view' },
      { src: `/${gallery}/line-follower-3.webp`, w: 720, h: 1280, alt: 'Hand-drawn chassis layout on graph paper, with dimensions and the motor and battery positions marked.', caption: 'Chassis layout' },
      { src: `/${gallery}/line-follower-4.webp`, w: 1015, h: 1600, alt: 'Wiring diagram linking the sensor board, multiplexer, ESP32, motor driver, motors and power converters.', caption: 'Wiring diagram. Its pin numbers differ from the current firmware; code.ino is the reference.' },
    ],
    links: [{ label: 'Repository', href: 'https://github.com/yo5on/line-follower' }],
  },
  fakeguard: {
    brief: 'A team hackathon project for Tech Utsav: a decision-support prototype that gives synthetic social-media accounts an explainable 0⁠–⁠100 risk score, so human reviewers know where to look first. It never touches real platforms and never makes the final call.',
    built: 'I was the team’s full-stack developer, working across the FastAPI scoring API and the React and TypeScript interface that presents it: the analyzer, dashboard, account views and methodology page.',
    how: [
      'Each account is measured on five signals: account age, follower-to-following ratio, posting frequency, profile completeness and engagement. Fixed thresholds map each signal to a risk value, and the values are weighted 20/25/20/15/20 into a single score. If a signal can’t be calculated, such as engagement for an account with no followers, it is marked unavailable and the remaining weights are rescaled, so missing data doesn’t inflate the score.',
      'The score falls into LOW, MEDIUM, HIGH or CRITICAL, each with a recommended action, and reason codes R01–R05 explain what drove the result. The repository includes a generated dataset of 1,006 synthetic accounts across eight archetypes, from typical users to bot-like patterns and edge cases.',
      'The scoring is a transparent rule-based method, not a trained model. Machine-learning approaches, such as Isolation Forest anomaly detection and behavioural clustering, are listed as future work and are not implemented.',
    ],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Pandas', 'React', 'TypeScript', 'Vite', 'Recharts', 'Vercel (frontend)', 'Render (API)'],
    status: ['Hackathon prototype, using synthetic data only. The live demo’s analyzer works end to end.'],
    gallery: [
      { src: `/${gallery}/fakeguard-1.webp`, w: 1400, h: 2159, alt: 'FakeGuard analyzer scoring a synthetic 12-day-old account at 71, HIGH, with a per-feature risk breakdown and reason codes.', caption: 'Analyzer: a HIGH result' },
      { src: `/${gallery}/fakeguard-2.webp`, w: 1400, h: 1533, alt: 'A synthetic established account scored 1, LOW, with no immediate action recommended.', caption: 'Analyzer: a LOW result' },
      { src: `/${gallery}/fakeguard-3.webp`, w: 1400, h: 2379, alt: 'Methodology page listing feature weights, thresholds, risk categories and reason codes.', caption: 'Scoring methodology' },
    ],
    links: [
      { label: 'Live demo', href: 'https://fakeguard-alpha.vercel.app', note: 'The first request may take about a minute while the backend wakes up.' },
      { label: 'Repository', href: 'https://github.com/yo5on/fakeguard' },
    ],
  },
  daymark: {
    brief: 'A study planner that adjusts the day around what actually happens: less time than expected, an exam tomorrow, low energy, a missed session.',
    built: 'I designed and built Daymark: the product design, the interface and the planning logic.',
    how: [
      'You type a change in plain words, such as “I only have 90 minutes” or “my maths exam is tomorrow”. Quick Change uses keyword and pattern matching to recognise time limits, exams, focus requests, finished topics, tiredness and missed sessions, then proposes a revised plan with a reason for each change, which you can accept or decline.',
      'After each session you rate your confidence from 1 to 5; a low rating moves that topic up and shortens its next session. Exam readiness is classed as Needs attention, Review recommended or On track from mastery, confidence and days left, and Insights are generated from your stored session records.',
      'All of the planning logic is deterministic and runs in the browser, with data kept in browser-local storage. There is no AI model or external service.',
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'Recharts', 'Lucide React', 'Browser localStorage', 'Vercel'],
    status: [
      'Working prototype under active development; the live demo needs no backend.',
      'Limitations: Quick Change only understands phrasings it has rules for; some subject shortcuts (“AI”, “math”, “SQL”) are hard-coded for the sample subjects; and data stays in one browser, with no accounts or syncing between devices.',
    ],
    gallery: [
      { src: `/${gallery}/daymark-1.webp`, w: 1897, h: 956, alt: 'Daymark home screen showing the next study session, today’s agenda and planned study time.', caption: 'Home' },
      { src: `/${gallery}/daymark-2.webp`, w: 1897, h: 956, alt: 'Weekly plan view with timed sessions and upcoming exams with readiness labels.', caption: 'Weekly plan' },
      { src: `/${gallery}/daymark-3.webp`, w: 1897, h: 946, alt: 'Subjects page showing mastery per subject and upcoming exams.', caption: 'Subjects' },
      { src: `/${gallery}/daymark-4.webp`, w: 1897, h: 956, alt: 'Progress page charting study time, consistency and subject performance.', caption: 'Progress' },
      { src: `/${gallery}/daymark-5.webp`, w: 1897, h: 956, alt: 'Revision page listing spaced-review topics by confidence.', caption: 'Revision' },
    ],
    links: [
      { label: 'Live demo', href: 'https://personalised-study-planner.vercel.app' },
      { label: 'Repository', href: 'https://github.com/yo5on/Personalised-study-planner' },
    ],
  },
}

// Practice: three areas, each with its focus (the former Skills list) and the projects that show it.
// Data-Driven Software links FakeGuard and Daymark as data-driven tools: neither uses a trained model.
export const practice = {
  lead: 'I build systems that connect software',
  leadEm: 'with the world around them.',
  areas: [
    { n: '01', title: 'Data-Driven Software', body: 'Explainable, data-driven tools that turn complex inputs into clear, practical decisions, built alongside my AI / ML studies.',
      focus: ['Explainable scoring', 'Planning logic'], workLabel: 'Data-driven tools', work: ['fakeguard', 'daymark'] },
    { n: '02', title: 'Embedded Robotics', body: 'Microcontrollers, sensors, motor control, and robotics, bringing hardware and software together.',
      focus: ['Robotics', 'ESP32 projects'], workLabel: 'In the work', work: ['line', 'arm', 'sparky'] },
    { n: '03', title: 'Interactive Software', body: 'Game development, user interfaces, and interactive experiences designed around clear functionality and thoughtful details.',
      focus: ['Unity 2D games'], workLabel: 'In the work', work: ['maze', 'daymark'] },
  ],
}

// Shown in About. The degree and university match the owner's GitHub profile
// ("CSE student specializing in AI/ML at Christ University, Bangalore").
export const education = 'B.Tech, Computer Science and Engineering (AI & ML) — Christ University, Bengaluru'

