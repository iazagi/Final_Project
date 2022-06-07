import React from 'react';
import LiveAuction from '../components/ui/Live-auction/LiveAuction';
import HeroSection from '../components/ui/HeroSection';
import SellerSection from '../components/Header/Seller-section/SellerSection';
import TrendingSection from '../components/ui/Trending-Section/TrendingSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
    </>
  );
};

export default Home;
