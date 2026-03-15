import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Notice | NathCorp",
  description: "NathCorp Privacy Notice - Learn how we collect, use, and protect your personal information.",
}

// Helper component for styled list items
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <span className="h-6 w-6 text-blue-600 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </span>
    <p className="text-slate-700 leading-relaxed flex-1">{children}</p>
  </li>
);

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />

        {/* Prominent Hero Title Section */}
        <header className="bg-slate-900 pt-20 pb-10 border-b border-gray-700">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Privacy Notice
            </h1>
            <p className="mt-4 text-xl text-blue-400 font-semibold">
              NATHCORP PRIVACY POLICY
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Introduction
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  At NathCorp, we are committed to protecting your personal information and maintaining your trust. 
                  This Privacy Notice explains how we collect, use, store, protect, and share your personal data when you visit 
                  our website or engage with our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Collection of Your Personal Information
                </h2>
                <ul className="space-y-5">
                  <ListItem>
                    <strong>Personal Information: </strong>Name, email address, phone number, company name, and details 
                    submitted through contact forms or service inquiries.
                  </ListItem>
                  <ListItem>
                    <strong>Technical Information: </strong>IP address, browser type and version, device information, and website navigation patterns.
                  </ListItem>
                  <ListItem>
                    <strong>Cookies and Tracking Technologies: </strong>Used to analyze website performance and enhance your browsing experience.
                  </ListItem>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Use of Your Personal Information
                </h2>
                <ul className="space-y-5">
                  <ListItem>To respond to your inquiries and provide requested services</ListItem>
                  <ListItem>To enhance website functionality and optimize user experience</ListItem>
                  <ListItem>To communicate service updates and marketing information (with your consent)</ListItem>
                  <ListItem>To ensure website security and regulatory compliance</ListItem>
                  <ListItem>To analyze website performance and improve our services</ListItem>
                </ul>
              </div>

              {/* Sharing of Information */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Sharing of Information
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  NathCorp does not sell, rent, or trade your personal information to third parties. Information may be shared 
                  only with authorized service providers who assist in our operations, or when required by legal obligations 
                  or regulatory authorities.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Data Retention
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Personal information is retained only for the duration necessary to fulfill the purposes outlined in this policy, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. Data retention periods vary based 
                  on the type of information and applicable legal requirements.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Control of Your Personal Information
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  You have the right to request access to, correction of, or deletion of your personal information. 
                  You may also withdraw consent for processing or request data portability. To exercise these rights, 
                  please contact us at{" "}
                  <a href="mailto:privacy@nathcorp.com" className="text-blue-600 font-semibold hover:underline">
                    privacy@nathcorp.com
                  </a>
                  .
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-6 w-6 text-slate-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  Privacy Contact Information
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  For questions regarding this Privacy Notice or to exercise your privacy rights, please contact our 
                  Privacy Officer at:{" "}
                  <a href="mailto:privacy@nathcorp.com" className="text-blue-600 font-semibold hover:underline">
                    privacy@nathcorp.com
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
