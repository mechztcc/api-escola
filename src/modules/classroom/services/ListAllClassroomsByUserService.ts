import { ListAllSchoolsByUserService } from "@modules/school/services/ListAllSchoolsByUserService";
import { UsersRepository } from "@modules/user/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";


interface IRequest {
    id: string;
}


export class ListAllClassroomsByUserService {
    public async execute({ id }: IRequest): Promise <Classroom[]> {

        const  listAllSchoolsByUserService = new ListAllSchoolsByUserService();

        const schools = await listAllSchoolsByUserService.execute({ id });

        const classrooms: Classroom[] = [];

        schools.forEach((school) => {
            if(school.classrooms.length > 0) {
                school.classrooms.forEach((classroom) => {
                    classrooms.push(classroom);
                })
            }
        })

        if(classrooms.length == 0) {
            throw new AppError('Classrooms not found.');
        }

        return classrooms;;
    }
}