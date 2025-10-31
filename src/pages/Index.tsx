import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ArtistIntro } from '@/components/ArtistIntro';
import { ArtworkGallery } from '@/components/ArtworkGallery';
import { PricingSection } from '@/components/PricingSection';
import { DetailsSection } from '@/components/DetailsSection';
import { QASection } from '@/components/QASection';
import { ContactFooter } from '@/components/ContactFooter';

const Index = () => {
  const uneNuitAvecRoseImages = [
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/46399265dde2f8a243a8edc6c545350d22adf72b?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/3c6f841c5360f086177602a1139ea8b6c91929b9?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/ec6b0116f8fdbd423470076db86e9295538ac3ca?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/3fe4887c3da551f419ad1d3d0df9598114361aa5?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/031eee3f0c3c70407b642d1e1f9f1f20355f4330?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/b0f1dbd356813f1082d111c88b608b36f303b27f?placeholderIfAbsent=true"
  ];

  const monMeilleurAmiImages = [
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/33d7181be60bf5238f9e03ad32dea35eff0729cf?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/22acdb4e4e5e570214b72110161f30623c4d3097?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/d3a69fca9f6f010155b0bf399d32cac719dd2321?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/70356cf9a8a150d30357da8047451ce2c9a04c8a?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/3ee2afb50111ef1721489739ccba187aaec5fe14?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/550232d7a0814206079513e10a4e695933d01ac9?placeholderIfAbsent=true"
  ];

  const ifSeriesImages = [
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/305d9a47707d2bc054fe50067c269f575fd392c5?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/0f57f9f2101e71505af8e8a12aec04e8d43ae4c9?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/5f6f3965acff6280e15cc3f80690c0c07a2de516?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/5433e7f11c1914ea4a75c1719fc39a684d61e8e9?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/36712fe98f5872a9b88177ed9d6109f7a7a12993?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/48d21b7a3f224dd1b9d44631af980980/5fcb5de90557566494c5b4c5d95e1aa4cd35383a?placeholderIfAbsent=true"
  ];

  return (
    <main className="bg-black flex items-center gap-2.5">
      <div className="self-stretch flex min-w-60 w-[1920px] flex-col overflow-hidden items-center my-auto max-md:max-w-full">
        <HeroSection />
        
        <ArtistIntro />
        
        <div className="self-stretch flex w-full flex-col items-stretch justify-center mt-20 py-5 max-md:max-w-full max-md:mt-10">
          <ArtworkGallery 
            title="Une nuit avec rose" 
            images={uneNuitAvecRoseImages} 
          />
          
          <div className="mt-20 max-md:mt-10">
            <ArtworkGallery 
              title="Mon Meilleur Ami" 
              images={monMeilleurAmiImages} 
            />
          </div>
          
          <div className="mt-20 max-md:mt-10">
            <ArtworkGallery 
              title="If this, if that, if I, if you, if us, if…In the end, if is just if…" 
              images={ifSeriesImages} 
            />
          </div>
        </div>
        
        <PricingSection />
        
        <DetailsSection />
        
        <QASection />
        
        <ContactFooter />
      </div>
    </main>
  );
};

export default Index;
