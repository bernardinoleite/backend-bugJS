import { Router } from "express";
import { createUserController } from "../modules/account/useCases/createUser";
import { authenticateUserController } from "../modules/account/useCases/authenticateUser";
import { updateUserController } from "../modules/account/useCases/updateUser";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { deleteUserController } from "../modules/account/useCases/deleteUser";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { updateUserAvatarController } from "../modules/account/useCases/updateUserAvatar";

const usersRouter = Router()

import multer = require("multer");
import upload from "../shared/config/multer";

const uploadMulter = multer(upload.upload("./static/avatar"))

usersRouter.post("/", (request, response) => {
    createUserController.handle(request, response)
})

usersRouter.put("/me", ensureAuthenticated, (request, response) => {
    updateUserController.handle(request, response)
})

usersRouter.patch("/me/avatar", ensureAuthenticated, uploadMulter.single("avatar"), (request, response) => {
    updateUserAvatarController.handle(request, response)
})

usersRouter.delete("/:id", ensureAuthenticated, adminMiddleware, (request, response) => {
    deleteUserController.handle(request, response)
})

usersRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

export {
    usersRouter
}