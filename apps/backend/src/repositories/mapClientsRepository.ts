import fs from 'fs';
import path from 'path';

class mapClientsRepository {
  getMapClientsData = async () => {
    try {
      const mapClientsData = fs.readFileSync(path.join(__dirname, '..', 'map.json'), 'utf8');
      return JSON.parse(mapClientsData);
    } catch (error) {
      throw new Error('Error getting map clients data');
    }
  }
}

export default new mapClientsRepository();