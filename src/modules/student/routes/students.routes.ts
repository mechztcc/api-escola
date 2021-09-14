import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import StudentsController from '../controllers/StudentsController';



const studentsRouter = Router();
const studentsController = new StudentsController();


studentsRouter.post('/', studentsController.create);
studentsRouter.get('/', isAuthenticated, studentsController.listAll);
studentsRouter.get('/:id', studentsController.show);


export default studentsRouter;