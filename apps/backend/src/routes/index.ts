import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { RefreshTokenController } from '../refreshTokenContoller';
import dashboardRouter from './dashboard.routes';
import mapRouter from './map.routes';
import ticketsRouter from './tickets.routes';
const router = Router();

// Registrar rotas
router.use('/tickets', ticketsRouter);
router.use('/dashboard', dashboardRouter);
router.use('/map', mapRouter);

// Rota raiz da API
router.get('/', (_req, res) => {
  res.json({
    message: 'API Nortus Backend',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      tickets: '/api/tickets',
      dashboard: '/api/dashboard',
      map: '/api/map',
    },
  });
});
router.post('/login', async (req, res) => {
  const authController = new AuthController();
  await authController.login(req, res);
});

router.post('/refresh-token', async (req, res) => {
  const refreshTokenController = new RefreshTokenController();
  await refreshTokenController.refreshToken(req, res);
});

export default router;
