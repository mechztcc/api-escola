import { EntityRepository, Repository } from "typeorm";
import { Teacher } from '@modules/teacher/typeorm/entities/Teacher';


@EntityRepository(Teacher)
export class TeachersRepository extends Repository<Teacher> {

  public async findById(id: string): Promise<Teacher | undefined> {
    const teacher = await this.findOne(id, { relations: ['school']});
    return teacher;
  }
}