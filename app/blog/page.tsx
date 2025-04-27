// app/blog/page.tsx
'use client'

import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Datos de ejemplo
const posts = [
  { id: '1', title: 'Cómo empezar tu rutina de fitness', date: '2025-04-15', excerpt: 'Descubre los pasos esenciales para comenzar con una rutina de ejercicios adaptada a tu nivel y objetivos.' },
  { id: '2', title: 'Nutrición: mitos y realidades', date: '2025-04-10', excerpt: 'Separando la información basada en evidencia de los mitos populares sobre dietas y suplementos.' },
  { id: '3', title: 'Entrenamiento en casa vs. gimnasio', date: '2025-04-05', excerpt: 'Ventajas y desventajas de ejercitarte en casa en comparación con un centro de fitness.' },
]

const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }
const cardVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function BlogPage() {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-cyan-50 min-h-screen">
        {/* Botón Volver al Home */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-gray-700 hover:text-cyan-500 mb-8"
        >
          <Home size={20} className="mr-2" />
          Inicio
        </button>

        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="text-gray-600 mt-2">Encuentra consejos, guías y novedades sobre fitness y nutrición.</p>
        </div>

        {/* Grid de posts */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-1" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <p className="text-gray-600 flex-grow">{post.excerpt}</p>
              </div>
              <div className="p-4 bg-gray-100 text-right">
                <Link href={`/blog/${post.id}`} className="font-medium text-cyan-500 hover:underline">
                  Leer más →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </>
  )
}
