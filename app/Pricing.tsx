'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 19,
    annualPrice: 190,
    features: ['Acceso al gym', '1 clase grupal/semana', 'Sin entrenador dedicado'],
    highlighted: false,
  },
  {
    name: 'Standard',
    monthlyPrice: 49,
    annualPrice: 490,
    features: ['Acceso al gym', '3 clases grupales/semana', '1 sesión personal/mes', 'Plan de nutrición básico'],
    highlighted: true,
  },
  {
    name: 'Premium',
    monthlyPrice: 89,
    annualPrice: 890,
    features: ['Acceso ilimitado al gym', 'Clases ilimitadas', 'Entrenador dedicado', 'Plan nutricional avanzado', 'Soporte 24/7'],
    highlighted: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-cyan-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Planes de Precios</h2>
        <p className="text-gray-600 mb-8">
          Elige el plan que mejor se adapte a tus objetivos y empieza hoy.
        </p>

        {/* Switch tipo pill */}
        <div
          className="relative inline-flex items-center w-40 h-12 bg-gray-300 rounded-full p-1 cursor-pointer mb-12"
          onClick={() => setIsAnnual((prev) => !prev)}
        >
          {/* Slider */}
          <span
            className={`absolute top-1 left-1 w-1/2 h-10 bg-cyan-500 rounded-full transition-transform duration-300 ease-in-out ${
              isAnnual ? 'translate-x-full' : 'translate-x-0'
            }`}
          />
          {/* Labels */}
          <span
            className={`relative w-1/2 text-center z-10 font-medium transition-colors duration-300 ${
              !isAnnual ? 'text-white' : 'text-gray-700'
            }`}
          >
            Mensual
          </span>
          <span
            className={`relative w-1/2 text-center z-10 font-medium transition-colors duration-300 ${
              isAnnual ? 'text-white' : 'text-gray-700'
            }`}
          >
            Anual
          </span>
        </div>

        {/* Grid de planes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const period = isAnnual ? 'año' : 'mes'
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative flex flex-col p-8 rounded-2xl shadow-lg bg-white ${
                  plan.highlighted ? 'border-4 border-cyan-400' : ''
                }`}
              >
                {/* Ribbon diagonal badge */}
                {plan.highlighted && (
                  <div className="absolute top-2 right-[-32px] w-36 rotate-45 bg-cyan-500 text-white text-xs font-bold py-1 text-center shadow-md">
                    Más Popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {plan.name}
                </h3>
                <div className="text-5xl font-bold text-cyan-500 mb-2">
                  €{price}
                  <span className="text-2xl font-medium text-gray-600">/{period}</span>
                </div>
                <ul className="text-gray-600 mb-6 space-y-2 flex-grow text-left">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-cyan-500">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="mt-auto inline-block px-6 py-3 rounded-lg font-medium bg-cyan-500 text-white hover:bg-cyan-600"
                >
                  Ver Planes
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
