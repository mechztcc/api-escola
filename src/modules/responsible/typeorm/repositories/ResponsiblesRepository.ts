import { EntityRepository, Repository } from "typeorm";
import Responsible from "../entities/Responsible";

@EntityRepository(Responsible)
export class ResponsiblesRepository extends Repository<Responsible> {

  public async findById(id: string): Promise<Responsible | undefined> {
    
    const responsible = await this.findOne(id);
    return responsible;
  }
}