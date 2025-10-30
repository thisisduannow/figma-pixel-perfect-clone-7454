import React from 'react';

export const DetailsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#E8DFD0] mt-20 px-20 py-20 max-md:mt-10 max-md:px-5 max-md:py-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/248a0678c2bc811d11a1e5f6f43590c995298e31?placeholderIfAbsent=true"
            alt="Artwork detail"
            className="w-full max-w-[600px] object-contain shadow-lg"
          />
        </div>
        <article className="text-[rgba(62,42,42,1)]">
          <h2 className="text-[80px] font-bold leading-none mb-8 max-md:text-[40px]">
            Détails
          </h2>
          <div className="space-y-2 text-lg font-medium">
            <p>Paper: Matt artistic paper made in Japan</p>
            <p>Framing: Unframed</p>
            <p>Print Technique: Epson long lasting Giclée printing</p>
          </div>
          <p className="text-base font-normal mt-4 opacity-80">
            (*A process that uses fade-resistant, archival inks and archival
            substrates to print on large format printers.)
          </p>
        </article>
      </div>
    </section>
  );
};
