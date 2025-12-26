import { Router } from 'express';
import { AuthController } from '../controllers/authController';
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
  console.log('login backend AAA');
  const authController = new AuthController();
  await authController.login(req, res);
});

export default router;
