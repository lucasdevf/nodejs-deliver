import { Request, Response } from "express";
import { FindDeliveriesByDeliverymanIdUseCase } from "./FindDeliveriesByDeliverymanIdUseCase";

class FindDeliveriesByDeliverymanIdController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { deliveryman_id } = request

    const findDeliveriesByDeliverymanIdUseCase = new FindDeliveriesByDeliverymanIdUseCase()

    const deliveries = await findDeliveriesByDeliverymanIdUseCase.execute(deliveryman_id)

    return response.json(deliveries)

  }

}

export { FindDeliveriesByDeliverymanIdController }