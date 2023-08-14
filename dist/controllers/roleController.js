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
const roleService_1 = __importDefault(require("../services/roleService"));
class RoleController {
    constructor() {
        this.roleService = new roleService_1.default();
    }
    createRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roleService.createRole(req, res, next);
        });
    }
    getRoles(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roleService.getRoles(req, res, next);
        });
    }
    getRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roleService.getRole(req, res, next);
        });
    }
    updateRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roleService.updateRole(req, res, next);
        });
    }
    deleteRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roleService.deleteRole(req, res, next);
        });
    }
}
exports.default = RoleController;
//# sourceMappingURL=roleController.js.map