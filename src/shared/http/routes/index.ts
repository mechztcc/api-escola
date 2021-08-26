import { Router } from "express";
import usersRouter from "@modules/user/routes/users.routes";
import schoolsRouter from "@modules/school/routes/schools.routes";
import sessionsRouter from "@modules/user/routes/sessions.routes";
import classroomRouter from "@modules/classroom/routes/classrooms.routes";
import teachersRouter from '../../../modules/teacher/routes/teachers.routes';
import studentsRouter from "@modules/student/routes/students.routes";
import responsiblesRouter from "@modules/responsible/routes/responsibles.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/schools', schoolsRouter);

routes.use('/sessions', sessionsRouter);
routes.use('/classrooms', classroomRouter);

routes.use('/teachers', teachersRouter);
routes.use('/students', studentsRouter);

routes.use('/responsibles', responsiblesRouter);


export default routes;