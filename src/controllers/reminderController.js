import Reminder from "../models/reminder.js";

// Check-in API for patients
export const checkInReminder = async (req, res) => {
  try {
    const { patientId } = req.body;
    const today = new Date();

    await Reminder.updateMany(
      { patientId },
      { $push: { checkedInDates: today } }
    );

    return res.json({ message: "Check-in successful. Reminders updated." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
