import React from 'react';

export const QASection: React.FC = () => {
  return (
    <section className="flex min-h-[649px] max-w-full w-[1921px] flex-col items-stretch justify-center mt-20 px-[137px] py-[77px] max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1647px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[rgba(255,253,245,1)] text-[120px] font-bold max-md:text-[40px]">
          Q&A
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 max-md:gap-10">
          <div className="text-[rgba(255,253,245,1)]">
            <h3 className="text-2xl font-bold mb-6 tracking-wider">
              EXPÉDITION
            </h3>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Pour toute commande, veuillez me contacter à thisisduannow@gmail.com.
              </p>
              <p>
                Veuillez compter jusqu'à 7 jours ouvrables pour la production (hors délai d'expédition).
              </p>
              <p>
                Chaque tirage est réalisé spécialement pour vous — merci de votre patience pendant la préparation de votre commande.
              </p>
              <p>
                Livraison gratuite pour toute commande supérieure à 70 € en France, et à 135 € dans le reste du monde, retrait gratuit en Île-de-France
              </p>
            </div>
          </div>
          
          <div className="text-[rgba(255,253,245,1)]">
            <h3 className="text-2xl font-bold mb-6 tracking-wider">
              REMBOURSEMENTS
            </h3>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Chaque article est fabriqué à la demande, nous ne pouvons donc pas accepter de retours liés à un changement d'avis.
              </p>
              <p>
                Nous remplaçons uniquement les articles défectueux ou endommagés.
              </p>
              <p>
                Veuillez inspecter votre commande dès sa réception et nous contacter dans les 7 jours suivant la signature du colis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
