import express from "express";
const router = express.Router();

import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// POST     /api/users/login
//          Public route
router.route("/login").post(authUser);

// GET      /api/users/profile
//          Private route
router.route("/profile").get(protect, getUserProfile);

export default router;
