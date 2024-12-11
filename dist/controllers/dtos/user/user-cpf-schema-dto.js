"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCpfSchemaDTO = void 0;
const zod_1 = require("zod");
const utils_1 = require("../../../utils");
exports.userCpfSchemaDTO = zod_1.z.object({
    cpf: zod_1.z.string({ required_error: 'cpf inválido' }).refine(utils_1.isValidCPF, {
        message: 'invalid cpf',
    }),
});
