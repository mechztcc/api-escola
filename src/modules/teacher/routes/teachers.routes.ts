import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import TeachersController from '../controllers/TeachersController';

const teachersRouter = Router();

const teachersController = new TeachersController();


teachersRouter.post('/', teachersController.create);
teachersRouter.get('/:id', teachersController.show);
teachersRouter.get('/', isAuthenticated, teachersController.listAll);

export default teachersRouter;