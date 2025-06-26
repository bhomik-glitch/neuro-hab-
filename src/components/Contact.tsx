import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EEDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47624F] mb-4">{t('contact.heading')}</h2>
          <p className="text-xl text-[#3F5C4B] max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#F4EEDF]">
            <h3 className="text-2xl font-semibold text-[#47624F] mb-6">{t('contact.infoHeading')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-[#47624F]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#47624F] mb-1">{t('contact.location')}</h4>
                  <p className="text-[#3F5C4B]">A -942 basement GD colony Mayur Vihar Phase 3 Delhi - 110096 near hanuman mandir</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-[#47624F]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#47624F] mb-1">{t('contact.phone')}</h4>
                  <p className="text-[#3F5C4B]">8744910087 , 8700509317</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-[#47624F]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#47624F] mb-1">{t('contact.email')}</h4>
                  <p className="text-[#3F5C4B]">drdeepa88.ds@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#F7F6F2] rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-[#47624F]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#47624F] mb-1">{t('contact.hours')}</h4>
                  <p className="text-[#3F5C4B]">Monday - Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-[#3F5C4B]">Monday - Friday: 5:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#F4EEDF]">
            <h3 className="text-2xl font-semibold text-[#47624F] mb-6">{t('contact.formHeading')}</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#47624F] mb-2">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#F4EEDF] focus:border-[#F4A259] focus:ring-2 focus:ring-[#F4A259]/20 outline-none transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#47624F] mb-2">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#F4EEDF] focus:border-[#F4A259] focus:ring-2 focus:ring-[#F4A259]/20 outline-none transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#47624F] mb-2">
                  {t('contact.subjectLabel')}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#F4EEDF] focus:border-[#F4A259] focus:ring-2 focus:ring-[#F4A259]/20 outline-none transition-colors"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#47624F] mb-2">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#F4EEDF] focus:border-[#F4A259] focus:ring-2 focus:ring-[#F4A259]/20 outline-none transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              
              <a
                href="https://wa.link/skflls"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F4A259] text-white py-3 rounded-lg hover:bg-[#F4A259]/90 transition-colors font-medium flex items-center justify-center"
                style={{ textDecoration: 'none' }}
              >
                {t('contact.button')}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;