import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  job: String,
  city: String,
  isManager: Boolean
});

export const dumdum = mongoose.model('data', dataSchema);