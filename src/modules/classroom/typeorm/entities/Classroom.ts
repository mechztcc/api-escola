import School from "@modules/school/typeorm/entities/School";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('classrooms')
export default class Classroom {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToOne(() => School)
  @JoinColumn()
  school: School;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}