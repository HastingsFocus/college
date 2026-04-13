const News = require("../models/News");
const cloudinary = require("../config/cloudinary");

// =======================
// HELPER: Extract Cloudinary public_id safely
// =======================
const getPublicId = (url) => {
  if (!url) return null;

  try {
    const parts = url.split("/upload/");
    if (parts.length < 2) return null;

    const afterUpload = parts[1];
    const withoutVersion = afterUpload.replace(/^v\d+\//, "");
    const publicId = withoutVersion.split(".")[0];

    return publicId;
  } catch (err) {
    console.error("Failed to extract public_id:", err.message);
    return null;
  }
};

// =======================
// ADD NEWS
// =======================
const addNews = async (req, res) => {
  try {
    const { title, content } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const newsItem = await News.create({
      title,
      content,
      author: req.admin ? req.admin.email : "admin",
      image: req.file ? req.file.path : "",
    });

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
    console.error("GET NEWS ERROR:", error);
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
    console.error("GET NEWS BY ID ERROR:", error);
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

    // =======================
    // REPLACE IMAGE (CLOUDINARY SAFE)
    // =======================
    if (req.file) {
      if (news.image) {
        const publicId = getPublicId(news.image);

        if (publicId) {
          try {
            await cloudinary.uploader.destroy(publicId);
          } catch (err) {
            console.error("Cloudinary delete failed:", err.message);
          }
        }
      }

      news.image = req.file.path;
    }

    const updated = await news.save();

    res.json(updated);
  } catch (error) {
    console.error("UPDATE NEWS ERROR:", error);
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

    // =======================
    // DELETE IMAGE FROM CLOUDINARY
    // =======================
    if (news.image) {
      const publicId = getPublicId(news.image);

      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (err) {
          console.error("Cloudinary delete failed:", err.message);
        }
      }
    }

    await News.findByIdAndDelete(req.params.id);

    res.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("DELETE NEWS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
};