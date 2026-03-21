import { TrendingUp, Users, Target, AlertTriangle } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingUp,
    title: 'Scale-Ups Caóticas',
    description:
      'Crecimiento rápido con información dispersa y flujos de trabajo rotos. Tu equipo pierde horas buscando datos en múltiples sistemas.',
    stat: '73%',
    statLabel: 'pierden tiempo en tareas administrativas',
  },
  {
    icon: Users,
    title: 'PYMEs Estancadas',
    description:
      'Parálisis por análisis. Quieren transformarse pero no pueden costear un equipo directivo completo (COO, CMO, CDO).',
    stat: '68%',
    statLabel: 'no tienen acceso a análisis avanzado',
  },
  {
    icon: Target,
    title: 'Ejecución vs. Estrategia',
    description:
      'Tus objetivos anuales (OKRs) no se reflejan en las tareas diarias de tu equipo. Estrategia y operación viven en mundos separados.',
    stat: '82%',
    statLabel: 'de estrategias no se ejecutan correctamente',
  },
];

export default function Problem() {
  return (
    <section id="problema" className="py-24 lg:py-32">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              El Desafío
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
              ¿Tu empresa crece, pero tu{' '}
              <span className="text-gradient">control disminuye</span>?
            </h2>
            <p className="text-lg text-slate-600">
              Las organizaciones modernas operan con sistemas que asfixian su
              potencial. La brecha entre datos y acción nunca ha sido mayor.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div
                key={point.title}
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors">
                  <point.icon className="w-7 h-7 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0A1628] mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {point.description}
                </p>

                {/* Stat */}
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-3xl font-bold text-cyan-600">{point.stat}</p>
                  <p className="text-sm text-slate-500">{point.statLabel}</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
