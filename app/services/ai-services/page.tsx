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
    Cloud, Code, Settings, Workflow, Server, Shield,
    Bot,
    Brain,
    BarChart,
    Sparkles,
    TrendingUp
} from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"
import { Badge } from "@/components/ui/badge"

const appServices = [
    {
        title: "AI Co-Pilot & Orchestration",
        description:
            "NathCorp engineers context-aware AI assistants that integrate directly into proprietary workflows. We move beyond basic chat to create assistants that accelerate output and optimize support cycles with high precision.",
        icon: Bot,
        color: "from-blue-600 to-cyan-500",
        image: "/images/bot.png",
    },
    {
        title: "Agentic Workflow Automations",
        description:
            "We design autonomous AI agents that don't just follow scripts—they reason, make decisions, and adapt to changing variables. Replace rigid RPA with self-correcting agents that eliminate operational bottlenecks.",
        icon: Workflow,
        color: "from-purple-600 to-indigo-500",
        image: "/images/Ai-Automation.png",
    },
    {
        title: "LLM & LMM Integrations",
        description:
            "Seamlessly embed Large Language Models (LLMs) and Multimodal models (LMM) into your existing tech stack. We focus on low-latency pipelines that personalize UX and unlock entirely new value streams.",
        icon: Code,
        color: "from-pink-600 to-rose-500",
        image: "/images/AI-Intelligence.png",
    },
    {
        title: "Modular RAG Applications",
        description:
            "We build Retrieval-Augmented Generation (RAG) systems using Vector Databases like Pinecone or Milvus. This ensures AI outputs are grounded in your real-time, domain-specific data with strict privacy controls.",
        icon: Database,
        color: "from-emerald-600 to-green-500",
        image: "/images/Analytics.png",
    },
    {
        title: "Custom Model Fine-Tuning",
        description:
            "Deploy proprietary AI assets by fine-tuning foundational models on your industry-specific data (LoRA/QLoRA). This reduces hallucinations and ensures behavior aligns perfectly with your enterprise logic.",
        icon: Settings,
        color: "from-orange-600 to-red-500",
        image: "/images/Decision.png",
    },
    {
        title: "Cognitive Vision & Audio AI",
        description:
            "Engineering sophisticated vision and audio systems for real-time object recognition, biometric verification, and hands-free productivity using Deep Learning architectures and Visual Search.",
        icon: Brain,
        color: "from-indigo-700 to-purple-600",
        image: "/images/Audio.png",
    },
]

const nextGenFeatures = [
    {
        title: "Predictive Analytics & Foresight",
        description: "Turn raw metrics into actionable foresight with behavior modeling and high-accuracy forecasting.",
        icon: BarChart,
    },
    // {
    //   title: "Multimodal Conversational Interfaces",
    //   description: "Enable natural language interactions across touchpoints with seamless voice and text integration.",
    //   icon: MessageSquare,
    // },
    {
        title: "Intelligent Document Understanding",
        description: "Automate extraction and classification of complex, unstructured data from any enterprise document type.",
        icon: Layers,
    },
    {
        title: "Real-time Fraud & Anomaly Alerts",
        description: "Secure your ecosystem with AI that identifies suspicious patterns and biometric threats before they escalate.",
        icon: Shield,
    },
    {
        title: "Dynamic Pricing & Demand Strategy",
        description: "Optimize margins with algorithmic pricing that reacts to global market shifts and user demand in real-time.",
        icon: TrendingUp,
    },
    {
        title: "Deep Sentiment & Feedback Mining",
        description: "Extract granular emotional intelligence from vast customer feedback streams to refine product strategy.",
        icon: Sparkles,
    },
    {
        title: "Autonomous Decision Support",
        description: "Empower leadership with AI-generated recommendations and self-executing process improvements.",
        icon: Zap,
    },
]

const businessOutcomes = [
    "Dramatically reduced manual workload and L1 support cycles",
    "Rapid decision cycles across global departments",
    "High-precision forecasting with 95%+ accuracy rates",
    "Scalable intelligence that grows with your enterprise",
    "Future-proof architecture using model-agnostic design",
    "Competitive advantage through self-optimizing business assets",
]


const techStack = [
    "Python", "PyTorch", "LangChain", "OpenAI", "LlamaIndex", "Pinecone", "HuggingFace", "Azure AI"
]

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
                title="AI & Automation Engineering"
                subtitle="Transforming vision into high-accuracy intelligent systems."
                backgroundImage="/images/AI-Services.jpg"
            />

            {/* --- CORE SERVICES SECTION --- */}
            <section className="py-24 bg-white" ref={contentRef}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                            Architecting the Future of Enterprise AI
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            NathCorp bridges the gap between AI hype and enterprise reality. Our architects, data scientists, and developers build high-quality AI capabilities that enable cost-effective and highly scalable digital transformation.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-60">
                            {techStack.map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-900 border border-slate-500">
                                    {tech}
                                </span>
                            ))}
                        </div>
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
            {/* Next-Gen Features Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Next-Gen Features to Elevate Digital Products
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Integrate proprietary intelligence to make your systems faster, smarter, and hyper-user-centric.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {nextGenFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                                        <feature.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Outcomes Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>

                        <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center relative z-10">
                            Why Choose NathCorp for AI Engineering
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                            {businessOutcomes.map((outcome, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="mr-4 mt-1 bg-blue-600/20 p-1 rounded-full group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-blue-400 group-hover:text-white" />
                                    </div>
                                    <span className="text-slate-300 text-lg group-hover:text-white transition-colors">{outcome}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-16 relative z-10">
                            <ContactFormModal
                                triggerText="Consult an AI Specialist"
                                triggerClassName="bg-blue-600 hover:bg-blue-700 rounded-full px-12 py-8 text-white text-xl font-bold shadow-2xl transition-all hover:scale-105"
                                serviceName="AI & Automation Services"
                                showIcon={true}
                            />
                        </div>
                    </div>
                </div>
            </section>







            <CallToAction />
            <Footer />
        </div>
    )
}