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
const client_1 = require("@prisma/client");
const apiHelper_1 = __importDefault(require("../helpers/apiHelper"));
const catchAsync_1 = __importDefault(require("../helpers/catchAsync"));
class RoleService {
    constructor() {
        // Add a new role to the DB
        this.createRole = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, access } = req.body;
            const newRole = yield this.prisma.role.create({
                data: {
                    name,
                    access,
                },
            });
            return apiHelper_1.default.api(req, res, 201, newRole);
        }));
        // Get all roles from the DB
        this.getRoles = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const allRoles = yield this.prisma.role.findMany();
            return apiHelper_1.default.api(req, res, 200, allRoles);
        }));
        // Get a single role from the DB
        this.getRole = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const uuid = req.params;
            const updatedRole = yield this.prisma.role.findFirst({
                where: { uuid },
            });
            return apiHelper_1.default.api(req, res, 200, updatedRole);
        }));
        // Update role details in the DB
        this.updateRole = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { uuid } = req.params;
            const existingRole = yield this.prisma.role.findFirst({ where: { uuid } });
            if (!existingRole) {
                return apiHelper_1.default.api(req, res, 404, "Role not found");
            }
            const updatedRole = yield this.prisma.role.update({
                where: { uuid },
                data: req.body,
            });
            return apiHelper_1.default.api(req, res, 200, updatedRole);
        }));
        // Delete a single role from the DB
        this.deleteRole = (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const uuid = req.params.uuid;
            const deletedRole = yield this.prisma.role.delete({
                where: { uuid },
            });
            return apiHelper_1.default.api(req, res, 200, deletedRole);
        }));
        this.prisma = new client_1.PrismaClient();
    }
}
exports.default = RoleService;
//# sourceMappingURL=roleService.js.map