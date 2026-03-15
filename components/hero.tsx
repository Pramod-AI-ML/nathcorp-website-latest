// "use client";

// import React, { useEffect, useState, useRef, forwardRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight, ChevronDown } from "lucide-react";

// const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
//   (props, ref) => (
//     <button
//       ref={ref}
//       {...props}
//       className={`rounded-full ${props.className || ""}`}
//     >
//       {props.children}
//     </button>
//   )
// );
// Button.displayName = "Button";

// const MotionButton = motion(Button);

// // --- 3D PARTICLE GLOBE COMPONENT (unchanged) ---
// const ParticleGlobe = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     let animationFrameId: number;
//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     const getGlobeRadius = (w: number, h: number) => {
//       const baseSize = Math.min(w, h);
//       if (w > 1024) return baseSize * 0.45;
//       if (w > 768) return baseSize * 0.5;
//       return baseSize * 0.7;
//     };

//     const CORE_PARTICLE_COUNT = 700;
//     const ATMOSPHERE_PARTICLE_COUNT = 300;
//     let GLOBE_RADIUS = getGlobeRadius(width, height);

//     let targetRotationX = 0;
//     let targetRotationY = 0;
//     let rotationX = 0;
//     let rotationY = 0;

//     const CAMERA_DISTANCE = 800;

//     const random = (min: number, max: number) =>
//       Math.random() * (max - min) + min;

//     type Particle = {
//       type: "core" | "atmosphere";
//       x: number;
//       y: number;
//       z: number;
//       size: number;
//       color: string;
//       baseRadius: number;
//       speedOffset: number;
//       x2d?: number;
//       y2d?: number;
//       scale?: number;
//     };

//     const particles: Particle[] = [];

//     const initializeParticles = (
//       radiusScale: number,
//       count: number,
//       type: "core" | "atmosphere",
//       color: string[] | string,
//       sizeRange: [number, number],
//       speedRange: [number, number]
//     ) => {
//       for (let i = 0; i < count; i++) {
//         const theta = Math.random() * 2 * Math.PI;
//         const phi = Math.acos(Math.random() * 2 - 1);
//         const radius = GLOBE_RADIUS * radiusScale;

//         particles.push({
//           type,
//           x: radius * Math.sin(phi) * Math.cos(theta),
//           y: radius * Math.sin(phi) * Math.sin(theta),
//           z: radius * Math.cos(phi),
//           size: random(sizeRange[0], sizeRange[1]),
//           color: Array.isArray(color)
//             ? color[Math.floor(Math.random() * color.length)]
//             : color,
//           baseRadius: radius,
//           speedOffset: random(speedRange[0], speedRange[1]),
//         });
//       }
//     };

//     initializeParticles(1, CORE_PARTICLE_COUNT, "core", ["#A5B4FC", "#6366F1"], [0.5, 2.0], [0.9, 1.1]);
//     initializeParticles(random(1, 2.2), ATMOSPHERE_PARTICLE_COUNT, "atmosphere", "#3B82F6", [0.2, 1.2], [0.5, 0.8]);

//     const handleResize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       canvas.width = width;
//       canvas.height = height;
//       const oldRadius = GLOBE_RADIUS;
//       GLOBE_RADIUS = getGlobeRadius(width, height);
//       const scaleFactor = GLOBE_RADIUS / oldRadius;
//       particles.forEach((p) => {
//         p.x *= scaleFactor;
//         p.y *= scaleFactor;
//         p.z *= scaleFactor;
//         p.baseRadius *= scaleFactor;
//       });
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       const relX = e.clientX - rect.left - width / 2;
//       const relY = e.clientY - rect.top - height / 2;
//       targetRotationY = relX * 0.0003;
//       targetRotationX = relY * 0.0003;
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
//     handleResize();

//     const render = () => {
//       ctx.clearRect(0, 0, width, height);

//       rotationX += (targetRotationX - rotationX) * 0.05;
//       rotationY += (targetRotationY - rotationY) * 0.05;

//       const time = Date.now() * 0.0002;
//       const currentRotationY = rotationY + time;
//       const currentRotationX = rotationX + Math.sin(time * 0.5) * 0.1;

//       const isDesktop = width > 1024;
//       const centerX = isDesktop ? width * 0.7 : width * 0.5;
//       const centerY = isDesktop ? height * 0.55 : height * 0.7;

//       const projectedParticles = particles
//         .map((p) => {
//           const layerRotY = currentRotationY * p.speedOffset;
//           const layerRotX = currentRotationX * p.speedOffset;

//           const x1 = p.x * Math.cos(layerRotY) - p.z * Math.sin(layerRotY);
//           const z1 = p.z * Math.cos(layerRotY) + p.x * Math.sin(layerRotY);

//           const y1 = p.y * Math.cos(layerRotX) - z1 * Math.sin(layerRotX);
//           const z2 = z1 * Math.cos(layerRotX) + p.y * Math.sin(layerRotX);

//           const denominator = CAMERA_DISTANCE + z2;
//           const scale = denominator > 0 ? CAMERA_DISTANCE / denominator : 0;

//           const x2d = x1 * scale + centerX;
//           const y2d = y1 * scale + centerY;

//           return { ...p, x2d, y2d, scale, z: z2 };
//         })
//         .filter((p) => (p.scale ?? 0) > 0)
//         .sort((a, b) => (a.z ?? 0) - (b.z ?? 0));

//       ctx.lineWidth = 0.5;
//       ctx.strokeStyle = "rgba(99, 102, 241, 0.08)";
//       for (let i = 0; i < projectedParticles.length; i++) {
//         const p1 = projectedParticles[i];
//         if (p1.type === "atmosphere" || (p1.z ?? 0) < -GLOBE_RADIUS * 0.5) continue;

//         for (let j = i + 1; j < Math.min(i + 20, projectedParticles.length); j++) {
//           const p2 = projectedParticles[j];
//           if (p2.type === "atmosphere") continue;
//           const dx = (p1.x2d ?? 0) - (p2.x2d ?? 0);
//           const dy = (p1.y2d ?? 0) - (p2.y2d ?? 0);
//           const distSq = dx * dx + dy * dy;
//           if (distSq < 3600) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x2d!, p1.y2d!);
//             ctx.lineTo(p2.x2d!, p2.y2d!);
//             ctx.stroke();
//           }
//         }
//       }

//       projectedParticles.forEach((p) => {
//         const scale = p.scale ?? 0;
//         const depthAlpha = Math.max(0.1, (scale - 0.2) * 1.5);
//         const edgeAlpha = p.type === "atmosphere" ? 0.4 : 1;
//         ctx.beginPath();
//         const radius = (p.size ?? 1) * scale;
//         ctx.arc(p.x2d!, p.y2d!, radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = depthAlpha * edgeAlpha;

//         if (p.type === "core" && p.size * scale > 2) {
//           ctx.shadowBlur = 15 * scale;
//           ctx.shadowColor = "#6366F1";
//         } else if (p.type === "atmosphere") {
//           ctx.shadowBlur = 20 * scale;
//           ctx.shadowColor = "rgba(59, 130, 246, 0.3)";
//         } else {
//           ctx.shadowBlur = 0;
//         }

//         ctx.fill();
//         ctx.shadowBlur = 0;
//       });

//       ctx.globalAlpha = 1;
//       animationFrameId = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 z-10 pointer-events-none"
//     />
//   );
// };
// // --- END PARTICLE GLOBE ---

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
//   const [showClickAnimation, setShowClickAnimation] = useState(false);
//   const heroRef = useRef<HTMLElement | null>(null);
//   const { scrollY } = useScroll();

//   const y2 = useTransform(scrollY, [0, 500], [0, -150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   useEffect(() => setIsVisible(true), []);

//   const scrollToContent = () => {
//     window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
//   };

//   const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setClickPosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     setShowClickAnimation(true);
//     setTimeout(() => setShowClickAnimation(false), 700);
//   };

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen overflow-hidden text-white font-inter bg-[#0D1117] pt-24 md:pt-28"
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-[#141A25]">
//         <ParticleGlobe />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.25),_transparent_60%)] pointer-events-none" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />
//       </div>

//       {/* Decorative lights */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />
//         <motion.div
//           className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-white/5 blur-3xl"
//           animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
//           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//           style={{ y: y2 }}
//         />
//       </div>

//       {/* MAIN CONTENT */}
//       <motion.div
//         className="relative z-30 flex flex-col min-h-[calc(100vh-6rem)]"
//         style={{ opacity }}
//       >
//         <div className="container mx-auto px-4 flex-1 flex items-center justify-center text-center">
//           <div className="flex flex-col items-center max-w-4xl mx-auto">
//             {/* Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="
//     font-bold mb-6 tracking-tight text-white
//     text-2xl sm:text-3xl md:text-4xl lg:text-5xl
//     leading-snug   /* was leading-tight */
//   "
//             >
//               <span className="block md:whitespace-nowrap">
//                 Transform Your Business with
//               </span>

//               <span
//                 className="
//       mt-2 md:mt-3 block
//       text-transparent bg-clip-text
//       bg-gradient-to-r from-blue-300 to-indigo-300
//       pb-2          /* extra space so letters aren't clipped */
//     "
//               >
//                 Microsoft Copilot
//               </span>
//             </motion.h1>


//             {/* Subtext */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl"
//             >
//               Work smarter with AI-powered intelligence. Automate tasks, unlock insights,
//               and drive innovation across your entire organization.
//             </motion.p>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//               className="flex justify-center"
//             >
//               <MotionButton
//                 onClick={handleButtonClick}
//                 whileHover={{ scale: 1.08 }}
//                 whileTap={{ scale: 0.96 }}
//                 animate={{ scale: [1, 1.02, 1] }}
//                 transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
//                 className="group relative rounded-full bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700
//                            px-10 py-5 text-lg font-semibold text-white shadow-xl ring-2 ring-transparent
//                            hover:ring-white/40 transition-all duration-300 overflow-hidden h-auto cursor-pointer"
//               >
//                 <a href="/services/copilot-services" className="relative z-20 flex items-center text-white">
//                   Learn More
//                   <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
//                 </a>
//                 {showClickAnimation && (
//                   <motion.span
//                     className="absolute bg-white/30 rounded-full pointer-events-none"
//                     initial={{ opacity: 0.8, scale: 0 }}
//                     animate={{ opacity: 0, scale: 5 }}
//                     transition={{ duration: 0.7 }}
//                     style={{
//                       left: clickPosition.x,
//                       top: clickPosition.y,
//                       width: "10px",
//                       height: "10px",
//                       transformOrigin: "center center",
//                     }}
//                   />
//                 )}
//               </MotionButton>
//             </motion.div>

//             {/* Scroll indicator – always below button, never overlapping */}
//             <motion.button
//               onClick={scrollToContent}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="mt-8 sm:mt-10 flex flex-col items-center text-blue-200/70 hover:text-white
//                          transition-colors duration-300"
//             >
//               <motion.div
//                 animate={{ y: [0, 5, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 <ChevronDown className="h-8 w-6" />
//               </motion.div>
//               <span className="mt-2 text-xs sm:text-sm text-blue-200/80 font-medium tracking-wide select-none">
//                 Scroll to explore more
//               </span>
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#141A25] to-transparent z-20" />
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button
      ref={ref}
      {...props}
      className={`rounded-full ${props.className || ""}`}
    >
      {props.children}
    </button>
  )
);
Button.displayName = "Button";

const MotionButton = motion(Button);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showClickAnimation, setShowClickAnimation] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();

  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => setIsVisible(true), []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowClickAnimation(true);
    setTimeout(() => setShowClickAnimation(false), 700);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden text-white font-inter bg-[#0D1117] pt-24 md:pt-28"
    >
      {/* VIDEO BACKGROUND CONTAINER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onLoadStart={() => {
            // Optional: Show loading state
          }}
          onCanPlayThrough={(e) => {
            // Ensure video plays immediately when fully buffered
            const video = e.currentTarget;
            video.play().catch(() => {
              // Fallback if autoplay fails
              console.log('Autoplay prevented, video ready for user interaction');
            });
          }}
          onWaiting={() => {
            // Optional: Handle buffering state
          }}
          onPlaying={() => {
            // Optional: Hide loading state when playing
          }}
        >
          {/* <source src="/images/HeroVideo.mp4" type="video/mp4" /> */}
          <source src="/images/HeroVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* OVERLAYS FOR READABILITY */}
        <div className="absolute inset-0 bg-[#0D1117]/60 z-10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D1117]/80 via-transparent to-[#141A25]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.25),_transparent_60%)] pointer-events-none" />
        {/* <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" /> */}
      </div>

      {/* Decorative lights */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />
        <motion.div
          className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ y: y2 }}
        />
      </div>

      {/* MAIN CONTENT - Set to z-30 to be above the bottom fade overlay but below navbar */}
      <motion.div
        className="relative z-30 flex flex-col min-h-[calc(100vh-6rem)]"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4 flex-1 flex items-center justify-center text-center">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-bold mb-6 tracking-tight text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug"
            >
              <span className="block md:whitespace-nowrap">
                Transform Your Business with
              </span>
              <span className="mt-2 md:mt-3 block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 pb-2">
                Microsoft Copilot
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl"
            >
              Work smarter with AI-powered intelligence. Automate tasks, unlock insights,
              and drive innovation across your entire organization.
            </motion.p>

            {/* CTA Button - Improved clickable wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <a href="/services/copilot-services" className="block outline-none">
                <MotionButton
                  onClick={handleButtonClick}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                  className="group relative rounded-full bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700
                             px-10 py-5 text-lg font-semibold text-white shadow-xl ring-2 ring-transparent
                             hover:ring-white/40 transition-all duration-300 overflow-hidden h-auto cursor-pointer"
                >
                  <span className="relative z-20 flex items-center text-white pointer-events-none">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                  {showClickAnimation && (
                    <motion.span
                      className="absolute bg-white/30 rounded-full pointer-events-none"
                      initial={{ opacity: 0.8, scale: 0 }}
                      animate={{ opacity: 0, scale: 5 }}
                      transition={{ duration: 0.7 }}
                      style={{
                        left: clickPosition.x,
                        top: clickPosition.y,
                        width: "10px",
                        height: "10px",
                        transformOrigin: "center center",
                      }}
                    />
                  )}
                </MotionButton>
              </a>
            </motion.div>

            {/* Scroll indicator - Visible with higher z-index */}
            <motion.button
              onClick={scrollToContent}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 sm:mt-10 flex flex-col items-center text-blue-100 hover:text-white
                         transition-colors duration-300 cursor-pointer relative z-50"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-8 w-6" />
              </motion.div>
              <span className="mt-2 text-xs sm:text-sm text-slate-100 font-medium tracking-wide select-none">
                Scroll to explore more
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* bottom fade - Keep at z-20 so it stays below the content */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#141A25] to-transparent z-20" />
    </section>
  );
}