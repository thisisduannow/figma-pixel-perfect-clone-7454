import React from 'react';

interface ArtworkGalleryProps {
  title: string;
  images: string[];
}

export const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ title, images }) => {
  return (
    <section className="w-full">
      <h2 className="text-[rgba(255,253,245,1)] text-2xl font-bold text-center mb-20 max-md:mb-10">
        {title}
      </h2>
      <div className="flex w-full gap-6 overflow-x-auto pb-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} artwork ${index + 1}`}
            className="aspect-[0.71] object-contain w-[300px] min-w-60 shrink-0"
          />
        ))}
      </div>
    </section>
  );
};
