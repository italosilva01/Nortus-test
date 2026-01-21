import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { authenticateToken } from '../middlewares/authenticationJwt';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  const dashboardData = fs.readFileSync(
    path.join(__dirname, '..', 'dash.json'),
    'utf8'
  );

  res.json(JSON.parse(dashboardData));
});

export default router;
