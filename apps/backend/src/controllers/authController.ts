import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { loginSchema } from '../schemas/loginSchema';
const dbTest = [
  {
    id: 1,
    email: 'test@test.com',
    password: '123456',
    name: 'Test User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class AuthController {
  secret = process.env.JWT_SECRET;

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      loginSchema.parse({ email, password });
    } catch (error: any) {
      console.log('error', error);
      return res.status(400).json({ message: error.errors[0].message });
    }
    // Falta a logica de buscar o usuario no banco de dados
    // Vou simular esse request pois estou com preguiça de buscar no banco de dados
    const user = dbTest.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { id: user.id, role: user.role, name: user.name },
      this.secret as string,
      { expiresIn: '15m' }
    );

    const payloadResponse = {
      data: {
        accessToken: token,
        username: user.name,
      },
    };

    return res.status(200).json(payloadResponse);
  }
}
