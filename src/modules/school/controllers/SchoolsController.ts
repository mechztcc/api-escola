
import { Request, Response } from 'express';
import { CreateSchoolService } from '../services/CreateSchoolService';
import { ShowSchoolService } from '../services/ShowSchoolService';


export default class SchoolsController {
  public async show(request: Request, response: Response): Promise<Response> {

    // const { id } = request.user;
    const { id } = request.params;

    const showSchool = new ShowSchoolService();
    const school = await showSchool.execute({ id });

    return response.json(school);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.user;

    const createSchool = new CreateSchoolService();


    const school = await createSchool.execute({ name, userId: id });
    return response.json(school);
  }
}