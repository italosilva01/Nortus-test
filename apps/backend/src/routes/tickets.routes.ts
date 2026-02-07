import type { Request, Response } from "express";
import { Router } from "express";
import ticketsController from "../controllers/ticketsController";
import { authenticateToken } from "../middlewares/authenticationJwt";
const router = Router();

router.get("/", authenticateToken, async (req: Request, res: Response) => {
  await ticketsController.getTicketsData(req, res);
});

router.post("/", authenticateToken, async (req: Request, res: Response) => {
  await ticketsController.createTicket(req, res);
});

export default router;
