import React from 'react';
import { About } from "../sections/About";
import { Clients } from "../sections/Clients";
import { Hero } from "../sections/Hero";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Footer />
    </>
  );
};
