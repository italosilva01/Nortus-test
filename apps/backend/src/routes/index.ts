import { Router } from 'express';
import { loginController } from '../controllers/authController';
import ticketsRouter from './tickets.routes';

const router = Router();

// Registrar rotas
router.use('/tickets', ticketsRouter);

// Rota raiz da API
router.get('/', (_req, res) => {
  res.json({
    message: 'API Nortus Backend',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      tickets: '/api/tickets',
      dashboard: '/api/dashboard',
    },
  });
});
router.post('/login', async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Body is required' });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email is required' });
  }
  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }
  //  const user = await User.findOne({ where: { email } });
  await loginController(req, res);
});

export default router;
