const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },
  educationBackground: {
    type: String,
    required: [true, 'Education background is required'],
  },
  image: {
    type: String, // URL or file path
    default: '',
  },
}, { timestamps: true });

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;