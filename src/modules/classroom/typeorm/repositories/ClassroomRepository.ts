import { EntityRepository, Repository } from 'typeorm';
import Classroom from '../entities/Classroom';

@EntityRepository(Classroom)
export class ClassroomRepository extends Repository<Classroom>{

  public async findById(id: string): Promise<Classroom | undefined> {
    const classroom = await this.findOne(id, { relations: []});
    return classroom;
  }

}