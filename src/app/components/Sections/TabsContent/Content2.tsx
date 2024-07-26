import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "800" });

const Content2 = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full p-4 border-[1px] border-[#1523dc] rounded-2xl animate__animated animate__zoomIn">
          <Image
            className="rounded-2xl"
            src="https://raccoelec.fr/wp-content/uploads/2024/06/cp-enedis-et-we-love-green-inaugurent-la-saison-des-festivals-decarbones-home-desktop.jpg"
            alt="POST"
            width={500}
            height={500}
          />
          <h3 className={`${poppins.className} text-zinc-900 text-center mt-3 text-[20px] font-[700] mb-3`}>Viabilisation de terrain</h3>
          <p className="text-[#69798d] text-[15px] text-center mb-5">Poser un coffret en limite de votre propriété.
          Reliez votre terrain au réseau électrique dEnedis.</p>
          <div className="flex justify-center items-center">
            <Link href="/">
                <button className={`${poppins.className} text-white font-semibold text-md bg-[#1523dc] py-3.5 px-8 rounded-md`}>Faire ma demande</button>
            </Link>
          </div>
        </div>
        <div className="w-full p-4 border-[1px] border-[#1523dc] rounded-2xl animate__animated animate__zoomIn">
          <Image
            className="rounded-2xl"
            src="https://raccoelec.fr/wp-content/uploads/2024/06/shutterstock_1342362014.jpg"
            alt="POST"
            width={500}
            height={500}
          />
          <h3 className={`${poppins.className} text-zinc-900 text-center mt-3 text-[20px] font-[700] mb-3`}>Viabilisation de terrain</h3>
          <p className="text-[#69798d] text-[15px] text-center mb-5">Poser un coffret en limite de votre propriété.
          Reliez votre terrain au réseau électrique dEnedis.</p>
          <div className="flex justify-center items-center">
            <Link href="/">
                <button className={`${poppins.className} text-white font-semibold text-md bg-[#1523dc] py-3.5 px-8 rounded-md`}>Faire ma demande</button>
            </Link>
          </div>
        </div>
        <div className="w-full p-4 border-[1px] border-[#1523dc] rounded-2xl animate__animated animate__zoomIn">
          <Image
            className="rounded-2xl"
            src="https://raccoelec.fr/wp-content/uploads/2024/06/cp-enedis-et-we-love-green-inaugurent-la-saison-des-festivals-decarbones-home-desktop.jpg"
            alt="POST"
            width={500}
            height={500}
          />
          <h3 className={`${poppins.className} text-zinc-900 text-center mt-3 text-[20px] font-[700] mb-3`}>Viabilisation de terrain</h3>
          <p className="text-[#69798d] text-[15px] text-center mb-5">Poser un coffret en limite de votre propriété.
          Reliez votre terrain au réseau électrique dEnedis.</p>
          <div className="flex justify-center items-center">
            <Link href="/">
                <button className={`${poppins.className} text-white font-semibold text-md bg-[#1523dc] py-3.5 px-8 rounded-md`}>Faire ma demande</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
