
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import School from '../typeorm/entities/School';
import { CreateSchoolService } from '../services/CreateSchoolService';


export default class SchoolsController {
  public async index(request: Request, response: Response): Promise<Response> {

    const schoolRepo = getRepository(School);

    const school = await schoolRepo.find({where: { user: 2}});
    return response.json(school);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, userId } = request.body;

    const schoolRepo = getRepository(School);
    const createSchool = new CreateSchoolService();


    const school = await createSchool.execute({ name, userId });
    return response.json(school);
  }
}