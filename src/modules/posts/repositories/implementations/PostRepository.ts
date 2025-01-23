import { ICreatePostDTO } from "../../dtos/ICreatePostDTO";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";
import { appDataSource } from "../../../../../ormConfig";
import { ILike, Repository } from "typeorm";
import { IFindPostByErrorDTO } from "../../dtos/IFindPostByErrorDTO";

export class PostRepository implements IPostRepository {

    private repository: Repository<Post>
    constructor() {
        this.repository = appDataSource.getRepository(Post)
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id })
    }
    async findPostById(id: string): Promise<Post> {
        const post = await this.repository.findOneBy({ id })
        return post
    }

    async countPosts(): Promise<Number> {
        const postsCounted = await this.repository.count()
        return postsCounted
    }

    async findPostByError({ error, code_error }: IFindPostByErrorDTO): Promise<Post[]> {

        const whereClause: any = {}

        if (error !== 'undefined') {
            whereClause.error = ILike(`%${error}%`)
        }

        if (code_error !== undefined) {
            whereClause.code_error = code_error
        }

        const posts = await this.repository.find({
            where: whereClause,
            relations: ["user"],
            order: { created_at: "DESC" }
        })
        // const posts = await this.repository.find({
        //     where: {
        //         error: ILike(`%${error}%`),
        //         code_error: code_error
        //     },
        //     relations: ["user"]
        //     ,
        //     order: { created_at: "DESC" }

        // })
        return posts
    }


    async listAllPosts(): Promise<Post[]> {
        const posts = await this.repository.find({ relations: ["user"] })
        return posts
    }

    async create(data: ICreatePostDTO): Promise<Post> {


        const post = this.repository.create(data)

        const postCreated = await this.repository.save(post)
        return postCreated

    }
}