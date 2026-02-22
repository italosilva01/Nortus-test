import { Request, Response } from "express";
import dashboardService from "../services/dashboardService";
import { HTTP } from "../utils/constants";

class DashboardController {
  getDashboardData = async (req: Request, res: Response) => {
    try {
      const dashboardData = await dashboardService.getDashboardData();
      res.status(HTTP.OK).json(dashboardData);
    } catch (error) {
      res.status(HTTP.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  };
}

export default new DashboardController();
