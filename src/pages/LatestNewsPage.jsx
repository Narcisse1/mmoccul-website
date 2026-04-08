import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { Portfolio } from "../sections/Portfolio";

export const LatestNewsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};
