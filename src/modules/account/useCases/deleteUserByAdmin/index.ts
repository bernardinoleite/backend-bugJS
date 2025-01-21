import { UserRepository } from "../../repositories/implementations/UserRepository";
import { DeleteUserByAdminController } from "./DeleteUserByAdminController";
import { DeleteUserByAdminUseCase } from "./DeleteUserByAdminUseCase";

const userRepository = new UserRepository()
const deleteUserByAdminUseCase = new DeleteUserByAdminUseCase(userRepository)
const deleteUserByAdminController = new DeleteUserByAdminController(deleteUserByAdminUseCase)

export {
    deleteUserByAdminController
}