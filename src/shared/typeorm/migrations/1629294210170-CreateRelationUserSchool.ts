import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationUserSchool1629294210170 implements MigrationInterface {
    name = 'CreateRelationUserSchool1629294210170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schools" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schools" ADD CONSTRAINT "FK_b46e6536d18fcf3be4ec71a9266" FOREIGN KEY ("userId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schools" DROP CONSTRAINT "FK_b46e6536d18fcf3be4ec71a9266"`);
        await queryRunner.query(`DROP TABLE "schools"`);
    }

}
