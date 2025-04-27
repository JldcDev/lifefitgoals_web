// app/components/LoginForm.tsx
'use client'

import { useState } from 'react'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <section className="relative flex items-center justify-center py-20 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
      {/* Botón volver */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center text-gray-700 hover:text-cyan-500 transition"
      >
        <ArrowLeft size={24} className="mr-2" />
        Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Inicia Sesión
        </h2>
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                placeholder="********"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-cyan-500 focus:ring-cyan-400 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Recuérdame</span>
            </label>
            <a href="#" className="text-cyan-500 hover:underline text-sm">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Entrar
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          ¿No tienes cuenta?{' '}
          <a href="/signup" className="text-cyan-500 hover:underline">
            Regístrate
          </a>
        </p>
      </motion.div>
    </section>
  )
}
