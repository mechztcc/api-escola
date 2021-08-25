import { EntityRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";


@EntityRepository(Student)
export class StudentsRepository extends Repository<Student> {

  public async findById(id: string): Promise<Student | undefined> {
    
    const student = await this.findOne(id);
    return student;
  }
}