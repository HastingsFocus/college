const express = require('express');
const router = express.Router();

const {
  getPrograms,
  getProgramById,
  createProgram,
  updateProgram,
  deleteProgram,
} = require('../controllers/programController');

const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');

// 🌍 PUBLIC ROUTES
router.get('/', getPrograms);
router.get('/:id', getProgramById);

// 🔒 ADMIN ROUTES
router.post('/', protect, adminOnly, createProgram);
router.put('/:id', protect, adminOnly, updateProgram);
router.delete('/:id', protect, adminOnly, deleteProgram);

module.exports = router;