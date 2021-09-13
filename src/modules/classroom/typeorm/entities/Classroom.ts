import School from "@modules/school/typeorm/entities/School";
import { Student } from "@modules/student/typeorm/entities/Student";
import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('classrooms')
export default class Classroom {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Exclude()
  @ManyToOne(type => School, classrooms => classrooms.classrooms)
  school: School;

  @OneToMany(type => Student, classroom => classroom.classroom, { eager: true })
  students: Student[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}