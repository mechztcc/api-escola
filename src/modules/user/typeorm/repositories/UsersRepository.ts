import { EntityRepository, Repository } from "typeorm";
import User from '../entities/User';


@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne(id, { relations: ['school']});
    return user
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });

    return user;
  }
}