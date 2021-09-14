import { ListAllClassroomsByUserService } from "@modules/classroom/services/ListAllClassroomsByUserService";
import AppError from "@shared/errors/AppError";
import { Student } from "../typeorm/entities/Student";


interface IRequest {
    id: string;
}

export class ListAllStudentsByUserService {
    public async execute({ id }: IRequest): Promise<Student[]> {
        const listAllClassesroomsService = new ListAllClassroomsByUserService();

        const classrooms = await listAllClassesroomsService.execute({ id });

        const students: Student[] = [];

        classrooms.forEach((classroom) => {
            if(classroom.students.length > 0) {
                classroom.students.forEach((student) => {
                    students.push(student);
                })
            }
        });

        if(students.length == 0) {
            throw new AppError('Students not found');
        }

        return students;

    }


}
