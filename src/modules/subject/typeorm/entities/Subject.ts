import School from "@modules/school/typeorm/entities/School";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('subjects')
export class Subject {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    
    @ManyToOne(type => School, subjects => subjects.subjects)
    school: School;

    @CreateDateColumn()
    created_at: Date;


    @UpdateDateColumn()
    updated_at: Date;
}