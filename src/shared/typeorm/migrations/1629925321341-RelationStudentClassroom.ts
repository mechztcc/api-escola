import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStudentClassroom1629925321341 implements MigrationInterface {
    name = 'RelationStudentClassroom1629925321341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birthDay" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "classroomId" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_e99293f4de5543838797d712b24" FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_e99293f4de5543838797d712b24"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
