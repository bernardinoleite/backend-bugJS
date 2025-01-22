import { PostRepository } from "../../repositories/implementations/PostRepository";
import { ListAllPostController } from "./ListAllPostsController";
import { ListAllPostsUseCase } from "./ListAllPostsUseCase";

const postRepository = new PostRepository()
const listAllPostsUseCase = new ListAllPostsUseCase(postRepository)
const listAllPostsController = new ListAllPostController(listAllPostsUseCase)

export {
    listAllPostsController
}