import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedRelationsBetweenSchoolAndSubjects1631646333023 implements MigrationInterface {
    name = 'CreatedRelationsBetweenSchoolAndSubjects1631646333023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" integer, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_e97a33660b98bffe49e2431bb8c" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_e97a33660b98bffe49e2431bb8c"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
