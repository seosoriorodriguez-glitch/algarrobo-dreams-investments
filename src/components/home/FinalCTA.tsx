import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&h=800&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground">
              ¿Listo para Invertir en tu Futuro?
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Ya sea una segunda vivienda, una inversión de largo plazo o 
              tu próximo hogar frente al mar, estamos aquí para ayudarte.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground gap-3 px-10 py-7 text-lg shadow-lg"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Hablar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
