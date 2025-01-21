import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePost1737481711227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "posts",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "id_user",
                    type: "uuid"
                },
                {
                    name: "error",
                    type: "varchar",
                },
                {
                    name: "code_error",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "solution",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "file",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

        // Criando a chave estrangeira para id_user referenciando users(id)
        await queryRunner.createForeignKey("posts", new TableForeignKey({

            columnNames: ["id_user"], // Coluna na tabela posts
            referencedTableName: "users", // Tabela que está sendo referenciada
            referencedColumnNames: ["id"], // Coluna da tabela users que está sendo referenciada
            onDelete: "CASCADE" // Quando o usuário for deletado, seus posts serão excluídos também
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("posts", "id_user")// Deleta a chave estrangeira
        await queryRunner.dropTable("posts")
    }

}
