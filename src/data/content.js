export const github = 'https://github.com/yo5on'
export const email = 'yo5on2025@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/yo5on'

// Project copy comes from the existing portfolio and each repository's README;
// images are the ones published in those READMEs. Nothing here is embellished.
export const projects = [
  {
    id: 'fakeguard', n: '01', fig: 'FIG. 02', title: 'FakeGuard', type: 'AI / Hackathon',
    intro: 'A social-media account risk analyzer: explainable 0\u2060–\u2060100 risk scores that help human reviewers prioritise their work.',
    detail: 'A full-stack prototype that analyzes synthetic social-media account data, scores risk from 0 to 100 across four categories, and explains each score feature by feature with reason codes. It is a decision-support tool built on synthetic data — it does not access real platforms or replace human review.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'AI / ML'], plate: 'graph', caption: 'Account graph, one flagged node',
    repo: 'https://github.com/yo5on/fakeguard',
  },
  {
    id: 'daymark', n: '02', fig: 'FIG. 03', title: 'Daymark', type: 'AI / Learning',
    intro: 'A personalised study planner that adapts each day around time, priorities, exam proximity and how sessions actually went.',
    detail: 'Daymark is designed to feel less like a static timetable and more like a study companion that responds to what actually happens during the day: quick changes reshape a plan, completed sessions feed confidence and outcomes back into planning, and Insights surfaces patterns from real study records.',
    stack: ['React', 'TypeScript', 'Vite', 'Product design'], plate: 'dial', caption: 'Dashboard — Make today count',
    image: { src: '/images/work/daymark.webp', alt: 'Daymark dashboard showing the next study session, today’s agenda and weekly rhythm', w: 1400, h: 685 },
    repo: 'https://github.com/yo5on/Personalised-study-planner',
  },
  {
    id: 'agri', n: '03', fig: 'FIG. 04', title: 'Agentic Pest Monitoring', type: 'AI / Agriculture',
    intro: 'Agentic AI-Based Pest Monitoring Framework for Sustainable Agricultural Productivity and Resource Optimization.',
    detail: 'An AI-powered agricultural monitoring framework that helps detect crop pests, analyze field conditions and support sustainable decisions through an agentic workflow, with a web dashboard and a modular architecture for future sensor and model integration.',
    stack: ['Python', 'AI / ML', 'Agentic AI', 'Web dashboard'], plate: 'leaf', caption: 'Field loop',
    repo: 'https://github.com/yo5on/Agentic-AI-Pest-Monitoring',
  },
  {
    id: 'line', n: '04', fig: 'FIG. 05', title: 'ESP32 Line Follower', type: 'Robotics / ESP32',
    intro: 'High-speed PID line follower robot using ESP32, TB6612FNG, and an 8-array IR sensor.',
    detail: 'High-speed PID Line Follower Robot using ESP32, TB6612FNG, and an 8-array IR sensor.',
    stack: ['ESP32', 'PID control', 'TB6612FNG', '8-array IR sensor'], plate: 'track', caption: 'On the line',
    image: { src: '/images/work/line-follower.webp', alt: 'The line follower robot on a black track line, its IR sensor array at the front', w: 675, h: 1200, frame: 'square', position: '50% 51%', crop: 'shift-right' },
    repo: 'https://github.com/yo5on/line-follower',
  },
  {
    id: 'arm', n: '05', fig: 'FIG. 06', title: 'Robotic Arm', type: 'Robotics / ESP32',
    intro: 'An ESP32-based 4-DOF robotic arm controlled wirelessly with an RC transmitter and servo motors.',
    detail: 'An ESP32-based 4-DOF robotic arm controlled wirelessly using an RC transmitter and receiver. The project demonstrates embedded control, servo motor manipulation, wireless communication, and coordinated robotic movement for pick-and-place applications.',
    stack: ['ESP32', 'Servo control', 'RC transmitter', '4-DOF'], plate: 'arm', caption: 'Pick and place',
    image: { src: '/images/work/robotic-arm.webp', alt: 'The yellow 4-DOF robotic arm lit from above against a dark background', w: 1280, h: 960 },
    repo: 'https://github.com/yo5on/Robotic-arm',
  },
  {
    id: 'mochi', n: '06', fig: 'FIG. 07', title: 'Mochi · OLED Companion', type: 'Embedded / ESP32',
    intro: 'A tiny animated companion on a 128×64 OLED, with moods, button reactions and smooth morphs between expressions.',
    detail: 'Mochi lives on a 128×64 OLED. It has moods, reacts to two buttons, drifts between expressions with smooth morphs, falls asleep when left alone, and wakes up on its own.',
    stack: ['ESP32', 'SSD1306', 'Arduino', 'Embedded animation'], caption: 'Mochi, smiling',
    image: { src: '/images/work/mochi.webp', still: '/images/work/mochi-still.webp', alt: 'Mochi’s pixel face on the OLED, smiling and changing expression', w: 396, h: 204, fit: 'contain', pixel: true },
    repo: 'https://github.com/yo5on/oled-project',
  },
  {
    id: 'maze', n: '07', fig: 'FIG. 08', title: 'Maze Runner', type: 'Unity / Game',
    intro: 'A 2D side-scrolling platformer built with Unity — three levels, combat, enemies, checkpoints and level goals.',
    detail: 'Maze Runner is a 2D side-scrolling platform game built with Unity: three gameplay levels, menu and customization scenes, player movement and combat systems, enemies, checkpoints, level goals, and supporting UI and audio. It is an active college project prototype.',
    stack: ['Unity', 'C#', '2D platformer', 'Game development'], plate: 'platform', caption: 'Jump arc',
    repo: 'https://github.com/yo5on/maze-runner',
  },
]

export const focus = ['Artificial intelligence', 'Machine learning', 'Computer science', 'Robotics', 'ESP32 projects', 'Unity 2D games', 'Sustainable agriculture']

export const practice = [
  { k: '01 / Studies', title: 'Computer Science & Engineering.', body: 'AI / ML specialization.' },
  { k: '02 / Applied AI', title: 'Detection, planning & monitoring.', body: 'FakeGuard, Daymark, and an agentic pest monitoring framework.' },
  { k: '03 / Physical computing', title: 'Sensors, boards & movement.', body: 'ESP32 projects across line following, gesture control, robotic arms, and agriculture.' },
]
