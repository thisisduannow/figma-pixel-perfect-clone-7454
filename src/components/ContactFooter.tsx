import React from 'react';
import emailIcon from '@/assets/email-icon.svg';

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
          <img
            src="https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/2e4b33c8cbe2ff8ed6220606d291d0c397a6d841?placeholderIfAbsent=true"
            alt="Social media icon"
            className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
          />
          <a 
            href="https://www.instagram.com/abaldalien?igsh=MWxrc283aDdud2pxdw%3D%3D&utm_source=qr" 
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch my-auto hover:opacity-80 transition-opacity"
            aria-label="Visit abaldalien Instagram profile"
          >
            abaldalien
          </a>
        </div>
        <div className="flex w-full items-center gap-2.5 mt-3">
          <img
            src={emailIcon}
            alt="Email icon"
            className="aspect-[1.15] object-contain w-[30px] self-stretch shrink-0 my-auto"
          />
          <a 
            href="mailto:thisisduannow@gmail.com"
            className="self-stretch my-auto hover:opacity-80 transition-opacity"
          >
            thisisduannow@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
