import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Task title is required'], 
    trim: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);