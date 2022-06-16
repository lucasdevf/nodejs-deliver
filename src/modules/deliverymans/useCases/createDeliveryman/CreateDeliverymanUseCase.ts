import { hash } from 'bcrypt'
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {

  async execute({ username, password }: ICreateDeliveryman) {

    /* validates if username already exists */
    const usernameAlreadyExists = await prisma.deliverymans.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    })

    if (usernameAlreadyExists) throw new Error('Username already exists!')

    /* encrypt password */
    const passwordHash = await hash(password, 8)

    /* save deliveryman */
    const deliveryman = await prisma.deliverymans.create({
      data: {
        username,
        password: passwordHash
      }
    })

    return deliveryman

  }

}