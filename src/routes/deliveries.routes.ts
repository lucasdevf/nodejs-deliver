import { Router } from "express";
import { ensureAuthenticatedClient } from "../middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "../middlewares/ensureAuthenticatedDeliveryman";
import { AssociateDeliverymanController } from "../modules/deliveries/useCases/associateDeliveryman/AssociateDeliverymanController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAvailableDeliveriesController } from "../modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { FindDeliveriesByClientIdController } from "../modules/deliveries/useCases/findDeliveriesByClientId/FindDeliveriesByClientIdController";

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAvailablesDeliveriesController = new FindAvailableDeliveriesController()
const associateDeliverymanController = new AssociateDeliverymanController()
const findDeliveriesByClientIdController = new FindDeliveriesByClientIdController()

deliveriesRoutes.post('/', ensureAuthenticatedClient, createDeliveryController.handle)
deliveriesRoutes.get('/availables', ensureAuthenticatedDeliveryman, findAvailablesDeliveriesController.handle)
deliveriesRoutes.patch('/:id/associate-deliveryman', ensureAuthenticatedDeliveryman, associateDeliverymanController.handle)
deliveriesRoutes.get('/clients', ensureAuthenticatedClient, findDeliveriesByClientIdController.handle)

export { deliveriesRoutes }