"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useSpring } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Clock, Users, Shield, Zap } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { OrganizationSchema } from "@/components/seo/schema-markup"
import { Card, CardContent } from "@/components/ui/card"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Badge } from "@/components/ui/badge"


//commit to test



const timeline = [
  {
    year: "2007",
    title: "The Beginning",
    description:
      "NathCorp began its operations in India, delivering IT services to clients in the United States. Our early focus was on software development and application migration, including Windows Vista and Windows 7 modernization projects.",
  },
  {
    year: "2010",
    title: "Enterprise Growth",
    description:
      "We expanded into device and server management using Microsoft SCCM. During this phase, NathCorp onboarded major enterprise clients, including 3M Library, marking a significant milestone in our enterprise journey.",
  },
  {
    year: "2015",
    title: "Windows Migration Leadership",
    description:
      "As operating systems evolved, NathCorp led large-scale Windows deployments and migrations, supporting organizations in moving from Windows XP to Windows 7 and Windows 8 with minimal disruption.",
  },
  {
    year: "2020",
    title: "Cloud & Identity Modernization",
    description:
      "We accelerated into cloud and identity modernization, delivering solutions across cloud transformation, Active Directory modernization, on-premises to cloud synchronization, Windows 10 upgrades, and Windows 365 implementations for global clients such as AAA and Universal Music Group.",
  },
  {
    year: "2025",
    title: "UAE Expansion & Modern Workplace",
    description:
      "NathCorp expanded its footprint into the UAE, focusing on modern workplace and remote work solutions. Our offerings now include Azure Virtual Desktop and cloud-based collaboration solutions designed for a distributed, future-ready workforce.",
  },
]


const leadershipTeam = [
  {
    name: "Raj Nath", 
    title: "CEO",
    bio: "Driving innovation & global expansion — Raj Nath NathCorp's vision with a strong focus on customer success, operational excellence, and creating long-term value for every client.",
    image: "/images/raj-nath.png",
    achievements: [
        { icon: "Trophy", label: "18+ Years Leadership Experience" },
        { icon: "Globe", label: "Delivered 50+ Global Projects" },
    ],
    roleType: "CEO"
  },
  {
    name: "Sam Nath", 
    title: "Director of Finance/Corporate Ops Manager",
    bio: "Overseeing financial strategy and corporate operations — ensuring fiscal responsibility, operational efficiency, and strategic resource allocation across the organization.",
    image: "/images/Sam.png",
    achievements: [
        { icon: "CheckCircle", label: "Financial Excellence" },
        { icon: "Shield", label: "Strategic Operations" },
    ],
    roleType: "Director"
  },
  {
    name: "Bob Nath", 
    title: "Director - Deliver/Projects",
    bio: "Leads project delivery excellence across all verticals — ensuring that every engagement is executed with precision, quality, and zero compromise on timelines.",
    image: "/images/Bob.png",
    achievements: [
        { icon: "CheckCircle", label: "Zero Compromise Quality" },
        { icon: "Clock", label: "On-Time Delivery Expert" },
    ],
    roleType: "Director"
  },
  {
    name: "Chandan Omkar", 
    title: "Director of Technology/CTO",
    bio: "Architecting NathCorp's technology strategy — ensuring scalable, secure, and future-ready solutions for global customers. Brings innovation into every IT delivery.",
    image: "/images/Chandan.jpeg",
    achievements: [
        { icon: "Zap", label: "Certified Cloud Architect" },
        { icon: "Shield", label: "Security & Compliance Focus" },
    ],
    roleType: "Director"
  },
   {
    name: "Binit Sharma", 
    title: "Director of Program Management",
    bio: "Leading program management excellence — coordinating cross-functional teams and ensuring seamless execution of complex enterprise initiatives.",
    image: "/images/Binit.png",
    achievements: [
        { icon: "CheckCircle", label: "Program Excellence" },
        { icon: "Users", label: "Cross-Functional Leadership" },
    ],
    roleType: "Director"
  },
  {
    name: "Shraddha Agarwal", 
    title: "BizDev Manager",
    bio: "Strengthening relationships with enterprise clients and opening new global markets — focused on sustainable growth and exceptional customer experience.",
    image: "/images/Shraddha.png",
    achievements: [
        { icon: "Users", label: "Customer Success Champion" },
        { icon: "Award", label: "Strategic Global Expansion" },
    ],
    roleType: "Manager"
  },
 
  {
    name: "Pranay Kumar", 
    title: "Sr. Technical Manager",
    bio: "Champions secure & optimized cloud transformation — helping clients reduce cost and modernize infrastructure through Azure and M365.",
    image: "/images/Pranay.jpg",
    achievements: [
        { icon: "Zap", label: "Cloud Transformation Expert" },
        { icon: "Shield", label: "Infrastructure Security" },
    ],
    roleType: "Manager"
  },
  {
    name: "Nisha Yadav", 
    title: "Human Resource Manager",
    bio: "Building and nurturing our global talent pool — fostering a culture of excellence, growth, and innovation across all teams.",
    image: "/images/Nisha.jpeg",
    achievements: [
        { icon: "Users", label: "Talent Development" },
        { icon: "Award", label: "Culture Excellence" },
    ],
    roleType: "Manager"
  },
]

// --- MAPPING DATA FOR CARD HOVER EFFECT ---
const leadershipCards = leadershipTeam.map(member => ({
  title: `${member.name} (${member.title?.split(" – ")[0] || member.title})`,
  description: member.bio,
  link: "#",
  member,
}))
// ------------------------------------------

// Icon mapping utility for achievements
const IconMap = {
    Trophy: Award,
    Globe: Users,
    Zap: Zap,
    Shield: Shield,
    CheckCircle: CheckCircle,
    Clock: Clock,
    Handshake: Users,
    Award: Award,
    Lightbulb: Zap,
}


export default function AboutPage() {
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const historyRef = useRef(null)
  const teamRef = useRef(null)
  const certRef = useRef(null)
  const founderRef = useRef(null)
  const leadershipRef = useRef(null)
  
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 })
  const historyInView = useInView(historyRef, { once: true, amount: 0.2 })
  const leadershipInView = useInView(leadershipRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const certInView = useInView(certRef, { once: true, amount: 0.2 })
  const founderInView = useInView(founderRef, { once: true, amount: 0.2 })

  // Timeline scroll animation - completes when reaching the last card
  const { scrollYProgress } = useScroll({ target: historyRef, offset: ["start 0.5", "end 0.8"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="About Us - Our Story & Values"
        description="Learn about NathCorp's journey, our mission to revolutionize digital transformation, and the core values that drive our success since 2005."
        keywords="about NathCorp, IT company history, digital transformation company, technology innovation, IT services"
        canonicalUrl="/about"
      />

      <OrganizationSchema
        name="NathCorp"
        url="https://nathcorp.com"
        logo="https://nathcorp.com/logo.png"
        description="Leading provider of digital transformation and IT solutions since 2005"
        sameAs={[
          "https://twitter.com/nathcorp",
          "https://linkedin.com/company/nathcorp",
          "https://facebook.com/nathcorp",
        ]}
      />

      <main className="min-h-screen overflow-x-hidden">
        <Navbar />

        {/* <div className="container mx-auto px-4 pt-24">
          <Breadcrumbs items={[{ label: "About Us", href: "/about", isCurrent: true }]} />
        </div> */}

      <PageHeader
            title="About Us"
              backgroundImage="/images/About.png"
            />
        {/* Mission & Vision */}
     
{/* Mission & Vision */}
<section className="py-20 bg-white relative" ref={missionRef}>
  <div className="container mx-auto px-4 relative z-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* ─── Text Column ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">
          Our Mission & Vision
        </Badge>

        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Driving Digital Excellence
        </h2>

        {/* force plain background, no gradient, full opacity, no transitions */}
        <div className="space-y-4">
          <p className="text-slate-800 bg-none transition-none opacity-100 text-justify leading-relaxed">
            <span className="font-semibold">Our Mission:</span> To empower organizations to achieve their full
            potential through innovative technology solutions that drive efficiency, security, and growth.
          </p>
          <p className="text-slate-800 bg-none transition-none opacity-100 text-justify leading-relaxed">
            <span className="font-semibold">Our Vision:</span> To be the trusted technology partner of choice,
            recognized for our expertise in delivering transformative digital solutions that create lasting
            value for our clients.
          </p>
          <p className="text-slate-800 bg-none transition-none opacity-100 text-justify leading-relaxed">
            We believe that technology should be an enabler, not a barrier. Our approach combines technical
            excellence with deep industry knowledge to deliver solutions that address real business challenges
            and create meaningful outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-700" />
            </div>
            <span className="font-medium">Trust & integrity</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Zap className="h-5 w-5 text-blue-700" />
            </div>
            <span className="font-medium">Innovation at core</span>
          </div>
        </div>
      </motion.div>

      {/* ─── Image Column (unchanged) ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-lg"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/nc-team.png?height=600&width=800"
              alt="Team meeting discussing digital transformation strategy"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

        {/* Stats */}
        <section className="py-20 relative bg-gray-900 text-white overflow-hidden">
          {/* Dark gradient overlay similar to Cost Saving section */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950/70 to-purple-900/70 opacity-95"></div>
            {/* Subtle animated blobs for visual interest */}
            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse delay-200"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">10,000+</div>
                <div className="text-center opacity-80">Client Impact</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">50+</div>
                <div className="text-center opacity-80">Companies Worldwide</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">15+</div>
                <div className="text-center opacity-80">Countries Globally including US, UK, Europe, Australia & Japan</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">18+</div>
                <div className="text-center opacity-80">Years of Excellence</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" ref={storyRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="hidden lg:block absolute -top-6 -right-6 w-32 xl:w-64 h-32 xl:h-64 bg-blue-100 rounded-lg"></div>
                  <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 xl:w-64 h-32 xl:h-64 bg-blue-200 rounded-lg"></div>
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Story.png?height=600&width=800"
                      alt="NathCorp headquarters building with modern glass architecture"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">From Startup to Industry Leader</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    For over 18 years, NathCorp has been trusted by some of the world's largest companies to manage, modernize, and secure their mission-critical systems. Our global team of skilled professionals provides seamless support across time zones, ensuring reliable around-the-clock service for enterprise clients.
                  </p>
                  <p>
                    As a <span className="text-blue-600 font-medium">Microsoft-focused technology partner</span>, we bring deep expertise across cloud, security, modern work, and enterprise development. Our team holds multiple Microsoft certifications, with many engineers having over a decade of hands-on experience working with Fortune 100 and Fortune 500 organizations.
                  </p>
                  <p>
                    Continuous improvement is a core part of our culture. We constantly evolve our capabilities to align with emerging technologies—ensuring that the solutions we deliver today remain relevant, scalable, and future-ready.
                  </p>
                  {/* <p>
                    But you don't have to take our word for it. Our long-standing clients speak for us—explore their experiences and testimonials <a href="/testimonials" className="text-blue-600 font-medium hover:text-blue-700 underline">HERE</a>.
                  </p> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-20 bg-slate-50" ref={historyRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            {/* <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Our History</Badge> */}
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Journey Through the Years</h2>
            <p className="text-lg text-slate-600">
              From our humble beginnings to becoming a global leader in digital transformation, our history reflects
              our commitment to innovation and excellence.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200">
              <motion.div style={{ scaleY }} className="h-full w-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 origin-top" />
            </div>
            {timeline.map((item, idx) => (
              <motion.div key={item.year} initial={{opacity:0,y:30}} animate={historyInView?{opacity:1,y:0}:{opacity:0,y:30}} transition={{duration:0.5, delay: idx*0.2}} className={`relative mb-12 flex ${idx%2===0?"justify-start":"justify-end"}`}>
                <div className={`${idx%2===0?"pr-8":"pl-8"} w-5/12`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-2xl transition duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/40 to-purple-600/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-6">
                      <div className="text-blue-600 font-bold text-xl mb-1 text-left">{item.year}</div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 text-left">{item.title}</h3>
                      <p className="text-slate-600 text-left">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Leadership Team */}
        <section className="py-20 bg-slate-900" ref={leadershipRef}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet Our Visionary Leaders
                    </h2>
                    <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-12">
                        Our leadership team drives innovation and excellence, committed to creating long-term value and measurable business outcomes for our clients worldwide.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                  <HoverEffect items={leadershipCards} />
                </div>
            </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}

function Cloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function Windows(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 5 7-2v16l-7-2V5z" />
      <path d="M11 3h10v18H11V3z" />
    </svg>
  )
}
