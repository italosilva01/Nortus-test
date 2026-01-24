import fs from "fs";
import path from "path";

 class TicketsRepository {

  getTicketsData = async() => {
    const ticketsData = fs.readFileSync(path.join(__dirname, '..', 'tickets.json'), 'utf8');
    return JSON.parse(ticketsData);
  }
  create = async(ticket: unknown) => {
    fs.writeFileSync(path.join(__dirname, '..', 'tickets.json'), JSON.stringify(ticket, null, 2));
  
  }
}

export default new TicketsRepository();