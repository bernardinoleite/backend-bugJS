import { isConstructorDeclaration } from "typescript";
import { IPostRepository } from "../../repositories/IPostRepository";
import { Post } from "../../entities/Post";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { AppError } from "../../../../shared/errors/AppError";



export class UpdatePostUseCase {
    constructor(private postRepository: IPostRepository) { }

    async execute({ id, error, id_user, code_error, description, file, solution }: ICreatePostDTO): Promise<Post> {


        const post = await this.postRepository.findPostById(id)

        if (!post) {
            throw new AppError("Post does not exists")
        }

        Object.assign(post, { id, error, id_user, code_error, description, file, solution })
        const postUpdated = await this.postRepository.create(post)

        return postUpdated
    }
}