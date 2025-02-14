import express from 'express';
import { getDoctors, selectDoctor } from '../controllers/patientController.js';
import { authMiddleware } from '../middleware/auth.js';

const patientRouter = express.Router();

// Get list of available doctors
patientRouter.get('/doctors', authMiddleware, getDoctors);

// Select a doctor
patientRouter.post('/select-doctor', authMiddleware, selectDoctor);

export default patientRouter;

