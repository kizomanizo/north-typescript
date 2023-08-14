import winston from "winston";

class CustomErrorLogger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "app.log", level: "info" }),
        new winston.transports.Console({ level: "info" }),
      ],
    });
  }

  public async logError(err: any): Promise<void> {
    await this.errorLogger(err);
  }

  private async errorLogger(err: any): Promise<void> {
    this.logger.info("An error has occurred");
  }
}

export default CustomErrorLogger;
