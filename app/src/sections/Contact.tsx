import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Calendar,
  CheckCircle,
  Download,
  Mail,
  Phone,
  User,
  Building,
  Briefcase,
} from 'lucide-react';

export default function Contact() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsDialogOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', company: '', position: '', email: '', phone: '' });
    }, 2000);
  };

  const handleDownload = () => {
    // Create a sample PDF content
    const content = `
The Fair Agent - Onyx Core
Documento Técnico de Arquitectura

1. ARQUITECTURA DE ONYX CORE
   - Sistema Operativo de IA Agéntica
   - Arquitectura microservicios escalable
   - API RESTful y GraphQL
   - Seguridad ISO 27001 + 42001

2. COMPONENTES PRINCIPALES
   - Motor de IA Agéntica
   - Sistema de Gestión Molecular (SGM)
   - Dashboard Unificado 360°
   - API de Integración

3. CAPACIDADES
   - Análisis predictivo en tiempo real
   - Automatización de workflows
   - Monitoreo de KPIs
   - Alertas inteligentes

4. SEGURIDAD Y COMPLIANCE
   - Encriptación end-to-end
   - Autenticación multifactor
   - Auditoría completa
   - Cumplimiento GDPR

Para más información:
contact@thefairagent.com
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Onyx_Core_Documentacion_Tecnica.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="bg-cyan-50 text-cyan-700 border-cyan-200 px-4 py-1.5 text-xs font-medium"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                Comienza Hoy
              </Badge>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
                  Agenda tu{' '}
                  <span className="text-gradient">
                    Auditoría Digital Gratuita
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Descubre cómo Onyx Core puede transformar tu operación. En 30
                  minutos, identificaremos oportunidades de optimización
                  específicas para tu empresa.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Diagnóstico personalizado de tu operación',
                  'Identificación de cuellos de botella',
                  'Roadmap de implementación',
                  'Estimación de ROI',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <div className="pt-4">
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-5 rounded-full text-base font-medium transition-all duration-300 group"
                >
                  <Download className="mr-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  Descargar Documentación Técnica
                </Button>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0A1628] mb-2">
                  Solicita tu Auditoría
                </h3>
                <p className="text-slate-500 text-sm">
                  Sin compromiso. Respuesta en 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Nombre completo
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="name"
                        placeholder="Tu nombre"
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
                    <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Empresa
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="company"
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="pl-10 h-12 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-sm font-medium text-slate-700">
                    Cargo
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="position"
                      placeholder="Tu cargo o rol"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="pl-10 h-12 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="email"
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
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Teléfono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="phone"
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
                  className="w-full bg-[#0A1628] hover:bg-[#1e3a5f] text-white h-14 rounded-xl text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#0A1628]/25"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Agendar Auditoría Gratuita
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Al enviar, aceptas nuestra{' '}
                  <a href="#" className="text-cyan-600 hover:underline">
                    Política de Privacidad
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {isSubmitted ? '¡Solicitud Enviada!' : 'Confirmar Solicitud'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {isSubmitted
                ? 'Nos pondremos en contacto contigo en las próximas 24 horas.'
                : '¿Deseas confirmar tu solicitud de auditoría gratuita?'}
            </DialogDescription>
          </DialogHeader>
          {isSubmitted && (
            <div className="flex justify-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
