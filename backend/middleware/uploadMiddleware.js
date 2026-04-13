const multer = require("multer");
const path = require("path");
const fs = require("fs");

// =======================
// Ensure uploads folder exists (NO /news)
// =======================
const uploadPath = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// =======================
// Storage config
// =======================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // ✅ FIXED (uploads only)
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// =======================
// File filter (images only)
// =======================
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png/;

  const ext = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

// =======================
// Export multer
// =======================
module.exports = multer({ storage, fileFilter });