import { EntityRepository, Repository } from "typeorm";
import School from '../entities/School';



@EntityRepository(School)
export class SchoolsRepository extends Repository<School> {

  public async findByName(name: string): Promise<School | undefined> {
    const user = await this.findOne({ where: { name } });
    console.log(user);
    

    return user;
  }
}