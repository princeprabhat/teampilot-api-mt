import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Get the current user Profile
const getProfile = catchAsync(async (req: Request, res: Response) => {});

// Update the current user Profile
const updateProfile = catchAsync(async (req: Request, res: Response) => {});

// Change password of current user
const changePassword = catchAsync(async (req: Request, res: Response) => {});

// Get all users of an Organization - Admin
const getUsersByAdmin = catchAsync(async (req: Request, res: Response) => {});

// Get a user by Id
const getUserById = catchAsync(async (req: Request, res: Response) => {});

// Update a user by Id
const updateUser = catchAsync(async (req: Request, res: Response) => {});

// Delete a user from organization - Admin
const deleteUserByAdmin = catchAsync(async (req: Request, res: Response) => {});

// Deactivate a user's Profile - Admin
const deactivateProfileByAdmin = catchAsync(
  async (req: Request, res: Response) => {}
);

export {
  getProfile,
  updateProfile,
  changePassword,
  getUsersByAdmin,
  getUserById,
  updateUser,
  deleteUserByAdmin,
  deactivateProfileByAdmin,
};
