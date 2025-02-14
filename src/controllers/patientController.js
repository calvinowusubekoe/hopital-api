import Doctor from '../models/doctor.js';
import Patient from '../models/patient.js';

// Get list of available doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('userId', 'name email');
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Select a doctor
export const selectDoctor = async (req, res) => {
    const { doctorId } = req.body;
    const { userId } = req;
  
    try {
      // Validate input
      if (!doctorId || !userId) {
        return res.status(400).json({ message: 'Missing doctorId or userId' });
      }
  
      // Find the patient
      const patient = await Patient.findOne({ userId });
      if (!patient) {
        console.log('Patient not found for userId:', userId); // Log the userId
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      // Find the doctor
      const doctor = await Doctor.findOne({ userId: doctorId });
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      // Assign doctor to patient
      patient.assignedDoctor = doctorId;
      await patient.save();
  
      // Add patient to doctor's list
      doctor.patients.push(patient._id);
      await doctor.save();
  
      res.status(200).json({ message: 'Doctor assigned successfully' });
    } catch (err) {
      console.error('Error in selectDoctor:', err);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };