import { useLanguage } from '@/contexts/LanguageContext';
import { Download, MapPin, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Download,
      number: '01',
      titleKey: 'howItWorks.step1.title',
      descKey: 'howItWorks.step1.desc',
    },
    {
      icon: MapPin,
      number: '02',
      titleKey: 'howItWorks.step2.title',
      descKey: 'howItWorks.step2.desc',
    },
    {
      icon: Rocket,
      number: '03',
      titleKey: 'howItWorks.step3.title',
      descKey: 'howItWorks.step3.desc',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-border -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300">
                      <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
