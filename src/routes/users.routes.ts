import { Router } from "express";
import { createUserController } from "../modules/account/useCases/createUser";
import { authenticateUserController } from "../modules/account/useCases/authenticateUser";

const usersRouter = Router()


usersRouter.post("/", (request, response) => {
    createUserController.handle(request, response)
})

usersRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

export {
    usersRouter
}