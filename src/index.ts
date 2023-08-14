import express, { Request, Response } from "express";
import RoleRouter from "./routes/roleRouter";
import ErrorHandler from "./helpers/errorHandler";

class AppServer {
  private app: express.Application;
  private port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddleware(): void {
    this.app.disable("x-powered-by");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private initializeRoutes(): void {
    this.app.use("/api/v1/roles", RoleRouter.getRouter());
    console.log("Initializing Routes...");
    this.app.get("/api/v1/test", (req, res) => {
      res.status(200).json({
        success: true,
        path: req.path,
        message: "You are on the test path",
      });
    });
  }

  private initializeErrorHandling(): void {
    const errorHandlerInstance = new ErrorHandler(); // Catch-all error handler middleware

    this.app.use((err: any, req: Request, res: Response, next: any) => {
      errorHandlerInstance.handleError(err, req, res, next);
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("INFO: The North App is up and listening on " + this.port);
    });
  }
}

export default AppServer;

const appServer = new AppServer();
appServer.start();
