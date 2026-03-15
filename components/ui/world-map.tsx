// src/components/ui/world-map.tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
}

interface MapProps {
  dots?: Array<{
    start: MapPoint;
    end: MapPoint;
  }>;
  lineColor?: string;
  showLabels?: boolean;
}

export function WorldMap({
  dots = [],
  lineColor = "#3b82f6", // blue-500
  showLabels = true,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Build dotted map with dark bg + blue dots
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.26,
    color: "#3b82f670",
    shape: "circle",
    backgroundColor: "#020617", // slate-950
  });

  const labelColor = "#ffffff";

  // Project geo coords into SVG space (viewBox 0 0 800 400)
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Curved arc path between 2 points
  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Dynamic pill width based on label length
  const getLabelWidth = (label?: string) => {
    if (!label) return 60;
    const base = label.length * 6.2;
    return Math.max(60, Math.min(base + 16, 120)); // clamp width between 60–120
  };

  // Decide where to place each label + connector, keeping special cases
  const getLabelPosition = (
    x: number,
    y: number,
    label?: string
  ): {
    labelX: number;
    labelY: number;
    textAnchor: "start" | "end" | "middle";
    connectorX: number;
    connectorY: number;
  } => {
    // UK → label on the left
    if (label === "United Kingdom" || label === "UK") {
      return {
        labelX: x - 18,
        labelY: y - 10,
        textAnchor: "end",
        connectorX: x - 6,
        connectorY: y - 2,
      };
    }

    // Switzerland → below the dot
    if (label === "Switzerland") {
      return {
        labelX: x,
        labelY: y + 18,
        textAnchor: "middle",
        connectorX: x,
        connectorY: y + 8,
      };
    }

    // Default: if near right edge, flip label to left to avoid clipping (NZ, Japan, etc.)
    const nearRight = x > 720;
    return {
      labelX: nearRight ? x - 18 : x + 18,
      labelY: y - 10,
      textAnchor: nearRight ? "end" : "start",
      connectorX: nearRight ? x - 6 : x + 6,
      connectorY: y - 2,
    };
  };

  return (
    <div className="w-full aspect-[2/1] bg-[#020617] rounded-3xl relative font-sans overflow-hidden">
      {/* depth gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.85),_transparent_70%)]" />

      {/* dotted world map */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="relative h-full w-full object-cover pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        {/* arcs */}
        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          const isActive = activeIndex === i;

          return (
            <motion.path
              key={`arc-${i}`}
              d={createCurvedPath(s, e)}
              fill="none"
              stroke={lineColor}
              strokeWidth={isActive ? 1.8 : 1.2}
              strokeOpacity={isActive ? 0.9 : 0.45}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: i * 0.25 }}
            />
          );
        })}

        {/* dots + interactive labels */}
        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const pos = getLabelPosition(s.x, s.y, dot.start.label);
          const isActive = activeIndex === i;
          const label = dot.start.label;

          const pillWidth = getLabelWidth(label);
          let pillX = pos.labelX - pillWidth / 2;

          if (pos.textAnchor === "start") {
            pillX = pos.labelX - 8;
          } else if (pos.textAnchor === "end") {
            pillX = pos.labelX - pillWidth + 8;
          }

          const pillY = pos.labelY - 12;

          // small coordinate line for hover
          const coordText =
            dot.start && typeof dot.start.lat === "number" && typeof dot.start.lng === "number"
              ? `${dot.start.lat.toFixed(1)}°, ${dot.start.lng.toFixed(1)}°`
              : "";

          return (
            <g
              key={`dot-${i}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="cursor-pointer"
            >
              {/* main dot */}
              <circle
                cx={s.x}
                cy={s.y}
                r={isActive ? 5 : 4}
                fill={isActive ? "#60a5fa" : lineColor}
              />
              {/* pulsing halo */}
              <circle cx={s.x} cy={s.y} r={4} fill={lineColor} opacity={isActive ? 0.9 : 0.6}>
                <animate attributeName="r" from="4" to="10" dur="1.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" from={isActive ? 0.7 : 0.6} to="0" dur="1.6s" repeatCount="indefinite" />
              </circle>

              {/* connector line */}
              {showLabels && label && (
                <line
                  x1={s.x}
                  y1={s.y}
                  x2={pos.connectorX}
                  y2={pos.connectorY}
                  stroke={isActive ? "#93c5fd" : "#4dabff"}
                  strokeWidth={isActive ? 1.2 : 1}
                  strokeOpacity={isActive ? 0.95 : 0.7}
                />
              )}

              {/* label pill */}
              {showLabels && label && (
                <g>
                  {/* blurred glow for active */}
                  {isActive && (
                    <rect
                      x={pillX - 3}
                      y={pillY - 3}
                      width={pillWidth + 6}
                      height={26}
                      rx={10}
                      fill="rgba(37,99,235,0.25)"
                      filter="url(#label-glow)"
                    />
                  )}

                  {/* pill background */}
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillWidth}
                    height={22}
                    rx={8}
                    fill={isActive ? "rgba(15,23,42,0.9)" : "rgba(15,23,42,0.7)"}
                    stroke={isActive ? "rgba(129,140,248,0.9)" : "rgba(148,163,184,0.6)"}
                    strokeWidth={isActive ? 0.9 : 0.6}
                  />

                  {/* label text */}
                  <text
                    x={pos.labelX}
                    y={pos.labelY + (isActive ? -1 : 1)}
                    fill={labelColor}
                    fontSize="10"
                    textAnchor={pos.textAnchor}
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont"
                  >
                    {label}
                    {isActive && coordText && (
                      <tspan
                        x={pos.labelX}
                        dy={11}
                        fill="#cbd5f5"
                        fontSize="8"
                      >
                        {coordText}
                      </tspan>
                    )}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* filters for glow / blur */}
        <defs>
          <filter id="label-glow" x="-20" y="-20" width="200" height="200">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
