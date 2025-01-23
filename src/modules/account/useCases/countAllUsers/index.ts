

import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CountAllUserUseCase } from "./CountAllUserUseCase";
import { CountAllUserController } from "./CountAllUserController";

const userRepository = new UserRepository()
const countAllUserUseCase = new CountAllUserUseCase(userRepository)
const countAllUserController = new CountAllUserController(countAllUserUseCase)

export {
    countAllUserController
}