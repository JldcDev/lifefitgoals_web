// app/appointment/page.tsx
'use client'

import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function AppointmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-gradient-to-tr from-cyan-100 via-white to-cyan-50">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Schedule an Appointment
            </h1>
            {/* Placeholder form - customize as needed */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-1 font-medium">
                  Fecha y hora
                </label>
                <input
                  type="datetime-local"
                  id="date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
              >
                Confirmar Cita
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </>
  )
}
