import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ServicesCarousel from "@/components/services-carousel";
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Database,
  Globe,
  Lock,
  Server,
  Users,
  Smartphone,
  TestTube,
  Headphones,
  Lightbulb,
  Bot,
  Settings,
} from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import { ServiceSchema } from "@/components/seo/schema-markup"


const allServices = [
  // AI SERVICES
  {
    id: "ai-services",
    title: "AI Services",
    subtitle: "Artificial Intelligence",
    description: "Smart. Automated. Innovative.",
    icon: Bot,
    color: "bg-gradient-to-br from-pink-600 to-pink-400",
    image: "/images/AI-3.png",
    features: [
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "Recommendation engines",
      "Intelligent document processing",
    ],
    longDescription:
      "Our AI services help businesses automate processes, gain insights from data, and create intelligent solutions that drive efficiency and innovation.",
    whyChoose: [
      "Custom AI models designed specifically for your business use case",
      "Faster automation that reduces operational costs",
      "Accurate, secure, and scalable AI pipelines",
      "End-to-end support—from ideation to deployment",
      "Proven expertise in enterprise-grade AI systems",
    ],
  },

  // ACTIVE DIRECTORY
  {
    id: "active-directory",
    title: "Active Directory",
    subtitle: "Secure identity foundations for cloud and hybrid enterprises.",
    description: "Identity Services That Secure Access Across Your Enterprise",
    subDescription: "Control access. Reduce risk. Enable seamless cloud adoption.",
    icon: Users,
    color: "bg-gradient-to-br from-blue-900 to-blue-700",
    image: "/images/AD.png",
    features: [
      "Active Directory design & deployment",
      "Azure AD / Entra ID implementation",
      "Hybrid identity architecture",
      "Domain consolidation & rationalization",
      "Secure access and authentication models",
      "Identity support for cloud migration and M&A",
    ],
    longDescription:
      "Identity is the foundation of modern IT security. NathCorp helps enterprises design, modernize, and manage Active Directory and cloud identity environments—ensuring secure access, simplified management, and seamless integration across on-prem and cloud systems.",
    whyChoose: [
      "Deep AD and Entra ID expertise",
      "Identity-first cloud security approach",
      "Proven enterprise migration experience",
      "Secure, scalable access architecture",
    ],
    ctaText: "Explore Identity Services",
  },

  // SECURITY
  {
    id: "security",
    title: "Security",
    subtitle: "Secure. Compliant. Resilient.",
    description: "Comprehensive Security Solutions to Protect Your Digital Enterprise",
    icon: Lock,
    color: "bg-gradient-to-br from-blue-950 to-blue-900",
    image: "/images/Security.png",
    features: [
      "Identity & Access Security (Microsoft Entra ID)",
      "Multi-Factor Authentication & Conditional Access",
      "Email Security & Phishing Protection",
      "Endpoint & Device Security (Defender + Intune)",
      "Threat Detection & Incident Response",
      "Data Protection & Compliance Controls",
    ],
    longDescription:
      "Protect your organization from modern cyber threats with a Microsoft-first security approach designed to safeguard identities, devices, email, data, and cloud workloads—without impacting productivity or user experience.",
    whyChoose: [
      "Proven expertise across Microsoft Defender, Entra ID, Purview, and Intune",
      "Zero Trust and Microsoft Secure Score–aligned implementations",
      "Proactive threat prevention instead of reactive firefighting",
      "Enterprise-grade security without disrupting end-user productivity",
      "Continuous monitoring, visibility, and measurable risk reduction",
    ],
    ctaText: "Learn More",
  },

  // CLOUD SERVICES
  {
    id: "cloud-services",
    title: "Cloud Services",
    subtitle: "Secure, scalable cloud foundations for modern enterprises.",
    description: "Modernize infrastructure. Improve agility. Reduce operational complexity.",
    icon: Cloud,
    color: "bg-gradient-to-br from-blue-800 to-blue-600",
    image: "/images/cloud-slide.jpg",
    features: [
      "Cloud readiness assessment & TCO analysis",
      "Azure cloud and hybrid architecture design",
      "Secure Azure infrastructure deployment",
      "On-prem to cloud workload migration",
      "Cloud risk assessment & cost optimization",
      "Managed cloud operations & automation",
    ],
    longDescription:
      "NathCorp helps enterprises modernize their IT environments through secure, scalable, and cost-efficient cloud solutions. From cloud readiness and migration to ongoing optimization, we design cloud strategies that align technology with business goals—ensuring performance, security, and resilience without disrupting operations.",
    whyChoose: [
      "Azure-first and hybrid cloud expertise",
      "Business-aligned cloud strategy",
      "Zero-disruption migration approach",
      "Secure, governed enterprise environments",
      "Cost-optimized deployments saving up to 40%",
    ],
  },

  // MODERN DEPLOYMENT
  {
    id: "modern-deployment",
    title: "Modern Deployment",
    subtitle: "Why wait to migrate?",
    description: "Release with Confidence — Zero Downtime Deployment",
    icon: Server,
    image: "/images/ModernDeployment.png",
    color: "bg-gradient-to-br from-blue-700 to-blue-500",
    features: [
      "Containerization (Docker) with secure, optimized images and best practices",
      "Orchestration with Kubernetes / managed platforms for high availability and scalability",
      "Blue-Green and Canary deployments to reduce risk during production releases",
      "Zero-downtime rollout patterns with automated rollback and health checks",
      "GitOps delivery model for version-controlled and repeatable deployments",
      "Environment standardization to reduce \"works on my machine\" issues",
      "Secrets & configuration separation for secure runtime configuration handling",
      "Release governance including approvals, audit trails, and change tracking",
    ],
    longDescription:
      "Modern deployment enables rapid releases without downtime. We design cloud-native deployment strategies that support safe rollouts, automated recovery, and consistent environments—so your team can deploy confidently, scale efficiently, and respond quickly to changing business needs.",
    whyChoose: [
      "Container-Ready Packaging — Standardized packaging that improves portability, security, and consistency across environments",
      "Progressive Delivery — Safer production releases with staged rollouts, traffic shifting, and quick rollback options",
      "GitOps & Release Automation — Declarative, version-controlled deployments that make releases predictable and easy to repeat",
      "Proven Cloud-Native Expertise — Kubernetes, Docker & IaC certified engineers with real-world deployment experience",
      "Security Enforced Across Deployment — Built-in security scanning, secrets management, and compliance controls",
      "Flexible Pricing with Continued Support — Transparent pricing model with ongoing optimization and 24/7 support",
    ],
  },

  // DATA MANAGEMENT
  {
    id: "data-management",
    title: "Data Management Services",
    subtitle: "Unify. Govern. Optimize.",
    description: "Turn Data into a Strategic Asset with Microsoft-First Data Management Solutions",
    icon: Database,
    image: "/images/data-management.png",
    color: "bg-gradient-to-br from-blue-600 to-blue-400",
    features: [
      "Data Platform Modernization (Azure, Fabric, Data Lake)",
      "Analytics & Business Intelligence (Power BI, Real-time Insights)",
      "Data Governance & Compliance (Microsoft Purview)",
      "Data Integration & ETL Pipelines",
      "Data Security & Privacy Controls",
      "AI-Ready Data Foundations",
    ],
    longDescription:
      "Transform fragmented data into a strategic business asset with Microsoft-first data management solutions that improve decision-making, ensure compliance, and unlock real business value—without disrupting operations.",
    whyChoose: [
      "Deep expertise across Microsoft Fabric, Synapse, Power BI, and Purview",
      "Governance frameworks aligned with global compliance standards",
      "Centralized data visibility without operational complexity",
      "Real-time analytics for faster, smarter decisions",
      "Secure, scalable, and zero-disruption implementations",
    ],
    cta: {
      text: "Learn More",
      href: "/services/data-management/page-2"
    }
  },

  // DIGITAL TRANSFORMATION
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    subtitle: "Modernize What Matters. Transform How You Operate.",
    description: "Eliminate technical debt. Improve performance. Increase agility across IT and business.",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-500 to-blue-300",
    image: "/images/digitalTransformation.jpg",
    features: [
      "Legacy Application Modernization: Re-architect outdated systems with cloud-native design and microservices.",
      "Cloud Migration & Optimization: Move workloads to AWS, Azure, or hybrid environments with confidence.",
      "Business Process Automation: Replace manual workflows with intelligent automation.",
      "API & Integration Layer Development: Connect modern and legacy systems seamlessly.",
      "DevOps & CI/CD Adoption: Enable faster, safer deployments with automated pipelines.",
    ],
    longDescription:
      "NathCorp's Digital Transformation service isn't about chasing trends. It's about modernizing what drives your business forward—your systems, your processes, and your outcomes. Whether you're dealing with aging infrastructure or siloed applications, we help you move deliberately toward a faster, more resilient, and more scalable IT environment.",
    whyChoose: [
      "Measurable Impact: Track real performance gains, cost savings, and deployment speed improvements.",
      "Performance, Security & Scale Built In: Our solutions are designed to grow with your business.",
      "No Downtime, No Disruption: We modernize systems without interrupting your operations.",
      "Proven Experience: Over a decade of helping enterprise clients modernize complex systems.",
    ],
  },

  // APP DEVELOPMENT
  {
    id: "app-development",
    title: "App Development",
    subtitle: "Custom Applications",
    description: "Mobile & Web Solutions",
    icon: Smartphone,
    color: "bg-gradient-to-br from-purple-600 to-purple-400",
    image: "/images/App-development.png",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native",
      "Progressive Web Applications (PWA)",
      "Custom web applications",
      "API development and integration",
    ],
    longDescription:
      "We build modern, scalable, and high-performing applications tailored to your customers and business requirements.",
    whyChoose: [
      "Pixel-perfect UI with premium UX design",
      "High-performance mobile & web apps",
      "Full-stack expertise (React, Node, Java, Python)",
      "Rapid development with agile delivery",
      "Secure & scalable backend architecture",
    ],
  },

  // DEVOPS
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Development & Operations",
    description: "Fast. Reliable. Automated.",
    icon: Settings,
    color: "bg-gradient-to-br from-red-600 to-red-400",
    image: "/images/Devops-page-image.jpg",
    features: [
      "CI/CD pipelines",
      "Infrastructure as Code (IaC)",
      "Configuration management",
      "Monitoring, logging, and alerting",
      "Disaster recovery planning",
      "DevSecOps integration",
    ],
    longDescription:
      "Accelerate delivery and improve reliability through automation, monitoring, and scalable CI/CD pipelines.",
    whyChoose: [
      "Skilled engineers with real-world delivery experience",
      "Solutions designed around your product and process",
      "Continuous improvements after go-live, not just setup",
      "End-to-end observability & monitoring",
      "Clear pricing and transparent execution ",
    ],
  },

  // QA & TESTING
  {
    id: "qa-testing",
    title: "Quality Engineering",
    subtitle: "QA & Testing",
    description: "Zero critical bugs. Faster delivery. Trusted software at scale.",
    icon: TestTube,
    color: "bg-gradient-to-br from-green-600 to-green-400",
    image: "/images/Assurance.png",
    features: [
      "Faster, safer releases with dramatically fewer critical defects escaping to production",
      "Production-ready applications validated under real-world load, security, and user conditions",
      "Lower total cost of quality through AI-assisted efficiency, reusable assets, and cloud-based labs",
      "Compliance-ready quality with audit trails for regulated industries",
      "Scalable, resilient systems that handle peak demand without downtime",
      "Trusted AI systems that are accurate, fair, and transparent",
      "Seamless team integration—with QA embedded in your delivery rhythm, not as an external gate",
    ],
    longDescription:
      "NathCorp delivers end-to-end Quality Engineering designed for modern enterprises—transforming quality into a strategic asset. By combining AI-assisted testing, intelligent automation, and full lifecycle ownership with deep domain expertise, we ensure every release is secure, stable, and production-ready. Our solutions accelerate delivery, enhance reliability, and optimize user experiences across platforms and industries—aligned with business goals from day one.",
    whyChoose: [
      "Quality gates that block high-impact production defects.",
      "Deep integration with Agile & DevOps",
      "AI-assisted test creation & optimization",
      "Real-time dashboards and quality insights",
      "Enterprise-scale testing expertise",
    ],
    cta: {
      text: "Explore QA Services",
      href: "/services/qa-testing"
    }
  },

  // SUPPORT SERVICES
  {
    id: "support",
    title: "Support Services",
    subtitle: "Reliable. Secure. Always-On IT.",
    icon: Headphones,
    color: "bg-gradient-to-br from-orange-600 to-orange-400",
    image: "/images/support-services.png",
    features: [
      "Microsoft 365 Managed Services",
      "Exchange, SharePoint & Teams Administration",
      "Active Directory & Core Infrastructure Support",
      "Server Patching & Update Management",
      "Proactive Monitoring & Incident Management",
      "Security, Compliance & Governance Support",
    ],
    longDescription:
      "Modern enterprises rely on secure, resilient, and always-available IT environments. NathCorp's IT Managed Services ensure your digital workplace, infrastructure, and servers run efficiently and proactively—so IT becomes a strategic advantage, not a support burden.",
    whyChoose: [
      "Microsoft-first managed services expertise",
      "Automation-driven, proactive IT operations",
      "24/7 monitoring with SLA-based response",
      "Secure and resilient IT environments",
      "Scalable support models with predictable costs",
    ],
    cta: {
      text: "Learn More",
      href: "/services/support"
    }
  },

  // TECHNOLOGY CONSULTING
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    subtitle: "Smart strategies. Seamless execution. Future-ready IT.",
    description: "Simplify IT decisions, modernize environments, and build secure, scalable, and cost-efficient technology foundations.",
    icon: Lightbulb,
    image: "/images/consult.jpg",
    color: "bg-gradient-to-br from-yellow-600 to-yellow-400",
    features: [
      "Endpoint Deployment & Device Management",
      "Identity & Access Management",
      "Cloud & Hybrid Infrastructure Consulting",
      "Microsoft-First Architecture Design",
      "Cloud Migration & Modernization",
      "Cost Optimization & Risk Assessment",
    ],
    longDescription:
      "Technology shouldn’t be complicated—it should drive growth. NathCorp’s Technology Consulting helps organizations simplify IT decisions, modernize environments, and build secure, scalable, and cost-efficient technology foundations.",
    whyChoose: [
      "Strong expertise across Microsoft cloud, identity, and endpoint ecosystems",
      "Practical, business-aligned consulting—not theory",
      "Cloud-first, security-focused architecture design",
      "Scalable solutions built for growth and flexibility",
      "Clear roadmaps with measurable outcomes",
    ],
    cta: {
      text: "Learn More",
      href: "/services/technology-consulting/page-2"
    }
  },
];






export default function ServicesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Our Services - Comprehensive Digital Solutions"
        description="Explore NathCorp's complete range of IT services including Cloud Migration, Digital Transformation, AI Services, DevOps, and more."
        keywords="IT services, cloud migration, digital transformation, app development, AI services, DevOps, technology consulting"
        canonicalUrl="/services"
      />

      <ServiceSchema
        name="NathCorp IT Services"
        description="Comprehensive IT services including Cloud Migration, Digital Transformation, AI Services, DevOps, and more."
        provider={{
          name: "NathCorp",
          url: "https://nathcorp.com",
        }}
        areaServed="Global"
        serviceType="IT Services"
      />

      <main className="min-h-screen">
        <Navbar />
        <ServicesCarousel />

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="ai-services" className="w-full">

              {/* Tabs Header */}
              <div className="mb-12 pb-2 relative z-40">

                {/* Scroll Container */}
                <div className="overflow-x-auto overflow-y-hidden scroll-smooth">

                  <TabsList className="bg-transparent p-0 flex w-max min-w-full items-center gap-2 px-2">
                    {allServices.map((service) => (
                      <TabsTrigger
                        key={service.id}
                        value={service.id}
                        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs sm:text-sm bg-white/0 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md transition-all duration-200 hover:shadow-sm flex-shrink-0 whitespace-nowrap"
                      >
                        <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-white/10 text-blue-600 flex-shrink-0">
                          <service.icon size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
                        </span>

                        <span className="whitespace-nowrap">
                          {service.title}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                </div>
              </div>

              {/* Tabs Content */}
              {allServices.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                      <div className="relative mb-6">
                        <div className="absolute left-0 top-0 w-1 h-24 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>

                        <div className="pl-6">
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-4 shadow-lg`}>
                            <service.icon size={32} />
                          </div>

                          <h3 className="text-4xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                              {service.subtitle}
                            </span>
                          </h3>

                          <p className="text-xl text-blue-600 mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4 text-base leading-normal sm:text-lg sm:leading-relaxed pl-6">
                        {service.longDescription}
                      </p>

                      <h4 className="text-xl font-semibold text-slate-800 mb-4 pl-6">
                        What We Deliver
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pl-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 text-blue-600">
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pl-6">
                        <Button
                          className="luxury-button rounded-full px-8 py-6 text-white text-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                          asChild
                        >
                          <a href={`/services/${service.id}`}>
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="mt-6 lg:mt-0">
                      <div className="relative">

                        <Card className="glass-card relative z-10 rounded-2xl overflow-hidden border-0 transition-transform hover:scale-[1.02] hover:shadow-xl">
                          <CardContent className="p-0">

                            {/* Image Banner */}
                            {service.image ? (
                              <div className="h-64 relative">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                                <div className="absolute left-6 bottom-6">
                                  <h5 className="text-white text-lg font-semibold drop-shadow">
                                    {service.title}
                                  </h5>
                                  <p className="text-white/90 text-sm">
                                    {service.subtitle}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className={`h-64 ${service.color} relative`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
                                <div className="absolute left-6 bottom-6">
                                  <h5 className="text-white text-lg font-semibold">
                                    {service.title}
                                  </h5>
                                  <p className="text-white/90 text-sm">
                                    {service.subtitle}
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Why Choose */}
                            <div className="p-8 bg-white">
                              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                                Why Choose Our {service.title}
                              </h4>

                              <ul className="space-y-3">
                                {service.whyChoose?.map((point, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 text-blue-600">
                                      <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-slate-700">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </CardContent>
                        </Card>

                      </div>
                    </div>

                  </div>
                </TabsContent>
              ))}

            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8">
                Let's discuss how our services can address your specific challenges and opportunities.
              </p>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50 rounded-full px-8 py-6 text-lg" asChild>
                <a href="/contact#contact-form">
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
