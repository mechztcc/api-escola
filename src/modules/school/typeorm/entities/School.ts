import User from '../../../user/typeorm/entities/User';
import { OneToMany, OneToOne } from 'typeorm';
import Classroom from '../../../classroom/typeorm/entities/Classroom';
import { JoinColumn } from 'typeorm';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('schools')
export default class School {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => School, school => school.user)
  user: User;

  @OneToMany(type => Classroom, school => school.school)
  classrooms: Classroom[];

  
  @CreateDateColumn()
  created_at: Date;


  @UpdateDateColumn()
  updated_at: Date;
}
