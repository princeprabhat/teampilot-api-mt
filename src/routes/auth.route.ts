import type { Request, Response } from "express";
import { Router } from "express";

const router = Router();

// login created user
router.post("/login");

// register new user
router.post("/register");

// forgot password
router.post("/forgot-password");

// refresh token
router.post("/refresh-token");

// logout
router.post("/logout");

router.post("/reset-password");

// Verify email at signup
router.get("/verify-email/:token");

router.post("/resend-verification");

export default router;
