// app/services/page.tsx
'use client'

import Navbar from '../Navbar'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Dumbbell, Apple, Users, Headset } from 'lucide-react'

const detailedServices = [
  {
    slug: 'personal-training',
    Icon: Dumbbell,
    title: 'Personal Training',
    description:
      'Sesiones 1-a-1 con entrenadores certificados, con programas totalmente adaptados a tus objetivos y nivel.',
  },
  {
    slug: 'nutrition-plans',
    Icon: Apple,
    title: 'Nutrition Plans',
    description:
      'Planes de alimentación elaborados por nutricionistas, enfocándonos en macronutrientes y hábitos saludables.',
  },
  {
    slug: 'group-classes',
    Icon: Users,
    title: 'Group Classes',
    description:
      'Clases grupales de alta energía: HIIT, yoga, pilates y bootcamp, para motivarte con compañeros.',
  },
  {
    slug: 'online-coaching',
    Icon: Headset,
    title: 'Online Coaching',
    description:
      'Entrenamiento virtual con seguimiento en vídeo, ajustes semanales y soporte 24/7 a través de nuestra plataforma.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800">Nuestros Servicios</h1>
            <p className="text-gray-600 mt-4">
              Explora en detalle los servicios que ofrecemos para mejorar tu rendimiento.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {detailedServices.map(({ slug, Icon, title, description }, idx) => (
              <Link key={slug} href={`/services/${slug}`}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg flex flex-col"
                >
                  <div className="text-cyan-500 mb-4">
                    <Icon size={36} />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
                  <p className="text-gray-600 flex-grow">{description}</p>
                  <span className="mt-4 inline-flex items-center font-medium text-cyan-500 transition-transform transform hover:scale-105 hover:text-cyan-600">
                    Leer más
                    <span className="ml-2 text-xl transition-transform transform hover:translate-x-1">&rarr;</span>
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  )
}
