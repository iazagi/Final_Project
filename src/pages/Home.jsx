import React from 'react';
import LiveAuction from '../components/ui/Live-auction/LiveAuction';
import HeroSection from '../components/ui/HeroSection';
import SellerSection from '../components/ui/Seller-section/SellerSection';
import TrendingSection from '../components/ui/Trending-Section/TrendingSection';
import StepSection from '../components/ui/Step-section/Stepsection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
      <StepSection />
    </>
  );
};

export default Home;
