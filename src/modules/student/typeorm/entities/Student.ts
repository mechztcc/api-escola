import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Classroom from '../../../classroom/typeorm/entities/Classroom';
import Responsible from '../../../responsible/typeorm/entities/Responsible';


@Entity('students')
export class Student {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  birthDay: string;

  @ManyToOne(type => Responsible, students => students.students)
  responsible: Responsible;

  @ManyToOne(type => Classroom, students => students.students)
  classroom: Classroom

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;
  
}
