"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, MessageSquare, FileText, Headphones, Zap, Users, CheckCircle2, Bot, Cloud, Users2, Settings } from 'lucide-react'
import MetaTags from "@/components/seo/meta-tags"
import ContactFormModal from "@/components/contact-form-modal"

const productCategories = [
  { id: "docsync", name: "DocSync", icon: Cloud },
  { id: "teams-tempo", name: "Teams Tempo", icon: Users2 },
  { id: "m365-governance", name: "M365 Governance Manager", icon: Settings },
  { id: "ai-products", name: "AI Products", icon: Brain },
]

const aiCapabilities = [
  {
    title: "AI-Powered Analytics & Insights",
    description: "Leverage advanced machine learning to extract actionable insights from your business data in real-time.",
    icon: Brain,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Conversational Interfaces (Chat/Voice)",
    description: "Natural language processing for seamless human-AI interaction across multiple channels.",
    icon: MessageSquare,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Document & Data Understanding",
    description: "Intelligent document processing and data extraction with contextual understanding.",
    icon: FileText,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Fraud Detection & Anomaly Alerts",
    description: "Real-time detection of suspicious patterns and automated alerting systems.",
    icon: Zap,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Process Automation & Decision Support",
    description: "Automate complex workflows and provide intelligent decision recommendations.",
    icon: Bot,
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Sentiment Analysis & Feedback Mining",
    description: "Extract meaningful insights from customer feedback and internal communications.",
    icon: Users,
    color: "from-cyan-500 to-cyan-600"
  },
]

// ⬇️ NEW: AI Services config (from previous layout)
const aiServices = [
  {
    id: "ai-copilot",
    title: "AI Co-Pilot/Chatbot",
    description:
      "Empower your teams and customers with intelligent AI assistants that deliver instant, context-aware responses—driving productivity and better support outcomes.",
    icon: "🤖",
    features: ["24/7 Availability", "Multi-language Support", "Context Awareness", "Learning Capability"],
    color: "from-blue-500 to-blue-600",
    size: "large",
  },
  {
    id: "rag-applications",
    title: "RAG Applications",
    description:
      "Combine real-time, domain-specific data with powerful LLMs to generate accurate, grounded responses that businesses can trust and act upon.",
    icon: "📚",
    features: ["Dynamic Knowledge Base", "Real-time Updates", "Accuracy Focused", "Enterprise Grade"],
    color: "from-purple-500 to-purple-600",
    size: "small",
  },
  {
    id: "agentic-workflows",
    title: "Agentic AI Workflow Automations",
    description:
      "Automate complex, multi-step business processes with autonomous AI agents that act, decide, and adapt—reducing manual effort and boosting operational efficiency.",
    icon: "⚡",
    features: ["Autonomous Execution", "Process Optimization", "Smart Decision Making", "Error Handling"],
    color: "from-emerald-500 to-emerald-600",
    size: "large",
  },
  {
    id: "custom-agent",
    title: "Custom Agent Development",
    description:
      "Design and deploy AI agents purposefully built for your enterprise needs—from decision-making tools to intelligent task handlers—with full control over logic and behavior.",
    icon: "🛠️",
    features: ["Custom Logic", "Enterprise Security", "Full Control", "Advanced Monitoring"],
    color: "from-orange-500 to-orange-600",
    size: "small",
  },
  {
    id: "llm-integrations",
    title: "LLM Integrations",
    description:
      "Seamlessly embed large language models into your existing systems and products to enhance capabilities, personalize interactions, and unlock new value streams.",
    icon: "🔗",
    features: ["Plug & Play", "Multiple LLMs", "API Ready", "Scalable Architecture"],
    color: "from-pink-500 to-pink-600",
    size: "small",
  },
]

const docsyncContent = {
  title: "DocSync",
  tagline: "Azure-based SaaS",
  subtitle: "Auditable, traceable content distribution for highly mobile, highly regulated scenarios",
  description: "Most SaaS or On-prem 'off-the-shelf' mobile content distribution solutions require you to 'force fit' the solution to your Business Process, resulting in compromise and a sub-optimal workflow that isn't tailored to your needs.",
  problems: [
    "Higher operating costs",
    "Compromised access – either limited content access or exposed security risks"
  ],
  solution: "NathCorp's DocSync Tailored SaaS delivers secure content distribution across mobile devices in a secure, flexible, regulatory-compliant solution. We deploy our Tailored Layer™ technology to align our SaaS offering 100% with your business process, while preserving the underlying code and database infrastructure.",
  benefits: [
    "Remove paper manuals and reduce aircraft weight",
    "Enable pilots to use tablets instead of heavy flight bags",
    "Ensure 100% compliance with FAA regulations",
    "Easy to use during flights, even in turbulence",
    "Real-time monitoring and compliance reporting"
  ],
  testimonial: {
    quote: "The NathCorp DocSync solution allows us to remove over 100 pounds of paper manuals from each of our aircraft saving fuel on every flight, and enables our pilots to dispose of their heavy flight bags and carry Microsoft Surface tablets; all while ensuring we remain in 100% compliance with FAA regulations.",
    author: "Jonathan Lee",
    title: "EFB Program Administrator, Hawaiian Airlines"
  }
}

const teamsTempoContent = {
  title: "Teams Tempo",
  tagline: "Workforce Intelligence",
  subtitle: "Is Your Workforce Happy and Productive?",
  description: "Teams Tempo uses Microsoft Azure Cognitive Services to evaluate structured and unstructured data and output a multitude of standard and customizable reports to give you near real-time feedback on the 'tempo' of your workforce.",
  capabilities: [
    "Quickly get a pulse on sentiment, acceptance, and feeling around policy announcements",
    "Understand when your workforce is most productive (day of week, week of month, etc.)",
    "See how your Wellness programs are impacting your workforce",
    "Identify emerging negative sentiment and address it before morale is affected",
    "Understand the best days to make announcements for maximum acceptance",
    "Compare metrics of meetings to chat by user, region, and other metrics"
  ],
  benefits: [
    "Real-time workforce sentiment analysis",
    "Data-driven HR decision making",
    "Identify productivity patterns",
    "Proactive wellness management",
    "Timing optimization for announcements"
  ]
}

const m365GovernanceContent = {
  title: "M365 Governance Manager",
  tagline: "Configuration & Compliance",
  subtitle: "M365 has approximately 400 security and compliance settings to set, manage and monitor",
  description: "Managing Microsoft 365 security and compliance settings is complex and prone to error. Our M365 Governance Manager helps you maintain control, security, and compliance across your entire M365 environment.",
  challenges: [
    "Settings are changed 'on the fly' without formal Change Management processes",
    "Difficulty tracking when settings are changed and by whom",
    "Unknown security gaps in current configurations",
    "Configuration 'drift' over time",
    "Impact assessment of configuration changes"
  ],
  features: [
    "Baseline of all current M365 settings",
    "Security and governance risk assessment",
    "Assistance in making your M365 environment more secure",
    "Monitoring and automated alerts for unauthorized changes",
    "Automatic configuration reset to default settings if desired",
    "Structured 'configuration as code' via DevOps",
    "Change management process enforcement",
    "Subscription for managing Microsoft updates"
  ],
  benefits: [
    "Reduce security risk",
    "Create 'dynamic' governance",
    "Stop dangerous configuration drift",
    "Centralize M365 administration",
    "Peace of mind"
  ]
}

const aiProducts = [
  {
    id: "meeting-summarizer",
    name: "Meeting Summarizer",
    category: "AI Assistant",
    description: "Automatically transcribe and summarize meetings in real-time",
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
    stats: "80% time saved on meeting notes",
  },
  {
    id: "hr-helpdesk",
    name: "HR Help Desk",
    category: "Employee Support",
    description: "Intelligent chatbot for HR queries and policy information",
    icon: Users,
    color: "from-emerald-500 to-emerald-600",
    stats: "90% employee satisfaction",
  },
  {
    id: "resume-analyzer",
    name: "Resume Analyzer",
    category: "Recruitment",
    description: "AI-powered resume screening and candidate matching",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    stats: "60% faster hiring",
  },
  {
    id: "it-helpdesk",
    name: "IT Help Desk",
    category: "Technical Support",
    description: "Automated IT support with ticket generation and troubleshooting",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
    stats: "50% ticket reduction",
  },
  {
    id: "news-generator",
    name: "Technical News Generator",
    category: "Content Creation",
    description: "AI-curated tech news summaries tailored to your interests",
    icon: Brain,
    color: "from-pink-500 to-pink-600",
    stats: "1000+ news sources",
  },
  {
    id: "restaurant-app",
    name: "Restaurant App (Voice)",
    category: "Hospitality",
    description: "Voice-enabled ordering and customer support system",
    icon: Headphones,
    color: "from-red-500 to-red-600",
    stats: "40% order increase",
  },
  {
    id: "codebase-chatbot",
    name: "Codebase Chatbot",
    category: "Developer Tools",
    description: "RAG-powered assistant for your codebase navigation",
    icon: Bot,
    color: "from-cyan-500 to-cyan-600",
    stats: "70% faster onboarding",
  },
  {
    id: "umg-copilot",
    name: "UMG Copilot",
    category: "AI Assistant",
    description: "Advanced copilot for unified management and governance",
    icon: Brain,
    color: "from-indigo-500 to-indigo-600",
    stats: "85% compliance rate",
  },
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("docsync")
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 })

  const renderTabContent = () => {
    switch (activeTab) {
      case "docsync":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <Badge className="mb-4 bg-blue-100 text-blue-700">Azure SaaS Solution</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{docsyncContent.title}</h2>
                <p className="text-blue-600 text-lg font-semibold mb-4">{docsyncContent.subtitle}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Typical Organizational Challenges</h3>
                    <ul className="space-y-2">
                      {docsyncContent.problems.map((problem, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-slate-600">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-600 leading-relaxed text-justify">{docsyncContent.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {docsyncContent.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ContactFormModal
                  triggerText="Schedule Demo"
                  triggerClassName="mt-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8"
                  serviceName="DocSync Demo Request"
                  showIcon={false}
                />
              </div>

              <div className="flex-1">
                <Card className="border-0 shadow-lg p-6 bg-blue-50">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Cloud className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Testimonial</p>
                    </div>
                    <blockquote className="text-slate-700 italic border-l-4 border-blue-600 pl-6">
                      "{docsyncContent.testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-bold text-slate-900">{docsyncContent.testimonial.author}</p>
                      <p className="text-slate-600 text-sm">{docsyncContent.testimonial.title}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        )

      case "teams-tempo":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <Badge className="mb-4 bg-emerald-100 text-emerald-700">Workforce Intelligence</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{teamsTempoContent.title}</h2>
                <p className="text-emerald-600 text-lg font-semibold mb-6">{teamsTempoContent.subtitle}</p>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-justify">{teamsTempoContent.description}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">What You Can Do</h3>
                    <ul className="space-y-3">
                      {teamsTempoContent.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-slate-600">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {teamsTempoContent.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ContactFormModal
                  triggerText="Schedule Demo"
                  triggerClassName="mt-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 px-8"
                  serviceName="Teams Tempo Demo Request"
                  showIcon={false}
                />
              </div>

              <div className="flex-1">
                <Card className="border-0 shadow-lg p-6 bg-emerald-50 h-full">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Users2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    </div>
                    <div className="text-center space-y-4">
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-4xl font-bold text-emerald-600 mb-2">Real-Time</p>
                        <p className="text-slate-600">Workforce Sentiment Analysis</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-4xl font-bold text-emerald-600 mb-2">Azure</p>
                        <p className="text-slate-600">Cognitive Services Powered</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-4xl font-bold text-emerald-600 mb-2">Data-Driven</p>
                        <p className="text-slate-600">HR Decision Making</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        )

      case "m365-governance":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <Badge className="mb-4 bg-purple-100 text-purple-700">Configuration & Compliance</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{m365GovernanceContent.title}</h2>
                <p className="text-purple-600 text-lg font-semibold mb-6">{m365GovernanceContent.subtitle}</p>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-justify">{m365GovernanceContent.description}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Typical Challenges</h3>
                    <ul className="space-y-2">
                      {m365GovernanceContent.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-slate-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {m365GovernanceContent.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <p className="font-semibold text-slate-900 mb-3">Benefits Summary</p>
                    <ul className="space-y-2">
                      {m365GovernanceContent.benefits.map((benefit, i) => (
                        <li key={i} className="text-slate-600 text-sm">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ContactFormModal
                  triggerText="Schedule Demo"
                  triggerClassName="mt-8 rounded-full bg-purple-600 text-white hover:bg-purple-700 px-8"
                  serviceName="M365 Governance Manager Demo Request"
                  showIcon={false}
                />
              </div>

              <div className="flex-1">
                <Card className="border-0 shadow-lg p-6 bg-purple-50 h-full">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Settings className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    </div>
                    <div className="text-center space-y-4">
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-3xl font-bold text-purple-600 mb-2">400+</p>
                        <p className="text-slate-600">M365 Security Settings</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-2xl font-bold text-purple-600 mb-2">100%</p>
                        <p className="text-slate-600">Compliance Coverage</p>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <p className="text-2xl font-bold text-purple-600 mb-2">Zero</p>
                        <p className="text-slate-600">Configuration Drift</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        )

      case "ai-products":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-6 bg-blue-100 text-blue-700 px-6 py-2">AI Product Suite</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                How NathCorp Keeps You AI-Ready with AI Development Solutions
              </h2>
              <p className="text-xl text-slate-600">
                We bring optimized value to your business through our comprehensive services, industry-leading expertise, and network of innovated partners.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 py-8 sm:py-12">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">30%</p>
                <p className="text-slate-600 text-xs sm:text-sm">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">70%</p>
                <p className="text-slate-600 text-xs sm:text-sm">Automation</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">20%</p>
                <p className="text-slate-600 text-xs sm:text-sm">Revenue Growth</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">40%</p>
                <p className="text-slate-600 text-xs sm:text-sm">Downtime Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">50%</p>
                <p className="text-slate-600 text-xs sm:text-sm">Reduced Breach Risks</p>
              </div>
            </div>

            {/* AI Products Grid */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">AI Products</h3>
                <p className="text-slate-600 text-justify">Our comprehensive suite of AI-powered solutions designed for enterprise challenges.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:scale-105">
                      <div className={`h-40 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <motion.div
                          className="flex items-center justify-center h-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          <product.icon className="h-16 w-16 text-white opacity-80" />
                        </motion.div>
                      </div>

                      <CardHeader className="pb-3">
                        <Badge className="w-fit mb-3 bg-slate-100 text-slate-700">{product.category}</Badge>
                        <CardTitle className="text-xl text-slate-900">{product.name}</CardTitle>
                        <CardDescription className="text-slate-600">{product.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm text-slate-500">{product.stats}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ⬇️ NEW: AI Development Services Section (after products) */}
            <div className="py-16 border-t border-slate-200">
              <div className="max-w-3xl mx-auto text-center mb-24">
                <Badge className="mb-6 bg-blue-100 text-blue-700 px-6 py-2">Services</Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Our Comprehensive Suite of AI Development Services
                </h3>
                <p className="text-lg text-slate-600">
                  As competition in the business world intensifies, so does our capabilities.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - 3 Services */}
                  <div className="space-y-8">
                    {aiServices.slice(0, 3).map((service) => (
                      <div key={service.id} className="group">
                        <div
                          className={`
                            rounded-2xl border bg-slate-50 hover:shadow-lg cursor-pointer h-full
                            transition-all duration-300
                            ${service.size === "large" ? "p-10" : "p-8"}
                            border-slate-200 hover:border-blue-300
                          `}
                        >
                          <div
                            className={`
                              inline-flex items-center justify-center mb-6 text-4xl lg:text-5xl
                              rounded-2xl px-4 py-3
                              bg-gradient-to-r ${service.color} text-white
                            `}
                          >
                            {service.icon}
                          </div>

                          <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h4>

                          <p className="text-slate-600 leading-relaxed text-base text-justify">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column - 2 Services */}
                  <div className="space-y-8">
                    {aiServices.slice(3, 5).map((service) => (
                      <div key={service.id} className="group">
                        <div
                          className={`
                            rounded-2xl border bg-slate-50 hover:shadow-lg cursor-pointer h-full
                            transition-all duration-300
                            ${service.size === "large" ? "p-10" : "p-8"}
                            border-slate-200 hover:border-blue-300
                          `}
                        >
                          <div
                            className={`
                              inline-flex items-center justify-center mb-6 text-4xl lg:text-5xl
                              rounded-2xl px-4 py-3
                              bg-gradient-to-r ${service.color} text-white
                            `}
                          >
                            {service.icon}
                          </div>

                          <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h4>

                          <p className="text-slate-600 leading-relaxed text-base text-justify">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Capabilities Section */}
            <div className="space-y-12">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-3">
                  Next-gen Features to Elevate Your Existing Digital Products
                </h3>
                <p className="text-slate-600">
                  Make your existing digital products more faster, smarter, and user-centric with the integration of Artificial Intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-white group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {capability.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Ready to Transform Your Business with AI?</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our experts help you implement the perfect AI solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <ContactFormModal
                  triggerText="Schedule a Demo"
                  triggerClassName="rounded-full bg-white text-blue-600 hover:bg-slate-100 px-6 sm:px-8 text-sm sm:text-base"
                  serviceName="Product Demo Request"
                  showIcon={true}
                />
                <ContactFormModal
                  triggerText="Contact Sales"
                  triggerClassName="rounded-full border-white hover:bg-white/10 text-white px-6 sm:px-8 text-sm sm:text-base border-2"
                  serviceName="Sales Inquiry"
                  showIcon={false}
                  variant="outline"
                />
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Products - NathCorp"
        description="Explore NathCorp's comprehensive suite of products including DocSync, Teams Tempo, M365 Governance Manager, and AI Solutions."
        keywords="products, DocSync, Teams Tempo, M365 Governance, AI products"
        canonicalUrl="/products"
      />

      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                {/* <Badge className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-6 py-2">
                  NathCorp Products
                </Badge> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight px-4"
              >
                Enterprise Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Modern Business
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto px-4"
              >
                Discover our comprehensive suite of enterprise solutions including secure content distribution, workforce intelligence, governance management, and cutting-edge AI products.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-start sm:justify-center mb-12 sm:mb-16 overflow-x-auto pb-2 -mx-4 px-4">
              <div className="inline-flex gap-2 sm:gap-3 bg-slate-100 p-2 rounded-full border border-slate-200 min-w-max">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm md:text-base ${
                      activeTab === cat.id
                        ? "bg-white text-blue-600 shadow-md"
                        : "bg-transparent text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <cat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
