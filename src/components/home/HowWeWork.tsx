import { motion } from 'framer-motion';
import { MessageCircle, Phone, Calendar, Handshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Conversamos por WhatsApp',
    description: 'Cuéntanos qué buscas y te orientamos de inmediato',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Agendamos una llamada',
    description: 'Profundizamos en tus necesidades y respondemos tus preguntas',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Visita personalizada',
    description: 'Te mostramos las propiedades que mejor se ajustan a ti',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Te acompañamos',
    description: 'Estamos contigo en cada paso hasta cerrar tu operación',
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("fade-in-section", isVisible && "visible")}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-dark mb-4">
              Cómo Trabajamos
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-stone-light text-lg max-w-2xl mx-auto">
              Un proceso simple y transparente, diseñado para tu comodidad
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector Line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-ocean text-primary-foreground rounded-full mb-6 font-serif text-xl font-semibold z-10">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <step.icon className="w-6 h-6 text-ocean" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-lg font-semibold text-stone-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
