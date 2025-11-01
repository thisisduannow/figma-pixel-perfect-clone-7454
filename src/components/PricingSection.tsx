import React from 'react';

interface PriceItem {
  size: string;
  dimensions: string;
  price: string;
}

export const PricingSection: React.FC = () => {
  const priceItems: PriceItem[] = [
    { size: 'A4', dimensions: '21.0 x 29.7 cm', price: '55 €' },
    { size: 'A3', dimensions: '29.7 cm x 42 cm', price: '75 €' },
    { size: 'A2', dimensions: '42 x 59.4 cm', price: '85 €' },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-5 md:px-20 py-20 md:py-24">
      <div className="max-w-[1188px] mx-auto">
        <h2 className="font-cormorant text-[80px] md:text-[80px] font-bold text-[rgba(255,253,245,1)] mb-10 text-center">
          PRIX
        </h2>
        
        <div className="max-w-[500px] mx-auto">
          {priceItems.map((item, index) => (
            <React.Fragment key={item.size}>
              <div className="flex items-end justify-between gap-5 py-2.5 md:py-4 lg:py-6 text-[rgba(255,253,245,1)]">
                <div className="flex items-end gap-2.5">
                  <span className="text-[40px] leading-none font-normal">
                    {item.size}
                  </span>
                  <span className="text-base leading-none pb-1">
                    {item.dimensions}
                  </span>
                </div>
                <span className="text-xl font-normal whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              
              {index < priceItems.length - 1 && (
                <div className="h-[1px] w-full bg-[rgba(255,253,245,1)] my-2.5" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
