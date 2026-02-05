import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import ticketsRepository from "../repositories/ticketsRepository";

class TicketsService {
  getTicketsData = async () => {
    const ticketsData = await ticketsRepository.getTicketsData();
    return ticketsData;
  };

  createTicket = async (
    client: string,
    email: string,
    priority: string,
    responsible: string,
    subject: string
  ) => {
    const ticket = {
      id: uuidv4() as string,
      client,
      email,
      priority,
      responsible,
      subject,
      status: "Aberto",
      createdAt: new Date().toISOString(),
    };

    const ticketResponse = fs.readFileSync(
      path.join(__dirname, "..", "tickets.json"),
      "utf8"
    );
    const ticketResponseData = JSON.parse(ticketResponse);
    const tickets = ticketResponseData.tickets;
    tickets.push(ticket);
    const newTicketsFile = { ...ticketResponseData, tickets: tickets };

    try {
      await ticketsRepository.create(newTicketsFile);
    } catch (error) {
      throw new Error("error creating ticket");
    }
  };
}

export default new TicketsService();
