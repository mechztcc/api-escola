import { Router } from "express";
import TeachersController from '../controllers/TeachersController';

const teachersRouter = Router();

const teachersController = new TeachersController();


teachersRouter.post('/', teachersController.create);
teachersRouter.get('/:id', teachersController.show);

export default teachersRouter;