import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {

  async execute({ username, password }: ICreateClient) {

    /* validates if username already exists */
    const usernameAlreadyExists = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    })

    if (usernameAlreadyExists) throw new Error('Username already exists!')

    /* encrypt password */
    const passwordHash = await hash(password, 8)

    /* save client */
    const client = await prisma.clients.create({
      data: {
        username,
        password: passwordHash
      }
    })

    return client

  }

}