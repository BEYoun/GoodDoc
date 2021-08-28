import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class NewUsersTable1610195419973 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE users Change username email char(50)');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE users Change email username char(50)');
  }
}
