import { catchAsync } from "../utils/catchAsync.js";

import type { Request, Response } from "express";

// Create a new comment on a task
const createComment = catchAsync(async (req: Request, res: Response) => {});

// Update a comment by the Id -  Comment Author
const updateCommentById = catchAsync(async (req: Request, res: Response) => {});

// Get all comments of a task
const getAllComments = catchAsync(async (req: Request, res: Response) => {});

// Get a Comment by Id
const getCommentById = catchAsync(async (req: Request, res: Response) => {});

export { createComment, updateCommentById, getAllComments, getCommentById };
