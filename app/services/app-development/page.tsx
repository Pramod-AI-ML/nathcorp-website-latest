"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import ContactFormModal from "@/components/contact-form-modal"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, Smartphone, Monitor, Layers, Zap, 
  ShieldCheck, Globe, Layout, Cpu, Database, 
  Cloud, Code, Settings, Workflow, Server, Shield
} from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"
import { Badge } from "@/components/ui/badge"

const appServices = [
  {
    title: "Mobile First Ecosystems",
    description: "Architecting native iOS & Android experiences and fluid cross-platform solutions that offer high-precision touch responses and offline capabilities.",
    icon: Smartphone,
    color: "from-blue-600 to-cyan-500",
    image: "/images/App-development.png",
  },
  {
    title: "Next-Gen Web Platforms",
    description: "Building immersive, lightning-fast PWAs and enterprise-grade web portals designed for high-concurrency and global SEO domination.",
    icon: Monitor,
    color: "from-purple-600 to-indigo-600",
    image: "/images/deployment.jpg",
  },
  {
    title: "Enterprise Architecture",
    description: "Deep-linking legacy systems with modern cloud-native apps via high-throughput API gateways and secure microservices.",
    icon: Layers,
    color: "from-emerald-500 to-teal-600",
    image: "/images/enterprise.png",
  },
]

const techStack = [
  { name: "React Native", category: "Mobile", icon: Smartphone },
  { name: "Flutter", category: "Mobile", icon: Zap },
  { name: "Next.js", category: "Web", icon: Globe },
  { name: "Swift / Kotlin", category: "Mobile Native", icon: Cpu },
  { name: "Node.js", category: "Backend", icon: Layers },
  { name: "Go / Python", category: "Backend", icon: Code },
  { name: "AWS / Azure", category: "Cloud", icon: Cloud },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Docker / K8s", category: "Containerization", icon: Settings },
  { name: "Figma", category: "UI/UX", icon: Layout },
  { name: "GraphQL", category: "API", icon: Workflow },
  { name: "Terraform", category: "IaC", icon: Server },
];

export default function AppDevelopmentPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })
  
  // Refs for the Backend section
  const backendRef = useRef(null)
  const backendInView = useInView(backendRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <MetaTags
        title="Application Engineering Services | NathCorp"
        description="Professional app development services including native iOS/Android apps, cross-platform solutions, and custom web applications."
        keywords="app development, mobile apps, web applications, iOS development, Android development, React Native"
        canonicalUrl="/services/app-development"
      />
      <Navbar />
      <PageHeader
        title="Application Engineering"
        description="From discovery to deployment, we build digital products that scale with your ambitions."
        backgroundImage="/images/App-development.png"
      />

      {/* --- CORE SERVICES SECTION --- */}
      <section className="py-24 bg-white" ref={contentRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
              Architecting the Future of App Development
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              NathCorp builds robust, scalable, and user-centric applications for mobile, web, and enterprise. Our engineers leverage the latest frameworks and tools to turn your ideas into high-performing digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {appServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-full -translate-y-1/2 translate-x-1/2`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg text-white`}>
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>
                  <div className="relative h-44 rounded-2xl overflow-hidden transition-all duration-700">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UPDATED BACKEND ARCHITECTURE SECTION --- */}
      <section 
        ref={backendRef}
        className="relative py-32 flex items-center overflow-hidden bg-slate-950"
      >
        {/* Background Image Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={backendInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/backend-architect1.png" 
            alt="Architecture Background" 
            fill 
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Side - Transition from Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={backendInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="max-w-xl"
            >
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-1">
                Backend Architecture
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                Zero-Friction <br />
                <span className="text-indigo-400">Scaling & Security</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Our apps are powered by cloud-native backends that auto-scale based on traffic spikes. We use an API-first design that allows your data to flow securely between platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, text: "End-to-End Encryption" },
                  { icon: Cpu, text: "High-Availability Clusters" },
                  { icon: Zap, text: "Sub-Second Latency" },
                  { icon: Cloud, text: "Auto-Scale Management" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="text-indigo-400 shrink-0" size={20} />
                    <span className="font-semibold text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
              Our Technology Stack
            </h2>
            <p className="text-lg text-slate-700 mb-8">We use the latest, most reliable tools to deliver scalable, secure, and high-performing applications.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "#f8fafc" }}
                className="flex flex-col items-center p-6 rounded-3xl border border-indigo-100 bg-white shadow-lg hover:shadow-2xl transition-all cursor-default group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <tech.icon size={28} className="text-indigo-600 group-hover:text-white" />
                </div>
                <span className="text-base font-semibold text-slate-800">{tech.name}</span>
                <span className="text-xs text-indigo-600 font-medium mt-1">{tech.category}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-indigo-700 text-lg font-semibold italic bg-indigo-50 rounded-xl px-6 py-3 inline-block shadow-sm">+ Custom legacy integrations across 20+ additional enterprise frameworks.</p>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Ready to Build Your Next App?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Let's transform your business logic into a world-class digital product. Schedule your technical discovery session today.</p>
          <ContactFormModal
            triggerText="Start Your App Journey"
            triggerClassName="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-6 text-xl font-bold shadow-xl transition-all"
            serviceName="App Development Strategy Call"
          />
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  )
}