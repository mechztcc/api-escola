
import { getCustomRepository } from 'typeorm';
import School from '../typeorm/entities/School';
import { SchoolsRepository } from '../typeorm/repositories/SchoolsRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
}

export class ShowSchoolService {
  public async execute({ id }: IRequest): Promise<School> {
    const schoolsRepository = getCustomRepository(SchoolsRepository);

    const school = schoolsRepository.findOne(id);

    
    if(!school) {
      throw new AppError('School not found.');
    }

    // Validate if school have id of user
    return school;
  } 
}