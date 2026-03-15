"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import ContactFormModal from "@/components/contact-form-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote, ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import MetaTags from "@/components/seo/meta-tags"

const industries = ["All", "Finance", "Healthcare", "Technology", "Manufacturing", "Retail"]

const testimonials = [
  {
    quote:
      "NathCorp's cloud migration services transformed our business operations. Their team's expertise and dedication made the transition seamless and efficient. We've seen a 40% reduction in IT costs and significant improvements in system performance.",
    name: "Sarah Johnson",
    title: "CTO, Global Finance Corp",
    industry: "Finance",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-blue-600 to-blue-400",
  },
  {
    quote:
      "Working with NathCorp has been a game-changer for our digital transformation journey. Their innovative solutions and strategic guidance have accelerated our growth and helped us stay ahead of the competition.",
    name: "Michael Chen",
    title: "CEO, TechNova",
    industry: "Technology",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-purple-600 to-purple-400",
  },
  {
    quote:
      "The security infrastructure implemented by NathCorp has given us peace of mind and protected our sensitive patient data. Their ongoing support is exceptional and their team is always responsive to our needs.",
    name: "Emily Rodriguez",
    title: "CISO, HealthPlus Systems",
    industry: "Healthcare",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-green-600 to-green-400",
  },
  {
    quote:
      "NathCorp's data management solutions have revolutionized how we leverage our information assets. The insights we've gained have driven significant business value and helped us make better strategic decisions.",
    name: "David Wilson",
    title: "Data Director, ManuCraft Industries",
    industry: "Manufacturing",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-amber-600 to-amber-400",
  },
  {
    quote:
      "The Pro-Work Portfolio implementation has transformed how our teams collaborate. We've seen a 30% increase in productivity and our project delivery times have improved dramatically.",
    name: "Jennifer Lee",
    title: "Operations Director, RetailGiant",
    industry: "Retail",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-red-600 to-red-400",
  },
  {
    quote:
      "NathCorp's Active Directory services have streamlined our identity management across our hybrid environment. The implementation was smooth and the ongoing support has been excellent.",
    name: "Robert Taylor",
    title: "IT Director, FinServe Solutions",
    industry: "Finance",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-blue-600 to-blue-400",
  },
  {
    quote:
      "The SecureShield platform has dramatically improved our security posture. We've reduced security incidents by 75% and our compliance reporting is now automated and comprehensive.",
    name: "Amanda Garcia",
    title: "Security Manager, MedTech Innovations",
    industry: "Healthcare",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-green-600 to-green-400",
  },
  {
    quote:
      "NathCorp's Modern Deployment solution has transformed our release process. We've reduced deployment time from days to hours and virtually eliminated deployment-related issues.",
    name: "Jason Kim",
    title: "DevOps Lead, TechSphere",
    industry: "Technology",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
    color: "from-purple-600 to-purple-400",
  },
]

const featuredTestimonials = [
  {
    quote:
      "NathCorp has been an invaluable partner in our digital transformation journey. Their expertise in cloud migration and security has helped us modernize our infrastructure while maintaining the highest levels of data protection.",
    name: "Elizabeth Morgan",
    title: "CIO, Global Financial Services",
    industry: "Finance",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    quote:
      "The implementation of EZ Migrate exceeded our expectations. What we anticipated would be a complex, months-long project was completed efficiently in weeks with minimal disruption to our operations.",
    name: "Thomas Wright",
    title: "VP of Technology, Healthcare Systems Inc.",
    industry: "Healthcare",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    quote:
      "NathCorp's cloud solutions have revolutionized our IT infrastructure. Their team's expertise and proactive approach have made them an invaluable partner in our digital transformation journey.",
    name: "Jennifer Adams",
    title: "CTO, Retail Innovations Group",
    industry: "Retail",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const videoTestimonials = [
  {
    title: "How NathCorp Transformed Our Security Posture",
    company: "TechNova",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Our Cloud Migration Success Story",
    company: "Global Finance Corp",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Improving Collaboration with Pro-Work Portfolio",
    company: "HealthPlus Systems",
    thumbnail: "/placeholder.svg?height=300&width=500",
  },
]

export default function TestimonialsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const featuredRef = useRef(null)
  const testimonialsRef = useRef(null)
  const videoRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const videoInView = useInView(videoRef, { once: true, amount: 0.2 })

  const filteredTestimonials =
    selectedIndustry === "All" ? testimonials : testimonials.filter((t) => t.industry === selectedIndustry)

  // Autoplay for featured testimonials carousel
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, featuredTestimonials.length, activeIndex])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const prevSlide = () => {
    setAutoplay(false)
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? featuredTestimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setAutoplay(false)
    setDirection(1)
    setActiveIndex((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1))
  }

  const slideVariants = {
    hidden: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        scale: 0.8,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
        },
      }
    },
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Client Testimonials - Success Stories"
        description="Discover  about NathCorp's services and solutions. Read success stories and testimonials from businesses across various industries."
        keywords="NathCorp testimonials, client success stories, customer reviews, business transformation, digital solutions feedback"
        canonicalUrl="/testimonials"
      />

      <main className="min-h-screen overflow-hidden">
        <Navbar />

        {/* Hero Section with background image */}
        <section className="relative pt-32 pb-20 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="/images/testimonial.png"
              alt="Testimonials Hero Background"
              className="w-full h-full object-cover object-center opacity-60"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
              draggable="false"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
              <p className="text-xl text-blue-100 mb-8">Hear from businesses that have transformed with our solutions</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20"></div>
        </section>

        {/* Featured Testimonials - Animated Carousel */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden" ref={featuredRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              {/* <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Success Stories
              </span> */}
              <h2 className="text-4xl font-bold mb-4 text-slate-800 luxury-text-gradient">Featured Success Stories</h2>
              <p className="text-xl text-slate-600">
                Transformative results from our partnership with industry leaders
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                {isMounted && (
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-full"
                    >
                      <Card className="glass-card border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                            <div className="relative h-64 md:h-auto">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 mix-blend-overlay z-10"></div>
                              <Image
                                src={featuredTestimonials[activeIndex].image || "/placeholder.svg"}
                                alt={featuredTestimonials[activeIndex].name}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"></div>
                            </div>
                            <div className="p-8 flex flex-col justify-center relative overflow-hidden">
                              <div className="absolute -right-4 top-4 opacity-10 text-blue-300">
                                <Quote size={120} />
                              </div>
                              <Badge variant="outline" className="mb-4 w-fit border-blue-300 text-blue-700">
                                {featuredTestimonials[activeIndex].industry}
                              </Badge>
                              <p className="text-slate-700 italic mb-6 text-lg relative z-10">
                                "{featuredTestimonials[activeIndex].quote}"
                              </p>
                              <div className="mt-auto relative z-10">
                                <h3 className="font-bold text-slate-800 text-lg">
                                  {featuredTestimonials[activeIndex].name}
                                </h3>
                                <p className="text-blue-600">{featuredTestimonials[activeIndex].title}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-8 z-20">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm border border-blue-100 hover:bg-blue-50 text-blue-700 shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-8 z-20">
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm border border-blue-100 hover:bg-blue-50 text-blue-700 shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-5 flex justify-center space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      activeIndex === index ? "w-8 bg-blue-600" : "w-2 bg-blue-200"
                    }`}
                    onClick={() => {
                      setAutoplay(false)
                      setDirection(index > activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Background Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl -z-10"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl -z-10"
          />
        </section>

        {/* Client Testimonials - Redesigned Elegant Layout */}
        <section
          className="py-20 bg-gradient-to-br from-slate-50 to-white text-slate-800 overflow-hidden"
          ref={testimonialsRef}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Client Feedback
              </span>
              <h2 className="text-4xl font-bold mb-4 text-slate-800 luxury-text-gradient">What Our Clients Say</h2>
              <p className="text-xl text-slate-600">Trusted by leading organizations across industries</p>
            </motion.div>

            <Tabs defaultValue="All" className="w-full" onValueChange={(value) => setSelectedIndustry(value)}>
              <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
                <TabsList className="bg-slate-100/80 backdrop-blur-sm p-1 rounded-full border border-slate-200">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry}
                      value={industry}
                      className="rounded-full px-6 py-2.5 text-sm data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-300"
                    >
                      {industry}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={selectedIndustry} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                        <CardContent className="p-0">
                          <div className={`h-2 w-full bg-gradient-to-r ${testimonial.color}`}></div>
                          <div className="p-6 flex flex-col h-full">
                            <div className="mb-6 flex justify-between items-center">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                ))}
                              </div>
                              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                                {testimonial.industry}
                              </Badge>
                            </div>

                            <Quote className="h-8 w-8 text-blue-200 mb-4" />
                            <p className="text-slate-700 italic flex-grow mb-6">{testimonial.quote}</p>

                            <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                                <Image
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                                <p className="text-sm text-slate-600">{testimonial.title}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Video Testimonials - 3D Interactive Cards */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800" ref={videoRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Video Stories
              </span>
              <h2 className="text-4xl font-bold mb-4 luxury-text-gradient">Video Testimonials</h2>
              <p className="text-xl text-slate-600">Watch our clients share their success stories</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                    z: 50,
                  }}
                  className="relative perspective-1000"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group transform-style-3d transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 transition-transform duration-300 shadow-glow"
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center animate-pulse-slow">
                          <Play className="w-5 h-5 text-white ml-1" fill="white" />
                        </div>
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-white font-bold text-lg group-hover:text-blue-100 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-blue-200">{video.company}</p>
                    </div>

                    {/* Reflection effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-slate-800 luxury-text-gradient">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8 text-slate-600">
                  Let's discuss how our solutions can transform your business.
                </p>
                <ContactFormModal
                  triggerText="Schedule a Consultation"
                  triggerClassName="luxury-button rounded-full px-8 py-6 text-white text-lg group"
                  serviceName="Testimonials Inquiry"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
