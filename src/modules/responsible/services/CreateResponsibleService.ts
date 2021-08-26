
import Responsible from '../typeorm/entities/Responsible';
import { getCustomRepository } from 'typeorm';
import { ResponsiblesRepository } from '../typeorm/repositories/ResponsiblesRepository';
import { StudentsRepository } from '../../student/typeorm/repositories/StudentsRepository';
import AppError from '../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  studentId: string;
  paymentDay: string;
}

export class CreateResponsibleService {

  public async execute({ name, email, phone, studentId, paymentDay }: IRequest): Promise<Responsible> {

    const responsiblesRepository = getCustomRepository(ResponsiblesRepository);
    const studentsRepository = getCustomRepository(StudentsRepository);

    const studentExists = await studentsRepository.findById(studentId);
    if(!studentExists) {
      throw new AppError('Student not found.')
    }

    const responsible = responsiblesRepository.create({ name, email, phone, paymentDay, student: studentExists });
    await responsiblesRepository.save(responsible);
    return responsible;

  }
}