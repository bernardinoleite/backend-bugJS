

import { PostRepository } from "../../repositories/implementations/PostRepository";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import { UpdatePostController } from "./UpdatePostController";


const postRepository = new PostRepository()
const updatePostUseCase = new UpdatePostUseCase(postRepository)
const updatePostController = new UpdatePostController(updatePostUseCase)


export {
    updatePostController
}