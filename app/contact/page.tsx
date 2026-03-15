"use client"

import type React from "react"
import { useState, useEffect, Suspense, lazy } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Globe, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import MetaTags from "@/components/seo/meta-tags"
import { motion } from "framer-motion"

// Lazy load heavy components
const WorldMap = lazy(() => import("@/components/world-map"))
const ContactForm = lazy(() => import("@/components/contact-form"))

const locations = {
 
  usa: [
    {
      city: "Irvine",
      country: "USA",
      address: "1 Park Plaza, Suite 930, Irvine, CA 92614",
      phone: "(949) 522-6902",
      email: "hritik.nath@nathcorp.com",
      timezone: "PST (UTC-8)",
      flag: "/images/USA.png",
      gradient: "from-blue-600 to-red-600",
    },
  ],
   india: [
    {
      city: "Ranchi",
      country: "India",
      address: "214/C Road No.1, Ashok Nagar, Ranchi, Jharkhand 834002",
      phone: "+91-8355949815",
      email: "hritik.nath@nathcorp.com",
      timezone: "IST (UTC+5:30)",
      flag: "/images/India.png",
      gradient: "from-orange-500 to-green-600",
    },
  ],
  dubai: [
    {
      city: "Dubai",
      country: "UAE",
      address: "IFZA Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
      phone: "+971-52-676-5057",
      email: "hritik.nath@nathcorp.com",
      timezone: "GST (UTC+4)",
      flag: "/images/UAE.png",
      gradient: "from-red-600 to-green-600",
    },
  ],
}

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  useEffect(() => {
    const locationParam = searchParams?.get("location")
    if (locationParam && (locationParam === "india" || locationParam === "dubai" || locationParam === "usa")) {
      setSelectedLocation(locationParam)
    }
  }, [searchParams])

  const getDisplayedLocations = () => {
    if (selectedLocation === "all") {
      return [...locations.usa,...locations.india,  ...locations.dubai]
    }
    return locations[selectedLocation as keyof typeof locations] || []
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Contact Us - Get in Touch with Our Global Team"
        description="Contact NathCorp offices in India, USA, and Dubai for digital transformation solutions, cloud migration services, and IT consulting. Our global team is ready to help."
        keywords="contact NathCorp, IT services contact India USA Dubai, technology consulting global, get in touch, request consultation"
        canonicalUrl="/contact"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Contact Us"
          subtitle="Connect with our global team across USA, India, and UAE"
          backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
        />

        {/* World Map Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2 py-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent leading-tight md:leading-[1.15]">
                Serving Clients Across the Globe
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                NathCorp proudly delivers digital transformation and IT solutions to clients in 15+ countries. Explore our global client footprint on the map below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }>
                <WorldMap />
              </Suspense>
            </motion.div>
          </div>
        </section>

        {/* Location Filter */}
        {/* <section className="py-12 bg-gradient-to-r from-blue-50 to-gold-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-slate-800 text-center">Our Global Presence:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => setSelectedLocation("all")}
                  variant={selectedLocation === "all" ? "default" : "outline"}
                  className="rounded-full text-sm px-4 py-2"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  All Locations
                </Button>
               
                <Button
                  onClick={() => setSelectedLocation("usa")}
                  variant={selectedLocation === "usa" ? "default" : "outline"}
                  className="rounded-full text-sm px-4 py-2 flex items-center gap-2"
                >
                  <img src="/images/USA.png" alt="USA flag" className="w-5 h-auto" />
                  USA
                </Button>
                 <Button
                  onClick={() => setSelectedLocation("india")}
                  variant={selectedLocation === "india" ? "default" : "outline"}
                  className="rounded-full text-sm px-4 py-2 flex items-center gap-2"
                >
                  <img src="/images/India.png" alt="India flag" className="w-5 h-auto" />
                  India
                </Button>
                <Button
                  onClick={() => setSelectedLocation("dubai")}
                  variant={selectedLocation === "dubai" ? "default" : "outline"}
                  className="rounded-full text-sm px-4 py-2 flex items-center gap-2"
                >
                  <img src="/images/UAE.png" alt="UAE flag" className="w-5 h-auto" />
                  UAE
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Office Locations */}
     <section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
        Our Global Offices
      </h2>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Choose your nearest office for personalized support and consultation.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
      {getDisplayedLocations().map((location, index) => (
        <motion.div
          key={`${location.city}-${location.country}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/95 shadow-[0_18px_55px_rgba(15,23,42,0.9)] transition-all duration-300">
            {/* Glow on hover */}
            <div
              className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${location.gradient} blur-3xl`}
            />

            {/* Thin gradient top line */}
            <div className={`relative h-1 bg-gradient-to-r ${location.gradient}`} />

            <CardContent className="relative z-10 p-8">
              {/* Header row */}
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                      {location.country}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-50 mb-1">
                    {location.city}
                  </h3>
                  <p className="text-sm text-slate-400">{location.timezone}</p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/90 shadow-inner shadow-slate-900/60 overflow-hidden">
                    <img 
                      src={location.flag} 
                      alt={`${location.country} flag`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Address & contact */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500/15 border border-sky-500/40">
                    <MapPin className="h-4 w-4 text-sky-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/40">
                    <Phone className="h-4 w-4 text-emerald-400" />
                  </div>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-slate-200 hover:text-emerald-300 font-medium transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/40">
                    <Mail className="h-4 w-4 text-indigo-300" />
                  </div>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-slate-200 hover:text-indigo-300 break-all transition-colors"
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              {/* Footer row */}
              <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex flex-col text-[11px] text-slate-400">
                  <span className="uppercase tracking-[0.18em] text-slate-500">
                    Office Tag
                  </span>
                  <span className="font-medium text-slate-200">
                    {location.city}, {location.country}
                  </span>
                </div>
                {/* <Button
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-5 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(37,99,235,0.55)]"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredLocation: `${location.city}, ${location.country}`,
                    }))
                  }
                >
                  <span className="relative z-10">Contact This Office</span>
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20" />
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>


            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <p className="mb-8">Fill out the form and our team will be in touch within 24 hours. </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Globe className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Global Presence</h4>
                          <p className="text-blue-100">Operations in India, USA & UAE</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">24/7 Support</h4>
                          <p className="text-blue-100">Round-the-clock assistance</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Quick Response</h4>
                          <p className="text-blue-100">Responses within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8" id="contact-form">
                    <h3 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h3>

                    <Suspense fallback={
                      <div className="flex items-center justify-center min-h-[300px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    }>
                      <ContactForm />
                    </Suspense>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
