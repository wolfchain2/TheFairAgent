import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Rocket,
  Shield,
  Eye,
  Brain,
  ArrowRight,
  Play,
  Zap,
  Lock,
  Globe,
  Cpu,
} from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Acción, no solo Diagnóstico',
    description:
      'A diferencia de Tableau o Lattice, Onyx detecta desviaciones en tus KPIs y sugiere (o automatiza) correcciones inmediatas.',
    highlight: 'De datos a acción en segundos',
  },
  {
    icon: Shield,
    title: 'Guardián de Coherencia',
    description:
      'Monitoreo en tiempo real para asegurar que la ejecución diaria no contradiga tu estrategia. Alertas inteligentes si el CAC supera al LTV.',
    highlight: 'Estrategia y ejecución alineadas',
  },
  {
    icon: Eye,
    title: 'Visión 360°',
    description:
      'Unifica Prospección, Operaciones, Finanzas, Legal e Innovación en una sola plataforma. Un único punto de verdad para toda tu empresa.',
    highlight: 'Toda tu empresa conectada',
  },
  {
    icon: Brain,
    title: 'Inteligencia Híbrida',
    description:
      'Potencia las capacidades humanas, eliminando la burocracia y automatizando lo repetitivo. Tu equipo enfocado en lo que realmente importa.',
    highlight: 'Humanos + IA = Resultados',
  },
];

const features = [
  { icon: Zap, label: 'Automatización' },
  { icon: Lock, label: 'Seguridad' },
  { icon: Globe, label: 'Escalable' },
  { icon: Cpu, label: 'IA Agéntica' },
];

export default function Solution() {
  return (
    <section id="soluciones" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-50 text-cyan-700 border-cyan-200 px-4 py-1.5 text-xs font-medium mb-6"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              La Solución
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
              Onyx Core: Tu{' '}
              <span className="text-gradient">Co-Piloto Operacional</span> con
              IA Agéntica
            </h2>
            <p className="text-lg text-slate-600">
              No es solo Business Intelligence pasivo. Es tu sistema nervioso
              central para actuar.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Dashboard Preview */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1628]/10 border border-slate-200/60">
                <img
                  src="/images/hero-dashboard.jpg"
                  alt="Onyx Core Interface"
                  className="w-full h-auto"
                />
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-100"
                  >
                    <feature.icon className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-medium text-[#0A1628]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6 order-1 lg:order-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                    <benefit.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1628] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-2">
                      {benefit.description}
                    </p>
                    <span className="text-xs font-medium text-cyan-600">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-[#0A1628] hover:bg-[#1e3a5f] text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#0A1628]/25 group"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Ver Demo de Onyx Core
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10x', label: 'Más rápido que BI tradicional' },
              { value: '47%', label: 'Reducción en costos operativos' },
              { value: '99.9%', label: 'Uptime garantizado' },
              { value: '<2s', label: 'Tiempo de respuesta promedio' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm"
              >
                <p className="text-3xl lg:text-4xl font-bold text-cyan-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
