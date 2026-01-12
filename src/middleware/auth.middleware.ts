// import { Request, Response, NextFunction } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";


// export interface AuthRequest extends Request {
//   user?: {
//     id: string;
//     role: string;
//   };
// }

// export const authenticate = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify( 
//         token, 
//         process.env.JWT_SECRET as string 
//     ) as JwtPayload { id: string; role: string };

//     req.user = decoded;
//     next();
//   } catch {
//     return res.status(401).json({ message: "Invalid token" });

// import jwt from "jsonwebtoken";
// import { Request, Response, NextFunction } from "express";

// export const authenticate = (req: any, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   req.user = jwt.verify(token, process.env.JWT_SECRET!);
//   next();
// };

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing" });

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};