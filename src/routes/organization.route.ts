import type { Request, Response } from 'express';
import {Router } from 'express';

const router = Router();


// Create an Organization
router.post('/');

// Update organization details
router.put('/:orgId');

// Delete organization
router.delete('/:orgId');

// Get all organizations for a specific user
router.get('/user/:userId');

// Get a single organization by ID
router.get('/:orgId');

// Invite a member to organization (Org Admin only)
router.post('/:orgId/members/invite');

// Get all members of an organization
router.get('/:orgId/members');

// Remove a member from organization (Org Admin only)
router.delete('/:orgId/members/:userId');

// Transfer organization ownership (Org Admin only)
router.patch('/:orgId/transfer-ownership');

// Update organization settings (logo, name, permissions, etc.)
router.patch('/:orgId/settings');

export default router;