"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import ContactFormModal from "@/components/contact-form-modal"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Lock, Eye, Database, AlertTriangle, Monitor, Zap, FileCheck, ShieldCheck, Activity } from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

const securityServices = [
  {
    title: "Identity & Access Security",
    description: "Secure user access using Microsoft Entra ID with MFA, Conditional Access, privileged access controls, and identity risk monitoring.",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    image: "/images/Access-security.png",
  },
  {
    title: "Email & Collaboration Security",
    description: "Protect against phishing, malware, and impersonation attacks using advanced email security, Safe Links, Safe Attachments, and domain protection.",
    icon: Lock,
    color: "from-purple-600 to-pink-400",
    image: "/images/Email-security.png",
  },
  {
    title: "Endpoint & Device Security",
    description: "Secure and manage devices using Microsoft Defender and Intune with compliance policies, attack surface reduction, and automated response.",
    icon: Monitor,
    color: "from-emerald-500 to-green-400",
    image: "/images/Endpoint-security.png",
  },
  {
    title: "Threat Detection & Response",
    description: "Enable real-time threat detection, investigation, and remediation through Microsoft security analytics and centralized dashboards.",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-400",
    image: "/images/threat-detection.png",
  },
  {
    title: "Data Protection & Compliance",
    description: "Safeguard sensitive data using DLP, sensitivity labels, encryption, retention policies, and Microsoft Purview compliance controls.",
    icon: Database,
    color: "from-cyan-500 to-teal-400",
    image: "/images/data-protection.png",
  },
]

const securityCapabilities = [
  "Multi-Factor Authentication & Conditional Access implementation",
  "Advanced email security with Safe Links, Safe Attachments, and domain protection",
  "Endpoint protection with compliance policies and attack surface reduction",
  "Real-time threat monitoring and automated incident response",
  "Data Loss Prevention (DLP) and sensitivity labeling",
  "Zero Trust architecture aligned with Microsoft Secure Score",
  "Continuous security monitoring and visibility dashboards",
  "Compliance controls for regulatory requirements and audit readiness",
]

const securityChallenges = [
  "Identity-based attacks and credential compromise",
  "Phishing, malware, and email impersonation threats", 
  "Unsecured or non-compliant devices",
  "Limited threat visibility and delayed response",
  "Compliance and audit readiness gaps",
]

const securityApproach = [
  "Proactive threat prevention",
  "Continuous monitoring and detection", 
  "Policy-driven security enforcement",
  "Compliance and governance readiness",
]

export default function SecurityServicesPage() {
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Security Services - Microsoft-First Cyber Defense & Compliance"
        description="Enterprise security services with Microsoft Defender, Entra ID, and Purview. Zero Trust security, identity protection, and compliance solutions."
        keywords="security services, Microsoft Defender, Entra ID, cybersecurity, compliance, Zero Trust, endpoint security"
        canonicalUrl="/services/security"
      />

      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <PageHeader
          title="Cybersecurity Services"
          description="Protect your business with enterprise-grade security solutions and expert consulting"
          backgroundImage="/images/Security.png"
        />

        {/* Overview Section */}
        <section className="py-24 bg-white relative overflow-hidden" ref={contentRef}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">
                  Enterprise Security & <span className="text-blue-600">Cyber Defense</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Modern cyber threats target identities, endpoints, email, and data simultaneously. NathCorp delivers Microsoft-first security services that help organizations reduce risk, improve visibility, and maintain compliance—without disrupting business operations. Our strategy is built on <strong>Zero Trust</strong> foundations.
                </p>
              </motion.div>
            </div>

            {/* Grid of Capabilities */}
            <div className="max-w-6xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:bg-white hover:shadow-md transition-all"
                  >
                    <ShieldCheck className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-700">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Main Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col bg-white group">
                    {service.image && (
                      <div className="h-52 overflow-hidden relative bg-slate-100 flex items-center justify-center">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={300}
                          className="object-contain w-full h-full p-6 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      </div>
                    )}
                    <CardContent className="p-8 flex-grow">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-800 tracking-tight">{service.title}</h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section - High Contrast */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">Security Challenges <br /><span className="text-red-500 font-medium text-2xl uppercase tracking-widest">We Resolve</span></h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Cybersecurity is no longer about just setting up a firewall. It requires addressing systemic vulnerabilities across your entire digital footprint.
                  </p>
                  <div className="space-y-4">
                    {securityChallenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-500 group"
                      >
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-4 flex-shrink-0" />
                        <span className="text-slate-700 font-semibold">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                   <h3 className="text-2xl font-bold mb-8 flex items-center"><Activity className="mr-3 text-blue-400" /> Microsoft-First Approach</h3>
                   <p className="text-slate-400 mb-8 leading-relaxed italic">"Our security strategy is aligned with Zero Trust principles and Microsoft Secure Score recommendations."</p>
                   <div className="grid grid-cols-1 gap-6">
                      {securityApproach.map((item, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                           <div className="w-2 h-2 rounded-full bg-blue-400" />
                           <span className="font-medium">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment & Dark Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden" ref={statsRef}>
          <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-[0.03]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              >
                <div className="inline-flex p-3 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Our Security Commitment</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  Security is an ongoing journey, not a destination. We partner with you to adapt to the evolving threat landscape.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Continuous Monitoring", icon: Eye, text: "24/7 visibility and real-time threat detection across your Microsoft environment.", color: "text-blue-400" },
                { title: "Proactive Defense", icon: Zap, text: "Enterprise-grade security without disrupting end-user productivity or business flow.", color: "text-purple-400" },
                { title: "Measurable Results", icon: FileCheck, text: "Continuous improvement and measurable risk reduction with compliance-ready reporting.", color: "text-emerald-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-10 rounded-[2rem] text-center hover:bg-white/10 transition-all"
                >
                  <item.icon className={`h-10 w-10 mx-auto mb-6 ${item.color}`} />
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-slate-400 text-[15px] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <ContactFormModal
                triggerText="Request Security Assessment"
                triggerClassName="luxury-button rounded-full px-12 py-8 text-white text-lg font-bold shadow-2xl hover:shadow-blue-500/30 transition-all"
                serviceName="Security Assessment"
                showIcon={true}
              />
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </ThemeProvider>
  )
}