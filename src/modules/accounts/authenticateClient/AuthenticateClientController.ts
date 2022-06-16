import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { username, password } = request.body

    const authenticateClientUseCase = new AuthenticateClientUseCase()

    const client = await authenticateClientUseCase.execute({
      username,
      password
    })

    return response.json(client)
  }
}