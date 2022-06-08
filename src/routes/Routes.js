import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import EditProfile from '../pages/EditProfile';
import Market from '../pages/Market';
import NftDetails from '../pages/NftDetails';
import SellerProfile from '../pages/SellerProfile';
import Wallet from '../pages/Wallet';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit-Profile" element={<EditProfile />} />
      <Route path="/market" element={<Market />} />
      <Route path="/nftDetils" element={<NftDetails />} />
      <Route path="/sellerProfile" element={<SellerProfile />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetails />} />
    </Routes>
  );
};

export default Routers;
