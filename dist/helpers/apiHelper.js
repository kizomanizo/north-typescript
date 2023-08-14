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
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHandler {
    /**
     * Return every response to the API
     * @name api
     * @description Handles the responses that are sent to API requests
     * @author Kizito S.
     * @returns res
     */
    static api(req, res, status, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(status || 200).json({
                success: true,
                request: req.path,
                payload: payload || "",
            });
        });
    }
}
exports.default = ResponseHandler;
//# sourceMappingURL=apiHelper.js.map