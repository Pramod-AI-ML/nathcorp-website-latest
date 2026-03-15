// src/components/world-map.tsx
"use client";

import { WorldMap as BaseWorldMap } from "@/components/ui/world-map";

interface Office {
  id: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  coordText: string;
  pillColor: string;
}

const offices: Office[] = [
  {
    id: "usa",
    city: "USA",
    country: "USA",
    lat: 37.0902,
    lng: -95.7129,
    coordText: "37.0902° N, 95.7129° W",
    pillColor: "bg-sky-500",
  },
  {
    id: "uk",
    city: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    coordText: "51.5074° N, 0.1278° W",
    pillColor: "bg-blue-600",
  },
  {
    id: "switzerland",
    city: "Zurich",
    country: "Switzerland",
    lat: 46.8182,
    lng: 8.2275,
    coordText: "46.8182° N, 8.2275° E",
    pillColor: "bg-red-500",
  },
  {
    id: "poland",
    city: "Warsaw",
    country: "Poland",
    lat: 52.2297,
    lng: 21.0122,
    coordText: "52.2297° N, 21.0122° E",
    pillColor: "bg-rose-500",
  },
  {
    id: "china",
    city: "Xinzhou",
    country: "China",
    lat: 35.8617,
    lng: 104.1954,
    coordText: "35.8617° N, 104.1954° E",
    pillColor: "bg-orange-500",
  },
  {
    id: "japan",
    city: "Tokyo",
    country: "Japan",
    lat: 36.2048,
    lng: 138.2529,
    coordText: "36.2048° N, 138.2529° E",
    pillColor: "bg-pink-500",
  },
  {
    id: "australia",
    city: "Sydney",
    country: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    coordText: "25.2744° S, 133.7751° E",
    pillColor: "bg-yellow-500",
  },
  {
    id: "newzealand",
    city: "Auckland",
    country: "New Zealand",
    lat: -40.9006,
    lng: 174.886,
    coordText: "40.9006° S, 174.8860° E",
    pillColor: "bg-teal-500",
  },
];

// build dots – label is country name
const officeDots = offices.map((office) => ({
  start: {
    lat: office.lat,
    lng: office.lng,
    label: office.country,
  },
  end: {
    lat: office.lat,
    lng: office.lng,
    label: office.country,
  },
}));

export default function WorldMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 dark:bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      {/* Header strip */}
      <div className="flex items-center justify-between px-4 sm:px-6 pt-5 pb-3 border-b border-slate-200/70 dark:border-slate-800/80">
        <div>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Global Delivery Network
          </p>
          <h3 className="mt-1 text-base sm:text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50">
            Serving Clients Across the Globe
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/50 px-2 py-0.5 bg-emerald-50/70 dark:bg-emerald-500/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live support 24/7
          </span>
        </div>
      </div>

      {/* Map */}
      <div className="px-3 sm:px-4 md:px-6 pb-4 md:pb-6 pt-3">
        <div className="w-full max-w-5xl mx-auto">
          <BaseWorldMap dots={officeDots} lineColor="#2563eb" showLabels />
        </div>
      </div>

      {/* Office pills with coordinates */}
      <div className="px-4 md:px-6 pb-5 md:pb-6 border-t border-slate-200/70 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3 md:gap-2 justify-start">
            {offices.map((office) => (
              <div
                key={office.id}
                className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-slate-900/80 px-3.5 py-1.5 shadow-sm border border-slate-200/70 dark:border-slate-800/80"
              >
                <span className={`h-2 w-2 rounded-full ${office.pillColor}`} />
                <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                  {office.country}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {office.coordText}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-sm">
            Coordinates are approximate and used to visualize NathCorp&apos;s delivery presence across key global
            regions.
          </p>
        </div>
      </div>
    </div>
  );
}
