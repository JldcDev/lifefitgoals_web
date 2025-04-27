// app/services/[slug]/page.tsx
import Navbar from '../../Navbar'
import { notFound } from 'next/navigation'
import services, { Service } from '../data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
        <section className="container mx-auto px-6 lg:px-12 py-16">
          {/* Botón Volver a Servicios */}
          <Link
            href="/services"
            className="flex items-center text-cyan-500 hover:underline mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Servicios
          </Link>

          {/* Título y detalles */}
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-gray-700 mb-8 whitespace-pre-line">
            {service.details}
          </p>

          {/* Aquí podrías añadir más contenido: imágenes, FAQs, testimonios… */}
        </section>
      </main>
    </>
  )
}
