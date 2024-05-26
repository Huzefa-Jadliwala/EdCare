import mongoose from "mongoose";

const SchulenSchema = new mongoose.Schema({
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
  TYP: {
    type: Number,
    required: true,
  },
  ART: {
    type: String,
    required: true,
  },
  STANDORTTYP: {
    type: Number,
    required: true,
  },
  BEZEICHNUNG: {
    type: String,
    required: true,
  },
  BEZEICHNUNGZUSATZ: {
    type: String,
    default: "",
  },
  KURZBEZEICHNUNG: {
    type: String,
    required: true,
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
  FAX: {
    type: String,
    default: "",
  },
  EMAIL: {
    type: String,
    default: "",
  },
  PROFILE: {
    type: String,
    default: "",
  },
  SPRACHEN: {
    type: String,
    default: "",
  },
  WWW: {
    type: String,
    default: "",
  },
  TRAEGER: {
    type: String,
    required: true,
  },
  TRAEGERTYP: {
    type: Number,
    required: true,
  },
  BEZUGNR: {
    type: Number,
    required: true,
  },
  GEBIETSARTNUMMER: {
    type: Number,
    required: true,
  },
  SNUMMER: {
    type: Number,
    required: true,
  },
  NUMMER: {
    type: Number,
    required: true,
  },
  GlobalID: {
    type: String,
    required: true,
  },
  CreationDate: {
    type: Date,
    required: true,
  },
  Creator: {
    type: String,
    required: true,
  },
  EditDate: {
    type: Date,
    required: true,
  },
  Editor: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Schulen", SchulenSchema);
