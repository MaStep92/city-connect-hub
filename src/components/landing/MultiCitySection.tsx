import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Globe } from 'lucide-react';

const MultiCitySection = () => {
  const { t } = useLanguage();

  const features = [
    'multiCity.feature1',
    'multiCity.feature2',
    'multiCity.feature3',
    'multiCity.feature4',
  ];

  return (
    <section id="cities" className="py-16 md:py-24 bg-background-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Multi-city Platform</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('multiCity.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('multiCity.subtitle')}
              </p>

              <ul className="space-y-4">
                {features.map((featureKey) => (
                  <li key={featureKey} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative p-8 rounded-3xl bg-card border border-border shadow-card">
                {/* City grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-xl flex items-center justify-center ${
                        i === 4
                          ? 'bg-primary text-primary-foreground'
                          : i < 5
                          ? 'bg-primary/20'
                          : 'bg-muted border-2 border-dashed border-border'
                      }`}
                    >
                      {i === 4 && (
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                            <Globe className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium">Hub</span>
                        </div>
                      )}
                      {i < 4 && (
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      )}
                      {i > 4 && i < 9 && (
                        <span className="text-xs text-muted-foreground">+</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connection lines (visual decorative) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 border-2 border-dashed border-primary/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiCitySection;
