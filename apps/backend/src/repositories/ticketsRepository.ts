import fs from "fs";
import path from "path";
import { Ticket } from "../models/ticket";

class TicketsRepository {
  getTicketsData = async () => {
    const filePath = path.join(__dirname, "..", "tickets.json");
    const ticketsData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(ticketsData);
  };
  getTicketById = async (id: string) => {
    const ticketsData = await this.getTicketsData();
    const ticket = ticketsData.tickets.find((t: Ticket) => t.id === id);
    if (!ticket) {
      throw new Error("Ticket not found");
    }
    return ticket;
  };
  
  create = async (ticket: Ticket) => {
    const ticketsData = await this.getTicketsData();
    const ticketExists = ticketsData.tickets.find(
      (t: Ticket) => t.id === ticket?.id,
    );
    if (ticketExists) {
      throw new Error("Ticket already exists");
    }
    ticketsData.tickets.push(ticket);
    fs.writeFileSync(
      path.join(__dirname, "..", "tickets.json"),
      JSON.stringify(ticketsData, null, 2),
    );
  };
  update = async (newDataTickets: Ticket) => {
    const ticketsData = await this.getTicketsData();
    const ticketExistsIndex = ticketsData.tickets.findIndex(
      (item: Ticket) => item.id === newDataTickets?.id,
    );

    if (ticketExistsIndex === -1) {
      throw new Error("Ticket not found");
    }

    ticketsData.tickets[ticketExistsIndex] = newDataTickets;
    fs.writeFileSync(
      path.join(__dirname, "..", "tickets.json"),
      JSON.stringify(ticketsData, null, 2),
    );
  };

  delete = async (id: string) => {
    const ticketsData = await this.getTicketsData();
    const ticketExistsIndex = ticketsData.tickets.findIndex(
      (item: Ticket) => item.id === id,
    );

    if (ticketExistsIndex === -1) {
      throw new Error("Ticket not found");
    }
    ticketsData.tickets.splice(ticketExistsIndex, 1);
    fs.writeFileSync(
      path.join(__dirname, "..", "tickets.json"),
      JSON.stringify(ticketsData, null, 2),
    );
  };
}

export default new TicketsRepository();
