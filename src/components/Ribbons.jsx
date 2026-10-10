/*
 * Crimson silk ribbons drawn around the moth.
 *
 * Each ribbon is a smooth Catmull-Rom → Bezier centreline through hand-placed
 * points. It is rendered as a filled outline whose width swells and pinches to a
 * hairline as the ribbon "twists", which reads as a flat silk strip rather than a
 * stroked line. `front` ranges (0–1 along the ribbon) are drawn above the moth;
 * everything else sits behind it.
 *
 * Coordinates live in the art box viewBox (1600 × 1100). The moth image occupies
 * x 200–1400, y 168–931 of that box.
 */

export const VIEW = { w: 1600, h: 1100 }
export const MOTH = { x: 200, y: 168, w: 1200, h: 763 }

const RIBBONS = [
  {
    // Upper ribbon: rises from behind the headline, crosses the head, curls
    // over the right forewing and loops round its tip.
    width: 15, twists: 3.4, phase: 0.3,
    points: [[130, 330], [210, 270], [330, 228], [520, 192], [700, 174], [830, 150], [950, 96], [1030, 80], [1046, 150], [960, 196], [860, 230], [860, 330], [960, 380], [1100, 320], [1250, 300], [1410, 360], [1450, 470], [1370, 590], [1220, 600], [1080, 530], [990, 470]],
    front: [[0.4, 0.62], [0.82, 1]],
  },
  {
    // Lower ribbon: sweeps beneath the left hindwing, curls through the gap
    // between the lobes, then trails out to the right.
    width: 14, twists: 3.1, phase: 1.2,
    points: [[330, 560], [250, 640], [215, 740], [270, 850], [400, 900], [560, 880], [680, 800], [780, 760], [820, 840], [760, 930], [840, 975], [980, 920], [1130, 820], [1270, 790], [1380, 850], [1440, 900], [1500, 860]],
    front: [[0.28, 0.6], [0.78, 0.9]],
  },
  {
    // Thin trailing loop under the moth — the faint hairline ellipse.
    width: 5, twists: 2.2, phase: 0.6,
    points: [[440, 930], [560, 1050], [760, 1085], [1010, 1060], [1240, 1000], [1330, 900], [1220, 820], [1040, 840], [900, 900], [780, 990]],
    front: [[0.0, 0.18]],
  },
]

function catmullRom(points, steps = 28) {
  const out = []
  const n = points.length
  for (let i = 0; i < n - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)], p1 = points[i], p2 = points[i + 1], p3 = points[Math.min(i + 2, n - 1)]
    for (let s = 0; s < steps; s++) {
      const t = s / steps, t2 = t * t, t3 = t2 * t
      out.push([0, 1].map(k => 0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3)))
    }
  }
  out.push(points[n - 1])
  return out
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }

function outline(samples, from, to) {
  const left = [], right = []
  for (let i = from; i <= to; i++) {
    const { p, n, w } = samples[i]
    left.push(`${(p[0] + n[0] * w).toFixed(1)} ${(p[1] + n[1] * w).toFixed(1)}`)
    right.push(`${(p[0] - n[0] * w).toFixed(1)} ${(p[1] - n[1] * w).toFixed(1)}`)
  }
  return `M${left.join('L')}L${right.reverse().join('L')}Z`
}

function build({ points, width, twists, phase, front }) {
  const line = catmullRom(points)
  // arc-length parameter so twists are evenly spaced along the ribbon
  const len = [0]
  for (let i = 1; i < line.length; i++) len.push(len[i - 1] + Math.hypot(line[i][0] - line[i - 1][0], line[i][1] - line[i - 1][1]))
  const total = len[len.length - 1]
  const samples = line.map((p, i) => {
    const a = line[Math.max(i - 1, 0)], b = line[Math.min(i + 1, line.length - 1)]
    const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1
    const t = len[i] / total
    const twist = 0.1 + 0.9 * Math.abs(Math.cos(twists * Math.PI * t + phase))
    const w = (width / 2) * twist * smooth(0, 0.06, t) * smooth(1, 0.9, t) + 0.45
    return { p, n: [-dy / d, dx / d], w, t }
  })
  const isFront = t => front.some(([a, b]) => t >= a && t <= b)
  const back = [], fore = []
  let start = 0
  for (let i = 1; i <= samples.length; i++) {
    const end = i === samples.length || isFront(samples[i].t) !== isFront(samples[start].t)
    if (!end) continue
    const to = Math.min(i, samples.length - 1) // overlap one sample so layers meet without a seam
    ;(isFront(samples[start].t) ? fore : back).push(outline(samples, start, to))
    start = i
  }
  return { back, fore }
}

const BUILT = RIBBONS.map(build)

export function RibbonLayer({ layer, className }) {
  return (
    <svg className={className} viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <g fill="#D21319">
        {BUILT.map((r, i) => (r[layer] || []).map((d, j) => <path key={`${i}-${j}`} d={d} />))}
      </g>
    </svg>
  )
}
