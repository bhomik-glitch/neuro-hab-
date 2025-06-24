import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CarouselSection from './components/CarouselSection';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };
  return (
    <div className="min-h-screen bg-[#3F5C4B]">
      <Header />
      <Hero />
      <About />
      <Services />
      <CarouselSection />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <button
        onClick={toggleLanguage}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-[#F4A259] text-white font-bold shadow-lg hover:bg-[#d4883a] transition-colors"
        aria-label="Toggle language"
      >
        {i18n.language === 'en' ? 'हिन्दी' : 'English'}
      </button>
    </div>
  );
}

export default App;