import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { authenticateToken } from '../middlewares/authenticationJwt';

const router = Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
  const mapData = fs.readFileSync(
    path.join(__dirname, '..', 'map.json'),
    'utf8'
  );

  res.json(JSON.parse(mapData));
});

export default router;




