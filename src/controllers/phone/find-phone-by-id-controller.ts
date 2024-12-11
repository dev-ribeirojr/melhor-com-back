import { Request, Response } from 'express'
import { FindPhoneByIdService } from '../../services'

export class FindPhoneByIdController {
  async handle(req: Request, res: Response) {
    const cpf = req.headers.cpf as string
    const productId = req.params.productId as string

    const findPhoneByIdService = new FindPhoneByIdService()

    try {
      const phone = await findPhoneByIdService.execute({ cpf, productId })

      return res.json(phone)
    } catch (error) {
      const _error = error as Error

      if (_error.message === 'not found') {
        return res.status(404).json({ message: _error.message })
      }
      return res.status(500).json({ message: _error.message })
    }
  }
}
