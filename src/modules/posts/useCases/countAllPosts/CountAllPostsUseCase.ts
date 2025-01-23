import { PostRepository } from "../../repositories/implementations/PostRepository";
import { IPostRepository } from "../../repositories/IPostRepository";



export class CountAllPostsUseCase {


    constructor(private postRepository: IPostRepository) {

    }

    async execute(): Promise<Number> {
        const postsCounted = await this.postRepository.countPosts()
        return postsCounted
    }
}