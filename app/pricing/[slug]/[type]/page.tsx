// app/pricing/[slug]/[type]/page.tsx
import Navbar from '../../../Navbar'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import plans, { Plan } from '../../data'

interface Props { params: { slug: string; type: 'monthly'|'annual' } }

export function generateStaticParams() {
  return plans.flatMap(p =>
    (['monthly','annual'] as const).map(type => ({
      slug: p.slug,
      type,
    }))
  )
}

export default function PlanTypeDetail({ params }: Props) {
  const { slug, type } = params
  const plan: Plan|undefined = plans.find(p => p.slug === slug)
  if (!plan) notFound()

  const price = type === 'monthly' ? plan.monthlyPrice : plan.annualPrice
  const label = type === 'monthly' ? '/mes' : '/año'

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-tr from-cyan-100 via-white to-cyan-50 min-h-screen">
        <section className="container mx-auto px-6 lg:px-12 py-16">
          {/* Volver al resumen de planes */}
          <Link
            href="/pricing"
            className="flex items-center text-cyan-500 hover:underline mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Planes
          </Link>

          {/* Título y precio específico */}
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {plan.name} – {type === 'monthly' ? 'Mensual' : 'Anual'}
          </h1>
          <div className="text-6xl font-bold text-cyan-500 mb-6">
            €{price}<span className="text-2xl font-medium text-gray-600">{label}</span>
          </div>

          <p className="text-gray-700 mb-8 whitespace-pre-line">{plan.details}</p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Características</h2>
          <ul className="list-disc list-inside space-y-2 mb-12 text-gray-600">
            {plan.features.map((f,i) => <li key={i}>{f}</li>)}
          </ul>
        </section>
      </main>
    </>
  )
}
