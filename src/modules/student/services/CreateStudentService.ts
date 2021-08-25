import { Student } from "../typeorm/entities/Student";
import { getCustomRepository } from 'typeorm';
import { StudentsRepository } from '../typeorm/repositories/StudentsRepository';
import { ClassroomRepository } from '../../classroom/typeorm/repositories/ClassroomRepository';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  name: string;
  birthDay: string;
  classroomId: string;
}


export class CreateStudentService {
  public async execute({ name, birthDay, classroomId }: IRequest): Promise<Student> {
    const studentsRepository = getCustomRepository(StudentsRepository);
    const classroomsRepository = getCustomRepository(ClassroomRepository);

    const classroomExists = await classroomsRepository.findById(classroomId);
    if (!classroomExists) {
      throw new AppError('Classroom not found.');
    }

    const student = studentsRepository.create({ name, birthDay, classroom: classroomExists });
    await studentsRepository.save(student);
    return student;
  
  }
}