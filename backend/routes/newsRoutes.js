const express = require('express');
const router = express.Router();
const { addNews, getNews, updateNews, deleteNews } = require('../controllers/newsController');
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');

// PUBLIC
router.get('/', getNews);

// ADMIN ONLY
router.post('/', protect, adminOnly, addNews);
router.put('/:id', protect, adminOnly, updateNews);
router.delete('/:id', protect, adminOnly, deleteNews);

module.exports = router;