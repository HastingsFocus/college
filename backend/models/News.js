const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  author: {
    type: String,
    default: 'Admin',
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String, // store image URL or path
    required: false, // 🔥 image is now optional
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);

module.exports = News;