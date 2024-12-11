"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoneSchemaDTO = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const isRequiredText = 'Campo obrigatório';
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const ColorsEnumSchema = zod_1.z.nativeEnum(client_1.Colors);
exports.createPhoneSchemaDTO = zod_1.z.object({
    model: zod_1.z
        .string({ required_error: isRequiredText })
        .min(2, isRequiredText)
        .max(255, 'Modelo inválido'),
    brand: zod_1.z
        .string({ required_error: isRequiredText })
        .min(2, isRequiredText)
        .max(255, 'Marca inválida'),
    price: zod_1.z
        .number({ required_error: isRequiredText })
        .positive('O preço deve ser um número positivo'),
    date: zod_1.z
        .string({ required_error: isRequiredText })
        .min(1, isRequiredText)
        .regex(dateRegex, 'Data inválida. O formato esperado é dd/mm/aaaa'),
    endDate: zod_1.z
        .string({ required_error: isRequiredText })
        .min(1, isRequiredText)
        .regex(dateRegex, 'Data inválida. O formato esperado é dd/mm/aaaa'),
    color: ColorsEnumSchema,
});
