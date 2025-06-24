import React from 'react';
import { Award, Star, Calendar } from 'lucide-react';
import ankushImg from "../assets/team/ankush.jpg";
import poojaImg from "../assets/team/pooja.jpg";
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = t('team.members', { returnObjects: true }) as any[];
  const images = [ankushImg, poojaImg];

  return (
    <section id="team" className="py-20 bg-[#F4EEDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('team.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#F4EEDF] hover:border-[#F4A259] transition-all duration-300">
              <div className="relative">
                <img
                  src={images[index]}
                  alt={member.name}
                  className="w-full h-[34rem] object-cover object-[center_20%] bg-[#F4EEDF]"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#47624F] mb-1">{member.name}</h3>
                <p className="text-[#F4A259] font-medium">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;