import { Request, Response } from "express";
import * as UserService from "../service/user/user.service";

/**
 * Get logged-in user profile
 */
export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const user = await UserService.getUserById(userId);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch user profile",
    });
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const payload = req.body;

    const updatedUser = await UserService.updateUser(userId, payload);

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update profile",
    });
  }
};

/**
 * Get all users (Admin / Super Admin only)
 */
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch users",
    });
  }
};

/**
 * Get user by ID (Admin / Super Admin)
 */
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await UserService.getUserById(userId);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: error.message || "User not found",
    });
  }
};

/**
 * Deactivate user account (Admin / Super Admin)
 */
export const deactivateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await UserService.deactivateUser(userId);

    return res.status(200).json({
      success: true,
      message: "User account deactivated",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to deactivate user",
    });
  }
};
