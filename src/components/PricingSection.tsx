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
    <section className="flex max-w-full w-[1920px] flex-col items-center text-[rgba(255,253,245,1)] mt-20 pb-[25px] px-20 max-md:mt-10 max-md:px-5">
      <div className="flex min-h-[625px] w-[1188px] max-w-full flex-col overflow-hidden items-stretch justify-center px-[344px] py-[147px] max-md:px-5 max-md:py-[100px]">
        <div className="w-full max-md:max-w-full">
          <h2 className="font-cormorant text-[80px] font-bold max-md:text-[40px]">
            PRIX
          </h2>
          <div className="w-full font-normal mt-10 max-md:max-w-full">
            {priceItems.map((item, index) => (
              <div key={item.size}>
                <div className="flex w-full max-w-[500px] items-stretch gap-5 flex-wrap justify-between py-2.5 max-md:max-w-full">
                  <div className="flex items-stretch gap-2.5">
                    <div className="text-[40px] grow">
                      {item.size}{" "}
                    </div>
                    <div className="text-base basis-auto mt-2.5">
                      {item.dimensions}
                    </div>
                  </div>
                  <div className="text-xl my-auto">
                    {item.price}
                  </div>
                </div>
                {index < priceItems.length - 1 && (
                  <div className="border min-h-0.5 w-full mt-2.5 border-[rgba(255,253,245,1)] border-solid" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
