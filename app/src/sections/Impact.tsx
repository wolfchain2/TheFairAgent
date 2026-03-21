import { Badge } from '@/components/ui/badge';
import { Heart, Music, Users, Lightbulb, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'AI Connect',
    tagline: 'El puente entre lo digital y lo real',
    description:
      'Una plataforma diseñada para combatir la soledad digital. Conecta personas con intereses similares para actividades reales, crea eventos comunitarios, visualiza las necesidades de tu comunidad y participa en resolverlas.',
    features: [
      'Encuentra personas con intereses similares',
      'Crea eventos para impulsar servicios comunitarios',
      'Visualiza necesidades locales',
      'IA imparcial para eventos seguros',
    ],
    image: '/images/ai-connect.jpg',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Kaizen AI',
    tagline: 'Democratizando la educación musical',
    description:
      'Un ecosistema de educación musical con IA Agéntica que busca democratizar el dominio de instrumentos mediante un tutor virtual que ofrece corrección en tiempo real y adapta lecciones a cada usuario.',
    features: [
      'Tutor virtual en tiempo real',
      'Violín, guitarra, violonchelo',
      'Teoría musical y solfeo',
      'Progreso personalizado',
    ],
    image: '/images/kaizen-ai.jpg',
    icon: Music,
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Impact() {
  return (
    <section id="impacto" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="bg-rose-50 text-rose-700 border-rose-200 px-4 py-1.5 text-xs font-medium mb-6"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5" />
              I+D Social
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
              Innovación con{' '}
              <span className="text-gradient">Propósito</span>
            </h2>
            <p className="text-lg text-slate-600">
              Somos un <strong>Venture Builder activo</strong>. Lo que aprendemos
              resolviendo desafíos sociales hace nuestra tecnología B2B más
              ética, segura y resiliente.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
                    
                    {/* Project Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                        <project.icon className="w-4 h-4" />
                        {project.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1628] mb-2">
                      {project.name}
                    </h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <Lightbulb className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors group">
                    Conoce más sobre {project.name}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 p-8 bg-[#0A1628] rounded-2xl text-center">
            <p className="text-white/90 text-lg">
              <Lightbulb className="w-6 h-6 inline-block mr-2 text-cyan-400" />
              La tecnología probada en nuestro laboratorio social es la misma
              que protege y optimiza tu empresa en{' '}
              <strong className="text-cyan-400">Onyx Core</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
