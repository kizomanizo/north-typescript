"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
class CustomErrorLogger {
    constructor() {
        this.logger = winston_1.default.createLogger({
            level: "info",
            format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
            transports: [
                new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
                new winston_1.default.transports.File({ filename: "app.log", level: "info" }),
                new winston_1.default.transports.Console({ level: "info" }),
            ],
        });
    }
    logError(err) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.errorLogger(err);
        });
    }
    errorLogger(err) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("An error has occurred");
        });
    }
}
exports.default = CustomErrorLogger;
//# sourceMappingURL=errorHelper.js.map