import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Users1610105419073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            isPrimary: true,
            length: "36",
            name: "id",
            type: "char",
          },
          {
            length: "25",
            name: "name",
            type: "varchar",
          },
          {
            length: "20",
            name: "phone",
            type: "varchar",
          },
          {
            length: "25",
            name: "address",
            type: "varchar",
          },
          {
            name: "numberDoc",
            type: "int",
            default: 1,
          },
          {
            name: "numberAss",
            type: "int",
            default: 1,
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp",
          },
        ],
        name: "cabinets",
      })
    );

    await queryRunner.createIndex(
      "cabinets",
      new TableIndex({
        columnNames: ["name"],
        isUnique: true,
        name: "unique_name",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cabinets");
  }
}
