import { Router } from "express";
import UsersController from '../controllers/UsersController';
import isAuthenticated from '../../../shared/middlewares/isAuthenticated';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/schools', isAuthenticated, usersController.show);
usersRouter.post('/', usersController.create);


export default usersRouter;