import React from 'react';

export const ContactFooter: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch relative min-h-[929px] w-full overflow-hidden text-2xl text-[rgba(255,253,245,1)] font-medium whitespace-nowrap mt-20 pt-[757px] pb-[100px] px-[100px] max-md:max-w-full max-md:mt-10 max-md:pt-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/1a1809668dac4b0b489130415374b390df0d93ff?placeholderIfAbsent=true"
        alt="Footer background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[348px] max-w-full flex-col items-stretch">
        <div className="flex items-center gap-2.5">
          <a 
            href="https://www.instagram.com/abaldalien/" 
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch my-auto hover:opacity-80 transition-opacity flex items-center gap-2.5"
            aria-label="Visit abaldalien Instagram profile"
          >
            <i className="fab fa-instagram w-[30px] text-[30px]"></i>
            <span>abaldalien</span>
          </a>
        </div>
        <div className="flex w-full items-center gap-2.5 mt-3">
          <a 
            href="mailto:thisisduannow@gmail.com"
            className="self-stretch my-auto hover:opacity-80 transition-opacity flex items-center gap-2.5"
          >
            <i className="fas fa-envelope w-[30px] text-[30px]"></i>
            <span>thisisduannow@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
