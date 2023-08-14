import { Router } from "express";
import { IRouter } from "../ts/interfaces/routerInterface"; // Import the interface
import RoleController from "../controllers/roleController"; // Import the controller

class RoleRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router(); // Initializing the router

    // Defining routes
    this.router.route("/").get(RoleController.getRoles);
    this.router.post("/", RoleController.createRole);
    this.router.patch("/:uuid", RoleController.updateRole);
    this.router.delete("/:uuid", RoleController.deleteRole);
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default new RoleRouter();
