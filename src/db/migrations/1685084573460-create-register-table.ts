import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRegisterTable1685084573460 implements MigrationInterface {
    name = 'CreateRegisterTable1685084573460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Register" ("ID" SERIAL NOT NULL, "CompanyUEN" character varying NOT NULL, "CompanyName" character varying NOT NULL, "CompanyPosition" character varying NOT NULL, "FullName" character varying NOT NULL, "Email" character varying NOT NULL, "PhoneNumber" character varying NOT NULL, "DocumentPathList" jsonb, CONSTRAINT "PK_2f3208f97c74bd6e5676cd5ac46" PRIMARY KEY ("ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Register"`);
    }

}
