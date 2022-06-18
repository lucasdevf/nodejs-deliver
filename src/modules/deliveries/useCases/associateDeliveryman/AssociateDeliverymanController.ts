import { Request, Response } from "express";
import { AssociateDeliverymanUseCase } from "./AssociateDeliverymanUseCase";


class AssociateDeliverymanController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params
    const { deliveryman_id } = request

    const associateDeliverymanUseCase = new AssociateDeliverymanUseCase()

    const delivery = await associateDeliverymanUseCase.execute({
      delivery_id: id,
      deliveryman_id
    })

    return response.json(delivery)
  }

}

export { AssociateDeliverymanController }