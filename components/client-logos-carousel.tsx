"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "3M", logo: "/images/3m-logo.png", width: 120, height: 60 },
  { name: "Hawaiian Airlines", logo: "/images/hawaiian-airlines-logo.png", width: 140, height: 60 },
  { name: "Technicolor", logo: "/images/technicolor-logo.png", width: 160, height: 60 },
  { name: "Toyota", logo: "/images/toyota-logo.png", width: 120, height: 60 },
  { name: "Allergan", logo: "/images/allergan-logo.png", width: 140, height: 60 },
  { name: "Intuit", logo: "/images/intuit-logo.png", width: 120, height: 60 },
  { name: "Hanson Spirits", logo: "/images/hanson-spirits-logo.png", width: 100, height: 60 },
  { name: "Sharp", logo: "/images/sharp-logo.png", width: 120, height: 60 },
  { name: "Universal Music Group", logo: "/images/universal-music-group-logo.png", width: 160, height: 60 },
  { name: "Zions Bank", logo: "/images/zions-bank-logo.png", width: 140, height: 60 },
  { name: "First Hawaiian Bank", logo: "/images/first-hawaiian-bank-logo.png", width: 160, height: 60 },
  { name: "Edwards", logo: "/images/edwards-logo.png", width: 120, height: 60 },
  { name: "Western Digital", logo: "/images/western-digital-logo.png", width: 160, height: 60 },
  { name: "AAA", logo: "/images/aaa-logo.png", width: 100, height: 60 },
  { name: "OCLC", logo: "/images/OCLC-logo.png", width: 120, height: 60 },
  { name: "SanDisk", logo: "/images/sandisk.png", width: 140, height: 60 },
  { name: "ASB", logo: "/images/ASB.png", width: 120, height: 60 },
  { name: "Bibliotheca", logo: "/images/bibliotheca.png", width: 160, height: 60 },
  { name: "CNHI", logo: "/images/CNHI.png", width: 120, height: 60 },
  { name: "HECO", logo: "/images/HECO.png", width: 120, height: 60 },
  { name: "Greendot", logo: "/images/GreenDot.png", width: 140, height: 60 },
  { name: "LA Fitness", logo: "/images/LA-Fitness.png", width: 140, height: 60 },
  { name: "LA County Sheriff Department", logo: "/images/LSD.png", width: 160, height: 60 },
  { name: "Loan Depot", logo: "/images/Loan-depot.png", width: 160, height: 60 },
  { name: "Mercury Insurance", logo: "/images/mercury.png", width: 160, height: 60 },
  { name: "Memorial Care", logo: "/images/momorialcare.png", width: 160, height: 60 },
  { name: "University of Washington", logo: "/images/UOW.png", width: 180, height: 60 },
]

export default function Portfolio() {

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const scrollStartX = useRef(0)
  const animationId = useRef<number>()
  const scrollPosition = useRef(0)
  const scrollSpeed = 0.5

  // Auto-scroll logic
  const animate = () => {
    if (!isDragging.current && scrollRef.current) {
      scrollPosition.current += scrollSpeed
      if (scrollPosition.current >= scrollRef.current.scrollWidth / 2) scrollPosition.current = 0
      scrollRef.current.scrollLeft = scrollPosition.current
    }
    animationId.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    scrollPosition.current = scrollContainer.scrollLeft
    animationId.current = requestAnimationFrame(animate)
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current)
    }
  }, [])

  // Drag logic
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX
    } else {
      dragStartX.current = e.clientX
    }
    if (scrollRef.current) {
      scrollStartX.current = scrollRef.current.scrollLeft
    }
    document.body.style.cursor = 'grabbing'
  }

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    let clientX = 0
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }
    const dx = dragStartX.current - clientX
    scrollRef.current.scrollLeft = scrollStartX.current + dx
    scrollPosition.current = scrollRef.current.scrollLeft
  }

  const onDragEnd = () => {
    isDragging.current = false
    document.body.style.cursor = ''
  }

  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
     <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {/* <span className="inline-block py-2 px-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Who We Do It For
              </span> */}
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Our Clients</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We partner with global enterprises, industry leaders, and innovative organizations to deliver technology
                excellence and drive digital transformation.
              </p>
            </motion.div>
    
            {/* Scrolling Logos */}
            <div className="relative mt-12">
              {/* Gradient Fade */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
    
              <div
                ref={scrollRef}
                className="flex gap-12 overflow-hidden whitespace-nowrap select-none"
                style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch", cursor: isDragging.current ? 'grabbing' : 'grab' }}
                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onTouchStart={onDragStart}
                onTouchMove={onDragMove}
                onTouchEnd={onDragEnd}
              >
                {duplicatedLogos.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-32 px-6 py-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative group">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={client.width}
                        height={client.height}
                        className="object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                        priority={index < 5}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-16"
            >
              {/* <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-6 text-lg group"
                asChild
              >
                <a href="/industries">
                  Explore Industries
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 inline" />
                </a>
              </Button> */}
            </motion.div>
          </div>
        </section>
  )
}
