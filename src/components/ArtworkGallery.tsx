import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface ArtworkGalleryProps {
  title: string;
  images: string[];
}

export const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({ title, images }) => {
  return (
    <section className="w-full">
      <h2 className="font-cormorant text-[rgba(255,253,245,1)] text-2xl font-bold text-center mb-20 max-md:mb-10">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-6 basis-auto">
              <img
                src={src}
                alt={`${title} artwork ${index + 1}`}
                className="aspect-[0.71] object-contain w-[300px] min-w-60"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
