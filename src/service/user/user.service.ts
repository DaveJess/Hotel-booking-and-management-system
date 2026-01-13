import { IUser } from "../../interfaces/user.interface";
import UserRepository from "../../repository/user.repository";

/**
 * Get user by ID
 */
export const getUserById = async (userId: string) => {
  const user = await UserRepository.getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

/**
 * Create new user
 */
export const createUser = async (userData: IUser) => {
  return await UserRepository.createUser(userData);
};

/**
 * Update user profile
 */
export const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const user = await UserRepository.updateUser(userId, payload);

  if (!user) {
    throw new Error("Failed to update user");
  }

  return user;
};

/**
 * Delete user
 */
export const deleteUser = async (userId: string) => {
  const user = await UserRepository.deleteUser(userId);

  if (!user) {
    throw new Error("Failed to delete user");
  }

  return user;
};

/**
 * Get all users (Admin / Super Admin)
 */
export const getAllUsers = async () => {
  return await UserRepository.getAllUsers();
};

/**
 * Deactivate user account
 */
export const deactivateUser = async (userId: string) => {
  const user = await UserRepository.updateUser(userId, {
    isActive: false,
  } as any);

  if (!user) {
    throw new Error("Failed to deactivate user");
  }

  return user;
};
