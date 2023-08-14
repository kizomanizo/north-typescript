import { NextFunction, Request, Response } from "express";
import { Role, PrismaClient } from "@prisma/client";
import response from "../helpers/apiHelper";
import catchAsync from "../helpers/catchAsync";

class RoleService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Add a new role to the DB
  createRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { name, access } = req.body;
    const newRole = await this.prisma.role.create({
      data: {
        name,
        access,
      },
    });
    return response.api(req, res, 201, newRole);
  });

  // Get all roles from the DB
  getRoles = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const allRoles = await this.prisma.role.findMany();
    return allRoles;
  });

  // Get a single role from the DB
  getRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params;
    const updatedRole = await this.prisma.role.findFirst({
      where: { uuid },
    });
    return response.api(req, res, 200, updatedRole);
  });

  // Update role details in the DB
  updateRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { uuid } = req.params;
    const existingRole = await this.prisma.role.findFirst({ where: { uuid } });

    if (!existingRole) {
      return response.api(req, res, 404, "Role not found");
    }
    const updatedRole: Role = await this.prisma.role.update({
      where: { uuid },
      data: req.body,
    });
    return response.api(req, res, 200, updatedRole);
  });

  // Delete a single role from the DB
  deleteRole = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const deletedRole = await this.prisma.role.delete({
      where: { uuid },
    });
    return response.api(req, res, 200, deletedRole);
  });
}

export default new RoleService();
