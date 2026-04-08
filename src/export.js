import { GiReceiveMoney, GiTakeMyMoney, GiMoneyStack } from "react-icons/gi"
import { AiOutlineProject } from "react-icons/ai"
import { BsBank2, BsCashCoin } from "react-icons/bs";
import { MdSavings, MdOutlineAccountBalance, MdAccountBalance, MdSecurity, MdSpeed, MdSupportAgent, MdAttachMoney } from "react-icons/md";
import { FaMobileAlt, FaChild, FaBriefcase, FaUsers, FaChartLine, FaHandshake, FaArrowRight } from "react-icons/fa";
import { TbTransfer } from "react-icons/tb";
import { RiBankFill } from "react-icons/ri";

import { IoMdCloudDone } from "react-icons/io";
import { SiCyberdefenders } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import project1 from  '../src/assets/project1.jpg'
import project2 from  '../src/assets/project2.jpg'
import project3 from  '../src/assets/project3.jpg'
import project4 from  '../src/assets/project4.jpg'
import newsImage1 from './assets/assets2/1774855672518.jpg'
import newsImage2 from './assets/assets2/1774855672572.jpg'
import newsImage3 from './assets/assets2/1774855672659.jpg'
import salaryProcessingImg from './assets/assets2/1774855672751.jpg'
import moneyTransfersImg from './assets/assets2/1774855672791.jpg'
import newsImage4 from './assets/assets2/1774855672707.jpg'
import newsImage5 from './assets/assets2/1774855672751.jpg'
import newsImage6 from './assets/assets2/1774855672791.jpg'
import newsImage7 from './assets/assets2/1774855672833.jpg'
import newsImage8 from './assets/assets2/1774855672879.jpg'

export const services = [
  {
    category: 'Personal Banking',
    icon: MdAccountBalance,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    services: [
      {
        id: 1,
        icon: GiTakeMyMoney,
        title: 'Personal Loans',
        subtitle: 'Flexible Financing for Life\'s Opportunities',
        duration: '6-60 months',
        rate: 'From 12% competitive rates',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
        features: [
          'Quick approval process',
          'Flexible repayment terms',
          'No hidden fees',
          'Personalized loan amounts'
        ],
        description: 'Achieve your personal goals with our flexible personal loan solutions. Whether you\'re planning a home renovation, funding your education, covering medical expenses, or consolidating debt, our personal loans offer competitive interest rates and flexible repayment terms tailored to your financial situation.',
        benefits: [
          'Fast approval within 48 hours',
          'Loan amounts from 50,000 to 10,000,000 FCFA',
          'Flexible repayment periods (6-60 months)',
          'No prepayment penalties',
          'Dedicated relationship manager',
          'Online account management'
        ],
        requirements: [
          'Valid ID and proof of residence',
          'Proof of income (3 months)',
          'Bank statements (3 months)',
          'Completed application form'
        ]
      },
      {
        id: 2,
        icon: MdSavings,
        title: 'Savings Account',
        subtitle: 'Secure Your Future, One Deposit at a Time',
        duration: 'No minimum term',
        rate: 'Competitive interest rates',
        image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=400&fit=crop',
        features: [
          'High liquidity',
          'Competitive interest rates',
          'No minimum balance',
          'Free withdrawals'
        ],
        description: 'Build a secure financial future with our comprehensive savings solutions. Our savings accounts are designed to help you achieve your financial goals, whether you\'re saving for a vacation, education, or building an emergency fund. We offer competitive interest rates that help your money grow while maintaining easy access to your funds when you need them.',
        benefits: [
          'Competitive interest rates on balances',
          'No minimum balance requirements',
          'Free ATM withdrawals',
          'Online and mobile banking access',
          'Automatic savings plans available',
          'FDIC-insured deposits'
        ],
        requirements: [
          'Valid government-issued ID',
          'Proof of residence',
          'Initial deposit of 5,000 FCFA',
          'Completed account opening form'
        ]
      },
      {
        id: 3,
        icon: FaChild,
        title: 'Minor Account',
        subtitle: 'Building Financial Literacy from an Early Age',
        duration: 'Until age 18',
        rate: 'Special youth rates',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
        features: [
          'No minimum deposit',
          'Financial education resources',
          'Parental supervision',
          'Growth tracking'
        ],
        description: 'Give your child the gift of financial literacy with our Minor Savings Account. This account is specifically designed to help children and teenagers learn about money management while building savings habits that will last a lifetime. Parents or legal guardians maintain oversight while children learn valuable financial skills through hands-on experience.',
        benefits: [
          'No minimum deposit required',
          'Special interest rates for young savers',
          'Financial education materials provided',
          'Parental control and monitoring',
          'Savings goal tracking tools',
          'Free account maintenance'
        ],
        requirements: [
          'Child under 18 years old',
          'Parent/guardian valid ID',
          'Proof of relationship to child',
          'Child\'s birth certificate',
          'Completed application form'
        ]
      }
    ]
  },
  {
    category: 'Business Solutions',
    icon: FaBriefcase,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    services: [
      {
        id: 4,
        icon: GiMoneyStack,
        title: 'Business Financing',
        subtitle: 'Fuel Your Business Growth',
        duration: '12-84 months',
        rate: 'Competitive commercial rates',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop',
        features: [
          'Flexible loan amounts',
          'Business-specific solutions',
          'Quick processing',
          'Expert business advice'
        ],
        description: 'Power your business growth with our comprehensive business financing solutions. Whether you\'re a startup looking for initial capital, an established business seeking expansion funds, or need working capital for daily operations, our business loans are designed to support your entrepreneurial journey. Our team of business finance experts works closely with you to understand your unique needs and provide tailored solutions.',
        benefits: [
          'Loan amounts from 1,000,000 to 100,000,000 FCFA',
          'Flexible repayment terms (12-84 months)',
          'Quick approval process',
          'Business advisory services included',
          'Multiple financing options available',
          'Relationship-based banking approach'
        ],
        requirements: [
          'Business registration documents',
          '3 years of financial statements',
          'Business plan (for new businesses)',
          'Collateral documentation',
          'Valid business owner ID',
          'Completed business loan application'
        ]
      },
      {
        id: 5,
        icon: FaUsers,
        title: 'Salary Processing',
        subtitle: 'Efficient Payroll Solutions for Your Team',
        duration: 'Monthly processing',
        rate: 'Competitive processing fees',
        image: salaryProcessingImg,
        features: [
          'Timely salary disbursement',
          'Secure direct deposits',
          'Detailed payroll reports',
          'Employee self-service portal'
        ],
        description: 'Streamline your payroll operations with our comprehensive salary processing services. We handle the complexities of payroll management so you can focus on growing your business. Our system ensures that your employees receive their salaries on time, every time, with complete accuracy and security. From small businesses to large corporations, our scalable solution adapts to your needs.',
        benefits: [
          'On-time salary disbursement guaranteed',
          'Secure direct deposit to employee accounts',
          'Detailed payroll reports and analytics',
          'Employee self-service portal access',
          'Tax compliance and reporting assistance',
          'Integration with existing HR systems',
          '24/7 customer support',
          'Flexible payment schedules'
        ],
        requirements: [
          'Business registration documents',
          'Employee list with account details',
          'Salary structure and payment schedule',
          'Completed payroll service agreement',
          'Bank account for salary funding'
        ]
      },
      {
        id: 6,
        icon: RiBankFill,
        title: 'Current Account',
        subtitle: 'Your Business\'s Financial Hub',
        duration: 'No fixed term',
        rate: 'Competitive business rates',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
        features: [
          'Unlimited transactions',
          'Online banking access',
          'Business debit cards',
          'Multi-user access'
        ],
        description: 'Manage your business finances efficiently with our comprehensive current account solutions. Designed specifically for businesses of all sizes, our current accounts offer the flexibility and features you need to manage daily operations, track expenses, and grow your business. With advanced online banking tools and dedicated business support, you\'ll have complete control over your company\'s finances.',
        benefits: [
          'Unlimited transactions per month',
          'Free online and mobile banking',
          'Business debit cards for authorized users',
          'Multi-user account access with controls',
          'Detailed transaction reporting',
          'Integration with accounting software',
          'Overdraft facilities available',
          'Dedicated business relationship manager'
        ],
        requirements: [
          'Business registration documents',
          'Board resolution (for companies)',
          'Valid IDs of authorized signatories',
          'Proof of business address',
          'Initial deposit of 50,000 FCFA',
          'Completed account opening form'
        ]
      }
    ]
  },
  {
    category: 'Digital & Transfer Services',
    icon: FaMobileAlt,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    services: [
      {
        id: 7,
        icon: FaMobileAlt,
        title: 'Mobile Money Services',
        subtitle: 'Banking at Your Fingertips',
        duration: 'Instant transactions',
        rate: 'Competitive transfer fees',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
        features: [
          'Orange Money integration',
          'MTN Mobile Money integration',
          'Instant transfers',
          'Bill payments'
        ],
        description: 'Experience the future of banking with our comprehensive mobile money services. Through partnerships with Orange Money and MTN Mobile Money, we bring banking services directly to your mobile phone. Send money, pay bills, check balances, and manage your finances anytime, anywhere. Our mobile money services are designed for convenience, security, and speed, making banking accessible to everyone.',
        benefits: [
          'Instant money transfers nationwide',
          'Bill payment for utilities and services',
          'Mobile airtime and data top-ups',
          'Secure transactions with PIN protection',
          '24/7 service availability',
          'Low transaction fees',
          'Transaction history and statements',
          'Customer support via mobile'
        ],
        requirements: [
          'Valid mobile phone number',
          'Registered Orange Money or MTN Mobile Money account',
          'Valid government-issued ID',
          'Completed mobile banking registration'
        ]
      },
      {
        id: 8,
        icon: FaArrowRight,
        title: 'Money Transfers',
        subtitle: 'Fast, Secure, and Reliable',
        duration: 'Minutes to hours',
        rate: 'Competitive exchange rates',
        image: moneyTransfersImg,
        features: [
          'Domestic transfers',
          'International transfers',
          'Competitive rates',
          'Multiple delivery options'
        ],
        description: 'Send money with confidence using our secure and reliable money transfer services. Whether you need to send funds to family members across Cameroon or transfer money internationally, our network ensures fast, secure, and affordable transfers. We offer competitive exchange rates and multiple delivery options to suit your needs and your recipient\'s preferences.',
        benefits: [
          'Fast domestic transfers (minutes)',
          'International transfers to 50+ countries',
          'Competitive exchange rates',
          'Multiple delivery options (cash, bank deposit, mobile)',
          '24/7 online tracking',
          'Secure and regulated service',
          'Multiple payment methods',
          'Customer support in multiple languages'
        ],
        requirements: [
          'Valid government-issued ID',
          'Recipient details and location',
          'Transfer amount and purpose',
          'Completed transfer form',
          'Proof of funds (for large amounts)'
        ]
      },
      {
        id: 9,
        icon: MdAttachMoney,
        title: 'Term Deposits',
        subtitle: 'Secure Growth for Your Savings',
        duration: '1-60 months',
        rate: 'Fixed competitive rates',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
        features: [
          'Guaranteed returns',
          'Flexible terms',
          'Higher interest rates',
          'Secure investment'
        ],
        description: 'Grow your savings with guaranteed returns through our term deposit accounts. Perfect for those looking for a secure investment with predictable returns, our term deposits offer competitive fixed interest rates for various terms. Whether you have short-term goals or are planning for the future, our term deposits provide a safe and reliable way to grow your money.',
        benefits: [
          'Guaranteed fixed interest rates',
          'Terms from 1 to 60 months',
          'Higher rates than regular savings',
          'FDIC-insured deposits',
          'Automatic renewal options',
          'Flexible withdrawal options',
          'Competitive rates locked in',
          'Regular interest payment options'
        ],
        requirements: [
          'Valid government-issued ID',
          'Proof of residence',
          'Initial deposit (amount varies by term)',
          'Completed term deposit application',
          'Tax identification number (if applicable)'
        ]
      }
    ]
  }
]


export const news = [
  {
    img: newsImage4,
    date: 'March 15, 2026',
    category: 'Achievement',
    title: 'MMOCCUL Reaches 14,000 Members Milestone',
    para: 'We are proud to announce that our cooperative has grown to over 10,000 active members. Thank you for trusting us with your financial future.',
  },
  {
    img: newsImage2,
    date: 'March 10, 2026',
    category: 'Expansion',
    title: 'New Branch Opening in Douala',
   para: 'MMOCCUL is excited to open our newest branch in Douala, making our services more accessible to members in the economic capital.',
  },
  {
    img: newsImage3,
    date: 'February 28, 2026',
    category: 'Award',
    title: 'Best Cooperative Bank Award 2026',
    para: 'MMOCCUL has been recognized as the Best Cooperative Financial Institution in Cameroon for our outstanding service.',
  },
  {
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
    date: 'February 15, 2026',
    category: 'Service',
    title: 'Introducing Mobile Banking App',
    para: 'Experience banking at your fingertips with our new mobile app. Access your accounts, transfer funds, and pay bills anywhere.',
  },
  {
    img: newsImage5,
    date: 'January 30, 2026',
    category: 'Partnership',
    title: 'Strategic Partnership with MTN Cameroon',
    para: 'MMOCCUL partners with MTN to enhance mobile money services, providing members with faster and more secure transactions.',
  },
  {
    img: project2,
    date: 'January 20, 2026',
    category: 'Community',
    title: 'Free Financial Literacy Workshop',
    para: 'Join our free workshop series designed to help members and the community understand savings, budgeting, and investment.',
  },
  {
    img: newsImage6,
    date: 'January 10, 2026',
    category: 'Growth',
    title: 'Record-breaking Savings in 2025',
    para: 'Our members saved a record amount last year, demonstrating the strength and trust in MMOCCUL cooperative principles.',
  },
  {
    img: newsImage7,
    date: 'December 28, 2025',
    category: 'Event',
    title: 'Annual General Meeting 2025',
    para: 'Members gathered for our successful AGM where we reviewed achievements and unveiled exciting plans for the coming year.',
  },
]

export const projects = [
  {
    img: project1,
    title: 'Cloud Migration for TechCorp',
    para: 'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et.',
  },
  {
    img: project2,
    title: 'Cloud Migration for TechCorp',
    para: 'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et.',
  },
  {
    img: project3,
    title: 'Cloud Migration for TechCorp',
    para: 'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea null nunc egestas pellentesque et.',
  },
  {
    img: project4,
    title: 'Cloud Migration for TechCorp',
    para: 'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea null nunc egestas pellentesque et.',
  },
]

export const reviews = [
  {
    rating:'5.0',
    about:'MMOCCUL transformed my small business. Their business loan helped me expand my shop and hire more employees. The staff is incredibly supportive and professional.',
    name:'Marie Tchinda',
    role: 'Small Business Owner'
  },
  {
    rating:'4.9',
    about:'As a first-time saver, I was amazed at how easy MMOCCUL made it. The mobile app is fantastic and I can track my savings from anywhere. Highly recommended!',
    name:'Paul Ngah',
    role: 'Teacher'
  },
  {
    rating:'5.0',
    about:'The salary processing service has been a lifesaver for our company. My employees receive their salaries on time, every time. Excellent and reliable service.',
    name:'Dr. Jean Mballa',
    role: 'Clinic Director'
  },
  {
    rating:'4.8',
    about:'I transferred money to my family in the village within minutes using MMOCCUL mobile money. Fast, secure, and very affordable. Thank you MMOCCUL!',
    name:'Amara Diallo',
    role: 'Engineer'
  },
  {
    rating:'5.0',
    about:'Opening a minor account for my daughter was the best decision. She is learning to save from a young age, and the staff are so patient and helpful.',
    name:'Serge Fotso',
    role: 'Father & Accountant'
  },
  {
    rating:'4.9',
    about:'The term deposit rates are competitive and the staff explained everything clearly. I feel confident about my financial future with MMOCCUL.',
    name:'Pierre Kamga',
    role: 'Retired Civil Servant'
  },
  {
    rating:'5.0',
    about:'MMOCCUL gave me hope when I needed it most. Their quick loan approval helped me start my restaurant. Now I employ 15 people. Forever grateful!',
    name:'Fatou Mbaye',
    role: 'Restaurant Owner'
  },
  {
    rating:'4.8',
    about:'Outstanding customer service! The team at MMOCCUL genuinely cares about their members. They helped me plan for my children\'s education with a savings plan.',
    name:'Michel Ngando',
    role: 'University Lecturer'
  },
  {
    rating:'5.0',
    about:'The best financial cooperative in Cameroon! My family has been with MMOCCUL for generations and we have always received excellent service. Truly a partner you can trust.',
    name:'Henriette Ngu',
    role: 'Family Enterprise Owner'
  },
]
