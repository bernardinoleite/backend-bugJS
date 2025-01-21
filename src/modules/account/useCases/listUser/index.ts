import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const userRepository = new UserRepository()
const listUserUseCase = new ListUserUseCase(userRepository)
const listUserController = new ListUserController(listUserUseCase)

export {
    listUserController
}