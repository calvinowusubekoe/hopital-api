import express from "express";
import { checkInReminder } from "../controllers/reminderController.js";

const router = express.Router();

router.post("/check-in", checkInReminder); // Patient check-in route

export default router;
