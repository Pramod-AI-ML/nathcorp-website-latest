"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import ContactFormModal from "@/components/contact-form-modal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Users, Shield, Settings, Database, Network, MousePointer2, Key, CloudLightning } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import { ThemeProvider } from "@/components/theme-provider"
import MetaTags from "@/components/seo/meta-tags"

const identityServices = [
  {
    title: "Active Directory Design & Deployment",
    description: "Design and deploy on-prem Active Directory environments aligned with enterprise security and scalability requirements.",
    icon: Database,
    color: "from-blue-600 to-cyan-400",
    bgLight: "bg-blue-50",
  },
  {
    title: "Azure AD / Entra ID Implementation",
    description: "Implement cloud-based identity services for secure authentication and access across applications and devices.",
    icon: CloudLightning,
    color: "from-indigo-600 to-blue-500",
    bgLight: "bg-indigo-50",
  },
  {
    title: "Hybrid Identity Architecture",
    description: "Integrate on-prem AD with cloud identity for seamless user access across environments.",
    icon: Network,
    color: "from-cyan-600 to-teal-400",
    bgLight: "bg-cyan-50",
  },
  {
    title: "Domain Rationalization & Consolidation",
    description: "Simplify complex AD environments by reducing domains and improving manageability.",
    icon: Settings,
    color: "from-emerald-600 to-green-400",
    bgLight: "bg-emerald-50",
  },
  {
    title: "Domain Migration & M&A Support",
    description: "Support mergers, acquisitions, and divestitures with secure domain migration and separation strategies.",
    icon: Users,
    color: "from-purple-600 to-pink-400",
    bgLight: "bg-purple-50",
  },
  {
    title: "Identity Security & Access Governance",
    description: "Implement secure authentication, access control, and identity governance models.",
    icon: Shield,
    color: "from-orange-500 to-red-400",
    bgLight: "bg-orange-50",
  },
]

const businessOutcomes = [
  "Stronger identity and access security",
  "Simplified user and access management", 
  "Reduced security risks and attack surface",
  "Seamless cloud and hybrid access",
  "Smooth domain migration for M&A scenarios",
]

export default function ActiveDirectoryPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Active Directory & Identity Services - Enterprise Identity Management"
        description="Comprehensive Active Directory and identity services including Azure AD, hybrid identity, domain migration, and access governance for modern enterprises."
        keywords="Active Directory, Azure AD, Entra ID, identity management, hybrid identity, domain migration, access governance"
        canonicalUrl="/services/active-directory"
      />

      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />

        <PageHeader
          title="Active Directory & Identity Services"
          subtitle="Build secure, scalable identity systems for modern enterprises."
          backgroundImage="/images/active-directory-hero.jpg"
        />

        {/* Value Proposition Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">
                  Identity That Enables Secure <span className="text-blue-600">Digital Transformation</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-0 leading-relaxed font-medium">
                  As enterprises move to cloud and hybrid environments, identity becomes the critical control plane for security and access. NathCorp designs and modernizes identity architectures that simplify access management, reduce risk, and support scalable cloud adoption.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Identity & AD Service Areas</h2>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Enterprise Identity Architecture</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {identityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative border border-slate-200 bg-white hover:border-blue-500/50 transition-all duration-500 h-full overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
                    <CardContent className="p-10 relative z-10">
                      {/* Decorative Background Icon */}
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
                    
                    {/* Bottom Border Accent */}
                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-700`} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Outcomes Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                  Driving Predictable <br />
                  <span className="text-blue-400">Business Outcomes</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                  We don&apos;t just implement identity systems; we ensure your identity architecture becomes a strategic enabler that delivers measurable security and operational benefits.
                </p>
                <div className="inline-flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                  <MousePointer2 className="w-4 h-4" />
                  <span>NathCorp Methodology</span>
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
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                        <CheckCircle className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <span className="text-slate-100 text-lg font-semibold">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luxury CTA */}
        <section className="py-16 sm:py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl md:rounded-[3rem] bg-[#f8fbff] border border-blue-100 shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 text-slate-900 tracking-tight leading-tight">
                Let's Build a Secure <br className="hidden sm:block" /> Identity Foundation
              </h2>
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <ContactFormModal
                  triggerText="Speak to Our Identity Specialists"
                  triggerClassName="luxury-button rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg text-white font-bold shadow-2xl hover:shadow-blue-500/30 transition-all w-full max-w-xs sm:max-w-none sm:w-auto"
                  serviceName="Active Directory & Identity Services"
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
