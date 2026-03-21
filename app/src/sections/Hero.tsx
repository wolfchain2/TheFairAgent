import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-up">
              {/* Badge */}
              <Badge
                variant="secondary"
                className="bg-cyan-50 text-cyan-700 border-cyan-200 px-4 py-1.5 text-xs font-medium"
              >
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                ISO 27001 + 42001 Certificado
              </Badge>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1628] leading-tight tracking-tight">
                  Transforma el Caos Operativo en{' '}
                  <span className="text-gradient">Crecimiento Sostenible</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                  <strong className="text-[#0A1628]">Onyx Core</strong> es el
                  Sistema Operativo de IA Agéntica que no solo analiza tus
                  datos, sino que <strong className="text-cyan-600">ejecuta acciones</strong>{' '}
                  para cumplir tus objetivos.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('contacto')}
                  size="lg"
                  className="bg-[#0A1628] hover:bg-[#1e3a5f] text-white px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#0A1628]/25 group"
                >
                  Solicita tu Diagnóstico Digital Gratuito
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Support Text */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-cyan-600" />
                <span>Sin compromiso de compra. Auditoría inicial de 30 minutos.</span>
              </div>
            </div>

            {/* Visual */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1628]/10 border border-slate-200/60">
                <img
                  src="/images/hero-dashboard.jpg"
                  alt="Onyx Core Dashboard"
                  className="w-full h-auto"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/20 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1628]">KPIs Optimizados</p>
                    <p className="text-xs text-slate-500">+47% eficiencia</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1628]">Seguridad IA</p>
                    <p className="text-xs text-slate-500">ISO Certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
