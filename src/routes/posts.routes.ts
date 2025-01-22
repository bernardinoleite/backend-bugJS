import { Router } from "express"
import { createPostController } from "../modules/posts/useCases/createPost"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { listAllPostsController } from "../modules/posts/useCases/listAllPosts"
import { findPostByErrorController } from "../modules/posts/useCases/findPostByError"

const postRouter = Router()

postRouter.post("/", ensureAuthenticated, (request, response) => {
    createPostController.handle(request, response)
})

postRouter.get("/", ensureAuthenticated, (request, response) => {
    listAllPostsController.handle(request, response)
})

postRouter.get("/search", ensureAuthenticated, (request, response) => {
    findPostByErrorController.handle(request, response)
})

export {
    postRouter
}