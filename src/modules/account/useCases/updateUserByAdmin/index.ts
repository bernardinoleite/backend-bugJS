import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UpdateUserByAdminUseCase } from "./UpdateUserByAdminUseCase";
import { UpdateUserByAdminController } from "./UpdateUserByAdminController";



const userRepository = new UserRepository()
const updateUserByAdminUseCase = new UpdateUserByAdminUseCase(userRepository)
const updateUserByAdminController = new UpdateUserByAdminController(updateUserByAdminUseCase)

export {
    updateUserByAdminController
}