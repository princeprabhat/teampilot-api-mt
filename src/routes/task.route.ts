import type { Request, Response } from 'express';
import {Router } from 'express';

const router = Router();

// Create a new task inside a project
router.post('/project/:projectId');

// Get all tasks in a project
router.get('/project/:projectId');

// Get a specific task by ID
router.get('/:taskId');

// Update a specific task (title, desc, etc.)
router.patch('/:taskId');

// Delete a specific task
router.delete('/:taskId');

// Assign a user to a task
router.post('/:taskId/assignees/:userId');

// Remove a user from a task
router.delete('/:taskId/assignees/:userId');

// Change task status (ToDo → In Progress → Done)
router.patch('/:taskId/status');


// TODO: Later implent features
// // Add a subtask under a task
// router.post('/:taskId/subtasks');

// // Get all subtasks under a task
// router.get('/:taskId/subtasks');

// Upload attachment to a task
router.post('/:taskId/attachments');

// Delete attachment from a task
router.delete('/:taskId/attachments/:attachmentId');

// Filter tasks (by status, priority, assignee)
router.get('/filter');


export default router;