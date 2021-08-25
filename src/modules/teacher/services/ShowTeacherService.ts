
import { Teacher } from '@modules/teacher/typeorm/entities/Teacher';
import { getCustomRepository } from 'typeorm';
import { TeachersRepository } from '../typeorm/repositories/TeachersRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
}


export class ShowTeacherService {
  public async show({ id }: IRequest): Promise<Teacher> {
    const teachersReposiroty = getCustomRepository(TeachersRepository);

    const teacher = teachersReposiroty.findById(id);

    if(!teacher) {
      throw new AppError('Teacher not found.');
    }

    return teacher;
  }
}