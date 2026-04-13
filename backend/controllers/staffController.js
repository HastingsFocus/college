const Staff = require("../models/Staff");
const path = require("path");
const fs = require("fs");

// =======================
// GET all staff (public)
// =======================
const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// GET single staff by ID
// =======================
const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// ADD STAFF
// =======================
const addStaff = async (req, res) => {
  try {
    const { name, department, position, email, educationBackground } =
      req.body;

    const staffExists = await Staff.findOne({ email });

    if (staffExists) {
      return res.status(400).json({ message: "Staff already exists" });
    }

    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const staff = await Staff.create({
      name,
      department,
      position,
      email,
      educationBackground,
      image,
    });

    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =======================
// UPDATE STAFF
// =======================
const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    const { name, department, position, email, educationBackground } =
      req.body;

    staff.name = name || staff.name;
    staff.department = department || staff.department;
    staff.position = position || staff.position;
    staff.email = email || staff.email;
    staff.educationBackground =
      educationBackground || staff.educationBackground;

    // =======================
    // IMAGE UPDATE (with delete old)
    // =======================
    if (req.file) {
      if (staff.image) {
        const oldImagePath = path.join(__dirname, "..", staff.image);

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      staff.image = `/uploads/${req.file.filename}`;
    }

    const updatedStaff = await staff.save();

    res.json(updatedStaff);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// DELETE STAFF
// =======================
const deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    // =======================
    // DELETE IMAGE FROM STORAGE
    // =======================
    if (staff.image) {
      const imagePath = path.join(__dirname, "..", staff.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await staff.deleteOne();

    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getStaff,
  getStaffById,
  addStaff,
  updateStaff,
  deleteStaff,
};