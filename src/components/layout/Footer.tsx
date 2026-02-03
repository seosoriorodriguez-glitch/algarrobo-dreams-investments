import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Facebook, MapPin } from 'lucide-react';
import { getWhatsAppLink } from './Header';

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/algarrobo', label: 'Algarrobo' },
  { href: '/#nosotros', label: 'Nosotros' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold">
                Costa <span className="text-ocean-light">Algarrobo</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Corredora boutique especializada en propiedades de lujo e inversión 
              en la costa de Algarrobo, Chile.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Algarrobo, Región de Valparaíso, Chile</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Navegación</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-ocean-light transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Contacto</h3>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground px-4 py-2 rounded-md transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-ocean-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-ocean-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Propiedades Costa Algarrobo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
