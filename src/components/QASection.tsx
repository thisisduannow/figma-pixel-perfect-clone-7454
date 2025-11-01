import React from 'react';

export const QASection: React.FC = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-5 md:px-20 py-20 md:py-24">
      <div className="max-w-[1188px] mx-auto">
        <h2 className="font-cormorant text-[80px] md:text-[120px] font-bold text-[rgba(255,253,245,1)] mb-16 max-md:text-[40px]">
          Q&A
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 font-jakarta text-[rgba(255,253,245,1)]">
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">EXPÉDITION</h3>
            <div className="space-y-4 text-base leading-relaxed">
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

          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">REMBOURSEMENTS</h3>
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
