
import Responsible from '../typeorm/entities/Responsible';
import { getCustomRepository } from 'typeorm';
import { ResponsiblesRepository } from '../typeorm/repositories/ResponsiblesRepository';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  id: string;
}

export class ShowResponsibleService {

  public async show({ id }: IRequest): Promise<Responsible> {

    const responsiblesRepository = getCustomRepository(ResponsiblesRepository);

    const responsible = await responsiblesRepository.findById(id);

    if(!responsible) {
      throw new AppError('Responsible not found.');
    }

    return responsible;

   }
}