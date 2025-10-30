import React from 'react';

export const DetailsSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[1022px] w-full items-center gap-2.5 overflow-hidden text-[rgba(62,42,42,1)] mt-20 px-[200px] py-[393px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/248a0678c2bc811d11a1e5f6f43590c995298e31?placeholderIfAbsent=true"
        alt="Details background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <article className="relative self-stretch min-w-60 w-[474px] my-auto">
        <h2 className="text-[80px] font-bold max-md:max-w-full max-md:text-[40px]">
          Détails
        </h2>
        <div className="text-xl font-medium mt-2.5 max-md:max-w-full">
          Paper: Matt artistic paper made in Japan
          <br />
          Framing: Unframed
          <br />
          Print Technique: Epson long lasting Giclée printing
        </div>
        <div className="text-base font-normal mt-2.5 max-md:max-w-full">
          {" "}
          (*A process that uses fade-resistant, archival inks and archival
          substrates to print on large format printers. )
        </div>
      </article>
    </section>
  );
};
