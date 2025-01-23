import { Router } from "express"
import { createPostController } from "../modules/posts/useCases/createPost"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { listAllPostsController } from "../modules/posts/useCases/listAllPosts"
import { findPostByErrorController } from "../modules/posts/useCases/findPostByError"
import { countAllPostsController } from "../modules/posts/useCases/countAllPosts"
import { adminMiddleware } from "../middlewares/adminMiddleware"
import { deletePostController } from "../modules/posts/useCases/deletePost"
import { updatePostController } from "../modules/posts/useCases/updatePost"

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
postRouter.get("/count", ensureAuthenticated, adminMiddleware, (request, response) => {
    countAllPostsController.handle(request, response)
})

postRouter.delete("/:id", ensureAuthenticated, (request, response) => {
    deletePostController.handle(request, response)
})
postRouter.put("/", ensureAuthenticated, (request, response) => {
    updatePostController.handle(request, response)
})
export {
    postRouter
}
