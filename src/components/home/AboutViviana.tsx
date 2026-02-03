import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const AboutViviana = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                  alt="Viviana Rodríguez - Corredora de Propiedades"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ocean/10 rounded-lg -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-dark mb-6">
                Conoce a Viviana Rodríguez
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  <strong className="text-stone-dark">Más de 20 años vinculada a Algarrobo</strong> me han enseñado 
                  que este rincón de la costa central es mucho más que un destino de verano: 
                  es un lugar donde se construyen los mejores recuerdos y las inversiones más sólidas.
                </p>
                <p>
                  Hace más de 5 años tomé la decisión de hacer de Algarrobo mi hogar permanente. 
                  Conozco cada calle, cada playa, cada rincón de esta bahía. Esa cercanía me permite 
                  entender exactamente lo que buscas.
                </p>
                <p>
                  Mi experiencia en turismo y arriendo de propiedades de lujo me ha dado una perspectiva 
                  única del mercado. No solo te muestro propiedades: <strong className="text-stone-dark">te 
                  acompañamos en todo el proceso</strong>, desde la primera conversación hasta que tengas 
                  las llaves en tu mano.
                </p>
                <p className="text-ocean font-medium italic">
                  "Creemos en relaciones a largo plazo, no en transacciones rápidas."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutViviana;
