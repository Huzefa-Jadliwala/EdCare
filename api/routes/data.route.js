import express from "express";
import {
  Schulen,
  Schulsozialarbeit,
  Jugendberufshilfen,
  Kindertageseinrichtungen,
  LocationDetails,
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/schulen", Schulen);
router.get("/schulsozialarbeit", Schulsozialarbeit);
router.get("/kindertageseinrichtungen", Kindertageseinrichtungen);
router.get("/jugendberufshilfen", Jugendberufshilfen);
router.get("/locationDetails", LocationDetails);

export default router;
