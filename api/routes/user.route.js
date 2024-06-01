/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management endpoints
 */

import express from "express";
import { updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

/**
 * @swagger
 * /api/user/{id}:
 *   patch:
 *     summary: Update user details
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *       '401':
 *         description: Unauthorized, token is missing or invalid
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.patch("/:id", verifyToken, updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized, token is missing or invalid
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:id", verifyToken, deleteUser);

export default router;
