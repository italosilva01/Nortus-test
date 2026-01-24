import type { Request, Response } from 'express';
import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import ticketsController from '../controllers/ticketsController';
import { authenticateToken } from '../middlewares/authenticationJwt';
const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  const ticketsData = fs.readFileSync(
    path.join(__dirname, '..', 'tickets.json'),
    'utf8'
  );

  res.json(JSON.parse(ticketsData));
});

router.post('/', authenticateToken, async (req: Request, res: Response) => {
  await ticketsController.createTicket(req as Request, res as Response);
});
  

export default router;
  