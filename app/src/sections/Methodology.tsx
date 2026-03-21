import { Badge } from '@/components/ui/badge';
import { Atom, GitBranch, Network, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Mapeo Molecular',
    description:
      'Dividimos tu empresa en nodos de valor interconectados, mapeando cada proceso, dependencia y punto de fricción.',
    icon: Network,
  },
  {
    number: '02',
    title: 'Simulación Predictiva',
    description:
      'Antes de implementar cambios, simulamos cómo afectarán a todo tu sistema. Predicción de fricciones y resultados.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Optimización Continua',
    description:
      'Los algoritmos de IA monitorean y ajustan constantemente, aprendiendo de cada interacción para mejorar resultados.',
    icon: Sparkles,
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 lg:py-32">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-50 text-cyan-700 border-cyan-200 px-4 py-1.5 text-xs font-medium mb-6"
            >
              <Atom className="w-3.5 h-3.5 mr-1.5" />
              Nuestra Metodología
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
              El Sistema de Gestión{' '}
              <span className="text-gradient">Molecular (SGM)</span>
            </h2>
            <p className="text-lg text-slate-600">
              No adivinamos, <strong>simulamos</strong>. Nuestro algoritmo
              propietario divide tu empresa en nodos de valor y predice el
              impacto de cada decisión antes de implementarla.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1628]/10">
                <img
                  src="/images/sgm-methodology.jpg"
                  alt="SGM Methodology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1628] mb-1">
                      Decisiones Basadas en Datos
                    </p>
                    <p className="text-xs text-slate-500">
                      Elimina la intuición. Cada decisión respaldada por
                      simulaciones predictivas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex gap-6"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Number & Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                      <span className="text-lg font-bold text-slate-400 group-hover:text-cyan-600 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-100 mt-2 group-hover:bg-cyan-100 transition-colors" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-cyan-600" />
                      <h3 className="text-xl font-semibold text-[#0A1628]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-20 text-center">
            <blockquote className="text-xl lg:text-2xl text-slate-600 italic max-w-4xl mx-auto">
              "Antes de implementar un cambio, Onyx Core simula cómo afectará a
              todo tu sistema. Predice fricciones, dependencias y resultados."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
