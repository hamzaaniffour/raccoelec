import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdPaper } from "react-icons/io";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuFileCheck2 } from "react-icons/lu";

const Timeline = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mb-20">
  <div className="w-full max-w-4xl">
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200" />
      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Étude de la Demande</h3>
            <p className="text-gray-600">
              Nos juristes repondent a vos questions grace a l&lsquo;assistance
              legalstart, vos status sont generes et verifies par bos equipes.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
            <IoMdPaper className="text-white size-5" />
          </div>
        </div>
        <div className="w-1/2" />
      </div>
      <div className="flex items-center mb-8">
        <div className="w-1/2" />
        <div className="relative z-10">
          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
          <IoFolderOpenOutline className="text-white size-5" />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Dépôt du Dossier</h3>
            <p className="text-gray-600">
              Vous constituez votre dossier avec l&lsquo;aide de nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-1/2 pr-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Réalisation des Travaux</h3>
            <p className="text-gray-600">
              Nos juristes repondent a vos questions grace a l&lsquo;assistance
              legalstart, vos status sont generes et verifies par bos equipes.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
          <FaRegPenToSquare className="text-white size-4" />
          </div>
        </div>
        <div className="w-1/2" />
      </div>
      <div className="flex items-center mb-8">
        <div className="w-1/2" />
        <div className="relative z-10">
          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
          <BiSupport className="text-white size-5" />
          </div>
        </div>
        <div className="w-1/2 pl-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Appel d&lsquo;un Expert Enedis</h3>
            <p className="text-gray-600">
              Vous constituez votre dossier avec l&lsquo;aide de nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 pr-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Mise en Service</h3>
            <p className="text-gray-600">
              Nos juristes repondent a vos questions grace a l&lsquo;assistance
              legalstart, vos status sont generes et verifies par bos equipes.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center">
          <LuFileCheck2 className="text-white size-4" />
          </div>
        </div>
        <div className="w-1/2" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Timeline;
