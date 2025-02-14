import mongoose from 'mongoose';
import { toJSON } from '@reis/mongoose-to-json';

const noteSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  checklist: [{
    type: String,
  }],
  plan: [{
    task: String,
    schedule: Date,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

noteSchema.plugin(toJSON);

const Note = mongoose.model('Note', noteSchema);

export default Note;