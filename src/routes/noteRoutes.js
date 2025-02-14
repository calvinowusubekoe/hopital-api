import express from 'express';
import { getActionableSteps } from '../controllers/noteController.js';
import { authMiddleware } from '../middleware/auth.js';

const noteRouter = express.Router();

// Get actionable steps for a patient
noteRouter.get('/actionable-steps', authMiddleware, getActionableSteps);

export default noteRouter;