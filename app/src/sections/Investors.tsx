import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Briefcase, Mail, FileText, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Modelo de Autofinanciación',
    description:
      'Vinculamos beneficio con propósito, creando un ciclo virtuoso de innovación.',
  },
  {
    icon: Briefcase,
    title: 'Venture Builder Activo',
    description:
      'No solo desarrollamos software, construimos empresas con impacto real.',
  },
];

export default function Investors() {
  return (
    <section
      id="inversores"
      className="py-24 lg:py-32 bg-gradient-to-br from-[#0A1628] via-[#0f1f35] to-[#1e3a5f]"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="bg-white/10 text-cyan-400 border-cyan-500/30 px-4 py-1.5 text-xs font-medium"
              >
                <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                Para Inversores
              </Badge>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  ¿Eres{' '}
                  <span className="text-cyan-400">
                    Venture Capital
                  </span>{' '}
                  o Family Office?
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  Únete a un modelo de negocio de autofinanciación que vincula
                  beneficio con propósito. Estamos construyendo la{' '}
                  <strong className="text-white">
                    infraestructura de IA ética del futuro
                  </strong>
                  .
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-400 text-[#0A1628] px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 group"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Solicitar Deck de Inversores
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base font-medium transition-all duration-300"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Contactar con IR
                </Button>
              </div>
            </div>

            {/* Visual/Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3x', label: 'Crecimiento YoY' },
                { value: '15+', label: 'Empresas en Portfolio' },
                { value: '98%', label: 'Retención de Clientes' },
                { value: '$2.5M', label: 'ARR Proyectado' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
