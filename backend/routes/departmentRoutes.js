const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const {
  addDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
} = require('../controllers/departmentController');

// PUBLIC
router.get('/', getDepartments);
router.get('/:id', getDepartment);

// ADMIN ONLY
router.post('/', protect, adminOnly, addDepartment);
router.put('/:id', protect, adminOnly, updateDepartment);
router.delete('/:id', protect, adminOnly, deleteDepartment);

module.exports = router;