import React from 'react';

export const ArtistIntro: React.FC = () => {
  return (
    <section className="w-[763px] max-w-full text-[rgba(255,253,245,1)] font-medium mt-20 max-md:mt-10">
      <article className="max-md:max-w-full">
        <h1 className="text-2xl leading-none max-md:max-w-full">
          Salut, c'est Duan
        </h1>
        <div className="text-lg leading-[34px] mt-7 max-md:max-w-full">
          Je suis illustratrice basée à Paris.
          <br />
          <br />
          Mon travail s'inspire de la vie quotidienne et des communautés
          marginalisées. J'aime utiliser des couleurs vives pour exprimer
          les émotions et les histoires qui traversent mes images. J'ai
          collaboré avec des institutions telles que Tate et le London
          College of Fashion, et j'ai participé à plusieurs expositions
          collectives à Paris, Londres et Shanghai.
          <br />
          J'espère que mes prints apporteront un peu de joie chez vous.
        </div>
      </article>
    </section>
  );
};
