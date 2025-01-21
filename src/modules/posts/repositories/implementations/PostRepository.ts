import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";
import { appDataSource } from "../../../../../ormConfig";
import { Repository } from "typeorm";

export class PostRepository implements IPostRepository {

    private repository: Repository<Post>
    constructor() {
        this.repository = appDataSource.getRepository(Post)
    }
    async create({ id_user, error, code_error, description, solution, file }: ICreatePostDTO): Promise<Post> {

        const post = this.repository.create({ id_user, error, code_error, description, solution, file })

        const postCreated = await this.repository.save(post)

        return postCreated
    }




}