import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensureAuthenticateDeliverman";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAvailableDeliveriesController } from "../modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAvailablesDeliveriesController = new FindAvailableDeliveriesController()

deliveriesRoutes.post('/', ensureAuthenticatedClient, createDeliveryController.handle)
deliveriesRoutes.get('/availables', ensureAuthenticatedDeliveryman, findAvailablesDeliveriesController.handle)

export { deliveriesRoutes }