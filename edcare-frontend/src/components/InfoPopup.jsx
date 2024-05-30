/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice.js";
import { useState } from "react";

export default function InfoPopup({ data }) {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const handleEmail = (email) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const handleFavourite = async (X, Y) => {
    try {
      dispatch(updateStart());
      const finalFormData = { ...formData, favouriteX: X, favouriteY: Y };
      setFormData(finalFormData);
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
    <div>
      <p>
        <strong>ART:</strong> {data.ART}
      </p>
      <p>
        <strong>BEZEICHNUNG:</strong> {data.BEZEICHNUNG}
      </p>
      <p>
        <strong>KURZBEZEICHNUNG:</strong> {data.KURZBEZEICHNUNG}
      </p>
      <p>
        <strong>STRASSE:</strong> {data.STRASSE}
      </p>
      <p>
        <strong>PLZ:</strong> {data.PLZ}
      </p>
      <p>
        <strong>ORT:</strong> {data.ORT}
      </p>
      <span className="flex items-center">
        <p className="mr-4">
          <strong>TELEFON:</strong> {data.TELEFON || "N/A"}
        </p>
        {data.TELEFON && (
          <button
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => handleCall(data.TELEFON)}
          >
            Call
          </button>
        )}
      </span>
      <span className="flex items-center">
        <p className="mr-4">
          <strong>EMAIL:</strong> {data.EMAIL || "N/A"}
        </p>
        {data.EMAIL && (
          <button
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            onClick={() => handleEmail(data.EMAIL)}
          >
            Email
          </button>
        )}
      </span>

      <p>
        <strong>WWW:</strong>{" "}
        <a
          href={data.WWW.startsWith("http") ? data.WWW : `http://${data.WWW}`}
          target="_blank"
        >
          {data.WWW}
        </a>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={() => handleFavourite(data.X, data.Y)}
          style={{ marginRight: "10px" }}
        >
          Mark as Favourite
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          style={{ marginLeft: "10px" }}
        >
          More
        </button>
      </div>
    </div>
  );
}
