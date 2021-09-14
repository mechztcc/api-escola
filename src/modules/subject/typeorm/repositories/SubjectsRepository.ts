import { EntityRepository, Repository } from "typeorm";
import { Subject } from "../entities/Subject";


@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {

    public async findById(id: string): Promise<Subject | undefined> {
        const subject = await this.findOne(id);
        return subject;
    }
}