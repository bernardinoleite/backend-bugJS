import { AppError } from "../../../../shared/errors/AppError";
import { UserRepository } from "../../repositories/implementations/UserRepository";


export class DeleteUserByAdminUseCase {
    constructor(private userRepository: UserRepository) {

    }

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new AppError("User does not exists")
        }

        await this.userRepository.delete(id)
    }
}