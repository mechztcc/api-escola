import {MigrationInterface, QueryRunner} from "typeorm";

export class sefuder1629918757969 implements MigrationInterface {
    name = 'sefuder1629918757969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schools" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classrooms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "schoolId" integer, CONSTRAINT "PK_20b7b82896c06eda27548bd0c24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schools" ADD CONSTRAINT "FK_b46e6536d18fcf3be4ec71a9266" FOREIGN KEY ("userId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_55418280a71e7e220d89987ed8f" FOREIGN KEY ("schoolId") REFERENCES "schools"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_55418280a71e7e220d89987ed8f"`);
        await queryRunner.query(`ALTER TABLE "schools" DROP CONSTRAINT "FK_b46e6536d18fcf3be4ec71a9266"`);
        await queryRunner.query(`DROP TABLE "classrooms"`);
        await queryRunner.query(`DROP TABLE "schools"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
