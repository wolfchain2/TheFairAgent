import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/AppRouter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateToBootcamp, navigateToHome } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBootcampClick = () => {
    navigateToBootcamp();
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigateToHome();
    setIsMobileMenuOpen(false);
  };

  const handleAuditClick = () => {
    navigateToHome();
    setTimeout(() => {
      const contactElement = document.getElementById('contacto');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo-atom.png"
              alt="The Fair Agent"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-semibold text-[#0A1628] hidden sm:block">
              The Fair Agent
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('soluciones')}
              className="text-sm font-medium text-slate-600 hover:text-[#0A1628] transition-colors"
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-sm font-medium text-slate-600 hover:text-[#0A1628] transition-colors"
            >
              Metodología
            </button>
            <button
              onClick={() => scrollToSection('impacto')}
              className="text-sm font-medium text-slate-600 hover:text-[#0A1628] transition-colors"
            >
              Impacto
            </button>
            <button
              onClick={() => scrollToSection('inversores')}
              className="text-sm font-medium text-slate-500 hover:text-[#0A1628] transition-colors"
            >
              Inversores
            </button>
            <button
              onClick={handleBootcampClick}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors"
            >
              Bootcamp
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={handleAuditClick}
              className="bg-[#0A1628] hover:bg-[#1e3a5f] text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0A1628]/20"
            >
              Agenda tu Auditoría
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1628]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="section-padding py-6 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection('soluciones')}
            className="text-left text-base font-medium text-slate-700 hover:text-[#0A1628] py-2"
          >
            Soluciones
          </button>
          <button
            onClick={() => scrollToSection('metodologia')}
            className="text-left text-base font-medium text-slate-700 hover:text-[#0A1628] py-2"
          >
            Metodología
          </button>
          <button
            onClick={() => scrollToSection('impacto')}
            className="text-left text-base font-medium text-slate-700 hover:text-[#0A1628] py-2"
          >
            Impacto
          </button>
          <button
            onClick={() => scrollToSection('inversores')}
            className="text-left text-base font-medium text-slate-500 hover:text-[#0A1628] py-2"
          >
            Inversores
          </button>
          <button
            onClick={handleBootcampClick}
            className="text-left text-base font-medium text-slate-700 hover:text-cyan-600 py-2"
          >
            Bootcamp
          </button>
          <Button
            onClick={handleAuditClick}
            className="bg-[#0A1628] hover:bg-[#1e3a5f] text-white w-full rounded-full mt-2"
          >
            Agenda tu Auditoría
          </Button>
        </div>
      </div>
    </header>
  );
}
