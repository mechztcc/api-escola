import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Subject } from "../typeorm/entities/Subject";
import { SubjectsRepository } from "../typeorm/repositories/SubjectsRepository";


interface IRequest {
    id: string;
}

export class ShowSubjectService {
    public async show({ id }: IRequest): Promise<Subject> {

        const subjectsRepository = getCustomRepository(SubjectsRepository);

        const subject = subjectsRepository.findById(id);
        if(!subject) {
            throw new AppError('Subject not found.');
        }

        return subject;
    }
}