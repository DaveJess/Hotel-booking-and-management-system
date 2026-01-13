import { Schema, model, Document } from 'mongoose';
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/password";
import { generateJWT } from "../utils/jwt";
import { generateEmailToken } from "../utils/token";
import { sendVerificationEmail } from "./mail.service";

interface IUser extends Document {
  email: string;
  emailToken?: string;
  // ...other fields...
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  emailToken: { type: String },
  // ...other fields...
});

export default model<IUser>('User', UserSchema);

export const registerUser = async (data: any) => {
  const token = generateEmailToken();

  const user = await User.create({
    ...data,
    password: await hashPassword(data.password),
    emailToken: token,
  });

  if (!user) throw new Error("User registration failed");
  await sendVerificationEmail(user.email, token);
  return user;
};

export const verifyEmail = async (token: string) => {
  const user = await User.findOne({ emailToken: token });
  if (!user) throw new Error("Invalid token");

  user.isVerified = true;
  user.emailToken = undefined;
  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  if (!user.isVerified) throw new Error("Email not verified");

  // If comparePassword is not a method on user, use comparePassword(password, user.password)
  const isMatch = typeof user.comparePassword === 'function'
    ? await user.comparePassword(password)
    : await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // You can use either generateJWT or jwt.sign, but for consistency, let's use generateJWT
  const token = generateJWT({ id: user._id, role: user.role });
  return { token, user };
};


