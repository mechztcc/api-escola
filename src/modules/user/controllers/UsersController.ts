import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import { ShowUserService } from '../services/ShowUserService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {

    console.log(request.user);
    
    let { id } = request.user;

    const showUser = new ShowUserService();

    const user = await showUser.execute({ id });
    return response.json(classToClass(user));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });
    
    return response.json(classToClass(user));
  }
}