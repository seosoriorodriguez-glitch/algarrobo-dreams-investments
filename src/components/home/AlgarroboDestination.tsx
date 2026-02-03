import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves, UtensilsCrossed, Clock, Palmtree, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const attractions = [
  {
    icon: Waves,
    title: 'Playas Paradisíacas',
    description: 'El Canelo, El Canelillo y más',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía Costera',
    description: 'Sabores del mar Pacífico',
  },
  {
    icon: Clock,
    title: 'A 1 Hora de Santiago',
    description: 'Conectividad privilegiada',
  },
  {
    icon: Palmtree,
    title: 'Estilo de Vida Premium',
    description: 'Club de Yates, golf y más',
  },
];

const AlgarroboDestination = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-dark mb-4">
              Algarrobo: Tu Destino de Inversión
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-stone-light text-lg max-w-2xl mx-auto">
              Más que un balneario, un estilo de vida costero premium 
              con las mejores oportunidades de inversión
            </p>
          </div>

          {/* Attraction Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/algarrobo"
                  className="group block bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-ocean/10 rounded-full mb-4 group-hover:bg-ocean/20 transition-colors">
                    <attraction.icon className="w-7 h-7 text-ocean" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-dark mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-stone-light text-sm">
                    {attraction.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/algarrobo"
              className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              Descubre Algarrobo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgarroboDestination;
