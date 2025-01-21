import { UserRepository } from "../../../account/repositories/implementations/UserRepository";
import { PostRepository } from "../../repositories/implementations/PostRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";



const postRepository = new PostRepository()
const userRepository = new UserRepository()
const createPostRepository = new CreatePostUseCase(postRepository, userRepository)
const createPostController = new CreatePostController(createPostRepository)

export {
    createPostController
}