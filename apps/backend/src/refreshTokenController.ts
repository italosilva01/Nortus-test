import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { dbTest } from './controllers/authController';
import { HTTP, JWT_EXPIRES_IN } from './utils/constants';

interface DecodedToken {
  id: number;
  role: string;
  name: string;
  type?: string;
}
export class RefreshTokenController {
  secret = process.env.JWT_SECRET;

  async refreshToken(req: Request, res: Response) {
  
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res
        .status(HTTP.UNAUTHORIZED)
        .json({ message: 'Refresh token is required' });
    }

    try {
      const decoded = jwt.verify(
        refreshToken,
        this.secret as string
      ) as DecodedToken;
      if (decoded.type !== 'refresh') {
        throw new Error();
      }

      // Verificar se existe no store
      //const storedToken = refreshTokensStore.find(
      //  rt => rt.token === refreshToken && rt.userId === decoded.id
      //);
      //if (!storedToken) {
      // return res.status(403).json({ message: 'Invalid refresh token' });
      //}

      const user = dbTest.find(
        (user: { id: number }) => user.id === decoded.id
      );

      if (!user) {
        return res
          .status(HTTP.UNAUTHORIZED)
          .json({ message: 'User not found' });
      }

      const newAccessToken = jwt.sign(
        { id: user.id, role: user.role, name: user.name },
        this.secret as string,
        {
          expiresIn: JWT_EXPIRES_IN.ACCESS_TOKEN,
        }
      );

      return res.status(HTTP.OK).json({
        accessToken: newAccessToken,
        username: user.name,
      });
    } catch (error) {
      return res
        .status(HTTP.UNAUTHORIZED)
        .json({ message: 'Invalid refresh token' });
    }
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res
        .status(HTTP.UNAUTHORIZED)
        .json({ message: 'Refresh token is required' });
    }
  }
}
