import { EntityRepository, Repository } from "typeorm";
import School from '../entities/School';



@EntityRepository(School)
export class SchoolsRepository extends Repository<School> {

  public async findByName(name: string): Promise<School | undefined> {
    const school = await this.findOne({ where: { name } });

    return school;
  }

  public async findById(id: string): Promise< School | undefined> {
    const school = await this.findOne(id, { relations: ['classrooms']});
    return school;
  }
}