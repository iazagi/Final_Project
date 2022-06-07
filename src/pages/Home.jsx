import React from "react";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import HeroSection from '../components/ui/HeroSection';
import SellerSection from "../components/Header/Seller-section/SellerSection";

const Home = () =>{
    return(
        <>
            <HeroSection />
            <LiveAuction />
            <SellerSection />
        </>
    )  
};

export default Home;