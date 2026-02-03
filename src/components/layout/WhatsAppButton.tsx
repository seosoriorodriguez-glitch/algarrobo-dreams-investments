import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './Header';

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground rounded-full shadow-lg whatsapp-pulse transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
