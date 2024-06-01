import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.style.css";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import schoolMarker from "../assets/school-marker.png";
import careerAssistant from "../assets/career-assistant.png";
import socialWork from "../assets/social-work.png";
import hostel from "../assets/Hostel.png";
import favLocation from "../assets/fav-location.png";
import HomeLocation from "../assets/home-location.png";
import MarkerClusterGroup from "react-leaflet-cluster";
import InfoPopup from "../components/InfoPopup";
import LeafletControlGeocoder from "./LeafletControlGeodecoder";
import { useDispatch } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../redux/user/userSlice";

import { useSelector } from "react-redux";

export default function Map() {
  const dispatch = useDispatch();
  const [schulsozialarbeitdata, setSchulsozialarbeitData] = useState([]);
  const [kindertageseinrichtungendata, setKindertageseinrichtungenData] =
    useState([]);
  const [jugendberufshilfendata, setJugendberufshilfenData] = useState([]);
  const [schulendata, setSchulenData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchDataSchulsozialarbeit = async () => {
      try {
        const response = await fetch("/api/data/schulsozialarbeit");
        const result = await response.json();
        setSchulsozialarbeitData(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    const fetchDataKindertageseinrichtungen = async () => {
      try {
        const response = await fetch("/api/data/kindertageseinrichtungen");
        const result = await response.json();
        setKindertageseinrichtungenData(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    const fetchDataJugendberufshilfen = async () => {
      try {
        const response = await fetch("/api/data/jugendberufshilfen");
        const result = await response.json();
        setJugendberufshilfenData(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    const fetchDataSchulen = async () => {
      try {
        const response = await fetch("/api/data/schulen");
        const result = await response.json();
        setSchulenData(result);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchDataSchulsozialarbeit();
    fetchDataJugendberufshilfen();
    fetchDataKindertageseinrichtungen();
    fetchDataSchulen();
  }, []);

  const customSchulen = new Icon({
    iconUrl: schoolMarker,
    iconSize: [38, 38],
  });

  const customJugendberufshilfen = new Icon({
    iconUrl: careerAssistant,
    iconSize: [38, 38],
  });

  const customSchulsozialarbeit = new Icon({
    iconUrl: socialWork,
    iconSize: [38, 38],
  });

  const customKindertageseinrichtungen = new Icon({
    iconUrl: hostel,
    iconSize: [38, 38],
  });

  const customfavIcon = new Icon({ iconUrl: favLocation, iconSize: [35, 35] });
  const customHomeIcon = new Icon({
    iconUrl: HomeLocation,
    iconSize: [35, 35],
  });

  const [
    KindertageseinrichtungenSelected,
    setKindertageseinrichtungenSelected,
  ] = useState(true);
  const [SchulsozialarbeitSelected, setSchulsozialarbeitSelected] =
    useState(true);
  const [JugendberufshilfenSelected, setJugendberufshilfenSelected] =
    useState(true);
  const [SchulenSelected, setSchulenSelected] = useState(true);

  const handleRemoveFav = async () => {
    try {
      dispatch(updateStart());
      const finalFormData = { favouriteX: 0.0, favouriteY: 0.0 };
      const res = await fetch(`/api/user/${currentUser._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateFailure(data.error || "Failed to update favourite."));
        return;
      }
      dispatch(updateSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(updateFailure(err.toString()));
    }
  };

  const handleRemoveHome = async () => {
    try {
      dispatch(updateStart());
      const finalFormData = { homeX: 0.0, homeY: 0.0 };
      const res = await fetch(`/api/user/${currentUser._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateFailure(data.error || "Failed to update favourite."));
        return;
      }
      dispatch(updateSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(updateFailure(err.toString()));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <button
          className={`${
            KindertageseinrichtungenSelected === true
              ? "bg-slate-500"
              : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={() => {
            setKindertageseinrichtungenSelected(
              !KindertageseinrichtungenSelected
            );
          }}
        >
          Kindertageseinrichtungen
        </button>
        <button
          className={`${
            SchulsozialarbeitSelected === true ? "bg-slate-500" : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={() => {
            setSchulsozialarbeitSelected(!SchulsozialarbeitSelected);
          }}
        >
          Schulsozialarbeit
        </button>
        <button
          className={`${
            JugendberufshilfenSelected === true
              ? "bg-slate-500"
              : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={() => {
            setJugendberufshilfenSelected(!JugendberufshilfenSelected);
          }}
        >
          Jugendberufshilfen
        </button>
        <button
          className={`${
            SchulenSelected === true ? "bg-slate-500" : "bg-slate-100"
          } text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
          onClick={() => {
            setSchulenSelected(!SchulenSelected);
          }}
        >
          Schulen
        </button>
      </div>
      <MapContainer center={[50.833332, 12.916667]} zoom={12} className="h-50">
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <LeafletControlGeocoder />
        {currentUser && currentUser.homeY && currentUser.homeX && (
          <Marker
            position={[currentUser.homeX, currentUser.homeY]}
            icon={customHomeIcon}
            zIndexOffset={1}
          >
            <Popup eventPropagation={true}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleRemoveHome}
              >
                Remove Home
              </button>
            </Popup>
          </Marker>
        )}

        {currentUser && currentUser.favouriteX && currentUser.favouriteY && (
          <Marker
            position={[currentUser.favouriteY, currentUser.favouriteX]}
            icon={customfavIcon}
            zIndexOffset={1}
          >
            <Popup eventPropagation={true}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleRemoveFav}
              >
                Remove Favourite
              </button>
            </Popup>
          </Marker>
        )}
        {JugendberufshilfenSelected && (
          <MarkerClusterGroup>
            {jugendberufshilfendata.map((marker) => (
              <Marker
                position={[marker.Y, marker.X]}
                key={marker._id}
                icon={customJugendberufshilfen}
              >
                <Popup>
                  <InfoPopup data={marker}></InfoPopup>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}
        {SchulenSelected && (
          <MarkerClusterGroup>
            {schulendata.map((marker) => (
              <Marker
                position={[marker.Y, marker.X]}
                key={marker._id}
                icon={customSchulen}
              >
                <Popup>
                  <InfoPopup data={marker}></InfoPopup>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}
        {SchulsozialarbeitSelected && (
          <MarkerClusterGroup>
            {schulsozialarbeitdata.map((marker) => (
              <Marker
                position={[marker.Y, marker.X]}
                key={marker._id}
                icon={customSchulsozialarbeit}
              >
                <Popup>
                  <InfoPopup data={marker}></InfoPopup>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}
        {KindertageseinrichtungenSelected && (
          <MarkerClusterGroup>
            {kindertageseinrichtungendata.map((marker) => (
              <Marker
                position={[marker.Y, marker.X]}
                key={marker._id}
                icon={customKindertageseinrichtungen}
              >
                <Popup>
                  <InfoPopup data={marker}></InfoPopup>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        )}
      </MapContainer>
    </>
  );
}
