import type { Request, Response } from 'express';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { authenticateToken } from '../middlewares/authenticationJwt';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  const ticketsData = fs.readFileSync(
    path.join(__dirname, '..', 'tickets.json'),
    'utf8'
  );

  res.json(JSON.parse(ticketsData));
});

export default router;
