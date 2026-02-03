import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { getWhatsAppLink } from '@/components/layout/Header';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Imágenes premium del carrusel
const heroImages = [
  {
    url: 'https://a0.muscache.com/im/pictures/ae5bd9ca-17d6-4c9b-9191-4d70a02fdfce.jpg',
    alt: 'San Alfonso del Mar - Laguna Cristalina',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5b/30/ae/the-beach.jpg?w=1200&h=800&s=1',
    alt: 'Playa de Algarrobo',
  },
  {
    url: 'https://cl.habcdn.com/photos/project/medium/san-alfonso-del-mar_52560.jpg',
    alt: 'San Alfonso del Mar - Vista Panorámica',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProperties = () => {
    const element = document.getElementById('propiedades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel - Crossfade suave */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image.url}
          initial={false}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.05
          }}
          transition={{ 
            opacity: { duration: 2, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 8, ease: 'linear' }
          }}
          className="absolute inset-0"
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image.url}')` }}
          />
        </motion.div>
      ))}
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/90">Corredora Boutique Premium</span>
          </motion.div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 leading-tight text-white drop-shadow-lg">
            Propiedades de Lujo en la Costa de Algarrobo
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Especialistas en segunda vivienda, inversión inmobiliaria y arriendo premium. 
            Descubre el estilo de vida costero que mereces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white gap-2 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 gap-2 px-8 py-6 text-lg transition-all"
            >
              Ver propiedades
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators - Elegant Lines */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              index === currentIndex 
                ? "w-10 bg-white" 
                : "w-6 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
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
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
