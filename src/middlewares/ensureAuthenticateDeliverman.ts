import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string
}

export function ensureAuthenticatedDeliveryman(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization

  /* validates if token was informed */
  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing!'
    })
  }

  /* verify if token is valid */
  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(token, "1a36591bciic49c832079e270d7e8b73") as IPayload

    request.deliveryman_id = sub

    return next()
  } catch (err) {
    return response.status(401).json({
      message: 'Unauthorized!'
    })
  }

}