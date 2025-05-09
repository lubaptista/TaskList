import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionControler';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionControler.store);

// Todas as rotas abaixo deste middleware são acessíveis mediante autenticação
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);

export default routes;
