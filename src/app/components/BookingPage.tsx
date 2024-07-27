"use client";
// Import the necessary modules from Next.js and React
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

// Create a functional component for the BookingPage
const BookingPage: React.FC = () => {
  // State variables for selected power, error message, and step visibility
  const [selectedPower, setSelectedPower] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showStep2, setShowStep2] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  // Get the router object from Next.js
  const router = useRouter();

  // Handle radio button change event
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPower(e.target.value);
    setError("");
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPower) {
      setError("Veuillez sélectionner une option de puissance.");
      return;
    }

    // Save the selected power to local storage
    localStorage.setItem("selectedPower", selectedPower);

    // Show the second step
    setShowStep2(true);
  };

  // Handle "Réaliser une simulation" button click
  const handleSendNow = async () => {
    const formData = localStorage.getItem("selectedPower");
    if (formData) {
      setIsSending(true);
      try {
        // Send a POST request to the server to send an email
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedPower: formData }),
        });

        // Check if the response is successful
        if (response.ok) {
          // Clear local storage and reset the form
          localStorage.removeItem("selectedPower");
          setSelectedPower("");
          setShowStep2(false);

          // Show a success message
          alert("L'email a été envoyé avec succès !");
          router.push("/");
        } else {
          // Get the error message from the server
          const errorData = await response.json();
          throw new Error(errorData.message || "Échec de l'envoi de l'email");
        }
      } catch (error) {
        // Log the error and display an error message
        console.error("Erreur lors de l'envoi de l'email:", error);
        setError("Échec de l'envoi de l'email. Veuillez réessayer.");
      } finally {
        // Reset the loading state
        setIsSending(false);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-20">
      {/* Page title and description */}
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
          Les informations mentionnées visent à vous fournir des repères
          simplifiés et préalables à une demande de raccordement en
          consommation. Elles n&#39;ont pas valeur d&#39;engagement.
        </p>
      </div>
      {/* Form for selecting the power option */}
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
                    Inférieure ou égale à 36 kVA
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
                    Supérieure à 36 kVA
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
          {/* Display error message if no option is selected */}
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
        {/* Second step with the selected option */}
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
              <strong>Si la puissance souhaitée n&#39;est pas disponible :</strong>
              <br />
              la solution technique est le renforcement du réseau ou
              l&#39;implantation d&#39;un nouveau poste de distribution d&#39;électricité
              pour augmenter la puissance disponible sur le réseau. Il s&#39;agit
              de travaux significatifs impliquant des études approfondies.
            </li>
          </ul>

          <h2 className="book_title text-2xl leading-[55px] font-bold text-[#96cd32] mb-3">
            Prix moyen
          </h2>
          <p className="text-zinc-950 mb-8">
            Le prix est variable en fonction de l&#39;ampleur des travaux à
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
            <li>l&#39;établissement du devis (estimé à 6 semaines) ;</li>
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
            <li>l&#39;établissement du devis (estimé entre 6 à 12 semaines) ;</li>
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
            mettons à votre disposition un outil de simulation vous permettant de
            réaliser une estimation plus précise adaptée à votre situation.
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