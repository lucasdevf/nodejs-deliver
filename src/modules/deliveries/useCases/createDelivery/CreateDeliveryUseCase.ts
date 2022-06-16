import { prisma } from '../../../../database/prismaClient'

interface ICreateDelivery {
  item_name: string
  client_id: string
}


export class CreateDeliveryUseCase {

  async execute({ item_name, client_id }: ICreateDelivery) {

    /* validates if client exists */
    const clientExists = await prisma.clients.findFirst({
      where: {
        id: client_id
      }
    })

    if (!clientExists) throw new Error('Client does not exists!')

    /* save delivery */
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id
      }
    })

    return delivery

  }

}