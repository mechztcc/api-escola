
import { Response, Request } from 'express';
import { CreateTeacherService } from '../services/CreateTeacherService';
import { ListAllTeachersByUserService } from '../services/ListAllTeachersByUserService';
import { ShowTeacherService } from '../services/ShowTeacherService';



export default class TeachersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, subject, paymentDay, schoolId } = request.body;

    const createTeacher = new CreateTeacherService();

    const teacher = await createTeacher.execute({ name, subject, paymentDay, schoolId });
    return response.json(teacher);
  }


  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    const showTeacher = new ShowTeacherService();

    const teacher = await showTeacher.show({ id });
    return response.json(teacher);
  }

  public async listAll(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listAllTeachersService = new ListAllTeachersByUserService();

    const teachers = await listAllTeachersService.execute({ id });
    return response.json(teachers);
  }
}