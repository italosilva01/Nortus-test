import fs from "fs";
import path from "path";

 class TicketsRepository {

  create = async(ticket: unknown) => {
    fs.writeFileSync(path.join(__dirname, '..', 'tickets.json'), JSON.stringify(ticket, null, 2));
  
  }
}

export default new TicketsRepository();