import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | NathCorp",
  description: "NathCorp Cookie Policy - Learn about how we use cookies to improve your browsing experience.",
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

export default function CookiePolicyPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />

        {/* Prominent Hero Title Section */}
        <header className="bg-slate-900 pt-20 pb-10 border-b border-gray-700">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Cookie Policy
            </h1>
            <p className="mt-4 text-xl text-blue-400 font-semibold">
              NATHCORP COOKIE USAGE
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              
              {/* What Are Cookies? */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  What Are Cookies?
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Cookies are small text files stored on your device to improve your browsing experience.
                </p>
              </div>

              {/* Types of Cookies We Use */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Types of Cookies We Use
                </h2>
                <ul className="space-y-5">
                  <ListItem>
                    <strong>Essential Cookies:</strong> Required for the website to function properly and cannot be disabled.
                  </ListItem>
                  <ListItem>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by 
                    collecting and reporting information anonymously.
                  </ListItem>
                  <ListItem>
                    <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as 
                    remembering your preferences.
                  </ListItem>
                  <ListItem>
                    <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant 
                    advertisements and measure campaign effectiveness.
                  </ListItem>
                </ul>
              </div>

              {/* Why We Use Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Why We Use Cookies
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We use cookies to enhance functionality, understand user behavior, and secure the website. 
                  Cookies help us provide you with a better browsing experience and improve our services.
                </p>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Managing Cookies
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You may accept or reject cookies via browser settings or the cookie banner that appears when you 
                  first visit our website. Please note that blocking certain cookies may impact your experience and 
                  the functionality of our website.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Most web browsers allow you to manage cookie preferences through their settings. You can usually 
                  find these settings in the "Options" or "Preferences" menu of your browser.
                </p>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-blue-600 mb-6 border-b-2 border-blue-100 pb-3">
                  Third-Party Cookies
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Some cookies may come from analytics tools (like Google Analytics) or embedded services 
                  (like YouTube videos or social media plugins). These third-party cookies are subject to 
                  their respective privacy policies.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-6 w-6 text-slate-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  Questions About Cookies?
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at:{" "}
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
