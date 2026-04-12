const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const adminRoutes = require("./routes/adminRoutes");
const programRoutes = require("./routes/programRoutes");
const newsRoutes = require("./routes/newsRoutes");
const pageRoutes = require("./routes/pageRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const staffRoutes = require("./routes/staffRoutes");

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/staff", staffRoutes);

// Static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect DB + start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Database connection failed ❌", error);
    process.exit(1);
  }
};

startServer();