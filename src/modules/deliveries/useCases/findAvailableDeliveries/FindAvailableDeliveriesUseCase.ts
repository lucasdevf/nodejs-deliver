import { prisma } from "../../../../database/prismaClient";

export class FindAvailableDeliveriesUseCase {

  async execute() {

    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        deliveryman_id: null
      }
    })

    return deliveries

  }

}