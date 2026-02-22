import mapClientsRepository from "../repositories/mapClientsRepository";

class MapClientsService {

  getMapClientsData = async () => {
    try {
      const mapClientsData = await mapClientsRepository.getMapClientsData();
      return mapClientsData;
    } catch (error) {
      throw new Error('Error getting map clients data');
    }
  }
}

export default new MapClientsService();