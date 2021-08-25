
import { Teacher } from '@modules/teacher/typeorm/entities/Teacher';
import { getCustomRepository } from 'typeorm';
import { TeachersRepository } from '../typeorm/repositories/TeachersRepository';
import { SchoolsRepository } from '../../school/typeorm/repositories/SchoolsRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  name: string;
  subject: string;
  paymentDay: string;
  schoolId: string;
}

export class CreateTeacherService {

  public async execute({ name, subject, paymentDay, schoolId }: IRequest): Promise<Teacher> {

    const teachersRepository = getCustomRepository(TeachersRepository);
    const schoolsRepository = getCustomRepository(SchoolsRepository);

    const schoolExists = await schoolsRepository.findById(schoolId);

    if (!schoolExists) {
      throw new AppError('School not found.');
    }

    const teacher = teachersRepository.create({ name, subject, paymentDay, school: schoolExists });

    await teachersRepository.save(teacher);

    return teacher;




  }
}