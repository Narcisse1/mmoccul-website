import React from 'react';
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { EasyProcess } from "../sections/EasyProcess";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <EasyProcess />
      <Footer />
    </>
  );
};
