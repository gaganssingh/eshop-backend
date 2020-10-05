import express from "express";
const router = express.Router();

import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// POST     /api/users/login
//          Public route
router.route("/").post(registerUser);

// POST     /api/users/login
//          Public route
router.route("/login").post(authUser);

// GET      /api/users/profile
//          Private route
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
