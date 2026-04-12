const adminOnly = (req, res, next) => {
  if (!req.admin) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  if (req.admin.role !== "admin") {
    return res.status(403).json({ message: "Admins only" });
  }

  next();
};

module.exports = adminOnly;