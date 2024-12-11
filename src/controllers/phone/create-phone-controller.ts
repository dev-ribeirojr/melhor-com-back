import { Request, Response } from 'express'
import { CreatePhoneService } from '../../services'
import { createPhoneSchemaDTO } from '../dtos'

export class CreatePhoneController {
  async handle(req: Request, res: Response) {
    const data = createPhoneSchemaDTO.parse(req.body)
    const cpf = req.headers.cpf as string

    const createPhoneService = new CreatePhoneService()

    try {
      const phone = await createPhoneService.execute({
        cpf,
        ...data,
      })

      return res.json(phone)
    } catch (error) {
      const _error = error as Error

      return res.status(500).json({ message: _error.message })
    }
  }
}
