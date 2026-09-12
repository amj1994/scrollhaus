import { useEffect, useRef, useState } from 'react';

const DATA = [
  { day: 'Mon', val: 18000 },
  { day: 'Tue', val: 22000 },
  { day: 'Wed', val: 19000 },
  { day: 'Thu', val: 25000 },
  { day: 'Fri', val: 21000 },
  { day: 'Sat', val: 32000 },
  { day: 'Sun', val: 28000 },
];

const WIDTH = 400;
const HEIGHT = 180;
const PAD_TOP = 10;
const PAD_BOTTOM = 30;
const MAX_VAL = 40000;
const HIGHLIGHT_INDEX = 5;

function xFor(i: number) {
  return (i / (DATA.length - 1)) * WIDTH;
}
function yFor(val: number) {
  return PAD_TOP + (1 - val / MAX_VAL) * (HEIGHT - PAD_TOP - PAD_BOTTOM);
}

const points = DATA.map((d, i) => ({ x: xFor(i), y: yFor(d.val) }));

function smooth(pts: { x: number; y: number }[]) {
  if (pts.length === 0) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const mx = (p0.x + p1.x) / 2;
    d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

const linePath = smooth(points);
const areaPath = `${linePath} L ${points[points.length - 1].x} ${HEIGHT - PAD_BOTTOM} L ${points[0].x} ${HEIGHT - PAD_BOTTOM} Z`;

const Y_LABELS = [0, 10000, 20000, 30000, 40000];

export default function AnimatedChart() {
  const pathRef = useRef<SVGPathElement>(null);
  const [mounted, setMounted] = useState(false);
  const [pathLen, setPathLen] = useState(0);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const hp = points[HIGHLIGHT_INDEX];

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto overflow-visible">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1F2937" stopOpacity="0.08" />
          <stop offset="1" stopColor="#1F2937" stopOpacity="0" />
        </linearGradient>
      </defs>

      {Y_LABELS.map((v) => {
        const y = yFor(v);
        return (
          <g key={v}>
            <line
              x1={0}
              y1={y}
              x2={WIDTH}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth={0.5}
              strokeDasharray="4 3"
            />
            <text
              x={-6}
              y={y + 3}
              textAnchor="end"
              fill="#9CA3AF"
              fontSize={9}
              fontFamily="Inter"
            >
              {v === 0 ? '0' : `${v / 1000}k`}
            </text>
          </g>
        );
      })}

      {DATA.map((d, i) => (
        <text
          key={d.day}
          x={xFor(i)}
          y={HEIGHT - 8}
          textAnchor="middle"
          fontSize={9}
          fill={i === HIGHLIGHT_INDEX ? '#111827' : '#9CA3AF'}
          fontWeight={i === HIGHLIGHT_INDEX ? 600 : 400}
        >
          {d.day}
        </text>
      ))}

      <path
        d={areaPath}
        fill="url(#chartGrad)"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease-out 0.8s',
        }}
      />

      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#1F2937"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: pathLen,
          strokeDashoffset: mounted ? 0 : pathLen,
          transition: 'stroke-dashoffset 1.8s ease-out',
        }}
      />

      <line
        x1={hp.x}
        y1={hp.y}
        x2={hp.x}
        y2={HEIGHT - PAD_BOTTOM}
        stroke="#1F2937"
        strokeWidth={1}
        strokeDasharray="3 2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.4s ease-out 1.6s',
        }}
      />

      <circle
        cx={hp.x}
        cy={hp.y}
        r={5}
        fill="#fff"
        stroke="#1F2937"
        strokeWidth={2}
        style={{
          transform: mounted ? 'scale(1)' : 'scale(0)',
          transformOrigin: `${hp.x}px ${hp.y}px`,
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.6s',
        }}
      />

      <g
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.4s ease-out 1.8s, transform 0.4s ease-out 1.8s',
        }}
      >
        <rect
          x={hp.x - 48}
          y={hp.y - 32}
          width={96}
          height={22}
          rx={6}
          fill="#1F2937"
        />
        <text x={hp.x - 40} y={hp.y - 21} textAnchor="start" fontSize={9} fill="#fff">
          32,104
        </text>
        <text x={hp.x + 40} y={hp.y - 21} textAnchor="end" fontSize={9} fill="#34D399">
          +6,488
        </text>
      </g>
    </svg>
  );
}
