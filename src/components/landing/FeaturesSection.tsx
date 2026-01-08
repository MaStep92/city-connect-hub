import { useLanguage } from '@/contexts/LanguageContext';
import { Bus, Droplets, Building2, Calendar, Check } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const featureCategories = [
    {
      icon: Bus,
      titleKey: 'features.transport.title',
      colorClass: 'text-feature-transport bg-feature-transport/10',
      features: [
        'features.transport.routes',
        'features.transport.realtime',
        'features.transport.parking',
        'features.transport.schedule',
      ],
    },
    {
      icon: Droplets,
      titleKey: 'features.utilities.title',
      colorClass: 'text-feature-utilities bg-feature-utilities/10',
      features: [
        'features.utilities.payments',
        'features.utilities.meters',
        'features.utilities.history',
        'features.utilities.notifications',
      ],
    },
    {
      icon: Building2,
      titleKey: 'features.services.title',
      colorClass: 'text-feature-services bg-feature-services/10',
      features: [
        'features.services.petitions',
        'features.services.documents',
        'features.services.appointments',
        'features.services.feedback',
      ],
    },
    {
      icon: Calendar,
      titleKey: 'features.events.title',
      colorClass: 'text-feature-events bg-feature-events/10',
      features: [
        'features.events.calendar',
        'features.events.news',
        'features.events.alerts',
        'features.events.updates',
      ],
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background-subtle">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featureCategories.map((category, index) => (
            <div
              key={category.titleKey}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.colorClass}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t(category.titleKey)}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
