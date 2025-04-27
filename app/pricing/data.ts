// app/pricing/data.ts

export interface Plan {
    slug: string
    name: string
    monthlyPrice: number
    annualPrice: number
    description: string
    details: string
    features: string[]
  }
  
  const plans: Plan[] = [
    {
      slug: 'basic',
      name: 'Basic',
      monthlyPrice: 19,
      annualPrice: 190,
      description:
        'Acceso al gym + 1 clase grupal/semana. Ideal para empezar tu rutina.',
      details:
        'El plan Basic incluye:\n\n' +
        '• Acceso ilimitado al gym.\n' +
        '• 1 clase grupal por semana.\n' +
        '• Ambiente supervisado.\n\n' +
        'Perfecto para quienes se inician en el fitness.',
      features: [
        'Acceso al gym',
        '1 clase grupal/semana',
        'Sin entrenador dedicado',
      ],
    },
    {
      slug: 'standard',
      name: 'Standard',
      monthlyPrice: 49,
      annualPrice: 490,
      description:
        '3 clases grupales/semana + 1 sesión personal/mes + plan nutricional básico.',
      details:
        'El plan Standard incluye:\n\n' +
        '• Acceso al gym.\n' +
        '• 3 clases grupales por semana.\n' +
        '• 1 sesión personal al mes.\n' +
        '• Plan básico de nutrición.\n\n' +
        'Perfecto para usuarios que buscan más estructura.',
      features: [
        'Acceso al gym',
        '3 clases grupales/semana',
        '1 sesión personal/mes',
        'Plan de nutrición básico',
      ],
    },
    {
      slug: 'premium',
      name: 'Premium',
      monthlyPrice: 89,
      annualPrice: 890,
      description:
        'Clases ilimitadas + entrenador dedicado + plan nutricional avanzado + soporte 24/7.',
      details:
        'El plan Premium incluye:\n\n' +
        '• Acceso ilimitado al gym.\n' +
        '• Todas las clases grupales.\n' +
        '• Entrenador dedicado.\n' +
        '• Plan nutricional avanzado.\n' +
        '• Soporte 24/7.\n\n' +
        'Diseñado para quienes buscan máxima personalización.',
      features: [
        'Acceso ilimitado al gym',
        'Clases ilimitadas',
        'Entrenador dedicado',
        'Plan nutricional avanzado',
        'Soporte 24/7',
      ],
    },
  ]
  
  export default plans
  