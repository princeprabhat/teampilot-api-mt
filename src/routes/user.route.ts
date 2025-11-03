import type { Request, Response } from 'express';
import {Router } from 'express';

const router = Router();


// Get current logged-in user info
router.get('/me');

// Update current user's own profile
router.put('/me');

// Change password (authenticated user)
router.put('/change-password');

// Get all users (ADMIN only)
router.get('/');

// Get a specific user by ID
router.get('/:userId');

// Update user details (ADMIN or self)
router.put('/:userId');

// Delete user (ADMIN or self)
router.delete('/:userId');

// Deactivate or suspend user (ADMIN)
router.patch('/:userId/status');

export default router;