import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { clientsRoutes } from "./clients.routes";

const routes = Router()

routes.use('/clients', clientsRoutes)
routes.use(accountsRoutes)

export { routes }