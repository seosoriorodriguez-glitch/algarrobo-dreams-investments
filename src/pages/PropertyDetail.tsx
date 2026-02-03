import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Check, MessageCircle, ArrowLeft, BedDouble, Bath, Maximize, Car, Calendar, Compass } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getPropertyBySlug } from '@/data/properties';
import { getWhatsAppLink } from '@/components/layout/Header';
import { cn } from '@/lib/utils';

const categoryColors = {
  casa: 'bg-ocean',
  penthouse: 'bg-olive',
  parcela: 'bg-stone',
};

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug || '');

  if (!property) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-stone-dark mb-4">Propiedad no encontrada</h1>
            <Link to="/propiedades" className="text-ocean hover:underline">
              Volver a propiedades
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappMessage = `Hola, me interesa la propiedad: ${property.title} en ${property.location}`;

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${property.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/70 via-stone-dark/30 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/propiedades"
            className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md text-stone-dark hover:bg-background transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span 
                className={cn(
                  "inline-block px-4 py-1 text-sm font-medium text-primary-foreground rounded mb-4",
                  categoryColors[property.category]
                )}
              >
                {property.categoryLabel}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-3">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-serif text-2xl font-semibold text-stone-dark mb-4">
                  Descripción
                </h2>
                <p className="text-stone leading-relaxed text-lg">
                  {property.fullDescription}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl font-semibold text-stone-dark mb-4">
                  Beneficios Destacados
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ocean mt-0.5 flex-shrink-0" />
                      <span className="text-stone">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Ideal For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-semibold text-stone-dark mb-4">
                  Ideal Para
                </h2>
                <div className="flex flex-wrap gap-3">
                  {property.idealFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-sand text-stone-dark rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="font-serif text-2xl font-semibold text-stone-dark mb-4">
                  Galería
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${property.title} - Imagen ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-28"
              >
                {/* Specs Card */}
                <div className="bg-sand rounded-lg p-6 mb-6">
                  <h3 className="font-serif text-xl font-semibold text-stone-dark mb-6">
                    Ficha Técnica
                  </h3>
                  <div className="space-y-4">
                    {property.specs.dormitorios && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <BedDouble className="w-5 h-5 text-ocean" />
                          <span>Dormitorios</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.dormitorios}</span>
                      </div>
                    )}
                    {property.specs.banos && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Bath className="w-5 h-5 text-ocean" />
                          <span>Baños</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.banos}</span>
                      </div>
                    )}
                    {property.specs.superficie && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Maximize className="w-5 h-5 text-ocean" />
                          <span>Superficie</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.superficie}</span>
                      </div>
                    )}
                    {property.specs.terreno && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Maximize className="w-5 h-5 text-ocean" />
                          <span>Terreno</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.terreno}</span>
                      </div>
                    )}
                    {property.specs.estacionamientos && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Car className="w-5 h-5 text-ocean" />
                          <span>Estacionamientos</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.estacionamientos}</span>
                      </div>
                    )}
                    {property.specs.antiguedad && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Calendar className="w-5 h-5 text-ocean" />
                          <span>Antigüedad</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.antiguedad}</span>
                      </div>
                    )}
                    {property.specs.orientacion && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone">
                          <Compass className="w-5 h-5 text-ocean" />
                          <span>Orientación</span>
                        </div>
                        <span className="font-medium text-stone-dark">{property.specs.orientacion}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground gap-2 py-6 text-lg"
                >
                  <a href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Agendar visita por WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetail;
