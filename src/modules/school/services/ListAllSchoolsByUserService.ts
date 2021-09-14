import { UsersRepository } from "@modules/user/typeorm/repositories/UsersRepository";
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
        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findById(id);
        if(!userExists) {
            throw new AppError('User not found.');
        }

        const schools = await schoolsRepository.find({ where: { user: id }});
        if(!schools) {
            throw new AppError('User schools not found.');
        }

        return schools;
        return
    }
}