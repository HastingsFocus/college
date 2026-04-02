const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');
const {
  getPages,
  getPageBySlug,
  addPage,
  updatePage,
  deletePage
} = require('../controllers/pageController');

// PUBLIC
router.get('/', getPages);
router.get('/:slug', getPageBySlug);

// ADMIN ONLY
router.post('/', protect, adminOnly, addPage);
router.put('/:id', protect, adminOnly, updatePage);
router.delete('/:id', protect, adminOnly, deletePage);

module.exports = router;