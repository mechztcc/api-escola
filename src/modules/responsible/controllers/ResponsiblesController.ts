import { Response, Request } from 'express';
import { EntityRepository } from 'typeorm';
import { CreateResponsibleService } from '../services/CreateResponsibleService';
import Responsible from '../typeorm/entities/Responsible';
import { ShowResponsibleService } from '../services/ShowResponsibleService';


export default class ResponsiblesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, paymentDay, studentId } = request.body;

    const createResponsible = new CreateResponsibleService();

    const responsible = await createResponsible.execute({ name, email, phone, paymentDay, studentId });
    return response.json(responsible);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    const showResponsible = new ShowResponsibleService();

    const responsible = await showResponsible.show({ id });
    return response.json(responsible);
  }
}