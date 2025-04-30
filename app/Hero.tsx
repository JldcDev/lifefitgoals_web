// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/** 1️⃣ Fondo degradado de oscuro abajo a claro arriba **/}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-t 
          from-cyan-800/70  /* muy oscuro abajo */
          via-cyan-500/30   /* tono intermedio */
          to-white           /* claro arriba */
        "
      />

      {/** 2️⃣ Patrón SVG (opcional: mantén la textura ligera) **/}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
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
            <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.05)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-dots)" />
      </svg>

      {/** 3️⃣ Texto de fondo animado, en blanco con sombra fuerte **/}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute z-10
          text-[13vw] font-extrabold uppercase
          text-gray-100
          drop-shadow-[0_5px_16px_rgba(0,0,0,0.6)]
          select-none
          tracking-wide
        "
      >
        LifeFitGoals
      </motion.h1>

      {/** 4️⃣ Imagen central **/}
      <motion.img
        src="/athlete2.png"
        alt="Athlete"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 max-h-[500px] object-contain"
      />
    </section>
  )
}
