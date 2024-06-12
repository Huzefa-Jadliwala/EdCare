/* eslint-disable react/prop-types */

const CategoryPopUp = ({
  KindertageseinrichtungenSelected,
  SchulsozialarbeitSelected,
  JugendberufshilfenSelected,
  SchulenSelected,
  toggleKindertageseinrichtungen,
  toggleSchulsozialarbeit,
  toggleJugendberufshilfen,
  toggleSchulen,
}) => {
  return (
    <>
      <div className="flex justify-between max-w-6xl mx-auto p-3">
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
            SchulenSelected ? "bg-slate-500" : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={toggleSchulen}
        >
          Schulen
        </button>
      </div>
      <div className="flex justify-between max-w-6xl mx-auto p-3">
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
            SchulsozialarbeitSelected ? "bg-slate-500" : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={toggleSchulsozialarbeit}
        >
          Schulsozialarbeit
        </button>
      </div>
    </>
  );
};

export default CategoryPopUp;
