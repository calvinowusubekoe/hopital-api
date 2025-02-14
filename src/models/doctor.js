import mongoose from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  patients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  }],
});

doctorSchema.plugin(toJSON);

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
