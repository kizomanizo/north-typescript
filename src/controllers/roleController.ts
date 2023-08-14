import { Request, Response, NextFunction } from "express";
import RoleService from "../services/roleService";
import response from "../helpers/apiHelper";

class RoleController {
  constructor() {}

  public async createRole(req: Request, res: Response, next: NextFunction) {
    await RoleService.createRole(req, res, next);
  }

  public async getRoles(req: Request, res: Response, next: NextFunction) {
    const allRoles = await RoleService.getRoles(req, res, next);
    return response.api(req, res, 200, allRoles);
  }

  public async getRole(req: Request, res: Response, next: NextFunction) {
    await RoleService.getRole(req, res, next);
  }

  public async updateRole(req: Request, res: Response, next: NextFunction) {
    await RoleService.updateRole(req, res, next);
  }

  public async deleteRole(req: Request, res: Response, next: NextFunction) {
    await RoleService.deleteRole(req, res, next);
  }
}

export default new RoleController();
