import jwt from 'jsonwebtoken';

const payload = { sub: '12345', role: 'user' };
const secret = process.env.JWT_SECRET;

//const token = jwt.sign(payload, secret, {
// expiresIn: '15m',
//});

export const verifyToken = (token: string | undefined) => {
  if (!token) {
    throw new Error('Token is required');
  }
  if (!secret) {
    throw new Error('Secret is required');
  }
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
export const returnToken = (payload: any) => {
  if (!secret) {
    throw new Error('Secret is required');
  }
  return jwt.sign(payload, secret, {
    expiresIn: '15m',
  });
};

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded;
    next();
  });
}
