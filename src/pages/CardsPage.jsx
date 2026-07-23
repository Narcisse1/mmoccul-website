import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cardImage from '../assets/assets3/together.png'
import { useLanguage } from '../context/LanguageContext'
import { Header } from '../sections/Header'
import { Footer } from '../sections/Footer'

const CardsPage = () => {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <header className="bg-[#f8fafc] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            {t('cardsTitle')}
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            {t('cardsSubtitle')}
          </p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Card Image */}
          <div className="mb-16">
            <img 
              src={cardImage} 
              alt="MMOCCUL Banking Cards" 
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Card Types */}
          <section className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1b1b1b] mb-8">
              {t('ourCardProducts')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Debit Card */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#eee]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-1.1-.45-2.07-1.236-2.962"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#1b1b1b]">{t('debitCard')}</h3>
                      <p className="text-[#666] mt-1">{t('debitCardDesc')}</p>
                    </div>
                  </div>
                  <p className="text-[#555] leading-relaxed mb-4">
                    {t('debitCardText')}
                  </p>
                  <div className="space-y-2 text-[#444] text-sm">
                    <p><span className="font-medium">•</span> {t('noAnnualFee')}</p>
                    <p><span className="font-medium">•</span> {t('contactlessTech')}</p>
                    <p><span className="font-medium">•</span> {t('worldwideAcceptance')}</p>
                    <p><span className="font-medium">•</span> {t('fraudProtection')}</p>
                    <p><span className="font-medium">•</span> {t('onlineBanking')}</p>
                  </div>
                  <RouterLink to="/create-account" className="mt-6 inline-block bg-[#2436ff] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1928d9] transition-colors">
                    {t('getStarted')}
                  </RouterLink>
                </div>
              </div>
              
              {/* Credit Card */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#eee]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#2436ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#2436ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#1b1b1b]">{t('creditCard')}</h3>
                      <p className="text-[#666] mt-1">{t('creditCardDesc')}</p>
                    </div>
                  </div>
                  <p className="text-[#555] leading-relaxed mb-4">
                    {t('creditCardText')}
                  </p>
                  <div className="space-y-2 text-[#444] text-sm">
                    <p><span className="font-medium">•</span> {t('rewardsProgram')}</p>
                    <p><span className="font-medium">•</span> {t('travelInsurance')}</p>
                    <p><span className="font-medium">•</span> {t('purchaseProtection')}</p>
                    <p><span className="font-medium">•</span> {t('emergencyAssistance')}</p>
                    <p><span className="font-medium">•</span> {t('flexibleCredit')}</p>
                  </div>
                  <RouterLink to="/create-account" className="mt-6 inline-block bg-[#2436ff] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1928d9] transition-colors">
                    {t('applyNow')}
                  </RouterLink>
                </div>
              </div>
              
              {/* Prepaid Card */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#eee]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7 7 7-7 7zm12 7v-4c0-1.1-.45-2.07-1.236-2.962"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#1b1b1b]">{t('prepaidCard')}</h3>
                      <p className="text-[#666] mt-1">{t('prepaidCardDesc')}</p>
                    </div>
                  </div>
                  <p className="text-[#555] leading-relaxed mb-4">
                    {t('prepaidCardText')}
                  </p>
                  <div className="space-y-2 text-[#444] text-sm">
                    <p><span className="font-medium">•</span> {t('noCreditCheck')}</p>
                    <p><span className="font-medium">•</span> {t('reloadable')}</p>
                    <p><span className="font-medium">•</span> {t('idealTeens')}</p>
                    <p><span className="font-medium">•</span> {t('greatForGifting')}</p>
                    <p><span className="font-medium">•</span> {t('onlineInStore')}</p>
                  </div>
                  <RouterLink to="/create-account" className="mt-6 inline-block bg-[#2436ff] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1928d9] transition-colors">
                    {t('getStarted')}
                  </RouterLink>
                </div>
              </div>
              
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1b1b1b] mb-8">
              {t('whyChooseOurCards')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2436ff]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#2436ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.029 9-11.622 0-1.552-.245-3.037-.724-4.243z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b]">{t('advancedSecurity')}</h3>
                    <p className="text-[#555]">
                      {t('advancedSecurityText')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2436ff]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#2436ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h3m8 0v3m-4 0h3m8 0H8m0 0l-4 4m4 4l4-4m0 5l4-4-4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b]">{t('globalAcceptanceTitle')}</h3>
                    <p className="text-[#555]">
                      {t('globalAcceptanceText')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2436ff]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#2436ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b]">{t('contactlessPayments')}</h3>
                    <p className="text-[#555]">
                      {t('contactlessPaymentsText')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2436ff]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#2436ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 6V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b1b1b]">{t('customerSupport')}</h3>
                    <p className="text-[#555]">
                      {t('customerSupportText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="bg-[#f8fafc] rounded-2xl p-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1b1b1b] mb-6 text-center">
              {t('readyToGetStarted')}
            </h2>
            <p className="text-lg text-[#666] mb-8 text-center max-w-3xl mx-auto">
              {t('readyToGetStartedText')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <RouterLink to="/branches" className="bg-[#2436ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1928d9] transition-colors">
                {t('findABranch')}
              </RouterLink>
              <RouterLink to="/create-account" className="border border-[#2436ff] text-[#2436ff] px-6 py-3 rounded-full font-medium hover:bg-[#2436ff]/10 transition-colors">
                {t('applyOnline')}
              </RouterLink>
            </div>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default CardsPage