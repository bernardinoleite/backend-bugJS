import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"

import { User } from "../../account/entities/User"

import { randomUUID } from "crypto"

@Entity("posts")
export class Post {

    @PrimaryColumn()
    id?: string

    @Column({})
    id_user: string

    // cria uma relacao entre a tabela posts e a tabela users no Typeorm
    @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id_user" })
    user: User;


    // @ManyToOne → Indica que muitos posts pertencem a um único usuário
    // @JoinColumn → Especifica que esta relação está associada à coluna id_user na tabela posts

    // .Isso significa que a chave estrangeira (id_user) será usada para armazenar a referência ao usuário dono do post



    @Column()
    error: string

    @Column({ nullable: true })
    code_error?: string

    @Column({ nullable: true })
    description?: string

    @Column({ nullable: true })
    solution?: string

    @Column({ nullable: true })
    file?: string

    @CreateDateColumn()
    created_at?: Date

    constructor() {
        if (!this.id) {
            this.id = randomUUID()
        }
    }
}