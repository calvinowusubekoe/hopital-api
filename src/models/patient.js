import mongoose from 'mongoose';
import { toJSON } from '@reis/mongoose-to-json';

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
});

patientSchema.plugin(toJSON);

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;