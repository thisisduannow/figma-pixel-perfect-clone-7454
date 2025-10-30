import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="max-w-full w-[1920px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/ecd66ea5aa3557c735e4e6eab19e6f38ed8a1a8e?placeholderIfAbsent=true"
        alt="Hero artwork"
        className="aspect-[1.84] object-contain w-full"
      />
    </section>
  );
};
