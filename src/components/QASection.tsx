import React from 'react';

export const QASection: React.FC = () => {
  return (
    <section className="flex min-h-[649px] max-w-full w-[1921px] flex-col items-stretch justify-center mt-20 px-[137px] py-[77px] max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1647px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[rgba(255,253,245,1)] text-[120px] font-bold max-md:text-[40px]">
          Q&A
        </h2>
        <div className="flex h-[310px] w-full gap-[40px_95px] justify-between flex-wrap mt-10 max-md:max-w-full">
          <div className="rotate-[-1.570796370506285rad] flex min-w-60 w-[769px] shrink-0 h-[310px] gap-3 items-center justify-center">
            <div className="text-[rgba(255,253,245,1)] text-6xl font-bold tracking-wider max-md:text-4xl">
              EXPÉDITION
            </div>
          </div>
          <div className="rotate-[-1.570796370506285rad] flex min-h-[235px] min-w-60 gap-3 items-center justify-center max-md:max-w-full">
            <div className="text-[rgba(255,253,245,1)] text-6xl font-bold tracking-wider max-md:text-4xl">
              REMBOURSEMENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
