import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { CTA } from "../sections/CTA";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};
