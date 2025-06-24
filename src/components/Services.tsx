import React from 'react';
import { Brain, Heart, Zap, Target, Users, Clock, Bone, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.neurological.title'),
      description: t('services.neurological.desc'),
      features: t('services.neurological.list', { returnObjects: true }) as string[],
      color: "blue"
    },
    {
      icon: Bone,
      title: t('services.musculoskeletal.title'),
      description: t('services.musculoskeletal.desc'),
      features: t('services.musculoskeletal.list', { returnObjects: true }) as string[],
      color: "green"
    },
    {
      icon: Zap,
      title: t('services.electrotherapy.title'),
      description: t('services.electrotherapy.desc'),
      features: t('services.electrotherapy.list', { returnObjects: true }) as string[],
      color: "yellow"
    },
    {
      icon: Heart,
      title: t('services.cardiovascular.title'),
      description: t('services.cardiovascular.desc'),
      features: t('services.cardiovascular.list', { returnObjects: true }) as string[],
      color: "red"
    },
    {
      icon: Home,
      title: t('services.homevisit.title'),
      description: t('services.homevisit.desc'),
      features: t('services.homevisit.list', { returnObjects: true }) as string[],
      color: "purple"
    },
    {
      icon: Users,
      title: t('services.grouptherapy.title'),
      description: t('services.grouptherapy.desc'),
      features: t('services.grouptherapy.list', { returnObjects: true }) as string[],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
      red: "bg-red-600/20 text-red-400 group-hover:bg-red-600 group-hover:text-white",
      yellow: "bg-yellow-600/20 text-yellow-400 group-hover:bg-yellow-600 group-hover:text-white",
      green: "bg-green-600/20 text-green-400 group-hover:bg-green-600 group-hover:text-white",
      purple: "bg-purple-600/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
      indigo: "bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-[#F4EEDF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('services.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="space-y-8">
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#F4EEDF] hover:border-[#F4A259]"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 bg-[#F7F6F2] text-[#47624F] group-hover:bg-[#F4A259] group-hover:text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#47624F] mb-3 group-hover:text-[#F4A259] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#3F5C4B] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#3F5C4B]">
                      <div className="w-1.5 h-1.5 bg-[#F4A259] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 1 wide card */}
          <div className="grid grid-cols-1 gap-8">
            {services.slice(2, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#F4EEDF] hover:border-[#F4A259]"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 bg-[#F7F6F2] text-[#47624F] group-hover:bg-[#F4A259] group-hover:text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#47624F] mb-3 group-hover:text-[#F4A259] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#3F5C4B] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#3F5C4B]">
                      <div className="w-1.5 h-1.5 bg-[#F4A259] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Third row - 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(3, 5).map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#F4EEDF] hover:border-[#F4A259]"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 bg-[#F7F6F2] text-[#47624F] group-hover:bg-[#F4A259] group-hover:text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#47624F] mb-3 group-hover:text-[#F4A259] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#3F5C4B] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#3F5C4B]">
                      <div className="w-1.5 h-1.5 bg-[#F4A259] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fourth row - 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(5).map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#F4EEDF] hover:border-[#F4A259]"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 bg-[#F7F6F2] text-[#47624F] group-hover:bg-[#F4A259] group-hover:text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#47624F] mb-3 group-hover:text-[#F4A259] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#3F5C4B] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#3F5C4B]">
                      <div className="w-1.5 h-1.5 bg-[#F4A259] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;