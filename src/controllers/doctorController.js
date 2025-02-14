import Doctor from '../models/patient.js';
import Note from '../models/Note.js';

// Get patients assigned to the doctor
export const getPatients = async (req, res) => {
  const { userId } = req;

  try {
    const doctor = await Doctor.findOne({ userId }).populate('patients');
    res.status(200).json(doctor.patients);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Submit a note for a patient
export const submitNote = async (req, res) => {
  const { patientId, content } = req.body;
  const { userId } = req;

  try {
    // Create a new note
    const note = new Note({ doctorId: userId, patientId, content });
    await note.save();

    res.status(201).json({ message: 'Note submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};