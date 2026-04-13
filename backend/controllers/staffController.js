const Staff = require("../models/Staff");
const cloudinary = require("../config/cloudinary");

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

    const staff = await Staff.create({
      name,
      department,
      position,
      email,
      educationBackground,
      image: req.file ? req.file.path : "", // ✅ Cloudinary URL
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

    // 🔥 UPDATE IMAGE (Cloudinary)
    if (req.file) {
      if (staff.image) {
        const publicId = staff.image.split("/").pop().split(".")[0];

        await cloudinary.uploader.destroy(`college-images/${publicId}`);
      }

      staff.image = req.file.path; // ✅ new Cloudinary image
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

    // 🔥 DELETE IMAGE FROM CLOUDINARY
    if (staff.image) {
      const publicId = staff.image.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(`college-images/${publicId}`);
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