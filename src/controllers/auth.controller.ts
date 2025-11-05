import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Register a new user - Directly from Platform Signup
const register = catchAsync(async (req: Request, res: Response) => {});

// Log in an existing user
const login = catchAsync(async (req: Request, res: Response) => {});

// Forgot password
const forgotPassword = catchAsync(async (req: Request, res: Response) => {});

// Refresh token
const refreshToken = catchAsync(async (req: Request, res: Response) => {});

// Logout an logged in user
const logout = catchAsync(async (req: Request, res: Response) => {});

// Reset Password
const resetPassword = catchAsync(async (req: Request, res: Response) => {});

// Verify email of new user
const verifyEmail = catchAsync(async (req: Request, res: Response) => {});

// Resend verification email
const resendVerification = catchAsync(
  async (req: Request, res: Response) => {}
);

export {
  login,
  register,
  forgotPassword,
  refreshToken,
  logout,
  resetPassword,
  verifyEmail,
  resendVerification,
};
