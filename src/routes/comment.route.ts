import { Router } from "express";
const router = Router();

// Create a new comment on a task
router.post('/task/:taskId');

// Update a specific comment
router.put('/:commentId');

// Delete a specific comment
router.delete('/:commentId');

// Get all comments for a specific task
router.get('/task/:taskId');

// Get a single comment by ID
router.get('/:commentId');

export default router;