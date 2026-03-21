import { Linkedin, Twitter, Instagram, Mail, Shield, Award } from 'lucide-react';

const footerLinks = {
  legal: [
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos de Servicio', href: '#' },
    { label: 'Compliance ISO', href: '#' },
  ],
  contact: [
    { label: 'soporte@thefairagent.com', href: 'mailto:soporte@thefairagent.com' },
    { label: 'ventas@thefairagent.com', href: 'mailto:ventas@thefairagent.com' },
    { label: 'prensa@thefairagent.com', href: 'mailto:prensa@thefairagent.com' },
  ],
  social: [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo-atom.png"
                  alt="The Fair Agent"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-semibold">The Fair Agent</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                Construyendo la infraestructura de IA ética del futuro. Onyx
                Core: Tu Co-Piloto Operacional con IA Agéntica.
              </p>
              
              {/* Certifications */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/70">ISO 27001</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/70">ISO 42001</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                Contacto
              </h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                  Síguenos
                </h4>
                <div className="flex gap-3">
                  {footerLinks.social.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-white/60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 The Fair Agent. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-sm">
              Diseñado con propósito en Madrid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
