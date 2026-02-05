import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const verifyToken = (token: string | undefined) => {
  if (!token) {
    throw new Error("Token is required");
  }
  if (!secret) {
    throw new Error("Secret is required");
  }
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
export const returnToken = (payload: any) => {
  if (!secret) {
    throw new Error("Secret is required");
  }
  return jwt.sign(payload, secret, {
    expiresIn: "15m",
  });
};
