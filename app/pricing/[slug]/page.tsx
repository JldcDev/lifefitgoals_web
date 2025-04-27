// app/pricing/[slug]/page.tsx
import Navbar from '../../Navbar'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import plans, { Plan } from '../data'

interface Props {
  params: { slug: string }
}

// Genera en build time /pricing/basic, /pricing/standard, /pricing/premium
export async function generateStaticParams() {
  return plans.map((p) => ({ slug: p.slug }))
}

export default function PlanSummary({ params }: Props) {
  const plan = plans.find((p) => p.slug === params.slug)
  if (!plan) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
        <section className="container mx-auto px-6 lg:px-12 py-16">
          {/* Botón Volver a Planes */}
          <Link href="/pricing" className="flex items-center text-cyan-500 hover:underline mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Volver a Planes
          </Link>

          {/* Título del plan */}
          <h1 className="text-4xl font-bold mb-4">{plan.name}</h1>

          {/* Enlaces a detalle mensual y anual */}
          <div className="flex items-baseline space-x-6 mb-8">
            <Link
              href={`/pricing/${plan.slug}/monthly`}
              className="text-5xl font-bold text-cyan-500 hover:underline"
            >
              €{plan.monthlyPrice}/mes
            </Link>
            <Link
              href={`/pricing/${plan.slug}/annual`}
              className="text-2xl font-bold text-cyan-500 hover:underline"
            >
              €{plan.annualPrice}/año
            </Link>
          </div>

          {/* Detalles del plan */}
          <p className="text-gray-700 mb-8 whitespace-pre-line">{plan.details}</p>

          {/* Características del plan */}
          <h2 className="text-2xl font-semibold mb-4">Características</h2>
          <ul className="list-disc list-inside space-y-2 mb-12">
            {plan.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
