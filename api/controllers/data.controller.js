import JugendberufshilfenModel from "../models/Jugendberufshilfen.model.js";
import KindertageseinrichtungenModel from "../models/Kindertageseinrichtungen.model.js";
import SchulenModel from "../models/Schulen.model.js";
import SchulsozialarbeitModel from "../models/Schulsozialarbeit.model.js";

export const Schulen = async (req, res, next) => {
  try {
    const data = await SchulenModel.find(); // Fetch all documents from Data collection
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const Jugendberufshilfen = async (req, res, next) => {
  try {
    const data = await JugendberufshilfenModel.find(); // Fetch all documents from Data collection
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const Kindertageseinrichtungen = async (req, res, next) => {
  try {
    const data = await KindertageseinrichtungenModel.find(); // Fetch all documents from Data collection
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const Schulsozialarbeit = async (req, res, next) => {
  try {
    const data = await SchulsozialarbeitModel.find(); // Fetch all documents from Data collection
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const LocationDetails = async (req, res, next) => {
  try {
    const { lat, lon } = req.query; // Assuming lat and lon are passed as query parameters
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    // Make the request to the third-party API
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    // Process the response data as needed
    const locationDetails = {
      building: data.address.building || "No Data Available",
      Latitude: data.lat || "No Data Available",
      Longitude: data.lon || "No Data Available",
      houseNumber: data.address.house_number || "No Data Available",
      road: data.address.road || "No Data Available",
      suburb: data.address.suburb || "No Data Available",
      city: data.address.city || "No Data Available",
      state: data.address.state || "No Data Available",
      postcode: data.address.postcode || "No Data Available",
      country: data.address.country || "No Data Available",
      boundingbox: data.boundingbox || "No Data Available",
    };

    // Send the processed data back to the frontend
    res.status(200).json(locationDetails);
  } catch (error) {
    next(error);
  }
};
