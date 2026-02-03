import { motion } from 'framer-motion';
import { Gem, Target, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const specializations = [
  {
    icon: Gem,
    title: 'Corredora Boutique',
    description: 'Atención personalizada y exclusiva. No somos una corredora masiva, somos tu aliado en cada paso.',
  },
  {
    icon: Target,
    title: 'Selección Limitada',
    description: 'Solo trabajamos con propiedades que cumplen nuestros estándares de calidad y potencial de inversión.',
  },
  {
    icon: TrendingUp,
    title: 'Enfoque en Valor',
    description: 'Asesoramos con visión de largo plazo, priorizando la proyección y rentabilidad de cada inversión.',
  },
];

const Specialization = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-dark mb-4">
              Nuestra Especialización
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-stone-light text-lg max-w-2xl mx-auto">
              Calidad sobre cantidad. Cada propiedad que ofrecemos 
              ha sido cuidadosamente seleccionada.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {specializations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sand rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-ocean" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-stone-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-stone leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
