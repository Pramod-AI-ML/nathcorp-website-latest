"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-500/30 text-blue-200 text-sm font-medium mb-4">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Partner with NathCorp to unlock your organization's full potential in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact#contact-form">
              <Button size="lg" className="rounded-full bg-white text-blue-800 hover:bg-blue-50 px-8 py-6 text-lg group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-lg"
              >
                Explore Our Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
