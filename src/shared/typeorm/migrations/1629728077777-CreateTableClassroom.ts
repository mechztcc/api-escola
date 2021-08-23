import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableClassroom1629728077777 implements MigrationInterface {
    name = 'CreateTableClassroom1629728077777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classrooms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" integer, CONSTRAINT "REL_55418280a71e7e220d89987ed8" UNIQUE ("schoolId"), CONSTRAINT "PK_20b7b82896c06eda27548bd0c24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_55418280a71e7e220d89987ed8f" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_55418280a71e7e220d89987ed8f"`);
        await queryRunner.query(`DROP TABLE "classrooms"`);
    }

}
