import React from 'react';
import { useTranslation } from 'react-i18next';

const CarouselSection = () => {
  const { t } = useTranslation();
  const cards = t('specializedTherapy.cards', { returnObjects: true }) as any[];

  return (
    <section className="py-20 bg-[#F7F6F2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('specializedTherapy.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('specializedTherapy.description')}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex-none w-80 h-auto rounded-xl shadow-lg p-6 flex flex-col justify-between text-[#47624F] border border-[#F4EEDF] hover:shadow-xl transition-all duration-300 ${
                  card.title === t('specializedTherapy.cards.2.title') || card.title === t('specializedTherapy.cards.3.title') ? 'bg-yellow-100' : 'bg-white'
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-lg font-medium text-[#F4A259] mb-3">{card.subtitle}</p>
                  <p className="text-sm text-[#3F5C4B] mb-4">{card.description}</p>
                  <p className="text-sm font-semibold mb-2">{card.focusLabel}</p>
                  <ul className="list-disc list-inside text-sm text-[#3F5C4B] mb-4">
                    {card.focusAreas.map((area: string, areaIndex: number) => (
                      <li key={areaIndex}>{area}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-semibold text-[#47624F] italic">{card.callToAction}</p>
              </div>
            ))}
            {/* Duplicate cards for seamless looping */}
            {cards.map((card, index) => (
              <div
                key={`duplicate-${index}`}
                className={`flex-none w-80 h-auto rounded-xl shadow-lg p-6 flex flex-col justify-between text-[#47624F] border border-[#F4EEDF] hover:shadow-xl transition-all duration-300 ${
                  card.title === t('specializedTherapy.cards.2.title') || card.title === t('specializedTherapy.cards.3.title') ? 'bg-yellow-100' : 'bg-white'
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-lg font-medium text-[#F4A259] mb-3">{card.subtitle}</p>
                  <p className="text-sm text-[#3F5C4B] mb-4">{card.description}</p>
                  <p className="text-sm font-semibold mb-2">{card.focusLabel}</p>
                  <ul className="list-disc list-inside text-sm text-[#3F5C4B] mb-4">
                    {card.focusAreas.map((area: string, areaIndex: number) => (
                      <li key={areaIndex}>{area}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-semibold text-[#47624F] italic">{card.callToAction}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection; 