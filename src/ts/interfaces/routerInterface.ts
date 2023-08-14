import { Router } from "express";

/**
 * @author Kizito S.M.
 * @param router - Express router type
 */
export interface IRouter {
  router: Router;
  getRouter(): Router;
}
