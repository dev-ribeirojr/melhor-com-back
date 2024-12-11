import prismaClient from '../../prisma'

interface RequestProps {
  cpf: string
  productId: string
}

export class FindPhoneByIdService {
  async execute(data: RequestProps) {
    const { cpf, productId } = data

    const phones = await prismaClient.product.findFirst({
      where: {
        id: Number(productId),
        cpf,
      },
    })

    if (!phones) {
      throw new Error('not found')
    }

    return phones
  }
}
