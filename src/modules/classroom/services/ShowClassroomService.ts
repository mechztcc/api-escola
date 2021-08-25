import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";
import { ClassroomRepository } from '../typeorm/repositories/ClassroomRepository';
import AppError from '../../../shared/errors/AppError';

export class ShowClassroomService {
  public async execute(id: string): Promise<Classroom | undefined> {

    const classroomsRepository = getCustomRepository(ClassroomRepository);

    const classroom = classroomsRepository.findOne(id);
    if(!classroom) {
      throw new AppError('Classroom not found.');
    }

    return classroom;

  }
}