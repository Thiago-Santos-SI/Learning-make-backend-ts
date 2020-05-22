import { Router } from 'express'
import UserController from "./controllers/UserController";

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users/delete', UserController.delete);
routes.delete('/users/:user_id', UserController.remove);

export default routes