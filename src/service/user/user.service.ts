import { IUser } from "../../interfaces/user.interface";
import * as UserRepository from "../../repository/user.repository";

/**
 * Get user by ID
 */
export const getUserById = async (userId: string) => {
  const user = await UserRepository.findUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

/**
 * Update user profile
 */
export const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const user = await UserRepository.updateUserById(userId, payload);

  if (!user) {
    throw new Error("Failed to update user");
  }

  return user;
};

/**
 * Get all users (Admin / Super Admin)
 */
export const getAllUsers = async () => {
  return await UserRepository.findAllUsers();
};

/**
 * Deactivate user account
 */
export const deactivateUser = async (userId: string) => {
  const user = await UserRepository.updateUserById(userId, {
    isActive: false,
  });

  if (!user) {
    throw new Error("Failed to deactivate user");
  }

  return user;
};
