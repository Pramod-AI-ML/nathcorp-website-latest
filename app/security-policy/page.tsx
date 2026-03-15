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
import { CheckCircle, Shield, Lock, Eye, Database, AlertTriangle, ArrowRight } from "lucide-react"
import Image from "next/image"
import MetaTags from "@/components/seo/meta-tags"
import CallToAction from "@/components/call-to-action"

// Helper component for styled list items (assuming you have access to icons)
// Replace the icon placeholder with an actual icon component if available.
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    {/* Placeholder for Checkmark Icon - Use CheckCircle from lucide-react or similar */}
    <span className="h-6 w-6 text-blue-600 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </span>
    <p className="text-slate-700 leading-relaxed flex-1">{children}</p>
  </li>
);


export default function SecurityPolicyPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />

        {/* 1. Prominent Hero Title Section */}
        <header className="bg-slate-900 pt-20 pb-10 border-b border-gray-700">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Security Policy
            </h1>
            <p className="mt-4 text-xl text-blue-400 font-semibold">
              NATHCORP COMMITMENT TO DATA PROTECTION
            </p>
          </div>
        </header>

        {/* 2. Main Content Section (Adjusted Styling) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              
              {/* Our Commitment */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Our Commitment
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  NathCorp follows industry-standard practices to protect user data and website systems. 
                  We are committed to maintaining the highest levels of security to safeguard your information 
                  and ensure the integrity of our services.
                </p>
              </div>

              {/* Security Measures */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Security Measures
                </h2>
                <ul className="space-y-5">
                  <ListItem>
                    <strong>SSL Encryption:</strong> All data transmitted between your browser and our servers 
                    is encrypted using SSL/TLS protocols to prevent unauthorized access.
                  </ListItem>
                  <ListItem>
                    <strong>Firewalls and Monitoring Tools:</strong> We employ advanced firewalls and continuous 
                    monitoring systems to detect and prevent security threats in real-time.
                  </ListItem>
                  <ListItem>
                    <strong>Restricted Access Controls:</strong> Access to sensitive data is limited to authorized 
                    personnel only, with role-based permissions and multi-factor authentication.
                  </ListItem>
                  <ListItem>
                    <strong>Regular Updates and Audits:</strong> Our systems undergo regular security updates, 
                    patches, and comprehensive audits to identify and address vulnerabilities.
                  </ListItem>
                  <ListItem>
                    <strong>Secure Backups and Data Storage:</strong> We maintain encrypted backups of critical 
                    data in secure, geographically distributed locations to ensure business continuity.
                  </ListItem>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  User Responsibilities
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  While we implement comprehensive security measures, users are expected to maintain security best practices:
                </p>
                <ul className="space-y-5">
                  <ListItem>Use strong, unique passwords and change them regularly</ListItem>
                  <ListItem>Never share your login credentials with others</ListItem>
                  <ListItem>Keep your devices and browsers updated with the latest security patches</ListItem>
                  <ListItem>Be cautious of phishing attempts and suspicious emails</ListItem>
                  <ListItem>Log out from your account when using shared or public devices</ListItem>
                  <ListItem>Report any suspicious activity or security concerns immediately</ListItem>
                </ul>
              </div>

              {/* Breach Management */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Breach Management
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  In the event of a security incident, NathCorp will:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-slate-700 mt-4">
                  <li>Promptly investigate and assess the scope of the incident</li>
                  <li>Notify affected users within the timeframe required by applicable laws</li>
                  <li>Take immediate corrective actions to contain and remediate the breach</li>
                  <li>Work with relevant authorities and security experts as needed</li>
                  <li>Implement additional safeguards to prevent future incidents</li>
                  <li>Provide guidance and support to affected users</li>
                </ul>
              </div>

              {/* Security Best Practices (Highlight Box - Information Notice) */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  {/* Placeholder for Alert Icon - Use AlertTriangle from lucide-react or similar */}
                  <span className="h-6 w-6 text-blue-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </span>
                  Security Best Practices
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We regularly review and update our security policies to align with industry best practices 
                  and evolving threats. Our security framework is based on internationally recognized standards 
                  including **ISO 27001** and **NIST guidelines**.
                </p>
              </div>

              {/* Contact (Highlight Box - Actionable Contact) */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  {/* Placeholder for Mail Icon - Use Mail from lucide-react or similar */}
                  <span className="h-6 w-6 text-slate-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  Report a Security Concern
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  If you identify a security vulnerability or have concerns regarding our security practices, 
                  please contact our security team immediately at:
                  <br/>
                  <a href="mailto:security@nathcorp.com" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">
                    security@nathcorp.com
                  </a>
                </p>
                <p className="text-slate-700 leading-relaxed mt-6 pt-4 border-t border-gray-100">
                  For general inquiries, please email: 
                  <a href="mailto:info@nathcorp.com" className="text-blue-600 hover:underline ml-2">
                    info@nathcorp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}