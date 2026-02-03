import { motion } from 'framer-motion';
import { MessageCircle, Phone, Calendar, Handshake, KeyRound, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/components/layout/Header';

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

      {/* Bonus Premium - Servicio de Monetización */}
      <div className="bg-gradient-to-b from-sand/50 to-sand mt-16">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Optional Badge */}
              <div className="absolute -top-3 left-8 px-4 py-1 bg-ocean/10 rounded-full">
                <span className="text-xs font-medium text-ocean tracking-wide">Servicio opcional</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-ocean/10 to-ocean/5 rounded-2xl flex items-center justify-center group-hover:from-ocean/15 group-hover:to-ocean/10 transition-all duration-300">
                      <KeyRound className="w-8 h-8 text-ocean" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sand rounded-lg flex items-center justify-center border border-stone-200/50">
                      <TrendingUp className="w-4 h-4 text-ocean" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-stone-dark mb-2">
                    Monetizamos tu inversión
                  </h3>
                  <p className="text-stone-light text-sm mb-4">
                    Para propietarios que buscan rentabilidad y tranquilidad
                  </p>
                  <p className="text-stone leading-relaxed">
                    Gestión integral de arriendo turístico para que tu propiedad genere ingresos 
                    incluso después de la compra, con total tranquilidad y profesionalismo.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="flex-shrink-0 md:self-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-ocean/30 text-ocean hover:bg-ocean/5 hover:border-ocean/50 transition-all duration-300"
                  >
                    <a 
                      href={getWhatsAppLink("Hola, me interesa conocer el servicio de arriendo turístico")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Conoce este servicio
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
