import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../../account/repositories/IUserRepository";
import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";



export class CreatePostUseCase {

    constructor(private postRepository: IPostRepository, private userRepository: IUserRepository) {

    }

    async execute({ id_user, error, code_error, description, file, solution }: ICreatePostDTO): Promise<Post> {

        const user = await this.userRepository.findById(id_user)

        if (!user) {
            throw new AppError("User does not exists")
        }

        const post = await this.postRepository.create({ id_user, error, code_error, description, file, solution })

        return post


    }
}