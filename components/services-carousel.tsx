"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: "ai-1",
    image: "/images/AI-1.png",
    title: "AI Solutions",
    subtitle: "Transform Your Business",
    description: "Powered by Artificial Intelligence",
    color: "from-purple-700 to-blue-600",
  },
  {
    id: "ai-2",
    image: "/images/AI-2.png",
    title: "AI Innovation",
    subtitle: "Next-Gen Technology",
    description: "Smart. Efficient. Automated.",
    color: "from-indigo-700 to-purple-600",
  },
  {
    id: "ai-3",
    image: "/images/AI-3.png",
    title: "AI Excellence",
    subtitle: "Drive Growth with AI",
    description: "Intelligent. Scalable. Reliable.",
    color: "from-blue-800 to-indigo-700",
  },
  {
    id: "modern-deployment",
    image: "/images/deployment.jpg",
    title: "Modern Deployment",
    subtitle: "Why wait to migrate?",
    description: "Cost effective, safe & personalized",
    color: "from-blue-700 to-blue-500",
  },
  {
    id: "active-directory",
    image: "/images/active-directory-hero.jpg",
    title: "Active Directory",
    subtitle: "Excellent Work Environment",
    description: "The best of both worlds",
    color: "from-blue-900 to-blue-700",
  },
  {
    id: "security",
    image: "/images/Security.png",
    title: "Security",
    subtitle: "Protect what's important",
    description: "Simple. Safe. Secure.",
    color: "from-blue-950 to-blue-900",
  },
  {
    id: "cloud-enablement",
    image: "/images/cloud-slide.jpg",
    title: "Cloud Enablement",
    subtitle: "Migrate to the cloud",
    description: "Securely. Cost Effectively.",
    color: "from-blue-800 to-blue-600",
  },
  
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [])

  const handlePrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [])

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, handleNext])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className={`relative w-full h-full bg-gradient-to-r ${slides[currentIndex].color}`}>
            <Image
              src={slides[currentIndex].image || "/placeholder.svg"}
              alt={slides[currentIndex].title}
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-2 inline-block"
                  >
                    <span className="text-blue-300 text-xl md:text-2xl font-light tracking-wider">
                      {slides[currentIndex].title}
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  >
                    {slides[currentIndex].subtitle}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-blue-100 mb-8"
                  >
                    {slides[currentIndex].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {/* <Button
                      size="lg"
                      className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg"
                    >
                      LEARN MORE
                    </Button> */}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
        <Button
          onClick={handlePrevious}
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
