// app/services/data.ts

import { LucideIcon } from 'lucide-react'
import { Dumbbell, Apple, Users, Headset } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  description: string
  details: string
  features: string[]
  Icon: LucideIcon
}

const services: Service[] = [
  {
    slug: 'personal-training',
    title: 'Personal Training',
    description:
      'Sesiones 1-a-1 diseñadas a tu medida, con programas totalmente adaptados a tus objetivos y nivel.',
    details: `
Con Personal Training disfrutarás de:

• Evaluación inicial completa de tu estado físico.  
• Plan de entrenamiento personalizado (fuerza, movilidad, resistencia).  
• Feedback instantáneo y correcciones de postura.  
• Seguimiento de progresos y ajuste de la rutina cada semana.  
• Acceso a rutinas híbridas (presencial + remoto) según conveniencia.  
    `.trim(),
    features: [
      'Entrenador certificado dedicado',
      'Evaluaciones fisiológicas periódicas',
      'Rutinas 100% personalizadas',
      'Informes de progreso quincenales',
      'Acceso a app exclusiva de seguimiento',
    ],
    Icon: Dumbbell,
  },
  {
    slug: 'nutrition-plans',
    title: 'Nutrition Plans',
    description:
      'Planes de alimentación elaborados por nutricionistas, enfocados en macronutrientes y hábitos saludables.',
    details: `
Nuestro servicio de Nutrition Plans incluye:

• Análisis de tu ingesta actual y objetivos nutricionales.  
• Plan de comidas semanal con recetas variadas y fáciles de preparar.  
• Ajustes automáticos basados en tu actividad y feedback.  
• Guía de suplementación y timing de nutrientes.  
• Acceso a webinars mensuales con especialistas en nutrición.  
    `.trim(),
    features: [
      'Menús semanales con cálculo de macros',
      'Recetas paso a paso',
      'Revisión y ajustes mensuales',
      'Soporte vía chat con un nutricionista',
      'Recursos educativos y webinars',
    ],
    Icon: Apple,
  },
  {
    slug: 'group-classes',
    title: 'Group Classes',
    description:
      'Clases grupales de alta energía: HIIT, yoga, pilates y bootcamp, para motivarte con compañeros.',
    details: `
En Group Classes te ofrecemos:

• Horarios flexibles (mañana, tarde y noche).  
• Sesiones de HIIT, Yoga, Pilates, Bootcamp y más.  
• Grupos reducidos (máx. 10 personas) para feedback personalizado.  
• Música y ambiente motivador.  
• Clases especiales al aire libre cada fin de semana.  
    `.trim(),
    features: [
      'Más de 20 clases semanales distintas',
      'Grupos de máximo 10 alumnos',
      'Monitores certificados en cada modalidad',
      'Opción presencial y online simultánea',
      'Eventos deportivos exclusivos',
    ],
    Icon: Users,
  },
  {
    slug: 'online-coaching',
    title: 'Online Coaching',
    description:
      'Entrenamiento virtual con seguimiento en vídeo, ajustes semanales y soporte 24/7 a través de nuestra plataforma.',
    details: `
Con Online Coaching tendrás:

• Sesiones de vídeo en directo y grabadas.  
• Evaluaciones de técnica mediante envío de clips.  
• Feedback semanal por parte de tu coach.  
• Planes de entrenamiento y nutrición integrados.  
• Comunidad privada para retos y soporte mutuo.  
    `.trim(),
    features: [
      'Plataforma web y app móvil',
      'Sesiones en directo y biblioteca de vídeos',
      'Revisión de vídeos y correcciones remotas',
      'Mensajes ilimitados con tu coach',
      'Retos mensuales con premios',
    ],
    Icon: Headset,
  },
]

export default services
