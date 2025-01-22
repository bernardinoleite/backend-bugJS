import { IFindPostByErrorDTO } from "../../dtos/IFindPostByErrorDTO";
import { Post } from "../../entities/Post";
import { PostRepository } from "../../repositories/implementations/PostRepository";


export class FindPostByErrorUseCase {
    constructor(private postRepository: PostRepository) {

    }

    async execute({ code_error, error }: IFindPostByErrorDTO): Promise<Post[]> {

        const post = await this.postRepository.findPostByError({ code_error, error })
        return post

    }
}