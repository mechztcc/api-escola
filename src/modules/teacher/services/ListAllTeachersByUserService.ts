import { ListAllSchoolsByUserService } from "@modules/school/services/ListAllSchoolsByUserService";
import AppError from "@shared/errors/AppError";
import { Teacher } from "../typeorm/entities/Teacher";

interface IRequest {
    id: string;
}

export class ListAllTeachersByUserService {
    public async execute({ id }: IRequest): Promise<Teacher[]> {
        const listAllSchoolsService = new ListAllSchoolsByUserService();

        const schools = await listAllSchoolsService.execute({ id });

        const teachers: Teacher[] = []

        schools.forEach((school) => {
            if(school.teachers.length > 0) {
                school.teachers.forEach((teacher) => {
                    teachers.push(teacher);
                })
            }
        })

        if(teachers.length == 0) {
            throw new AppError('Classrooms not found.');
        }

        return teachers;
    }
}