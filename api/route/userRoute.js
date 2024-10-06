import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
} from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js"; // Assuming you have this middleware

const router = Router();

// Registration route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Logout route
router.post("/logout", verifyToken, logoutUser);

// User profile route
router.get("/profile", verifyToken, getUserProfile);

export default router;
