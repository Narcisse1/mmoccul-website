import React, { useEffect } from 'react'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'
import { Portfolio } from "../sections/Portfolio"

export const LatestNewsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  )
}
