import mongoose from "mongoose";

// creating new schema
const logsSchema = new mongoose.Schema({
    time: String,
    
  });

// exporting it
export const logs = mongoose.model('logs', logsSchema);