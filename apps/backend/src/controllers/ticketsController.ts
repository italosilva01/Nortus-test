import ticketsService from "../services/ticketsService";
import { HTTP } from "../utils/constants";

class TicketsController {
  
  createTicket = async (req: Request, res: Response): Promise<void> => {
    try {
      const { client, email, priority, responsible, subject } = req.body;

      if(!client || !email || !priority || !responsible || !subject) {
        res.status(HTTP.BAD_REQUEST).json({ message: 'missing some fields' });
        return;
      }
      const ticket = await ticketsService.createTicket(client, email, priority, responsible, subject);
      res.status(HTTP.CREATED as number).json(ticket);
      return;
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR as number).json({ message: 'error' });
      return;
    }
  }
}

export default new TicketsController();