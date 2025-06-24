import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import neuroStock from '../assets/human-brain-scan-in-a-neurology-clinic.webp';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "95%", label: "Success Rate", icon: Target },
    { number: "24/7", label: "Support Available", icon: Heart }
  ];

  return (
    <section id="about" className="py-20 bg-[#F4EEDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('about.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={neuroStock}
                alt={t('about.imgAlt')}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F5C4B]/60 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#47624F] border border-[#F4EEDF]/20 p-6 rounded-xl shadow-lg max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4EEDF] mb-1">100%</div>
                <div className="text-sm text-[#F4EEDF]/80">{t('about.satisfactionRate')}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F4A259] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#F4EEDF]">
              <h3 className="text-2xl font-bold text-[#47624F] mb-4">{t('about.ourApproach')}</h3>
              <p className="text-[#3F5C4B] leading-relaxed">
                {t('about.ourApproachDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F4EEDF]">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#47624F]" />
                </div>
                <h4 className="text-lg font-semibold text-[#47624F] mb-2">{t('about.personalizedCare')}</h4>
                <p className="text-[#3F5C4B]">
                  {t('about.personalizedCareDesc')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#F4EEDF]">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#47624F]" />
                </div>
                <h4 className="text-lg font-semibold text-[#47624F] mb-2">{t('about.expertTeam')}</h4>
                <p className="text-[#3F5C4B]">
                  {t('about.expertTeamDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-[#3F5C4B] rounded-2xl p-8 md:p-12 text-[#F4EEDF]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{t('about.ourMission')}</h3>
              <p className="text-lg leading-relaxed">
                {t('about.ourMissionDesc')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-[#F4EEDF]/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">{t('about.personalizedCare')}</div>
              </div>
              <div className="bg-[#F4EEDF]/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">{t('about.emergencySupport')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;