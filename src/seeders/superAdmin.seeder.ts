import User from "../models/user.model";
import { hashPassword } from "../utils/password";
import { Role } from "../interfaces/roles.interface";
import "../database/db"; 

(async () => {
  const exists = await User.findOne({ role: Role.SUPER_ADMIN });
  if (exists) return console.log("Super admin exists");

  await User.create({
    name: "Super Admin",
    email: "superadmin@fane.com",
    password: await hashPassword("Admin123"),
    nin: "00000000000",
    role: Role.SUPER_ADMIN,
    isVerified: true,
  });

  console.log("Super Admin seeded");
  process.exit();
})();
