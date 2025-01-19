import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { Repository } from "typeorm";
import { appDataSource } from "../../../../../ormConfig";

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = appDataSource.getRepository(User)
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