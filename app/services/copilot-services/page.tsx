"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { 
  Zap, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Mail,
  TrendingUp,
  Settings
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ContactFormModal from "@/components/contact-form-modal"

// --- Service Data ---
const features = [
  { title: "HR Automation", desc: "Draft job descriptions, onboarding docs and policies in minutes.", icon: Users },
  { title: "Sales Enablement", desc: "Create follow-ups, proposals and CRM updates faster.", icon: TrendingUp },
  { title: "Meeting Summaries", desc: "Capture key points, tasks and speaker insights automatically.", icon: MessageSquare },
  { title: "Document Generation", desc: "Build reports, presentations and communication faster.", icon: FileText },
  { title: "Excel Data Insights", desc: "Ask questions and uncover trends instantly with natural language.", icon: BarChart3 },
  { title: "Email Intelligence", desc: "Response drafting that keeps your inbox under control.", icon: Mail },
]

const packages = [
  { title: "Readiness Assessment", val: "Security, licensing, and data access review so you're deployment-ready." },
  { title: "Pilot / Proof of Concept", val: "Real users, real workflows, and measurable ROI impact." },
  { title: "Enterprise Rollout", val: "Training, governance, and ongoing adoption optimization." },
]

export default function CopilotServicesPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-white selection:bg-blue-100">
        <Navbar />

        {/* --- HERO SECTION: REPLACED VIDEO WITH DYNAMIC GRADIENT & ILLUSTRATION --- */}
        <section className="relative min-h-[75vh] flex items-center pt-20 pb-16 overflow-hidden bg-[#05070a]">
          {/* Background Neural Network Effect */}
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)] opacity-30" />
             <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
             <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
              >

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Work Smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Microsoft Copilot</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
                  Reduce manual work. Boost productivity. Make AI part of the workflow. NathCorp helps you deploy Copilot securely and effectively.
                </p>
              </motion.div>

              {/* Right Side: Abstract Copilot UI Illustration */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1 }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-4 shadow-2xl">
                   <Image 
                    src="/images/Copilot-ui.png" // Use a high-quality Copilot UI screenshot or abstract AI image
                    alt="Microsoft Copilot AI Interface" 
                    width={600} 
                    height={400} 
                    className="rounded-2xl"
                   />
                   
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom curve fade to white */}
          
        </section>

        {/* --- TRANSFORM SECTION --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-none uppercase tracking-widest text-[10px]">Transformation</Badge>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Transform Productivity Across Every Team
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed text-justify mb-8">
                  We help organizations activate Copilot as a real productivity engine — not just a new feature. Our approach focuses on role-based use cases that save time, reduce effort, and improve decision-making across the business. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {["Productivity Acceleration", "AI-Assisted Content", "Real-time Insights", "Governance & Safety"].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                       <CheckCircle2 className="text-blue-600" size={20} /> {item}
                     </div>
                   ))}
                </div>
              </motion.div>

              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                 <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <ShieldCheck className="text-blue-600" /> Why Choose NathCorp
                 </h4>
                 <ul className="space-y-4">
                    {[
                      "Global Microsoft Partner expertise",
                      "Proven enterprise-scale M365 success",
                      "Real adoption strategy — not just setup",
                      "ROI-focused deployment and enablement"
                    ].map((li, idx) => (
                      <li key={idx} className={`pb-4 ${idx !== 3 ? 'border-b border-slate-200' : ''} text-slate-600 flex items-start gap-3`}>
                        <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                        {li}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10, borderColor: '#3b82f6' }}
                  className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICE OFFERINGS (TIMELINE STYLE) --- */}
        <section className="py-24 bg-slate-900 relative" ref={containerRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-slate-500">Our Copilot Service Offerings</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200">
                <motion.div style={{ scaleY }} className="h-full w-full bg-blue-600 origin-top shadow-[0_0_15px_#2563eb]" />
              </div>

              {packages.map((pkg, idx) => (
                <div key={idx} className={`relative mb-20 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-[45%] ml-16 md:ml-0"
                  >
                    <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-600 transition-colors duration-500">
                      <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Phase {idx + 1}</h4>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{pkg.title}</h3>
                      <p className="text-slate-600 text-sm">{pkg.val}</p>
                    </div>
                  </motion.div>
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10 shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TOOLS & TECH SECTION --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Cpu className="mx-auto mb-6 text-blue-600" size={48} />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Built on Microsoft 365 — Powered by Azure AI</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              We secure and optimize Copilot using Microsoft’s trusted cloud, identity, and security ecosystem. 
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["M365", "Entra ID", "Microsoft Graph", "SharePoint", "Teams", "Copilot Studio"].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full border border-slate-100 font-bold text-slate-700 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-default">
                  <CheckCircle2 className="text-blue-600" size={18} /> {tech}
                </div>
              ))}
            </div>
            
            <div className="mt-24 bg-gradient-to-br from-[#05070a] to-[#1e3a8a] rounded-[3rem] p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see what Copilot can do?</h2>
                 <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">Book your Copilot Readiness Call today and get a custom strategy for your organization.</p>
                 <ContactFormModal
                   triggerText="Book Your Readiness Call Now"
                   triggerClassName="bg-white text-blue-900 hover:bg-slate-100 rounded-full px-12 h-16 text-xl font-black shadow-2xl transition-all hover:scale-105"
                   serviceName="Microsoft Copilot Services"
                   showIcon={false}
                 />
               </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}