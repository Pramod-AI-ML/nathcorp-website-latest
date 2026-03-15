import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const industries = ["Finance", "Healthcare", "Manufacturing", "Retail", "Technology"]

const clients = [
  {
    name: "Global Bank Corp",
    industry: "Finance",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading multinational banking institution with operations in over 50 countries.",
  },
  {
    name: "HealthPlus Systems",
    industry: "Healthcare",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Innovative healthcare provider serving millions of patients across North America.",
  },
  {
    name: "TechNova",
    industry: "Technology",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Cutting-edge technology company specializing in AI and machine learning solutions.",
  },
  {
    name: "ManuCraft Industries",
    industry: "Manufacturing",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Global manufacturing leader with facilities across three continents.",
  },
  {
    name: "RetailGiant",
    industry: "Retail",
    logo: "/placeholder.svg?height=100&width=200",
    description: "One of the world's largest retail chains with over 5,000 locations worldwide.",
  },
  {
    name: "FinServe Solutions",
    industry: "Finance",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Specialized financial services provider focused on wealth management and investment.",
  },
  {
    name: "MedTech Innovations",
    industry: "Healthcare",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Pioneer in medical technology and healthcare IT solutions.",
  },
  {
    name: "TechSphere",
    industry: "Technology",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Leading provider of cloud infrastructure and enterprise software solutions.",
  },
  {
    name: "PrecisionManufacturing",
    industry: "Manufacturing",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Specialized manufacturer of high-precision components for aerospace and defense.",
  },
  {
    name: "ShopSmart",
    industry: "Retail",
    logo: "/placeholder.svg?height=100&width=200",
    description: "Innovative e-commerce platform with integrated brick-and-mortar locations.",
  },
]

const caseStudies = [
  {
    title: "Digital Transformation for Global Bank Corp",
    client: "Global Bank Corp",
    industry: "Finance",
    challenge: "Modernizing legacy systems while maintaining regulatory compliance and security.",
    solution: "Implemented a phased migration to cloud infrastructure with enhanced security protocols.",
    results:
      "40% reduction in operational costs, 60% faster time-to-market for new services, and improved customer satisfaction scores.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Cloud Migration for HealthPlus Systems",
    client: "HealthPlus Systems",
    industry: "Healthcare",
    challenge: "Transitioning critical patient data systems to the cloud while ensuring HIPAA compliance.",
    solution: "Custom migration strategy with specialized security measures and redundancy protocols.",
    results: "99.99% system uptime, 45% cost reduction, and enhanced data accessibility for healthcare providers.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "AI Implementation for TechNova",
    client: "TechNova",
    industry: "Technology",
    challenge: "Integrating AI capabilities into existing product suite without disrupting user experience.",
    solution: "Developed a modular AI framework that seamlessly integrated with their existing architecture.",
    results: "200% increase in data processing efficiency, new AI-powered features launched in half the expected time.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ClientsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
       <PageHeader
          title="Our Clients"
          subtitle="Trusted by leading organizations across industries"
          description="Discover how we've helped businesses across various industries achieve their digital transformation goals"
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        />

        {/* Client Logos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Trusted by Industry Leaders</h2>
              <p className="text-lg text-slate-600">
                We partner with organizations of all sizes across diverse industries
              </p>
            </div>

            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-2xl grid-cols-6">
                  <TabsTrigger value="All" className="text-sm md:text-base">
                    All
                  </TabsTrigger>
                  {industries.map((industry) => (
                    <TabsTrigger key={industry} value={industry} className="text-sm md:text-base">
                      {industry}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="All">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {clients.map((client) => (
                    <Card key={client.name} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center justify-center">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          width={200}
                          height={100}
                          className="w-full h-auto mb-4"
                        />
                        <div className="text-center">
                          <h3 className="font-medium text-slate-800">{client.name}</h3>
                          <p className="text-sm text-slate-500">{client.industry}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {industries.map((industry) => (
                <TabsContent key={industry} value={industry}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {clients
                      .filter((client) => client.industry === industry)
                      .map((client) => (
                        <Card
                          key={client.name}
                          className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <CardContent className="p-6 flex flex-col items-center justify-center">
                            <Image
                              src={client.logo || "/placeholder.svg"}
                              alt={client.name}
                              width={200}
                              height={100}
                              className="w-full h-auto mb-4"
                            />
                            <div className="text-center">
                              <h3 className="font-medium text-slate-800">{client.name}</h3>
                              <p className="text-sm text-slate-500">{client.industry}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Success Stories</h2>
              <p className="text-lg text-slate-600">
                Real-world examples of how we've helped our clients achieve their goals
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">{study.title}</h3>
                    <p className="text-slate-600 mb-6">
                      Client: <span className="font-medium">{study.client}</span>
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Challenge</h4>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Solution</h4>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Results</h4>
                        <p className="text-slate-600">{study.results}</p>
                      </div>
                    </div>

                    <Button className="bg-blue-700 hover:bg-blue-800">Read Full Case Study</Button>
                  </div>

                  <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-lg transform rotate-2"></div>
                      <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-lg transform -rotate-2"></div>
                      <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-xl mb-8">Let's discuss how we can help your organization achieve its goals.</p>
              <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
