import React from 'react';
import detailsSectionImage from '@/assets/details-artwork.jpg';

export const DetailsSection: React.FC = () => {
  return (
    <section className="w-full mt-20 max-md:mt-10">
      <img
        src={detailsSectionImage}
        alt="Details section - Artwork with specifications"
        className="w-full object-cover"
      />
    </section>
  );
};
