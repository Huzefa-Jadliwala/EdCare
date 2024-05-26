import mongoose from "mongoose";

const SchulsozialarbeitSchema = new mongoose.Schema({
  X: {
    type: Number,
    required: true,
  },
  Y: {
    type: Number,
    required: true,
  },
  OBJECTID: {
    type: Number,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  TRAEGER: {
    type: String,
    required: true,
  },
  LEISTUNGEN: {
    type: String,
    required: true,
  },
  BEZEICHNUNG: {
    type: String,
    default: "",
  },
  KURZBEZEICHNUNG: {
    type: String,
    default: "",
  },
  STRASSE: {
    type: String,
    required: true,
  },
  PLZ: {
    type: String,
    required: true,
  },
  ORT: {
    type: String,
    required: true,
  },
  TELEFON: {
    type: String,
    default: "",
  },
  EMAIL: {
    type: String,
    default: "",
  },
  FAX: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Schulsozialarbeit", SchulsozialarbeitSchema);
