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
exports.FindPhoneByIdController = void 0;
const services_1 = require("../../services");
class FindPhoneByIdController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = req.headers.cpf;
            const productId = req.params.productId;
            const findPhoneByIdService = new services_1.FindPhoneByIdService();
            try {
                const phone = yield findPhoneByIdService.execute({ cpf, productId });
                return res.json(phone);
            }
            catch (error) {
                const _error = error;
                if (_error.message === 'not found') {
                    return res.status(404).json({ message: _error.message });
                }
                return res.status(500).json({ message: _error.message });
            }
        });
    }
}
exports.FindPhoneByIdController = FindPhoneByIdController;
