import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import * as UserService from "../service/user/user.service";

/**
 * Get logged-in user profile
 */
export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?._id || req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User ID not found",
      });
    }

    const user = await UserService.getUserById(userId as string);

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
export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?._id || req.user?.id;
    const payload = req.body;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User ID not found",
      });
    }

    const updatedUser = await UserService.updateUser(userId as string, payload);

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

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

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

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

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

/**
 * Create new user (Admin / Super Admin only)
 */
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await UserService.createUser(userData);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create user",
    });
  }
};

/**
 * Update user (Admin / Super Admin only)
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const updatedUser = await UserService.updateUser(id, payload);

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update user",
    });
  }
};

/**
 * Delete user (Admin / Super Admin only)
 */
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await UserService.deleteUser(id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to delete user",
    });
  }
};
