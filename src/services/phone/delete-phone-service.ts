import prismaClient from '../../prisma'

interface RequestProps {
  cpf: string
  productId: string
}

export class DeletePhoneService {
  async execute(data: RequestProps) {
    const { cpf, productId } = data

    const phone = await prismaClient.product.delete({
      where: {
        id: Number(productId),
        cpf,
      },
    })

    if (!phone) {
      throw new Error('internal server error')
    }

    return phone
  }
}
