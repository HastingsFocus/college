const Program = require('../models/Program');

// ✅ GET all programs (public)
const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find({ isActive: true });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET single program
const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    res.json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔒 CREATE program (admin only)
const createProgram = async (req, res) => {
  try {
    const program = new Program(req.body);
    const savedProgram = await program.save();

    res.status(201).json(savedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔒 UPDATE program (admin only)
const updateProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🔒 DELETE program (admin only)
const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    await program.deleteOne();

    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
};