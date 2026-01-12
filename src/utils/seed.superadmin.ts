import Admin from "../models/admin.model";
import bcrypt from "bcrypt";

export const seedSuperAdmin = async () => {
  const existing = await Admin.findOne({ email: "superadmin@fane.com" });
  if (!existing) {
    const password = await bcrypt.hash("SuperAdmin@123", 10);
    await Admin.create({
      email: "superadmin@fane.com",
      password,
      role: "superadmin",
    }); 
    console.log("Super Admin created!");
  } else {
    console.log("Super Admin already exists");
  }
};
