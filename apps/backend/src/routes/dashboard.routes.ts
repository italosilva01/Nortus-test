import { Request, Response, Router } from "express";
import dashboardController from "../controllers/dashboardController";
import { authenticateToken } from "../middlewares/authenticationJwt";

const router = Router();

router.get("/", authenticateToken, async (req: Request, res: Response) => {
  await dashboardController.getDashboardData(req, res);
});

export default router;
