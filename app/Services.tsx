// app/components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Apple, Users, Headset } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    Icon: Dumbbell,
    title: 'Personal Training',
    description:
      'Sesiones 1-a-1 diseñadas para adaptarse a tus objetivos y nivel de fitness.',
  },
  {
    Icon: Apple,
    title: 'Nutrition Plans',
    description:
      'Planes de alimentación personalizados para maximizar tu rendimiento y recuperación.',
  },
  {
    Icon: Users,
    title: 'Group Classes',
    description:
      'Clases grupales de alta energía: cardio, HIIT, yoga y más.',
  },
  {
    Icon: Headset,
    title: 'Online Coaching',
    description:
      'Entrenamiento y seguimiento remoto con feedback en vídeo y chat 24/7.',
  },
]

// Variants para el contenedor y los items
const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-4">
            Escoge el servicio que mejor se adapte a tu estilo de vida y objetivos.
          </p>
        </div>

        {/* Grid de cards con fade-in secuenciado */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // Dejamos en "once:false" para que sea aparezca mas de una vez
        >
          {services.map(({ Icon, title, description }, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col"
            >
              <div className="text-cyan-500 mb-4">
                <Icon size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow">{description}</p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center font-medium text-cyan-500 hover:underline"
              >
                Learn More
                <span className="ml-2 text-xl">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
