import { AppError } from "../../../../shared/errors/AppError";
import { IPostRepository } from "../../repositories/IPostRepository";



export class DeletePostUseCase {

    constructor(private postRepository: IPostRepository) { }

    async execute(id: string): Promise<void> {
        const post = await this.postRepository.findPostById(id)

        if (!post) {
            throw new AppError("Post does not exists")
        }

        await this.postRepository.delete(id)
    }

}