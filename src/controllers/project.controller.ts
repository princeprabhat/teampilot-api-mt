import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Create a new project by Org Admin
const createProject = catchAsync(async (req: Request, res: Response) => {});

// Update a project details by Org Admin
const updateProject = catchAsync(async (req: Request, res: Response) => {});

// Delete a project from organization - Org Admin
const deleteProject = catchAsync(async (req: Request, res: Response) => {});

// get all projects of an organization - Org Admin
const getAllProjects = catchAsync(async (req: Request, res: Response) => {});

// Get all projects of a User
const getUserProjects = catchAsync(async (req: Request, res: Response) => {});

// Get a Project by Id
const getProjectById = catchAsync(async (req: Request, res: Response) => {});

// Assign members to a Project - Org Admin
const addProjectMembers = catchAsync(async (req: Request, res: Response) => {});

// Remove a member from Project - Org Admin
const removeProjectMember = catchAsync(
  async (req: Request, res: Response) => {}
);

// Get all members of a project
const getProjectMembers = catchAsync(async (req: Request, res: Response) => {});

// Assign a new Project Admin or remove the existing project admin
const addProjectAdmin = catchAsync(async (req: Request, res: Response) => {});

// Transfer Project Ownership to another organization - Org Admin
// const transferProject = catchAsync(
//   async (req: Request, res: Response) => {}
// );

// Archive a project (Soft Delete for 15 days) - Org Admin
const archiveProject = catchAsync(async (req: Request, res: Response) => {});

// Restore an archived Project (Before 15 days) - Org Admin
const restoreProject = catchAsync(async (req: Request, res: Response) => {});

export {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
  getUserProjects,
  getProjectById,
  addProjectMembers,
  removeProjectMember,
  getProjectMembers,
  addProjectAdmin,
  archiveProject,
  restoreProject,
};
