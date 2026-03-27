import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Zap, ArrowRight, Mail, Phone, User, CheckCircle, ShoppingCart, Cpu, TrendingUp, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const pillars = [
  {
    icon: ShoppingCart,
    title: 'Ventas y Atención',
    subtitle: 'Disponibilidad Total',
    description: 'Captación de Leads 24/7 y Soporte al Cliente Infalible',
    features: [
      'Captación de Leads 24/7 vía WhatsApp, Instagram y Web',
      'Respuesta automática en menos de 5 minutos',
      'Soporte al cliente sin intervención humana',
      'Escala automática a expertos cuando sea necesario',
    ],
    image: '/images/pillar-sales.jpg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Operaciones Inteligentes',
    subtitle: 'Control en Tiempo Real',
    description: 'Gestión automática del inventario y finanzas predictivas',
    features: [
      'Gestión de inventario en tiempo real',
      'Sincronización de existencias y ventas',
      'Predicciones de flujo de caja a 7 días',
      'Reportes de tesorería automatizados',
    ],
    image: '/images/pillar-operations.jpg',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento y Estrategia',
    subtitle: 'Decisiones Basadas en Datos',
    description: 'Marketing automatizado y reportes ejecutivos inteligentes',
    features: [
      'Generación semanal de contenido y gráficas',
      'Automatización de redes sociales',
      'Reportes ejecutivos semanales en WhatsApp',
      'Recomendaciones de mejora automáticas',
    ],
    image: '/images/pillar-growth.jpg',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Lock,
    title: 'Seguridad y Control',
    subtitle: 'Infraestructura Robusta',
    description: 'Gobernanza de datos y control inteligente de costos',
    features: [
      'Backups automáticos y auditoría completa',
      'Detección de anomalías en tiempo real',
      'Biblioteca centralizada de prompts IA',
      'Monitoreo de costos de IA automático',
    ],
    image: '/images/pillar-security.jpg',
    color: 'from-green-500 to-blue-500',
  },
];

const techStack = [
  { name: 'DeepSeek V3 & Qwen', role: 'Cerebro IA de Última Generación', icon: '🧠' },
  { name: 'Odoo ERP', role: 'Corazón Gestión Empresarial', icon: '❤️' },
  { name: 'n8n', role: 'Motor Automatización de Flujos', icon: '⚙️' },
  { name: 'Supabase', role: 'Memoria Base de Datos Segura', icon: '💾' },
];

export default function BootcampPage() {
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
        'https://thefairagent.app.n8n.cloud/webhook-test/captacion-leads',
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
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <section id="bootcamp" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Gradient Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="section-padding relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1.5 text-xs font-semibold mb-6 inline-flex items-center">
                <Zap className="w-3.5 h-3.5 mr-2" />
                LA TRANSFORMACIÓN QUE NECESITAS
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold text-[#0A1628] mb-6 leading-tight">
                BOOTCAMP <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">PYMES</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                La vía más innovadora para transformar tu empresa de analógica a digital en tan solo una semana. Con 3 facilitadores expertos trabajando contigo para crear soluciones de IA y automatización personalizadas.
              </p>
            </div>

            {/* Four Pillars Section */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold text-[#0A1628] text-center mb-4">
                Los 4 Pilares de la Eficiencia
              </h3>
              <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
                Optimiza cada área de tu negocio con nuestro ecosistema de Agentes Inteligentes
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-cyan-300 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                          <pillar.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0A1628] text-lg">{pillar.title}</h4>
                          <p className="text-sm text-cyan-600 font-semibold">{pillar.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-4">{pillar.description}</p>
                      <ul className="space-y-2">
                        {pillar.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-cyan-500 font-bold mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-24 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Nuestra Tecnología</h3>
              <p className="text-slate-300 mb-12">
                Combinamos las herramientas más potentes del mercado para garantizar soberanía y escalabilidad:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{tech.name}</h4>
                    <p className="text-sm text-slate-300">{tech.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-[#0A1628] mb-4">
                  ¿Listo para Transformar tu Empresa?
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  Una semana intensiva con expertos en IA para implementar soluciones que impulsen tu negocio hacia el futuro digital.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => setIsDialogOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-7 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 group inline-flex items-center"
              >
                Reservar tu Lugar en el Bootcamp
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Registration Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-slate-50 border-slate-200">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">
                {isSubmitted ? '¡Reserva Confirmada!' : 'Reserva tu Lugar'}
              </DialogTitle>
              <DialogDescription className="text-center mt-2">
                {isSubmitted
                  ? '✓ Tu reserva ha sido registrada exitosamente. Nos pondremos en contacto en breve.'
                  : 'Completa el formulario para asegurar tu lugar en el bootcamp de 1 semana'}
              </DialogDescription>
            </DialogHeader>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-center text-slate-600 font-medium">
                  Te contactaremos a través de WhatsApp muy pronto
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="bootcamp-name" className="text-sm font-semibold text-slate-800">
                    Nombre completo *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500" />
                    <Input
                      id="bootcamp-name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="pl-11 h-11 rounded-lg border-slate-300 bg-white focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bootcamp-email" className="text-sm font-semibold text-slate-800">
                    Correo electrónico *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500" />
                    <Input
                      id="bootcamp-email"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="pl-11 h-11 rounded-lg border-slate-300 bg-white focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bootcamp-phone" className="text-sm font-semibold text-slate-800">
                    Teléfono (WhatsApp) *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500" />
                    <Input
                      id="bootcamp-phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="pl-11 h-11 rounded-lg border-slate-300 bg-white focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white h-11 rounded-lg text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40 mt-6"
                >
                  Confirmar Reserva
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Respetamos tu privacidad. Nunca compartiremos tus datos.
                </p>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
