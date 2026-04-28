import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EasyProcess = () => {
  const navigate = useNavigate();

  const handleOpenAccount = () => {
    navigate('/create-account');
  };

  const steps = [
    {
      label: 'Present your documents',
      icon: (
        <svg className='w-[36px] h-[36px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/>
          <path d='M14 2v6h6M16 13H8M16 17H8M10 9H8'/>
        </svg>
      ),
    },
    {
      label: 'Fill the opening form',
      icon: (
        <svg className='w-[36px] h-[36px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'/>
          <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'/>
        </svg>
      ),
    },
    {
      label: 'Verification of your documents',
      icon: (
        <svg className='w-[36px] h-[36px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <path d='M9 11l3 3L22 4'/>
          <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'/>
        </svg>
      ),
    },
    {
      label: 'Creation of your bank account',
      icon: (
        <svg className='w-[36px] h-[36px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
          <rect x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path d='M3 9h18M9 21V9'/>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 
          className="font-['Playfair_Display'] text-[clamp(2rem,5vw,3.2rem)] font-semibold text-[#1A3A6B] tracking-[-0.5px] mb-[14px] opacity-0 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          We make life easy
        </h2>

        <p 
          className="text-[clamp(1rem,2.5vw,1.35rem)] font-normal text-[#1A3A6B] mb-[36px] opacity-0 animate-fade-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          Open your account now
        </p>

        <div 
          className="flex items-center justify-center gap-0 mx-auto mb-[56px] w-[180px] opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="h-[1.5px] flex-1 bg-[#cdd8ec]"></div>
          <div className="w-[8px] h-[8px] bg-[#1A3A6B] rounded-full mx-[2px]"></div>
          <div className="h-[1.5px] flex-1 bg-[#cdd8ec]"></div>
        </div>

        <div className="flex justify-center items-start gap-4 flex-wrap mb-[56px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[18px] w-[180px] opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${0.5 + index * 0.15}s`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div 
                className="w-[90px] h-[90px] rounded-full border-[1.5px] border-[#1A3A6B] flex items-center justify-center bg-white transition-all duration-300 cursor-default hover:bg-[#EEF3FB] hover:-translate-y-1"
              >
                <div className="w-[36px] h-[36px] text-[#1A3A6B]">
                  {step.icon}
                </div>
              </div>
              <span className="text-sm font-normal text-[#333] leading-[1.4] tracking-[0.01em]">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleOpenAccount}
          className="inline-block bg-[#1A3A6B] text-white font-['DM_Sans'] text-[0.95rem] font-medium tracking-[0.03em] py-4 px-11 border-none rounded-[3px] cursor-pointer transition-all duration-250 hover:bg-[#0f2548] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,58,107,0.25)] opacity-0 animate-fade-up"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
        >
          Open an account
        </button>
      </div>
    </section>
  );
};
