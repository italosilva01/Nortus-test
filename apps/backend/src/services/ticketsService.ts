import fs from "fs";
import path from "path";
import ticketsRepository from "../repositories/ticketsRepository";

class TicketsService {
  getTicketsData = async () => {
    const ticketsData = await ticketsRepository.getTicketsData();
    console.log(ticketsData);
    return ticketsData;
  };

  createTicket = async (
    client: string,
    email: string,
    priority: string,
    responsible: string,
    subject: string,
  ) => {
    const ticket = {
      id: crypto.randomUUID(),
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
      "utf8",
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
