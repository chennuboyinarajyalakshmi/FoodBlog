import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Footer from './Footer';
import Navbar from './Navbar';

export default function MainNavigation() {
  return (
    <div>
      <Navbar />
      
      {/* Outlet renders nested route components */}
      <Outlet /> 
      
      <Footer />
    </div>
  );
}
