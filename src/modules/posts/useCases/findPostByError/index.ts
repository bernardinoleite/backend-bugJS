

import { PostRepository } from "../../repositories/implementations/PostRepository";
import { FindPostByErrorUseCase } from "./FindPostByErrorUseCase";
import { FindPostByErrorController } from "./FindPostByErrorController";


const postRepository = new PostRepository()
const findPostByErrorUseCase = new FindPostByErrorUseCase(postRepository)
const findPostByErrorController = new FindPostByErrorController(findPostByErrorUseCase)

export {
    findPostByErrorController
}