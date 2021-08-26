import { Router } from "express";
import ResponsiblesController from "../controllers/ResponsiblesController";


const responsiblesRouter = Router();
const responsiblesController = new ResponsiblesController();

responsiblesRouter.post('/', responsiblesController.create);
responsiblesRouter.get('/:id', responsiblesController.show);


export default responsiblesRouter;
