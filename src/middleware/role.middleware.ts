// export const authorize =
//   (...roles: string[]) =>
//   (req: any, res: any, next: any) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Forbidden" });
//     }
//     next();
//   };

import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(403).json({ message: "No user attached" });
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Unauthorized" });
    next();
  };
};