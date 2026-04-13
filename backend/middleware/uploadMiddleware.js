const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// =======================
// CLOUDINARY STORAGE
// =======================
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "college-images",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 800, height: 800, crop: "limit" }],
  },
});

// =======================
// FILE FILTER
// =======================
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png/;

  const extOk = allowedTypes.test(file.originalname.toLowerCase());
  const mimeOk = allowedTypes.test(file.mimetype);

  if (extOk && mimeOk) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG files are allowed"));
  }
};

// =======================
// MULTER INSTANCE
// =======================
const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;