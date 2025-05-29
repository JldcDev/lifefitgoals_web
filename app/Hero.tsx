// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden ">
      {/* Fondo degradado */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t 
          from-cyan-800/70
          via-cyan-400/30
          to-gray-60
          z-10
        "
      />

      {/* Patrón SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="pattern-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="2" r="1.5" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-dots)" />
      </svg>

      {/* Imagen de fondo animada */}
      <motion.img
        src="/athlete2.png"
        alt="Athlete"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl w-full max-h-[100vh] object-contain z-20"
        draggable={false}
      />

      {/* Texto animado encima */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute top-110 left-20
          text-[10vw] font-extrabold uppercase
          text-gray-100
          drop-shadow-[0_5px_16px_rgba(0,0,0,0.6)]
          select-none
          tracking-wide
          z-30
        "
      >
        LifeFit Goals
      </motion.h1>
    </section>
  )
}
