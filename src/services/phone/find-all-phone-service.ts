import prismaClient from '../../prisma'

export class FindAllPhoneService {
  async execute(cpf: string) {
    const phones = await prismaClient.product.findMany({
      where: {
        cpf,
      },
    })

    if (!phones) {
      throw new Error('internal server error')
    }

    return phones
  }
}
