const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware');

const {
  getStaff,
  getStaffById,
  addStaff,
  updateStaff,
  deleteStaff,
} = require('../controllers/staffController');

// ======================
// PUBLIC ROUTES
// ======================
router.get('/', getStaff);
router.get('/:id', getStaffById);

// ======================
// ADMIN ROUTES (CLOUDINARY UPLOAD)
// ======================
router.post(
  '/',
  protect,
  adminOnly,
  upload.single('image'),
  addStaff
);

router.put(
  '/:id',
  protect,
  adminOnly,
  upload.single('image'),
  updateStaff
);

router.delete('/:id', protect, adminOnly, deleteStaff);

module.exports = router;