import React from 'react';
import { Linkedin } from "lucide-react"
// Removed: import Link from "next/link"

export default function Footer() {
  // Service links are removed as per request.

  const policyLinks = [
    { name: "Privacy Notice", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Security Policy", href: "/security-policy" },
  ]

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/60">
      <div className="container mx-auto px-6 py-8 md:py-10">

        {/* Top Row: Logo and Description/Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 md:mb-10 lg:mb-0">

          {/* Column 1: Logo and Short Tagline */}
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">

            {/* Logo */}
            <div className="flex items-center space-x-1 flex-shrink-0">
              <div className="h-10 w-10 flex items-center justify-center">
                <img
                  src="/images/Nathcorp.png"
                  alt="NathCorp Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Aligned Text */}
              <span className="text-white font-bold text-lg tracking-wide leading-none">
                NATHCORP
              </span>
            </div>

            {/* Tagline */}
            <p className="hidden md:block text-slate-400 text-base border-l border-slate-800 pl-4">
              Innovative, Secure, and Scalable Solutions
            </p>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/nathcorp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
              title="Follow NathCorp on LinkedIn"
            >
              <Linkedin size={16} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-4 lg:my-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs">

          {/* Copyright */}
          <div className="order-2 md:order-1 mt-4 md:mt-0 text-center md:text-left">
            <p>© NathCorp {new Date().getFullYear()} – USA | India | Dubai, UAE</p>
          </div>

          {/* Legal Links */}
          <div className="order-1 md:order-2 flex space-x-4">
            {policyLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
                title={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}