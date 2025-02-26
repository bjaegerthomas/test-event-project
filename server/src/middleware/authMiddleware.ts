import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express"; // Ensure Express types are used

dotenv.config();

// ✅ Extend Express Request to include user property
declare global {
  namespace Express {
    interface Request {
      user?: jwt.JwtPayload;
    }
  }
}

// ✅ Validate JWT_SECRET exists before running the server
if (!process.env.JWT_SECRET) {
  throw new Error("❌ Missing JWT_SECRET in environment variables. Check your .env file.");
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // ✅ Type assertion for TS
    req.user = decoded as jwt.JwtPayload; // ✅ Attach decoded user info to request
    return next(); // ✅ Move to next middleware/route
  } catch (error) {
    console.error("❌ Invalid token:", error);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};