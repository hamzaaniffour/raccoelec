import React from "react";

const FirstOption = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-0 mt-0">
        <img
          src="https://www.enedis.fr/sites/default/files/pictos/2023-11/couts-delais-situation-4-5.svg"
          alt="Booking"
          className="w-[600px]"
        />
      </div>
      <h2 className="book_title text-2xl leading-[55px] font-bold text-[#96cd32] mb-3">
        Solution technique
      </h2>
      <p className="text-zinc-950 mb-2">
        Au préalable, raccoelec doit réaliser une étude pour vérifier que la
        puissance souhaitée est disponible sur le réseau :
      </p>
    </div>
  );
};

export default FirstOption;
