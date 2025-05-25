
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/Features';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import Testimonials from '@/components/home/Testimonials';
import Gallery from '@/components/home/Gallery';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <ProgramsPreview />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default HomePage;
