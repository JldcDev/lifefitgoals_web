// app/components/Footer.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiInstagram, SiX, SiFacebook } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const pricingHref = isHome ? '/#pricing' : '/pricing'
  const contactHref = isHome ? '/#contact' : '/'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 text-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <h3 className="text-cyan-500 text-2xl font-bold mb-4">LifeFitGoals</h3>
          <p className="text-sm">
            Tu aliado en entrenamiento funcional, nutrición y bienestar. Impulsa tus metas fitness con nosotros.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#hero" className="hover:text-cyan-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-cyan-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href={pricingHref} className="hover:text-cyan-500 transition">
                Planes
              </Link>
            </li>
            <li>
              <Link href={contactHref} className="hover:text-cyan-500 transition">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-cyan-500 transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-3">Recursos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-cyan-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-cyan-500 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cyan-500 transition">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cyan-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto & Social */}
        <div>
          <h4 className="text-gray-800 font-semibold mb-3">Contáctanos</h4>
          <ul className="text-sm space-y-2 mb-4">
            <li>Calle Fitness 123, Madrid, España</li>
            <li>+34 600 123 456</li>
            <li>contacto@lifefitgoals.com</li>
          </ul>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-cyan-500 transition">
              <SiInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-cyan-500 transition">
              <SiX size={20} />
            </Link>
            <Link href="#" className="hover:text-cyan-500 transition">
              <SiFacebook size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <p className="text-center text-xs text-gray-600 py-4">
          © {new Date().getFullYear()} LifeFitGoals. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  )
}
