import { PostRepository } from "../../repositories/implementations/PostRepository";
import { DeletePostUseCase } from "./DeletePostUseCase";
import { DeletePostController } from "./DeletePostController";



const postRepository = new PostRepository()
const deletePostUseCase = new DeletePostUseCase(postRepository)
const deletePostController = new DeletePostController(deletePostUseCase)

export {
    deletePostController
}