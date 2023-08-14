import CustomErrorLogger from "./errorHelper";
import response from "./apiHelper";
import { NextFunction, Request, Response } from "express";

class ErrorHandler {
  private logger: CustomErrorLogger;

  constructor() {
    this.logger = new CustomErrorLogger();
  }

  public async handleError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // await this.logger.logError(err);
      res.status(req.statusCode || 500).json({
        success: false,
        request: req.path,
        payload: err.message,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ErrorHandler;
