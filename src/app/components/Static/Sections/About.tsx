import React from "react";
import { IoPlay } from "react-icons/io5";

const About = () => {
  return (
    <div
      className="mb-20 max-w-6xl mx-auto duration-[700ms] delay-[100ms] taos:opacity-0 taos:translate-y-[100px] [animation-iteration-count:infinite] taos-init"
      data-taos-class="mt-[100px] mb-[70px] max-w-6xl mx-auto duration-[700ms] delay-[100ms] taos:opacity-0 taos:translate-y-[100px] [animation-iteration-count:infinite] taos-init"
    >
      <div className="bg-[#1523dc21] flex justify-between flex-col md:flex-row-reverse items-center p-[40px] rounded-[16px] gap-16">
        <div className="max-w-[600px]">
          <h3 className="text-4xl text-zinc-950 font-bold mb-3">
            À propos de <span className="text-[#1523dc]">Raccoelec</span>
          </h3>
          <p className="text-zinc-500 text-lg">
            Raccoservices est un opérateur expert et spécialiste, acteur majeur
            sur le marché, proposant un service dédié de conseil, d’assistance
            et d'accompagnement à la démarche administrative et au suivi d'une
            ou de demandes de raccordement électrique, en France, que ce soit
            pour des particuliers ou des professionnels.
          </p>
        </div>
        <div
          className="w-full h-64 bg-cover bg-center rounded-[16px] flex justify-center items-center"
          style={{ backgroundImage: 'url("/assets/about.webp")' }}
        >
          <button className="playbtn relative z-10 flex justify-center items-center h-28 w-28 bg-white rounded-full shadow-md">
            <IoPlay className="text-[#1523dc] size-14" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
