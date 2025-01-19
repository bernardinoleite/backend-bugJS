import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { randomUUID as uuid } from "crypto"

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

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}