// "use client";
// // components/ConditionalForm.tsx
// import { useState } from "react";

// const ConditionalForm = () => {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [subOption, setSubOption] = useState<string | null>(null);
//   const [finalOption, setFinalOption] = useState<string | null>(null);
//   const [showResults, setShowResults] = useState<boolean>(false);
//   const [showSubContent, setShowSubContent] = useState<boolean>(false); // For Oui/No content
//   const [showFinalContent, setShowFinalContent] = useState<boolean>(false); // For address options
//   const [first_button, setFirst_button] = useState<boolean>(true);

//   const handleReset = () => {
//     setSelectedOption(null);
//     setSubOption(null);
//     setFinalOption(null);
//     setShowResults(false);
//     setShowSubContent(false);
//     setShowFinalContent(false); // Reset final content visibility
//   };

//   const handleValidate = () => {
//     setShowResults(true);
//   };

//   const handleShowContent = () => {
//     setShowSubContent(true); // Show content based on the selected sub-option
//     setFirst_button(false);

//   };

//   const handleShowFinalContent = () => {
//     setShowFinalContent(true); // Show content based on the selected final option
//   };

//   return (
// <div className="max-w-5xl mx-auto py-20">
//   <div className="flex justify-center items-center flex-col mb-20">
//     <h2 className="book_title text-[47px] leading-[55px] font-bold text-[#96cd32] text-center mb-6 max-w-[600px]">
//       Informations générales sur le prix et les délais d&#39;un raccordement
//     </h2>
//   </div>

//   <div>
//     <p className="text-zinc-950">
//       Le <strong>prix</strong> et les <strong>délais</strong> d&#39;un
//       raccordement en consommation dépendent de la solution technique qui
//       est fonction de :
//     </p>
//     <ul className="tempslist mt-5 mb-16">
//       <li>
//         la distance entre l&#39;installation électrique de votre local et le
//         réseau de distribution d&#39;électricité ;
//       </li>
//       <li>la puissance électrique demandée.</li>
//     </ul>
//     <h3 className="book_title text-[34px] leading-[41px] font-bold text-[#1523dc] mb-4">
//       Votre estimation en moins de 3 questions
//     </h3>
//     <p className="text-zinc-950 font-semibold mb-3">
//       Les informations mentionnées visent à vous fournir des repères
//       simplifiés et préalables à une demande de raccordement en
//       consommation. Elles n&#39;ont pas valeur d&#39;engagement.
//     </p>
//   </div>

//   <div className="p-10 bg-[#e5ebed]" id="step1">
//       <form>

          // <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-8">
          //   1- Quelle est la puissance électrique maximale souhaitée ?
          // </h4>

//         <div className="flex justify-start items-center mb-16 gap-10">
//         <label>
//           <input
//             type="radio"
//             name="mainOption"
//             value="Inférieure ou égale 36 kVA"
//             checked={selectedOption === "Inférieure ou égale 36 kVA"}
//             onChange={(e) => setSelectedOption(e.target.value)}
//             className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//           />
//           Inférieure ou égale 36 kVA
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="mainOption"
//             value="Supérieure 36 kVA"
//             checked={selectedOption === "Supérieure 36 kVA"}
//             onChange={(e) => setSelectedOption(e.target.value)}
//             className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//           />Supérieure 36 kVA
//         </label>
//         </div>

//       {/* Conditional Render for Infèreie ou égale 36 kVA */}
//       {showResults && selectedOption === "Supérieure 36 kVA" && (
//         <>
//         <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-0.5">
//         2- Votre terrain est-il déj  viabilisé ?
//           </h4>
//           <p className="text-xs text-zinc-900  mb-3">(Présence d&#39;un coffret électrique en limite de votre terrain)</p>
//         <form className="flex justify-start items-center mb-16 gap-10">
//           <label>
//             <input
//               type="radio"
//               name="subOption"
//               value="Oui"
//               checked={subOption === "Oui"}
//               onChange={(e) => setSubOption(e.target.value)}
//               className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             Oui
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="subOption"
//               value="No"
//               checked={subOption === "No"}
//               onChange={(e) => setSubOption(e.target.value)}
//               className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//             />
//             No
//           </label>
//         </form>
//         <div className="flex justify-between items-center">

//         </div>
//         </>
//           )}

//         <div className="flex justify-between items-center">
//           {first_button && (
//             <>
//             <button type="button" onClick={handleReset} className="back_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
//               Réinitialiser
//             </button>
//             <button type="button" id="first_next" onClick={handleValidate} className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
//               Valider
//             </button>
//             </>
//           )}

//         </div>

//       </form>

//         </div>

//       {/* Conditional Render for Inférieure ou égale 36 kVA */}
//       {showResults && selectedOption === "Inférieure ou égale 36 kVA" && (
//         <div>Simple Page 1</div>
//       )}

//       {/* Conditional Render for Oui */}
//       {showSubContent && subOption === "Oui" && <div>Simple Page</div>}

//       {/* Conditional Render for No */}
//       {showSubContent && subOption === "No" && (
//         <div>
//           <form>
//             <label>
//               <input
//                 type="radio"
//                 name="finalOption"
//                 value="Ma rue 1"
//                 checked={finalOption === "Ma rue 1"}
//                 onChange={(e) => setFinalOption(e.target.value)}
//               />
//               Ma rue 1
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="finalOption"
//                 value="Ma rue 2"
//                 checked={finalOption === "Ma rue 2"}
//                 onChange={(e) => setFinalOption(e.target.value)}
//               />
//               Ma rue 2
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="finalOption"
//                 value="Ma rue 3"
//                 checked={finalOption === "Ma rue 3"}
//                 onChange={(e) => setFinalOption(e.target.value)}
//               />
//               Ma rue 3
//             </label>
//           </form>

//           {/* Button to Show Content for Address Options */}
//           {finalOption && (
//             <button type="button" onClick={handleShowFinalContent}>
//               Show Address Content
//             </button>
//           )}

//           {/* Conditional Render for Address Options */}
//           {showFinalContent && finalOption === "Ma rue 1" && (
//             <div>Content for RUE 1</div>
//           )}
//           {showFinalContent && finalOption === "Ma rue 2" && (
//             <div>Content for RUE 2</div>
//           )}
//           {showFinalContent && finalOption === "Ma rue 3" && (
//             <div>Content for RUE 3</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConditionalForm;

"use client";
// components/ConditionalForm.tsx
import { useEffect, useState } from "react";
import FirstOption from "./Booking/No/FirstOption";

const ConditionalForm = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [subOption, setSubOption] = useState<string | null>(null);
  const [finalOption, setFinalOption] = useState<string | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showSubContent, setShowSubContent] = useState<boolean>(false);
  const [showFinalContent, setShowFinalContent] = useState<boolean>(false);
  const [showSimulationButton, setShowSimulationButton] =
    useState<boolean>(false);

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  // Clear local storage and reset state when the component mounts
  useEffect(() => {
    localStorage.removeItem("formData"); // Clear local storage on page reload
    // Reset all state variables to ensure no radio buttons are checked
    setSelectedOption(null);
    setSubOption(null);
    setFinalOption(null);
    setShowResults(false);
    setShowSubContent(false);
    setShowFinalContent(false);
    setShowSimulationButton(false);
  }, []);

  const handleReset = () => {
    setSelectedOption(null);
    setSubOption(null);
    setFinalOption(null);
    setShowResults(false);
    setShowSubContent(false);
    setShowFinalContent(false);
    setShowSimulationButton(false);
    localStorage.removeItem("formData"); // Clear local storage
  };

  const handleValidate = () => {
    setShowResults(true);
    setBtn1(false);
    setBtn2(true);
    saveToLocalStorage(); // Save data on validate
    if (selectedOption === "Inférieure ou égale 36 kVA") {
      setShowSimulationButton(true);
    }
  };

  const handleShowContent = () => {
    setShowSubContent(true);
    setBtn2(false);
    setBtn3(true);
    saveToLocalStorage(); // Save data when showing content
    if (subOption === "Oui") {
      setShowSimulationButton(true);
    }
  };

  const handleResetSubOptions = () => {
    setSubOption(null);
    setShowSubContent(false);
    setShowSimulationButton(false);
    saveToLocalStorage(); // Save reset state
  };

  const handleShowFinalContent = () => {
    setShowFinalContent(true);
    saveToLocalStorage(); // Save data when showing final content
    if (finalOption) {
      setShowSimulationButton(true);
    }
  };

  const handleResetFinalOptions = () => {
    setFinalOption(null);
    setShowFinalContent(false);
    setShowSimulationButton(false);
    saveToLocalStorage(); // Save reset state
  };

  const saveToLocalStorage = () => {
    const formData = {
      selectedOption,
      subOption,
      finalOption,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleSimulation = () => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      console.log("Sending the following data via email:", formData);
      // Here you would typically send the data to your backend for email processing
      localStorage.removeItem("formData"); // Remove data from local storage after sending
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
          Les informations mentionnées visent à vous fournir des repères
          simplifiés et préalables à une demande de raccordement en
          consommation. Elles n&#39;ont pas valeur d&#39;engagement.
        </p>
      </div>

      <div className="p-10 bg-[#e5ebed]" id="step1">

      <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-8">
            1- Quelle est la puissance électrique maximale souhaitée ?
          </h4>

        {/* Initial Form */}
      <form className="flex justify-start items-center gap-10 mb-16 pl-5">
      <label className="flex justify-start items-center font-medium text-xl text-black dark:text-gray-300">
          <input
            type="radio"
            name="mainOption"
            value="Inférieure ou égale 36 kVA"
            checked={selectedOption === "Inférieure ou égale 36 kVA"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              saveToLocalStorage(); // Save selection
            }}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="flex justify-start items-start flex-col">
            <p>Inférieure ou égale 36 kVA</p>
            <p className="!text-sm">(logements, petits commerces)</p>
          </div>
        </label>
        <label className="flex justify-start items-center font-medium text-xl text-gray-900 dark:text-gray-300">
          <input
            type="radio"
            name="mainOption"
            value="Supérieure 36 kVA"
            checked={selectedOption === "Supérieure 36 kVA"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              saveToLocalStorage(); // Save selection
            }}
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className="flex justify-start items-start flex-col">
            <p>Supérieure 36 kVA</p>
            <p className="!text-sm">(logements, petits commerces)</p>
          </div>
        </label>
      </form>


      {/* Conditional Render for Supérieure 36 kVA */}
      {showResults && selectedOption === "Supérieure 36 kVA" && (
        <>
        <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-0.5 mt-10">
        2- Votre terrain est-il déj  viabilisé ?
          </h4>
          <p className="text-xs mb-5 text-zinc-800">(Présence d&#39;un coffret électrique en limite de votre terrain)</p>
        <form className="flex justify-start items-center gap-10 mb-16 pl-5">
        <label className="font-medium text-xl text-black dark:text-gray-300">
            <input
              type="radio"
              name="subOption"
              value="Oui"
              checked={subOption === "Oui"}
              onChange={(e) => {
                setSubOption(e.target.value);
                saveToLocalStorage(); // Save selection
              }}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            Oui
          </label>
          <label className="font-medium text-xl text-black dark:text-gray-300">
            <input
              type="radio"
              name="subOption"
              value="No"
              checked={subOption === "No"}
              onChange={(e) => {
                setSubOption(e.target.value);
                saveToLocalStorage(); // Save selection
              }}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            No
          </label>
        </form>
        </>
      )}


      {/* Conditional Render for No */}
      {showSubContent && subOption === "No" && (
        <div>
          <h4 className="text-zinc-950 text-[16px] leading-[22px] mb-0.5 mt-10">
          3- Le réseau de distribution d'électricité est-il proche de votre terrain ?
          </h4>
          <p className="text-xs mb-5 text-zinc-800">(si votre terrain a un caractère spécifique, tel qu&#39;un terrain sans accès direct   la voie publique, sachez que l&#39;estimation proposée ici n&#39;est pas adaptée. Une étude précise par raccoelec sera nécessaire)</p>
          <form className="flex justify-start items-start gap-y-4 flex-col pl-5 mb-16">
          <label className="flex justify-start items-center font-medium text-xl text-black dark:text-gray-300">
              <input
                type="radio"
                name="finalOption"
                value="Ma rue 1"
                checked={finalOption === "Ma rue 1"}
                onChange={(e) => {
                  setFinalOption(e.target.value);
                  saveToLocalStorage(); // Save selection
                }}
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="flex justify-start items-start flex-col">
                <p>Ma rue est totalement desservie en électricité</p>
                <p className="!text-sm">(vous êtes encadré par des voisins disposant de l&#39;électricité, le réseau passe a priori devant votre terrain)</p>
              </div>
            </label>
            <label className="flex justify-start items-center font-medium text-xl text-black dark:text-gray-300">
              <input
                type="radio"
                name="finalOption"
                value="Ma rue 2"
                checked={finalOption === "Ma rue 2"}
                onChange={(e) => {
                  setFinalOption(e.target.value);
                  saveToLocalStorage(); // Save selection
                }}
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="flex justify-start items-start flex-col">
                <p>Ma rue est partiellement desservie en électricité</p>
                <p className="!text-sm">(j&#39;ai un seul voisin qui dispose de l&#39;électricité, le réseau est présent dans ma rue mais   priori il ne vient pas jusqu&#39;  mon terrain)</p>
              </div>
            </label>
            <label className="font-medium text-xl text-black dark:text-gray-300">
              <input
                type="radio"
                name="finalOption"
                value="Ma rue 3"
                checked={finalOption === "Ma rue 3"}
                onChange={(e) => {
                  setFinalOption(e.target.value);
                  saveToLocalStorage(); // Save selection
                }}
                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              Ma rue n&#39;est pas desservie en électricité
            </label>
          </form>
        </div>
      )}



      {/* Conditional Render for Address Options */}
      {showFinalContent && finalOption === "Ma rue 1" && (
            <div>
              <FirstOption />
              {showSimulationButton && (
                <button type="button" onClick={handleSimulation}>
                  Réaliser une simulation
                </button>
              )}
            </div>
          )}
          {showFinalContent && finalOption === "Ma rue 2" && (
            <div>
              Content for RUE 2
              {showSimulationButton && (
                <button type="button" onClick={handleSimulation}>
                  Réaliser une simulation
                </button>
              )}
            </div>
          )}
          {showFinalContent && finalOption === "Ma rue 3" && (
            <div>
              Content for RUE 3
              {showSimulationButton && (
                <button type="button" onClick={handleSimulation}>
                  Réaliser une simulation
                </button>
              )}
            </div>
          )}



{/* Buttons for First Form */}
{btn1 && (
        <>
        <div className="flex justify-between items-center">
      <button type="button" onClick={handleReset} className="back_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
          Réinitialiser
        </button>
        <button type="button" onClick={handleValidate} className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
          Validate
        </button>
      </div>
        </>
      )}

      {/* Buttons for Oui or No */}
      {btn2 && (
        <div className="flex justify-between items-center">
        <button type="button" onClick={handleResetSubOptions} className="back_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
          Réinitialiser
        </button>
        <button type="button" onClick={handleShowContent} className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
          Valider
        </button>
      </div>
      )}

      {/* Buttons for Address Options */}
      {btn3 && (
            <div className="flex justify-between items-center">
              <button type="button" onClick={handleResetFinalOptions} className="back_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
                Réinitialiser
              </button>
              <button type="button" onClick={handleShowFinalContent} className="next_button py-2.5 px-8 rounded-md text-md font-bold transition-all">
                Valider
              </button>
            </div>
      )}

{/* Conditional Render for Inférieure ou égale 36 kVA */}
{showResults && selectedOption === "Inférieure ou égale 36 kVA" && (
        <div>
          Simple Page 1
          {showSimulationButton && (
            <button type="button" onClick={handleSimulation}>
              Réaliser une simulation
            </button>
          )}
        </div>
      )}

      {/* Conditional Render for Oui */}
      {showSubContent && subOption === "Oui" && (
        <div>
          Simple Page
          {showSimulationButton && (
            <button type="button" onClick={handleSimulation}>
              Réaliser une simulation
            </button>
          )}
        </div>
      )}


      </div>

    </div>
  );
};

export default ConditionalForm;
