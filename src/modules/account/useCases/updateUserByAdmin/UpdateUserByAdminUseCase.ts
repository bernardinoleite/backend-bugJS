import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IReturn {
    id?: string
    username: string
    avatar?: string
    email: string
    is_admin: boolean
    created_at: Date
}

export class UpdateUserByAdminUseCase {


    constructor(private userRepository: IUserRepository) {

    }

    async execute(user: IUpdateUserDTO): Promise<IReturn> {

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
        const { password, ...updateUserWithoutPassword } = updatedUser
        return updateUserWithoutPassword
    }
}