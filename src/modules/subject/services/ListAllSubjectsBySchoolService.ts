import { ShowSchoolService } from "@modules/school/services/ShowSchoolService";
import AppError from "@shared/errors/AppError";
import { Subject } from "../typeorm/entities/Subject";


interface IRequest {
    id: string;
}

export class ListAllSubjectsBySchoolService {
    public async execute({ id }: IRequest): Promise<Subject[]> {

        const showSchool = new ShowSchoolService();

        const school = await showSchool.execute({ id });
        
        const subjects: Subject[] = [];


        if(school.subjects.length > 0) {
            school.subjects.forEach((subject) => {
                subjects.push(subject);
            })
        } else {
            throw new AppError('Subject not found');
        }
        
        return subjects;
    
    }
}