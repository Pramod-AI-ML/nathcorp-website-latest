"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import ContactFormModal from "@/components/contact-form-modal"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle, 
  Shield, 
  Monitor, 
  Settings, 
  Cloud, 
  Users, 
  MousePointer2,
  AlertTriangle,
  TrendingUp,
  Zap,
  Lock,
  Database,
  Headphones
} from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

const itChallenges = [
  "Frequent downtime and reactive IT support",
  "Security and compliance gaps in daily operations", 
  "Inconsistent patching and update processes",
  "Limited visibility into system health and performance",
  "Rising IT operational costs and inefficiencies"
]

const managedServiceAreas = [
  {
    title: "Microsoft 365 Managed Services",
    description: "End-to-end administration and optimization of Microsoft 365 to ensure productivity, security, and seamless collaboration.",
    icon: Cloud,
    color: "from-blue-600 to-cyan-400",
    bgLight: "bg-blue-50",
  },
  {
    title: "Exchange, SharePoint & Teams Administration",
    description: "Ongoing management of mail flow, collaboration platforms, permissions, policies, and lifecycle governance.",
    icon: Users,
    color: "from-indigo-600 to-blue-500",
    bgLight: "bg-indigo-50",
  },
  {
    title: "Active Directory & Core Infrastructure Management",
    description: "Secure management of Active Directory, DNS, DHCP, ADCS, and WSUS to support identity and network services.",
    icon: Database,
    color: "from-cyan-600 to-teal-400",
    bgLight: "bg-cyan-50",
  },
  {
    title: "Server Patching & Update Management",
    description: "Automated patching and updates to reduce vulnerabilities, downtime, and compliance risks.",
    icon: Shield,
    color: "from-emerald-600 to-green-400",
    bgLight: "bg-emerald-50",
  },
  {
    title: "Proactive Monitoring & Incident Management",
    description: "24/7 monitoring, alerting, root-cause analysis, and rapid incident resolution to maintain high availability.",
    icon: Monitor,
    color: "from-purple-600 to-pink-400",
    bgLight: "bg-purple-50",
  },
  {
    title: "Security, Compliance & Governance Support",
    description: "Continuous security management, compliance monitoring, and governance framework implementation.",
    icon: Lock,
    color: "from-orange-500 to-red-400",
    bgLight: "bg-orange-50",
  },
]

const partnershipModels = [
  "Dedicated IT support pods (L2/L3 engineers)",
  "Business-hours or 24/7 managed services models",
  "Project-based services (migrations, upgrades, rollouts)",
  "Hybrid delivery (onsite + offshore support)",
  "SLA-driven operations with transparent reporting"
]

const businessOutcomes = [
  "Improved system uptime and availability",
  "Reduced IT incidents through proactive management",
  "Enhanced security and compliance posture",
  "Faster issue resolution with defined SLAs",
  "Optimized Microsoft 365 usage and licensing costs",
  "Increased end-user productivity and satisfaction"
]

const supportApproach = [
  {
    title: "Proactive and automated IT operations",
    icon: Zap,
    description: "Automation-first approach to prevent issues before they occur"
  },
  {
    title: "Secure and resilient environments", 
    icon: Shield,
    description: "Security-first management with continuous monitoring"
  },
  {
    title: "Continuous monitoring and incident prevention",
    icon: Monitor,
    description: "24/7 visibility with root-cause analysis and rapid response"
  },
  {
    title: "Governance and best-practice alignment",
    icon: Settings,
    description: "Microsoft-aligned best practices and compliance frameworks"
  }
]

export default function SupportPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Support Services - IT Managed Services & Operations"
        description="Transforming IT Operations into a Business Enabler with proactive Microsoft-first managed services, 24/7 monitoring, and automated operations."
        keywords="IT managed services, Microsoft 365 support, proactive monitoring, IT operations, technical support, infrastructure management"
        canonicalUrl="/services/support"
      />

      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />

        <PageHeader
          title="Support Services"
          subtitle="Transforming IT Operations into a Business Enabler"
          backgroundImage="/images/support-services.png"
        />

        {/* Value Proposition Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">
                  IT Should Enable Growth—<span className="text-orange-600">Not Slow It Down</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-0 leading-relaxed font-medium">
                  NathCorp's Support Services provide proactive, secure, and reliable IT management across your digital workplace, infrastructure, and servers, allowing your teams to focus on innovation while we ensure stability.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IT Challenges Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">IT Challenges We Address</h2>
                <p className="text-slate-600 text-lg">Common pain points that prevent IT from being a strategic enabler</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {itChallenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-6 w-6 text-orange-500 mt-1" />
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Managed Services Approach</h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                We follow a Microsoft-first managed services model built on automation, security, and continuous optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {supportApproach.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <approach.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{approach.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{approach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-slate-50" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core IT Managed Service Areas</h2>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Microsoft-First Managed Services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {managedServiceAreas.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative border border-slate-200 bg-white hover:border-orange-500/50 transition-all duration-500 h-full overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-500/10">
                    <CardContent className="p-10 relative z-10">
                      <service.icon className="absolute -top-6 -right-6 w-32 h-32 text-slate-50 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 group-hover:rotate-12 transform" />
                      
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                    
                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-700`} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
                  How We Partner <br />
                  <span className="text-orange-600">With You</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                  Flexible engagement models designed to meet your specific operational requirements and business objectives.
                </p>
                <div className="inline-flex items-center space-x-2 text-orange-600 font-bold uppercase tracking-widest text-xs">
                  <MousePointer2 className="w-4 h-4" />
                  <span>Partnership Models</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {partnershipModels.map((model, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-6 rounded-2xl bg-orange-50/50 border border-orange-100 group hover:bg-orange-50 transition-all cursor-default"
                  >
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                        <Headphones className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <span className="text-slate-800 text-lg font-semibold">{model}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
                  Business Outcomes <br />
                  <span className="text-orange-400">You Can Expect</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                  Support services are not just about fixing issues—they&apos;re about preventing them and continuously improving IT stability, security, and performance.
                </p>
                <div className="inline-flex items-center space-x-2 text-orange-400 font-bold uppercase tracking-widest text-xs">
                  <TrendingUp className="w-4 h-4" />
                  <span>Measurable Results</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {businessOutcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default"
                  >
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                        <CheckCircle className="h-5 w-5 text-orange-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <span className="text-slate-100 text-lg font-semibold">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why NathCorp Section */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why NathCorp for IT Managed Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Deep expertise across Microsoft 365, AD, Exchange, SharePoint, and Teams",
                  "Proactive monitoring and automation-driven operations", 
                  "Security-first IT management approach",
                  "Scalable and flexible engagement models",
                  "Predictable IT spend with reduced operational risk"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 text-left"
                  >
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl md:rounded-[3rem] bg-slate-900 border border-orange-100 shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-slate-400 tracking-tight leading-tight">
                Transform IT Operations into <br className="hidden sm:block" /> a Business Enabler
              </h2>
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <ContactFormModal
                  triggerText="Talk to Our IT Managed Services Experts"
                  triggerClassName="luxury-button rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg text-white font-bold shadow-2xl hover:shadow-orange-500/30 transition-all w-full max-w-xs sm:max-w-none sm:w-auto"
                  serviceName="Support Services"
                  showIcon={true}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
