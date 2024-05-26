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
