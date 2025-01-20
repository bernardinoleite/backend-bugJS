import { response, Router } from "express";
import { createUserController } from "../modules/account/useCases/createUser";
import { authenticateUserController } from "../modules/account/useCases/authenticateUser";
import { updateUserController } from "../modules/account/useCases/updateUser";
import { ensureAthenticated } from "../middlewares/ensureAthenticated";

const usersRouter = Router()

usersRouter.post("/teste", (request, response) => {
    response.json("Hello world")
})

usersRouter.post("/", (request, response) => {
    createUserController.handle(request, response)
})
usersRouter.put("/", ensureAthenticated, (request, response) => {
    updateUserController.handle(request, response)
})

usersRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

export {
    usersRouter
}