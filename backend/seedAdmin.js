import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      console.log("❌ Admin already exists");
      process.exit();
    }

    const admin = await Admin.create({
      email: "admin@college.com",
      password: "Admin1234!", // will be hashed automatically
    });

    console.log("✅ Admin created successfully:", admin.email);

    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();