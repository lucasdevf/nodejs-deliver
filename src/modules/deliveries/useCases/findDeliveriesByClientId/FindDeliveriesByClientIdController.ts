import { Request, Response } from "express";
import { FindDeliveriesByClientIdUseCase } from "./FindDeliveriesByClientIdUseCase";

class FindDeliveriesByClientIdController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { client_id } = request

    const findDeliveriesByClientIdUseCase = new FindDeliveriesByClientIdUseCase()

    const deliveries = await findDeliveriesByClientIdUseCase.execute(client_id)

    return response.json(deliveries)

  }

}

export { FindDeliveriesByClientIdController }