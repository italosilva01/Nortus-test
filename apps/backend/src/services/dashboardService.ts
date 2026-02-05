import dashboardRepository from "../repositories/dashboardRepository";

class DashboardService {
  getDashboardData = () => {
    return dashboardRepository.getDashboardData();
  };
}
export default new DashboardService();
