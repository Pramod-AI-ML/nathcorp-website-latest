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
import { CheckCircle, Globe, Zap, Target, ArrowRight, CloudUpload, Cpu, GitBranch, Lock, TrendingUp, Workflow } from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

const transformationFeatures = [
  {
    title: "Legacy Application Modernization",
    description: "Replace outdated systems with secure, cloud-native solutions",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cloud Transformation",
    description: "Hybrid and full cloud adoption designed for ROI and efficiency",
    icon: CloudUpload,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Process Automation",
    description: "Remove manual work with intelligent workflow automation",
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Data & Systems Integration",
    description: "Connected platforms for faster decision-making",
    icon: GitBranch,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Modern Architecture Design",
    description: "Microservices, APIs and stronger security baselines",
    icon: Lock,
    color: "from-purple-600 to-pink-400",
  },
  {
    title: "Continuous Optimization",
    description: "Modernization that evolves with your business strategy",
    icon: TrendingUp,
    color: "from-orange-500 to-red-400",
  },
]

const deliveryFramework = [
  {
    title: "Assess & Prioritize",
    description: "Business case validation, technical evaluation & modernization roadmap",
    image: "/images/priority.png",
  },
  {
    title: "Modernize & Migrate",
    description: "Build in phases using DevOps automation and zero-downtime releases",
    image: "/images/modern.png",
  },
  {
    title: "Optimize & Scale",
    description: "Performance tuning, adoption enablement & ongoing improvements",
    image: "/images/monitoring.png",
  },
]

const businessImpact = [
  "Reduced operational cost and legacy risk",
  "Improved app performance and uptime",
  "Greater development and release velocity",
  "Security and compliance by design",
  "Platform-ready foundation for future innovation",
]

export default function DigitalTransformationPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Digital Transformation | NathCorp"
        description="Accelerate innovation with legacy modernization, cloud transformation, and process automation. Build for what's next with NathCorp."
        keywords="digital transformation, app modernization, legacy modernization, cloud transformation, process automation, modern architecture"
        canonicalUrl="/services/digital-transformation"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Digital Transformation"
          subtitle="Accelerate innovation. Retire limitations. Build for what's next."
          backgroundImage="/images/digital-transformation.png"
        />

        {/* Transformation Overview */}

        <section className="py-20 bg-white" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
                Rethink How Technology Enables Your Business
              </h2>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                We partner with IT leadership to modernize the systems and processes that hold your business back. Our approach removes legacy burdens, enhances agility, and strengthens your digital foundation for future scale.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Approach */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800">
              Our Modernization Delivery Framework
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {deliveryFramework.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <CardContent className="p-0">
                      {framework.image && (
                        <div className="h-48 overflow-hidden bg-white flex items-center justify-center">
                          <Image
                            src={framework.image}
                            alt={framework.title}
                            width={400}
                            height={300}
                            className="object-contain w-full h-full p-4"
                          />
                        </div>
                      )}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">{framework.title}</h3>
                        <p className="text-slate-600">{framework.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                What You Gain
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessImpact.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start group"
                  >
                    <div className="mr-3 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-blue-600 group-hover:text-indigo-600 transition-colors duration-200" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors duration-200">{impact}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technology Ecosystem */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
                Powered by Microsoft Cloud + Modern Engineering
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 leading-relaxed">
                Azure ▪ AKS ▪ DevOps ▪ Terraform ▪ Entra ID ▪ API-First Integrations
              </p>

              <div className="text-center">
                <ContactFormModal
                  triggerText="Let's Modernize with Purpose"
                  triggerClassName="luxury-button rounded-full px-8 py-6 text-white text-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  serviceName="App Modernization & Digital Transformation"
                  showIcon={true}
                />
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
