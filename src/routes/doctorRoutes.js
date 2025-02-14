import express from 'express';
import { getPatients, submitNote } from '../controllers/doctorController.js';
import { authMiddleware } from '../middleware/auth.js';

const doctorRouter = express.Router();

// Get patients assigned to the doctor
doctorRouter.get('/patients', authMiddleware, getPatients);

// Submit a note for a patient
doctorRouter.post('/notes', authMiddleware, submitNote);

export default doctorRouter;