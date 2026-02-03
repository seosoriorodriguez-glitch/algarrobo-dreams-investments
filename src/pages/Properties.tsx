import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { properties } from '@/data/properties';
import { cn } from '@/lib/utils';

const categoryColors = {
  casa: 'bg-ocean',
  penthouse: 'bg-olive',
  parcela: 'bg-stone',
};

const Properties = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-sand">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-dark mb-4">
              Nuestras Propiedades
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-stone-light text-lg">
              Explora nuestra selección exclusiva de propiedades premium en Algarrobo. 
              Cada una ha sido cuidadosamente elegida por su calidad y potencial de inversión.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
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
                    
                    <h2 className="font-serif text-xl font-semibold text-stone-dark mb-3 group-hover:text-ocean transition-colors">
                      {property.title}
                    </h2>
                    
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
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
