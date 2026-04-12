const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const protectAdmin = async (req, res, next) => {
  let token;

  // 1. Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 2. Extract token
      token = req.headers.authorization.split(" ")[1];

      // 3. Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 🔥 DEBUG LOG 1 (ADD HERE)
      console.log("DECODED TOKEN:", decoded);

      // 4. Get admin from DB
      const admin = await Admin.findById(decoded.id).select("-password");

      // 🔥 DEBUG LOG 2 (ADD HERE)
      console.log("REQ.ADMIN:", admin);

      if (!admin) {
        return res.status(401).json({ message: "Admin not found" });
      }

      // 5. Attach admin to request
      req.admin = admin;

      return next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: "Token failed / not authorized" });
    }
  }

  // 6. No token found
  return res.status(401).json({ message: "No token, access denied" });
};

module.exports = protectAdmin;