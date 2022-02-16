import React from 'react'
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection/ContactSection';
import FooterSection from '../Components/FooterSection';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import NewsLetter from '../Components/NewsLetter';
import ServicesSection from '../Components/Services/ServicesSection'
import TeamSection from '../Components/team/TeamSection';


function LandingPage() {
  return (
    <>
      <Header/>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsLetter />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default LandingPage;