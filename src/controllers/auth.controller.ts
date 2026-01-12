// import { Request, Response } from "express";
// import * as AuthService from "../service/auth.service";

// export const register = async (req: Request, res: Response) => {
//   const user = await AuthService.registerUser(req.body);
//   res.status(201).json({ message: "Check email to verify account", user });
// };

// export const verify = async (req: Request, res: Response) => {
//   await AuthService.verifyEmail(req.params.token);
//   res.json({ message: "Account verified" });
// };

// export const login = async (req: Request, res: Response) => {
//   const token = await AuthService.loginUser(req.body.email, req.body.password);
//   res.json({ token });
// };

import { Request, Response } from "express";
import * as AuthService from "../service/auth.service";

export const register = async (req: Request, res: Response) => {
  const user = await AuthService.registerUser(req.body);
  res.status(201).json({ message: "Check email to verify account", user });
};

export const verify = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(400).json({ error: "Verification token is required" });
    }

    await AuthService.verifyEmail(token);
    res.json({ message: "Account verified" });
  } catch (err: any) {
    res.status(400).json({ error: err.message || "Verification failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  const token = await AuthService.loginUser(req.body.email, req.body.password);
  res.json({ token });
};
