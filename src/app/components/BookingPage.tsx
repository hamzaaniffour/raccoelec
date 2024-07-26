"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

const BookingPage: React.FC = () => {
  const [selectedPower, setSelectedPower] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const router = useRouter();

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPower(e.target.value);
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPower) {
      setError("Please select a power option.");
      return;
    }

    // Save to local storage
    localStorage.setItem("selectedPower", selectedPower);

    // Show step2
    setShowStep2(true);
  };

  const handleSendNow = async () => {
    const formData = localStorage.getItem("selectedPower");
    if (formData) {
      setIsSending(true);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedPower: formData }),
        });

        if (response.ok) {
          // Clear local storage and reset form
          localStorage.removeItem("selectedPower");
          setSelectedPower("");
          setShowStep2(false);

          // Show success message
          alert("Email sent successfully!");
          router.push("/");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setError("Failed to send email. Please try again.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="flex justify-center items-center flex-col mb-20">
        <h2 className="book_title text-[47px] leading-[55px] font-bold text-[#96cd32] text-center mb-6 max-w-[600px]">
          Informations générales sur le prix et les délais d&#39;un raccordement
        </h2>
      </div>
      <div>
        <p className="text-zinc-950">
          Le <strong>prix</strong> et les <strong>délais</strong> d&#39;un
          raccordement en consommation dépendent de la solution technique qui
          est fonction de :
        </p>
        <ul className="tempslist mt-5 mb-16">
          <li>
            la distance entre l&#39;installation électrique de votre local et le
            réseau de distribution d&#39;électricité ;
          </li>
          <li>la puissance électrique demandée.</li>
        </ul>
        <h3 className="book_title text-[34px] leading-[41px] font-bold text-[#1523dc] mb-4">
          Votre estimation en moins de 3 questions
        </h3>
        <p className="text-zinc-950 font-semibold mb-3">
          Les informations mentionnées visent vous fournir des repères
          simplifiés et préalables une demande raccordement en consommation.
          Elles n&#39;ont pas valeur d&#39;engagement.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-10 bg-[#e5ebed]" id="step1">
          <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-8">
            1- Quelle est la puissance électrique maximale souhaitée ?
          </h4>

          <div className="lg:flex mb-8">
            <div className="lg:w-6/12">
              <div className="flex justify-center items-center gap-2">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio1"
                    name="power"
                    aria-describedby="helper-radio-text1"
                    type="radio"
                    value="36kVA"
                    checked={selectedPower === "36kVA"}
                    onChange={handleRadioChange}
                    className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="helper-radio1"
                    className="font-medium text-xl text-gray-900 dark:text-gray-300"
                  >
                    Inférieure ou égale 36 kVA
                  </label>
                  <p
                    id="helper-radio-text1"
                    className="text-sm font-normal text-gray-500 dark:text-gray-300"
                  >
                    (logements, petits commerces)
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12">
              <div className="flex justify-center items-center gap-2">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio2"
                    name="power"
                    aria-describedby="helper-radio-text2"
                    type="radio"
                    value="greater36kVA"
                    checked={selectedPower === "greater36kVA"}
                    onChange={handleRadioChange}
                    className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="helper-radio2"
                    className="font-medium text-xl text-gray-900 dark:text-gray-300"
                  >
                    Supérieure 36 kVA
                  </label>
                  <p
                    id="helper-radio-text2"
                    className="text-sm font-normal text-gray-500 dark:text-gray-300"
                  >
                    (entreprises avec beaucoup d&#39;équipements électriques
                    spécifiques)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              className="back_button py-2.5 px-8 rounded-md text-md font-bold transition-all"
              onClick={() => setSelectedPower("")}
            >
              Réinitialiser
            </button>
            <button
              type="submit"
              className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all"
            >
              Valider
            </button>
          </div>
        </div>
        <div
          className={`p-10 bg-[#e5ebed] ${showStep2 ? "" : "hidden"}`}
          id="step2"
        >
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

          <ul className="tempslist mt-5 mb-5">
            <li className="mb-3">
              <strong>Si la puissance souhaitée est disponible :</strong>
              <br />
              la solution technique est un branchement, voire une extension du
              réseau de distribution d&#39;électricité en complément du
              branchement, en fonction de la distance entre l&#39;installation
              électrique de votre local et le réseau de distribution
              d&#39;électricité.
            </li>
            <li>
              <strong>
                Si la puissance souhaitée n&#39;est pas disponible :
              </strong>
              <br />
              la solution technique est le renforcement du réseau ou
              l&#39;implantation d&#39;un nouveau poste de distribution
              d&#39;électricité pour augmenter la puissance disponible sur le
              réseau. Il s&#39;agit de travaux significatifs impliquant des
              études approfondies.
            </li>
          </ul>

          <h2 className="book_title text-2xl leading-[55px] font-bold text-[#96cd32] mb-3">
            Prix moyen
          </h2>
          <p className="text-zinc-950 mb-8">
            Le prix est variable en fonction de l&#39;ampleur des travaux
            réaliser.
            <br />
            Une étude technique et financière par raccoelec est nécessaire.
          </p>

          <h2 className="book_title text-2xl leading-[55px] font-bold text-[#96cd32] mb-3">
            Délai prévisionnel
          </h2>
          <p className="text-zinc-950 mb-8">
            Si la puissance souhaitée est disponible sur le réseau, le délai
            minimum est estimé entre 4 et 6 mois (selon la solution technique
            retenue).
            <br />
            Il prend en compte, sous condition de réalisation de vos démarches
            et travaux dans des délais compatibles :
          </p>

          <ul className="tempslist mt-5 mb-5">
            <li>l&#39;établissement du devis (estimé 6 semaines) ;</li>
            <li>
              la réalisation des travaux (estimée entre 8 et 16 semaines) ;
            </li>
            <li>
              la mise en service de votre installation électrique (estimée entre
              1 et 2 semaines).
            </li>
          </ul>

          <p className="text-zinc-950 mb-5">
            Si la puissance souhaitée n&#39;est pas disponible sur le réseau, le
            délai minimum est estimé entre 6 et 9 mois (selon la solution
            technique retenue).
            <br />
            Il prend en compte, sous condition de réalisation de vos démarches
            et travaux dans des délais compatibles :
          </p>

          <ul className="tempslist mt-5 mb-8">
            <li>l&#39;établissement du devis (estimé entre 6 12 semaines) ;</li>
            <li>
              la réalisation des travaux (estimée entre 16 et 22 semaines) ;
            </li>
            <li>
              la mise en service de votre installation électrique (estimée entre
              1 et 2 semaines).
            </li>
          </ul>

          <p className="text-zinc-950 mb-8 font-semibold">
            Vous voulez aller plus loin dans votre estimation, sachez que nous
            mettons votre disposition un outil de simulation vous permettant de
            réaliser une estimation plus précise adaptée votre situation.
          </p>

          <div className="flex justify-end items-end">
            <button
              type="button"
              className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all"
              onClick={handleSendNow}
              disabled={isSending}
            >
              {isSending
                ? "La procédure en cours..."
                : "Réaliser une simulation"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
