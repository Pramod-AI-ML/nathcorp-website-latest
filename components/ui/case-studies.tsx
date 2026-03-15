"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CaseStudy {
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

interface CaseStudiesProps {
  studies: CaseStudy[]
}

export default function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">Success Stories</h2>
          <p className="text-lg text-slate-600">See how our solutions have transformed businesses across industries</p>
        </div>

        <div className="space-y-16">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
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
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></div>
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Read Full Case Study
                </motion.button>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
