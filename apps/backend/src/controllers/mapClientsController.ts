import mapClientsService from "../services/mapClientsService";
import { HTTP } from "../utils/constants";

class MapClientsController {
  getMapClientsData = async (req: Request, res: Response): Promise<void> => {
    try {
      const mapClientsData = await mapClientsService.getMapClientsData();
      res.status(HTTP.OK as number).json(mapClientsData);
    } catch (error) {
      throw new Error('Error getting map clients data');
    }
  }
}

export default new MapClientsController();