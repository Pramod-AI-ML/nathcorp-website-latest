"use client"
import Image from "next/image"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import CostSaving from "@/components/cost-saving"
import Testimonials from "@/components/testimonials"
// import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import MetaTags from "@/components/seo/meta-tags"
import { motion} from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OrganizationSchema } from "@/components/seo/schema-markup"
const LOCATIONS = [
  {
    name: "USA",
    imageSrc: "/images/USA.png",
    url: "/contact?location=usa",
    subtext: "North American Headquarters",
  },
  {
    name: "India",
    imageSrc: "/images/India.png",
    url: "/contact?location=india",
    subtext: "Asia-Pacific Development Hub",
  },
  {
    name: "UAE",
    imageSrc: "/images/UAE.png",
    url: "/contact?location=dubai",
    subtext: "Middle East Regional Office",
  },
]
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="NathCorp - Modern Deployment & Cloud Migration Solutions"
        description="NathCorp provides modern deployment solutions, cloud migration services, and IT consulting to help businesses thrive in the digital age. Cost effective, safe & personalized."
        keywords="modern deployment, cloud migration, EZ Migrate, Pro-Work Portfolio, cost saving, IT solutions"
        canonicalUrl="/"
      />

      <OrganizationSchema
        name="NathCorp"
        url="https://nathcorp.com"
        logo="https://nathcorp.com/logo.png"
        description="Leading provider of modern deployment and cloud migration solutions"
        sameAs={[
          "https://twitter.com/nathcorp",
          "https://linkedin.com/company/nathcorp",
          "https://facebook.com/nathcorp",
        ]}
      />

      <main className="min-h-screen">
        <Navbar forceSolid />
        <Hero />
        <Services />
        <Portfolio />
        <CostSaving />
        <Testimonials />
        {/* <CallToAction /> */}
        
        {/* --- PREMIUM GLOBAL PRESENCE SECTION --- */}
        <section className="py-24 relative bg-gray-900 text-white overflow-hidden" id="global-presence">
          {/* Animated Background Blobs and Gradient Overlay */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Darker, more intense overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950/70 to-purple-900/70 opacity-95"></div>
            
            {/* Blue Blob - Adjusted size and intensity */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-[120px] animate-pulse delay-200"></div>
            {/* Purple Blob - Adjusted size and intensity */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[120px] animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-px w-8 bg-blue-400" />
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">
                  Global Operations
                </span>
                <span className="h-px w-8 bg-blue-400" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">
                Global Vision,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
               Regional Excellence
              </span>
            </motion.h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-16 font-light">
              We operate from key strategic locations across the globe, ensuring personalized service, reduced latency, and expertise tailored to regional compliance.
            </p>

            {/* Location Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
              {LOCATIONS.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.08, y: -12, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative group block rounded-3xl p-1 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/80 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.5)]"
                >
                  <Link href={location.url} className="block h-full">
                    {/* Inner Content Card (Glassmorphism Effect) */}
                    <div className="flex flex-col items-center p-8 bg-gray-900/90 backdrop-blur-xl rounded-[22px] h-full transition-colors duration-300 group-hover:bg-gray-800/95">
                      
                      {/* Flag Image - Kept original size w-24 h-24 */}
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl mb-6 transform transition-transform duration-500 group-hover:scale-100 group-hover:shadow-white/40">
                        <Image
                          src={location.imageSrc}
                          alt={`${location.name} flag`}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      {/* Location Name - Kept original text size */}
                      <h3 className="text-lg font-semibold text-white tracking-wide mb-2">
                        {location.name}
                      </h3>
                      
                      {/* Subtext - Kept original text size */}
                      <p className="text-sm text-gray-400 font-medium">
                        {location.subtext}
                      </p>

                      {/* CTA Indicator */}
                      <div className="mt-6 flex items-center text-sm font-medium text-blue-300 group-hover:text-yellow-400 transition-colors">
                        Contact Local Team
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <Link href="/contact">
                <button className="px-8 py-3 text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full shadow-lg hover:shadow-xl transition">
                  Explore All Global Offices
                </button>
              </Link>
            </motion.div> */}
          </div>
        </section>
        {/* --- PREMIUM GLOBAL PRESENCE SECTION END --- */}
        <Footer />
      </main>
    </ThemeProvider>
  )
}
