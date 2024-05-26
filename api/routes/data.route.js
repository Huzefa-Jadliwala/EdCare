import express from "express";
import {
  Schulen,
  Schulsozialarbeit,
  Jugendberufshilfen,
  Kindertageseinrichtungen,
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/schulen", Schulen);
router.get("/schulsozialarbeit", Schulsozialarbeit);
router.get("/kindertageseinrichtungen", Kindertageseinrichtungen);
router.get("/jugendberufshilfen", Jugendberufshilfen);

export default router;
