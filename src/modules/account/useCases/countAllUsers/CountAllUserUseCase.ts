import { IUserRepository } from "../../repositories/IUserRepository";


export class CountAllUserUseCase {

    constructor(private userRepository: IUserRepository) {

    }

    async execute(): Promise<Number> {
        const usersCounted = await this.userRepository.countUsers()
        return usersCounted
    }

}