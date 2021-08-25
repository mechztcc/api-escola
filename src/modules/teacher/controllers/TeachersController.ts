
import { Response, Request } from 'express';
import { CreateTeacherService } from '../services/CreateTeacherService';
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
}