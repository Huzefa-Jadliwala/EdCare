/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */
import express from "express";
import {
  Signup,
  Signin,
  Google,
  Signout,
} from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '500':
 *         description: Internal server error
 */
router.post("/signup", Signup);

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Authenticate user and generate access token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *       '401':
 *         description: Invalid user credentials
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.post("/signin", Signin);

/**
 * @swagger
 * /auth/google:
 *   post:
 *     summary: Authenticate user using Google OAuth
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *       '500':
 *         description: Internal server error
 */
router.post("/google", Google);

/**
 * @swagger
 * /auth/signout:
 *   get:
 *     summary: Sign out user and clear access token cookie
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: Signout successful
 */
router.get("/signout", Signout);

export default router;
