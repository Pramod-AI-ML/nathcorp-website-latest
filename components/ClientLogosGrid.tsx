"use client"

import Image from "next/image"
import React from "react"

const clientLogos = [
  { name: "3M", logo: "/images/3m-logo.png" },
  { name: "Hawaiian Airlines", logo: "/images/hawaiian-airlines-logo.png"},
  { name: "Technicolor", logo: "/images/technicolor-logo.png" },
  { name: "Toyota", logo: "/images/toyota-logo.png" },
  { name: "Allergan", logo: "/images/allergan-logo.png" },
  { name: "Intuit", logo: "/images/intuit-logo.png" },
  { name: "Hanson Spirits", logo: "/images/hanson-spirits-logo.png" },

  { name: "Sharp", logo: "/images/sharp-logo.png" },
  { name: "Universal Music Group", logo: "/images/universal-music-group-logo.png" },
  { name: "Zions Bank", logo: "/images/zions-bank-logo.png" },
  { name: "First Hawaiian Bank", logo: "/images/first-hawaiian-bank-logo.png" },
  { name: "Edwards", logo: "/images/edwards-logo.png" },
  { name: "Western Digital", logo: "/images/western-digital-logo.png" },
  { name: "AAA", logo: "/images/aaa-logo.png" },
  { name: "OCLC", logo: "/images/oclc-logo.png" },
]

export default function ClientsMatchingHexGrid() {
  // Logic from original code for splitting the logos
  const left = [...clientLogos.slice(0, 7), clientLogos[14]]
  const right = clientLogos.slice(7, 14)

  return (
    // Outer container for the full-width background gradient matching the Ezy One image
    <div className="w-full py-20 bg-gradient-to-br from-[#f8f6ff] via-[#fdfdff] to-[#f4f2ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* The main card container with soft shadow and rounded corners - FIXED CLASSNAME */}
        <div className="p-8 md:p-12 lg:p-16 bg-white rounded-3xl shadow-2xl mx-auto max-w-5xl transition-all duration-300 hover:shadow-indigo-300/60 relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-indigo-50 before:rounded-3xl before:-z-10 overflow-hidden">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h3 className="text-sm font-medium text-indigo-500 tracking-wider mb-2">
              Nathcorp Partner
            </h3>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Technologies & Partners with Nathcorp
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
              We are proud to collaborate with industry-leading technologies and partners to deliver exceptional solutions for our clients.
            </p>
          </div>

          {/* GRID */}
          <div className="flex justify-center items-start gap-8 md:gap-12 flex-wrap lg:flex-nowrap">

            {/* LEFT */}
            <div className="flex flex-col gap-6 md:gap-7 items-center">
              <div className="hex-row">
                {left.slice(0, 2).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
              <div className="hex-row mt-[-28px] md:mt-[-38px]">
                {left.slice(2, 5).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
              <div className="hex-row mt-[-28px] md:mt-[-38px]">
                {left.slice(5, 8).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
            </div>

            {/* CENTER */}
            <div className="mx-4 md:mx-8 mt-10 md:mt-0">
              <HexCenter />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6 md:gap-7 items-center">
              <div className="hex-row">
                {right.slice(0, 2).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
              <div className="hex-row mt-[-28px] md:mt-[-38px]">
                {right.slice(2, 5).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
              <div className="hex-row mt-[-28px] md:mt-[-38px]">
                {right.slice(5, 7).map((l) => <Hex key={l.name} logo={l.logo} name={l.name} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES matching the Ezy One visual structure */}
      <style jsx>{`
        .hex {
          /* Smaller size for better fit inside the card */
          width: 120px; 
          height: 138px;
          background: white;
          padding: 12px;
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          border: 1px solid #f0f0f5; /* Very light border */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease-out;
          will-change: transform, box-shadow;
          /* Subtle shadow lift on hover, matching modern style */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
        }

        .hex:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(80, 60, 160, 0.1), 0 0 0 1px #e5e5e5;
        }

        .hex-row {
          display: flex;
          gap: 16px; /* Reduced gap for a tighter feel */
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .hex { width: 100px; height: 115px; padding: 10px; }
          .hex-row { gap: 12px; }
        }

        @media (max-width: 768px) {
           /* On smaller screens, make the hex groups align centered and drop the vertical offset */
           .hex-row { gap: 8px; }
           /* Remove negative margin to prevent overlap on small screens */
           .mt-[-28px] { margin-top: 0 !important; } 
           .mt-[-38px] { margin-top: 0 !important; }
        }
      `}</style>
    </div>
  )
}

/* SMALL HEX */
function Hex({ logo, name }: { logo: string, name?: string }) {
  return (
    <div className="hex" title={name}>
      <Image
        src={logo}
        alt={name || "logo"}
        width={100}
        height={66}
        className="object-contain"
        priority={false}
      />
    </div>
  )
}

/* CENTER HEX - Matching the dark, prominent style of the Ezy One center logo */
function HexCenter() {
  return (
    <div className="relative flex items-center justify-center">
      
      {/* Outer Glow Layer (Mimicking the Ezy One glow) */}
      <div className="hex-center-glow"></div>
      
      {/* Main Hexagon (Dark background) */}
      <div className="hex-center-dark">
        <Image
          src="/images/nathcorp.png"
          alt="Nathcorp Logo"
          width={180}
          height={120}
          className="object-contain z-10 relative"
          priority
        />
      </div>

      <style jsx>{`
        .hex-center-dark {
          position: relative;
          width: 200px; /* Size adjusted to fit better in the grid */
          height: 230px; 
          background: linear-gradient(145deg, #1c193e 0%, #3e387c 50%, #1c193e 100%); /* Dark gradient */
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .hex-center-dark:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(99, 102, 241, 0.8);
        }

        .hex-center-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
          filter: blur(50px);
          animation: pulse 2s infinite alternate;
          z-index: 5;
        }

        @keyframes pulse {
          from { opacity: 0.6; transform: scale(1); }
          to { opacity: 0.9; transform: scale(1.1); }
        }

        @media (max-width: 1024px) {
          .hex-center-dark { width: 160px; height: 185px; }
        }

        @media (max-width: 768px) {
           /* Smaller center hex when screen size is tighter */
           .hex-center-dark { width: 140px; height: 161px; } 
           .hex-center-glow { filter: blur(35px); }
        }
      `}</style>
    </div>
  )
}