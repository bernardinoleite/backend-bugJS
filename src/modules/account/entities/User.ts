import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { randomUUID as uuid } from "crypto"
import { Post } from "../../posts/entities/Post";
@Entity("users")
export class User {

    @PrimaryColumn()
    id?: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    avatar?: string

    @Column({ default: false })
    is_admin: boolean

    @CreateDateColumn()
    created_at: Date

    // Relacionamento: um usuário pode ter vários posts
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}