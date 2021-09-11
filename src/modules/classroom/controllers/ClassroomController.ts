import { Response, Request } from 'express';
import { CreateClassroomService } from '../services/CreateClassroomService';
import { ShowClassroomService } from '../services/ShowClassroomService';




export default class ClassroomController {
  public async create(request: Request, response: Response): Promise<Response> {

    const { name, schoolId } = request.body;
    const createClassroom = new CreateClassroomService();

    const classroom = await createClassroom.execute({ name, schoolId });
    return response.json(classroom);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showClassroom = new ShowClassroomService();

    const classroom = await showClassroom.execute(id);
    return response.json(classroom);
  }
  
}