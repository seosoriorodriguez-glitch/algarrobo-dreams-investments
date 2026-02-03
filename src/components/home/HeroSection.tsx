import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { getWhatsAppLink } from '@/components/layout/Header';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('propiedades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-primary-foreground">
            Propiedades de Lujo e Inversión en la Costa de Algarrobo
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas en segunda vivienda, inversión inmobiliaria y arriendo premium. 
            Descubre el estilo de vida costero que mereces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground gap-2 px-8 py-6 text-lg"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProperties}
              className="bg-transparent border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground gap-2 px-8 py-6 text-lg"
            >
              Ver propiedades
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-foreground/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
