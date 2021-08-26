
import { Student } from '@modules/student/typeorm/entities/Student';
import { StudentsRepository } from '../typeorm/repositories/StudentsRepository';
import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  id: string;
}

export class ShowStudentService {
  public async show({ id }: IRequest): Promise<Student> { 

    const studentsRepository = getCustomRepository(StudentsRepository); 

    const student = studentsRepository.findById(id);

    if(!student) {
      throw new AppError('Student not found.');
    }

    return student;

  }
}