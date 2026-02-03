import { motion } from 'framer-motion';
import { 
  Waves, UtensilsCrossed, Users, Clock, TreePine, Landmark, 
  GlassWater, Ship, Anchor, Fish, MessageCircle 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/components/layout/Header';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const attractions = [
  {
    icon: Waves,
    title: 'Playas Paradisíacas',
    description: 'Algarrobo cuenta con algunas de las playas más hermosas de la costa central. El Canelo y El Canelillo ofrecen aguas tranquilas ideales para familias, mientras que la playa principal es perfecta para largos paseos al atardecer.',
    highlights: ['Playa El Canelo', 'Playa El Canelillo', 'Playa Grande', 'Bahía protegida'],
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5b/30/ae/the-beach.jpg?w=1200&h=800&s=1',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía Costera',
    description: 'Desde ceviches frescos hasta mariscos preparados de forma tradicional, la oferta gastronómica de Algarrobo refleja lo mejor del océano Pacífico. Restaurantes con vista al mar completan una experiencia culinaria inolvidable.',
    highlights: ['Mariscos frescos', 'Restaurantes con vista', 'Cocina tradicional', 'Bares de vino'],
    image: 'https://www.algarrobo.cl/wp-content/uploads/2025/01/gastronomia-algarrobo.jpeg',
  },
  {
    icon: Users,
    title: 'Turismo Familiar',
    description: 'Algarrobo es un destino perfecto para toda la familia. Sus playas seguras, paseos en bote, y múltiples actividades al aire libre crean recuerdos que duran para siempre.',
    highlights: ['Playas seguras', 'Actividades al aire libre', 'Paseos en bote', 'Entorno tranquilo'],
    image: 'https://cms-media.getmyboat.com/production/images/GetMyBoats_Guides_t.2e16d0ba.fill-708x386.jpegquality-80.jpg',
  },
  {
    icon: Clock,
    title: 'A 1 Hora de Santiago',
    description: 'La conectividad privilegiada de Algarrobo permite disfrutar de la costa sin sacrificar la vida urbana. En poco más de una hora desde Santiago, estarás respirando aire de mar.',
    highlights: ['Ruta 68 directa', '90 minutos desde Santiago', 'Acceso fácil', 'Escapada de fin de semana'],
    image: 'https://media.istockphoto.com/id/1055655978/es/foto/telef%C3%A9rico-en-el-cerro-san-crist%C3%B3bal-domina-una-vista-panor%C3%A1mica-de-santiago.jpg?s=612x612&w=0&k=20&c=1cxgXQ3rGK7-sZNohB-94zSNmLSoZhq_jwFhNSo4y3E=',
  },
  {
    icon: TreePine,
    title: 'Naturaleza y Ecoturismo',
    description: 'El Humedal El Yali, las cabalgatas por la costa, y los senderos naturales ofrecen una conexión única con la naturaleza. Un equilibrio perfecto entre desarrollo y preservación.',
    highlights: ['Humedal El Yali', 'Cabalgatas costeras', 'Senderos naturales', 'Avistamiento de aves'],
    image: 'https://munialgarrobo.cl/wp-content/uploads/2023/10/Copia-de-EttPCLQWYAAzqFn.jpg',
  },
  {
    icon: Landmark,
    title: 'Cultura e Historia',
    description: 'La cercana Casa Museo de Pablo Neruda en Isla Negra es un tesoro cultural. Descubre la inspiración del poeta Nobel y su profunda conexión con el océano.',
    highlights: ['Casa Museo Neruda', 'Isla Negra', 'Historia local', 'Arte y cultura'],
    image: 'https://cultura.fundacionneruda.org/wp-content/uploads/2023/12/cultura-fundacion-pablo-neruda-casas-museo-15.jpeg',
  },
  {
    icon: GlassWater,
    title: 'Valle de Casablanca',
    description: 'A pocos minutos de Algarrobo, el Valle de Casablanca ofrece las mejores viñas de la zona central. Tours de vino, degustaciones premium, y paisajes de postal.',
    highlights: ['Tours de vino', 'Viñas premium', 'Degustaciones', 'Gastronomía de autor'],
    image: 'https://www.kingstonvineyards.com/wp-content/uploads/2025/09/CASABLANCA-ESSE-2-1024x683.jpg',
  },
];

const premiumActivities = [
  {
    icon: Ship,
    title: 'Club de Yates',
    description: 'El Club de Yates de Algarrobo es uno de los más prestigiosos de Chile, ofreciendo instalaciones de primer nivel y una comunidad náutica exclusiva.',
    image: 'https://revistamarina.cl/storage/app/uploads/public/e60/196/bb3/thumb__844_406_0_0_crop.jpg',
  },
  {
    icon: Anchor,
    title: 'Paseos en Lancha',
    description: 'Explora la bahía desde el agua. Los paseos en lancha ofrecen vistas espectaculares de la costa y la posibilidad de avistar fauna marina.',
    image: 'https://www.latercera.com/resizer/v2/G4H2RIUXK5BEHFCZ7LWMAM7XI4.jpg?auth=bad6aab80d2313f134ea552172ea9fdf65bf60f080afff3efe779b12f1723e0c&smart=true&width=800&height=533&quality=70',
  },
  {
    icon: Fish,
    title: 'Buceo en Quintay',
    description: 'A pocos kilómetros, Quintay ofrece algunos de los mejores sitios de buceo de la zona central, con aguas cristalinas y vida marina abundante.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop',
  },
];

const Algarrobo = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://a0.muscache.com/im/pictures/ae5bd9ca-17d6-4c9b-9191-4d70a02fdfce.jpg')` 
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-primary-foreground px-4"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-primary-foreground">
              Descubre Algarrobo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Más que un balneario: un estilo de vida premium y una de las mejores 
              oportunidades de inversión de la costa central
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
              >
                {/* Image */}
                <div className={cn(index % 2 === 1 && "lg:col-start-2")}>
                  <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-ocean/10 rounded-full flex items-center justify-center">
                      <attraction.icon className="w-6 h-6 text-ocean" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-stone-dark">
                      {attraction.title}
                    </h2>
                  </div>
                  
                  <p className="text-stone leading-relaxed mb-6">
                    {attraction.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-sand text-stone-dark rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Activities */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4">
          <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-dark mb-4">
                Deportes y Panoramas Premium
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-stone-light text-lg max-w-2xl mx-auto">
                Para quienes buscan experiencias exclusivas, Algarrobo ofrece 
                actividades náuticas de primer nivel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {premiumActivities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative h-[320px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  {/* Background Image with blur */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 brightness-75"
                    style={{ backgroundImage: `url('${activity.image}')` }}
                  />
                  
                  {/* Gradient Overlay - más oscuro para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2 text-white drop-shadow-lg">
                      {activity.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              ¿Buscas Invertir en Algarrobo?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Te ayudamos a encontrar la propiedad perfecta para tu segunda vivienda 
              o inversión en esta zona privilegiada
            </p>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-primary-foreground gap-2 px-8 py-6 text-lg"
            >
              <a href={getWhatsAppLink("Hola, me interesa invertir en Algarrobo")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Conversemos por WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Algarrobo;
