import { Student } from "../typeorm/entities/Student";
import { getCustomRepository } from 'typeorm';
import { StudentsRepository } from '../typeorm/repositories/StudentsRepository';
import { ClassroomRepository } from '../../classroom/typeorm/repositories/ClassroomRepository';
import AppError from '../../../shared/errors/AppError';
import { ResponsiblesRepository } from '../../responsible/typeorm/repositories/ResponsiblesRepository';


interface IRequest {
  name: string;
  birthDay: string;
  classroomId: string;
  responsibleId: string;
}


export class CreateStudentService {
  public async execute({ name, birthDay, classroomId, responsibleId }: IRequest): Promise<Student> {
    const studentsRepository = getCustomRepository(StudentsRepository);
    const classroomsRepository = getCustomRepository(ClassroomRepository);
    const responsiblesRepository = getCustomRepository(ResponsiblesRepository);


    const classroomExists = await classroomsRepository.findById(classroomId);
    if (!classroomExists) {
      throw new AppError('Classroom not found.');
    }

    const responsibleExists = await responsiblesRepository.findById(responsibleId);
    if (!responsibleExists) {
      throw new AppError('Responsible not found.');
    }

    const student = studentsRepository.create({ name, birthDay, classroom: classroomExists, responsible: responsibleExists });
    await studentsRepository.save(student);
    return student;
  
  }
}