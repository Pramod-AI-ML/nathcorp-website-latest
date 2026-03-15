"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import ContactFormModal from "@/components/contact-form-modal"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Cloud, Shield, Zap, MousePointer2, Search, Building, Database, Settings, Monitor, Users } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

const cloudServices = [
  {
    title: "Cloud Readiness Assessment & Strategy",
    description: "Assess existing infrastructure, workloads, and costs to define a cloud roadmap aligned with business objectives.",
    icon: Search,
    color: "from-blue-600 to-cyan-400",
    bgLight: "bg-blue-50",
  },
  {
    title: "Hybrid & Azure Cloud Architecture",
    description: "Design and deploy secure Azure and hybrid environments that balance flexibility, compliance, and performance.",
    icon: Building,
    color: "from-indigo-600 to-blue-500",
    bgLight: "bg-indigo-50",
  },
  {
    title: "Workload & Application Migration",
    description: "Migrate servers, applications, and workloads to Azure using phased, low-risk migration approaches.",
    icon: Database,
    color: "from-cyan-600 to-teal-400",
    bgLight: "bg-cyan-50",
  },
  {
    title: "Cloud Security, Governance & Cost Optimization",
    description: "Evaluate cloud security posture and spending to reduce risk, control costs, and improve ROI.",
    icon: Shield,
    color: "from-emerald-600 to-green-400",
    bgLight: "bg-emerald-50",
  },
  {
    title: "Endpoint & Modern Workplace Enablement",
    description: "Enable secure access from anywhere using modern endpoint and virtual desktop technologies.",
    icon: Users,
    color: "from-purple-600 to-pink-400",
    bgLight: "bg-purple-50",
  },
  {
    title: "Managed Cloud Operations",
    description: "Ongoing monitoring, automation, performance tuning, and lifecycle management.",
    icon: Monitor,
    color: "from-orange-500 to-red-400",
    bgLight: "bg-orange-50",
  },
]

const businessOutcomes = [
  "Reduced infrastructure and operational costs",
  "Improved agility, scalability, and uptime",
  "Faster deployment of new services",
  "Enhanced security and governance",
  "Optimized cloud spend with predictable performance",
]

export default function CloudServicesPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Cloud Services - Migration, Management & Optimization"
        description="Comprehensive cloud services including migration, security, optimization, and 24/7 management for Azure."
        keywords="cloud services, cloud migration, cloud security, Azure, cloud optimization"
        canonicalUrl="/services/cloud-services"
      />

      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />

        <PageHeader
          title="Cloud Services"
          subtitle="Build cloud foundations that scale with your business."
          backgroundImage="/images/cloud-services.png"
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
                  Cloud That Solves Real <span className="text-blue-600">Infrastructure Challenges</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-0 leading-relaxed font-medium">
                  Legacy infrastructure limits speed, scalability, and innovation. NathCorp enables organizations to transition to Azure and hybrid cloud models through structured planning, secure execution, and continuous optimization.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid - No Images, High Interaction */}
        <section className="py-24" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Cloud Service Areas</h2>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Strategic Cloud Lifecycle Management</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
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

        {/* Outcomes Section - Modern Dashboard Style */}
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
                  We don&apos;t just move you to the cloud; we ensure your infrastructure becomes a strategic asset that delivers tangible value from day one.
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
                Ready to Build a Cloud Foundation <br className="hidden sm:block" /> That Accelerates Growth?
              </h2>
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                <ContactFormModal
                  triggerText="Speak to Our Cloud Specialists"
                  triggerClassName="luxury-button rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-base sm:text-lg text-white font-bold shadow-2xl hover:shadow-blue-500/30 transition-all w-full max-w-xs sm:max-w-none sm:w-auto"
                  serviceName="Cloud Services"
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