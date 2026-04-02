const Page = require('../models/Page');

// Get all pages (public)
const getPages = async (req, res) => {
  try {
    const pages = await Page.find({ isActive: true });
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single page by slug (public)
const getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug, isActive: true });
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Add page
const addPage = async (req, res) => {
  const { title, slug, content } = req.body;

  if (!title || !slug || !content) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const pageExists = await Page.findOne({ slug });
    if (pageExists) return res.status(400).json({ message: 'Slug already exists' });

    const page = await Page.create({ title, slug, content });
    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Update page
const updatePage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) return res.status(404).json({ message: 'Page not found' });

    const { title, slug, content, isActive } = req.body;
    page.title = title || page.title;
    page.slug = slug || page.slug;
    page.content = content || page.content;
    if (typeof isActive === 'boolean') page.isActive = isActive;

    await page.save();
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Delete page
const deletePage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) return res.status(404).json({ message: 'Page not found' });

    await page.remove();
    res.json({ message: 'Page deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getPages, getPageBySlug, addPage, updatePage, deletePage };