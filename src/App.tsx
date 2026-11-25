import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SERVICES_LIST } from './data/alphaHomesData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES_LIST[0].title
  );
  const [selectedNote, setSelectedNote] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    scrollToSection('contact');
  };

  const handleExplorePortfolio = () => {
    scrollToSection('portfolio');
  };

  const handleEnquireService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSelectedNote(`Enquiring about ${serviceTitle} for my property.`);
    scrollToSection('contact');
  };

  const handleEnquireProject = (projectTitle: string, scope: string) => {
    const matchingService = SERVICES_LIST.find((s) =>
      scope.toLowerCase().includes(s.title.toLowerCase().split(' ')[0])
    );
    if (matchingService) {
      setSelectedService(matchingService.title);
    }
    setSelectedNote(
      `Interested in a similar scope to "${projectTitle}" (${scope}).`
    );
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#141413]">
      <Header onBookConsultation={handleBookConsultation} />
      <main className="flex-1">
        <Hero
          onBookConsultation={handleBookConsultation}
          onExplorePortfolio={handleExplorePortfolio}
        />
        <AboutSection />
        <ServicesSection onEnquireService={handleEnquireService} />
        <PortfolioSection onEnquireProject={handleEnquireProject} />
        <WhyChooseUsSection />
        <ContactSection
          preselectedService={selectedService}
          preselectedNote={selectedNote}
        />
      </main>
      <Footer />
    </div>
  );
}
