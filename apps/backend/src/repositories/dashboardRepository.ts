import fs from "fs";
import path from "path";

class DashboardRepository {
  getDashboardData = async () => {
    const dashboardData = fs.readFileSync(
      path.join(__dirname, "..", "dash.json"),
      "utf8"
    );
    return JSON.parse(dashboardData);
  };
}

export default new DashboardRepository();
