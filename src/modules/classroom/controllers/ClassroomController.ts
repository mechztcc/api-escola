import { classToClass } from 'class-transformer';
import { Response, Request } from 'express';
import { CreateClassroomService } from '../services/CreateClassroomService';
import { ListAllClassroomsByUserService } from '../services/ListAllClassroomsByUserService';
import { ShowClassroomService } from '../services/ShowClassroomService';




export default class ClassroomController {
  public async create(request: Request, response: Response): Promise<Response> {

    const { name, schoolId } = request.body;
    const createClassroom = new CreateClassroomService();

    const classroom = await createClassroom.execute({ name, schoolId });
    return response.json(classToClass(classroom));
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showClassroom = new ShowClassroomService();

    const classroom = await showClassroom.execute(id);
    return response.json(classroom);
  }

  public async listAll(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listAllClassroomsService = new ListAllClassroomsByUserService();

    const classrooms = await listAllClassroomsService.execute({ id });
    return response.json(classrooms);
  }
  
}