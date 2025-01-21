import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";


export class UpdateUserUseCase {

    constructor(private userRepository: IUserRepository) {

    }


    async execute(user: IUpdateUserDTO): Promise<User> {

        const userAlreadyExists = await this.userRepository.findById(user.id)

        if (!userAlreadyExists) {
            throw new AppError("User does not exists")
        }

        if (user.password) {
            const passwordHash = await hash(user.password, 8)
            user.password = passwordHash
        }
        Object.assign(userAlreadyExists, user)

        const updatedUser = await this.userRepository.update(userAlreadyExists)

        return updatedUser
    }
}