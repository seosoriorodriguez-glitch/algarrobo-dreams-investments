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
    featured: true,
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

          {/* Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-center">
            {specializations.map((item, index) => {
              const isFeatured = item.featured;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={cn(
                    // Base card styles
                    "group relative text-center rounded-2xl transition-all duration-300 ease-out",
                    // Fondo y borde premium
                    "bg-[#FDFCFA] border border-stone-200/50",
                    // Padding responsive
                    "p-6 md:p-10",
                    // Sombra base
                    "shadow-sm",
                    // Hover effects (desktop)
                    "md:hover:-translate-y-2 md:hover:shadow-xl",
                    // Featured card - destacada
                    isFeatured && [
                      "md:scale-105 md:shadow-lg",
                      "md:border-ocean/20",
                      "md:hover:shadow-2xl",
                      "md:z-10"
                    ]
                  )}
                >
                  {/* Accent line for featured card */}
                  {isFeatured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-ocean/60 via-ocean to-ocean/60 rounded-full hidden md:block" />
                  )}
                  
                  {/* Icon Circle - Protagonista */}
                  <div 
                    className={cn(
                      "inline-flex items-center justify-center rounded-full mb-6",
                      // Tamaño aumentado 25%
                      "w-20 h-20",
                      // Fondo con transición
                      "bg-ocean/10 transition-all duration-300",
                      // Hover effect en el círculo
                      "group-hover:bg-ocean/20 group-hover:scale-110"
                    )}
                  >
                    <item.icon 
                      className={cn(
                        // Tamaño aumentado 25%
                        "w-10 h-10",
                        // Color con transición
                        "text-ocean transition-colors duration-300",
                        "group-hover:text-ocean"
                      )} 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Title - Bold y prominente */}
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-dark mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Description - Suave, mejor interlineado */}
                  <p className="text-stone-light text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
