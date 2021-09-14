import { ShowSchoolService } from "@modules/school/services/ShowSchoolService";
import { getCustomRepository } from "typeorm";
import { Subject } from "../typeorm/entities/Subject";
import { SubjectsRepository } from "../typeorm/repositories/SubjectsRepository";


interface IRequest {
    name: string;
    schoolId: string;
}


export class CreateSubjectService {
    public async execute({ name, schoolId}: IRequest): Promise<Subject> {
        
        const subjectsRepository = getCustomRepository(SubjectsRepository);
        const showSchoolService = new ShowSchoolService();

        const school = await showSchoolService.execute({ id: schoolId });

        const subject = subjectsRepository.create({ name: name, school: school });

        subjectsRepository.save(subject);
        return subject;

    }
}

