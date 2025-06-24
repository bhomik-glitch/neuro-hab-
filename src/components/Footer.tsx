import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n, t } = useTranslation();

  const services = [
    "Neurological Rehabilitation",
    "Cardiovascular Physiotherapy", 
    "Electrotherapy Treatment",
    "Group Therapy Sessions",
    "Home Visit Services"
  ];

  const quickLinks = [
    "About Us",
    "Our Team", 
    "Services",
    "Products",
    "Patient Portal",
    "Insurance Info"
  ];

  return (
    <footer className="w-full bg-[#3F5C4B] text-[#F4EEDF] text-center py-3 text-sm border-t border-[#E0E0E0] fixed bottom-0 left-0 z-50">
      {t('footer.copyright')}
    </footer>
  );
};

export default Footer;