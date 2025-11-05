import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Create a new task in a project - Project Admin
const createTask = catchAsync(async (req: Request, res: Response) => {});

// Get all Tasks in a project
const getAllTasks = catchAsync(async (req: Request, res: Response) => {});

// Get a Task by Id
const getTaskById = catchAsync(async (req: Request, res: Response) => {});

// Update task details (title,desc,Status,etc) - Project Admin
const updateTaskById = catchAsync(async (req: Request, res: Response) => {});

// Delete a task by Id - Project Admin
const deleteTask = catchAsync(async (req: Request, res: Response) => {});

// Assign a user to a task - Project Admin
const assignUserToTask = catchAsync(async (req: Request, res: Response) => {});

// Remove a user from a task - Project Admin
const removeUserFromTask = catchAsync(
  async (req: Request, res: Response) => {}
);

// Change Task Status
const updateTaskStatus = catchAsync(async (req: Request, res: Response) => {});

// Add attachment to a task
const addTaskAttachment = catchAsync(async (req: Request, res: Response) => {});

// Delete attachment from a task
const removeTaskAttachment = catchAsync(
  async (req: Request, res: Response) => {}
);

// Filter tasks (by assignee, status, Priority)
const filterTasks = catchAsync(async (req: Request, res: Response) => {});

export {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTask,
  assignUserToTask,
  removeUserFromTask,
  updateTaskStatus,
  addTaskAttachment,
  removeTaskAttachment,
  filterTasks,
};
