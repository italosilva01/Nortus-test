import ticketsService from "../services/ticketsService";
import { HTTP } from "../utils/constants";

class TicketsController {
  getTicketsData = async (req: Request, res: Response): Promise<void> => {
    try {
      const ticketsData = await ticketsService.getTicketsData();
      res.status(HTTP.OK as number).json(ticketsData);
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR as number).json({ message: error });
      return;
    }
  };
  createTicket = async (req: Request, res: Response): Promise<void> => {
    try {
      const { client, email, priority, responsible, subject } = req.body;

      if (!client || !email || !priority || !responsible || !subject) {
        res.status(HTTP.BAD_REQUEST).json({ message: "missing some fields" });
        return;
      }
      const ticket = await ticketsService.createTicket(
        client,
        email,
        priority,
        responsible,
        subject,
      );
      res.status(HTTP.CREATED as number).json(ticket);
      return;
    } catch (error) {
      res
        .status(HTTP.INTERNAL_SERVER_ERROR as number)
        .json({ message: "error" });
      return;
    }
  };
  updateTicket = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("req", req);
      const idTicket = req.params.id;
      const bodyTicket = req.body;
      if (!idTicket || !bodyTicket) {
        res
          .status(HTTP.BAD_REQUEST as number)
          .json({ message: "missing some fields" });
      }

      const ticket = await ticketsService.updateTicket(idTicket, bodyTicket);
      res.status(HTTP.OK as number).json(ticket);
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR as number).json({ message: error });
      return;
    }
  };
}

export default new TicketsController();
