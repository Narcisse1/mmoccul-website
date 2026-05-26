import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    createAccount: 'Create Account',
    cards: 'Cards',
    findBranch: 'Find A Branch',
    helpSupport: 'Help and Support',
    careers: 'Careers',
    mobileBanking: 'Mobile Banking',
    search: 'Search',
    menu: 'Menu',
    
    // Cards Page
    cardsTitle: 'Secure & Convenient Banking Cards',
    cardsSubtitle: 'Choose from our range of debit, credit, and prepaid cards designed to fit your lifestyle and financial needs.',
    ourCardProducts: 'Our Card Products',
    debitCard: 'Debit Card',
    debitCardDesc: 'Access your funds instantly',
    debitCardText: 'Enjoy secure, contactless payments with direct access to your checking account. Perfect for everyday purchases, ATM withdrawals, and online shopping.',
    creditCard: 'Credit Card',
    creditCardDesc: 'Buy now, pay later flexibility',
    creditCardText: 'Enjoy flexible spending power with competitive interest rates and rewards programs. Build your credit while making purchases you need.',
    prepaidCard: 'Prepaid Card',
    prepaidCardDesc: 'Spend within your means',
    prepaidCardText: 'Perfect for budgeting, gifting, or teaching financial responsibility. Load funds in advance and spend only what you have available.',
    noAnnualFee: 'No annual fee',
    contactlessTech: 'Contactless technology',
    worldwideAcceptance: 'Worldwide acceptance',
    fraudProtection: 'Fraud protection',
    onlineBanking: 'Online banking integration',
    rewardsProgram: 'Rewards program',
    travelInsurance: 'Travel insurance',
    purchaseProtection: 'Purchase protection',
    emergencyAssistance: 'Emergency assistance',
    flexibleCredit: 'Flexible credit limits',
    noCreditCheck: 'No credit check required',
    reloadable: 'Reloadable',
    idealTeens: 'Ideal for teens & students',
    greatForGifting: 'Great for gifting',
    onlineInStore: 'Online & in-store use',
    getStarted: 'Get Started',
    applyNow: 'Apply Now',
    whyChooseOurCards: 'Why Choose Our Cards',
    advancedSecurity: 'Advanced Security',
    advancedSecurityText: 'EMV chip technology, PIN protection, and real-time fraud monitoring keep your transactions safe and secure.',
    globalAcceptanceTitle: 'Global Acceptance',
    globalAcceptanceText: 'Use your card at millions of locations worldwide, both in-person and online, wherever Visa/Mastercard is accepted.',
    contactlessPayments: 'Contactless Payments',
    contactlessPaymentsText: 'Tap to pay functionality for fast, secure transactions at checkout without inserting your card or entering a PIN.',
    customerSupport: '24/7 Customer Support',
    customerSupportText: 'Get help whenever you need it with our dedicated support team available around the clock for any card-related inquiries.',
    readyToGetStarted: 'Ready to Get Started?',
    readyToGetStartedText: 'Applying for a card is quick and easy. Simply visit any of our branches or apply online through our secure portal.',
    findABranch: 'Find a Branch',
    applyOnline: 'Apply Online',
    
    // Footer
    stayConnected: 'Stay Connected With MMOCCUL',
    secureLegacy: 'Secure Your Legacy, Elevate Your Future',
    newsletterText: 'Receive financial insights, banking updates, and important announcements directly in your inbox.',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    newsUpdates: 'News & Updates',
    bankingServices: 'Banking Services',
    personalLoans: 'Personal Loans',
    businessFinancing: 'Business Financing',
    savingsAccounts: 'Savings Accounts',
    mobileBankingFooter: 'Mobile Banking',
    moneyTransfers: 'Money Transfers',
    salaryProcessing: 'Salary Processing',
    contactInfo: 'Contact Information',
    callUs: 'Call Us',
    whatsApp: 'WhatsApp',
    email: 'Email',
    location: 'Location',
    yaounde: 'Yaoundé, Cameroon',
    newsletter: 'Newsletter',
    enterEmail: 'Enter your email address',
    subscribe: 'Subscribe',
    termsOfUse: 'Terms of Use',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    rightsReserved: '© 2026 MMOCCUL. All rights reserved.',
    
    // About Page
    aboutMmoccul: 'ABOUT MMOCCUL',
    yourFinancialPartner: 'Your Financial Partner for Growth and Success',
    aboutText1: 'MMOCCUL (Mmockmbie Credit Union Cooperative Ltd) is a fully accredited Category 1 Microfinance Institution incorporated in 2016 and recognized for delivering trusted, member-focused financial services across Cameroon.',
    aboutText2: 'Built on integrity and innovation, MMOCCUL has become one of the fastest-growing and most digital-friendly financial cooperatives, empowering thousands of individuals, families, and businesses with secure banking solutions and sustainable financial opportunities.',
    trustedFinancialInstitution: 'Trusted Financial Institution',
    digitalBanking: 'Digital Banking',
    digitalBankingText: 'Experience modern financial convenience with our secure and innovative mobile and online banking platforms designed to simplify everyday banking.',
    savingsLoans: 'Savings & Loans',
    savingsLoansText: 'Grow your finances confidently through competitive savings plans, investment opportunities, and flexible loan packages tailored to your goals.',
    ourBankingProcess: 'Our Banking Process',
    processText: 'Delivering modern, secure and people-focused financial experiences tailored to your success.',
    consultation: 'Consultation',
    consultationDesc: 'Understanding your financial goals and helping you choose the right banking solutions.',
    coordination: 'Coordination',
    coordinationDesc: 'Providing seamless support, account management and digital financial assistance.',
    execution: 'Execution',
    executionDesc: 'Delivering secure transactions, financial growth and reliable banking experiences.',
    joinTrustedFinancial: 'Join Cameroon\'s Trusted Financial Community',
    joinTrustedText: 'Experience secure, modern and people-centered banking designed to help you grow financially with confidence.',
    createAcc: 'Create Account',
    
    // Services Page
    ourServices: 'Our Services',
    comprehensiveFinancial: 'Comprehensive financial solutions tailored to your needs',
    personalBanking: 'Personal Banking',
    personalBankingText: 'Savings accounts, loans, and investment options for individuals',
    businessBanking: 'Business Banking',
    businessBankingText: 'Financial solutions to help your business grow',
    digitalServices: 'Digital Services',
    digitalServicesText: 'Modern banking at your fingertips',
    
    // Contact Page
    contactUs: 'Contact Us',
    getInTouch: 'Get in touch with our team',
    address: 'Address',
    phone: 'Phone',
    emailUs: 'Email Us',
    workingHours: 'Working Hours',
    mondayFriday: 'Monday - Friday: 8:00 AM - 5:00 PM',
    saturday: 'Saturday: 9:00 AM - 1:00 PM',
    sunday: 'Sunday: Closed',
    
    // Homepage
    heroTitle: 'Your Trusted Financial Partner',
    heroSubtitle: 'Secure, simple, and designed for growth.',
    exploreServices: 'Explore Our Services',
    learnMore: 'Learn More',

    // Hero Section
    welcomeTag: 'WELCOME TO MMOCCUL',
    
    // Hero Slide 1
    heroSlide1Title: 'Save Today,',
    heroSlide1Highlight: 'Secure Tomorrow',
    heroSlide1Desc: 'Build a stronger future with flexible savings plans, trusted financial guidance, and secure banking solutions tailored for your goals.',
    heroSlide1Btn: 'Learn More',
    
    // Hero Slide 2
    heroSlide2Title: 'Real People,',
    heroSlide2Highlight: 'Real Support',
    heroSlide2Desc: 'Our dedicated customer care team is always ready to help you with fast, friendly, and professional banking assistance.',
    heroSlide2Btn: 'Learn More',
    
    // Hero Slide 3
    heroSlide3Title: 'Bank on the Go,',
    heroSlide3Highlight: 'Anytime, Anywhere',
    heroSlide3Desc: 'Enjoy secure mobile banking with instant transfers, account access, bill payments, and financial control right from your phone.',
    heroSlide3Btn: 'Learn More',
    
    // Hero Slide 4
    heroSlide4Title: 'Stronger Together,',
    heroSlide4Highlight: 'Better Community',
    heroSlide4Desc: 'We believe in empowering communities through financial inclusion, shared growth, and opportunities that improve lives.',
    heroSlide4Btn: 'Learn More',
    
    // Hero Services
    createAccountHero: 'Create Account',
    customerService: 'Customer Service',
    savingsAccount: 'Savings Account',
    onlinePayment: 'Online Payment',

    // Contact Section
    contactMmoccul: 'Contact MMOCCUL',
    alwaysHelp: "We're Always Here To Help",
    contactText: 'Get instant assistance for all your banking needs. Our dedicated support team is ready to help you with account inquiries, transactions, and personalized financial guidance.',
    callUs: 'Call Us',
    emailAddress: 'Email Address',
    
    // Search Page
    searchOurSite: 'Search Our Site',
    forInformation: 'for Information',
    searchPlaceholder: 'Search for branches, services, news, and more. Quick access to everything MMOCCUL offers.',
    enterSearchTerm: 'Enter keywords...',
    popularSearches: 'Popular Categories',
    searchCategoriesText: 'Quick access to key information across our website.',
    cantFindAnswer: "Can't Find What You're Looking For?",
    cantFindAnswerText: 'Our support team is ready to help you with any questions about our services.',
    contactSupport: 'Contact Support',
    
    // Latest News
    latestNews: 'Latest Updates',
    withMmoccul: 'MMOCCUL',
    stayUpdated: 'Stay Updated with',
    latestUpdatesText: 'Discover the latest announcements, achievements, and updates from your trusted financial cooperative.',
    
    // CTA Section
    getInTouchCTA: 'Get In Touch',
    transformFuture: 'Ready to Transform Your Financial Future?',
    ctaText: 'Join thousands of satisfied members who have taken control of their finances with MMOCCUL. Whether you need a loan, want to save, or have questions — we\'re here to help!',
    createAccountCTA: 'Create Account',
    contactUsCTA: 'Contact Us',
    reachUsWhatsApp: 'Reach Us on WhatsApp',
    support247: '24/7 Support',
    support247Desc: 'Always here to help',
    quickResponse: 'Quick Response',
    quickResponseDesc: 'We reply fast',

    // Offer Section
    offerTitle: 'Our Services',
    offerSubtitle: 'Comprehensive Financial Solutions for Your Success',
    offerDesc: 'From personal loans to business financing, mobile banking to secure savings accounts — we provide sophisticated financial solutions designed to help our members achieve their goals. Experience the difference of professional cooperative banking that prioritizes your financial well-being.',
    exploreOurServices: 'Explore Our Services',

    // About Section
    ourIdentity: 'Our Identity',
    bankingBuiltOnTrust: 'Banking Built on Trust, Driven by Community',
    whyChooseMmoccul: 'Why Choose MMOCCUL?',
    aboutWhyText: 'We are more than just a financial institution — we are a community dedicated to helping our members achieve financial independence. With transparent processes, competitive rates, and personalized service, we make banking simple and accessible for everyone.',
    lowInterestLoans: 'Low-Interest Loans',
    lowInterestLoansDesc: 'Access affordable financing options designed to help your business grow and thrive.',
    secureBanking: 'Secure Banking',
    secureBankingDesc: 'Your money is protected with state-of-the-art security measures.',
    communityFirst: 'Community First',
    communityFirstDesc: 'Join thousands of members who trust us with their financial goals.',
    activeMembers: 'Active Members',
    customerSatisfaction: 'Customer Satisfaction',
    trustedPartners: 'Trusted Partners',
    memberSupport: 'Member Support',
    partners: 'Partners',
    satisfaction: 'Satisfaction',
    members: 'Members',

    // EasyProcess Section
    weMakeLifeEasy: 'We make life easy',
    openAccountNow: 'Open your account now',
    presentDocuments: 'Present your documents',
    fillOpeningForm: 'Fill the opening form',
    verificationDocuments: 'Verification of your documents',
    creationBankAccount: 'Creation of your bank account',
    openAnAccount: 'Open an account',

    // Portfolio/News Section
    readMore: 'Read more',

    // Clients Section
    trustedPartnersTitle: 'Trusted Partners',
    strategicAlliances: 'Strategic Alliances with Global Industry Leaders',
    clientsDesc: 'We proudly partner with renowned organizations worldwide to deliver exceptional financial services with excellence, integrity, and unwavering commitment to our members.',
    partnerOrganizations: 'Partner Organizations',
    satisfiedMembers: 'Satisfied Members',
    clientSatisfaction: 'Client Satisfaction',
    yearsOfExcellence: 'Years of Excellence',

    // Branches Section
    nationwidePresence: 'Nationwide Presence',
    professionalNetwork: 'Professional Network',
    branchesDesc: 'Strategically positioned across Cameroon\'s major cities, our branches deliver premium financial services with the highest standards of professionalism and customer care.',
    strategicLocations: 'Strategic Locations',
    premiumService: 'Premium service across Cameroon',
    headOffice: 'Head Office',
    branchLocations: 'Branch Locations',
    location: 'Location',
    phone: 'Phone',
    openingHours: 'Opening Hours',
    getDirections: 'Get Directions',
    needAssistance: 'Need Assistance?',
    assistanceDesc: 'Our dedicated team is ready to assist you with finding the most convenient branch or exploring alternative service options tailored to your needs.',
    contactOurTeam: 'Contact Our Team',
    exploreServices: 'Explore Services',
  },
  fr: {
    // Header
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    createAccount: 'Créer un compte',
    cards: 'Cartes',
    findBranch: 'Trouver une agence',
    helpSupport: 'Aide et support',
    careers: 'Carrières',
    mobileBanking: 'Banque mobile',
    search: 'Rechercher',
    menu: 'Menu',
    
    // Cards Page
    cardsTitle: 'Cartes bancaires sécurisées et pratiques',
    cardsSubtitle: 'Choisissez parmi notre gamme de cartes de débit, de crédit et prépayées conçues pour correspondre à votre mode de vie et à vos besoins financiers.',
    ourCardProducts: 'Nos produits de cartes',
    debitCard: 'Carte de débit',
    debitCardDesc: 'Accédez à vos fonds instantanément',
    debitCardText: 'Profitez de paiements sécurisés et sans contact avec un accès direct à votre compte chèque. Parfait pour les achats quotidiens, les retraits ATM et les achats en ligne.',
    creditCard: 'Carte de crédit',
    creditCardDesc: 'Flexibilité achetez maintenant, payez plus tard',
    creditCardText: 'Profitez d\'une puissance d\'achat flexible avec des taux d\'intérêt compétitifs et des programmes de récompenses. Construisez votre crédit tout en effectuant des achats nécessaires.',
    prepaidCard: 'Carte prépayée',
    prepaidCardDesc: 'Dépensez selon vos moyens',
    prepaidCardText: 'Parfait pour le budget, les cadeaux ou l\'enseignement de la responsabilité financière. Chargez des fonds à l\'avance et dépensez uniquement ce que vous avez disponible.',
    noAnnualFee: 'Aucun frais annuel',
    contactlessTech: 'Technologie sans contact',
    worldwideAcceptance: 'Acceptation mondiale',
    fraudProtection: 'Protection contre la fraude',
    onlineBanking: 'Intégration bancaire en ligne',
    rewardsProgram: 'Programme de récompenses',
    travelInsurance: 'Assurance voyage',
    purchaseProtection: 'Protection des achats',
    emergencyAssistance: 'Assistance d\'urgence',
    flexibleCredit: 'Limites de crédit flexibles',
    noCreditCheck: 'Aucun contrôle de crédit requis',
    reloadable: 'Rechargeable',
    idealTeens: 'Idéal pour les adolescents et étudiants',
    greatForGifting: 'Parfait pour les cadeaux',
    onlineInStore: 'Utilisation en ligne et en magasin',
    getStarted: 'Commencer',
    applyNow: 'Postuler maintenant',
    whyChooseOurCards: 'Pourquoi choisir nos cartes',
    advancedSecurity: 'Sécurité avancée',
    advancedSecurityText: 'Technologie à puce EMV, protection PIN et surveillance de fraude en temps réel pour sécuriser vos transactions.',
    globalAcceptanceTitle: 'Acceptation mondiale',
    globalAcceptanceText: 'Utilisez votre carte dans des millions de points de vente dans le monde, en personne et en ligne, où que Visa/Mastercard soient acceptés.',
    contactlessPayments: 'Paiements sans contact',
    contactlessPaymentsText: 'Fonctionnalité de paiement par tapotement pour des transactions rapides et sécurisées au point de vente sans insérer votre carte ou saisir un PIN.',
    customerSupport: 'Support client 24/7',
    customerSupportText: 'Obtenez de l\'aide quand vous en avez besoin avec notre équipe de support dédiée disponible 24h/24 et 7j/7 pour toutes les demandes liées aux cartes.',
    readyToGetStarted: 'Prêt à commencer?',
    readyToGetStartedText: 'Demander une carte est rapide et facile. Visitez simplement l\'une de nos agences ou postulez en ligne via notre portail sécurisé.',
    findABranch: 'Trouver une agence',
    applyOnline: 'Postuler en ligne',
    
    // Footer
    stayConnected: 'Restez connecté avec MMOCCUL',
    secureLegacy: 'Sécurisez votre héritage, élevez votre avenir',
    newsletterText: 'Recevez des informations financières, des mises à jour bancaires et des annonces importantes directement dans votre boîte de réception.',
    quickLinks: 'Liens rapides',
    aboutUs: 'À propos de nous',
    newsUpdates: 'Nouvelles et mises à jour',
    bankingServices: 'Services bancaires',
    personalLoans: 'Prêts personnels',
    businessFinancing: 'Financement des entreprises',
    savingsAccounts: 'Comptes d\'épargne',
    mobileBankingFooter: 'Banque mobile',
    moneyTransfers: 'Transferts d\'argent',
    salaryProcessing: 'Traitement des salaires',
    contactInfo: 'Coordonnées',
    callUs: 'Appelez-nous',
    whatsApp: 'WhatsApp',
    email: 'Email',
    location: 'Emplacement',
    yaounde: 'Yaoundé, Cameroun',
    newsletter: 'Bulletin',
    enterEmail: 'Entrez votre adresse email',
    subscribe: 'S\'abonner',
    termsOfUse: 'Conditions d\'utilisation',
    privacyPolicy: 'Politique de confidentialité',
    cookiePolicy: 'Politique de cookies',
    rightsReserved: '© 2026 MMOCCUL. Tous droits réservés.',
    
    // About Page
    aboutMmoccul: 'À PROPOS DE MMOCCUL',
    yourFinancialPartner: 'Votre partenaire financier pour la croissance et le succès',
    aboutText1: 'MMOCCUL (Mmockmbie Credit Union Cooperative Ltd) est une institution de microfinance entièrement accréditée, catégorie 1, incorporée en 2016 et reconnue pour ses services financiers fiables et centrés sur les membres à travers le Cameroun.',
    aboutText2: 'Fondée sur l\'intégrité et l\'innovation, MMOCCUL est devenue l\'une des coopératives financières les plus en croissance et les plus adaptées au numérique, autorisant des milliers d\'individus, familles et entreprises avec des solutions bancaires sécurisées et des opportunités financières durables.',
    trustedFinancialInstitution: 'Institution financière de confiance',
    digitalBanking: 'Banque numérique',
    digitalBankingText: 'Découvrez la commodité financière moderne avec nos plateformes de banque mobile et en ligne sécurisées et innovantes conçues pour simplifier la banque quotidienne.',
    savingsLoans: 'Épargne et prêts',
    savingsLoansText: 'Faites croître vos finances en confiance grâce à des plans d\'épargne compétitifs, des opportunités d\'investissement et des packages de prêts flexibles adaptés à vos objectifs.',
    ourBankingProcess: 'Notre processus bancaire',
    processText: 'Offrir des expériences financières modernes, sécurisées et centrées sur les personnes, adaptées à votre succès.',
    consultation: 'Consultation',
    consultationDesc: 'Comprendre vos objectifs financiers et vous aider à choisir les solutions bancaires appropriées.',
    coordination: 'Coordination',
    coordinationDesc: 'Fournir un soutien fluide, la gestion de compte et une assistance financière numérique.',
    execution: 'Exécution',
    executionDesc: 'Offrir des transactions sécurisées, une croissance financière et des expériences bancaires fiables.',
    joinTrustedFinancial: 'Rejoignez la communauté financière de confiance du Cameroun',
    joinTrustedText: 'Découvrez une banque sécurisée, moderne et centrée sur les personnes conçue pour vous aider à croître financièrement en confiance.',
    createAcc: 'Créer un compte',
    
    // Services Page
    ourServices: 'Nos services',
    comprehensiveFinancial: 'Solutions financières complètes adaptées à vos besoins',
    personalBanking: 'Banque personnelle',
    personalBankingText: 'Comptes d\'épargne, prêts et options d\'investissement pour les particuliers',
    businessBanking: 'Banque entreprise',
    businessBankingText: 'Des solutions financières pour faire croître votre entreprise',
    digitalServices: 'Services numériques',
    digitalServicesText: 'Une banque moderne à portée de main',
    
    // Contact Page
    contactUs: 'Contactez-nous',
    getInTouch: 'Contactez notre équipe',
    address: 'Adresse',
    phone: 'Téléphone',
    emailUs: 'Envoyez-nous un email',
    workingHours: 'Heures de travail',
    mondayFriday: 'Lundi - Vendredi: 8h00 - 17h00',
    saturday: 'Samedi: 9h00 - 13h00',
    sunday: 'Dimanche: Fermé',
    
    // Homepage
    heroTitle: 'Votre partenaire financier de confiance',
    heroSubtitle: 'Sécurisé, simple et conçu pour la croissance.',
    exploreServices: 'Explorez nos services',
    learnMore: 'En savoir plus',

    // Hero Section
    welcomeTag: 'BIENVENUE À MMOCCUL',
    
    // Hero Slide 1
    heroSlide1Title: 'Épargnez aujourd\'hui,',
    heroSlide1Highlight: 'Sécurisez demain',
    heroSlide1Desc: 'Construisez un avenir meilleur avec des plans d\'épargne flexibles, des conseils financiers de confiance et des solutions bancaires sécurisées adaptées à vos objectifs.',
    heroSlide1Btn: 'En savoir plus',
    
    // Hero Slide 2
    heroSlide2Title: 'Des personnes réelles,',
    heroSlide2Highlight: 'Un vrai soutien',
    heroSlide2Desc: 'Notre équipe dédiée de service client est toujours prête à vous aider avec une assistance bancaire rapide, amicale et professionnelle.',
    heroSlide2Btn: 'En savoir plus',
    
    // Hero Slide 3
    heroSlide3Title: 'Banque à portée de main,',
    heroSlide3Highlight: 'N\'importe quand, n\'importe où',
    heroSlide3Desc: 'Profitez d\'une banque mobile sécurisée avec des transferts instantanés, un accès au compte, des paiements de factures et un contrôle financier directement depuis votre téléphone.',
    heroSlide3Btn: 'En savoir plus',
    
    // Hero Slide 4
    heroSlide4Title: 'Plus forts ensemble,',
    heroSlide4Highlight: 'Une meilleure communauté',
    heroSlide4Desc: 'Nous croyons en l\'autonomisation des communautés par l\'inclusion financière, la croissance partagée et les opportunités qui améliorent la vie.',
    heroSlide4Btn: 'En savoir plus',
    
    // Hero Services
    createAccountHero: 'Créer un compte',
    customerService: 'Service client',
    savingsAccount: 'Compte épargne',
    onlinePayment: 'Paiement en ligne',

    // Contact Section
    contactMmoccul: 'Contactez MMOCCUL',
    alwaysHelp: 'Nous sommes toujours là pour vous aider',
    contactText: 'Obtenez une assistance instantanée pour tous vos besoins bancaires. Notre équipe de support dédiée est prête à vous aider avec vos demandes de compte, transactions et conseils financiers personnalisés.',
    callUs: 'Appelez-nous',
    emailAddress: 'Adresse e-mail',
    
    // Search Page
    searchOurSite: 'Rechercher sur notre site',
    forInformation: 'pour information',
    searchPlaceholder: 'Recherchez des agences, services, actualités et plus encore. Accès rapide à tout ce que MMOCCUL offre.',
    enterSearchTerm: 'Entrez les mots-clés...',
    popularSearches: 'Catégories populaires',
    searchCategoriesText: 'Accès rapide aux informations clés de notre site web.',
    cantFindAnswer: 'Vous ne trouvez pas ce que vous cherchez?',
    cantFindAnswerText: 'Notre équipe de support est prête à vous aider avec toutes questions sur nos services.',
    contactSupport: 'Contacter le support',
    
    // Latest News
    latestNews: 'Dernières Mises à Jour',
    withMmoccul: 'MMOCCUL',
    stayUpdated: 'Restez Informé avec',
    latestUpdatesText: 'Découvrez les dernières annonces, réalisations et mises à jour de votre coopérative financière de confiance.',
    
    // CTA Section
    getInTouchCTA: 'Contactez-nous',
    transformFuture: 'Prêt à transformer votre avenir financier ?',
    ctaText: 'Rejoignez des milliers de membres satisfaits qui ont pris le contrôle de leurs finances avec MMOCCUL. Que vous ayez besoin d\'un prêt, que vous vouliez épargner, ou que vous ayez des questions — nous sommes là pour vous aider !',
    createAccountCTA: 'Créer un compte',
    contactUsCTA: 'Contactez-nous',
    reachUsWhatsApp: 'Contactez-nous sur WhatsApp',
    support247: 'Support 24/7',
    support247Desc: 'Toujours là pour vous aider',
    quickResponse: 'Réponse rapide',
    quickResponseDesc: 'Nous répondons vite',

    // Offer Section
    offerTitle: 'Nos Services',
    offerSubtitle: 'Solutions Financières Complètes pour Votre Succès',
    offerDesc: 'Des prêts personnels au financement d\'entreprise, de la banque mobile aux comptes d\'épargne sécurisés — nous fournissons des solutions financières sophistiquées conçues pour aider nos membres à atteindre leurs objectifs. Découvrez la différence d\'une banque coopérative professionnelle qui priorise votre bien-être financier.',
    exploreOurServices: 'Explorer Nos Services',

    // About Section
    ourIdentity: 'Notre Identité',
    bankingBuiltOnTrust: 'Une Banque Fondée sur la Confiance, Animée par la Communauté',
    whyChooseMmoccul: 'Pourquoi Choisir MMOCCUL?',
    aboutWhyText: 'Nous sommes plus qu\'une institution financière — nous sommes une communauté dédiée à aider nos membres à atteindre l\'indépendance financière. Avec des processus transparents, des taux compétitifs et un service personnalisé, nous rendons la banque simple et accessible pour tous.',
    lowInterestLoans: 'Prêts à Faible Taux d\'Intérêt',
    lowInterestLoansDesc: 'Accédez à des options de financement abordables conçues pour aider votre entreprise à croître et prospérer.',
    secureBanking: 'Banque Sécurisée',
    secureBankingDesc: 'Votre argent est protégé avec des mesures de sécurité de pointe.',
    communityFirst: 'La Communauté d\'Abord',
    communityFirstDesc: 'Rejoignez des milliers de membres qui nous font confiance avec leurs objectifs financiers.',
    activeMembers: 'Membres Actifs',
    customerSatisfaction: 'Satisfaction Client',
    trustedPartners: 'Partenaires de Confiance',
    memberSupport: 'Support Membre',
    partners: 'Partenaires',
    satisfaction: 'Satisfaction',
    members: 'Membres',

    // EasyProcess Section
    weMakeLifeEasy: 'Nous vous simplifions la vie',
    openAccountNow: 'Ouvrez votre compte maintenant',
    presentDocuments: 'Présentez vos documents',
    fillOpeningForm: 'Remplissez le formulaire d\'ouverture',
    verificationDocuments: 'Vérification de vos documents',
    creationBankAccount: 'Création de votre compte bancaire',
    openAnAccount: 'Ouvrir un compte',

    // Portfolio/News Section
    readMore: 'Lire la suite',

    // Clients Section
    trustedPartnersTitle: 'Partenaires de Confiance',
    strategicAlliances: 'Alliances Stratégiques avec des Leaders Mondiaux',
    clientsDesc: 'Nous collaborons fièrement avec des organisations renommées dans le monde entier pour offrir des services financiers exceptionnels avec excellence, intégrité et engagement inébranlable envers nos membres.',
    partnerOrganizations: 'Organisations Partenaires',
    satisfiedMembers: 'Membres Satisfaits',
    clientSatisfaction: 'Satisfaction Client',
    yearsOfExcellence: 'Années d\'Excellence',

    // Branches Section
    nationwidePresence: 'Présence Nationale',
    professionalNetwork: 'Réseau Professionnel',
    branchesDesc: 'Stratégiquement positionnées dans les principales villes du Cameroun, nos agences offrent des services financiers premium avec les plus hauts standards de professionnalisme et de service client.',
    strategicLocations: 'Emplacements Stratégiques',
    premiumService: 'Service premium à travers le Cameroun',
    headOffice: 'Siège Social',
    branchLocations: 'Agences',
    location: 'Emplacement',
    phone: 'Téléphone',
    openingHours: 'Heures d\'Ouverture',
    getDirections: 'Obtenir l\'Itinéraire',
    needAssistance: 'Besoin d\'Aide?',
    assistanceDesc: 'Notre équipe dédiée est prête à vous aider à trouver l\'agence la plus pratique ou à explorer d\'autres options de service adaptées à vos besoins.',
    contactOurTeam: 'Contacter Notre Équipe',
    exploreServices: 'Explorer Nos Services',
  }
}