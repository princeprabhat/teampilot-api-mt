import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Create an Organization
const createOrganization = catchAsync(
  async (req: Request, res: Response) => {}
);

// Update organization details
const updateOrganization = catchAsync(
  async (req: Request, res: Response) => {}
);

// delete an organization - Admin
const deleteOrganization = catchAsync(
  async (req: Request, res: Response) => {}
);

// Get all organizations of a user
const getUserOrganizations = catchAsync(
  async (req: Request, res: Response) => {}
);

// Get an organization by Id
const getOrgById = catchAsync(async (req: Request, res: Response) => {});

// Admin Invite to Join Organization
const invitationByAdmin = catchAsync(async (req: Request, res: Response) => {});

// Get all members of an organization
const getOrgMembers = catchAsync(async (req: Request, res: Response) => {});

// Remove a member from organization - Admin
const removeOrgMemberByAdmin = catchAsync(
  async (req: Request, res: Response) => {}
);

// Transfer the ownership by current org Admin
const transferOwnerByAdmin = catchAsync(
  async (req: Request, res: Response) => {}
);

// Update the setting of the organization - Admin
const updateOrgSetting = catchAsync(async (req: Request, res: Response) => {});

export {
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getUserOrganizations,
  getOrgById,
  invitationByAdmin,
  getOrgMembers,
  removeOrgMemberByAdmin,
  transferOwnerByAdmin,
  updateOrgSetting,
};
