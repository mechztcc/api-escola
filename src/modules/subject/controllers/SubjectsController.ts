import { Request, Response } from "express";
import { CreateSubjectService } from "../services/CreateSubjectService";
import { ShowSubjectService } from "../services/ShowSubjectService";


export default class SubjectsController {
    public async create(request: Request, response: Response): Promise<Response> {

        const { name, schoolId } = request.body;

        const createSubject = new CreateSubjectService();

        const subject = await createSubject.execute({ name, schoolId });
        return response.json(subject);
    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const showSubject = new ShowSubjectService();

        const subject = await showSubject.show({ id });
        return response.json(subject);
    }
}