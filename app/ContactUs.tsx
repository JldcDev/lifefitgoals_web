// app/components/ContactUs.tsx
'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simula envío
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert('¡Mensaje enviado con éxito!')
    reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-12"
      >
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            ¡Estamos aquí para ayudarte! Envíanos un mensaje y nos pondremos en contacto contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info de contacto + Mapa */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-cyan-500" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Nuestra Ubicación</h3>
                <p className="text-gray-600">Calle Fitness 123, Madrid, España</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-cyan-500" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                <p className="text-gray-600">+34 600 123 456</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-cyan-500" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contacto@lifefitgoals.com</p>
              </div>
            </div>

            {/* Mapa embebido */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Calle%20Fitness%20123%20Madrid&z=15&output=embed"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                className="block"
              />
            </div>
          </div>

          {/* Formulario de contacto con validación avanzada */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                Nombre
              </label>
              <input
                {...register('name', { required: 'El nombre es obligatorio' })}
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato de email no válido',
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="correo@ejemplo.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1 font-medium">
                Asunto
              </label>
              <input
                {...register('subject', { required: 'El asunto es obligatorio' })}
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Asunto de tu mensaje"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                Mensaje
              </label>
              <textarea
                {...register('message', {
                  required: 'El mensaje es obligatorio',
                  minLength: {
                    value: 10,
                    message: 'El mensaje debe tener al menos 10 caracteres',
                  },
                })}
                id="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Escribe tu mensaje aquí..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

        {/* Mensaje de éxito */}
        {isSubmitSuccessful && (
          <p className="text-center text-green-600 mt-6">
            Gracias por tu mensaje. ¡Te responderemos pronto!
          </p>
        )}
      </motion.div>
    </section>
  )
}
