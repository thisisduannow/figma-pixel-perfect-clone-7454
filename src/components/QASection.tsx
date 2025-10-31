import React from 'react';

export const QASection: React.FC = () => {
  return (
    <section className="flex min-h-[649px] max-w-full w-[1921px] flex-col items-stretch justify-center mt-20 px-[137px] py-[77px] max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1647px] flex-col items-stretch max-md:max-w-full">
        <h2 className="font-cormorant text-[rgba(255,253,245,1)] text-[120px] font-bold max-md:text-[40px]">
          Q&A
        </h2>
        <div className="text-[rgba(255,253,245,1)] mt-10 space-y-4 text-base leading-relaxed max-w-[800px]">
          <p>
            Pour toute commande, veuillez me contacter à thisisduannow@gmail.com.
          </p>
          <p>
            Veuillez compter jusqu'à 7 jours ouvrables pour la production (hors délai d'expédition).
          </p>
          <p>
            Chaque tirage est réalisé spécialement pour vous. Merci de votre patience pendant la préparation de votre commande.
          </p>
          <p>
            Livraison gratuite pour toute commande supérieure à 70 € en France, et à 135 € dans le reste du monde, retrait gratuit possible à Paris.
          </p>
        </div>
      </div>
    </section>
  );
};
