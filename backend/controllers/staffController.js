const Staff = require("../models/Staff");
const cloudinary = require("../config/cloudinary");

// =======================
// SAFE Cloudinary public_id extractor
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
    console.error("public_id extraction error:", err.message);
    return null;
  }
};

// =======================
// GET all staff (public)
// =======================
const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    console.error("GET STAFF ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// =======================
// GET single staff
// =======================
const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    res.json(staff);
  } catch (error) {
    console.error("GET STAFF BY ID ERROR:", error);
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
      image: req.file ? req.file.path : "",
    });

    res.status(201).json(staff);
  } catch (error) {
    console.error("ADD STAFF ERROR:", error);
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
    // IMAGE UPDATE (CLOUDINARY SAFE)
    // =======================
    if (req.file) {
      if (staff.image) {
        const publicId = getPublicId(staff.image);

        if (publicId) {
          try {
            await cloudinary.uploader.destroy(publicId);
          } catch (err) {
            console.error("Cloudinary delete error:", err.message);
          }
        }
      }

      staff.image = req.file.path;
    }

    const updated = await staff.save();

    res.json(updated);
  } catch (error) {
    console.error("UPDATE STAFF ERROR:", error);
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
    // DELETE CLOUDINARY IMAGE
    // =======================
    if (staff.image) {
      const publicId = getPublicId(staff.image);

      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (err) {
          console.error("Cloudinary delete error:", err.message);
        }
      }
    }

    await Staff.findByIdAndDelete(req.params.id);

    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    console.error("DELETE STAFF ERROR:", error);
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