"use client";

import React from "react";
import { Open_Sans } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
// import "embla-carousel/embla-carousel.css";

const open_sans = Open_Sans({ subsets: ["latin"], weight: "700" });

const Band = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <div className="bg-[#F3F5F6] py-5">
      <div className="max-w-7xl lg:max-w-6xl mx-auto px-4">
        <div className="flex justify-start items-center gap-10">
          <div>
            <p
              className={`${open_sans.className} text-[#606568] font-normal text-[17px] leading-[21px]`}
            >
              Dans les médias:
            </p>
          </div>

          <div className="embla w-[80%]" ref={emblaRef}>
            <div className="embla__container flex justify-center items-center gap-10">
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-lepoint.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-forbes.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-lefigaro-300x93.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-lemonde.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-laprovence-300x95.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-challenges-300x114.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-forbes.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-lefigaro-300x93.webp" alt="brand" /></div>
              <div className="embla__slide" style={{ flex: "0 0 10%" }}><img className="w-[80px]" src="https://raccoelec.fr/wp-content/uploads/2024/06/logo-entreprendre.webp" alt="brand" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Band;
