import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";



const userRepository = new UserRepository()
const updateUserUseCase = new UpdateUserUseCase(userRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export {
    updateUserController
}