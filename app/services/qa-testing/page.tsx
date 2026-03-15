"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import ContactFormModal from "@/components/contact-form-modal"
import { CheckCircle, ShieldCheck, Zap, Globe, Cpu, Award, Beaker } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MetaTags from "@/components/seo/meta-tags"

const coreServices = [
  {
    title: "AI-Assisted Test Engineering (Premium)",
    description: "Copilot-enabled script generation, AI-based test case authoring, anomaly detection, and predictive defect analysis.",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "QA as a Service (QAaaS)",
    description: "Dedicated pods, sprint QA, release certification, and ongoing regression governance.",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "End-to-End Quality Ownership",
    description: "Full lifecycle assurance—from requirements to production—with embedded QA, real-time feedback, and accountable ownership.",
    icon: <Award className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "Real-World Readiness Validation",
    description: "Comprehensive validation of performance, security, usability, and resilience under production-like conditions.",
    icon: <Globe className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Cloud & Digital Platform Assurance",
    description: "Specialized testing for SaaS, PaaS, microservices, and cloud migrations—ensuring scalability, data integrity, and seamless user experiences.",
    icon: <Beaker className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Industry-Specific Quality Solutions",
    description: "Ethical & Intelligent System Testing: Specialized validation for AI/ML systems—including bias detection, chatbot behavior, computer vision, and NLP model reliability.",
    icon: <CheckCircle className="w-6 h-6 text-rose-500" />,
  },
]

const deliveryPillars = [
  {
    title: "Pillar 1 — Intelligence-Driven Validation",
    description: "AI-assisted test authoring, self-healing scripts, risk-based testing, and optimized coverage.",
    image: "/images/intelligent.png",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Pillar 2 — Real-World Readiness",
    description: "Performance, security, compatibility, UX, accessibility, and reliability testing — ensuring production resilience.",
    image: "/images/QA.png",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Pillar 3 — Full Lifecycle Quality Ownership",
    description: "From design to deployment, quality is engineered into every stage using DevOps-aligned continuous testing.",
    image: "/images/lifecycle.png",
    color: "from-emerald-500/20 to-teal-500/20",
  },
]

const partnershipModels = [
  "Dedicated QA Pods (embedded into your product team)",
  "QAaaS (Quality-as-a-Service)",
  "Project-Based Testing (for migrations, launches, transformations)",
  "Hybrid Delivery Models (onsite + offshore coverage)",
  "Cloud-based test labs & real-time quality dashboards",
]

const industries = [
  "BFSI",
  "Healthcare",
  "Retail & E-Commerce",
  "Logistics & Supply Chain",
  "SaaS & Enterprise Platforms",
  "Manufacturing & IoT",
]

const businessOutcomes = [
  "Zero critical bugs in production",
  "Faster release cycles with fewer defects",
  "Lower cost of quality through early risk detection",
  "Real-time test reporting & analytics",
  "Compliance-ready testing practices",
  "Higher customer satisfaction and trust",
]

const whyNathCorp = [
  "Cross-industry testing expertise",
  "Deep integration with Agile & DevOps",
  "AI-driven test intelligence & optimization",
  "Automation-first frameworks",
  "Cloud-based test labs",
  "Scalable QA Pods & QAaaS models",
  "Faster cycle times, higher reliability, reduced costs",
]

export default function QATestingPage() {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, amount: 0.1 })

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <MetaTags
        title="Quality Engineering & Testing Services | NathCorp"
        description="Build reliable software. Ship with confidence."
        keywords="QA testing, quality engineering, test automation, AI testing, performance testing, security testing, QAaaS"
        canonicalUrl="/services/qa-testing"
      />
      <Navbar />
      <PageHeader
        title="Quality Engineering & Testing Services"
        description="Build reliable software. Ship with confidence."
        backgroundImage="/images/QA-Testing.png"
      />

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-20 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-slate-900 leading-tight">
              Transforming QA into a <span className="text-blue-600">Business Enabler</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              <p>Modern software systems demand more than traditional testing.</p>
              <p>
                NathCorp’s Quality Engineering practice ensures reliability, security, and performance across every stage of the SDLC — so quality becomes a strategic differentiator, not a bottleneck.
              </p>
              <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic">
                We engineer confidence into every release using AI-driven test intelligence, automation-first frameworks, and continuous validation across devices, platforms, and cloud environments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Service Areas - Bento Grid Style */}
      <section className="py-24 bg-slate-900" ref={scrollRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Service Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Our Core QA Service Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white group overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Pillars Section - Modern Pillar Visualization */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How NathCorp Delivers Quality
            </h2>
            <p className="text-slate-500 mt-4 text-lg font-medium">The 3-Pillar Operational Model</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {deliveryPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group flex flex-col items-center"
              >
                <div className={`absolute -top-10 inset-x-0 h-64 bg-gradient-to-b ${pillar.color} rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative z-10 text-center">
                  {pillar.image && (
                    <div className="mb-8 p-6 bg-white rounded-3xl shadow-xl border border-slate-100 group-hover:-translate-y-4 transition-transform duration-500">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-40 h-40 object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Industries Split Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Models */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <div className="w-12 h-1 bg-blue-500 rounded-full" />
                How We Partner With You
              </h2>
              <div className="space-y-6">
                {partnershipModels.map((model, index) => (
                  <div key={index} className="flex items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mr-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-slate-200">{model}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 relative">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-600/20 blur-[80px]" />
                <h2 className="text-2xl font-bold mb-8">Industry-Ready QA Expertise</h2>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="font-semibold text-slate-300 text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes & Why Us Section - Combined Modern Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Outcomes */}
            <div className="p-10 rounded-[3rem] bg-blue-50/50 border border-blue-100">
              <h2 className="text-3xl font-bold mb-10 text-slate-900">Expected Business Outcomes</h2>
              <div className="grid grid-cols-1 gap-6">
                {businessOutcomes.map((outcome, index) => (
                  <motion.div 
                    whileHover={{ x: 10 }}
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm"
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-bold leading-tight">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">
                Why Choose NathCorp for <br />
                <span className="text-blue-600">Quality Engineering?</span>
              </h2>
              <div className="space-y-4">
                {whyNathCorp.map((reason, index) => (
                  <div key={index} className="flex items-center gap-4 py-2 border-b border-slate-100 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Impactful Design */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-950 to-slate-900 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Transform Testing into a <br />
              <span className="text-blue-400">Business Enabler</span> with NathCorp
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
              Quality is not an afterthought — it’s built into every stage of your software lifecycle.
            </p>
            <ContactFormModal
              triggerText="Talk to Our QA Experts"
              triggerClassName="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 py-8 h-auto text-lg font-bold shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-1"
              serviceName="Quality Engineering & Testing Services"
            />
          </motion.div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  )
}