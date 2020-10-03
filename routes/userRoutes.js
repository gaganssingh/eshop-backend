import express from "express";
const router = express.Router();

import { authUser } from "../controllers/userController.js";

// POST     /api/users/login
//          Public route
router.route("/login").post(authUser);

export default router;
