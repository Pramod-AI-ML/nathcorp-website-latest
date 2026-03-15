"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MessageSquareQuote, Zap, Star } from "lucide-react"

// Define a helper function for the initial/avatar
const getClientInitial = (name: string) => {
  // Handles multi-word names for a two-letter initial if possible, otherwise uses the first letter.
  const parts = name.split(' ');
  if (parts.length > 1) {
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  }
  return name.charAt(0).toUpperCase()
}

// Map color classes to index for visual variation
const colorMap = [
  { text: "text-blue-600", bg: "bg-blue-500", shadow: "shadow-blue-500/30" },
  { text: "text-green-600", bg: "bg-green-500", shadow: "shadow-green-500/30" },
  { text: "text-purple-600", bg: "bg-purple-500", shadow: "shadow-purple-500/30" },
  { text: "text-orange-600", bg: "bg-orange-500", shadow: "shadow-orange-500/30" },
]

const testimonials = [
  {
    quote:
      "DocSync allows us to remove over 100 pounds of paper manuals from each of our aircraft saving fuel on every flight, and enables our pilots to dispose of their heavy flight bags; all while ensuring we remain in 100% compliance with FAA regulations regarding our flight manuals and the on-going updates required.",
    name: "Check Airman",
    title: "Major Airline",
  },
  {
    quote:
      "Thanks for your team’s prompt and determined response to this issue. It speaks well of NathCorp and its relationship with our airline.",
    name: "VP, Flight Operations",
    title: "Major Airline",
  },
  {
    quote:
      "Nathcorp provided a very detail oriented project manager and project team to provide oversight and ensure that Nathcorp’s resources properly aligned with our internal IT resources. Their collaborative approach allowed us to complete our pilot within scope and within the agreed upon timeframe.",
    name: "Terolyn Phinsee",
    title: "Technical Project Manager",
  },
  {
    quote:
    "I can say that all of my expectations were achieved and my compliments to the team at NathCorp for a professional engagement.",
    name: "David Damery",
    title: "Director of IT, Allergan",
  },
]

// Component for the Quote Card with Hover Effects (Modern styling preserved, text size and footer layout preserved)
const TestimonialCard = ({ testimonial, index }) => {
  const color = colorMap[index % colorMap.length]

  // Animation variants for card entry
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      y: -5, 
      boxShadow: `0 15px 30px -5px ${color.shadow}`, 
      transition: { duration: 0.3 } 
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full p-1"
    >
      {/* Card styling retains modern hover and border effects */}
      <Card className={`border-2 border-slate-200/50 h-full transition-all duration-300 relative overflow-hidden group hover:border-transparent`}>
        {/* Subtle Gradient Border Effect on Hover */}
        <div 
          className={`absolute inset-0 border-4 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ backgroundImage: `linear-gradient(to right, ${color.text.replace('text', 'var')}, #fff0)` }}
        ></div>

        <CardContent className="p-8 flex flex-col h-full relative z-10">
          
          {/* Rating and Quote Icon */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
            </div>
            <MessageSquareQuote className={`h-8 w-8 ${color.text} opacity-20`} />
          </div>
          
          {/* Quote Content (text size: text-xl font-medium for impact) */}
          <p className="text-xl text-slate-700 font-medium flex-grow mb-8 leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </p>
          
          {/* Client Info (Title before Name, size text-sm for title, text-lg for name) */}
          <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
            
            {/* Initial Placeholder (Avatar replacement) */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 font-bold text-xl text-white ${color.bg} shadow-md`}>
              {getClientInitial(testimonial.name)}
            </div>

            {/* Title before Name */}
            <div>
              <p className="text-sm text-slate-500 font-medium">{testimonial.title}</p> 
              <h4 className="font-extrabold text-slate-800 tracking-wide text-lg">{testimonial.name}</h4>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Main Testimonials Section Component
export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Variant for the header section
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden" ref={ref}>
      
      {/* Dynamic Background Element */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1/2 bg-blue-50/70"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        style={{ originY: 0 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center py-1.5 px-5 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4 shadow-md shadow-blue-500/40">
            <Zap className="h-4 w-4 mr-2" />
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
            Hear directly from the organizations we’ve helped achieve digital excellence and transformative results.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <Carousel
          opts={{
            align: "start",
            // 💡 Loop is already set to true for repeating cards
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              // Card size restored: two per row on medium, three on large
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Arrow placement restored: Centered below the carousel content */}
          <div className="flex justify-center mt-12">
            <CarouselPrevious className="mr-4 static translate-y-0 bg-white hover:bg-blue-50 border-blue-200" />
            <CarouselNext className="ml-4 static translate-y-0 bg-white hover:bg-blue-50 border-blue-200" />
          </div>

        </Carousel>
      </div>
    </section>
  )
}