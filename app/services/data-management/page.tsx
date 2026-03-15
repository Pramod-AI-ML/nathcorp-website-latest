"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import ContactFormModal from "@/components/contact-form-modal"
import { 
  CheckCircle, Database, BarChart3, ShieldCheck, RefreshCw, 
  Lock, Cpu, Search, Map, Users, Target, Globe, Trophy, 
  Fingerprint, ShieldPlus, TrendingUp, Layers, ArrowRight, Network
} from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MetaTags from "@/components/seo/meta-tags"

// 1. Data Challenges Grid (Matching Challenges layout)
const challenges = [
  { icon: Layers, title: "Data Silos", description: "Unify fragmented systems into a single source of truth.", accent: "bg-blue-500/10 text-blue-600" },
  { icon: RefreshCw, title: "Quality Control", description: "Eliminate inconsistent data that leads to flawed decisions.", accent: "bg-indigo-500/10 text-indigo-600" },
  { icon: ShieldPlus, title: "Governance", description: "Bridge compliance gaps with centralized access controls.", accent: "bg-rose-500/10 text-rose-600" },
  { icon: Database, title: "Legacy Debt", description: "Migrate outdated on-prem systems to cloud-native platforms.", accent: "bg-cyan-500/10 text-cyan-600" },
  { icon: BarChart3, title: "Intelligence", description: "Extract real-time, actionable business insights.", accent: "bg-amber-500/10 text-amber-600" },
  { icon: Cpu, title: "AI Readiness", description: "Structure data to fuel modern AI and ML initiatives.", accent: "bg-emerald-500/10 text-emerald-600" },
]

// 2. Core Capabilities (Matching Methodology Cards)
const capabilities = [
  {
    title: "Platform Modernization",
    description: "Scale with Microsoft Fabric, Azure Synapse, and Data Lake architectures.",
    features: ["Fabric Integration", "Azure Synapse", "Data Lake Setup", "Cloud-native Scaling"],
  },
  {
    title: "BI & Analytics",
    description: "Real-time Power BI dashboards designed for cross-team decision making.",
    features: ["Power BI Design", "Real-time Viz", "Self-service BI", "Automated Reporting"],
  },
  {
    title: "Integration & ETL",
    description: "Automated pipelines using Azure Data Factory to unify your ecosystem.",
    features: ["ADF Orchestration", "API Connectivity", "Hybrid Integration", "Workflow Automation"],
  },
  {
    title: "Governance & Security",
    description: "Centralized cataloging and privacy using Microsoft Purview and IAM.",
    features: ["Data Cataloging", "DLP Policies", "IAM Controls", "Compliance Auditing"],
  },
  {
    title: "Security & Privacy",
    description: "Protect sensitive data with encryption and continuous monitoring.",
    features: ["End-to-end Encryption", "Risk Assessments", "Privacy Controls", "DLP Implementation"],
  },
  {
    title: "AI-Ready Foundations",
    description: "Prepare governed data foundations that support modern AI initiatives.",
    features: ["Governed AI Data", "MLOps Readiness", "High-quality Datasets", "Predictive Modeling"],
  },
]

// 3. Why NathCorp (Matching Value Pillars layout)
const whyNathCorp = [
  { icon: Globe, title: "Microsoft-Aligned Architecture", text: "Building on the latest Microsoft best practices for seamless compatibility." },
  { icon: Trophy, title: "Strategy-to-Execution", text: "End-to-end expertise that bridges the gap between strategy and implementation." },
  { icon: ShieldPlus, title: "Security-First Focus", text: "Deep emphasis on governance and compliance built into every pipeline." },
  { icon: RefreshCw, title: "Real-Time Insights", text: "Engineered for immediate data availability, not delayed nightly reporting." },
  { icon: TrendingUp, title: "Built for Future Growth", text: "Scalable data foundations that grow alongside your business ambitions." }
]

export default function DataManagementPage() {
  const stackRef = useRef(null)
  const isStackInView = useInView(stackRef, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <MetaTags
        title="Data & Analytics | NathCorp"
        description="Transform fragmented data into strategic assets with Microsoft-first analytics."
        keywords="Data Management, Power BI, Microsoft Fabric, Azure Synapse"
        canonicalUrl="/services/data-management"
      />
      <Navbar />
      <PageHeader
        title="Data & Analytics"
        description="Modernize your data foundation to enable real-time insights and AI—without disruption."
        backgroundImage="/images/Data.jpg"
      />

      {/* SECTION 1: Challenges Grid */}
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
              Data <span className="text-blue-600">Challenges We Address</span>
            </motion.h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We help organizations consolidate fragmented data into unified, governed platforms that turn raw information into a strategic asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="group h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${item.accent}`}>
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Dark Approach Framework */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={stackRef}>
        <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our <span className="text-blue-400">Microsoft-First</span> Framework</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">Pillars focused on simplicity, security, and scalability—aligned with Microsoft best practices.</p>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Target className="h-6 w-6 text-blue-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300 italic">
                  &quot;High-quality data is the currency of the modern enterprise. We ensure your foundation is ready for the future of AI.&quot;
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
              {[
                { icon: Database, label: "Platform Unification" },
                { icon: ShieldCheck, label: "Policy Governance" },
                { icon: BarChart3, label: "Advanced Analytics" },
                { icon: Cpu, label: "AI Integration" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  animate={isStackInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="font-semibold text-slate-200">{step.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </section>

      {/* SECTION 3: Core Capabilities Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Core Data Capabilities</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {capabilities.map((cap, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{cap.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">{cap.description}</p>
                  <ul className="space-y-4">
                    {cap.features.map((item, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm font-semibold text-slate-700">
                        <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <CheckCircle className="h-3.5 w-3.5 text-blue-600" />
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

      {/* SECTION 4: Why NathCorp Sticky Layout */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Why <span className="text-blue-400">NathCorp</span> for Data Management
              </h2>
              <div className="w-16 h-1 bg-blue-400 rounded-full mb-6" />
              <p className="text-slate-300 text-lg">We bridge the gap between high-level data strategy and deep technical execution.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyNathCorp.map((item, index) => (
                <div key={index} className="flex gap-5 p-2">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-blue-400" />
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

      {/* SECTION 5: Commitment Spotlight */}
      <section className="py-24 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-100 rounded-full">Our Commitment</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Data as a <span className="italic text-blue-600">Strategic Advantage</span></h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic">
            &quot;Data management is a continuous journey. NathCorp partners with organizations to improve quality, governance, and analytics—ensuring data remains a strategic advantage.&quot;
          </p>
        </div>
      </section>

      {/* SECTION 6: CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Data Strategy</h2>
              <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto">Schedule a Data Management Consultation to unlock your enterprise assets.</p>
              <div className="flex justify-center">
                <ContactFormModal
                  triggerText="Consult an Architect"
                  triggerClassName="bg-white text-blue-700 hover:bg-slate-100 px-10 py-7 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-105"
                  serviceName="Data Management Services"
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