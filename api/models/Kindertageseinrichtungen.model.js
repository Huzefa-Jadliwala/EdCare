import mongoose from "mongoose";

const KindertageseinrichtungenSchema = new mongoose.Schema({
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
  BEZEICHNUNG: {
    type: String,
    required: true,
  },
  KURZBEZEICHNUNG: {
    type: String,
    required: true,
  },
  STRASSE: {
    type: String,
    required: true,
  },
  STRSCHL: {
    type: String,
    required: true,
  },
  HAUSBEZ: {
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
  HORT: {
    type: Number,
    required: true,
  },
  KITA: {
    type: Number,
    required: true,
  },
  URL: {
    type: String,
    default: "",
  },
  TELEFON: {
    type: String,
    default: "",
  },
  FAX: {
    type: String,
    default: "",
  },
  EMAIL: {
    type: String,
    default: "",
  },
  BARRIEREFREI: {
    type: Number,
    required: true,
  },
  INTEGRATIV: {
    type: Number,
    required: true,
  },
});

export default mongoose.model(
  "Kindertageseinrichtungen",
  KindertageseinrichtungenSchema
);
