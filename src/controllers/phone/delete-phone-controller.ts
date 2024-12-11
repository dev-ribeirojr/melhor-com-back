import { Request, Response } from 'express'
import { DeletePhoneService } from '../../services'

export class DeletePhoneController {
  async handle(req: Request, res: Response) {
    const cpf = req.headers.cpf as string
    const productId = req.params.productId as string

    const deletePhoneService = new DeletePhoneService()

    try {
      const phone = await deletePhoneService.execute({
        cpf,
        productId,
      })

      return res.json(phone)
    } catch (error) {
      const _error = error as Error

      return res.status(500).json({ message: _error.message })
    }
  }
}
