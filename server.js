import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/config/database.js";
import userRouter from "./src/routes/userRoutes.js";
import patientRouter from "./src/routes/patientRoutes.js";
import doctorRouter from "./src/routes/doctorRoutes.js";
import reminderRouter from "./src/routes/reminderRoutes.js";
import noteRoutes from "./src/routes/noteRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Routes
app.use(userRouter);
app.use(patientRouter);
app.use(doctorRouter);
app.use(reminderRouter);
app.use(noteRoutes);


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));