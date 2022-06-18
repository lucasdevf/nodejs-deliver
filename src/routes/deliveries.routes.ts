import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensureAuthenticatedDeliveryman";
import { AssociateDeliverymanController } from "../modules/deliveries/useCases/associateDeliveryman/AssociateDeliverymanController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAvailableDeliveriesController } from "../modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAvailablesDeliveriesController = new FindAvailableDeliveriesController()
const associateDeliverymanController = new AssociateDeliverymanController()

deliveriesRoutes.post('/', ensureAuthenticatedClient, createDeliveryController.handle)
deliveriesRoutes.get('/availables', ensureAuthenticatedDeliveryman, findAvailablesDeliveriesController.handle)
deliveriesRoutes.patch('/:id/associate-deliveryman', ensureAuthenticatedDeliveryman, associateDeliverymanController.handle)

export { deliveriesRoutes }