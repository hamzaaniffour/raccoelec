"use client";
import React, { useEffect, useRef } from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdPaper } from "react-icons/io";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuFileCheck2 } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.timeline-card');
    const icons = document.querySelectorAll('.timeline-icon');

    // Initial state
    gsap.set(cards, { opacity: 0, x: (index) => index % 2 === 0 ? -100 : 100 });
    gsap.set(icons, { scale: 0 });

    // Animate cards and icons when they come into view
    cards.forEach((card, index) => {
      gsap.to(card, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    icons.forEach((icon) => {
      gsap.to(icon, {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: icon,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const timelineItems = [
    {
      title: "Étude de la Demande",
      description: "Nos juristes repondent a vos questions grace a l'assistance legalstart, vos status sont generes et verifies par bos equipes.",
      icon: IoMdPaper,
      isCompleted: true
    },
    {
      title: "Dépôt du Dossier",
      description: "Vous constituez votre dossier avec l'aide de nos équipes.",
      icon: IoFolderOpenOutline,
      isCompleted: true
    },
    {
      title: "Réalisation des Travaux",
      description: "Nos juristes repondent a vos questions grace a l'assistance legalstart, vos status sont generes et verifies par bos equipes.",
      icon: FaRegPenToSquare,
      isCompleted: true
    },
    {
      title: "Appel d'un Expert Enedis",
      description: "Vous constituez votre dossier avec l'aide de nos équipes.",
      icon: BiSupport,
      isCompleted: true
    },
    {
      title: "Mise en Service",
      description: "Nos juristes repondent a vos questions grace a l'assistance legalstart, vos status sont generes et verifies par bos equipes.",
      icon: LuFileCheck2,
      isCompleted: false
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen mb-20 px-5 lg:px-0">
      <div className="w-full max-w-4xl">
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200" />
          
          {timelineItems.map((item, index) => (
            <div className="flex items-center mb-8" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8">
                    <div className="timeline-card bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className={`timeline-icon ${item.isCompleted ? 'bg-green-500' : 'bg-gray-400'} w-8 h-8 rounded-full flex items-center justify-center`}>
                      <item.icon className="text-white size-5" />
                    </div>
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="relative z-10">
                    <div className={`timeline-icon ${item.isCompleted ? 'bg-green-500' : 'bg-gray-400'} w-8 h-8 rounded-full flex items-center justify-center`}>
                      <item.icon className="text-white size-5" />
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="timeline-card bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;