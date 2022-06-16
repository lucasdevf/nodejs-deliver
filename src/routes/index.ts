import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { clientsRoutes } from "./clients.routes";
import { deliveriesRoutes } from "./deliveries.routes";
import { deliverymansRoutes } from "./deliverymans.routes";

const routes = Router()

routes.use('/clients', clientsRoutes)
routes.use('/deliverymans', deliverymansRoutes)
routes.use('/deliveries', deliveriesRoutes)
routes.use(accountsRoutes)

export { routes }