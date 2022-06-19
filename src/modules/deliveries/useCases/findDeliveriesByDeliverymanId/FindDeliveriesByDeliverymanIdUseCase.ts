import { prisma } from "../../../../database/prismaClient"

class FindDeliveriesByDeliverymanIdUseCase {

  async execute(deliveryman_id: string) {

    const deliveries = await prisma.deliveries.findMany({
      where: {
        deliveryman_id
      }
    })

    return deliveries
  }

}

export { FindDeliveriesByDeliverymanIdUseCase }