import { Request, Response } from "express";

class ResponseHandler {
  /**
   * Return every response to the API
   * @name api
   * @description Handles the responses that are sent to API requests
   * @author Kizito S.
   * @returns res
   */
  public static async api(
    req: Request,
    res: Response,
    status: number,
    payload: any
  ): Promise<void> {
    res.status(status || 200).json({
      success: true,
      request: req.path,
      payload: payload || "",
    });
  }
}

export default ResponseHandler;
