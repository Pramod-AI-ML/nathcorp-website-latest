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
import { CheckCircle, Settings, GitBranch, Zap, ArrowRight, Rocket, Container, Workflow, Monitor } from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

const devopsServices = [
  {
    title: "CI/CD Pipelines",
    description:
      "Automated build, test, and deployment workflows that reduce manual effort and release errors.",
    icon: GitBranch,
    color: "from-indigo-500 to-blue-500",
    image: "/images/ci-cd.png",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Consistent provisioning and change control with auditable, reusable infrastructure templates.",
    icon: Settings,
    color: "from-purple-600 to-pink-400",
    image: "/images/IAS.png",
  },
  {
    title: "Monitoring & Alerting",
    description:
      "Real-time visibility into system health with intelligent alerting and faster incident response.",
    icon: Zap,
    color: "from-emerald-500 to-green-400",
    image: "/images/monitoring.png",
  },
]

const devopsCapabilities = [
  "CI/CD implementation for automated builds, tests, and deployments",
  "Kubernetes orchestration to run workloads reliably at scale",
  "Infrastructure as Code (IaC) for repeatable, version-controlled provisioning",
  "Configuration management to keep environments consistent across stages",
  "DevSecOps integration with security checks built into pipelines",
  "Performance monitoring for proactive reliability improvements",
  "Centralized logs & analysis to speed up troubleshooting and root cause analysis",
  "Disaster recovery planning to improve resilience and recovery readiness",
]



export default function DevOpsPage() {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="DevOps Services - Development & Operations Automation"
        description="Professional DevOps services including CI/CD pipelines, infrastructure automation, and continuous monitoring solutions."
        keywords="DevOps, CI/CD, infrastructure automation, continuous integration, deployment automation, monitoring"
        canonicalUrl="/services/devops"
      />

      <main className="min-h-screen">
        <Navbar />
        <PageHeader
          title="DevOps Services"
          subtitle="Development and operations automation for faster, reliable deployments"
          backgroundImage="/images/devops.png"
        />

        {/* Overview Section */}
        <section className="py-20 bg-white" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-800">
                Streamline Development and Operations
              </h2>
              <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
                Our DevOps services remove friction from the software delivery lifecycle by unifying development and operations around automation, consistency, and reliability. We help you ship more frequently, reduce release risk, and maintain stable environments—so teams spend less time fixing deployments and more time building value.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {devopsCapabilities.map((capability, index) => (
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
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -6 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <CardContent className="p-0">
                      {service.image && (
                        <div className="h-48 overflow-hidden bg-white flex items-center justify-center">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={400}
                            height={300}
                            className="object-contain w-full h-full p-4"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <ContactFormModal
                triggerText="Accelerate Your DevOps"
                triggerClassName="luxury-button rounded-full px-8 py-6 text-white text-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                serviceName="DevOps Services"
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
