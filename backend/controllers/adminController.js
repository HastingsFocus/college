const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

// 🔐 Generate Token
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role }, // ✅ MUST include role for adminOnly middleware
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

//
// 🔑 ADMIN LOGIN
//
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check admin exists
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Check password
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Generate token (IMPORTANT FIX HERE)
    const token = generateToken(admin._id, admin.role);

    // 4. Send response
    res.json({
      token,
      user: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { adminLogin };