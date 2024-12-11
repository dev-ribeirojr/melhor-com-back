import { Request, Response } from 'express'
import { FindAllPhoneService } from '../../services'

export class FindAllPhoneController {
  async handle(req: Request, res: Response) {
    const cpf = req.headers.cpf as string

    const findAllPhoneService = new FindAllPhoneService()

    try {
      const phone = await findAllPhoneService.execute(cpf)

      return res.json(phone)
    } catch (error) {
      const _error = error as Error
      return res.status(500).json({ message: _error.message })
    }
  }
}
