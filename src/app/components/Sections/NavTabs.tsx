"use client";
import React, { useState } from "react";
import { Open_Sans } from "next/font/google";
import Content1 from "./TabsContent/Content1";
import Content2 from "./TabsContent/Content2";
import Content3 from "./TabsContent/Content3";

const open_sans = Open_Sans({ subsets: ["latin"], weight: "800" });

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      title: "Raccordement électrique",
      content: Content1
    },
    {
      id: 2,
      title: "Modification de branchement",
      content: Content2
    },
    {
      id: 3,
      title: "Mise en service",
      content: Content3
    }
  ];

  return (
    <div className="mt-24 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col mb-9">
          <h3 className={`book_title text-2xl text-zinc-950 font-bold text-center mb-2`}>
            Nous sommes là pour vous accompagner
          </h3>
          <p className="text-zinc-700 mb-10 text-[16px] max-w-[800px] text-center">
            Découvrez nos services complets de raccordement électrique,
            comprenant l'installation, la maintenance préventive, le dépannage
            d'urgence et la conformité aux normes en vigueur. Nos électriciens
            certifiés sont là pour vous garantir une tranquillité d'esprit
            totale.
          </p>
        </div>

        <div>
          <div className="tabs flex justify-center items-center flex-col gap-10">
            <div className="flex">
              <ul className="flex flex-wrap transition-all duration-300 overflow-hidden justify-center items-center gap-4">
                {tabData.map((tab) => (
                  <li key={tab.id} className="tabnav">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-block font-semibold ${
                        activeTab === tab.id
                          ? "text-white py-[15px] px-[50px] bg-transparent bg-gradient-to-r from-[#2575fc] to-[#6a11cb] border border-solid border-transparent rounded-md"
                          : "text-center py-[15px] px-[50px] text-[#1523dc] bg-white border border-solid rounded-md border-[#EBF2FB]"
                      }`}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              {tabData.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "block" : "hidden"}
                >
                  <tab.content />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;