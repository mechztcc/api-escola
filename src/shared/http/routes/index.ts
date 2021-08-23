import { Router } from "express";
import usersRouter from "@modules/user/routes/users.routes";
import schoolsRouter from "@modules/school/routes/schools.routes";
import sessionsRouter from "@modules/user/routes/sessions.routes";
import classroomRouter from "@modules/classroom/routes/classrooms.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/schools', schoolsRouter);

routes.use('/sessions', sessionsRouter);
routes.use('/classrooms', classroomRouter);

export default routes;