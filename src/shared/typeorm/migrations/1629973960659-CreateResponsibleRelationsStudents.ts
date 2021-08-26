import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateResponsibleRelationsStudents1629973960659 implements MigrationInterface {
    name = 'CreateResponsibleRelationsStudents1629973960659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "responsibles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "paymentDay" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "studentId" integer, CONSTRAINT "REL_36a529fd41339deb9f00b48f72" UNIQUE ("studentId"), CONSTRAINT "PK_3bfd9b63cf33352711d7c82bab3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "responsibles" ADD CONSTRAINT "FK_36a529fd41339deb9f00b48f724" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "responsibles" DROP CONSTRAINT "FK_36a529fd41339deb9f00b48f724"`);
        await queryRunner.query(`DROP TABLE "responsibles"`);
    }

}
