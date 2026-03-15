"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactFormModal from "@/components/contact-form-modal"
import { 
  CheckCircle, 
  Monitor, 
  ShieldCheck, 
  Cloud, 
  LayoutDashboard, 
  Users, 
  Search, 
  Map, 
  ShieldAlert, 
  Zap, 
  BarChart3,
  Target,
  Globe,
  Trophy,
  Fingerprint,
  ShieldPlus,
  TrendingUp,
  ArrowRight
} from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MetaTags from "@/components/seo/meta-tags"

// 1. Challenges Grid Data
const challenges = [
  {
    icon: LayoutDashboard,
    title: "Environment Complexity",
    description: "Disconnected or outdated IT environments slowing down operations.",
    accent: "bg-indigo-500/10 text-indigo-600"
  },
  {
    icon: Monitor,
    title: "Endpoint Management",
    description: "Inefficient device management leading to productivity gaps.",
    accent: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: ShieldAlert,
    title: "Identity Sprawl",
    description: "Growing identity risks and security vulnerabilities across the org.",
    accent: "bg-rose-500/10 text-rose-600"
  },
  {
    icon: Cloud,
    title: "Cloud Ambiguity",
    description: "Lack of a clear cloud adoption and migration strategy.",
    accent: "bg-cyan-500/10 text-cyan-600"
  },
  {
    icon: BarChart3,
    title: "Infrastructure Costs",
    description: "Rising costs and underutilized resources draining your budget.",
    accent: "bg-slate-500/10 text-slate-600"
  },
  {
    icon: Zap,
    title: "Growth Resilience",
    description: "IT foundations that are not ready for future business scale.",
    accent: "bg-emerald-500/10 text-emerald-600"
  },
]

// 2. Capabilities Cards Data
const capabilities = [
  {
    title: "Endpoint Deployment & Management",
    description: "Optimized device management and cloud-based desktop solutions.",
    features: [
      "MECM setup & optimization",
      "Microsoft Intune compliance",
      "Windows 365 Cloud Desktops",
      "Azure Virtual Desktop"
    ],
  },
  {
    title: "Identity & Access Management",
    description: "Secure, scalable identity architecture and risk assessments.",
    features: [
      "Microsoft Entra ID implementation",
      "Active Directory cleanup",
      "Domain migration to Azure",
      "M&A Domain mergers/splits"
    ],
  },
  {
    title: "Cloud & Infrastructure Consulting",
    description: "Hybrid and cloud-first strategies focused on cost and readiness.",
    features: [
      "Azure architecture design",
      "On-prem to Cloud planning",
      "Cloud risk assessments",
      "Resource right-sizing"
    ],
  },
]

// 3. Why NathCorp Pillars
const whyNathCorp = [
  {
    icon: Globe,
    title: "Deep Microsoft Ecosystem Expertise",
    text: "Specialized knowledge across the entire Microsoft stack for seamless integration."
  },
  {
    icon: Trophy,
    title: "Real-World Experience",
    text: "Practical consulting backed by years of hands-on implementation across industries."
  },
  {
    icon: Fingerprint,
    title: "End-to-End Coverage",
    text: "Comprehensive solutions spanning cloud, identity, and complex endpoint management."
  },
  {
    icon: ShieldPlus,
    title: "Security by Design",
    text: "Governance, security, and compliance built into the foundation of every project."
  },
  {
    icon: TrendingUp,
    title: "Business-Aligned Strategy",
    text: "Technology roadmaps designed specifically to fuel and support business growth."
  }
]

export default function TechnologyConsultingPage() {
  const stackRef = useRef(null)
  const isStackInView = useInView(stackRef, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <MetaTags
        title="Technology Consulting | NathCorp"
        description="NathCorp’s Technology Consulting helps businesses design IT environments that are secure, scalable, and aligned with goals."
        keywords="technology consulting, IT strategy, Microsoft, Cloud adoption, Entra ID, Intune"
        canonicalUrl="/services/technology-consulting"
      />
      <Navbar />
      <PageHeader
        title="Technology Consulting"
        description="Organizations today face complex decisions. We help you cut through complexity to design IT environments that are secure and scalable."
        backgroundImage="/images/Consulting.png"
      />

      {/* SECTION 1: Challenges Grid (Matches Modern Deployment Hero) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight"
            >
              Technology <span className="text-indigo-600">Challenges We Address</span>
            </motion.h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We help organizations modernize their IT landscape, addressing disconnected environments and inefficient management through expert strategic guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${challenge.accent}`}>
                      <challenge.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{challenge.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Consulting Approach (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={stackRef}>
        <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our <span className="text-indigo-400">Consulting Approach</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We follow a Microsoft-first, cloud-ready consulting approach focused on simplicity, security, and scalability.
              </p>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Target className="h-6 w-6 text-indigo-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300 italic">
                  &quot;Simplicity and security are the bedrocks of a scalable IT environment. Our approach ensures your architecture is built to last.&quot;
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {[
                { icon: Search, label: "Assessment of current IT landscape" },
                { icon: Map, label: "Future-ready architecture design" },
                { icon: ShieldCheck, label: "Secure, scalable implementation planning" },
                { icon: Users, label: "Ongoing guidance and improvement" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isStackInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-indigo-400" />
                  </div>
                  <span className="font-semibold text-slate-200">{step.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Capabilities (Capabilities Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Core Consulting Capabilities</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((cap, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-indigo-600 transition-colors">{cap.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">{cap.description}</p>
                  <ul className="space-y-4">
                    {cap.features.map((item, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm font-semibold text-slate-700">
                        <div className="mr-3 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                          <CheckCircle className="h-3.5 w-3.5 text-indigo-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Why NathCorp (Value Pillars with Side Header) */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Why <span className="text-indigo-400">NathCorp</span> for Technology Consulting
              </h2>
              <div className="w-16 h-1 bg-indigo-400 rounded-full mb-6" />
              <p className="text-slate-300 text-lg">
                We combine deep ecosystem knowledge with a focus on real-world execution to ensure your IT strategy actually works.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyNathCorp.map((item, index) => (
                <div key={index} className="flex gap-5 p-2">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Commitment (Spotlight Section) */}
      <section className="py-24 bg-indigo-50 border-y border-indigo-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-100 rounded-full">
            Our Commitment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Preparing You for <span className="italic text-indigo-600">Tomorrow</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic">
            &quot;Technology consulting is not just about solving today’s problems—it’s about preparing for tomorrow. NathCorp partners with organizations to build IT foundations that are resilient, adaptable, and ready for future growth.&quot;
          </p>
        </div>
      </section>

      {/* SECTION 6: CTA Section (Modern Rounded Card) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Build a Smarter IT Strategy</h2>
              <p className="text-lg md:text-xl text-indigo-50 mb-10 max-w-2xl mx-auto">
                Talk to a Technology Consultant today and start designing an environment that scales with your ambition.
              </p>
              <div className="flex justify-center">
                <ContactFormModal
                  triggerText="Consult an Architect"
                  triggerClassName="bg-white text-indigo-700 hover:bg-slate-100 px-10 py-7 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-105"
                  serviceName="Technology Consulting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  )
}