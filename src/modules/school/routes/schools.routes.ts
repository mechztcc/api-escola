import { Router } from "express";
import SchoolsController from '../controllers/SchoolsController';
import isAuthenticated from '../../../shared/middlewares/isAuthenticated';


const schoolsRouter = Router();

const schoolsController = new SchoolsController();

schoolsRouter.get('/:id', schoolsController.show);
schoolsRouter.post('/', isAuthenticated, schoolsController.create);
schoolsRouter.get('/', isAuthenticated, schoolsController.ListAll);


export default schoolsRouter;