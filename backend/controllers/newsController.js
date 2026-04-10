// controllers/newsController.js
const News = require('../models/News');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// =======================
// Ensure uploads folder exists
// =======================
const uploadDir = path.join(__dirname, '../uploads/news');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// =======================
// Multer config for image upload
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // save images here
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error('Only images are allowed'));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
}).single('image'); // field name in form-data

// =======================
// Add News (Admin)
// =======================
const addNews = async (req, res) => {
  try {
    

    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newsData = {
      title,
      content,
      author: author || req.user.name, // default admin
    };

    if (req.file) {
      newsData.image = `/uploads/news/${req.file.filename}`;
    }

    const newsItem = await News.create(newsData);

    res.status(201).json(newsItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// =======================
// Get all news (Public)
// =======================
const getNews = async (req, res) => {
  try {
    const news = await News.find({ isActive: true }).sort({ publishedAt: -1 });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// =======================
// Update News (Admin)
// =======================
const updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });

    const { title, content, author } = req.body;

    if (!title && !content && !req.file) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    // Update fields if they exist
    if (title) news.title = title;
    if (content) news.content = content;
    if (author) news.author = author;

    // Update image if new file uploaded
    if (req.file) {
      // delete old image
      if (news.image) {
        const fs = require("fs");
        const path = require("path");
        const oldPath = path.join(__dirname, "..", news.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      news.image = `/uploads/news/${req.file.filename}`;
    }

    await news.save();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// Delete News (Admin)
// =======================
const deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // 🔥 DELETE IMAGE FROM FOLDER (optional but pro)
    if (news.image) {
      const fs = require("fs");
      const path = require("path");

      const imagePath = path.join(__dirname, "..", news.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // ✅ DELETE FROM DB
    await News.findByIdAndDelete(req.params.id);

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Export everything
module.exports = { addNews, getNews, updateNews, deleteNews, upload, getNewsById };