"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactFormModal from "@/components/contact-form-modal"
import { CheckCircle, Rocket, GitBranch, Container, Workflow, Monitor, Zap, ArrowRight, Layers, Settings } from "lucide-react"
import Image from "next/image"
import CallToAction from "@/components/call-to-action"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MetaTags from "@/components/seo/meta-tags"

const features = [
  {
    icon: Rocket,
    title: "Progressive Delivery",
    description: "Safer releases with traffic shifting and automated rollback",
    accent: "bg-emerald-500/10 text-emerald-600"
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Standardized Docker packaging for secure, portable workloads",
    accent: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Workflow,
    title: "Cloud Orchestration",
    description: "Kubernetes deployments designed for resilience and scale",
    accent: "bg-indigo-500/10 text-indigo-600"
  },
  {
    icon: Monitor,
    title: "Intune Device Provisioning",
    description: "Automated endpoint setup and secure configuration policies",
    accent: "bg-cyan-500/10 text-cyan-600"
  },
  {
    icon: Zap,
    title: "Monitoring & Health Validation",
    description: "Continuous visibility for proactive reliability improvements",
    accent: "bg-amber-500/10 text-amber-600"
  },
  {
    icon: GitBranch,
    title: "Configuration & Secrets Management",
    description: "Secure policy-driven deployment configuration",
    accent: "bg-rose-500/10 text-rose-600"
  },
]

const methodologies = [
  {
    title: "Cloud-Native Deployment",
    description: "Modern deployment strategies optimized for cloud environments",
    features: ["Load-balanced workloads", "Auto-scaling & managed orchestration"],
  },
  {
    title: "Workplace App & Device Deployment",
    description: "Automated application and endpoint management solutions",
    features: ["Intune policies", "Automated application delivery", "Secure onboarding"],
  },
  {
    title: "Governed & Compliant Releases",
    description: "Enterprise-grade release management with full governance",
    features: ["Version control", "Audit trails & approval workflows"],
  },
]

const toolsStack = [
  { name: "Jenkins", category: "CI/CD", logo: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg" },
  { name: "GitLab CI", category: "CI/CD", logo: "https://icon.icepanel.io/Technology/svg/GitLab.svg" },
  { name: "Docker", category: "Containerization", logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
  { name: "Kubernetes", category: "Orchestration", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/960px-Kubernetes_logo_without_workmark.svg.png?_=20190926210707" },
  { name: "Terraform", category: "IaC", logo: "https://img.icons8.com/color/512/terraform.png" },
  { name: "Ansible", category: "Configuration", logo: "https://icon.icepanel.io/Technology/svg/Ansible.svg" },
  { name: "Grafana", category: "Visualization", logo: "https://grafana.com/static/img/menu/grafana2.svg" },
  { name: "Azure Monitor", category: "Observability", logo: "https://swimburger.net/media/ppnn3pcl/azure.png" },
]

export default function ModernDeploymentPage() {
  const stackRef = useRef(null)
  const isStackInView = useInView(stackRef, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <MetaTags
        title="Modern Deployment Services | NathCorp"
        description="Advanced DevOps and deployment solutions including CI/CD pipelines, containerization, and automated deployment strategies."
        keywords="modern deployment, DevOps, CI/CD, containerization, Docker, Kubernetes, automation, deployment pipelines"
        canonicalUrl="/services/modern-deployment"
      />
      <Navbar />
      <PageHeader
        title="Modern Deployment Services"
        description="Accelerate software delivery with precision-engineered automation and cloud-native resilience."
        backgroundImage="/images/modern-deployment.png"
      />

      {/* Hero Overview */}
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
              Transform Your <span className="text-emerald-600">Software Delivery</span>
            </motion.h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We design deployment strategies that turn infrastructure into a competitive advantage—enabling rapid, risk-free releases through automated recovery and consistent environmental governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${feature.accent}`}>
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stack - Framed as non-restricting */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" ref={stackRef}>
        <div className="absolute inset-0 bg-[url('/images/grid-white.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our <span className="text-emerald-400">Core Technology Stack</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                While our expertise encompasses the entire DevOps ecosystem, we utilize these industry-standard technologies as the bedrock for our high-performance deployment architectures.
              </p>
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Layers className="h-6 w-6 text-emerald-400 mt-1 shrink-0" />
                <p className="text-sm text-slate-300 italic">
                  &quot;Restricting innovation is not our style. Our team is proficient in a vast array of proprietary and open-source tools; we tailor the stack to fit your existing environment and future goals.&quot;
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {toolsStack.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStackInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-square bg-white/10 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5 hover:bg-white/15 transition-all"
                >
                  <div className="h-12 w-12 relative mb-3 transition-all duration-500">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-400 transition-colors">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Advanced Methodologies</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methodologies.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-emerald-600 transition-colors">{method.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">{method.description}</p>
                  <ul className="space-y-4">
                    {method.features.map((item, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm font-semibold text-slate-700">
                        <div className="mr-3 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Modernize Your Pipeline?</h2>
              <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
                Let&apos;s build a deployment strategy that evolves with your business. Speak to our DevOps architects today.
              </p>
              <div className="flex justify-center">
                <ContactFormModal
                  triggerText="Consult an Architect"
                  triggerClassName="bg-white text-emerald-700 hover:bg-slate-100 px-10 py-7 text-lg font-bold rounded-full shadow-xl transition-all hover:scale-105"
                  serviceName="Modern Deployment Services"
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