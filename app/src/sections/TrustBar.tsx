import { Shield, Award, Lock, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 27001',
    description: 'Seguridad de la Información',
  },
  {
    icon: Award,
    name: 'ISO 42001',
    description: 'Gestión de IA',
  },
  {
    icon: Lock,
    name: 'GDPR',
    description: 'Protección de Datos',
  },
  {
    icon: CheckCircle,
    name: 'SOC 2',
    description: 'Control de Servicios',
  },
];

const partners = [
  'Microsoft',
  'AWS',
  'Google Cloud',
  'OpenAI',
  'Snowflake',
  'Databricks',
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-100">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Text */}
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Empresas que confían en nuestra tecnología para su Gobernanza de Datos e IA
            </p>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-xl font-semibold text-slate-300 hover:text-slate-500 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm border border-slate-100 hover-lift"
              >
                <cert.icon className="w-5 h-5 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-[#0A1628]">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
