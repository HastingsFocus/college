const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true, // like "about-us" or "contact"
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;