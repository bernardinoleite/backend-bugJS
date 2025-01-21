import { Router } from "express"
import { createPostController } from "../modules/posts/useCases/createPost"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const postRouter = Router()

postRouter.post("/", ensureAuthenticated, (request, response) => {
    createPostController.handle(request, response)
})



export {
    postRouter
}