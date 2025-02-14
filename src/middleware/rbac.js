export const roles = {
  Patient: ["selectDoctor", "viewNotes"], // Patients can select a doctor
  Doctor: ["viewPatients", "submitNote", "viewNotes", "Doctor"]
};
