const News = require('../models/News');

// Add news (Admin only)
const addNews = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newsItem = await News.create({
      title,
      content,
      author: author || req.user.name, // default to logged-in admin
    });

    res.status(201).json(newsItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all news (Public)
const getNews = async (req, res) => {
  try {
    const news = await News.find({ isActive: true }).sort({ publishedAt: -1 });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update news (Admin only)
const updateNews = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ message: 'News not found' });
    }

    const { title, content, author, isActive } = req.body;

    newsItem.title = title || newsItem.title;
    newsItem.content = content || newsItem.content;
    newsItem.author = author || newsItem.author;
    if (isActive !== undefined) newsItem.isActive = isActive;

    const updatedNews = await newsItem.save();
    res.json(updatedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete news (Admin only)
const deleteNews = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      return res.status(404).json({ message: 'News not found' });
    }

    await newsItem.remove();
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addNews, getNews, updateNews, deleteNews };