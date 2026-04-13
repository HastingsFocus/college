const News = require("../models/News");
const cloudinary = require("../config/cloudinary");

// =======================
// ADD NEWS
// =======================
const addNews = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newsData = {
      title,
      content,
      author: req.admin ? req.admin.email : "admin",
      image: req.file ? req.file.path : "", // ✅ Cloudinary URL
    };

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

    // 🔥 DELETE OLD IMAGE FROM CLOUDINARY
    if (req.file) {
      if (news.image) {
        const publicId = news.image.split("/").pop().split(".")[0];

        await cloudinary.uploader.destroy(`college-images/${publicId}`);
      }

      // ✅ SAVE NEW IMAGE
      news.image = req.file.path;
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

    // 🔥 DELETE IMAGE FROM CLOUDINARY
    if (news.image) {
      const publicId = news.image.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(`college-images/${publicId}`);
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
};