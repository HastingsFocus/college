const express = require('express');
const router = express.Router();

const {
  addNews,
  getNews,
  updateNews,
  getNewsById,
  deleteNews,
} = require('../controllers/newsController');

const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const upload = require('../middleware/uploadMiddleware'); // ✅ Cloudinary middleware

// ======================
// PUBLIC ROUTES
// ======================
router.get('/', getNews);
router.get('/:id', getNewsById);

// ======================
// ADMIN ROUTES (CLOUDINARY UPLOAD)
// ======================
router.post(
  '/',
  protect,
  adminOnly,
  upload.single('image'), // ☁️ upload to Cloudinary
  addNews
);

router.put(
  '/:id',
  protect,
  adminOnly,
  upload.single('image'),
  updateNews
);

router.delete('/:id', protect, adminOnly, deleteNews);

module.exports = router;