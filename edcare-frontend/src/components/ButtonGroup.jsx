/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CategoryPopUp from "./CategoryPopUp";

const ButtonGroup = ({
  KindertageseinrichtungenSelected,
  setKindertageseinrichtungenSelected,
  SchulsozialarbeitSelected,
  setSchulsozialarbeitSelected,
  JugendberufshilfenSelected,
  setJugendberufshilfenSelected,
  SchulenSelected,
  setSchulenSelected,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleKindertageseinrichtungen = () => {
    setKindertageseinrichtungenSelected(!KindertageseinrichtungenSelected);
  };

  const toggleSchulsozialarbeit = () => {
    setSchulsozialarbeitSelected(!SchulsozialarbeitSelected);
  };

  const toggleJugendberufshilfen = () => {
    setJugendberufshilfenSelected(!JugendberufshilfenSelected);
  };

  const toggleSchulen = () => {
    setSchulenSelected(!SchulenSelected);
  };

  if (isMobile) {
    return (
      <div className="relative">
        <button
          className="bg-slate-400 text-black font-bold py-2 px-6 rounded-md w-full h-15  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-center"
          onClick={toggleCategories}
        >
          Categories
        </button>
        {showCategories && (
          <CategoryPopUp
            KindertageseinrichtungenSelected={KindertageseinrichtungenSelected}
            toggleKindertageseinrichtungen={toggleKindertageseinrichtungen}
            SchulsozialarbeitSelected={SchulsozialarbeitSelected}
            toggleSchulsozialarbeit={toggleSchulsozialarbeit}
            JugendberufshilfenSelected={JugendberufshilfenSelected}
            toggleJugendberufshilfen={toggleJugendberufshilfen}
            SchulenSelected={SchulenSelected}
            toggleSchulen={toggleSchulen}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
      <button
        className={`${
          KindertageseinrichtungenSelected ? "bg-slate-500" : "bg-slate-100"
        } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
        onClick={toggleKindertageseinrichtungen}
      >
        Kindertageseinrichtungen
      </button>
      <button
        className={`${
          SchulsozialarbeitSelected ? "bg-slate-500" : "bg-slate-100"
        } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
        onClick={toggleSchulsozialarbeit}
      >
        Schulsozialarbeit
      </button>
      <button
        className={`${
          JugendberufshilfenSelected ? "bg-slate-500" : "bg-slate-100"
        } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
        onClick={toggleJugendberufshilfen}
      >
        Jugendberufshilfen
      </button>
      <button
        className={`${
          SchulenSelected ? "bg-slate-500" : "bg-slate-100"
        } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
        onClick={toggleSchulen}
      >
        Schulen
      </button>
    </div>
  );
};

export default ButtonGroup;
