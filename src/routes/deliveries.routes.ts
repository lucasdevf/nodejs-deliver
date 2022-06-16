import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()

deliveriesRoutes.post('/', ensureAuthenticatedClient, createDeliveryController.handle)

export { deliveriesRoutes }