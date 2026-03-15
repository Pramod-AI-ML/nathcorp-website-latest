"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  className?: string
}

export default function PageHeader({ title, subtitle, description, backgroundImage, className }: PageHeaderProps) {
  return (
    <section
      className={`pt-32 pb-20 text-white relative overflow-hidden ${className || ""}`}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            className="object-cover object-center filter brightness-110"
          />
          {/* Light gradient overlay to improve readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Main content container should be above background layers */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-4 drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-200"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade to content: dark to transparent */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  )
}
