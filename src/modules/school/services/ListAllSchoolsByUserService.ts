import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import School from "../typeorm/entities/School";
import { SchoolsRepository } from "../typeorm/repositories/SchoolsRepository";


interface IRequest {
    id: string;
}

export class ListAllSchoolsByUserService {
    public async execute({ id }: IRequest):Promise<School[]> {
        const schoolsRepository = getCustomRepository(SchoolsRepository);

        const schools = schoolsRepository.find({ where: { user: id }});
        if(!schools) {
            throw new AppError('User schools not found.');
        }

        return schools;
    }
}