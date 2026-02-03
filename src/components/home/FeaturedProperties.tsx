import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { properties } from '@/data/properties';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const categoryColors = {
  casa: 'bg-ocean',
  penthouse: 'bg-olive',
  parcela: 'bg-stone',
};

const FeaturedProperties = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="propiedades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-dark mb-4">
              Propiedades Destacadas
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-stone-light text-lg max-w-2xl mx-auto">
              Una selección exclusiva de las mejores oportunidades de inversión 
              y segunda vivienda en Algarrobo
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link
                  to={`/propiedad/${property.slug}`}
                  className="group block premium-card bg-card rounded-lg overflow-hidden shadow-md"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.heroImage}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <span 
                      className={cn(
                        "absolute top-4 left-4 px-3 py-1 text-sm font-medium text-primary-foreground rounded",
                        categoryColors[property.category]
                      )}
                    >
                      {property.categoryLabel}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-stone-light text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-stone-dark mb-3 group-hover:text-ocean transition-colors">
                      {property.title}
                    </h3>
                    
                    <p className="text-stone text-sm leading-relaxed mb-4 line-clamp-2">
                      {property.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-ocean font-medium text-sm group-hover:gap-3 transition-all">
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/propiedades"
              className="inline-flex items-center gap-2 text-ocean hover:text-ocean-dark font-medium transition-colors elegant-link"
            >
              Ver todas las propiedades
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
