import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { prisma } from '../../../database/prismaClient'

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {

    /* verifiy if client exists */
    const clientExists = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if (!clientExists) throw new Error('Username or password invalid!')

    /* verify if password and password hash match */
    const passwordMatch = await compare(password, clientExists.password)

    if (!passwordMatch) throw new Error('Username or password invalid!')

    /* generate token */
    const token = sign(
      {
        username: clientExists.username
      },
      "1a36591bceec49c832079e270d7e8b73",
      {
        subject: clientExists.id,
        expiresIn: '1d'
      }
    )

    return {
      token
    }

  }
}