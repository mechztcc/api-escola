import { Response, Request } from 'express';
import Classroom from '../typeorm/entities/Classroom';
import { CreateClassroomService } from '../services/CreateClassroomService';




export default class ClassroomController {
  public async create(request: Request, response: Response): Promise<Response> {

    const { name, schoolId } = request.body;
    const createClassroom = new CreateClassroomService();

    const classroom = await createClassroom.execute({ name, schoolId });
    return response.json(classroom);
  }
}