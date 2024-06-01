/**
 * @swagger
 * tags:
 *   name: Data
 *   description: Endpoints for fetching data
 */

import express from "express";
import {
  Schulen,
  Schulsozialarbeit,
  Jugendberufshilfen,
  Kindertageseinrichtungen,
  LocationDetails,
} from "../controllers/data.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/data/schulen:
 *   get:
 *     summary: Get all schools
 *     tags: [Data]
 *     responses:
 *       '200':
 *         description: List of schools
 *       '500':
 *         description: Internal server error
 */
router.get("/schulen", Schulen);

/**
 * @swagger
 * /api/data/schulsozialarbeit:
 *   get:
 *     summary: Get all school social work services
 *     tags: [Data]
 *     responses:
 *       '200':
 *         description: List of school social work services
 *       '500':
 *         description: Internal server error
 */
router.get("/schulsozialarbeit", Schulsozialarbeit);

/**
 * @swagger
 * /api/data/jugendberufshilfen:
 *   get:
 *     summary: Get all youth career assistance services
 *     tags: [Data]
 *     responses:
 *       '200':
 *         description: List of youth career assistance services
 *       '500':
 *         description: Internal server error
 */
router.get("/jugendberufshilfen", Jugendberufshilfen);

/**
 * @swagger
 * /api/data/kindertageseinrichtungen:
 *   get:
 *     summary: Get all childcare facilities
 *     tags: [Data]
 *     responses:
 *       '200':
 *         description: List of childcare facilities
 *       '500':
 *         description: Internal server error
 */
router.get("/kindertageseinrichtungen", Kindertageseinrichtungen);

/**
 * @swagger
 * /api/data/locationDetails:
 *   get:
 *     summary: Get location details
 *     tags: [Data]
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *         required: true
 *         description: Latitude
 *       - in: query
 *         name: lon
 *         schema:
 *           type: number
 *         required: true
 *         description: Longitude
 *     responses:
 *       '200':
 *         description: Location details
 *       '500':
 *         description: Internal server error
 */
router.get("/locationDetails", LocationDetails);

export default router;
