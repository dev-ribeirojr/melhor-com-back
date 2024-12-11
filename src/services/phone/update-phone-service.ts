import { CreatePhoneSchemaDTOProps } from '../../controllers/dtos'
import prismaClient from '../../prisma'

interface RequestProps extends CreatePhoneSchemaDTOProps {
  cpf: string
  productId: string
}

export class UpdatePhoneService {
  async execute(data: RequestProps) {
    const { cpf, productId, brand, color, date, endDate, model, price } = data

    const phone = await prismaClient.product.update({
      where: {
        id: Number(productId),
        cpf,
      },
      data: {
        brand,
        color,
        cpf,
        date,
        endDate,
        model,
        price,
      },
    })

    if (!phone) {
      throw new Error('internal server error')
    }

    return phone
  }
}
