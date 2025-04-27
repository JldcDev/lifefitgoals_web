// app/pricing/page.tsx
'use client'

import Navbar from '../Navbar'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import plans from './data'

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800">Planes de Precios</h1>
            <p className="text-gray-600 mt-4">
              Elige el plan que mejor se adapte a tus objetivos y descubre todos los detalles.
            </p>
          </motion.div>

          {/* Toggle mensual/anual */}
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 mx-1 rounded-full transition ${
                !isAnnual ? 'bg-cyan-500 text-white' : 'bg-white text-gray-600'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 mx-1 rounded-full transition ${
                isAnnual ? 'bg-cyan-500 text-white' : 'bg-white text-gray-600'
              }`}
            >
              Anual
            </button>
          </div>

          {/* Grid de planes */}
          <motion.div
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {plans.map((plan) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
              const period = isAnnual ? 'año' : 'mes'

              return (
                <Link
                  key={plan.slug}
                  href={`/pricing/${plan.slug}`}
                  className="cursor-pointer"
                >
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`relative flex flex-col p-8 rounded-2xl shadow-lg bg-white ${
                      plan.slug === 'standard' ? 'border-4 border-cyan-400' : ''
                    }`}
                  >
                    {/* Badge “Popular” */}
                    {plan.slug === 'standard' && (
                      <div className="absolute top-0 right-0 bg-cyan-400 text-white px-3 py-1 rounded-bl-lg text-sm uppercase">
                        Popular
                      </div>
                    )}

                    {/* Título */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {plan.name}
                    </h2>

                    {/* Precio */}
                    <div className="text-5xl font-bold text-cyan-500 mb-2">
                      €{price}
                      <span className="text-2xl font-medium text-gray-600">/{period}</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>

                    {/* Características */}
                    <ul className="text-gray-600 space-y-2 mb-6">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-cyan-500">✔</span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Call to Action */}
                    <span className="mt-auto inline-block bg-cyan-500 text-white py-3 rounded-lg font-medium text-center hover:bg-cyan-600 transition">
                      {isAnnual ? 'Contratar Anual' : 'Contratar Mensual'}
                    </span>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        </section>
      </main>
    </>
  )
}
