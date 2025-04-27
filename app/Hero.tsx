// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-tr
     from-cyan-100 via-white to-cyan-50 overflow-hidden">
      {/* Texto de fondo */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[13vw] font-bold uppercase text-cyan-400 tracking-wide select-none"
      >
        LifeFitGoals
      </motion.h1>

      {/* Imagen o figura central */}
      <motion.img
        src="/mobility.png" // sustituye por tu imagen real
        alt="Athlete"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-h-[500px] object-contain z-10"
      />
    </section>
  )
}
