import { Carousel } from "flowbite-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "800" });

const HeroSection = () => {
  return (
    <div className="lg:flex bg-[#1523dc] h-[660px] text-white">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="absolute z-10 animate__animated animate__slideInLeft">
          <div className="pl-24">
        <h1 className={`book_title text-[30px] lg:text-[50px] leading-normal font-bold mb-4`} style={{textShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}>Votre projet est unique.<br /> Notre accompagnement aussi.</h1>
        <p className="text-xl mb-8" style={{textShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}>
        Confiez vos démarches au n° 1 du marché : zéro stress, rapide et économique.
        </p>
        </div>
        <div className="flex justify-center space-x-2 mb-8 animate__animated animate__slideInLeft">
          <button className="bg-white text-black font-bold hover:bg-[#149163] hover:text-white transition-all px-3.5 py-3 rounded-full">
          Raccordement électrique
          </button>
          <button className="bg-white text-black font-bold hover:bg-[#149163] hover:text-white transition-all px-3.5 py-3 rounded-full">
          Modification de branchement
          </button>
          <button className="bg-white text-black font-bold hover:bg-[#149163] hover:text-white transition-all px-3.5 py-3 rounded-full">
          Mise en service
          </button>
        </div>
        <div className="flex justify-center space-x-10 mt-20 animate__animated animate__slideInUp">
          <div className="flex justify-center items-center flex-col">
            <img src="https://raccoelec.fr/wp-content/uploads/2024/06/Google_logo-svg.png" alt="Google" className="w-[80px]" />
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
          </div>
            <p className="font-semibold text-white text-md">4.4/5 | 10000+ reviews</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="https://raccoelec.fr/wp-content/uploads/2024/06/Avis_Verifies-1.webp" alt="Google" className="w-[110px]" />
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
              <span className="text-yellow-400 text-2xl">&#9733;</span>
          </div>
            <p className="font-semibold text-white text-md">4.4/5 | 10000+ reviews</p>
          </div>
        </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-20">
        <Carousel indicators={false} leftControl={null} rightControl={null} className="!rounded-none">
          <img src="https://i.ibb.co/BtQVFpv/1.jpg" alt="Event 1" className="w-full h-full object-cover" />
          <img src="https://i.ibb.co/4mMbRFD/2.jpg" alt="Event 2" className="w-full h-full object-cover" />
          <img src="https://i.ibb.co/BtQVFpv/1.jpg" alt="Event 3" className="w-full h-full object-cover" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;