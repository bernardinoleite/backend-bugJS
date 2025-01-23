import { Router } from "express";
import { createUserController } from "../modules/account/useCases/createUser";
import { authenticateUserController } from "../modules/account/useCases/authenticateUser";
import { updateUserController } from "../modules/account/useCases/updateUser";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { deleteUserByAdminController } from "../modules/account/useCases/deleteUserByAdmin";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { updateUserAvatarController } from "../modules/account/useCases/updateUserAvatar";
import { listUserController } from "../modules/account/useCases/listUser";
import multer = require("multer");
import upload from "../shared/config/multer";
import { updateUserByAdminController } from "../modules/account/useCases/updateUserByAdmin";
import { countAllUserController } from "../modules/account/useCases/countAllUsers";

const usersRouter = Router()

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

usersRouter.get("/me", ensureAuthenticated, (request, response) => {
    listUserController.handle(request, response)
})

usersRouter.delete("/:id", ensureAuthenticated, adminMiddleware, (request, response) => {
    deleteUserByAdminController.handle(request, response)
})

usersRouter.post("/auth", (request, response) => {
    authenticateUserController.handle(request, response)
})

usersRouter.put("/:id", ensureAuthenticated, adminMiddleware, (request, response) => {
    updateUserByAdminController.handle(request, response)
})
usersRouter.get("/count", ensureAuthenticated, adminMiddleware, (request, response) => {
    countAllUserController.handle(request, response)
})

export {
    usersRouter
}