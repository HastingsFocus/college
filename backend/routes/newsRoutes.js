const express = require('express');
const router = express.Router();
const { addNews, getNews, updateNews, getNewsById, deleteNews } = require('../controllers/newsController');
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads/news folder exists
const uploadDir = path.join(__dirname, '../uploads/news');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // save images here
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});

const upload = multer({ storage });

// PUBLIC
router.get('/', getNews);
router.get('/:id', getNewsById); 

// ADMIN ONLY
router.post('/', protect, adminOnly, upload.single('image'), addNews);
router.put('/:id', protect, adminOnly, upload.single('image'), updateNews);
router.delete('/:id', protect, adminOnly, deleteNews);

module.exports = router;