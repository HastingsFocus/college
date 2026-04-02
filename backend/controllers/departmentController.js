const Department = require('../models/Department');

// Create a new department (Admin only)
const addDepartment = async (req, res) => {
  const { name, description } = req.body;

  if (!name) return res.status(400).json({ message: 'Name is required' });

  const exists = await Department.findOne({ name });
  if (exists) return res.status(400).json({ message: 'Department already exists' });

  const department = await Department.create({ name, description });
  res.status(201).json(department);
};

// Get all departments (Public)
const getDepartments = async (req, res) => {
  const departments = await Department.find({ isActive: true });
  res.json(departments);
};

// Get single department by ID (Public)
const getDepartment = async (req, res) => {
  const department = await Department.findById(req.params.id);
  if (!department) return res.status(404).json({ message: 'Department not found' });
  res.json(department);
};

// Update department (Admin only)
const updateDepartment = async (req, res) => {
  const { name, description, isActive } = req.body;

  const department = await Department.findById(req.params.id);
  if (!department) return res.status(404).json({ message: 'Department not found' });

  department.name = name || department.name;
  department.description = description || department.description;
  if (isActive !== undefined) department.isActive = isActive;

  const updatedDepartment = await department.save();
  res.json(updatedDepartment);
};

// Delete department (Admin only)
const deleteDepartment = async (req, res) => {
  const department = await Department.findById(req.params.id);
  if (!department) return res.status(404).json({ message: 'Department not found' });

  await department.remove();
  res.json({ message: 'Department deleted successfully' });
};

module.exports = {
  addDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};