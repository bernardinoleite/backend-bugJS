import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";



const userRepository = new UserRepository()
const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(userRepository)
const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase)

export {
    updateUserAvatarController
}