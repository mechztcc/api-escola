import { Router } from "express";
import isAuthenticated from '../../../shared/middlewares/isAuthenticated';
import ClassroomController from '../controllers/ClassroomController';


const classroomRouter = Router();

const classroomController = new ClassroomController();

classroomRouter.get('/:id', classroomController.show);
classroomRouter.post('/', isAuthenticated, classroomController.create);


export default classroomRouter;