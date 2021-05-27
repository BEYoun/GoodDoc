import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TableIndex } from "typeorm";

export class Profiles1610105499073 implements MigrationInterface {
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
            name: "username",
            type: "varchar",
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp",
          },
        ],
        name: "profiles",
      })
    );

    await queryRunner.createIndex(
      "profiles",
      new TableIndex({
        columnNames: ["username"],
        isUnique: true,
        name: "unique_username",
      })
    );
    await queryRunner.addColumn("profiles", new TableColumn({
        name: "cabinetId",
        length: "36",
        type: "char"
    }));
    await queryRunner.createForeignKey("profiles", new TableForeignKey({
        columnNames: ["cabinetId"],
        referencedColumnNames: ["id"],
        referencedTableName: "cabinets",
        onDelete: "CASCADE"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }
}
