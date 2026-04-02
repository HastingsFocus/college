const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Program title is required'],
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  duration: {
    type: String,
  },
  level: {
    type: String,
    enum: ['Undergraduate', 'Postgraduate', 'Diploma'],
  },
  admissionRequirements: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Program = mongoose.model('Program', programSchema);

module.exports = Program;