import type { Request, Response } from 'express';
import {Router } from 'express';

const router = Router();


// Example: POST /auth/login
router.post('/login', (req: Request, res: Response) => {
    // Dummy implementation
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        return res.json({ token: 'dummy-jwt-token' });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

export default router;