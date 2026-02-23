import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { loginSchema } from '../schemas/loginSchema';
import { HTTP, JWT_EXPIRES_IN } from '../utils/constants';
export const dbTest = [
  {
    id: 1,
    username: 'Valeria.gonzalez+7476@eightroom.com',
    password: 'User7476.',
    name: 'Test User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class AuthController {
  secret = process.env.JWT_SECRET;

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    console.log('aqui');
    try {
      loginSchema.parse({ username, password });
    } catch (error: any) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    // Falta a logica de buscar o usuario no banco de dados
    // Vou simular esse request pois estou com preguiça de buscar no banco de dados
    const user = dbTest.find(
      (user) => user.username === username && user.password === password
    );
    console.log('user', user);
    if (!user) {
      return res
        .status(HTTP.UNAUTHORIZED)
        .json({ message: 'Invalid email or password' });
    }
    const payloadTokens = {
      id: user.id,
      role: user.role,
      name: user.name,
    };
    const token = jwt.sign(payloadTokens, this.secret as string, {
      expiresIn: JWT_EXPIRES_IN.ACCESS_TOKEN,
    });

    const refreshToken = jwt.sign(
      { ...payloadTokens, type: 'refresh' },
      this.secret as string,
      {
        expiresIn: JWT_EXPIRES_IN.REFRESH_TOKEN,
      }
    );
    const payloadResponse = {
      accessToken: token,
      refreshToken: refreshToken,
      username: user.name,
    };

    return res.status(200).json(payloadResponse);
  }
}
