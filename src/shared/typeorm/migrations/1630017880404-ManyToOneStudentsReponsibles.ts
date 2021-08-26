import {MigrationInterface, QueryRunner} from "typeorm";

export class ManyToOneStudentsReponsibles1630017880404 implements MigrationInterface {
    name = 'ManyToOneStudentsReponsibles1630017880404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."responsibles" DROP CONSTRAINT "FK_36a529fd41339deb9f00b48f724"`);
        await queryRunner.query(`ALTER TABLE "public"."responsibles" DROP CONSTRAINT "REL_36a529fd41339deb9f00b48f72"`);
        await queryRunner.query(`ALTER TABLE "public"."responsibles" DROP COLUMN "studentId"`);
        await queryRunner.query(`ALTER TABLE "public"."students" ADD "responsibleId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."students" ADD CONSTRAINT "FK_6639474808b15d5b6335d5cf1d4" FOREIGN KEY ("responsibleId") REFERENCES "responsibles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."students" DROP CONSTRAINT "FK_6639474808b15d5b6335d5cf1d4"`);
        await queryRunner.query(`ALTER TABLE "public"."students" DROP COLUMN "responsibleId"`);
        await queryRunner.query(`ALTER TABLE "public"."responsibles" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."responsibles" ADD CONSTRAINT "REL_36a529fd41339deb9f00b48f72" UNIQUE ("studentId")`);
        await queryRunner.query(`ALTER TABLE "public"."responsibles" ADD CONSTRAINT "FK_36a529fd41339deb9f00b48f724" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
