import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, Clock, Zap, ArrowRight, Mail, Phone, User, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const features = [
  {
    icon: Clock,
    title: 'Duración: 1 Semana',
    description: 'Un programa intensivo diseñado para resultados inmediatos',
  },
  {
    icon: Users,
    title: '3 Facilitadores Expertos',
    description: 'Especialistas en Inteligencia Artificial que guiarán tu transformación',
  },
  {
    icon: Zap,
    title: 'Soluciones Personalizadas',
    description: 'Crea juntos automatización e IA adaptada a tu empresa',
  },
];

export default function Bootcamp() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        'https://thefairagent.app.n8n.cloud/webhook/captacion-leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tipo_formulario: 'bootcamp',
            nombre: formData.name,
            correo: formData.email,
            telefono: formData.phone,
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsDialogOpen(false);
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '' });
        }, 2000);
      } else {
        alert('Error al enviar');
      }
    } catch (error) {
      console.error('[v0] Error:', error);
      alert('Error al enviar');
    }
  };
  return (
    <section id="bootcamp" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge
              variant="secondary"
              className="bg-cyan-50 text-cyan-700 border-cyan-200 px-4 py-1.5 text-xs font-medium mb-6"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Transformación Digital
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
              BOOTCAMP <span className="text-gradient">PYMES</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              La vía más innovadora para transformar tu empresa de analógica a digital en tan solo una semana.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1628]/10">
                <img
                  src="/images/bootcamp-pymes.jpg"
                  alt="Bootcamp PYMES"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/20 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">
                  Transformación Acelerada
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Durante una semana intensiva, trabajarás codo a codo con nuestros 3 facilitadores expertos en inteligencia artificial. Juntos diseñaremos e implementaremos las soluciones de automatización e IA perfectas para tu empresa.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  No es un curso teórico. Es una experiencia práctica donde tu empresa será transformada, paso a paso, de una operación analógica a un negocio potenciado por tecnología.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 p-4 rounded-lg border border-slate-200 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A1628] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => setIsDialogOpen(true)}
                size="lg"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0A1628] px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 group"
              >
                Reservar tu Lugar en el Bootcamp
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-20 text-center">
            <blockquote className="text-lg lg:text-xl text-slate-600 italic max-w-4xl mx-auto border-l-4 border-cyan-500 pl-6 py-4">
              "Transforma tu Empresa con IA: Los 8 Pilares de la Eficiencia. Optimiza cada área de tu negocio con nuestro ecosistema de Agentes Inteligentes integrados con Odoo, Supabase y DeepSeek."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Registration Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {isSubmitted ? '¡Reserva Confirmada!' : 'Inscríbete al Bootcamp PYMES'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {isSubmitted
                ? 'Tu reserva ha sido registrada. Nos pondremos en contacto pronto.'
                : 'Completa tus datos para reservar tu lugar en el bootcamp de 1 semana'}
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex justify-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="bootcamp-name" className="text-sm font-medium text-slate-700">
                  Nombre completo *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="bootcamp-name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="pl-10 h-12 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bootcamp-email" className="text-sm font-medium text-slate-700">
                  Correo electrónico *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="bootcamp-email"
                    type="email"
                    placeholder="tu@empresa.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-10 h-12 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bootcamp-phone" className="text-sm font-medium text-slate-700">
                  Teléfono (WhatsApp) *
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="bootcamp-phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="pl-10 h-12 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0A1628] h-12 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25"
              >
                Confirmar Reserva
              </Button>

              <p className="text-center text-xs text-slate-400">
                * Campos requeridos
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
