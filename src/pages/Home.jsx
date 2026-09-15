import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Interactive3DTV from '../components/Interactive3DTV';
import ChannelGrid from '../components/ChannelGrid';
import DeviceCompatibility from '../components/DeviceCompatibility';
import LimitedOfferBanner from '../components/CountdownTimer';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import Blog from '../components/Blog';
import About from '../components/About';
import CEOSection from '../components/CEOSection';
import FAQ from '../components/FAQ';
import LightweightTV from '../components/LightweightTV';

const Home = () => {
  return (
    <>
      <Hero />
      <SocialProof />

      {/* Pricing Section - Moved Up for Better Conversion */}
      <Pricing />
      <TrustBadges />

      {/* TV Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#141311] via-[#201C18] to-[#141311] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Découvrez <span className="text-[#7B9FD9]">l'IPTV Premium</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Service IPTV 4K cristallin sur tous vos appareils
            </p>
          </div>

          <LightweightTV />
        </div>
      </section>

      <ChannelGrid />
      <DeviceCompatibility />
      <Testimonials />
      <ComparisonTable />
      <LimitedOfferBanner />
      <Interactive3DTV />
      <Blog />
      <CEOSection />
      <About />
      <FAQ />
    </>
  );
};

export default Home;
