import { Router } from "express";
import { AuthenticateClientController } from "../modules/accounts/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";

const accountsRoutes = Router()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

accountsRoutes.post('/sessions/client', authenticateClientController.handle)
accountsRoutes.post('/sessions/deliveryman', authenticateDeliverymanController.handle)

export { accountsRoutes }