import { prisma } from "../../../../database/prismaClient"

interface IAssociateDeliverymanRequest {
  delivery_id: string
  deliveryman_id: string
}

export class AssociateDeliverymanUseCase {
  async execute({ delivery_id, deliveryman_id }: IAssociateDeliverymanRequest) {

    /* validates if deliver exists */
    const deliveryExists = await prisma.deliveries.findFirst({
      where: {
        id: delivery_id
      }
    })

    if (!deliveryExists) throw new Error('Delivery does not exists!')

    /* associate deliveryman to delivery */
    const delivery = await prisma.deliveries.update({
      where: {
        id: delivery_id
      },
      data: {
        deliveryman_id: deliveryman_id
      }
    })

    return delivery
  }
}