import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { prisma } from '../../../database/prismaClient'

interface IAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {

    /* verifiy if deliveryman exists */
    const deliverymanExists = await prisma.deliverymans.findFirst({
      where: {
        username
      }
    })

    if (!deliverymanExists) throw new Error('Username or password invalid!')

    /* verify if password and password hash match */
    const passwordMatch = await compare(password, deliverymanExists.password)

    if (!passwordMatch) throw new Error('Username or password invalid!')

    /* generate token */
    const token = sign(
      {
        username: deliverymanExists.username
      },
      "1a36591bciic49c832079e270d7e8b73",
      {
        subject: deliverymanExists.id,
        expiresIn: '1d'
      }
    )

    return {
      token
    }

  }
}