"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = __importDefault(require("../controllers/roleController")); // Import the controller
class RoleRouter {
    constructor() {
        this.RoleController = new roleController_1.default(); // Initializing the controller
        this.router = (0, express_1.Router)(); // Initializing the router
        // Defining routes
        this.router.route("/").get(this.RoleController.getRoles);
        this.router.post("/", this.RoleController.createRole);
        this.router.patch("/:uuid", this.RoleController.updateRole);
        this.router.delete("/:uuid", this.RoleController.deleteRole);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new RoleRouter();
//# sourceMappingURL=roleRouter.js.map