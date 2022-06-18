import { prisma } from "../../../../database/prismaClient"

export class FindDeliveriesByClientIdUseCase {

  async execute(client_id: string) {

    const deliveries = await prisma.deliveries.findMany({
      where: {
        client_id
      }
    })

    return deliveries
  }

}