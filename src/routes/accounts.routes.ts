import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/authenticateClient/AuthenticateClientController";

const accountsRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

accountsRoutes.post('/sessions', authenticateUserController.handle)

export { accountsRoutes }