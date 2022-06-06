import React from "react";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import HeroSection from '../components/ui/HeroSection';


const Home = () =>{
    return(
        <>
            <HeroSection />
            <LiveAuction />
        </>
    )  
};

export default Home;