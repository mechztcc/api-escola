import { ShowSchoolService } from "@modules/school/services/ShowSchoolService";
import Classroom from "../typeorm/entities/Classroom";

export class ListAllClassroomsByUserService {
    public async execute(id: string): Promise<Classroom | undefined> {

        const  showSchoolService = new ShowSchoolService();

        const schools = showSchoolService.execute({ id });
        return
    }
}