import { getCustomRepository } from 'typeorm';
import { SchoolsRepository } from '../typeorm/repositories/SchoolsRepository';
import School from '../typeorm/entities/School';
import AppError from '@shared/errors/AppError';
import { UsersRepository } from '../../user/typeorm/repositories/UsersRepository';


interface IRequest {
  name: string;
  userId: string;

}

export class CreateSchoolService {
  public async execute({ name, userId }: IRequest): Promise<School> {
    const schoolsRepository = getCustomRepository(SchoolsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const schoolExists = await schoolsRepository.findByName(name);

    if (schoolExists) {
      throw new AppError('School name address already used.');
    }

    const userExists = await usersRepository.findById(userId);

    if (!userExists) {
      throw new AppError('User not found.');
    }


    const school =  schoolsRepository.create({ name: name, user: userExists })

    await schoolsRepository.save(school);
    return school;
  }
}