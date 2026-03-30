"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// const jobOpenings = [
//   {
//     id: "senior-cloud-engineer",
//     title: "Senior Cloud Engineer",
//     department: "Engineering",
//     location: "San Francisco, CA (Hybrid)",
//     type: "Full-time",
//     salary: "$120,000 - $160,000",
//     description:
//       "We're looking for an experienced Cloud Engineer to design and implement scalable cloud infrastructure solutions for our clients.",
//     responsibilities: [
//       "Design and implement cloud infrastructure using AWS, Azure, or GCP",
//       "Develop automation scripts and CI/CD pipelines",
//       "Collaborate with development teams to optimize application deployment",
//       "Implement security best practices and compliance requirements",
//       "Troubleshoot and resolve complex infrastructure issues",
//     ],
//     requirements: [
//       "5+ years of experience with cloud platforms (AWS, Azure, or GCP)",
//       "Strong knowledge of infrastructure as code (Terraform, CloudFormation)",
//       "Experience with containerization technologies (Docker, Kubernetes)",
//       "Familiarity with CI/CD tools and practices",
//       "Bachelor's degree in Computer Science or related field",
//     ],
//   },
//   {
//     id: "ux-designer",
//     title: "UX Designer",
//     department: "Design",
//     location: "Remote",
//     type: "Full-time",
//     salary: "$90,000 - $120,000",
//     description:
//       "We're seeking a talented UX Designer to create exceptional user experiences for our digital products and solutions.",
//     responsibilities: [
//       "Create wireframes, prototypes, and user flows for digital products",
//       "Conduct user research and usability testing",
//       "Collaborate with product managers and developers",
//       "Develop and maintain design systems",
//       "Stay current with UX trends and best practices",
//     ],
//     requirements: [
//       "3+ years of experience in UX design",
//       "Proficiency with design tools (Figma, Sketch, Adobe XD)",
//       "Portfolio demonstrating strong UX design skills",
//       "Experience with user research methodologies",
//       "Bachelor's degree in Design, HCI, or related field",
//     ],
//   },
//   {
//     id: "data-scientist",
//     title: "Data Scientist",
//     department: "Analytics",
//     location: "New York, NY (On-site)",
//     type: "Full-time",
//     salary: "$110,000 - $150,000",
//     description:
//       "Join our analytics team to develop advanced data models and extract actionable insights from complex datasets.",
//     responsibilities: [
//       "Develop machine learning models and algorithms",
//       "Analyze large datasets to identify patterns and trends",
//       "Create data visualizations and reports",
//       "Collaborate with business stakeholders to define requirements",
//       "Implement data pipelines and ETL processes",
//     ],
//     requirements: [
//       "4+ years of experience in data science or related field",
//       "Strong programming skills in Python, R, or similar",
//       "Experience with machine learning frameworks (TensorFlow, PyTorch)",
//       "Knowledge of SQL and database systems",
//       "Master's degree or PhD in Computer Science, Statistics, or related field",
//     ],
//   },
//   {
//     id: "project-manager",
//     title: "Project Manager",
//     department: "Operations",
//     location: "Chicago, IL (Hybrid)",
//     type: "Full-time",
//     salary: "$100,000 - $130,000",
//     description:
//       "We're looking for an experienced Project Manager to lead complex technology projects from inception to completion.",
//     responsibilities: [
//       "Develop project plans, timelines, and budgets",
//       "Coordinate cross-functional teams to deliver projects on time",
//       "Manage project risks and issues",
//       "Communicate project status to stakeholders",
//       "Ensure project deliverables meet quality standards",
//     ],
//     requirements: [
//       "5+ years of experience in project management",
//       "PMP certification preferred",
//       "Experience with Agile and traditional project management methodologies",
//       "Strong communication and leadership skills",
//       "Bachelor's degree in Business, IT, or related field",
//     ],
//   },
// ]

export default function CareersPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<{
    firstName: string
    lastName: string
    email: string
    phone: string
    resume: File | null
    coverLetter: string
    linkedIn: string
    portfolio: string
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    linkedIn: "",
    portfolio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileError, setFileError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const file = files && files[0]

    if (!file) return

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (!allowedTypes.includes(file.type)) {
      setFileError("Only PDF and DOCX files are allowed.")
      e.target.value = ""
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size must be less than 10MB.")
      e.target.value = ""
      return
    }

    setFileError("")
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const tempFormData = new FormData();

    tempFormData.append("firstName", formData.firstName);
    tempFormData.append("lastName", formData.lastName);
    tempFormData.append("email", formData.email);
    tempFormData.append("phone", formData.phone);
    tempFormData.append("coverLetter", formData.coverLetter);
    tempFormData.append("linkedIn", formData.linkedIn);
    tempFormData.append("portfolio", formData.portfolio);

    // 3. Append the File (only if it exists)
    if (formData.resume) {
      // The backend usually looks for this key: "resume"
      tempFormData.append("resume", formData.resume);
    }

    // Simulate API call
    fetch("/api/submitResume", { method: "POST", body: tempFormData });

    toast({
      title: "Application Submitted",
      description: "Thank you for submitting your resume. We'll review your application and be in touch soon!",
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
      linkedIn: "",
      portfolio: "",
    })

    setIsSubmitting(false)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/career.png"
              alt="Careers Hero Background"
              className="w-full h-full object-cover object-center filter brightness-110"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
              draggable="false"
            />
            {/* Light gradient overlay to improve readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Main content container should be above background layers */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Join Our Team</h1>
              <p className="text-xl text-blue-100 mb-8 drop-shadow">Build your career at the forefront of digital innovation</p>
              <Link href="#resume-upload">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  Submit Your Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom fade to content: dark to transparent */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent" />
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Why Join NathCorp?</h2>
              <p className="text-lg text-slate-600">
                We offer more than just a job—we provide a career where you can grow, innovate, and make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lightbulb"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Work on cutting-edge projects that push the boundaries of what's possible in technology. We
                    encourage creative thinking and novel approaches to solving complex problems.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Growth and Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We invest in your professional development with continuous learning opportunities, mentorship
                    programs, and clear career advancement paths.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our solutions help organizations around the world transform and succeed. Your work will have a
                    meaningful impact on businesses and communities globally.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Join a diverse team of talented professionals who value collaboration, respect, and open
                    communication. We believe great ideas can come from anywhere.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart-handshake"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                      <path d="m18 15-2-2" />
                      <path d="m15 18-2-2" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We prioritize well-being with flexible work arrangements, competitive benefits, and programs
                    designed to support your physical and mental health.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-gift"
                    >
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect width="20" height="5" x="2" y="7" />
                      <line x1="12" x2="12" y1="22" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">Competitive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Enjoy comprehensive healthcare, retirement plans, generous PTO, parental leave, education
                    assistance, and other benefits that recognize your value.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Life at NathCorp</h2>
              <p className="text-lg text-slate-600">Hear from the people who make NathCorp an amazing place to work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Review 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">AS</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Amit S.</h3>
                      <p className="text-slate-600">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    “You get real ownership early. Seniors guide you well, and it’s a strong place to learn and grow fast.”
                  </p>
                </CardContent>
              </Card>

              {/* Review 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">NK</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Neha K.</h3>
                      <p className="text-slate-600">Associate Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    “Great environment to start your career—friendly people, supportive teams, and plenty of learning opportunities.”
                  </p>
                </CardContent>
              </Card>

              {/* Review 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xl">PM</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Priya M.</h3>
                      <p className="text-slate-600">Manager</p>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    “Policies feel employee-first and supportive—especially for women. You can work on modern tech while staying close to home.”
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resume Upload Section */}
        <section className="py-20" id="resume-upload">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Join Our Talent Pool</h2>
              <p className="text-lg text-slate-600">
                Don't see a specific position that matches your skills? Submit your resume and we'll reach out when the right opportunity comes up.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-bold text-xl mb-6 text-center text-slate-800">Submit Your Resume</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">
                      Resume <span className="text-red-500">*</span>
                    </Label>

                    <div className="border-2 border-dashed border-slate-200 hover:border-blue-300 rounded-lg p-6 md:p-8 text-center transition-colors overflow-hidden">

                      <Upload className="h-12 w-12 mx-auto text-slate-400 mb-4" />

                      <p className="text-sm md:text-lg font-medium text-slate-600 mb-2 break-all max-w-full px-2 leading-relaxed">
                        {formData.resume ? formData.resume.name : "Upload your resume"}
                      </p>

                      <p className="text-sm text-slate-500 mb-4">
                        PDF or DOCX format, max 10MB
                      </p>

                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          const input = document.getElementById("resume");
                          if (input) input.click();
                        }}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                      >
                        {formData.resume ? "Change File" : "Select File"}
                      </Button>

                      {fileError && (
                        <p className="text-red-500 text-sm mt-2">{fileError}</p>
                      )}

                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter / Message (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about yourself, your interests, and what type of role you're looking for at NathCorp."
                      className="border-slate-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="linkedIn">LinkedIn Profile (Optional)</Label>
                      <Input
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting Resume..." : "Submit Resume"}
                    </Button>
                  </div>

                  <p className="text-sm text-slate-500 text-center mt-4">
                    By submitting your resume, you agree to be contacted by our recruitment team regarding potential opportunities that match your profile.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commented out job openings for future use */}
        {/* <section className="py-20" id="open-positions">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-800">Open Positions</h2>
              <p className="text-lg text-slate-600">Find your next career opportunity at NathCorp</p>
            </div>
            // Job listings tabs and content would go here
          </div>
        </section> */}

        <Footer />
      </main>
    </ThemeProvider>
  )
}
