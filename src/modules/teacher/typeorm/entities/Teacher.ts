import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import  School from '@modules/school/typeorm/entities/School';


@Entity('teachers')
export class Teacher {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  paymentDay: string;

  @ManyToOne(type => School, teachers => teachers.teachers)
  school: School;

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;
  
}