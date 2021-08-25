import { Response , Request } from 'express';
import { CreateStudentService } from '../services/CreateStudentService';


export default class StudentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birthDay, classroomId } = request.body;

    const createStudent = new CreateStudentService();

    const student = await createStudent.execute({ name, birthDay, classroomId });
    return response.json(student);
  }
}