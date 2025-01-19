import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from "./AuthenticateUserController";



const userRepository = new UserRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)


export {
    authenticateUserController
}