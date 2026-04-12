const News = require("../models/News");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

// =======================
// Ensure uploads folder exists
// =======================
const uploadDir = path.join(__dirname, "../uploads/news");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// =======================
// Multer config
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;

  const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
  const mimeOk = allowed.test(file.mimetype);

  if (extOk && mimeOk) cb(null, true);
  else cb(new Error("Only image files allowed"));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("image");

// =======================
// ADD NEWS
// =======================
const addNews = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newsData = {
      title,
      content,
      author: req.admin ? req.admin.email : "admin", // ✅ FIXED HERE
    };

    if (req.file) {
      newsData.image = `/uploads/news/${req.file.filename}`;
    }

    const newsItem = await News.create(newsData);

    res.status(201).json(newsItem);
  } catch (error) {
    console.error("ADD NEWS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// GET ALL NEWS
// =======================
const getNews = async (req, res) => {
  try {
    const news = await News.find({ isActive: true }).sort({
      publishedAt: -1,
    });

    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// GET NEWS BY ID
// =======================
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// UPDATE NEWS
// =======================
const updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    const { title, content } = req.body;

    if (title) news.title = title;
    if (content) news.content = content;

    // IMAGE UPDATE
    if (req.file) {
      if (news.image) {
        const oldImagePath = path.join(__dirname, "..", news.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
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
// DELETE NEWS
// =======================
const deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // DELETE IMAGE
    if (news.image) {
      const imagePath = path.join(__dirname, "..", news.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await News.findByIdAndDelete(req.params.id);

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
  upload,
};