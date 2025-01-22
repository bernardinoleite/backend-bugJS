import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { Repository } from "typeorm";
import { appDataSource } from "../../../../../ormConfig";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = appDataSource.getRepository(User)
    }

    async countUsers(): Promise<Number> {
        const usersCounted = await this.repository.count()
        return usersCounted
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async update(user: User): Promise<User> {

        const updatedUser = await this.repository.save(user)
        return updatedUser
    }

    async create({ username, email, password }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({ username, email, password })
        await this.repository.save(user)

    }

    async findByEmail(email: string): Promise<User> {

        const user = await this.repository.findOneBy({ email })
        return user

    }
    async findById(id: string): Promise<User> {

        const user = await this.repository.findOneBy({ id })
        return user

    }

}