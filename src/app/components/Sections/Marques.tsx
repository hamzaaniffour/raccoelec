"use client";
import { useEffect } from "react";
import NokiaBrand from "../../../../public/brand/nokia.svg";
import BouyGuesBrand from "../../../../public/brand/bouygues.svg";
import HuawieBrand from "../../../../public/brand/huawei-2.svg";
import SamsungBrand from "../../../../public/brand/samsung.svg";
import AndroidBrand from "../../../../public/brand/android.svg";
import HTCBrand from "../../../../public/brand/htc.svg";
import TmobileBrand from "../../../../public/brand/tmobile.svg";
import LenovoBrand from "../../../../public/brand/lenevo.svg";
import xiaomiBrand from "../../../../public/brand/xiaomi.svg";
import motorolaBrand from "../../../../public/brand/motorola.svg";
import sonyEBrand from "../../../../public/brand/sony-e.svg";
import AlcaBrand from "../../../../public/brand/alca.svg";
import SFR from "../../../../public/brand/sfr.svg";
import ATt from "../../../../public/brand/att.svg";
import Orange from "../../../../public/brand/orange.svg";
import FreeMobile from "../../../../public/brand/freemobile.svg";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"], weight: "800" });

const Marques = () => {
  useEffect(() => {
    const init = () => {
      let ul = document.getElementById("logos");
      if (ul) {
        ul.insertAdjacentHTML("afterend", ul.outerHTML);
        if (ul.nextSibling && "setAttribute" in ul.nextSibling) {
          (ul.nextSibling as HTMLElement).setAttribute("aria-hidden", "true");
        }
      }
    };

    init();
  }, []);

  return (
    <div className="mt-24 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col mb-9">
          <h3
            className={`${open_sans.className} text-2xl text-zinc-950 font-bold text-center mb-2`}
          >
            Ils nous font confiance
          </h3>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            id="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <Image src={NokiaBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={BouyGuesBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={HuawieBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={SamsungBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={AndroidBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={HTCBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={TmobileBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={LenovoBrand} alt="" width={100} />
            </li>
            <li>
              <Image src={xiaomiBrand} alt="" width={40} />
            </li>
            <li>
              <Image src={motorolaBrand} alt="" width={150} />
            </li>
            <li>
              <Image src={sonyEBrand} alt="" width={150} />
            </li>
            <li>
              <Image src={AlcaBrand} alt="" width={120} />
            </li>
            <li>
              <Image src={SFR} alt="" width={40} />
            </li>
            <li>
              <Image src={ATt} alt="" width={80} />
            </li>
            <li>
              <Image src={Orange} alt="" width={40} />
            </li>
            <li>
              <Image src={FreeMobile} alt="" width={80} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marques;
