import express from 'express';
import authRoute from './auth.route.js';
import organizationRoute from './organization.route.js';
import userRoute from './user.route.js';    
import projectRoute from './project.route.js';
import taskRoute from './task.route.js';


const router = express.Router();

router.use('/v1/auth', authRoute);
router.use('/v1/organizations', organizationRoute);
router.use('/v1/users', userRoute);
router.use('/v1/projects', projectRoute);
router.use('/v1/tasks', taskRoute); 



export default router;