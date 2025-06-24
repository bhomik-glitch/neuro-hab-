import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import img2 from '../assets/img 2 .png';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="bg-[#3F5C4B] pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#3F5C4B] mb-6 text-center">
              <span className="text-white text-4xl md:text-5xl">{t('hero.title1')}</span><br />
              <span className="text-[#F4A259]">{t('hero.title2')}</span> <span className="text-[#F4A259]">{t('hero.title3')}</span><br />
              <span className="text-[#F4A259]">{t('hero.title4')}</span>
            </h1>
            <p className="text-xl text-[#F4EEDF] mt-6 leading-relaxed text-center">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-[#F4A259] text-white px-8 py-3 rounded-lg hover:bg-[#F4A259]/90 transition-colors font-medium text-lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('hero.cta1')}
              </button>
              <button
                className="border-2 border-[#F4EEDF] text-[#F4EEDF] px-8 py-3 rounded-lg hover:bg-[#F4EEDF] hover:text-[#3F5C4B] transition-colors font-medium text-lg"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('hero.cta2')}
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-3">
                  <Award className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-[#F4EEDF]">15+</div>
                <div className="text-[#F4EEDF]/80">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-[#F4EEDF]">5000+</div>
                <div className="text-[#F4EEDF]/80">{t('hero.patientsTreated')}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-lg mx-auto mb-3">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-[#F4EEDF]">95%</div>
                <div className="text-[#F4EEDF]/80">{t('hero.successRate')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ml-[-24px] w-[48rem]">
              <img
                src={img2}
                alt={t('hero.imgAlt')}
                className="w-[48rem] h-[32rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#47624F] border border-[#F4EEDF]/20 p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F4EEDF]/10 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-[#F4EEDF]" />
                </div>
                <div>
                  <div className="font-semibold text-[#F4EEDF]">{t('hero.certifiedSpecialists')}</div>
                  <div className="text-sm text-[#F4EEDF]/80">{t('hero.licensedExperienced')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;