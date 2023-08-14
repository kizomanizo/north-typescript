"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roleRouter_1 = __importDefault(require("./routes/roleRouter"));
const errorHandler_1 = __importDefault(require("./helpers/errorHandler"));
class AppServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }
    initializeMiddleware() {
        this.app.disable("x-powered-by");
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    initializeRoutes() {
        this.app.use("/api/v1/roles", roleRouter_1.default.getRouter());
        console.log("Initializing Routes...");
        this.app.get("/api/v1/test", (req, res) => {
            res.status(200).json({
                success: true,
                path: req.path,
                message: "You are on the test path",
            });
        });
    }
    initializeErrorHandling() {
        const errorHandlerInstance = new errorHandler_1.default(); // Catch-all error handler middleware
        this.app.use((err, req, res, next) => {
            errorHandlerInstance.handleError(err, req, res, next);
        });
    }
    start() {
        this.app.listen(this.port, () => {
            console.log("INFO: The North App is up and listening on " + this.port);
        });
    }
}
exports.default = AppServer;
const appServer = new AppServer();
appServer.start();
//# sourceMappingURL=index.js.map