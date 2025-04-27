// app/components/SignupForm.tsx
'use client';

import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simula envío de datos
    await new Promise((res) => setTimeout(res, 1000));
    console.log('Registro exitoso:', data);
    reset();
  };

  const password = watch('password');

  return (
    <section className="relative flex items-center justify-center py-20 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
      {/* Botón Volver */}
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Regístrate</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Nombre</label>
            <input
              {...register('name', { required: 'El nombre es obligatorio' })}
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Tu nombre"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              {...register('email', {
                required: 'El email es obligatorio',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email no válido' },
              })}
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="correo@ejemplo.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <input
                {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })}
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                placeholder="********"
              />
              <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1">Confirmar Contraseña</label>
            <div className="relative">
              <input
                {...register('confirmPassword', { required: 'Confirma tu contraseña', validate: val => val === password || 'Las contraseñas no coinciden' })}
                id="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
                placeholder="********"
              />
              <button type="button" onClick={() => setShowConfirm(prev => !prev)} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition disabled:opacity-50">
            {isSubmitting ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>

        {isSubmitSuccessful && <p className="text-center text-green-600 mt-6">¡Registro completado con éxito!</p>}

        <p className="text-sm text-gray-600 text-center mt-6">
          ¿Ya tienes cuenta? <Link href="/login" className="text-cyan-500 hover:underline">Inicia Sesión</Link>
        </p>
      </motion.div>
    </section>
  );
}