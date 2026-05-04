import { useState, useEffect, useRef } from "react";
import styles from "./RadarChart.module.css";

const STAT_KEYS = ["공격력", "생존력", "기동성", "미션수행", "유틸리티"];
const MAX_VAL = 10;
const SVG_SIZE = 300;
const CENTER = SVG_SIZE / 2;
const RADIUS = 95;
const LABEL_RADIUS = RADIUS + 30;
const LEVELS = 5;

function easeOutElastic(t) {
  if (t === 0 || t === 1) return t;
  const c4 = (2 * Math.PI) / 3;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
}

function getAngle(index) {
  return -Math.PI / 2 + ((2 * Math.PI) / STAT_KEYS.length) * index;
}

function polar(r, index) {
  const a = getAngle(index);
  return { x: CENTER + r * Math.cos(a), y: CENTER + r * Math.sin(a) };
}

function gridPolygon(level) {
  const r = (level / LEVELS) * RADIUS;
  return STAT_KEYS.map((_, i) => {
    const p = polar(r, i);
    return `${p.x},${p.y}`;
  }).join(" ");
}

function dataPolygon(statsDisplay) {
  return STAT_KEYS.map((key, i) => {
    const r = (Math.max(0, statsDisplay[key] || 0) / MAX_VAL) * RADIUS;
    const p = polar(r, i);
    return `${p.x},${p.y}`;
  }).join(" ");
}

function labelAnchor(index) {
  const x = Math.cos(getAngle(index));
  if (x > 0.15) return "start";
  if (x < -0.15) return "end";
  return "middle";
}

function labelBaseline(index) {
  const y = Math.sin(getAngle(index));
  if (y > 0.15) return "hanging";
  if (y < -0.15) return "auto";
  return "middle";
}

export default function RadarChart({ initialStats, color = "#c9a84c" }) {
  const [sliderStats, setSliderStats] = useState({ ...initialStats });
  const [display, setDisplay] = useState(
    Object.fromEntries(STAT_KEYS.map((k) => [k, 0])),
  );
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const targetRef = useRef({ ...initialStats });

  useEffect(() => {
    const DURATION = 1300;
    const delay = setTimeout(() => {
      function animate(ts) {
        if (!startRef.current) startRef.current = ts;
        const t = Math.min((ts - startRef.current) / DURATION, 1);
        const e = easeOutElastic(t);
        setDisplay(
          Object.fromEntries(
            STAT_KEYS.map((k) => [k, (targetRef.current[k] || 0) * e]),
          ),
        );
        if (t < 1) rafRef.current = requestAnimationFrame(animate);
      }
      rafRef.current = requestAnimationFrame(animate);
    }, 150);
    return () => {
      clearTimeout(delay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleChange(key, val) {
    const next = { ...sliderStats, [key]: val };
    setSliderStats(next);
    setDisplay(next);
    targetRef.current = next;
  }

  const points = dataPolygon(display);
  const colorFill = `${color}1a`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.chartWrap}>
        <svg
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className={styles.svg}
          aria-label="팩션 능력치 레이더 차트"
        >
          {/* Grid rings */}
          {Array.from({ length: LEVELS }, (_, i) => i + 1).map((lvl) => (
            <polygon
              key={lvl}
              points={gridPolygon(lvl)}
              fill="none"
              stroke={
                lvl === LEVELS
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,255,255,0.05)"
              }
              strokeWidth={lvl === LEVELS ? 1.2 : 0.8}
            />
          ))}

          {/* Axis lines */}
          {STAT_KEYS.map((_, i) => {
            const end = polar(RADIUS, i);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={end.x}
                y2={end.y}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={0.8}
              />
            );
          })}

          {/* Colored data glow (blurred duplicate) */}
          <polygon
            points={points}
            fill={colorFill}
            stroke="none"
            filter="url(#glow)"
          />

          {/* Data area */}
          <polygon
            points={points}
            fill={colorFill}
            stroke={color}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />

          {/* Dots */}
          {STAT_KEYS.map((key, i) => {
            const r = (Math.max(0, display[key] || 0) / MAX_VAL) * RADIUS;
            const p = polar(r, i);
            return (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={6} fill={color} opacity={0.15} />
                <circle cx={p.x} cy={p.y} r={3.5} fill={color} opacity={0.9} />
                <circle cx={p.x} cy={p.y} r={1.5} fill="var(--bg-dark)" />
              </g>
            );
          })}

          {/* Labels */}
          {STAT_KEYS.map((key, i) => {
            const p = polar(LABEL_RADIUS, i);
            return (
              <text
                key={i}
                x={p.x}
                y={p.y}
                textAnchor={labelAnchor(i)}
                dominantBaseline={labelBaseline(i)}
                fill="rgba(200,185,160,0.75)"
                fontSize={10}
                fontFamily="'Cinzel', serif"
                letterSpacing="0.3"
              >
                {key}
              </text>
            );
          })}

          {/* SVG filter for glow */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Sliders */}
      <div className={styles.sliders}>
        {/* <p className={styles.sliderHint}>슬라이더로 수치 조정</p> */}
        {STAT_KEYS.map((key) => (
          <div key={key} className={styles.row}>
            <span className={styles.rowLabel}>{key}</span>
            <div className={styles.track}>
              <div
                className={styles.fill}
                style={{
                  width: `${(sliderStats[key] / MAX_VAL) * 100}%`,
                  background: color,
                }}
              />
              <input
                type="range"
                min={0}
                max={MAX_VAL}
                step={1}
                value={sliderStats[key]}
                // onChange={e => handleChange(key, Number(e.target.value))}
                className={styles.slider}
                style={{ "--col": color }}
              />
            </div>
            <span className={styles.rowValue} style={{ color }}>
              {sliderStats[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
