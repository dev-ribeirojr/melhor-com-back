import {
  CreatePhoneSchemaDTOProps,
  UserCpfSchemaDTOProps,
} from '../../controllers/dtos'
import prismaClient from '../../prisma'

type RequestProps = UserCpfSchemaDTOProps & CreatePhoneSchemaDTOProps

export class CreatePhoneService {
  async execute(data: RequestProps) {
    const { cpf, brand, color, date, endDate, model, price } = data

    const user = await prismaClient.user.findFirst({
      where: {
        cpf,
      },
    })

    if (!user) {
      await prismaClient.user.create({
        data: {
          cpf,
        },
      })
    }

    const phone = await prismaClient.product.create({
      data: {
        brand,
        color,
        date,
        endDate,
        model,
        price,
        cpf,
      },
    })

    if (!phone) {
      throw new Error('internal server error')
    }

    return phone
  }
}
