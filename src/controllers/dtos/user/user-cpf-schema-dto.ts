import { z } from 'zod'
import { isValidCPF } from '../../../utils'

export const userCpfSchemaDTO = z.object({
  cpf: z.string({ required_error: 'cpf inválido' }).refine(isValidCPF, {
    message: 'invalid cpf',
  }),
})

export type UserCpfSchemaDTOProps = z.infer<typeof userCpfSchemaDTO>
