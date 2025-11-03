import type { Request, Response } from 'express';
import {Router } from 'express';

const router = Router();


// Create a new project
router.post('/');

// Update a project
router.put('/:projectId');

// Delete a project
router.delete('/:projectId');

// Get all projects under an organization (Org Admin only)
router.get('/org/:orgId');

// Get all projects a user is part of (any role)
router.get('/user/:userId');

// Get single project details
router.get('/:projectId');

// Add members to a project (Org Admin only)
router.post('/:projectId/members');

// Remove a member from a project
router.delete('/:projectId/members/:userId');

// Get all members of a project
router.get('/:projectId/members');

// Assign or revoke project admin role
router.patch('/:projectId/members/:userId/role');

// Transfer project ownership (Org Admin only)
router.patch('/:projectId/transfer-ownership');

// Archive a project (soft delete)
router.patch('/:projectId/archive');

// Restore an archived project
router.patch('/:projectId/restore');

export default router;