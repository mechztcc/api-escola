import { Response , Request } from 'express';
import { CreateStudentService } from '../services/CreateStudentService';
import { ShowStudentService } from '../services/ShowStudentService';


export default class StudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birthDay, classroomId, responsibleId } = request.body;

    const createStudent = new CreateStudentService();

    const student = await createStudent.execute({ name, birthDay, classroomId, responsibleId });
    return response.json(student);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    const showStudent = new ShowStudentService();

    const student = await showStudent.show({ id });
    return response.json(student);
  }
}