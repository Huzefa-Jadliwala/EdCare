import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../redux/user/userSlice.js";

export default function LeafletControlGeocoder() {
  const map = useMap();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const geocoderRef = useRef(null);
  const [geocoderMarker, setGeocoderMarker] = useState(null);

  useEffect(() => {
    const handleHome = async (X, Y) => {
      try {
        dispatch(updateStart());
        const finalFormData = { homeX: X, homeY: Y };
        const res = await fetch(`/api/user/${currentUser._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalFormData),
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(updateFailure(data.error || "Failed to update Home."));
          return;
        }
        dispatch(updateSuccess(data));
        // Remove the geocoder marker
        if (geocoderMarker) {
          console.log("Removing geocoder marker:", geocoderMarker);
          map.removeLayer(geocoderMarker);
          setGeocoderMarker(null);
        }
      } catch (err) {
        console.log(err);
        dispatch(updateFailure(err.toString()));
      }
    };

    if (!geocoderRef.current) {
      var geocoder = L.Control.Geocoder.nominatim();
      if (typeof URLSearchParams !== "undefined" && location.search) {
        // parse /?geocoder=nominatim from URL
        var params = new URLSearchParams(location.search);
        var geocoderString = params.get("geocoder");
        if (geocoderString && L.Control.Geocoder[geocoderString]) {
          geocoder = L.Control.Geocoder[geocoderString]();
        } else if (geocoderString) {
          console.warn("Unsupported geocoder", geocoderString);
        }
      }

      geocoderRef.current = L.Control.geocoder({
        query: "",
        placeholder: "Search here...",
        defaultMarkGeocode: false,
        geocoder,
      })
        .on("markgeocode", function (e) {
          var latlng = e.geocode.center;

          // Create a button element
          var button = L.DomUtil.create("button", "popup-button");
          button.innerHTML = "Set as Home";
          button.className =
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50";

          // Attach event listener to the button
          button.addEventListener("click", function () {
            handleHome(latlng.lat, latlng.lng);
          });

          // Create a div element to hold the button
          var container = L.DomUtil.create("div", "popup-container");
          container.appendChild(button);

          // Create the popup with HTML content including the button
          const marker = L.marker(latlng)
            .addTo(map)
            .bindPopup(container)
            .openPopup();

          console.log("Geocoder marker added:", marker);
          setGeocoderMarker(marker);

          map.fitBounds(e.geocode.bbox);
        })
        .addTo(map);
    }
  }, [dispatch, map, currentUser, geocoderMarker]);

  return null;
}
