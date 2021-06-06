import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TableIndex } from "typeorm";

export class Patients1610105499073 implements MigrationInterface {
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
            isNullable: true,
            length: "20",
            name: "cin",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "3",
            name: "sex",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "30",
            name: "firstName",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "30",
            name: "lastName",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "30",
            name: "email",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "50",
            name: "address",
            type: "varchar",
          },
          {
            default: 0,
            length: "15",
            name: "zipCode",
            type: "int",
          },
          {
            isNullable: true,
            length: "15",
            name: "assurance",
            type: "varchar",
          },
          {
            isNullable: true,
            name: "birthday",
            type: "date",
          },
          {
            isNullable: true,
            length: "25",
            name: "profession",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "25",
            name: "country",
            type: "varchar",
          },
          {
            isNullable: true,
            length: "25",
            name: "numberPhone",
            type: "varchar",
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp",
          },
        ],
        name: "patients",
      })
    );

    await queryRunner.createIndex(
      "patients",
      new TableIndex({
        columnNames: ["cin"],
        isUnique: true,
        name: "unique_cin",
      })
    );
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients");
  }
}
