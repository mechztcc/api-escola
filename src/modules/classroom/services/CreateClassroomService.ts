
import { getCustomRepository } from 'typeorm';
import Classroom from '../typeorm/entities/Classroom';
import { ClassroomRepository } from '../typeorm/repositories/ClassroomRepository';
import { SchoolsRepository } from '../../school/typeorm/repositories/SchoolsRepository';
import AppError from '../../../shared/errors/AppError';


interface IRequest {
  name: string;
  schoolId: string; 
}

export class CreateClassroomService {

  public async execute({ name, schoolId }: IRequest): Promise<Classroom> {

    const classroomsRepository = getCustomRepository(ClassroomRepository);
    const schoolsRepository = getCustomRepository(SchoolsRepository);

    const schoolsExists = await schoolsRepository.findById(schoolId);
    if(!schoolsExists) {
      throw new AppError('School Not Found.');
    }

    const classroom = classroomsRepository.create({ name, school: schoolsExists });
    await classroomsRepository.save(classroom);
    return classroom;

  }

}