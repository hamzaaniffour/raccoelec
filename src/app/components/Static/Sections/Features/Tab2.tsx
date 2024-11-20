import React from "react";
import Image from "next/image";

const Tab2 = () => {
  const services = [
    {
      id: 1,
      imgSrc:
        "https://raccoelec.fr/wp-content/uploads/2024/06/cp-enedis-et-we-love-green-inaugurent-la-saison-des-festivals-decarbones-home-desktop.jpg",
      title: "Viabilisation de terrain",
      description:
        "Poser un coffret en limite de votre propriété. Reliez votre terrain au réseau électrique dEnedis.",
      buttonText: "Faire ma demande",
      buttonLink: "/modification-de-branchement",
    },
    {
      id: 2,
      imgSrc:
        "https://raccoelec.fr/wp-content/uploads/2024/06/shutterstock_1342362014.jpg",
      title: "Modification de branchement",
      description:
        "Déplacement d’un branchement électrique (aérien ou sous-terrain).",
      buttonText: "Faire ma demande",
      buttonLink: "/modification-de-branchement",
    },
    {
      id: 3,
      imgSrc:
        "https://raccoelec.fr/wp-content/uploads/2024/06/cp-enedis-et-we-love-green-inaugurent-la-saison-des-festivals-decarbones-home-desktop.jpg",
      title: "Suppression de branchement électrique",
      description: "retrait ou suppression d’un compteur Linky.",
      buttonText: "Faire ma demande",
      buttonLink: "/modification-de-branchement",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {services.map(
        (service: {
          id: React.Key | null | undefined;
          imgSrc: string | undefined;
          title:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | Promise<React.AwaitedReactNode>
            | null
            | undefined;
          description:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined;
          buttonLink: string | undefined;
          buttonText:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <div
            key={service.id}
            className="w-full p-4 border-[1px] border-[#1523dc] rounded-2xl group-hover:scale-105 group-focus:scale-105 transition-transform duration-[700ms] delay-[100ms] taos:opacity-0 taos:translate-y-[100px] [animation-iteration-count:infinite] taos-init"
            data-taos-class="w-full p-4 border-[1px] border-[#1523dc] rounded-2xl group-hover:scale-105 group-focus:scale-105 transition-transform duration-[700ms] delay-[100ms] taos:opacity-0 taos:translate-y-[100px] [animation-iteration-count:infinite] taos-init"
          >
            <Image
              className="rounded-2xl"
              src={service.imgSrc!}
              alt="Image"
              width={500}
              height={500}
            />
            <h3 className="text-zinc-900 text-center mt-3 text-[20px] font-[700] mb-3">
              {service.title}
            </h3>
            <p className="text-[#69798d] text-[15px] text-center mb-5">
              {service.description}
            </p>
            <div className="flex justify-center items-center">
              <a href={service.buttonLink}>
                <button className="text-white font-semibold text-md bg-[#1523dc] py-3.5 px-8 rounded-md">
                  {service.buttonText}
                </button>
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Tab2;
