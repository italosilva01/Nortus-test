import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Validar se o JWT_SECRET está definido

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const secret = process.env.JWT_SECRET;
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'Token missing' });
    return;
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
      return;
    }

    req.user = decoded;
    next();
  });
};
