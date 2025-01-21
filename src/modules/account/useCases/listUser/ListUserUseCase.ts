import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";


interface IReturn {
    id?: string
    username: string
    avatar?: string
    email: string
    is_admin: boolean
    created_at: Date
}
export class ListUserUseCase {

    constructor(private userRepository: IUserRepository) {

    }

    async execute(id: string): Promise<IReturn> {

        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new AppError("User does not exists")
        }
        // delete user.password  <--- essa é uma forma mas a que está a baixo é bem mais senior
        const { password, ...userWithouPassword } = user
        return userWithouPassword
    }
}