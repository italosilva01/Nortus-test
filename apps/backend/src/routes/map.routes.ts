import { Router } from 'express';
import mapClientsController from '../controllers/mapClientsController';
import { authenticateToken } from '../middlewares/authenticationJwt';

const router = Router();

router.get('/', authenticateToken, async (req: Request, res: Response): Promise<void> => {
  await mapClientsController.getMapClientsData(req, res);
});

export default router;




