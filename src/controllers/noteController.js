import Note from '../models/Note.js';

// Get actionable steps for a patient
export const getActionableSteps = async (req, res) => {
  const { userId } = req;

  try {
    const notes = await Note.find({ patientId: userId });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};