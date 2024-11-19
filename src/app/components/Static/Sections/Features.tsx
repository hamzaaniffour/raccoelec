import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-20">
      <h2 className="text-2xl text-zinc-950 font-bold text-center mb-2">
        Nous sommes là pour vous accompagner
      </h2>
      <p className="text-zinc-700 mb-10 text-[16px] max-w-[800px] text-center">
        Découvrez nos services complets de raccordement électrique, comprenant
        l&#39;installation, la maintenance préventive, le dépannage d&ldquo;urgence et
        la conformité aux normes en vigueur. Nos électriciens certifiés sont là
        pour vous garantir une tranquillité d&#39;esprit totale.
      </p>
      <div className="flex items-center justify-center">
        <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
          {/* Details Tab */}
          <li>
            <input
              className="peer sr-only"
              type="radio"
              name="answer"
              id="yes"
              defaultChecked
            />
            <label
              className="flex justify-center cursor-pointer font-semibold rounded-lg border border-gray-300 bg-white py-4 px-12 text-[#1523dc] hover:bg-gray-50 focus:outline-none peer-checked:text-white peer-checked:py-4 peer-checked:px-12 peer-checked:bg-gradient-to-r peer-checked:from-[#2575fc] peer-checked:to-[#6a11cb] peer-checked:border-transparent peer-checked:rounded-lg transition-all duration-500 ease-in-out"
              htmlFor="yes"
            >
              Raccordement électrique
            </label>
            <div className="duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                Raccordement électrique
            </div>
          </li>

          {/* About Tab */}
          <li>
            <input
              className="peer sr-only"
              type="radio"
              name="answer"
              id="no"
            />
            <label
              className="flex justify-center cursor-pointer font-semibold rounded-lg border border-gray-300 bg-white py-4 px-12 text-[#1523dc] hover:bg-gray-50 focus:outline-none peer-checked:text-white peer-checked:py-4 peer-checked:px-12 peer-checked:bg-gradient-to-r peer-checked:from-[#2575fc] peer-checked:to-[#6a11cb] peer-checked:border-transparent peer-checked:rounded-lg transition-all duration-500 ease-in-out"
              htmlFor="no"
            >
              Modification de branchement
            </label>
            <div className="duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
            Modification de branchement
            </div>
          </li>

          {/* Something Tab */}
          <li>
            <input
              className="peer sr-only"
              type="radio"
              name="answer"
              id="yesno"
            />
            <label
              className="flex justify-center cursor-pointer font-semibold rounded-lg border border-gray-300 bg-white py-4 px-12 text-[#1523dc] hover:bg-gray-50 focus:outline-none peer-checked:text-white peer-checked:py-4 peer-checked:px-12 peer-checked:bg-gradient-to-r peer-checked:from-[#2575fc] peer-checked:to-[#6a11cb] peer-checked:border-transparent peer-checked:rounded-lg transition-all duration-500 ease-in-out"
              htmlFor="yesno"
            >
              Mise en service
            </label>
            <div className="duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
            Mise en service
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
