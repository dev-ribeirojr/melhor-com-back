import { Request, Response } from 'express'
import { UpdatePhoneService } from '../../services'
import { createPhoneSchemaDTO } from '../dtos'

export class UpdatePhoneController {
  async handle(req: Request, res: Response) {
    const data = createPhoneSchemaDTO.parse(req.body)
    const cpf = req.headers.cpf as string
    const productId = req.params.productId as string

    const updatePhoneService = new UpdatePhoneService()

    try {
      const phone = await updatePhoneService.execute({
        cpf,
        productId,
        ...data,
      })
      return res.json(phone)
    } catch (error) {
      const _error = error

      let status = 500

      switch (_error) {
        case 'not found':
          status = 200
          break
        default:
          status = 500
      }

      return res.status(status).json({ message: _error.message })
    }
  }
}
