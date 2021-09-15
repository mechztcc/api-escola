import { Router } from "express";
import SubjectsController from "../controllers/SubjectsController";

const subjectsRouter = Router();

const subjectsController = new SubjectsController();

subjectsRouter.post('/', subjectsController.create);
subjectsRouter.get('/:id', subjectsController.show);
subjectsRouter.get('/school/:id', subjectsController.listAllBySchool);

export default subjectsRouter;