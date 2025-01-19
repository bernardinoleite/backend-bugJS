import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ username, email, password }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError("User Already Exists", 404)
        }
        const passwordHash = await hash(password, 8)
        await this.userRepository.create({ username, email, password: passwordHash })

    }
}