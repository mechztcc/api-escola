import { Student } from "@modules/student/typeorm/entities/Student";
import { Column, CreateDateColumn, Entity, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('responsibles')
export default class Responsible {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  paymentDay: string;

  @OneToMany(() => Student, responsible => responsible.responsible)
  students: Student[];

  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;
}