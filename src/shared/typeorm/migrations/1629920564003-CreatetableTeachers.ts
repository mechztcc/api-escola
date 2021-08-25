import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatetableTeachers1629920564003 implements MigrationInterface {
    name = 'CreatetableTeachers1629920564003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "paymentDay" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" integer, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD CONSTRAINT "FK_20a4e9c68d652b6a329b08e09cb" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers" DROP CONSTRAINT "FK_20a4e9c68d652b6a329b08e09cb"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
    }

}
