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
exports.CreatePhoneController = void 0;
const services_1 = require("../../services");
const dtos_1 = require("../dtos");
class CreatePhoneController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = dtos_1.createPhoneSchemaDTO.parse(req.body);
            const cpf = req.headers.cpf;
            const createPhoneService = new services_1.CreatePhoneService();
            try {
                const phone = yield createPhoneService.execute(Object.assign({ cpf }, data));
                return res.json(phone);
            }
            catch (error) {
                const _error = error;
                return res.status(500).json({ message: _error.message });
            }
        });
    }
}
exports.CreatePhoneController = CreatePhoneController;
