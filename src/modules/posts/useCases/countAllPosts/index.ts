
import { CountAllPostsUseCase } from "./CountAllPostsUseCase";
import { CountAllPostsController } from "./CountAllPostController";
import { PostRepository } from "../../repositories/implementations/PostRepository";

const postRepository = new PostRepository()
const countAllPostsUseCase = new CountAllPostsUseCase(postRepository)
const countAllPostsController = new CountAllPostsController(countAllPostsUseCase)

export {
    countAllPostsController
}