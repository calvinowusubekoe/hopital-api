import mongoose from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const reminderSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  task: String,
  frequency: String, // "daily", "twice daily"
  duration: Number, // Number of days
  startDate: Date,
  checkedInDates: [Date], // Tracks completed check-ins
});

reminderSchema.plugin(toJSON);

const Reminder = mongoose.model("Reminder", reminderSchema);
export default Reminder;
